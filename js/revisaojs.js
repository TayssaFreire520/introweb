console.log("Olá Mundo!");
//material 16 pag 7

/*Constante não varia*/
const nomeLoja = "Minha Loja Online";

/* let -> variáveis - valor pode ser alterado*/
let produto1 = "Smartphone";
let preco1 = 1500;
let emPromocao = true;

// nomeLoja = "Loja Grande"; -ERRO: Não posso alterar o valor de uma CONSTANTE
// nomeLoja = "Loja Grande";
console.log(`Nome Loja: ${nomeLoja}`);

produto1 = "Samsung Galaxy S26"; //Alterei o valor da variável
let promoMsg;
if (emPromocao) {
  promoMsg = "Em Promoção";
} else {
  promoMsg = "Fora da Promoção";
}
console.log(
  `Produto: ${produto1} | Preço: R$ ${preco1.toFixed(2)} | ${promoMsg}`,
);

//material pag 8

//Operadores aritiméticos
console.log("----Operadores Aritiméticos---");
const preco = 299.9;
const desconto = 0.15; // 15%
console.log(`Preço Inicial: R$ ${preco} | Percentual de desconto: ${desconto}`);

// Calculando o preço final
const valorDesconto = preco * desconto; // 44.985
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);

const precoFinal = preco - valorDesconto; // 254.915
console.log(`Preço Final: R$: ${precoFinal.toFixed(2)}`);

const frete = 19.9;
console.log(`Frete: R$ ${frete.toFixed(2)}`);
const total = precoFinal + frete; // 274.815
console.log(`Total: R$ ${total.toFixed(2)}`);

//Operadores Racionais e Lógicos
console.log("----Operadores Racionais e Lógicos----");
const estoque2 = 15;
const emPromocao2 = true;
const precoFinal2 = 254.9;

// Relacionais: ==, !=, >, <, >=, <=
console.log(estoque2 > 0); // true
console.log(precoFinal2 <= 300); // true

// Lógicos: && (e), || (ou), ! (não)
console.log(estoque2 > 0 && emPromocao2); // true
console.log(estoque2 === 0 || emPromocao2); // true
console.log(!emPromocao2); // false

// material pag 11

// -for listando produtos
//Vetor (Array)
const produtos = [
  "Tênis Running Pro",
  "Mochila Sport",
  "Camiseta Dry-Fit",
  "Meias Esportivas",
];
for (let i = 0; i < produtos.length; i++) {
  console.log(`${i + 1}. ${produtos[i]}`);
}
// Saída:
// 1. Tênis Running Pro
// 2. Mochila Sport
// 3. Camiseta Dry-Fit
// 4. Meias Esportivas

//Controlando estoque
let estoque = 5;
let vendas = 0;
while (estoque > 0) {
  console.log(
    `Venda realizada!
Estoque restante: ${estoque - 1}`,
  );
  estoque--;
  vendas++;
}
console.log(`Total de vendas: ${vendas}`);
// Total de vendas: 5

//material pag 12

//for - listando produtos

//vetor de objetos produtos2
const produtos2 = [
  { nome: "Smartphone", preco: 1500 },
  { nome: "Camiseta", preco: 80 },
  { nome: "Relógio", preco: 250 },
];
for (let i = 0; i < produtos2.length; i++) {
  console.log(`Produto: ${produtos2[i].nome} - R$ ${produtos2[i].preco}`);
}

//material pag 14
//FUNÇÕES

//Declaração de função
function calcularDesconto(preco, percentual) {
  const desconto = preco * (percentual / 100);
  return preco - desconto;
}

//Chamando a função calcular desconto, passando o preço e o percentual
const final = calcularDesconto(299.9, 15);
console.log(`R$ ${final.toFixed(2)}`); // R$254.92

const final2 = calcularDesconto(1000, 10);
console.log(`R$ ${final2.toFixed(2)}`); // R$900.00
