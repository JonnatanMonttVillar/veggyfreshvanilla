  //GLOBAL
  var products=[];
  var cartItems=[];
  var cart_n= document.getElementById('cart_n');


// DIVS
  var frutasDIV = document.getElementById("frutasDIV");
  var verdurasDIV = document.getElementById("verdurasDIV");
  var abarrotesDIV = document.getElementById("abarrotesDIV");

  
// INFORMACION
var FRUTA=[{name:'PLATANO', medida: 'kg', precio: 800},
           {name:'MANZANA' , medida: 'kg', precio: 700},
           {name:'NARANJA' , medida: 'kg', precio: 1000},
           {name:'MELON' , medida: 'unidad',  precio: 1000}
          ];

var VERDURAS=[{name:'TOMATE', medida: 'kg', precio: 800},
              {name:'ZANAHORIA', medida: 'kg', precio: 500},
              {name:'LECHUGA', medida: 'unidad', precio: 400},
              {name:'RECHICKEN', medida: 'unidad', precio: 1000} 
              ];

var ABARROTES=[{name:'POROTOS', medida: 'kg', precio: 1800},
               {name:'MANI', medida: 'kg', precio: 1000},
               {name:'CHIA', medida: 'kg', precio: 2000},
               {name:'LENTEJAS', medida: 'kg', precio: 2000}
              ];

//HTML FRUTAS
function HTMLfrutasProductos(con){
    
  let URL = `/img/frutas/fruta${con}.jpg`;
  let btn = `btnFruta${con}`;
  console.log(URL)

return` 
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm> 
      
      <div class="card-body" style="width: 18rem; height: 18rem; margin:auto; text-align:center;">

        <img class="card-img-top" src="${URL}" 
        style="width: 10rem; height: 10rem;">
        <p class="card-text">
        ${FRUTA[con-1].name}</p>

        <p class="card-text">
        PRECIO: ${FRUTA[con-1].precio} -  ${FRUTA[con-1].medida}</p>

        <div class="d-flex justify-content-center-between align-items-center">
          <div class="btn-group" style="margin: auto; margin-left: auto; margin-bottom: 1rem""> 

              <button type="button" onclick="cart2('${FRUTA[con-1].name}', '${FRUTA[con-1].medida}', 
              '${FRUTA[con-1].precio}', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-success">
              <a href="cart.html"  style="color:inherit;"> COMPRAR  </a> </button>

          </div>

          <div class="btn-group" style="margin: auto; margin-left: auto; margin-bottom: 1rem"> 
          
               <button id="${btn}" type="button" onclick="cart('${FRUTA[con-1].name}', '${FRUTA[con-1].medida}', 
              '${FRUTA[con-1].precio}', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-success">
               AGREGAR </button>

          </div>
            <div style="margin: auto; text-align:center; margin-bottom: 1.4rem"">
              <small class="text-muted"> Envio Gratis </small>
           </div>
        </div>
      </div>
    </div>
  </div> `};

//HTML FRUTAS
function HTMLverdurasProductos(con){
    
  let URL = `/img/verduras/verdura${con}.jpg`;
  let btn = `btnVerduras${con}`;
  console.log(URL)

return` 
<div class="col-md-4">
    <div class="card mb-4 shadow-sm> 
      
      <div class="card-body" style="width: 18rem; height: 18rem; margin:auto; text-align:center;">

        <img class="card-img-top" src="${URL}" 
        style="width: 10rem; height: 10rem;">
        <p class="card-text">
        ${VERDURAS[con-1].name}</p>

        <p class="card-text">
        PRECIO: ${VERDURAS[con-1].precio} -  ${VERDURAS[con-1].medida}</p>

        <div class="d-flex justify-content-center-between align-items-center">
          <div class="btn-group" style="margin: auto; margin-left: auto; margin-bottom: 1rem""> 

              <button type="button" onclick="cart2('${VERDURAS[con-1].name}', '${VERDURAS[con-1].medida}', 
              '${VERDURAS[con-1].precio}', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-success">
              <a href="cart.html"  style="color:inherit;"> COMPRAR  </a> </button>

          </div>

          <div class="btn-group" style="margin: auto; margin-left: auto; margin-bottom: 1rem"> 
          
               <button id="${btn}" type="button" onclick="cart('${VERDURAS[con-1].name}', '${VERDURAS[con-1].medida}', 
              '${VERDURAS[con-1].precio}', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-success">
               AGREGAR </button>

          </div>
            <div style="margin: auto; text-align:center; margin-bottom: 1.4rem"">
              <small class="text-muted"> Envio Gratis </small>
           </div>
        </div>
      </div>
    </div>
  </div>  `};

