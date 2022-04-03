type MyPick<T, K extends keyof T> = {
  [S in K]: T[S]
}
