var express = require('express');
var router = express.Router();
const nodes = require('../../vpl/VPL_Node');
const interaccion = require('../controllers/interaccion.controller');
const unify = require('../../vpl/Unify_Node');
const { ProcessFlow } = require('../../vpl/VPL_Process');
var { FirstsNodes } = require('../../vpl/NodeUtils');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/speak', async function (req, res) {
	await social.speak(req.query.speak);
	res.status(200).jsonp();
});

router.post('/nodes', async function (req, res) {
	await nodes.ProcessNode(req.body);
	res.status(200).jsonp();
});

router.get('/interaccion/iniciarInteraccion1', async function (req, res) {
	//console.log(await social.dialogflow('hola'));
	//console.log(social.listen());
	console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
	res.status(200).jsonp();
});

router.get('/interaccion/iniciaremocion', function (req, res) {
  let id = req.query.e;
	//sad
	if (id >= 1 && id <= 3) {
		social.emotions('sad', id - 1);
	}
	//anger
	if (id >= 4 && id <= 6) {
		social.emotions('anger', id - 4);
	}
	//joy
	if (id >= 7 && id <= 9) {
		social.emotions('joy', id - 7);
	}
	//ini
	if (id == 0) {
		social.emotions('ini', 0);
	}
	//exit
	if (id == 10) {
		social.emotions('exit', 0);
	}
	res.status(200).jsonp();
});

router.get('/interaccion/unified', async function (req, res) {
	const temp = await interaccion.getThis(req.query.id);
	let obj = await unify.unifyByInt(temp);
	await interaccion.createThis(temp.nombre + '_expandida', obj);
	res.status(200).jsonp();
});

router.get('/interaccion/audio', async function (req, res) {
	res.status(200).jsonp();
	console.log('./sonidos/' + req.query.id + '.wav');
	await social.play('./sonidos/' + req.query.id + '.wav');
});

router.get('/interaccion/iniciarInteracciong', async function (req, res) {
	res.status(200).jsonp();

	respuesta = [];
	counter = {};

	let obj = await unify.unifyById(req.query.id);
	var fnodes = FirstsNodes(obj.link, obj.node.slice());

	social.resetlog();
	await ProcessFlow(obj.node, obj.link, fnodes, 0);
	["respuesta", "sactual", "lemotion", "counter", "apidata", "iscript"].forEach(item => { delete global[item] });
	social.setConf({ attentionWord: 'Eva', name: 'Eva', voice: 'es-LA_SofiaV3Voice', ttsReconnect: true });
	social.savelogs('');
});

module.exports = router;
