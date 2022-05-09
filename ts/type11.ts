type KebabCaseToCamelCase<Str extends string> =
  Str extends `${infer Item}-${infer Rest}`
  ? `${Item}${KebabCaseToCamelCase<Capitalize<Rest>>}`
  : Str;

function kebabCaseToCamelCase<Str extends string>(str: Str): KebabCaseToCamelCase<Str> {
  let arr = str.split('-')
  let res = arr[0] as any
  for (let i = 1; i < arr.length; i++) {
    let w = arr[i];
    let neww = ''
    for (let j = 0; j < w.length; j++) {
      if (j == 0) neww += w[j].toUpperCase()
      else neww += w[j]
    }
    res += neww
  }
  return res
}
let caseres = kebabCaseToCamelCase('gu-guil-pepsi')
