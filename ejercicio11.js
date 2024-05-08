// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

// pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(params) {
  let num = 0
  let string = 0
  let suma = 0;
  let promedio = 0;
  for (let i = 0; i < params.length; i++) {
    let element = params[i]
    if (typeof element === 'number') {
      num += element;
    } else if (typeof element === 'string') {
      string += element.length;
    }
  }
  suma = num + string;
  promedio = suma / params.length;
  return promedio
}

console.log(averageWord(mixedElements))
