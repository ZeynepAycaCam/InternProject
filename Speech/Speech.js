System.register([], function (exports_1, context_1) {
    "use strict";
    var Speech;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Speech = class Speech {
                constructor() {
                    const { webkitSpeechRecognition } = window;
                    this.recognition = new webkitSpeechRecognition();
                    this.recognition.continuous = true;
                    //this.recognition.lang = 'en-US';
                }
                startRecord() {
                    this.recognition.start();
                }
                stopRecordAsync() {
                    var promise = new Promise(resolve => {
                        this.recognition.stop();
                        this.recognition.onresult = function (event) {
                            var message = event.results[0][0].transcript;
                            resolve(message);
                        };
                    });
                    return promise;
                }
            };
            exports_1("default", Speech);
        }
    };
});