//HTML ABARROTES
function HTMLabarrotesProductos(con){
    
  let URL = `/img/abarrotes/abarrote${con}.jpg`;
  let btn = `btnAbarrote${con}`;
  console.log(URL)

return` 
<div class="col-md-4">
    <div class="card mb-4 shadow-sm> 
      
      <div class="card-body" style="width: 18rem; height: 18rem; margin:auto; text-align:center;">

        <img class="card-img-top" src="${URL}" 
        style="width: 10rem; height: 10rem;">
        <p class="card-text">
        ${ABARROTES[con-1].name}</p>

        <p class="card-text">
        PRECIO: ${ABARROTES[con-1].precio} -  ${ABARROTES[con-1].medida}</p>

        <div class="d-flex justify-content-center-between align-items-center">
          <div class="btn-group" style="margin: auto; margin-left: auto; margin-bottom: 1rem""> 

              <button type="button" onclick="cart2('${ABARROTES[con-1].name}', '${ABARROTES[con-1].medida}', 
              '${ABARROTES[con-1].precio}', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-success">
              <a href="cart.html"  style="color:inherit;"> COMPRAR  </a> </button>

          </div>

          <div class="btn-group" style="margin: auto; margin-left: auto; margin-bottom: 1rem"> 
          
               <button id="${btn}" type="button" onclick="cart('${ABARROTES[con-1].name}', '${ABARROTES[con-1].medida}', 
              '${ABARROTES[con-1].precio}', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-success">
               AGREGAR </button>

          </div>
            <div style="margin: auto; text-align:center; margin-bottom: 1.4rem"">
              <small class="text-muted"> Envio Gratis </small>
           </div>
        </div>
      </div>
    </div>
  </div> `};

  // ANIMACION DE SWEET ALERT
function animation(){
  Swal.fire({
    icon: 'success',
    position: 'center',
    showConfirmButton:false,
    timer: 1000,
    title: 'Agregado Al Carrito'
  })
}

//CART FUNCION
function cart(name, medida, precio, URL, con, btncart){
    var item = {
      name: name,
      medida: medida,
      precio: precio,
      url: URL
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
      products.push(item);
      localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));        
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}

function cart2(name, medida, precio, URL, con, btncart){
    var item = {
      name: name,
      medida: medida,
      precio: precio,
      url: URL
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
      products.push(item);
      localStorage.setItem("cart", JSON.stringify(products));
    } else {
      products = JSON.parse(localStorage.getItem("cart"));
      products.push(item);
      localStorage.setItem
      ("cart", JSON.stringify(products));        
    }

    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}
//RENDER
function render(){
    for (let index = 1; index <= 4; index++) {
      // frutasDIV.innerHTML+=`${HTMLfrutasProductos(index)}`;
      frutasDIV.innerHTML+=`${HTMLfrutasProductos(index)}`;
      abarrotesDIV.innerHTML+=`${HTMLabarrotesProductos(index)}`;
      verdurasDIV.innerHTML+=`${HTMLverdurasProductos(index)}`;
    }

    //En caso de usar una cantidad distinta de imagen cargar en otro for
    /*for (let index = 1; index <= 6; index++) {
      abarrotesDIV.innerHTML+=`${HTMLabarrotesProductos(index)}`;
    }*/

    if (localStorage.getItem("cart")==null) {
      
    } else {
      products=JSON.parse(localStorage.getItem("cart"));
      cart_n.innerHTML=`[${products.length}]`;
    }
}
