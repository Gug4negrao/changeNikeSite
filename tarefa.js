//Site utilizado para o exercício -> https://www.nike.com.br/

function putBodyColor(){ //criação de uma função para alterar a cor do fundo do site
    let body = document.getElementsByClassName("Container-styled__StyledContainer-sc-ca47af48-0 gcVLEX"); //captura todos os elementos que utilizam a=essa classe
    for(let i = 0;i < body.length; i++){ //percorre todos os elementos 
        body[i].style.backgroundColor = "black" //muda a cor de cada um deles 
    }    
}

putBodyColor() //Chamada da função criada