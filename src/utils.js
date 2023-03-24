export function filterSchema(schema, target) {
  return Object
    .keys(schema)
    .filter((key) => target(key))
    .reduce((form, key) => Object.assign(form, {
      [key]: schema[key]
    }), {});
}

export function generateClassName(block, pointer) {
  return [
    ...new Set(
      pointer
        .split('.properties.')
        .slice(1)
        .reduce((acc, acv) =>
          `${acc} ${acc}-${acv}`,
          block
        ).split(' ')
    )
  ]
    .reduce((acc, acv) => `${acc} ${acv}`, '')
    .replace(` ${block} `, '')

}

export const numberNames = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
  'Twenty',
  'Twenty-one',
  'Twenty-two',
  'Twenty-three',
  'Twenty-four',
  'Twenty-five',
  'Twenty-six',
  'Twenty-seven',
  'Twenty-eight',
  'Twenty-nine',
  'Thirty',
]
