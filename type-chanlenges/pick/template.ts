type MyPick<T, K> = 
  {
    [key in K as key extends keyof any ?key :never]:
      key extends keyof T? T[key]:never
  }
