const products=[

// 🔥 MAIN PRODUCT
{
name:"Nike Dunk Hayley Wilson",
price:1999,
mrp:3999,
brand:"Nike",
img:"hayley.jpg",
stock:3,
desc:"Limited Hayley Wilson Dunk.",
reviews:["🔥 best","premium","worth"]
},

{name:"Jordan Dior High",price:1999,mrp:3999,brand:"Nike",img:"jordan1.jpg",stock:3,desc:"Luxury sneaker",reviews:["🔥","good"]},

{name:"Nike Dunk Ghost Rider",price:2000,mrp:3999,brand:"Nike",img:"gostrider.jpg",stock:2,desc:"Dark sneaker",reviews:["🔥","nice"]},

{name:"Campus OG07",price:999,mrp:1999,brand:"Campus",img:"og07.jpg",stock:10,desc:"Budget sneaker",reviews:["cheap","good"]}

const products=[

// 🔥 NIKE (HYPE)
{
name:"Nike Dunk Hayley Wilson",
price:1999,
mrp:3999,
brand:"Nike",
img:"hayley.jpg",
stock:3,
desc:"Limited Hayley Wilson Dunk.",
reviews:["🔥 best","premium","worth"]
},

{
name:"Jordan Dior High",
price:1999,
mrp:3999,
brand:"Nike",
img:"jordan1.jpg",
stock:3,
desc:"Luxury high-top sneaker.",
reviews:["🔥 clean","premium","nice"]
},

{
name:"Nike Dunk Ghost Rider",
price:2000,
mrp:3999,
brand:"Nike",
img:"gostrider.jpg",
stock:2,
desc:"Dark themed dunk.",
reviews:["🔥 crazy","cool","unique"]
},

{
name:"Nike Chunky Dunky",
price:1999,
mrp:3999,
brand:"Nike",
img:"chunky.jpg",
stock:4,
desc:"Colorful hype sneaker.",
reviews:["🔥 fun","trendy","cool"]
},

// 👟 REDTAPE
{
name:"RedTape Lifestyle",
price:1999,
mrp:2999,
brand:"RedTape",
img:"redtape.jpg",
stock:5,
desc:"Daily wear sneaker.",
reviews:["good","nice","value"]
},

{
name:"RedTape Casual",
price:1899,
mrp:2799,
brand:"RedTape",
img:"redtape2.jpg",
stock:6,
desc:"Casual street sneaker.",
reviews:["clean","cool","nice"]
},

{
name:"RedTape Comfort",
price:1999,
mrp:2999,
brand:"RedTape",
img:"redtape3.jpg",
stock:4,
desc:"Comfort focused sneaker.",
reviews:["soft","good","nice"]
},

{
name:"RedTape Style",
price:1799,
mrp:2599,
brand:"RedTape",
img:"redtape4.jpg",
stock:7,
desc:"Modern design sneaker.",
reviews:["stylish","cool","nice"]
},

// 👟 CAMPUS
{
name:"Campus OG07",
price:999,
mrp:1999,
brand:"Campus",
img:"og07.jpg",
stock:10,
desc:"Budget sneaker.",
reviews:["cheap","good","value"]
},

{
name:"Campus OG30",
price:1299,
mrp:1999,
brand:"Campus",
img:"og30.jpg",
stock:8,
desc:"Sporty sneaker.",
reviews:["nice","good","fit"]
},

// 👟 ASIAN
{
name:"Asian Runner",
price:899,
mrp:1499,
brand:"Asian",
img:"asian1.jpg",
stock:12,
desc:"Lightweight runner.",
reviews:["light","good","cheap"]
},

{
name:"Asian Street Sneaker",
price:1099,
mrp:1699,
brand:"Asian",
img:"asian2.jpg",
stock:9,
desc:"Street style sneaker.",
reviews:["cool","nice","fit"]
},

{
name:"55 SAMA BLACK",
price:999,
mrp:1599,
brand:"Asian",
img:"sama-black.jpg",
stock:11,
desc:"Minimal black sneaker.",
reviews:["clean","good","nice"]
},

{
name:"Bacan Multi Colour",
price:799,
mrp:1299,
brand:"Asian",
img:"bacan-multicolour.jpg",
stock:13,
desc:"Colorful sneaker.",
reviews:["fun","cheap","nice"]
}

];

];

const container=document.getElementById("products");

// HOME
function goHome(){
container.innerHTML="";
document.getElementById("productView").innerHTML="";
}

// STORE
function showStore(){
renderProducts(products);
}

// FILTER
function filterNike(){
renderProducts(products.filter(p=>p.brand==="Nike"));
}

function filterBrand(b){
if(b==="all") return renderProducts(products);
renderProducts(products.filter(p=>p.brand===b));
}

function filterPrice(p){
if(p==="all") return renderProducts(products);
renderProducts(products.filter(x=>x.price<=p));
}

// SEARCH
function searchProduct(q){
q=q.toLowerCase();
renderProducts(products.filter(p=>p.name.toLowerCase().includes(q)));
}

// RENDER
function renderProducts(list){
container.innerHTML="";
document.getElementById("productView").innerHTML="";

list.forEach(p=>{
const off=Math.round((1-p.price/p.mrp)*100);

container.innerHTML+=`
<div class="product">
<div class="product-inner">

<img src="${p.img}">
<h3>${p.name}</h3>

<p>
<span style="text-decoration:line-through;color:gray;">₹${p.mrp}</span><br>
₹${p.price} (${off}% OFF)
</p>

<button onclick="viewProduct('${p.name}',${p.price},'${p.img}')">
View
</button>

</div>
</div>
`;
});
}

// VIEW
function viewProduct(name,price,img){
const p=products.find(x=>x.name===name);

container.innerHTML="";

document.getElementById("productView").innerHTML=`
<div style="text-align:center;padding:20px;">

<img src="${img}" style="width:250px">

<h2>${name}</h2>
<h3>₹${price}</h3>

<p>${p.desc}</p>

<button onclick="order('${name}',${price})">Order</button>

<br><br>
<button onclick="showStore()">Back</button>

</div>
`;
}

// ORDER
function order(name,price){
window.location.href=`https://wa.me/918281454227?text=Order ${name} ₹${price}`;
}

// START CLEAN
goHome();
