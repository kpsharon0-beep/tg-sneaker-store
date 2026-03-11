const products=[

{name:"Campus OG07",price:999,brand:"Campus",img:"og07.jpg"},

{name:"Campus OG30",price:1299,brand:"Campus",img:"og30.jpg"},

{name:"Asian Runner",price:899,brand:"Asian",img:"asian1.jpg"},

{name:"Asian Street Sneaker",price:1099,brand:"Asian",img:"asian2.jpg"},

{name:"55 SAMA BLACK",price:999,brand:"Asian",img:"sama-black.jpg"},

{name:"Bacan Multi Colour Sneakers",price:799,brand:"Asian",img:"bacan-multicolour.jpg"},

{name:"RedTape Casual Sneaker",price:1499,brand:"RedTape",img:"redtape.jpg"}

];

function renderProducts(list){

const container=document.getElementById("products");

container.innerHTML="";

list.forEach(p=>{

container.innerHTML+=`

<div class="product">

<div class="product-inner">

<img src="${p.img}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="viewProduct('${p.name}',${p.price},'${p.img}')">
View
</button>

</div>

</div>

`;

});

enable3D();

}

function filterCampus(){
renderProducts(products.filter(p=>p.brand==="Campus"));
}

function filterAsian(){
renderProducts(products.filter(p=>p.brand==="Asian"));
}

function filterRedtape(){
renderProducts(products.filter(p=>p.brand==="RedTape"));
}

function filterPrice(){
renderProducts(products.filter(p=>p.price<=1000));
}

function viewProduct(name,price,img){

document.getElementById("products").style.display="none";

document.getElementById("productView").innerHTML=

`

<div class="nike-product">

<div class="nike-left">

<img src="${img}">

</div>

<div>

<h1>${name}</h1>

<h2>₹${price}</h2>

<p>Premium everyday sneaker with comfort and durability.</p>

<div class="sizes">

<button>7</button>
<button>8</button>
<button>9</button>
<button>10</button>

</div>

<br>

<button class="buy-btn" onclick="checkout('${name}',${price})">
Buy Now
</button>

</div>

</div>

`;

}

function checkout(name,price){

document.getElementById("productView").innerHTML=

`

<h2>Delivery Details</h2>

<input id="name" placeholder="Name"><br><br>

<input id="phone" placeholder="Phone"><br><br>

<input id="address" placeholder="Address"><br><br>

<input id="pincode" placeholder="Pincode"><br><br>

<button onclick="pay('${name}',${price})">
Pay Now
</button>

`;

}

function pay(name,price){

const order=

`Sneaker Order

Product:${name}
Price:${price}`;

window.location.href=
`upi://pay?pa=abinavsdinesh24@fam&pn=SneakerStore&am=${price}`;

window.open(
`https://wa.me/918281454227?text=${encodeURIComponent(order)}`
);

window.open(
`mailto:kpsharon0@gmail.com?subject=Sneaker Order&body=${encodeURIComponent(order)}`
);

}

function enable3D(){

document.querySelectorAll(".product").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const centerX=rect.width/2;
const centerY=rect.height/2;

const rotateX=(y-centerY)/10;
const rotateY=(centerX-x)/10;

card.querySelector(".product-inner").style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.querySelector(".product-inner").style.transform=
"rotateX(0) rotateY(0)";

});

});

}

renderProducts(products);
