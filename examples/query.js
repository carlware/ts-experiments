var Agregator = function (key, value) {
    return function () {
        if (value)
            return key + "=" + value;
        return "";
    };
};
var QueryBuiler = function (params) {
    var query = "";
    for (var _i = 0, _a = Object.keys(params); _i < _a.length; _i++) {
        var key = _a[_i];
        if (query !== "")
            query += "&";
        if (params[key] !== undefined && params[key] !== null)
            query += key + "=" + params[key];
    }
    return query;
};
var Params = {
    a: 1,
    b: 2,
    f: 'f'
};
console.log(QueryBuiler(Params));
