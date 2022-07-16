

var readline = require('readline');
var resp
var operacao
var num1 
var num2

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function operacoes(){
    leitor.question("Digite 1 para adicionar\nDigite 2 para subitrair\nDigite 3 para multiplicar\nDigite 4 para dividir\n", function(answerOperacao) {
        switch (answerOperacao) {
            case '1':
                console.log("Adicionar\n")
                operacao = 1
                resultado()
                break;
            case '2':
                console.log("Subtrair\n")
                operacao = 2
                resultado()
                break;
            case '3':
                console.log("Multiplicar\n")
                operacao = 3
                resultado()
                break;
            case '4':
                console.log("Dividir\n")
                operacao = 4
                resultado()
                break;
            default:
                console.log("valor indefinido\n")
                operacoes()
        }
    });
}

function resultado(){
    leitor.question("Digite o ultimo número?\n", function(answerNum2) {
        num2 = parseInt(answerNum2);

        if(operacao = 1){
            console.log('Seu resultado é : '+ (num1 + num2))
            process.exit()
        }
        if(operacao = 2){
            console.log('Seu resultado é : '+ (num1 - num2))
            process.exit()
        }
        if(operacao = 3){
            console.log('Seu resultado é : '+ (num1 * num2))
            process.exit()
        }
        if(operacao = 4){
            console.log('Seu resultado é : '+ (num1 / num2))
            process.exit()
        }

    });
}

leitor.question("Digite um número?\n", function(answerNum1) {
        num1 = parseInt(answerNum1);

       operacoes()

});