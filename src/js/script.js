// DOM = representação do html
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)'); // querySelectorAll vai selecionar todos os projetos inativos. All pq é mais de um

botaoMostrarProjetos.addEventListener('click', () => {
    //Add a classe 'ativo' nos projetos escondidos
    projetosInativos.forEach(projetoInativo => { // não precisa botar outro () pq só tem um argumento. A cada projeto inativo, add ativo a ele.
        projetoInativo.classList.add('ativo');
    })

    //esconder o botão 'mostrar mais'
    botaoMostrarProjetos.classList.add('remover'); // add a classe remover no bootão pra sumir
}); // add uma escuta ao click do botão e o que vai acontecer quando receber click