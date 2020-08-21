type Query = string

const QueryBuiler = (params: object) : Query => {
    let query: Query = ""
    for (let key of Object.keys(params)) {
        if (query !== "" ) query += "&"
        if(params[key] !== undefined && params[key] !== null) query += `${key}=${params[key]}`
    }
    return query
}

const Params = {
    a: 1,
    b: 2,
    f: 'f',
}

console.log(QueryBuiler(Params))