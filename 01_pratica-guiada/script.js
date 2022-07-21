//CODIGO AQUI/  aritimetica
let saldo
saldo=15;
saldo+=22.40;
console.log(saldo);
saldo-=12.34
console.log(saldo);
saldo/=3
console.log(saldo);
saldo*=3.42
console.log(saldo);
saldo%=3
console.log(saldo);

//multipicaçaõ e soma (precedencia)
multiSoma1 = 2*2+2;
console.log("multipli e soma",multiSoma1);

multiSoma2 = 2*(2+2);
console.log("multipli e soma2",multiSoma2);

//igual e diferente

const resultado1= 5===5;
console.log(resultado1);
const resultado2= 5!==5;
console.log(resultado2);
const resultado3= 5!=="5";
console.log(resultado3);
const resultado4= "5"==="cinco";
console.log(resultado4);
const resultado5= typeof 5 === typeof 20;
console.log(resultado5);
const resultado6= typeof "5" === typeof "cinco";
console.log(resultado6);

//menor ou maior =
const primeiroNum=10;
const segundoNum=46;
console.log(primeiroNum);
console.log(segundoNum);
console.log("o primeiro numero é igual ao segundo numero?",primeiroNum ===segundoNum);
console.log("o primeiro numero é menor ou igual ao segundo numero?",primeiroNum <= segundoNum);
console.log("o primeiro numero é maoir que o segundo numero?",primeiroNum > segundoNum);
console.log("o primeiro numero é menor que o segundo numero?",primeiroNum < segundoNum);

//logica
const a= "quero dirigir um celta 2012";
const b="sou maior de idade";
const c="consigo comprar um celta por 22.000"
const d="consigo alugar um celta";
const e="tenho carteira de motorista";

/*Quero dirigir o Celta 2012
Não sou maior de idade
Sou maior de idade e não tenho carteira de motorista
Sou maior de idade e consigo comprar ou alugar o celta
Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta */

a
!b
b && !e
b && c || d
(b && e) && !a