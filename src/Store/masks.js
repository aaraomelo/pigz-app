function maskCNPJ(value) {
  var cnpj = value;
  cnpj = cnpj.replace(/\D/g, "")
  cnpj = cnpj.replace(/(\d{2})(\d)/, "$1.$2")
  cnpj = cnpj.replace(/(\d{3})(\d)/, "$1.$2")
  cnpj = cnpj.replace(/(\d{3})(\d)/, "$1/$2")
  cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2")
  return cnpj
}

function unmaskCNPJ(cpfinput) {
  var cpf = cpfinput.substring(0, 18).replace(/\D/g, '');
  return cpf
}

function maskCEP(value) {
  var cep = value.replace(/[^0-9]/g, '');
  cep = cep.substring(0, 8)
  cep = cep.replace(/(\d{5})(\d)/, "$1-$2")
  return cep
}

function unmaskCEP(value) {
  var cep = value.replace(/[^0-9]/g, '');
  return cep
}

function maskPhone(value) {
  var result = value;
  result = result.replace(/(\d{2})(\d)/, "($1) $2")
  result = result.replace(/(\d{5})(\d)/, "$1-$2")
  return result
}

function unmaskPhone(value) {
  var result = value.substring(0, 15).replace(/\D/g, '');
  result = result.replaceAll("(", "")
  result = result.replaceAll(")", "")
  result = result.replaceAll("-", "")
  return result
}

function maskCountryCode(value) {
  var code = value
    .substring(0, 3)
    .replace(/\D/g, '');
  return code.length ? `+${code}` : code;
}

function unmaskCountryCode(value) {
  var code = value
    .replace(/\D/g, '')
    .substring(0, 2);
  return code;
}

const defaultMask = (value) => value;

export const mask = Object.assign({}, {
  cnpj: maskCNPJ,
  cep: maskCEP,
  phone: maskPhone,
  countryCode: maskCountryCode,
  default: defaultMask,
});

export const unmask = Object.assign({}, {
  cnpj: unmaskCNPJ,
  cep: unmaskCEP,
  phone: unmaskPhone,
  countryCode: unmaskCountryCode,
  default: defaultMask,
});
