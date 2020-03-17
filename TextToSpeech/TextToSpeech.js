System.register([], function (exports_1, context_1) {
    "use strict";
    var TextToSpeech;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TextToSpeech = class TextToSpeech {
                //talk: any;
                constructor() {
                    const { SpeechSynthesisUtterance } = window;
                    this.speech = new SpeechSynthesisUtterance();
                    //const {SpeechSynthesis}: IWindow = <IWindow>window;
                    //this.talk = new SpeechSynthesis();
                    //document.write("asdads");
                }
                speak(message) {
                    //document.write("asdads");
                    this.speech.text = message;
                    this.speech.volume = 1;
                    this.speech.rate = 1;
                    this.speech.pitch = 1;
                    //this.speech.lang = 'en-US';
                    //(window as any).talk.speak(this.speech);
                    window.speechSynthesis.speak(this.speech);
                }
            };
            exports_1("default", TextToSpeech);
        }
    };
});
