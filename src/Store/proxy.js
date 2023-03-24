export const proxySchema = (obj, pointer) => {
  return new Proxy(obj, {
    get: (target, p) => {
      try {
        return pointer
          .split('.')
          .slice(1)
          .reduce((acumulador, valorAtual) => acumulador[valorAtual], target)[p];
      } catch {
        return false
      }
    },
    set: (target, p, newValue) => {
      try {
        pointer
          .split('.')
          .slice(1)
          .reduce((acumulador, valorAtual, index, array) => {
            if (index === (array.length - 1)) {
              acumulador[valorAtual][p] = newValue;
            };
            return acumulador[valorAtual]
          }, target)
        return true
      } catch {
        return false
      }
    }
  })
};
