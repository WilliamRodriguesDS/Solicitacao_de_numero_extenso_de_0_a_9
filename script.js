function escrever(mensagem){
    let output = document.querySelector("#output");
    output.innerHTML = mensagem;
}

function solicitarNumeroExtenso(){
    let solicitador = parseFloat(document.querySelector("#solicitador").value);
    let msg;

    switch(solicitador){
        case 0:
            msg = "Número por extenso de 0 é zero";
            escrever(msg);
            break;
        case 1:
            msg = "Número por extenso de 1 é um";
            escrever(msg);
            break;
        case 2:
            msg = "Número por extenso de 2 é dois";
            escrever(msg);
            break;
        case 3:
            msg = "Número por extenso de 3 é três";
            escrever(msg);
            break;
        case 4:
            msg = "Número por extenso de 4 é quatro";
            escrever(msg);
            break;
        case 5:
            msg = "Número por extenso de 5 é cinco";
            escrever(msg);
            break;
        case 6:
            msg = "Número por extenso de 6 é seis";
            escrever(msg);
            break;
        case 7:
            msg = "Número por extenso de 7 é sete";
            escrever(msg);
            break;
        case 8:
            msg = "Número por extenso de 8 é oito";
            escrever(msg);
            break;
        case 9:
            msg = "Número por extenso de 9 é nove";
            escrever(msg);
            break;
        default:
            msg = "Número fora do intervalo, tente novamente!";
            escrever(msg);
    }
}