// PONTO DE PARTIDA - Seleção dos elementos do HTML
const form = document.getElementById("form-feedback");
const inputNome = document.getElementById("nome");
const inputComentario = document.getElementById("comentario");
const mensagem = document.getElementById("mensagem-feedback");
const listaComentarios = document.getElementById("lista-comentarios");

// SEU CÓDIGO COMEÇA AQUI:
console.log("1,2,3... testando JS");

//Etapa 1: Interceptando o Envio do Formulário
form.addEventListener("submit", function (event){
    event.preventDefault(); //Impede o recarregamento da página.
    //Etapa 2: Pegando os Valores Digitados
    //Value -> Captura o conteúdo inserido na caixa nome, trim -> limpa o espaço do inicio e fim
const nomeDigitado = inputNome.value.trim();
const comentarioDigitado = inputComentario.value.trim();
//console.log(nomeDigitado)

//Etapa 3: Criando a Validação
if(nomeDigitado === "" || comentarioDigitado === "") {
    //Regra de erro
    //Etapa 4:Feedback de erro
    mensagem.textContent = "Erro: Preencha todos os campos!";
    mensagem.style.color = "red";
} else{
    //Regra de sucesso
    //Etapa 4:Feedback de sucesso
     mensagem.textContent = "Feedback enviado com sucesso!";
    mensagem.style.color = "green";
}

//Etapa 5: Renderizando o Novo Item na Tela
//criando tag html li
const novoItem = document.createElement("li");
//inserindo texto no li
novoItem.textContent = nomeDigitado + " disse :" + comentarioDigitado;
//adicionando li como filho da ul do html
listaComentarios.appendChild(novoItem);
//Limpeza dos campos
inputNome.value = "";
inputComentario.value = "";
});