type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false
// type FirstElement<T extends unknown[]> = T extends [infer F, ...infer _] ? F : never
// type RestElement<T extends unknown[]> = T extends [infer _, ...infer R] ? R : never

// type Includes<T extends any[], U> = Equals<U, FirstElement<T>> extends true
//   ? true
//   : RestElement<T> extends never
//   ? false
//   : Includes<RestElement<T>, U>

// 看了课程后简化实现：
type Includes<T extends any[], U> = T extends [infer First, ...infer Rest]
  ? Equals<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false