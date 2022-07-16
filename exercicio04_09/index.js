//const { Console } = require("console");

//Funções
function liberarBebidas(listaObj){
    Object.entries(listaObj[0]).forEach(element => {
        const [key, value] = element;
        if(value.idade > 18){
            value['openBar'] = true;
        }else{
            value['openBar'] = false;
        }
    }); 
}

function separar(listaObj, selecao){

    let asArray
    let filtered

    if(selecao == 'camarote'){
        asArray = Object.entries(listaObj);
        filtered = asArray.filter(([key, value]) => value.setor === 'camarote');
    }
    if(selecao == 'pista'){
        asArray = Object.entries(listaObj);
        filtered = asArray.filter(([key, value]) => value.setor === 'pista');
    }
    if(selecao == 'arquibancada'){
        asArray = Object.entries(listaObj);
        filtered = asArray.filter(([key, value]) => value.setor === 'arquibancada');
    }

    return filtered
}


//variaveis
var clientes = {
    1 : {nome: 'Jon', sobrenome: 'Smith', setor: 'pista'  , idade: '17'},
    2 : {nome: 'Lucy', sobrenome: 'Harris', setor: 'camarote' , idade: '25'},
    3 : {nome: 'Mike', sobrenome: 'Smith', setor: 'arquibancada' , idade: '44'},
    4 : {nome: 'Luke', sobrenome: 'Williams', setor: 'pista' , idade: '28'},
    5 : {nome: 'James', sobrenome: 'Brown', setor: 'camarote' , idade: '16'},
    6 : {nome: 'Dave', sobrenome: 'Davis', setor: 'arquibancada' , idade: '22'},
    7 : {nome: 'Sarah', sobrenome: 'Page', setor: 'pista' , idade: '19'},
    8 : {nome: 'Natalie', sobrenome: 'Taylor', setor: 'arquibancada' , idade: '17'}
}
var lista = [clientes]
var convidadosComBebidasProcessada
var listaCamarote
var listaPista
var listaArquibancada


//rodando aplicação
liberarBebidas(lista)

convidadosComBebidasProcessada = lista[0]


listaCamarote       = separar(convidadosComBebidasProcessada, 'camarote')
listaPista          = separar(convidadosComBebidasProcessada , 'pista')
listaArquibancada   = separar(convidadosComBebidasProcessada , 'arquibancada')







listaCamarote.forEach(element => {
    //console.log('Nome : '+element.nome + ' | Sobrenome : '+ element.sobrenome)

    var [key, value] = element;

    let ulCamarote = document.getElementById("listaCamarote");
    let liCamarote = document.createElement("li")

    if(value.openBar == true){
        liCamarote.style.cssText = 'color:green;';
    }else{
        liCamarote.style.cssText = 'color:red;';
    }


    liCamarote.innerText = 'Nome : '+value.nome + ' | Sobrenome : '+ value.sobrenome
    ulCamarote.appendChild(liCamarote);
    
});

listaPista.forEach(element => {
    //console.log('Nome : '+element.nome + ' | Sobrenome : '+ element.sobrenome)

    var [key, value] = element;

    let ulPista = document.getElementById("listaPista");
    let liPista = document.createElement("li")

    if(value.openBar == true){
        liPista.style.cssText = 'color:green;';
    }else{
        liPista.style.cssText = 'color:red;';
    }

    liPista.innerText = 'Nome : '+value.nome + ' | Sobrenome : '+ value.sobrenome
    ulPista.appendChild(liPista);
    
});

listaArquibancada.forEach(element => {
    //console.log('Nome : '+element.nome + ' | Sobrenome : '+ element.sobrenome)

    var [key, value] = element;

    let ulArquibancada = document.getElementById("listaArquibancada");
    let liArquibancada = document.createElement("li")

    if(value.openBar == true){
        liArquibancada.style.cssText = 'color:green;';
    }else{
        liArquibancada.style.cssText = 'color:red;';
    }

    liArquibancada.innerText = 'Nome : '+value.nome + ' | Sobrenome : '+ value.sobrenome
    ulArquibancada.appendChild(liArquibancada);
    
});


