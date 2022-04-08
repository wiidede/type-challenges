type MyExclude<T, U> = T extends U ? never : T
// type MyExclude<T, U> = Exclude<T, U>

type t1 = '1' | '2'
type t2 = '1'

type r = MyExclude<t1, t2>
