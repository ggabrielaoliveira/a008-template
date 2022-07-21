// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')
console.log(minhaIdade > idadeAmiga);
console.log(minhaIdade!==idadeAmiga);// ERRADO
//CERTO
const diferença= minhaIdade-idadeAmigo
console.log("a diferença da minha idade e do meu amigo é de", diferença, "anos"); 

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

!b && d;
(b && a) && !d
a || d
c && !d