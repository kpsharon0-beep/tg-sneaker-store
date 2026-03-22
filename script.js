let wishlist=[];

const products=[

// 🔥 HAYLEY (MAIN SELLER)
{
name:"Nike Dunk Hayley Wilson",
price:1999,
mrp:3999,
brand:"Nike",
img:"hayley.jpg",
stock:3,
desc:"Limited edition Hayley Wilson Dunk. High demand sneaker.",
hype:true,
reviews:["🔥 BEST","premium","worth","clean","top","🔥🔥","fit","nice","must cop","10/10"]
},

// OTHER PRODUCTS
{name:"Jordan Dior High",price:1999,mrp:3999,brand:"Nike",img:"jordan1.jpg",stock:3,desc:"Luxury sneaker",reviews:["🔥","good","nice"]},
{name:"Nike Dunk Ghost Rider",price:2000,mrp:3999,brand:"Nike",img:"gostrider.jpg",stock:2,desc:"Dark sneaker",reviews:["🔥","cool","nice"]},
{name:"Nike Chunky Dunky",price:1999,mrp:3999,brand:"Nike",img:"chunky.jpg",stock:4,desc:"Colorful sneaker",reviews:["🔥","nice","good"]},

{name:"RedTape Lifestyle",price:1999,mrp:2999,brand:"RedTape",img:"redtape.jpg",stock:5,desc:"Daily sneaker",reviews:["good","nice"]},
{name:"Campus OG07",price:999,mrp:1999,brand:"Campus",img:"og07.jpg",stock:10,desc:"Budget sneaker",reviews:["cheap","good"]}

];

const container=document.getElementById("products");

// RENDER
function renderProducts(list){
container.innerHTML="";

list.forEach(p=>{
const off=Math.round((1-p.price/p.mrp)*100);

container.innerHTML+=`
<div class="product">
<div class="product-inner">

<div class="wishlist">❤️</div>
<div class="discount">${off}% OFF</div>

${p.hype ? '<p style="color:gold;">🔥 HYPE DROP</p>' : ''}

<img src="${p.img}">
<h3>${p.name}</h3>

<p>
<span style="text-decoration:line-through;color:gray;">₹${p.mrp}</span><br>
<span style="color:#00ffae;">₹${p.price}</span>
</p>

<p style="color:red;">Only ${p.stock} left ⚠️</p>
<p style="font-size:12px;">👀 27 viewing</p>

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
const off=Math.round((1-p.price/p.mrp)*100);

container.innerHTML="";

document.getElementById("productView").innerHTML=`
<div class="nike-product">

<img src="${img}" style="width:250px">

<h2>${name}</h2>

<h3>
<span style="text-decoration:line-through;color:gray;">₹${p.mrp}</span><br>
<span style="color:#00ffae;">₹${price}</span>
</h3>

<p style="color:orange;">🔥 ${off}% OFF</p>
<p style="color:red;">Only ${p.stock} left</p>

<p>${p.desc}</p>

<select id="size">
<option>7</option><option>8</option><option>9</option><option>10</option>
</select>

<button onclick="buyNow('${name}',${price})">Buy Now</button>

<h3>Reviews</h3>
${p.reviews.map(r=>`<p>${r}</p>`).join("")}

<input id="rev" placeholder="Write review">
<button onclick="addReview('${name}')">Post</button>

<br><br>
<button onclick="showStore()">Back</button>

</div>
`;
}

// REVIEW
function addReview(name){
const txt=document.getElementById("rev").value;
if(!txt)return;

const p=products.find(x=>x.name===name);
p.reviews.push(txt);
viewProduct(p.name,p.price,p.img);
}

// BUY
function buyNow(name,price){
alert("Redirecting to WhatsApp...");
window.location.href=`https://wa.me/918281454227?text=Order ${name} ₹${price}`;
}

// FILTER
function filterNike(){
renderProducts(products.filter(p=>p.brand==="Nike"));
}

function showStore(){
renderProducts(products);
}

function showHome(){
filterNike();
}

// SEARCH
function searchProduct(q){
q=q.toLowerCase();
renderProducts(products.filter(p=>p.name.toLowerCase().includes(q)));
}

// SLIDER
const slides=["hayley.jpg","jordan1.jpg","chunky.jpg"];
let i=0;
setInterval(()=>{
i=(i+1)%slides.length;
document.getElementById("slideImg").src=slides[i];
},2000);

// STARS
function createStars(){
const stars=document.getElementById("stars");
for(let i=0;i<80;i++){
const s=document.createElement("div");
s.className="star";
s.style.top=Math.random()*100+"%";
s.style.left=Math.random()*100+"%";
stars.appendChild(s);
}
}

createStars();
showHome();
