
let numeros = [15, 20, 25, 30, 35, 18, 22, 28, 32, 40];


let idd = numeros.filter(numero => {
  if(numero >= 20 && numero <= 30){
    return numero;
  }
});

console.log(idd);