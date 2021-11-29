let sueldoBase, v1, v2, v3; 
let totalVenta = 0; 
let comision = 0; 
let totalPagar = 0;

sueldoBase = Number(prompt('Ingrese salario base')); 
v1 = Number(prompt('Ingrese la venta 1')); 
v2 = Number(prompt('Ingrese la venta 2'));
v3 = Number(prompt('Ingrese la venta 3')); 

totalVenta = v1 + v2 + v3; 
comision = totalVenta * 0.1; 

totalPagar = sueldoBase + comision; 

alert(`El total a pagar es ${totalPagar}, y su comisión fue ${comision}`)
console.log('Total a pagar: ' + totalPagar);
console.log('Las comisiones fueron: ' + comision)

