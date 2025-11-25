const carros = [
  {modelo: "Onix", marca: "Chevrolet"},
  {modelo: "Argo", marca: "Fiat"},
  {modelo: "Mobi", marca: "Fiat"},
  {modelo: "HB20", marca: "Hyundai"}
];

const fiat = carros.filter(a => a.marca.includes("Fiat"));
console.log(fiat);