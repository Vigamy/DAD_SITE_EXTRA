// Selecionando todos os temas
const temas = document.getElementsByClassName("tema");

// Adicionando eventos de clique
for (let i = 0; i < temas.length; i++) {
    temas[i].addEventListener("click", () => {
        temas[i].children[0].classList.toggle("invisivel");
        console.log(i);
    })
}


// Selecionando o mouse
const quadradoEnter = document.getElementsByClassName("quadrado")[0]
quadradoEnter.addEventListener("mouseenter", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    quadradoEnter.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})