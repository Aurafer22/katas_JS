// 1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
let multiplication = 10 * 5
console.log(multiplication)

const number1 = 10
const number2 = 5
console.log(number1 * number2)

function toMultiplicate(a, b) {
  return a * b
}
let resultado = toMultiplicate(10, 5)
console.log(resultado)

const toMultiplicate2 = (a, b) => a * b
const multi = toMultiplicate2(10, 5)
console.log(multi)

// 1.2 Divide 10 por 2 y muestra el resultado en un console.

let division = 10 / 2
console.log(division)

let num1 = 10
let num2 = 2
console.log(num1 / num2)

function toDivider(a, b) {
  return a / b
}
const divider = toDivider(10, 2)
console.log(divider)

const toDivider2 = (a, b) => a / b
const divider2 = toDivider(10, 2)
console.log(divider2)

// 1.3 Muestra mediante un console el resto de dividir 15 por 9.

let rest = 15 % 9
console.log(rest)

let num3 = 15
let num4 = 9
console.log(num3 % num4)

function toRest(a, b) {
  return a % b
}
let rested = toRest(15, 9)
console.log(rested)

// 1.4 Usa el correcto operador de asignación que resultará en o = 15,
// teniendo dos variables p = 10 y j = 5.

let p = 10
let j = 5
let o = p + j
console.log(o)

// 1.5 Usa el correcto operador de asignación que resultará en i = 50,
// teniendo dos variables c = 10 y m = 5.

let c = 10
let m = 5
let i = c * m
console.log(i)
