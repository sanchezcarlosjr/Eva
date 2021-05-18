const en = {
    TOOLBAR: {
        NAME: "Control Eva",
        INI: "Start",
        INTERACTION: "Interaction",
        SCRIPT: "Script",
        SCRIPTS: "Scripts",
        DATA: "Data",
        AUDIOS: "Audios",
        LANGUAGE: "Robot Languages",
        VOICE: "Voice",
        LISTEN: "Listen",
        LED: "Led",
        MOVEMENT: "Movement",
        WOO: "Wizard of Oz",
        CONFIG: "Configurations",
        SOCIAL_ROBOT: "Social Robot",
        SERVICES: "Services"
    },
    LANG: {
        MENU: "Idioma",
        ES: "Spanish",
        EN: "English",
        PR: "Portuguese"
    },
    DATATABLE: {
        SHOW: "Show",
        SEARCH: "Search",
        SHOWING: "Showing",
        TO: "to",
        OF: "of",
        ENTRIES: "entries",
        PREVIOUS: "Previous",
        NEXT: "Next",
    },
    AUDIO: {
        TITLE: "Audio List",
        FORMAT: "Format",
        DURATION: "Duration",
        ADD: "Add Audio",
        UPLOAD: "Drop files here or click to upload."
    },
    CLOUD: {
        TITLE: "Services",
        SERVICE: "Service",
        VAR: "Variable",
        VALUE: "Value",
        STATUS: "Status",
        EDIT: "Edit"
    },
    CONFIG: {
        TITLE: "Configuration",
        VOICE: "Voice",
        VOICELED: "Voice Animation",
        LISTEN: "Listen",
        LISTENLED: "Listen Animation",
        SPEAK_LISTEN: "Speak and Listen",
        LED_ANIM: "Led animation",
        MOV: "Movement",
        NOTIFY: {
            UPDATE: {
                SUCCESS: "The configuration has been applied successfully.",
                ERROR: "An error occurred while trying to apply settings."
            }
        }
    },
    CONTROL: {
        WARNING: "Beware",
        INTERACTIONS: "Interactions",
        EXPORT: "Export",
        CONTROL_SCRIPT: "Control Script",
        SCRIPTS: "Scripts"
    },
    INTERACTION: {
        TITLE: "List of Interactions",
        NODES: "Nodes",
        ADD_INT: "Add Interaction",
        IMPORT: "Import",
        IMPORT_INT: "Import Interaction",
        NODE: "Node",
        TYPE: "Type",
        DOWNLOAD: "Download",
        SAVE: "Save",
        UPDATE: "Update",
        UPDATE_FINISH: "Update and Finish",
        REFRESH: "Refresh",
        VOICE: "Voice",
        SPEAK: "Talk",
        LISTEN: "Listen",
        EMOTION: "Emotion",
        MOV: "Movement",
        LED: "Leds",
        SOUND: "Audio",
        FOR: "Cycle",
        IF: "Condition",
        IF_DESC: "Use #counter_name to compare against this.",
        WAIT: "Wait",
        INT: "Interaction",
        SCRIPT: "Script",
        SCRIPT_DESC: "This node includes the speak function, reading the first field of the element of the script that is running at that moment.",
        COUNTER: "Counter",
        COUNTER_OPTS: {
            VALUE: "Value",
            OPERATION: "Operation",
            SUM: "Sum",
            SUBTRACTION: "Subtraction",
            MULTIPLICATION: "Multiplication",
            DIVISION: "Division",
            ASSIGN: "Assign"
        },
        API: "Api Rest",
        DIALOGFLOW: "Dialogflow",
        TRANSLATE: "Translate",
        RANDOM: "Random",
        GROUP: "Group",
        NONE: "None",
        PREVIOUS: "Previous",
        SPEED: "Speed",
        LEVEL: "Level",
        ONLY_EYES: "Only Eyes",
        INCREMENTAL: "Incremental",
        DIALOGUE: "Dialogue",
        DIALOGUE_DESC: "Use '$' to include the last answer, '$1' to include the first and '$-1' to include the penultimate. Use '%' if you have a node type 'Script' before to include the 2nd field or '%1' to specify field 1. Use '/' to separate several sentences (the robot will only say one randomly). If you use a counter you can use #counter to include its value.",
        TEXT_TO_SPEAK: "Text to Say",
        SERVICE: "Service",
        LANGUAGE: "Language",
        GET: "Get",
        ALL: "All",
        TIME: "Time",
        TIME_TO_WAIT: "Time to wait in ms",
        ITERATIONS: "Iterations",
        ITERATIONS_DESC: "Use the value '-1' so that the iterations match the elements of the 'script'.",
        AMOUNT_ITERATIONS: "Amount of Iterations",
        COMPARISON: {
            LABEL: "Comparison",
            EXACT: "Exact",
            PHONETIC: "Phonetics",
            INCLUDE: "Includes",
            MATH: "Mathematics"
        },
        DEFAULT: "By default",
        API_REST: {
            VERSION: "Version",
            SERVER: "Server",
            QUERY: "Query",
            PORT: "Port"
        },
        PROYECT: "Proyect",
        PROYECT_NAME: "Proyect name",
        SOURCE: "Source language"
    },
    LED: {
        TITLE: "List of led animations",
        BASE: "Base Animation",
        MODAL: "Led Animations",
        COLOR: "Color",
        LED: "Led",
        NUM: "Num",
        TIME: "Time",
        MS: "Milliseconds",
        NOTIFY: {
            POST: {
                SUCCESS: "Led animation created correctly."
            },
            CLONE: {
                SUCCESS: "Led animation duplicated correctly."
            },
            UPDATE: {
                SUCCESS: "Led animation updated correctly."
            },
            DELETE: {
                SUCCESS: "Led animation removed successfully."
            }
        }
    },
    LISTEN: {
        TITLE: "Voice List",
        LANGUAGE: "Language",
        CODE: "Code"
    },
    MOVEMENT: {
        TITLE: "List of Movements",
        MODAL: "Movement",
        CODE: "Code",
        ACTIONS: "Actions",
        NOTIFY: {
            POST: {
                SUCCESS: "Movement created successfully."
            },
            UPDATE: {
                SUCCESS: "Movement updated successfully."
            },
            DELETE: {
                SUCCESS: "Movement removed successfully."
            }
        }
    },
    SCRIPT: {
        TITLE: "List of Scripts",
        MODAL: "Script",
        QTY: "Quantity"
    },
    SCRIPT_DATA: {
        TITLE: "Script Data",
        SCRIPT: "Script",
        FIELD: "Field"
    },
    VOICE: {
        TITLE: "Voice List",
        LANGUAGE: "Language",
        CODE: "Code",
        VOICE: "Voice"
    },
    WOO: {
        PHRASE: "Phrase",
        VOICE: "Voice",
        CUSTOM_PHRASE: "Custom Phrase",
        SEND: "Send",
        MOVEMENT: "Movement",
        WOO: "Wizard of Oz",
        COMMAND: "Command",
        SEQUENCE: "Sequence",
        SCRIPT_DATA: "Script Data",
        TYPE: "Type",
        DESCRIPTION: "Description",
        ORDER: "Order",
        SPEAK: "Talk",
        SOUND: "Sound",
        LED: "Led",
        TEXT: "Text",
        AUDIO: "Audio",
        NONE: "None",
        NOTIFY: {
            UPDATE: {
                SUCCESS: "Interaction successfully saved.",
                ERROR: "An error occurred while saving the interaction."
            }
        }
    },
    COMMON: {
        NAME: "Name",
        OPTIONS: "Options",
        CLOSE: "Close",
        SAVE: "Save",
        UPDATE: "Update",
        ADD: "Add",
        EDIT: "Edit"
    },
    EMOTION_TYPE: {
        NEUTRAL: "Neutral",
        JOY: "Joy",
        SURPRISE: "Surprise",
        SAD: "Sadness",
        ANGER: "Anger"
    }
}