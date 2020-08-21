var Agregator = function (key, value) {
    return function () {
        if (value)
            return key + "=" + value;
        return "";
    };
};
var QueryBuiler = function () {
    var fields = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
    }
    var query = "";
    for (var _a = 0, fields_1 = fields; _a < fields_1.length; _a++) {
        var field = fields_1[_a];
        if (query !== "")
            query += "&";
        if (field.value)
            query += field.key + "=" + field.value;
    }
    return query;
};
var Params = {
    a: 1,
    b: 2,
    f: 'f'
};
for (var _i = 0, _a = Object.keys(Params); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key, Params[key]);
}
