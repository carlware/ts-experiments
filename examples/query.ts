interface QueryField {
    key: string
    value?: string
}

type Query = string
type QueryString = () => string

const Agregator = (key:string, value?:string) : QueryString => {
    return (): string =>{
        if (value) return `${key}=${value}`
        return ""
    }
}

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

for (let key of Object.keys(Params)) {
    console.log(key, Params[key])
}