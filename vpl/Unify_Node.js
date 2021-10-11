var { FirstAndLast } = require('./NodeUtils');
const { getThis } = require('../server/controllers/common.controller');
const { xmlToJson } = require('../utils/xml2json');
const { LoadScriptData } = require('./Node')
const Blockly = require('blockly');

async function unifyById(value) {
    return await unify(await findById(value));
}

async function findById(value) {
    const temp = await getThis(value, 'interaccion');
    return xmlToJson(Blockly.Xml.textToDom(temp.xml));
}

async function findByContent(value) {
    const temp = await getByContent(value, 'interaccion');
    return xmlToJson(Blockly.Xml.textToDom(temp.xml));
}

async function unifyByInt(value) {
    let clone = JSON.parse(JSON.stringify(value.data));
    return await unify(clone.node, clone.link);
}

async function unify(obj) {
    let nodes = [];
    if(!!obj.block) {
        let temp = obj.block;
        let node = { key: temp["@attributes"].id, type: temp["@attributes"].type }
        switch (temp["@attributes"].type) {
            case "controls_repeat_ext":
                node.type = 'for';
                node['iteraciones'] = parseInt(temp.value.shadow.field['#text']);
                node['first'] = temp.statement.block["@attributes"].id;
                break;
            case "led":
                node['anim'] = temp.field['#text'];
                break;
            case "mov":
                node['mov'] = parseInt(temp.field['#text']);
                break;
            case "record":
            case "wait":
                node['time'] = parseInt(temp.field['#text']);
                break;
            case "sound":
                node['src'] = temp.field[0]['#text'];
                node['wait'] = temp.field[1]['#text'] == 'TRUE';
                if (!!temp.statement) {
                    node['anim'] = temp.statement.block.field['#text'];
                }
                break;
            case "script":
                node['sc'] = temp.field[0]['#text'];
                node['random'] = temp.field[1]['#text'] == 'TRUE';
                node['order'] = temp.field[2]['#text'];
                node['unique'] = temp.field[3]['#text'];
                node['remove'] = temp.field[4]['#text'] == 'TRUE';
                node['data'] = await LoadScriptData(node);
                break;
            case "speak":
                node['text'] = temp.field['#text'];
                break;
            case "speak_combine":
                node = { ...node, type: 'speak', text: '' };
                let subText = temp.value;
                while (!!subText.block) {
                    if (subText.block['@attributes'].type == 'speak_text') {
                        node.text += ` ${ subText.block.field['#text'] }`;
                    } else if (subText.block['@attributes'].type == 'speak_var') {
                        node.text += ` #${subText.block.field['#text']}`;
                    } else if (subText.block['@attributes'].type == 'speak_script') {
                        node.text += ` %${subText.block.field['#text']}`;
                    }
                    subText = subText.block.value || {};
                }
                node.text = node.text.trim();
                break;
            case "variables_set":
                node = { ...node, type: 'counter', count: temp.field['#text'] };
                if (temp.value.block['@attributes'].type == 'math_arithmetic') {
                    node['ops'] = temp.value.block.field['#text'];
                    let valueBlock = temp.value.block.value;
                    node['first'] = (!!valueBlock[0].block ? valueBlock[0].block.field['#text'] : valueBlock[0].shadow.field['#text']);
                    node['second'] = (!!valueBlock[1].block ? valueBlock[1].block.field['#text'] : valueBlock[1].shadow.field['#text']);
                } else {
                    node = { ...node, ops: 'assign', value: temp.value.block.field['#text'] };
                }
                console.log(node);
                break;
            case "voice":
                node['voice'] = temp.field[0]['#text'];
                node['translate'] = temp.field[1]['#text'] == 'TRUE';
                node['sourcelang'] = temp.field[2]['#text'];
            default:
                break;
        }
        if(!!temp.next) {
            if (temp.next.block['@attributes'].type == 'int') {
                temp.next = await findById(temp.next.block.field['#text']);
            }
            node['next'] = temp.next.block['@attributes'].id;
        }
        nodes.push(node);
        if(!!node.first && node.type == 'for') {
            nodes.push(...(await unify(temp.statement)));
        }
        if(!!node.next) {
            nodes.push(...(await unify(temp.next)));
        }
    }
    return nodes;
}

module.exports = {
    unifyById,
    unifyByInt,
    unify
};