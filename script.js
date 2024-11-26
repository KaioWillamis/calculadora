function insert(num){
    document.querySelector('.numero').innerHTML += num;
}

function limpar(){
    document.querySelector('.numero').innerHTML = "";
}

function back(){
    var resultado = document.querySelector('.numero').innerHTML;
    document.querySelector('.numero').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    var resultado = document.querySelector('.numero').innerHTML;
    if(resultado){
        document.querySelector('.numero').innerHTML = eval(resultado);
    }
}