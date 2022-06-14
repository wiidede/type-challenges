type MyReturnType<T> = T extends (...args: any) => infer P ? P : never
