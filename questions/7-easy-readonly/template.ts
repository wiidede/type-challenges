type MyReadonly<T> = {
  readonly [S in keyof T]: T[S]
}
