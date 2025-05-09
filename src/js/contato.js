function validarFormulario(){
    const nomeInput =document.getElementById ("nome");
    const nomeInput =document.getElementById ("email");
    const nomeInput =document.getElementById ("descricao");
    let valida = true;

    //FUNÇÃO PARA EXIBIR ERROS
    function mostrarErro(inputElement, mensagem){
        const controle = inputElement.parentNode;
        const erroimg = controle.querySelect('.error')
        const mensagemErro =controle.querySelect('small')

        mensagemErro.innerText =mensagem;
        controle.className = 'control erro';
        erroimg.style.display = 'block';
        valida =false;
    }
    mostrarErro()
        
    }
}