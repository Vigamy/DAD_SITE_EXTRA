let cont = 0;
const body = document.getElementsByTagName("body")[0];
let img = "";
const listaTarefas = document.getElementById("lista-tarefas");
const listaTarefasJS = [];
const listaConcluidas = [];
restaurarTarefas();

function criarImg() {
  cont++;
  img = document.createElement("img");
  // window.alert("Parabéns! Você acabou de ganhar R$1000!")
  img.setAttribute("id", cont);
  img.setAttribute("src", "./img/homem-sorrindo.jpg");
  img.setAttribute("width", "20%");
  img.classList.add("meme");
  body.appendChild(img);
}

//Apagar imagem
function apagarImg() {
  const img = document.getElementById(cont);
  body.removeChild(img);
  cont--;
}

//Criar Tarefa
function criarTarefa() {
  const input = document.getElementById("tarefa");
  const conteudoTarefa = input.value;

  if (conteudoTarefa !== "") {
    input.value = "";
    // criando elemento de tarefa
    const tarefa = document.createElement("li");
    tarefa.textContent = conteudoTarefa;
    tarefa.classList.add("tarefas-style");
    tarefa.addEventListener("click", () => {
      tarefa.classList.toggle("tarefa-concluida");
      if (!listaConcluidas.includes(tarefa.textContent)) {
        listaConcluidas.push(tarefa.textContent);
      }
    });
    // criando o Xzin
    const img = document.createElement("img");
    img.setAttribute("src", "./img/x.png");
    img.classList.add("xzinho");
    tarefa.appendChild(img);
    img.addEventListener("click", () => {
      tarefa.remove();
    });

    // adicionando tarefa a lista
    listaTarefas.appendChild(tarefa);
    listaTarefasJS.push(tarefa.textContent);
  }
}

//Concluir Tarefa
function concluirTarefa() {}

//Remover Tarefa
function removerTarefa() {}

function limparTarefas() {
  localStorage.removeItem("tarefas");
}

//Salvar Tarefas
function salvarTarefas() {
  console.log(listaConcluidas);
  // localStorage.removeItem("tarefas");
  localStorage.setItem("tarefas", JSON.stringify(listaTarefasJS));
  localStorage.setItem("concluidas", JSON.stringify(listaConcluidas));
}

//Restaurar Tarefas
function restaurarTarefas() {
  // Pegar lista salva
  const tarefasRest = JSON.parse(localStorage.getItem("tarefas"));
  const tarefasConc = JSON.parse(localStorage.getItem("concluidas"));
  console.log(tarefasRest);
  console.log(tarefasConc);

  // criando elemento de tarefa
  for (let i = 0; i < tarefasRest.length; i++) {
    let tarefa = document.createElement("li");
    tarefa.textContent = tarefasRest[i];
    tarefa.classList.add("tarefas-style");
    
    // criando o Xzin
    const img = document.createElement("img");
    img.setAttribute("src", "./img/x.png");
    img.classList.add("xzinho");
    tarefa.appendChild(img);
    img.addEventListener("click", () => {
      tarefa.remove();
      const indice = listaTarefasJS.indexOf(tarefa.textContent);
      if (indice !== -1) {
        listaTarefasJS.splice(i, 1);
      }
    });

    //fazer ela se tornar riscável
    tarefa.addEventListener("click", () => {
      tarefa.classList.toggle("tarefa-concluida");

      //Adicionar na lista de concluidas
      if (!listaConcluidas.includes(tarefa.textContent)) {
        listaConcluidas.push(tarefa.textContent);
        console.log("Inclui\n" + listaConcluidas);
      } else {
        const indice = listaConcluidas.indexOf(tarefa.textContent);
        if (indice !== -1) {
          listaConcluidas.splice(indice, 1);
          console.log("Tira" + listaConcluidas);
        }
      }
    });

    //adicionando o elemento
    listaTarefas.appendChild(tarefa);
    listaTarefasJS.push(tarefa.textContent);
  }
}
