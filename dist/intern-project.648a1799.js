// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({7:[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var App = /** @class */function () {
    function App(appElement, dataStore, speechRecognation, speechSyn, comparator, questionPick) {
        this.appElement = appElement;
        this.dataStore = dataStore;
        this.speechRecognation = speechRecognation;
        this.speechSyn = speechSyn;
        this.comparator = comparator;
        this.questionPick = questionPick;
    }
    App.prototype.save = function () {
        var _this = this;
        this.appElement.querySelector('#save').addEventListener('click', function (e) {
            var emptyArray = [];
            var weightNum;
            var data = { word: _this.appElement.querySelector('#word').value,
                meanings: _this.appElement.querySelector('#meanings').value.split(','),
                userAnswer: emptyArray,
                weight: 3
            };
            _this.dataStore.addNewWord(_this.appElement.querySelector('#word').value, JSON.stringify(data));
        });
    };
    App.prototype.lookup = function () {
        var _this = this;
        this.appElement.querySelector('#lookup').addEventListener('click', function (e) {
            var stringfyObj = _this.dataStore.lookup(_this.appElement.querySelector('#word').value);
            var object1 = JSON.parse(stringfyObj);
            _this.appElement.querySelector('#meanings').value = object1.meanings.join(',');
        });
    };
    App.prototype.startRecording = function () {
        var _this = this;
        this.appElement.querySelector('#recordStart').addEventListener('click', function (e) {
            _this.speechRecognation.startRecord();
        });
    };
    App.prototype.stopRecording = function () {
        var _this = this;
        this.appElement.querySelector('#recordStop').addEventListener('click', function (e) {
            return __awaiter(_this, void 0, void 0, function () {
                var message;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4 /*yield*/, this.speechRecognation.stopRecordAsync()];
                        case 1:
                            message = _a.sent();
                            this.appElement.querySelector('#text').value = message;
                            return [2 /*return*/];
                    }
                });
            });
        });
    };
    App.prototype.sayMessage = function () {
        var _this = this;
        this.appElement.querySelector('#speak').addEventListener('click', function (e) {
            var message = _this.appElement.querySelector('#word').value;
            _this.speechSyn.speak(message);
        });
    };
    App.prototype.checkAnswer = function () {
        var _this = this;
        this.appElement.querySelector('#check').addEventListener('click', function (e) {
            var str1 = _this.appElement.querySelector('#text').value;
            var str2 = _this.dataStore.lookup(_this.appElement.querySelector('#questionArea').value);
            var object2 = JSON.parse(str2);
            var answers = str1.split(' ');
            var resultBool = _this.comparator.compare(answers, object2.meanings);
            var resultString;
            if (resultBool) resultString = "doğru";else resultString = "yanlış";
            _this.appElement.querySelector('#result').value = resultString;
            var tmpstr = _this.dataStore.lookup(_this.appElement.querySelector('#questionArea').value);
            var object3 = JSON.parse(tmpstr);
            var tempArray = object3.userAnswer;
            tempArray.push(resultString);
            var objectWeight = object3.weight;
            if (resultBool) objectWeight--;else objectWeight++;
            object3.weight = objectWeight;
            object3.userAnswer = tempArray;
            var stringf = JSON.stringify(object3);
            _this.dataStore.addNewWord(_this.appElement.querySelector('#questionArea').value, stringf);
        });
    };
    App.prototype.getQuestion = function () {
        var _this = this;
        var question = this.questionPick.getQuestion(this.dataStore);
        this.appElement.querySelector('#questionArea').value = question;
        this.appElement.querySelector('#question').addEventListener('click', function (e) {
            var question = _this.questionPick.getQuestion(_this.dataStore);
            _this.appElement.querySelector('#questionArea').value = question;
            _this.appElement.querySelector('#test').value = '';
            _this.appElement.querySelector('#result').value = '';
        });
    };
    App.prototype.getUserAnswers = function () {
        var _this = this;
        this.appElement.querySelector('#getUserAnswers').addEventListener('click', function (e) {
            var stringfyObj4 = _this.dataStore.lookup(_this.appElement.querySelector('#questionArea').value);
            var object4 = JSON.parse(stringfyObj4);
            _this.appElement.querySelector('#userHistory').value = object4.userAnswer.toString();
        });
    };
    App.prototype.questionPickTester = function () {
        var _this = this;
        this.appElement.querySelector('#questionPick').addEventListener('click', function (e) {
            var tempObj = _this.dataStore.lookup(_this.appElement.querySelector('#questionArea').value);
            /*var temp = JSON.parse( tempObj );
            var tempArr = temp.userAnswer;
            this.questionPick.answerCount( tempArr );*/
            /*var obj = this.questionPick.falseCounter(this.dataStore);
            document.write(obj.toString());*/
            /*var obj = this.questionPick.sortByWeight(this.dataStore);
            for(var i= 0; i< obj.length; i++){
              document.write(obj[i].weight + ",");
            }*/
            //this.questionPick.getQuestion(this.dataStore);
            _this.questionPick.prepare(_this.dataStore);
        });
    };
    App.prototype.render = function () {
        this.appElement.innerHTML = "\n      <h1>Test App!!!</h1>\n      <input id=\"word\" />\n      <input id=\"meanings\" />\n      <button id=\"save\">Save</button>\n      <button id=\"lookup\">Lookup</button>\n      <button id=\"speak\">Speak</button>\n      <hr/>\n      <input id=\"questionArea\" />\n      <input id=\"text\" />\n      <input id=\"result\" />\n      <input id=\"userHistory\" />\n      <button id=\"recordStart\">Start Recording</button>\n      <button id=\"recordStop\">Stop Recording</button>\n      <button id=\"check\">Check Answer</button>\n      <button id=\"question\">Get Question</button>\n      <button id=\"getUserAnswers\">Get User Answers</button>\n      <button id=\"questionPick\">QuestionPickTest</button>\n    ";
        this.save();
        this.lookup();
        this.startRecording();
        this.stopRecording();
        this.sayMessage();
        this.checkAnswer();
        //this.getQuestion();
        this.getUserAnswers();
        this.questionPickTester();
    };
    return App;
}();
exports["default"] = App;
},{}],8:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var DataStore = /** @class */function () {
    function DataStore(storage) {
        this.storage = storage;
    }
    DataStore.prototype.addNewWord = function (word, meanings) {
        //this.storage.setItem(word, meanings.join('#:#'));
        this.storage.setItem(word, meanings);
    };
    DataStore.prototype.lookup = function (word) {
        var row = this.storage.getItem(word);
        if (!row) throw 'Word not fould!';
        return row;
        //return row.split('#:#');
    };
    DataStore.prototype.lookupInt = function (index) {
        var row = this.storage.key(index);
        if (!row) throw 'Word not fould!';
        return row;
    };
    DataStore.prototype.getSize = function () {
        return this.storage.length;
    };
    DataStore.prototype.getWord = function () {
        var random = Math.round(Math.random() * (localStorage.length - 2));
        return localStorage.key(random);
    };
    return DataStore;
}();
exports["default"] = DataStore;
},{}],9:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Speech = /** @class */function () {
    function Speech() {
        var webkitSpeechRecognition = window.webkitSpeechRecognition;
        this.recognition = new webkitSpeechRecognition();
        this.recognition.continuous = true;
        //this.recognition.lang = 'en-US';
    }
    Speech.prototype.startRecord = function () {
        this.recognition.start();
    };
    Speech.prototype.stopRecordAsync = function () {
        var _this = this;
        var promise = new Promise(function (resolve) {
            _this.recognition.stop();
            _this.recognition.onresult = function (event) {
                var message = event.results[0][0].transcript;
                resolve(message);
            };
        });
        return promise;
    };
    return Speech;
}();
exports["default"] = Speech;
},{}],10:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var TextToSpeech = /** @class */function () {
    //talk: any;
    function TextToSpeech() {
        var SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;
        this.speech = new SpeechSynthesisUtterance();
        //const {SpeechSynthesis}: IWindow = <IWindow>window;
        //this.talk = new SpeechSynthesis();
        //document.write("asdads");
    }
    TextToSpeech.prototype.speak = function (message) {
        //document.write("asdads");
        this.speech.text = message;
        this.speech.volume = 1;
        this.speech.rate = 1;
        this.speech.pitch = 1;
        //this.speech.lang = 'en-US';
        //(window as any).talk.speak(this.speech);
        window.speechSynthesis.speak(this.speech);
    };
    return TextToSpeech;
}();
exports["default"] = TextToSpeech;
},{}],11:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Comparator = /** @class */function () {
    function Comparator() {}
    Comparator.prototype.compare = function (arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            arr1[i] = arr1[i].toLowerCase();
        }
        for (var i = 0; i < arr2.length; i++) {
            arr2[i] = arr2[i].toLowerCase();
        }
        var stringAnswer = arr1.toString();
        stringAnswer = stringAnswer.replace(/,/g, '');
        var flag = false;
        for (var i = 0; i < arr2.length; i++) {
            var str = arr2[i].replace(/\s/g, '');
            if (stringAnswer.indexOf(str) > -1) flag = true;
        }
        return flag;
    };
    return Comparator;
}();
exports["default"] = Comparator;
},{}],12:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var QuestionPick = /** @class */function () {
    function QuestionPick() {
        this.wordsArray == null;
        this.grup1 == null;
        this.grup2 == null;
        this.grup3 == null;
    }
    QuestionPick.prototype.answerCount = function (arr) {
        /*var answersObjectString = dataStore.lookup(word);
        var answersObject = JSON.parse ( answersObjectString );
        var answersArray = answersObject.userAnswer;*/
        var answersArray = arr;
        var trueCount = 0;
        var falseCount = 0;
        for (var i = 0; i < answersArray.length; i++) {
            if (answersArray[i] == "doğru") trueCount++;
            if (answersArray[i] == "yanlış")
                //else
                falseCount++;
        }
        //document.write( "Doğru sayısı: " + trueCount + " , " + "Yanlış sayısı: " + falseCount );
        return falseCount;
    };
    QuestionPick.prototype.falseCounter = function (dataStore) {
        var falseArray = [];
        for (var i = 1; i < dataStore.getSize(); i++) {
            var answersString = dataStore.lookupInt(i);
            var answersObjectString = dataStore.lookup(answersString);
            var answersObject = JSON.parse(answersObjectString);
            var answersArray = answersObject.userAnswer;
            var falseCount = this.answerCount(answersArray);
            falseArray.push(falseCount);
        }
        //document.write( falseArray.toString() + "//" );
        falseArray = falseArray.sort();
        return falseArray;
    };
    QuestionPick.prototype.prepare = function (dataStore) {
        for (var i = 1; i < dataStore.getSize(); i++) {
            var objString = dataStore.lookup(dataStore.lookupInt(i));
            document.write(objString);
            var obj = JSON.parse(objString);
            if (obj.weight >= 1 && obj.weight <= 3) {
                var str = JSON.stringify(obj);
                document.write(str);
                var num = this.wordsArray.length;
                document.write(num.toString());
                this.grup1.push(str);
            }
            //this.grup1.push(JSON.stringify(obj));
            if (obj.weight >= 4 && obj.weight <= 6) this.grup2.push(JSON.stringify(obj));
            if (obj.weight >= 7 && obj.weight <= 9) this.grup3.push(JSON.stringify(obj));
        }
        //var iterationCount = this.grup1.length + this.grup2.length + this.grup3.length;
        while (this.grup1.length > 0 || this.grup2.length > 0 || this.grup3.length > 0) {
            if (this.grup1 != null || this.grup1.length != null || this.grup1.length > 0) {
                var tmp = this.grup1.pop();
                this.wordsArray.push(tmp);
            }
            if (this.grup2 != null || this.grup2.length != null || this.grup2.length > 0) {
                var tmp = this.grup2.pop();
                this.wordsArray.push(tmp);
            }
            if (this.grup3 != null || this.grup3.length != null || this.grup3.length > 0) {
                var tmp = this.grup3.pop();
                this.wordsArray.push(tmp);
            }
        }
        document.write(this.wordsArray.toString());
    };
    QuestionPick.prototype.getQuestion = function (dataStore) {
        if (this.wordsArray == null || this.wordsArray.length == null || this.wordsArray.length <= 0) this.prepare(dataStore);
        var random = Math.round(Math.random() * (this.wordsArray.length - 1));
        var obj = this.wordsArray[random];
        //var question = dataStore.lookup(obj);
        var questionString = "";
        var answersObject = JSON.parse(obj);
        //document.write(answersObject.word);
        if (answersObject.weight == 0) {
            this.wordsArray.splice(random, 1);
            return this.getQuestion(dataStore);
        } else {
            questionString = answersObject.word;
            answersObject.weight--;
            var str = JSON.stringify(answersObject);
            this.wordsArray[random] = str;
            return questionString;
        }
        //document.write( this.wordsArray.toString() );
    };
    return QuestionPick;
}();
exports["default"] = QuestionPick;
},{}],4:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var App_1 = __importDefault(require("./App/App"));
var DataStore_1 = __importDefault(require("./DataStore/DataStore"));
var Speech_1 = __importDefault(require("./Speech/Speech"));
var TextToSpeech_1 = __importDefault(require("./TextToSpeech/TextToSpeech"));
var Comparator_1 = __importDefault(require("./Comparator/Comparator"));
var QuestionPick_1 = __importDefault(require("./QuestionPick/QuestionPick"));
var entry = document.getElementById('app');
if (entry == null) throw 'Entry not found';
var dataStore = new DataStore_1["default"](localStorage);
//var dataStore2 = new DataStore(localStorage);
var speechRec = new Speech_1["default"]();
var speechSyn = new TextToSpeech_1["default"]();
var comparator = new Comparator_1["default"]();
var questionPick = new QuestionPick_1["default"]();
var app = new App_1["default"](entry, dataStore, speechRec, speechSyn, comparator, questionPick);
app.render();
},{"./App/App":7,"./DataStore/DataStore":8,"./Speech/Speech":9,"./TextToSpeech/TextToSpeech":10,"./Comparator/Comparator":11,"./QuestionPick/QuestionPick":12}],9:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '65335' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[9,4], null)
//# sourceMappingURL=/intern-project.648a1799.map