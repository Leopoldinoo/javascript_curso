let numeros = [5,15,8,25,3,18,10,30,7];


let maiores = numeros.filter((numero) => {
  if(numero >= 10){
    return numero;
  }
});

console.log(numeros);
console.log(maiores);