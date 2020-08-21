var next = function (p, total) {
    if (p.limit === total || total === undefined)
        p.start += p.limit;
};
var hasNext = function (p, total) {
    return total >= p.limit || total === undefined;
};
var prev = function (p) {
    p.start -= p.limit;
    if (p.start < 0)
        p.start == 0;
};
var hasPrev = function (p) {
    return p.start > 0;
};
var setLimit = function (p, limit) {
    p.limit = limit;
};
function Test() {
    var page = {
        limit: 10,
        start: 0
    };
    console.log(page, hasPrev(page), hasNext(page, 10));
    next(page, 10);
    console.log(page, hasPrev(page), hasNext(page, 10));
    next(page, 10);
    console.log(page, hasPrev(page), hasNext(page, 10));
    next(page, 5);
    console.log(page, hasPrev(page), hasNext(page, 5));
    prev(page);
    console.log(page, hasPrev(page), hasNext(page, 10));
}
Test();
