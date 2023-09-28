const botonHamburguesa = document.querySelector('.hamburguesa')
const menuDespegable = document.querySelector('.hambur')
const conteImg = document.querySelector('.pantallaPrincipal')
const galeriaImg = document.querySelector('.control')
const links = document.querySelectorAll(".hambur a");
const btnTop = document.querySelector("#btnTop");

function showMenu() {
  menuDespegable.classList.toggle("active-menu");
}
botonHamburguesa.addEventListener('click', showMenu);

function galeria(e) {
  conteImg.src = e.target.src;
}

galeriaImg.addEventListener('click', galeria);

btnTop.addEventListener("click", clickHandler);
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

window.onscroll = function () {
  let y = window.scrollY;
  if (y > 0) {
    btnTop.classList.add("btnTopActive")
  }else{
    btnTop.classList.remove("btnTopActive")
  }
};