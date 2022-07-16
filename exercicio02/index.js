var listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
  ];

  var listaConsole


  listaConvidados.forEach(element => {
    //console.log('Nome : '+element.nome + ' | Sobrenome : '+ element.sobrenome)
    let ul = document.getElementById("desafio");
    let li = document.createElement("li")


    li.innerText = 'Nome : '+element.nome + ' | Sobrenome : '+ element.sobrenome
    ul.appendChild(li);
    
    listaConsole += 'Nome : '+element.nome + ' | Sobrenome : '+ element.sobrenome + '\n'; 
  });


  console.log(listaConsole)