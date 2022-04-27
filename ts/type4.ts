type BuildArr<num extends number,ele=unknown,arr extends unknown[]=[]>=
    arr['length'] extends num ? 
        arr : BuildArr<num,ele,[...arr,ele]>

type Add<num1 extends number,num2 extends number>=
    [...BuildArr<num1>,...BuildArr<num2>]['length']


type Subtract<num1 extends number,num2 extends number>=
    [...BuildArr<num1>] extends [...BuildArr<num2>,...infer Rest]
    ? Rest['length'] : never


type AddResult = [
    Add<32, 25>,
    Subtract<3,2>
];
