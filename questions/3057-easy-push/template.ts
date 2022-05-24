type Push<T extends unknown[], U> = Equals<TailElement<T>, U> extends true ? T : [...T, U]
