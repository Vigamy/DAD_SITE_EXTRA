// criando a img
document.createElement("img");

// acessando a imagem
const img = document.getElementsByTagName("img")[0];
const img2 = document.getElementsByTagName("img")[1];

// colocar a imagem
img.setAttribute("src", "./img/neymar.png");
img.setAttribute("width", "450px");
img2.setAttribute(
  "src",
  "https://i.pinimg.com/236x/be/8a/53/be8a5318c2b4ad8b3595dd8676cc8edc.jpg"
);
img2.setAttribute("width", "300px");
