System.register([], function (exports_1, context_1) {
    "use strict";
    var Comparator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Comparator = class Comparator {
                constructor() { }
                compare(arr1, arr2) {
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
                        if (stringAnswer.indexOf(str) > -1)
                            flag = true;
                    }
                    return flag;
                }
            };
            exports_1("default", Comparator);
        }
    };
});
