type Query = string

const QueryBuiler = (exclusion=[], ...objects: object[]) : Query => {
    let query: Query = ""
    for (let obj of objects) {
    for (let key of Object.keys(obj)) {
        if (query !== "" ) query += "&"
        if(obj[key] !== undefined && 
            obj[key] !== null && 
            obj[key] !== '' &&
            exclusion.indexOf(key) === -1) query += `${key}=${obj[key]}`
    }
    }
    return query
}

const Params = {
    a: 1,
    b: 2,
    f: 'f',
}

const Pagination = {
    start: 10,
    limit: 10,
}

console.log(QueryBuiler([],Params, Pagination))
console.log(['x'].indexOf('x') !== -1)