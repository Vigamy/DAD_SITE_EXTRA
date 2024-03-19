//InserirTarefa()
//RemoverTarefa()
//alterarTarefa()
//TrocarTarefas()
//Persistir()

//Listas
const horarios = [
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];
const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

//Referencias
const listaTr = document.getElementsByTagName("tr");
const tarefas = [];
persistir();
console.log(listaTr[0].children);

setTimeout(menu, 1000);

function menu() {
  console.log(tarefas);
  resposta = window.prompt(`  1 - Inserir
  2 - Remover Tarefa
  3 - Alterar Tarefa
  4 - Trocar Tarefa
  5 - Salvar Tarefas
  0 - Sair`);
  //Inserir
  if (resposta == 1) {
    inserirTarefa(pedirDia(), pedirHorario(), pedirTarefa());
  }
  //Remover
  else if (resposta == 2) {
    const tarefa = window.prompt("Nome da Tarefa que será removida:");
    removerTarefa(tarefa);
  }
  //Alterar
  else if (resposta == 3) {
    const tarefa = window.prompt("Nome da Tarefa que será alterada:");
    const novaTarefa = window.prompt("Nome da nova Tarefa:");
    alterarTarefa(tarefa, novaTarefa);
  }
  //Trocar
  else if (resposta == 4) {
    const tarefa1 = window.prompt("Nome da primera tarefa:");
    const tarefa2 = window.prompt("Nome da segunda tarefa:");
    trocarTarefas(tarefa1, tarefa2);
  }
  //Persistir
  else if (resposta == 5) {
    window.alert("Salvando as tarefas...");
    persistir();
  }
}

//Inserir
function inserirTarefa(dia, horario, tarefa) {
  //Validações
  if (!dias.includes(dia)) {
    window.alert("Não existe esse dia da semana.");
    dia = pedirDia();
    inserirTarefa(dia, horario, tarefa);
  }
  //Outras validações
  if (!horarios.includes(horario)) {
    window.alert("Não existe esse horário.");
    horario = pedirHorario();
    inserirTarefa(dia, horario, tarefa);
  }
  //Adicionar a tarefa no calendário
  const indexHora = horarios.indexOf(horario);
  const indexDia = dias.indexOf(dia);
  listaTr[indexHora + 1].children[indexDia + 1].innerHTML = tarefa;
  tarefas.push(tarefa);
}

//Remover
function removerTarefa(tarefa) {
  //Remover no calendário
  for (let i = 0; i < listaTr.length; i++) {
    for (let j = 0; j < listaTr[i].children.length; j++) {
      console.log(listaTr[i].children[j].innerHTML);
      if (listaTr[i].children[j].textContent == tarefa) {
        console.log(listaTr[i].children[j]);
        listaTr[i].children[j].remove(tarefa);
      }
    }
  }
  //Remover na lista
  tarefas.remove(tarefa);
}

//Alterar
function alterarTarefa(tarefa, novaTarefa) {
  //Alterar no calendário
  for (let i = 0; i < listaTr.length; i++) {
    for (let j = 0; j < listaTr[i].children.length; j++) {
      console.log(listaTr[i].children[j]);
      if (listaTr[i].children[j].textContent == tarefa) {
        listaTr[i].children[j].textContent = novaTarefa;
      }
    }
  }
  //Alterar na lista
  tarefas[i] = novaTarefa;
}

//Trocar Tarefas
function trocarTarefas(tarefa1, tarefa2) {
  //Trocar no calendário
  for (let i = 0; i < listaTr.length; i++) {
    for (let j = 0; j < listaTr[i].children.length; j++) {
      if (listaTr[i].children[j].textContent == tarefa1) {
        listaTr[i].children[j].textContent = tarefa2;
      } else if (listaTr[i].children[j].textContent == tarefa2) {
        listaTr[i].children[j].textContent = tarefa1;
      }
    }
  }
  //Ajustar a lista
  tarefas.slice(tarefa1, tarefa2);
  tarefas.slice(tarefa2, tarefa1);
}

//Persistir
function persistir() {
  itensSalvos = localStorage.getItem("Tarefas");
  inserirTarefa(itensSalvos);
  localStorage.setItem("Tarefas", JSON.stringify(tarefas));
}

//Pedir dia
function pedirDia() {
  return window.prompt("Dia da Semana");
}

//Pedir dia
function pedirHorario() {
  return window.prompt("Horário do Dia");
}

//Pedir dia
function pedirTarefa() {
  return window.prompt("Nome da Tarefa");
}

// function onClick() {
//   document.getElementsByTagName("title")[0].innerHTML = "Novo Título";
// }
