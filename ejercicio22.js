// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

let fruitIndex = 0

for (let i = 0; i < foodSchedule.length; i++) {
  let food = foodSchedule[i]
  if (food.isVegan === false) {
    for (j = 0; j < fruits.length; j++) food.name = fruits[fruitIndex]
    fruitIndex++
    food.isVegan = true
  }
  if (fruitIndex === fruits.length) {
    fruitIndex = 0
  }
}
console.log(foodSchedule)
