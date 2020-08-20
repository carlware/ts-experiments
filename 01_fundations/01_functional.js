var add = function (a, b) { return a + b; };
var addMany = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(add, 0);
};
var div = function (a, b) { return a / b; };
var mapProp = function (k, arr) { return arr.map(function (a) { return a[k]; }); };
var avg = function (arr) { return div(addMany.apply(void 0, arr), arr.length); };
var results = [
    { id: 1, result: 64 },
    { id: 2, result: 87 },
    { id: 3, result: 89 }
];
var resultsAvg = avg(mapProp("result", results));
console.log(resultsAvg);
