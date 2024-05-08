// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let sellCounts = [];
let sumaVentas = 0;
for (i = 0; i < products.length; i++){
  let product = products[i];
  sellCounts.push(product.sellCount)
  sumaVentas += sellCounts[i]
}
console.log(sumaVentas);