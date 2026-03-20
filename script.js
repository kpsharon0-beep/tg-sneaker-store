
let wishlist=[];

const products=[

// NIKE
{name:"Jordan Dior High",price:1999,brand:"Nike",img:"jordan1.jpg",stock:3,desc:"Luxury high-top sneaker.",reviews:["🔥 insane","premium","worth","clean","top","🔥🔥","best","fit","nice","fast"]},

{name:"Nike Dunk Ghost Rider",price:2000,brand:"Nike",img:"gostrider.jpg",stock:2,desc:"Dark bold sneaker.",reviews:["crazy","🔥","unique","best","cool","fit","good","🔥🔥","nice","worth"]},

{name:"Nike Chunky Dunky",price:1999,brand:"Nike",img:"chunky.jpg",stock:4,desc:"Colorful hype sneaker.",reviews:["fun","🔥","cool","trendy","nice","good","🔥🔥","fit","best","value"]},

// REDTAPE
{name:"RedTape Lifestyle",price:1999,brand:"RedTape",img:"redtape.jpg",stock:5,desc:"Daily comfort sneaker.",reviews:["good","🔥","nice","fit","value","best","cool","clean","solid","worth"]},

{name:"RedTape Casual",price:1899,brand:"RedTape",img:"redtape2.jpg",stock:6,desc:"Casual stylish sneaker.",reviews:["cool","🔥","nice","good","fit","clean","value","best","comfort","solid"]},

{name:"RedTape Comfort",price:1999,brand:"RedTape",img:"redtape3.jpg",stock:4,desc:"Extra comfort sneaker.",reviews:["soft","🔥","nice","good","best","fit","clean","value","cool","top"]},

{name:"RedTape Style",price:1799,brand:"RedTape",img:"redtape4.jpg",stock:7,desc:"Modern street sneaker.",reviews:["stylish","🔥","cool","nice","good","fit","clean","value","best","love"]},

// CAMPUS
{name:"Campus OG07",price:999,brand:"Campus",img:"og07.jpg",stock:10,desc:"Budget sneaker.",reviews:["cheap","🔥","nice","comfort","best","fit","good","value","cool","worth"]},

{name:"Campus OG30",price:1299,brand:"Campus",img:"og30.jpg",stock:8,desc:"Sporty sneaker.",reviews:["strong","🔥","nice","good","comfort","best","fit","value","cool","love"]},

// ASIAN
{name:"Asian Runner",price:899,brand:"Asian",img:"asian1.jpg",stock:12,desc:"Lightweight runner.",reviews:["light","🔥","nice","comfort","good","fit","best","cheap","cool","value"]},

{name:"Asian Street Sneaker",price:1099,brand:"Asian",img:"asian2.jpg",stock:9,desc:"Street sneaker.",reviews:["cool","🔥","nice","good","fit","comfort","best","value","clean","love"]},

{name:"55 SAMA BLACK",price:999,brand:"Asian",img:"sama-black.jpg",stock:11,desc:"Minimal black sneaker.",reviews:["clean","🔥","nice","good","fit","comfort","best","value","cool","love"]},

{name:"Bacan Multi Colour",price:799,brand:"Asian",img:"bacan-multicolour.jpg",stock:13,desc:"Colorful sneaker.",reviews:["colorful","🔥","nice","good","fit","comfort","best","cheap","cool","love"]}

];

const container=document.getElementById("products");

// HOME
function showHome(){filterNike();}

// STORE
function showStore(){renderProducts(products);}

// FILTERS
function filterNike(){renderProducts(products.filter(p=>p.brand==="Nike"));}

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

// WISHLIST
function toggleWish(name){
if(wishlist.includes(name)){
wishlist=wishlist.filter(x=>x!==name);
}else{
wishlist.push(name);
}
alert("Wishlist updated ❤️");
}

// RENDER
function renderProducts(list){
container.innerHTML="";
document.getElementById("productView").innerHTML="";
document.getElementById("orderBox").innerHTML="";

list.forEach(p=>{
container.innerHTML+=`
<div class="product">
<div class="product-inner">

<div class="wishlist" onclick="toggleWish('${p.name}')">❤️</div>

<img src="${p.img}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>

<p style="color:red;">Only ${p.stock} left</p>

<button onclick="viewProduct('${p.name}',${p.price},'${p.img}')">View</button>

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
<div class="nike-product">
<img src="${img}" style="width:250px">
<h2>${name}</h2>
<h3>₹${price}</h3>
<p>${p.desc}</p>

<select id="size">
<option>7</option><option>8</option><option>9</option><option>10</option>
</select>

<button onclick="openOrder('${name}',${price})">Buy Now</button>

<h3>Reviews</h3>
<div id="reviews">${p.reviews.map(r=>`<p>${r}</p>`).join("")}</div>

<input id="reviewInput" placeholder="Write review">
<button onclick="addReview('${name}')">Post</button>

<br><br>
<button onclick="showStore()">Back</button>
</div>
`;
}

// REVIEW
function addReview(name){
const txt=document.getElementById("reviewInput").value;
if(!txt)return alert("write something");

const p=products.find(x=>x.name===name);
p.reviews.push(txt);
viewProduct(p.name,p.price,p.img);
}

// ORDER
function openOrder(name,price){
document.getElementById("orderBox").innerHTML=`
<h3>Enter Details</h3>
<input id="n" placeholder="Name">
<input id="ph" placeholder="Phone">
<input id="ad" placeholder="Address">

<button onclick="confirmOrder('${name}',${price})">Confirm</button>
`;
}

// FINAL ORDER
function confirmOrder(name,price){
const n=document.getElementById("n").value;
const ph=document.getElementById("ph").value;
const ad=document.getElementById("ad").value;
const size=document.getElementById("size").value;

if(!n||!ph||!ad)return alert("fill all");

startRain();

const msg=`Order:
${name}
₹${price}
Size:${size}
Name:${n}
Phone:${ph}
Address:${ad}`;

setTimeout(()=>{
window.location.href=`https://wa.me/918281454227?text=${encodeURIComponent(msg)}`;
},2000);
}

// SLIDER
const slides=["jordan1.jpg","gostrider.jpg","chunky.jpg"];
let i=0;
setInterval(()=>{
i=(i+1)%slides.length;
document.getElementById("slideImg").src=slides[i];
},2500);

// RAIN
function startRain(){
const rain=document.createElement("div");
rain.className="sneaker-rain";
document.body.appendChild(rain);

for(let i=0;i<80;i++){
const img=document.createElement("img");
img.src="jordan1.jpg";
img.className="shoe";
img.style.left=Math.random()*100+"%";
img.style.animationDuration=(Math.random()*2+2)+"s";
rain.appendChild(img);
}

setTimeout(()=>rain.remove(),2500);
}

// START
showHome();
