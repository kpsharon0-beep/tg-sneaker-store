console.log("Sneaker Store Loaded");

/* PRODUCT DATABASE */

const products=[

{
name:"Campus OG07",
price:999,
brand:"Campus",
img:"og07.jpg"
},

{
name:"Campus OG30",
price:1299,
brand:"Campus",
img:"og30.jpg"
},

{
name:"Campus Pass Moments",
price:1299,
brand:"Campus",
img:"Untitled.jpeg"
},

{
name:"Asian Runner",
price:899,
brand:"Asian",
img:"asian1.jpg"
},

{
name:"Asian Street Sneaker",
price:1099,
brand:"Asian",
img:"asian2.jpg"
},

{
name:"55 SAMA BLACK",
price:999,
brand:"Asian",
img:"sama-black.jpg"
},

{
name:"Bacan Multi Colour Sneakers Trendy Sports Shoes Classy Casual Shoes For Men",
price:799,
brand:"Asian",
img:"bacan-multicolour.jpg"
},

{
name:"Men's Sneakers for Casual Everyday Style",
price:1499,
brand:"RedTape",
img:"redtape-style.jpg"
},

{
name:"Men's Lifestyle Sneakers",
price:1499,
brand:"RedTape",
img:"redtape-lifestyle.jpg"
}

];


/* RENDER PRODUCTS */

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

}


/* FILTERS */

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


/* PRODUCT PAGE */

function viewProduct(name,price,img){

document.getElementById("products").style.display="none"

document.getElementById("productView").innerHTML=

`

<div class="nike-product">

<div class="nike-left">

<img src="${img}" class="nike-shoe">

</div>

<div class="nike-right">

<h1>${name}</h1>

<h2>₹${price}</h2>

<p>
Premium sneaker for everyday comfort, breathable design
and durable outsole perfect for street style.
</p>

<h3>Select Size</h3>

<div class="sizes">

<button>7</button>
<button>8</button>
<button>9</button>
<button>10</button>

</div>

<button class="buy-btn" onclick="checkout('${name}',${price})">
Buy Now
</button>

</div>

</div>

`;

}


/* CHECKOUT */

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


/* PAYMENT */

function pay(name,price){

const customerName=document.getElementById("name").value
const phone=document.getElementById("phone").value
const address=document.getElementById("address").value
const pincode=document.getElementById("pincode").value

const order=`

Sneaker Order

Product: ${name}
Price: ₹${price}

Customer: ${customerName}
Phone: ${phone}
Address: ${address}
Pincode: ${pincode}

`

window.location.href=
`upi://pay?pa=abinavsdinesh24@fam&pn=SneakerStore&am=${price}`

window.open(
`https://wa.me/918281454227?text=${encodeURIComponent(order)}`
)

window.open(
`mailto:kpsharon0@gmail.com?subject=Sneaker Order&body=${encodeURIComponent(order)}`
)

}


/* INITIAL LOAD */

renderProducts(products);


/* 3D HOVER EFFECT */

document.addEventListener("mousemove",e=>{

document.querySelectorAll(".product").forEach(card=>{

const rect=card.getBoundingClientRect()

const x=e.clientX-rect.left
const y=e.clientY-rect.top

const centerX=rect.width/2
const centerY=rect.height/2

const rotateX=(y-centerY)/12
const rotateY=(centerX-x)/12

card.querySelector(".product-inner").style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

})

})

document.addEventListener("mouseleave",()=>{

document.querySelectorAll(".product-inner").forEach(card=>{
card.style.transform="rotateX(0) rotateY(0)"
})

})
