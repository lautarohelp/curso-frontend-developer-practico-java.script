const menuEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const menuHamIcon = document.querySelector(`.menu`);
const menuCarritoIcon = document.querySelector(`.navbar-shopping-cart`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const aside = document.querySelector(`.product-detail`);
const cardsContainer = document.querySelector(`.cards-container`);


menuEmail.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarritoIcon.addEventListener(`click`, toggleCarritoAside );

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains(`inactive`);
    if (!isAsideClosed) {
        aside.classList.add(`inactive`);
    }


    desktopMenu.classList.toggle(`inactive`);

}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains(`inactive`);

    if (!isAsideClosed) {
        aside.classList.add(`inactive`);
    }
  

    mobileMenu.classList.toggle(`inactive`);

}

function toggleCarritoAside() {
   const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);

   const isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);


   /* const isAsideClosed = aside.classList.contains(`inactive`); */    
   //o podemos preguntar open

   // aside.classlist.toggle(`inactive`)
   if (!isMobileMenuClosed){
    mobileMenu.classList.add( `inactive`);
   }
   else if (!isDesktopMenuClosed){
    desktopMenu.classList.add(`inactive`)
   }

    aside.classList.toggle(`inactive`)
   
 }
 
 /*   if (isAsideClosed) {
    mobileMenu.classList.add(`inactive`);
   //abriri el aside */

   //si el mobilMenu esta open,hay que cerrarlo

   //crear cosas d arrays y meterlo al html

   const productList = [];
   productList.push({
    name: `Bike`,
    price: 120 ,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    
   })

   productList.push({
    name: `zapatillas`,
    price: 200 ,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    
   })

   productList.push({
    name: `Sansung`,
    price: 326 ,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    
   })

   productList.push({
    name: `Gorra`,
    price: 12 ,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    
   })

   productList.push({
    name: `Adidas`,
    price: 300 ,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    
   })
 /*
   <div class="product-card">
   <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
   <div class="product-info">
     <div>
       <p>$120,00</p>
       <p>Bike</p>
     </div>
     <figure>
       <img src="./icons/bt_add_to_cart.svg" alt="">
     </figure>
   </div>
 </div>
 */
function renderProducts(arr){ 
  
  //podemos almacenar nuestro contenido para organisarlo dentro de una funcion 
  //tambien podemos mandar a llamarla despues y agregarles unas funciones (hacer que las img aparescan despues de seleccionar un buton)
  
  for (product of productList) {  //creamos un html 
    const productCard = document.createElement(`div`); // podemos crear elementos (etiquetas)
    productCard.classList.add(`product-card`); //tambien agregarles class


//product= {name, price, image} -> product,image

const productImg = document.createElement(`img`);
productImg.setAttribute(`src`, product.image);

const productInfo = document.createElement(`div`);
productInfo.classList.add(`product-info`);

const productInfoDiv = document.createElement(`div`); //podemos insertar dentro de las etiquetas

const productPrice = document.createElement(`p`);
productPrice.innerText = `$` + product.price;
const productName = document.createElement(`p`);
productName.innerText = product.name ;

productInfoDiv.appendChild(productPrice);
productInfoDiv.appendChild(productName);

const productInfoFigure = document.createElement("figure");
const productImgCart = document.createElement("img");
productImgCart.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);

productInfoFigure.appendChild(productImgCart);

productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);

productCard.appendChild(productImg);
productCard.appendChild(productInfo);

cardsContainer.appendChild(productCard)

}

}

//Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.

//productInfoDiv.append(productPrice, productName)