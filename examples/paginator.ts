interface Paginator {
    limit: number
    start: number
}

const next = (p: Paginator, total?: number) => {    
    if(p.limit === total || total === undefined) p.start += p.limit 
}

const hasNext = (p: Paginator, total?: number):boolean =>  {
    return total >= p.limit || total === undefined
}

const prev = (p: Paginator) => {
    p.start -= p.limit
    if (p.start < 0) p.start == 0
}

const hasPrev = (p: Paginator) => {
    return p.start > 0
}

const setLimit = (p: Paginator, limit: number) => {
    p.limit = limit
}

function Test() {
    let page: Paginator = {
        limit: 10,
        start: 0,
    }

    console.log(page, hasPrev(page), hasNext(page, 10))
    next(page, 10)
    console.log(page, hasPrev(page), hasNext(page, 10))
    next(page, 10)
    console.log(page, hasPrev(page), hasNext(page, 10))
    next(page, 5)
    console.log(page, hasPrev(page), hasNext(page, 5))
    prev(page)
    console.log(page, hasPrev(page), hasNext(page, 10))
}

Test()