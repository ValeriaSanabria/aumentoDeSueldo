let sueldoActual: number = 23000;
let aumento: number = 0;

if (sueldoActual <= 15000) {
  aumento = sueldoActual * 1.2;
  console.log("Ud. tiene un aumento de 20%");
  console.log("Su sueldo pasa a ser de: $" + aumento);
} else if (15001 < sueldoActual && sueldoActual <= 20000) {
  aumento = sueldoActual * 1.1;
  console.log("Ud. tiene un aumento de 10%");
  console.log("Su sueldo pasa a ser de: $" + aumento);
} else if (20001 < sueldoActual && sueldoActual <= 25000) {
  aumento = sueldoActual * 1.5;
  console.log("Ud. tiene un aumento del 5%");
  console.log("Su sueldo pasa ser de: $" + aumento);
} else {
  aumento = sueldoActual;
  console.log("Ud. no tiene aumento");
  console.log("Su sueldo actual es: $" + aumento);
}
