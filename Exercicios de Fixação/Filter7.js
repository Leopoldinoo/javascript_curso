let numeros = [5,-3,10,-8,0,-1,7,-15,2];

let nums = numeros.filter(numero => {
  if(numero < 0){
    return numero;
  }

});

console.log(nums);