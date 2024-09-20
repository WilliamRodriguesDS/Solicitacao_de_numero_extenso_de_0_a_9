function solicitarNumeroExtenso(){
    let solicitador = parseFloat(prompt("Digite um número de 0 a 9"));

    switch(solicitador){
        case 0:
            alert("Número extenso de 0 é zero");
            break;
        case 1:
            alert("Número extenso de 1 é um");
            break;
        case 2:
            alert("Número extenso de 2 é dois");
            break;
        case 3:
            alert("Número extenso de 3 é três");
            break;
        case 4:
            alert("Número extenso de 4 é quatro");
            break;
        case 5:
            alert("Número extenso de 5 é cinco");
            break;
        case 6:
            alert("Número extenso de 6 é seis");
            break;
        case 7:
            alert("Número extenso de 7 é sete");
            break;
        case 8:
            alert("Número extenso de 8 é oito");
            break;
        case 9:
            alert("Número extenso de 9 é nove");
            break;
        default:
            alert("Número fora do intervalo, tente novamente!");
            return solicitarNumeroExtenso();
    }
}