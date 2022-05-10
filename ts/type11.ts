type KebabCaseToCamelCase<Str extends string> =
  Str extends `${infer Item}-${infer Rest}`
  ? `${Item}${KebabCaseToCamelCase<Capitalize<Rest>>}`
  : Str;

type CamelCaseToKebabCase<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? First extends Lowercase<First>
      ?`${First}${CamelCaseToKebabCase<Rest>}`
      :`-${Lowercase<First>}${CamelCaseToKebabCase<Rest>}`
    : Str

type cameres = CamelCaseToKebabCase<'GuGuiPepesi'>
  
function kebabCaseToCamelCase<Str extends string>(str: Str): KebabCaseToCamelCase<Str> {
  let arr = str.split('-')
  let res = arr[0]
  for (let i = 1; i < arr.length; i++) {
    let w = arr[i];
    let neww = ''
    for (let j = 0; j < w.length; j++) {
      if (j == 0) neww += w[j].toUpperCase()
      else neww += w[j]
    }
    res += neww
  }
  return res as any
}
let caseres = kebabCaseToCamelCase('gu-guil-pepsi')
