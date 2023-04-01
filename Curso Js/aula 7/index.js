/* Rodrigo Fernandes Miranda tem
 40 anos, pesa 66 kg tem
 1.66 de altura e seu imc é 23.95
Rodrigo Fernandes Miranda nasceu em 1983  */

//const
const nome= 'Rodrigo Fernandes';
const sobrenome='Miranda';
const idade= 40;
const peso = 66;
const alturaEmM = 1.66;

//Let
let imc; //peso / (altura) * (altura)
imc = peso / alturaEmM / alturaEmM;
let anoNascimento = 2023 - idade;

//console.log
console.log(nome, sobrenome,"tem", idade,"anos",);
console.log("Pesa", peso,"kg tem", alturaEmM,"de altura e seu imc é",imc,);
console.log(nome, sobrenome, "nasceu em", anoNascimento, );
