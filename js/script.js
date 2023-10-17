import Cardapio from "./cardapio/cardapio.js"
const section_content = document.querySelector("main > section");
const navigationButton = [...document.querySelectorAll(".nav")];

function inicio() {
    section_content.innerHTML = ""
    section_content.classList.remove("cardapio_container");
    section_content.innerHTML = `<h1>Isso aqui é pra ser o início</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis delectus voluptate hic inventore dolores laudantium amet veniam voluptates et, soluta nihil illo quibusdam vel. Error nobis illum asperiores commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dignissimos sed sequi, tempore autem expedita. Dolorem modi earum iste totam at nostrum dicta ratione consequatur culpa, doloribus perferendis quos quo.</p>`
}

function cardapio() {
    section_content.innerHTML = ""
    section_content.classList.add("cardapio_container");
    Cardapio.map((element) => {
        section_content.innerHTML += `
            <button type="button" class="cardapio_button">
                <div style="overflow: hidden; height: 167px;" class="top"><img src="${element.imagem}" alt="imagem de hamburguer"></div>
                <div style="display:flex; align-items: center; justify-content: space-between; padding: 10px;">
                    <div>
                        <h2>${element.nome}</h2>
                    </div>
                    <div>
                        <span>R$${element.valor}</span>
                    </div>
                </div>
            </button>`;
    })
}
document.body.onload = inicio()
navigationButton[0].addEventListener("click", inicio);
navigationButton[1].addEventListener("click", cardapio);