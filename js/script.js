import Cardapio from "./cardapio/cardapio.js"
const section_content = document.querySelector("main > section");
const navigationButton = [...document.querySelectorAll(".nav")];

function inicio() {
    section_content.innerHTML = ""
    if(section_content.classList.contains("cardapio_container")){
        section_content.classList.remove("cardapio_container");
    }
    section_content.innerHTML = `<h1>Isso aqui é pra ser o início</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis delectus voluptate hic inventore dolores laudantium amet veniam voluptates et, soluta nihil illo quibusdam vel. Error nobis illum asperiores commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dignissimos sed sequi, tempore autem expedita. Dolorem modi earum iste totam at nostrum dicta ratione consequatur culpa, doloribus perferendis quos quo.</p>`
}

function cardapio() {
    section_content.innerHTML = ""
    section_content.classList.add("cardapio_container");
    Cardapio.map((element) => {
        section_content.innerHTML += `
        <button type="button" class="cardapio_button">
            <div style="overflow: hidden; height: 167px;" class="top">
                <img src="${element.imagem}" alt="imagem de hamburguer">
            </div>
            <div style="display:flex; align-items: center; justify-content: space-between; padding: 10px;">
                <div>
                    <h2>${element.nome}</h2>
                </div>
                <div>
                    <span>R$${element.valor}</span>
                </div>
            </div>
        </button>`;
    });
    const cardapioButton = [...document.querySelectorAll("button.cardapio_button")]
    cardapioButton.forEach((button, index) => {
        button.addEventListener("click", () => {
            cardapio_modal(Cardapio[index]);
        });
    })
    console.log(cardapioButton);
}

function cardapio_modal(lanche) {
    const modalContainer = document.querySelector("div#modal_container");
    modalContainer.classList.add("modal_container");

    modalContainer.innerHTML = 
    `
    <section class="modal">
        <div class="left_container">
            <img src="${lanche.imagem}" alt="imagem de hamburguer">
        </div>
        <div class="right_container">
            <div class="top">
                <h1>${lanche.nome}</h1>
                <div class="close_button" style="cursor: pointer;">
                    <i class="ph ph-x-circle"></i>
                </div>
            </div>
            <div class="middle">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illum quasi odio cupiditate. Eos rerum rem, repellendus ratione tempore neque doloremque earum ducimus voluptates! Iusto dignissimos iure omnis consequatur! Porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestias architecto quos necessitatibus veritatis totam vel possimus sapiente, quas iste rerum maiores dolorum, sequi quasi mollitia voluptates magni ea explicabo.</p>
                <ul></ul>
            </div>
        </div>
    </section>
    `

    const modal = document.querySelector("section.modal");
    console.log(modal)
    const closeButton = document.querySelectorAll("div.close_button");
    closeButton.forEach((button) => {
        button.addEventListener("click", () => {
            modalContainer.removeChild(modal);
            modalContainer.classList.remove("modal_container");
        });
    });
}


document.body.onload = inicio()
navigationButton[0].addEventListener("click", inicio);
navigationButton[1].addEventListener("click", cardapio);