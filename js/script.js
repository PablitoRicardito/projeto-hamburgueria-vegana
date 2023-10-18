import menuItens from "./cardapio/cardapio.js";
const section_content = document.querySelector("main > section");
const navigationButton = [...document.querySelectorAll(".nav")];
let shopCart = new Array();

function inicio() {
  section_content.innerHTML = "";

  if (section_content.classList.contains("menu_container")) {
    section_content.classList.remove("menu_container");
  }
  section_content.innerHTML = `<h1>Isso aqui é pra ser o início</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis delectus voluptate hic inventore dolores laudantium amet veniam voluptates et, soluta nihil illo quibusdam vel. Error nobis illum asperiores commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dignissimos sed sequi, tempore autem expedita. Dolorem modi earum iste totam at nostrum dicta ratione consequatur culpa, doloribus perferendis quos quo.</p>`;
}

function menuGrid() {
    section_content.innerHTML = "";

    section_content.classList.add("menu_container");

    menuItens.map((element) => {

      section_content.innerHTML += `
        <button type="button" class="menu_button">
            <div style="overflow: hidden; height: 167px;" class="top">
                <img src="${element.image}" alt="imagem de hamburguer">
            </div>
            <div style="display:flex; align-items: center; justify-content: space-between; padding: 10px;">
                <div>
                    <h2>${element.name}</h2>
                </div>
                <div>
                    <span>R$${element.value}</span>
                </div>
            </div>
        </button>`;

    });

    const menuButton = [...document.querySelectorAll("button.menu_button")];

    menuButton.forEach((button, index) => {
        button.addEventListener("click", () => {
            menuModals(menuItens[index]);
        });
    })
}

function menuModals(item) {
    const modalContainer = document.querySelector("div#modal_container");

    modalContainer.classList.add("modal_container");

    modalContainer.innerHTML = `
        <section class="modal">
            <div class="left_container">
                <img src="${item.image}" alt="image de hamburguer">
            </div>
            <div class="right_container">
                <div class="top">
                    <h1>${item.name}</h1>
                    <div class="close_button" style="cursor: pointer;">
                        <i class="ph ph-x-circle"></i>
                    </div>
                </div>
                <div class="middle">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illum quasi odio cupiditate. Eos rerum rem, repellendus ratione tempore neque doloremque earum ducimus voluptates! Iusto dignissimos iure omnis consequatur! Porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestias architecto quos necessitatibus veritatis totam vel possimus sapiente, quas iste rerum maiores dolorum, sequi quasi mollitia voluptates magni ea explicabo.</p>
                    <ul style="list-style-position: inside;">
                        ${listMaping(item.ingredients)}
                    </ul>
                </div>
                <div class="bottom">
                    <span>R$${item.value}</span>
                    <button type="button" class="added_cart cart_button">Adicionar ao carrinho</button>
                </div>
            </div>
        </section>
    `;

    const addItemToCart = document.querySelector("button.added_cart");

    const { name, image, value} = item // pega sómente esses atributos do cardapio que chamei de item nessa função, por causa do parametro.

    addItemToCart.addEventListener("click", () => {
        addCartItem(name, image, value);
        console.log(shopCart);
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
    let cartValues = {
        name: name,
        image:image, 
        value: value
    };

    shopCart.push(cartValues);

    return shopCart;
}

function viewCartItens() {
    section_content.innerHTML = "";

    if(section_content.classList.contains("menu_container")){
        section_content.classList.remove("menu_container");
    }

    section_content.innerHTML = isThereItensOnShopCart(shopCart);

    const removeItem = [...document.querySelectorAll("button.remove_cart_item")];

    const shopCartContainer = [...document.querySelectorAll(
      ".shopCart_container"
    )];

    removeItem.forEach((element, index) => {
        element.addEventListener("click", () => {
          removeCartItem(index, shopCartContainer);
        });
    })
}

function isThereItensOnShopCart(shopCart) {
    let returnItem = ""

    if (shopCart.length != 0) {
      shopCart.map((itens) => {
        returnItem += `<div class="shopCart_container">
                <h3>${itens.name}</h3><img src="${itens.image}" alt="image de hamburguer"><p>R$${itens.value}</p><button type="button" class="cart_button remove_cart_item">Remover item</button>
            </div>`;
      });
    } else {
      returnItem = "Não há itens no carrinho";
    }

    return returnItem
}

function removeCartItem(index, container) {
    shopCart.splice(index, 1);

    section_content.removeChild(container[index])
    if (shopCart.length == 0) {
        section_content.innerHTML = "Não há itens no carrinho";
    }
}


document.body.onload = inicio()
navigationButton[0].addEventListener("click", inicio);
navigationButton[1].addEventListener("click", menuGrid);
navigationButton[2].addEventListener("click", viewCartItens);