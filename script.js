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
}

{
name:"Men's Sneakers for Casual Everyday Style",
price:1499,
brand:"RedTape",
img:"redtape-style.jpg"
},

{
name:"Men's Lifestyle Sneakers | Sleek Lace-Up Design for Daily Comfort",
price:1499,
brand:"RedTape",
img:"redtape-lifestyle.jpg"
},

{
name:"Men Sneakers for Casual Everyday Comfort",
price:1499,
brand:"RedTape",
img:"redtape-comfort.jpg"
},

{
name:"Casual Sneaker Shoes for Men",
price:1499,
brand:"RedTape",
img:"redtape-casual.jpg"
}
  
]

function renderProducts(list){

const container=document.getElementById("products")
container.innerHTML=""

list.forEach(p=>{

container.innerHTML+=`

<div class="product">

<img src="${p.img}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="viewProduct('${p.name}',${p.price},'${p.img}')">
View
</button>

</div>

`

})

}

/* SHOW ONLY CAMPUS SHOES */

function filterCampus(){

const campusProducts=products.filter(p=>p.brand==="Campus")

renderProducts(campusProducts)

}

/* SHOW SHOES UNDER ₹1000 */

function filterPrice(){

const cheap=products.filter(p=>p.price<=1000)

renderProducts(cheap)

}

/* SHOW ONLY ASIAN SHOES */

function filterAsian(){

const asianProducts = products.filter(p => p.brand === "Asian")

renderProducts(asianProducts)

}

/* PRODUCT VIEW PAGE */

function viewProduct(name,price,img){

document.getElementById("products").style.display="none"

document.getElementById("productView").innerHTML=

`

<div class="single">

<img src="${img}" style="width:300px">

<h2>${name}</h2>

<h3>₹${price}</h3>

<select>

<option>Select Size</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>

</select>

<br><br>

<button onclick="checkout('${name}',${price})">
Buy Now
</button>

</div>

`

}

/* CHECKOUT PAGE */

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

`

}

/* PAYMENT */

function pay(name,price){

const order=`
Sneaker Order

Product: ${name}
Price: ₹${price}
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
