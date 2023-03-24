export function filterSchema(schema, target) {
  return Object
    .keys(schema)
    .filter((key) => target(key))
    .reduce((form, key) => Object.assign(form, {
      [key]: schema[key]
    }), {});
}