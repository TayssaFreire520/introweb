// Os dados existem, mas não aparecem na tela (O problema inicial)
const filmes = [
  { id: 1, titulo: "O Senhor dos Anéis", diretor: "Peter Jackson", ano: 2001 },
  { id: 2, titulo: "Matrix", diretor: "Lana e Lilly Wachowski", ano: 1999 },
  {id: 3, titulo: "De Volta para o Futuro", diretor: "Robert Zemeckis", ano: 1985,},
];

// Aplique as soluções necessárias abaixo desta linha!
console.log("Início da atividade manipulação do Dom");

//Etapa 1- Selecionando elementos:
const container = document.getElementById("lista-filmes");

//Etapa 2- Laço de Repetição:
filmes.forEach((filme) => {
  //Etapa 3- Criando Elementos:
  const card = document.createElement("div"); //cria uma div
  card.classList.add("filme-card");

  //Etapa 4- Alterando o Conteúdo:
  card.innerHTML = `
        <h3>${filme.titulo}</h3>
        <p>Diretor: ${filme.diretor}
        <p>Ano: ${filme.ano}
        `;

  //Etapa 5- Inserindo no DOM:
  container.appendChild(card);
}); //O fim do foreach

// Etapa 6- Manipulando Classes:
// querySelector
const primeiroFilme = document.querySelector(".filme-card");
primeiroFilme.classList.add("destaque");

//Etapa 7- Removendo Elementos:
//querySelectorAll seleciona todos os que encontar
const todosOsFilmes = document.querySelectorAll(".filme-card");
const ultimoFilme = todosOsFilmes[2]; // o último filme
ultimoFilme.remove(); //remove diretamente da árvore do DOM