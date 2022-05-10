let minimo, maximo, totalNumeros, numero, promedio, contador: number;
numero = Number(prompt("Ingrese un número (0 para cortar)"));
contador = 0;
totalNumeros = 0;
promedio = 0;

minimo = numero;
maximo = numero;

while (numero !== 0) {
  if (numero < minimo) {
    minimo = numero;
  } else if (numero > maximo) {
    maximo = numero;
  }
  totalNumeros += numero;
  contador++;
  numero = Number(prompt("Ingrese un número (0 para cortar)"));
}
if (contador > 0) {
  promedio = totalNumeros / contador;
  console.log("El mínimo es: ", minimo);
  console.log("El máximo es: ", maximo);
  console.log("El promedio es: ", promedio);
} else {
  console.log("¡No ingreso ningún número!");
}
