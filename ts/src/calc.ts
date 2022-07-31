export {}

// type First<Tuple extends unknown[]> = Tuple extends [infer T,...infer R] ? T : never;

// type res = First<[1,2,3]>;


// 1 ?
type isTwo<T> = T extends 2 ? true: false

type res = isTwo<1>
type res2 = isTwo<2>

// 2 or
type Or = 1 | 2 | 3
const or: Or = 3

// 3 and
type Obj = {a: number } & {c: boolean}
const obj: Obj = {a: 1, c: true}
