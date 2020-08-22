var QueryBuiler = function (exclusion) {
    if (exclusion === void 0) { exclusion = []; }
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    var query = "";
    for (var _a = 0, objects_1 = objects; _a < objects_1.length; _a++) {
        var obj = objects_1[_a];
        for (var _b = 0, _c = Object.keys(obj); _b < _c.length; _b++) {
            var key = _c[_b];
            if (query !== "")
                query += "&";
            if (obj[key] !== undefined &&
                obj[key] !== null &&
                obj[key] !== '' &&
                exclusion.indexOf(key) === -1)
                query += key + "=" + obj[key];
        }
    }
    return query;
};
var Params = {
    a: 1,
    b: 2,
    f: 'f'
};
var Pagination = {
    start: 10,
    limit: 10
};
console.log(QueryBuiler([], Params, Pagination));
console.log(['x'].indexOf('x') !== -1);
