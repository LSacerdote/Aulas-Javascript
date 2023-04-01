const nome="Lucas";
const idade="18";
const agua= 35;
const peso= 74;
const alturaEmM = 1.73;


let QuantidadeDeAguaDiariaEmML; //(Agua) x (peso)
QuantidadeDeAguaDiariaEmML = agua * peso;
let imc; //peso / (altura) * (altura)
imc = peso / alturaEmM / alturaEmM;
let anoNascimento = 2023 - idade;


console.log(nome,"tem", idade,"anos e pesa", peso,
"kg sua quantidade diaria de agua recomendada é",
 QuantidadeDeAguaDiariaEmML,"ml");
 console.log(nome, "Pesa", peso,"kg tem", alturaEmM,"de altura e seu imc é",imc,);
