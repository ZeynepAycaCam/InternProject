System.register(["./App/App", "./DataStore/DataStore", "./Speech/Speech", "./TextToSpeech/TextToSpeech", "./Comparator/Comparator", "./QuestionPick/QuestionPick"], function (exports_1, context_1) {
    "use strict";
    var App_1, DataStore_1, Speech_1, TextToSpeech_1, Comparator_1, QuestionPick_1, entry, dataStore, speechRec, speechSyn, comparator, questionPick, app;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (App_1_1) {
                App_1 = App_1_1;
            },
            function (DataStore_1_1) {
                DataStore_1 = DataStore_1_1;
            },
            function (Speech_1_1) {
                Speech_1 = Speech_1_1;
            },
            function (TextToSpeech_1_1) {
                TextToSpeech_1 = TextToSpeech_1_1;
            },
            function (Comparator_1_1) {
                Comparator_1 = Comparator_1_1;
            },
            function (QuestionPick_1_1) {
                QuestionPick_1 = QuestionPick_1_1;
            }
        ],
        execute: function () {
            entry = document.getElementById('app');
            if (entry == null)
                throw 'Entry not found';
            dataStore = new DataStore_1.default(localStorage);
            //var dataStore2 = new DataStore(localStorage);
            speechRec = new Speech_1.default();
            speechSyn = new TextToSpeech_1.default();
            comparator = new Comparator_1.default();
            questionPick = new QuestionPick_1.default();
            app = new App_1.default(entry, dataStore, speechRec, speechSyn, comparator, questionPick);
            app.render();
        }
    };
});
