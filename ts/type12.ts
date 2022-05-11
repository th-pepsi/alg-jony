type Chunk<
    Arr extends unknown[], 
    ItemLen extends number, 
    CurItem extends unknown[] = [], 
    Res extends unknown[] = []
> = Arr extends [infer First, ...infer Rest] ? 
          CurItem['length'] extends ItemLen ? 
            Chunk<Rest, ItemLen, [First], [...Res, CurItem]> :
            Chunk<Rest, ItemLen, [...CurItem, First], Res> 
    : [...Res, CurItem]
