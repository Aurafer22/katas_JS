// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]

function average(param) {
  let suma = 0
  let promedio = ''
  for (i = 0; i < param.length; i++) {
    suma += param[i]
    promedio = suma / param.length
  }
  return promedio
}

console.log(average(numbers))
