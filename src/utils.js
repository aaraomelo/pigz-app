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
