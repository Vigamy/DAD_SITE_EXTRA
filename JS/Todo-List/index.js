// referencia para a lista não ordenada
const listaHTML = document.getElementsByTagName("ul")[0];
const listaTarefas = [];
const persistir = {};
setTimeout(() => {
  menu();
}, 500);
console.log(listaHTML.innerHTML);
// document.getElementById("btnMenu").addEventListener("click", menu());
// Funcão menu
function menu() {
  const escolha = window.prompt(`
        [1] - Adicionar tarefa
        [2] - Retirar tarefa
        [3] - Concluir tarefa
        [4] - Editar tarefa
        [5] - Perisistir
        [0] - Sair
    `);
  if (escolha == 1) {
    inserir();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 2) {
    removerTarefa();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 3) {
    concluirTarefa();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 4) {
    alterarTarefa();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 5) {
    persistirTarefas();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 0) {
    return;
  }
}

// // Funcão para adicionar tarefa 🐴🐴🐴
// function adcTarefa() {
//   // pedindo a tarefa
//   const tarefa = window.prompt("Digite a tarefa: ");

//   // Adicionanndo na lista de tarefas JS
//   listaTarefas.push(tarefa);

//   // adicionando na lista do HTML
//   lista.innerHTML += `<li>${tarefa}</li>`;

//   console.log(listaTarefas);
//   const continuar = window.confirm("Deseja continuar?");
//   if (continuar) {
//     menu();
//   }
// }

// // Função para remover tarefa 🐴🐴🐴🐴
// function removerTarefa() {
//   // Indice ou na mão
//   const escolha = window.prompt(`
//     [1] - Retirar pelo nome (na mão)
//     [2] - Retirar pela posição
//   `)

//   let indice;

//   if(escolha == 1) {
//     // Recebendo a tarefa
//     const retirada = window.prompt(`O que deseja retirar?`);
//     //  Encontrando o elemento pelo metodo
//     // indice >= 0 -> Elemento na lista
//     // indice == -1 -> Elemento não está na lista
//     indice = listaTarefas.indexO(retirada);
//   }else if (escolha == 2) {
//     indice = window.prompt(`Qual o indice?: `);
//     indice--;
//   }

//   // Retirada do elemento pelo metodo splice
//   if (indice >= 0) {
//     // Retirando da lista do JS
//     listaTarefas.splice(indice, 1);

//     // Esvaziando a lista ul(HTML)
//     lista.innerHTML = ``;

//     // recriar o html
//     for (let i = 0; i < listaTarefas.length; i++) {
//       lista.innerHTML += `<li>${listaTarefas}</li>`;
//     }
//   }
//   const continuar = window.confirm("Deseja continuar?");
//   if (continuar) {
//     menu();
//   }
// }
 
function inserir() {
  //  Pedindo a tarefa
  const tarefa = window.prompt("Adicione a tarefa:");

  // Criando o LI
  const li = document.createElement("li");

  // preenchendo o li
  li.innerText = tarefa;

  // adicionando o elemento no html
  listaHTML.appendChild(li);

  // adicionando elemento HTML na lista do JS
  listaTarefas.push(li);

  const continuar = window.confirm("Deseja continuar?");
  if (continuar) {
    inserir();
  }
}

// Funcao de retirada de tarefa
function removerTarefa() {
  // Pedir tarefa para o usuario
  const tarefa = window.prompt("Tarefa a ser retirada:");

  // percorrendo a lista de NOS
  for (let i = 0; i < listaTarefas.length; i++) {
    if (listaTarefas[i].innerText == tarefa) {
      // remocao do HTML
      listaTarefas[i].remove();
    }
  }
}

// Concluir tarefa
function concluirTarefa() {
  // Pedir tarefa para o consagrado
  const tarefa = window.prompt("Digite a tarefa que deve ser concluidas");

  // Percorrendo a lista de nos
  for (let i = 0; i < listaTarefas.length; i++) {
    if (listaTarefas[i].innerText == tarefa) {
      // remocao do HTML
      listaTarefas[i].remove();

      // removendo da lista do (JS)
      listaTarefas.splice(i, 1);

      // Criar nova tarefa
      const li = document.createElement("li");

      // Criar sublinhado
      const del = document.createElement("del");

      // Adicionando na lista do JS
      listaTarefas[i] = li;

      // atribuindo o texto
      del.textContent = tarefa;

      // adicionando sublinhado
      li.appendChild(del);

      // adicionando na lista
      lista.appendChild(li);
    }
  }
}

function alterarTarefa() {
  // Pergunta
  const tarefa = window.prompt("Digite a tarefa");

  //Percorre
  for (let i = 0; i < listaTarefas.length; i++) {
    if (listaTarefas[i].innerHTML == tarefa) {
      // pedir alteracao para o usuario
      const alteracao = window.prompt("Indique a tarefa a ser atualizada: ");

      // remover do html
      listaTarefas[i].textContent = alteracao;
    }
  }
}

// Funcao para guardar os dados
function persistirTarefas() {
  const concluidas = document.getElementsByTagName("del");

  // guardando os conteudos das tags del (concluidas)
  let tarefasConcluidas = [];
  let tarefasnConcluidas = [];
  for (let i = 0; i < tarefasConcluidas.length; i++) {
    tarefasConcluidas.push(concluidas[i].innerText);

    for (let j = 0; j < listaTarefas.length; j++) {
      if (listaTarefas[j].textContent != concluidas[i].textContent) {
        tarefasConcluidas.push(listaTarefas[j].textContent);
      }
    }
  }

  console.log("Concluidas", tarefasConcluidas);
  console.log("Não concluidas", tarefasnConcluidas);

  const conlcuidas = localStorage.setItem("Concluidas", JSON.stringify(concluidasConteudo));
  const nconcluidas = localStorage.setItem("Concluidas", JSON.stringify(tarefasnConcluidas));
}

function onClick() {
  menu();
}
