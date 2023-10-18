import Cardapio from "./cardapio/cardapio.js"
const section_content = document.querySelector("main > section");
const navigationButton = [...document.querySelectorAll(".nav")];
let carrinho = new Array();

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
}

function cardapio_modal(lanche) {
    const modalContainer = document.querySelector("div#modal_container");
    modalContainer.classList.add("modal_container");

    modalContainer.innerHTML = `
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
                <ul style="list-style-position: inside;">
                    ${listMaping(lanche.ingredientes)}
                </ul>
            </div>
            <div class="bottom">
                <span>R$${lanche.valor}</span>
                <button type="button" class="added_cart cart_button">Adicionar ao carrinho</button>
            </div>
        </div>
    </section>
    `;

    const carrinhoButton = document.querySelector("button.added_cart");
    const { nome, imagem, valor} = lanche // pega sómente esses atributos do cardapio que chamei de lanche nessa função, por causa do parametro.
    carrinhoButton.addEventListener("click", () => {
        addCartItem(nome, imagem, valor);
        console.log(carrinho);
    });

    const modal = document.querySelector("section.modal");
    const closeButton = document.querySelectorAll("div.close_button");
    closeButton.forEach((button) => {
        button.addEventListener("click", () => {
            modalContainer.removeChild(modal);
            modalContainer.classList.remove("modal_container");
        });
    });
}

function listMaping(list) {
    let listTag = "";
    list.map((element) => {
      listTag += `<li>${element}</li>`;
    });
    return listTag;
}

function addCartItem(name, image, value) {
    let cartValues = {name: name, image:image, value: value};
    carrinho.push(cartValues);
    return carrinho;
}

function viewCartItens() {
    section_content.innerHTML = ""
    if(section_content.classList.contains("cardapio_container")){
        section_content.classList.remove("cardapio_container");
    }
    if (carrinho.length != 0) {
        carrinho.map((itens) => {
            section_content.innerHTML += `<div class="carrinho_container">
                <h3>${itens.name}</h3><img src="${itens.image}" alt="imagem de hamburguer"><p>R$${itens.value}</p><button type="button" class="cart_button remove_item">Remover item</button>
            </div>`;
        });
        const removeItem = [...document.querySelectorAll("button.remove_item")];
        const carrinhoContainer = [...document.querySelectorAll(
          ".carrinho_container"
        )];
        removeItem.forEach((element, index) => {
            element.addEventListener("click", () => {
              removeCartItem(index, carrinhoContainer);
            });
        })
    } else {
        section_content.innerHTML = "Não há itens no carrinho"
    }
}

function removeCartItem(index, container) {
    carrinho.splice(index, 1);
    section_content.removeChild(container[index])
}


document.body.onload = inicio()
navigationButton[0].addEventListener("click", inicio);
navigationButton[1].addEventListener("click", cardapio);
navigationButton[2].addEventListener("click", viewCartItens);