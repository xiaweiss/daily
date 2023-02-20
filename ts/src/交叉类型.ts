function extend<T extends object, U extends object>(first: T, second: U): T & U {
  const result = <T & U>{};
  for (let id in first) {
    (<T>result)[id] = first[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<U>result)[id] = second[id];
    }
  }

  return result;
}

const x = extend({ a: 'hello' }, { b: 42 });

// 现在 x 拥有了 a 属性与 b 属性
const a = x.a;
const b = x.b;

const y : {a?: string} & {b?: number} & {c?: boolean} = {}

y.a = '1234'
y.b = 123
y.c = true
