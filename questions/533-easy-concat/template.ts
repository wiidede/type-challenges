type Concat<T extends any[], U extends any[]> = [...T, ...U]

// homework: complete first and tail

type FirstElement<T extends unknown[]> = T extends [infer F, ...infer _] ? F : never
type a533 = FirstElement<['a', true]>
type b533 = FirstElement<[true]>
type c533 = FirstElement<['b', true, 'a']>
type d533 = FirstElement<[]>
type e533 = FirstElement<[null]>

type TailElement<T extends unknown[]> = T extends [...infer _, infer R] ? R : never
type f533 = TailElement<['a', true]>
type g533 = TailElement<[true]>
type h533 = TailElement<['b', true, 'a']>
type i533 = TailElement<[]>
type j533 = TailElement<[null]>
