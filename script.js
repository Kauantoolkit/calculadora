let visor = document.getElementById('visor');
let historico = document.getElementById('historico');
let expressao = '';


function inserir(valor) {
    
    expressao += valor;
    visor.innerText = expressao;
}



function limpar() {  // o botão c

    expressao = '';
    visor.innerText = '';
}


function calcular() {
    try {
        
        let resultado = eval(expressao);  //pensa no for incrivel que seria pra fazer isso aqui sem eval :P
        visor.innerText = resultado;

        historico.innerHTML = `<p>${expressao} = ${resultado}</p>` + historico.innerHTML;  //pra que o ultimo resultado seja concatenado no inicio do histórico

        expressao = resultado;                      //pra permitir sequencia de contas com o resultado das contas anteriores
    } catch (e) {                                   //perdi uma meia hora tentando usar except aqui
        visor.innerText = 'Erro kkk';
    }
}





//toda a parte do historico aq


function salvarHistorico() {
    localStorage.setItem('historico', historico.innerHTML);
}


function carregarHistorico() {
    let historicoSalvo = localStorage.getItem('historico');
    if (historicoSalvo) {
        historico.innerHTML = historicoSalvo;
    }
}


window.onload = carregarHistorico;


window.onbeforeunload = salvarHistorico;
