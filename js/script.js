import menuItens from "./cardapio/cardapio.js";
const section_content = document.querySelector("main > section");
const navigationButton = [...document.querySelectorAll(".nav")];
let shopCart = new Array();

function inicio() {
  section_content.innerHTML = "";

  if (section_content.classList.contains("menu_container")) {
    section_content.classList.remove("menu_container");
  }
  section_content.innerHTML = `
   <img src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" alt="">
  <div class="row img">
        <div class="column img">
            <img src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" style="width:100%" onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
        </div>
        <div class="column img">
            <img src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" style="width:100%" onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
        </div>
        <div class="column img">
            <img src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" style="width:100%" onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
        </div>
        <div class="column img">
            <img src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" style="width:100%" onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
        </div>
    </div>

    <div id="myModal" class="modal">
        <span class="close cursor"</span>
        <div class="modal-content">

            <div class="mySlides img">
                <div class="numbertext">1 / 4</div>
                <img src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" style="width:100%">
            </div>

            <div class="mySlides img">
                <div class="numbertext">2 / 4</div>
                <img src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" style="width:100%">
            </div>

            <div class="mySlides img">
                <div class="numbertext">3 / 4</div>
                <img src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" style="width:100%">
            </div>

            <div class="mySlides img">
                <div class="numbertext">4 / 4</div>
                <img src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" style="width:100%">
            </div>

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>

            <div class="caption-container">
                <p id="caption"></p>
            </div>


            <div class="column">
                <img class="demo cursor img" src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" style="width:100%" onclick="currentSlide(1)"
                    alt="Brincando com as bombinhas do Machado Festas">
            </div>
            <div class="column img">
                <img class="demo cursor" src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" style="width:100%" onclick="currentSlide(2)"
                    alt="Momentos inesqueciveis com familiares foram feitos naquela garagem">
            </div>
            <div class="column img">
                <img class="demo cursor" src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" style="width:100%" onclick="currentSlide(3)"
                    alt="Outro acontecimento na Machado Festas">
            </div>
            <div class="column img">
                <img class="demo cursor" src="https://gkpb.com.br/wp-content/uploads/2022/12/Whopper-em-Dobro-1024x576.jpg" style="width:100%" onclick="currentSlide(4)"
                    alt="Reunião em família é uma coisa mágica">
            </div>
        </div>
    </div>`;
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

// navigationButton[2].addEventListener("click", closeModal());
const depoisvcnomeia = [...document.querySelectorAll(".img")]; 

depoisvcnomeia.forEach((element) => {
    element.addEventListener("click", () => {
        alert("clicou")
        console.log(element)
    })
})

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}