//GLOBAL
var products = JSON.parse(localStorage.getItem('cart'));
var cartItems = [];
var cart_n = document.getElementById('cart_n');
var table = document.getElementById("table");
var total = 0;

//HTML

function tableHTML(i){
    return`
    
    <tr>
    <th scope = "row">${i+1}</th>
    <td> <img style ="width: 90px;" src="${products[i].url}"> 
    </td>
    <td> ${products[i].name}</td>
    <td> 1 ${products[i].medida}</td>
    <td> ${products[i].precio}</td>
    </tr>   

    `;
}
//buy
function buy(){
  var d = new Date();
  var t = d.getTime();
  var counter = t;
  counter;  
  let db = firebase.database().ref("order/"+ counter);
  let itemdb = {
    id: counter,
    order: counter -895,
    total: total
  }  
  db.set(itemdb);
  Swal.fire({
    position: 'center',
    type: 'success',
    title:'Compra Completada!',
    text:`Tu numero de orden es: ${itemdb.order}`,
    showConfirmButton: true,
    timer: 50000
  });
  clean();
}
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

function clean(){
  localStorage.clear();
  for (let index = 0; index < products.length; index++) {
    
    table.innerHTML +=(index);
    total=total+parseInt(products[index].precio);
  }
  total = 0;
  table.innerHTML=`
  <tr>
    <th> </th>
    <th> </th>
    <th> </th>
    <th> </th>
    <th> </th>
  </tr>   
  `;
  cart_n.innerHTML=''; 
  document.getElementById("btnClean").style.display="none";
  document.getElementById("btnBuy").style.display="none";
}

//RENDER
function render(){
      for (let index = 0; index < products.length; index++) {
      table.innerHTML+= tableHTML(index);
      total = total + parseInt(products[index].precio);
    }
    table.innerHTML+=`
    <tr>
      <th scope="col"> </th>
      <th scope="col"> </th>
      <th scope="col"> </th>
      <th scope="col"> </th>
      <th scope="col">TOTAL: $${total}</th>
    </tr>   
    <tr>
    <th scope="col"> </th>
    <th scope="col"> </th>
    <th scope="col"> </th>
    <th scope="col"> 
    <button id="btnClean" onClick="clean()" class="btn text-white btn-warning"> Limpiar Carrito</button>
    </th>
    <th scope="col">
    <button id="btnBuy" onClick="buy()" class="btn btn-success"> Comprar </button>
    </th>
  </tr>   
    `;

    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
}