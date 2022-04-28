type BuildArr<num extends number, ele = unknown, arr extends unknown[] = []> =
    arr['length'] extends num ?
    arr : BuildArr<num, ele, [...arr, ele]>

type Add<num1 extends number, num2 extends number> =
    [...BuildArr<num1>, ...BuildArr<num2>]['length']


type Subtract<num1 extends number, num2 extends number> =
    [...BuildArr<num1>] extends [...BuildArr<num2>, ...infer Rest]
    ? Rest['length'] : never;

type Mutiply<num1 extends number,
    num2 extends number,
    ResultArr extends unknown[] = []
    > =
    num2 extends 0
    ? ResultArr['length']
    : Mutiply<num1, Subtract<num2, 1>, [...BuildArr<num1>, ...ResultArr]>

type Divide<
    Num1 extends number,
    Num2 extends number,
    CountArr extends unknown[] = []
    > = Num1 extends 0 ? CountArr['length']
    : Divide<Subtract<Num1, Num2>, Num2, [unknown, ...CountArr]>;
type AddResult = [
    Add<32, 25>,
    Subtract<3, 2>
];
