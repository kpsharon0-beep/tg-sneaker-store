const products=[

{name:"Nike Dunk Hayley Wilson",price:1999,mrp:3999,brand:"Nike",img:"hayley.jpg",desc:"Limited Dunk"},
{name:"Jordan Dior High",price:1999,mrp:3999,brand:"Nike",img:"jordan1.jpg",desc:"Luxury"},
{name:"Nike Dunk Ghost Rider",price:2000,mrp:3999,brand:"Nike",img:"gostrider.jpg",desc:"Dark"},
{name:"Nike Chunky Dunky",price:1999,mrp:3999,brand:"Nike",img:"chunky.jpg",desc:"Colorful"},

{name:"RedTape Lifestyle",price:1999,mrp:2999,brand:"RedTape",img:"radtape-lifestyle.jpg"},
{name:"RedTape Casual",price:1899,mrp:2799,brand:"RedTape",img:"redtape-casual.jpg"},
{name:"RedTape Comfort",price:1999,mrp:2999,brand:"RedTape",img:"redtape3.jpg"},
{name:"RedTape Style",price:1799,mrp:2599,brand:"RedTape",img:"redtape4.jpg"},

{name:"Campus OG07",price:999,mrp:1999,brand:"Campus",img:"og07.jpg"},
{name:"Campus OG30",price:1299,mrp:1999,brand:"Campus",img:"og30.jpg"},

{name:"Asian Runner",price:899,mrp:1499,brand:"Asian",img:"asian1.jpg"},
{name:"Asian Street Sneaker",price:1099,mrp:1699,brand:"Asian",img:"asian2.jpg"},
{name:"55 SAMA BLACK",price:999,mrp:1599,brand:"Asian",img:"sama-black.jpg"},
{name:"Bacan Multi Colour",price:799,mrp:1299,brand:"Asian",img:"bacan-multicolour.jpg"}

];

const container=document.getElementById("products");

// EXPLORE AUTO SCROLL
function exploreNow(){
renderProducts(products);

setTimeout(()=>{
document.getElementById("products").scrollIntoView({
behavior:"smooth"
});
},200);
}

// RENDER
function renderProducts(list){
container.innerHTML="";
document.getElementById("productView").innerHTML="";

list.forEach((p,index)=>{
const off=Math.round((1-p.price/p.mrp)*100);

container.innerHTML+=`
<div class="product" style="animation-delay:${index*0.1}s">
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
container.innerHTML="";

document.getElementById("productView").innerHTML=`
<div style="text-align:center;padding:20px;animation:fadeUp 0.5s ease">

<img src="${img}" style="width:250px">
<h2>${name}</h2>
<h3>₹${price}</h3>

<button onclick="order('${name}',${price})">Order</button>

<br><br>
<button onclick="exploreNow()">Back</button>

</div>
`;
}

// ORDER
function order(name,price){
window.location.href=`https://wa.me/918281454227?text=Order ${name} ₹${price}`;
}

// FILTERS
function filterNike(){
renderProducts(products.filter(p=>p.brand==="Nike"));
}

function filterBrand(brand){
if(brand==="all") return renderProducts(products);
renderProducts(products.filter(p=>p.brand===brand));
}

function filterPrice(price){
if(price==="all") return renderProducts(products);
renderProducts(products.filter(p=>p.price<=Number(price)));
}

// SEARCH
function searchProduct(q){
q=q.toLowerCase();
renderProducts(products.filter(p=>p.name.toLowerCase().includes(q)));
}
