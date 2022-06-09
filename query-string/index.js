const {parseUrl, stringifyUrl} = require('query-string')

// const a = 'time://xxxx?aaa='

// const b = stringifyUrl({url: a, query: {foo: 'bar'}})
// const c = stringifyUrl({url: a}, {skipEmptyString: true})

// console.log(b)
// console.log(c)


// const d = parseUrl('https://github.com/sindresorhus/query-string?a=123123')

// console.log(d.query.b)


const e = stringifyUrl({url: 'https://github.com/?', query: {'a': '123'}})
console.log(e)

const f = stringifyUrl({ url: 'https://github.com/?a=', query: {'a': '123'}})
console.log(f)

const g = stringifyUrl({ url: 'https://github.com/?a=000', query: {'a': '123'}})
console.log(g)

const h = stringifyUrl({ url: 'https://github.com/?a=000', query: {'a': ''}})
console.log(h)

const i = stringifyUrl({ url: 'https://github.com/?a=000&b=123123', query: {'a': undefined, 'b': '123'}})
console.log(i)


const j = stringifyUrl({ url: 'https://github.com/?a=000&b=123123', query: {'a': null}})
console.log(j)


const k = stringifyUrl({ url: 'https://github.com/?a=000&b=123', query: {'a': {}}})
console.log(k)

const l = stringifyUrl({ url: 'https://github.com/?a=000&b=123', query: {'redirect': 'https://github.com/?a=000&b=123'}})
console.log(l)

console.log(encodeURIComponent('https://github.com/?a=000&b=123'))

const m = parseUrl(l)
console.log(m)




