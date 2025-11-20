let idades = [11,12,13,15,16,17,18,14,19,12];

let idd = idades.filter(idade => {
  if(idade >= 12 && idade <= 16){
    return idade;
  }
});

console.log(idd);
