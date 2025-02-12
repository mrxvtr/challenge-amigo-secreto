// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista com validação
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); // Remove espaços extras

    // Validar se o campo não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; // Não faz nada se o nome estiver vazio
    }

    // Adicionar o nome ao array de amigos se for válido
    if (!amigos.includes(nome)) {
        amigos.push(nome);
        atualizarListaAmigos();
    } else {
        alert("Esse nome já foi adicionado.");
    }

    // Limpar o campo de entrada após adicionar o nome
    inputNome.value = ''; 
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ''; // Limpar a lista antes de atualizar

    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um único amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Você precisa de pelo menos 2 amigos para fazer o sorteio!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.textContent = `Seu amigo secreto é: ${amigoSorteado}`;

    // Limpar a lista de amigos após o sorteio
    amigos = [];
    atualizarListaAmigos();
}
