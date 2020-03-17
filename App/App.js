System.register([], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var App;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            App = class App {
                constructor(appElement, dataStore, speechRecognation, speechSyn, comparator, questionPick) {
                    this.appElement = appElement;
                    this.dataStore = dataStore;
                    this.speechRecognation = speechRecognation;
                    this.speechSyn = speechSyn;
                    this.comparator = comparator;
                    this.questionPick = questionPick;
                }
                save() {
                    this.appElement.querySelector('#save').addEventListener('click', e => {
                        var emptyArray = [];
                        /*var trueAnswerCount = 0;
                        var falseAnswerCount = 0;*/
                        var data = { meanings: this.appElement.querySelector('#meanings').value.split(','),
                            userAnswer: emptyArray /*,
                            trueCount: trueAnswerCount,
                            falseCount: falseAnswerCount*/
                        };
                        this.dataStore.addNewWord(this.appElement.querySelector('#word').value, JSON.stringify(data));
                    });
                }
                lookup() {
                    this.appElement.querySelector('#lookup').addEventListener('click', e => {
                        var stringfyObj = this.dataStore.lookup(this.appElement.querySelector('#word').value);
                        var object1 = JSON.parse(stringfyObj);
                        this.appElement.querySelector('#meanings').value = object1.meanings.join(',');
                    });
                }
                startRecording() {
                    this.appElement.querySelector('#recordStart').addEventListener('click', e => {
                        this.speechRecognation.startRecord();
                    });
                }
                stopRecording() {
                    this.appElement.querySelector('#recordStop').addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {
                        var message = yield this.speechRecognation.stopRecordAsync();
                        this.appElement.querySelector('#text').value = message;
                    }));
                }
                sayMessage() {
                    this.appElement.querySelector('#speak').addEventListener('click', e => {
                        var message = this.appElement.querySelector('#word').value;
                        this.speechSyn.speak(message);
                    });
                }
                checkAnswer() {
                    this.appElement.querySelector('#check').addEventListener('click', e => {
                        var str1 = this.appElement.querySelector('#text').value;
                        var str2 = this.dataStore.lookup(this.appElement.querySelector('#questionArea').value);
                        var object2 = JSON.parse(str2);
                        var answers = str1.split(' ');
                        var resultBool = this.comparator.compare(answers, object2.meanings);
                        var resultString;
                        if (resultBool)
                            resultString = "doğru";
                        else
                            resultString = "yanlış";
                        this.appElement.querySelector('#result').value = resultString;
                        var tmpstr = this.dataStore.lookup(this.appElement.querySelector('#questionArea').value);
                        var object3 = JSON.parse(tmpstr);
                        var tempArray = object3.userAnswer;
                        tempArray.push(resultString);
                        object3.userAnswer = tempArray;
                        var stringf = JSON.stringify(object3);
                        this.dataStore.addNewWord(this.appElement.querySelector('#questionArea').value, stringf);
                    });
                }
                getQuestion() {
                    var question = this.dataStore.getWord();
                    this.appElement.querySelector('#questionArea').value = question;
                    this.appElement.querySelector('#question').addEventListener('click', e => {
                        var question = this.dataStore.getWord();
                        this.appElement.querySelector('#questionArea').value = question;
                        this.appElement.querySelector('#test').value = '';
                        this.appElement.querySelector('#result').value = '';
                    });
                }
                getUserAnswers() {
                    this.appElement.querySelector('#getUserAnswers').addEventListener('click', e => {
                        var stringfyObj4 = this.dataStore.lookup(this.appElement.querySelector('#questionArea').value);
                        var object4 = JSON.parse(stringfyObj4);
                        this.appElement.querySelector('#userHistory').value = object4.userAnswer.toString();
                    });
                }
                questionPickTester() {
                    this.appElement.querySelector('#questionPick').addEventListener('click', e => {
                        var tempObj = this.dataStore.lookup(this.appElement.querySelector('#questionArea').value);
                        /*var temp = JSON.parse( tempObj );
                        var tempArr = temp.userAnswer;
                        this.questionPick.answerCount( tempArr );*/
                        var obj = this.questionPick.falseCounter(this.dataStore);
                        document.write(obj.toString());
                    });
                }
                render() {
                    this.appElement.innerHTML = `
      <h1>Test App!!!</h1>
      <input id="word" />
      <input id="meanings" />
      <button id="save">Save</button>
      <button id="lookup">Lookup</button>
      <button id="speak">Speak</button>
      <hr/>
      <input id="questionArea" />
      <input id="text" />
      <input id="result" />
      <input id="userHistory" />
      <button id="recordStart">Start Recording</button>
      <button id="recordStop">Stop Recording</button>
      <button id="check">Check Answer</button>
      <button id="question">Get Question</button>
      <button id="getUserAnswers">Get User Answers</button>
      <button id="questionPick">QuestionPickTest</button>
    `;
                    this.save();
                    this.lookup();
                    this.startRecording();
                    this.stopRecording();
                    this.sayMessage();
                    this.checkAnswer();
                    this.getQuestion();
                    this.getUserAnswers();
                    this.questionPickTester();
                }
            };
            exports_1("default", App);
        }
    };
});
