System.register([], function (exports_1, context_1) {
    "use strict";
    var QuestionPick;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            QuestionPick = class QuestionPick {
                constructor() { }
                answerCount(arr) {
                    /*var answersObjectString = dataStore.lookup(word);
                    var answersObject = JSON.parse ( answersObjectString );
                    var answersArray = answersObject.userAnswer;*/
                    var answersArray = arr;
                    var trueCount = 0;
                    var falseCount = 0;
                    for (var i = 0; i < answersArray.length; i++) {
                        if (answersArray[i] == "doğru")
                            trueCount++;
                        //if( answersArray[i] == "yanlış" )
                        else
                            falseCount++;
                    }
                    //document.write( "Doğru sayısı: " + trueCount + " , " + "Yanlış sayısı: " + falseCount );
                    return falseCount;
                }
                falseCounter(dataStore) {
                    var falseArray = [];
                    for (var i = 0; i < dataStore.getSize(); i++) {
                        var answersObjectString = dataStore.lookupInt(i);
                        var answersObject = JSON.parse(answersObjectString);
                        var answersArray = answersObject.userAnswer;
                        var falseCount = this.answerCount(answersArray);
                        falseArray.push(falseCount);
                    }
                    return falseArray;
                }
            };
            exports_1("default", QuestionPick);
        }
    };
});
