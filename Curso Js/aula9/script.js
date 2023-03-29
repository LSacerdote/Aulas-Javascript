//tipos de dados primitivos - string, number, undefided
const nome = 'luiz'; //string
const nome1 = "luiz"; // string
const nome2 = `luiz`; // string
const num1 = 10 ; // number
const num2 = 10.78 ; // number
let nomeAluno; // undefined = não aponta para local nenhum na memória
const sobrenomeAluno = null; // nulo = não aponta para local nenhum na memória
const aprovado = true; // boolean = true ou false (lógico)


//test
const a = [1, 2];
const b = a ;

console.log(a, b);
b.push(3);
console.log(a, b);