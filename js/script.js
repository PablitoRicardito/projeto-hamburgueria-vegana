import Cardapio from "./cardapio/cardapio.js"
const section_content = document.querySelector("main > section");
const navigationButton = [...document.querySelectorAll(".nav")];

function inicio() {
    section_content.innerHTML = `<h1>Isso aqui é pra ser o início</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis delectus voluptate hic inventore dolores laudantium amet veniam voluptates et, soluta nihil illo quibusdam vel. Error nobis illum asperiores commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dignissimos sed sequi, tempore autem expedita. Dolorem modi earum iste totam at nostrum dicta ratione consequatur culpa, doloribus perferendis quos quo.</p>`
}

Cardapio.map((element) => {
    section_content.innerHTML += `<button type="button">${element.nome}</button>`
})

document.body.onload = inicio()
navigationButton[0].addEventListener("click", inicio);