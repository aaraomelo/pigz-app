const required = (value, active) => !!value || !active;
const pattern = (value, expression) => (new RegExp(expression)).test(value);

export default Object.assign({}, {
  required,
  pattern,
});
