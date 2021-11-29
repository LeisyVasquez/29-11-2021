let descuento = 0
let totalPagar = 0

const nombre = prompt('Ingrese el nombre del cliente')
const valorCompra = Number(prompt('Ingrese el valor de la compra'))
const bolita = prompt('Ingrese color')

if (bolita == 'blanca') {
  descuento = 0
} else if (bolita === 'verde') {
  descuento = valorCompra * 0.1
} else if (bolita === 'amarilla') {
  descuento = valorCompra * 0.25
} else if (bolita === 'azul') {
  descuento = valorCompra * 0.5
} else if (bolita === 'roja') {
  descuento = valorCompra * 1
} else {
  descuento = 0
  alert('El color de la bolita no es valido')
}

totalPagar = valorCompra - descuento
alert(
  `El cliente ${nombre} tiene un total a pagar de ${totalPagar}, su descuento fue de ${descuento}`
)
