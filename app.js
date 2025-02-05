// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista com validação
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); // Remover espaços extras

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

// Função para sortear o amigo secreto de forma aleatória e sem repetição
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Você precisa de pelo menos 2 amigos para fazer o sorteio!");
        return;
    }

    let sorteio = [];
    let amigosRestantes = [...amigos]; // Criar uma cópia do array de amigos para manipulação

    // Para cada amigo, sorteamos um nome aleatório diferente de si mesmo
    for (let i = 0; i < amigos.length; i++) {
        let amigoSorteado = null;

        // Continua sorteando até encontrar uma pessoa diferente de si mesma
        while (!amigoSorteado || amigoSorteado === amigos[i]) {
            let indiceSorteado = Math.floor(Math.random() * amigosRestantes.length);
            amigoSorteado = amigosRestantes[indiceSorteado];
        }

        // Armazenar o resultado do sorteio e remover o amigo sorteado da lista de amigos restantes
        sorteio.push({ sorteador: amigos[i], sorteado: amigoSorteado });
        amigosRestantes = amigosRestantes.filter(nome => nome !== amigoSorteado);
    }

    // Exibir os resultados na tela
    exibirResultado(sorteio);
}

// Função para exibir o resultado do sorteio
function exibirResultado(sorteio) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ''; // Limpar resultado anterior

    sorteio.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.sorteador} sorteou ${item.sorteado}`;
        listaResultado.appendChild(li);
    });
}
