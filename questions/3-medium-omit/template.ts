type MyOmit<T, K extends keyof T> = {
  [S in MyExclude<keyof T, K>]: T[S]
}
