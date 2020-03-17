System.register([], function (exports_1, context_1) {
    "use strict";
    var DataStore;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            DataStore = class DataStore {
                constructor(storage) {
                    this.storage = storage;
                }
                addNewWord(word, meanings) {
                    //this.storage.setItem(word, meanings.join('#:#'));
                    this.storage.setItem(word, meanings);
                }
                lookup(word) {
                    var row = this.storage.getItem(word);
                    if (!row)
                        throw 'Word not fould!';
                    return row;
                    //return row.split('#:#');
                }
                lookupInt(index) {
                    var row = this.storage.key(index);
                    if (!row)
                        throw 'Word not fould!';
                    return row;
                }
                getSize() {
                    return this.storage.length;
                }
                getWord() {
                    var random = Math.round(Math.random() * (localStorage.length - 2));
                    return localStorage.key(random);
                }
            };
            exports_1("default", DataStore);
        }
    };
});
