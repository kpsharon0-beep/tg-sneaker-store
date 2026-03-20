// 🔥 PRODUCTS
const products = [

{
name:"Jordan Dior High",
price:1999,
brand:"Nike",
img:"jordan1.jpg",
desc:"Premium high-top sneaker with luxury finish.",
reviews:["🔥 Crazy","Looks premium","Worth it","Comfort top","Best buy","Clean","🔥🔥","Nice fit","Loved it","Fast delivery"]
},

{
name:"Nike Dunk Ghost Rider",
price:2000,
brand:"Nike",
img:"gostrider.jpg",
desc:"Dark themed dunk for bold street style.",
reviews:["Insane 🔥","Unique","Best dunk","Stylish","Comfort good","Solid","🔥","Cool look","Worth","Must buy"]
},

{
name:"Nike Chunky Dunky",
price:1999,
brand:"Nike",
img:"chunky.jpg",
desc:"Colorful sneaker for standout fashion.",
reviews:["Crazy colors","Fun","Unique","Comfort","🔥🔥","Trendy","Good","Best reels","Cool","Nice"]
},

{
name:"RedTape Lifestyle",
price:1999,
brand:"RedTape",
img:"redtape.jpg",
desc:"Comfort casual everyday sneaker.",
reviews:["Good","Comfort","Nice","Value","🔥","Cool","Fit good","Best","Affordable","Solid"]
}

];

const container=document.getElementById("products");

// HOME
function showHome(){filterNike();}

// STORE
function showStore(){renderProducts(products);}

// FILTERS
function filterNike(){renderProducts(products.filter(p=>p.brand==="Nike"));}
function filterRedtape(){renderProducts(products.filter(p=>p.brand==="RedTape"));}

// RENDER
function renderProducts(list){
container.innerHTML="";
document.getElementById("productView").innerHTML="";
document.getElementById("orderBox").innerHTML="";

list.forEach(p=>{
container.innerHTML+=`
<div class="product">
<div class="product-inner">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="viewProduct('${p.name}',${p.price},'${p.img}')">View</button>
</div>
</div>
`;
});
}

// VIEW PRODUCT
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
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>
</select>

<br>

<button class="buy-btn" onclick="openOrder('${name}',${price}')">Buy</button>

<h3>Reviews ⭐</h3>
<div id="reviews">
${p.reviews.map(r=>`<p>⭐ ${r}</p>`).join("")}
</div>

<input id="reviewInput" placeholder="Write review">
<button onclick="addReview('${name}')">Post</button>

<br><br>
<button onclick="showStore()">Back</button>
</div>
`;
}

// ADD REVIEW
function addReview(name){
const txt=document.getElementById("reviewInput").value;
if(!txt)return alert("Write review");

const p=products.find(x=>x.name===name);
p.reviews.push(txt);

viewProduct(p.name,p.price,p.img);
}

// ORDER FORM
function openOrder(name,price){
document.getElementById("orderBox").innerHTML=`
<h3>Enter Details</h3>
<input id="custName" placeholder="Name">
<input id="phone" placeholder="Phone">
<input id="address" placeholder="Address">

<button onclick="confirmOrder('${name}',${price})">
Confirm
</button>
`;
}

// FINAL ORDER
function confirmOrder(name,price){
const n=document.getElementById("custName").value;
const ph=document.getElementById("phone").value;
const ad=document.getElementById("address").value;
const size=document.getElementById("size").value;

if(!n||!ph||!ad)return alert("Fill all");

// 🎉 rain
startRain();

const msg=`Order:
${name}
Price:${price}
Size:${size}
Name:${n}
Phone:${ph}
Address:${ad}`;

setTimeout(()=>{
window.location.href=`https://wa.me/918281454227?text=${encodeURIComponent(msg)}`;
},2000);
}

// 🎞️ SLIDER
const slides=[
"jordan1.jpg",
"gostrider.jpg",
"chunky.jpg"
];

let i=0;
setInterval(()=>{
i=(i+1)%slides.length;
document.getElementById("slideImg").src=slides[i];
},2500);

// 🎉 RAIN
function startRain(){
const rain=document.createElement("div");
rain.className="sneaker-rain";
document.body.appendChild(rain);

for(let i=0;i<100;i++){
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
