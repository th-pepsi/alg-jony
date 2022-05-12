type Chunk<
    Arr extends unknown[], 
    ItemLen extends number, 
    CurItem extends unknown[] = [], 
    Res extends unknown[] = []
> = Arr extends [infer First,...infer Rest]?
      CurItem['length'] extends ItemLen ?
        Chunk<Rest,ItemLen,[First],[...Res,CurItem]>:
        Chunk<Rest,ItemLen,[...CurItem,First],Res>
      :[...Res,CurItem]

type chunkRes = Chunk<[1,2,3,4,5],2>


type TupleToNestedObject<Tuple extends unknown[],Value extends string> = 
    Tuple extends [infer First,...infer Rest] ?
        {
          [Key in First as Key extends keyof any ?Key :never] : 
            Rest extends unknown[]?
            TupleToNestedObject<Rest,Value>:
            Value
        }: Value

type TupleRes = TupleToNestedObject<['a','b','c'],'jony'>

type anyType = keyof any


interface Dong {
  name: string
  age: number
  address: string
}

type Copy<Obj extends Record<string, any>> = {
  [Key in keyof Obj]:Obj[Key]
}

type PartialObjectPropByKeys<
  Obj extends Record<string, any>,
  Key extends keyof any = keyof Obj
> = Copy<Partial<Pick<Obj,Extract<keyof Obj, Key>>> & Omit<Obj,Key>>;

type PartialObjectPropByKeysRes = PartialObjectPropByKeys<Dong, 'name' | 'age'>;

type OmitRes = Omit<Dong, 'name' | 'age'>;

type PickRes = Pick<Dong, 'name' | 'age'>;

type ExtractRes = Extract<keyof Dong, 'name' | 'age' | 'aaa'>;
