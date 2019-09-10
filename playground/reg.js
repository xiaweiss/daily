const reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g

let flag = reg.test('123@qq.com')
flag = reg.test('123@qq.com')


console.log(flag)