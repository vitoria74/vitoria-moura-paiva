// DOM = representação do html
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)'); // querySelectorAll vai selecionar todos os projetos inativos. All pq é mais de um

botaoMostrarProjetos.addEventListener('click', () => {
    //Add a classe 'ativo' nos projetos escondidos
    mostrarMaisProjetos();

    //esconder o botão 'mostrar mais'
    esconderBotao(); // add a classe remover no bootão pra sumir
}); // add uma escuta ao click do botão e o que vai acontecer quando receber click

function esconderBotao() { //segundo código refatorado
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() { //código refatorado
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
