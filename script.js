const products = [
  { id: 1, name: "Campus Shoes", brand: "Campus", price: 999, image: "campus1.png" },
  { id: 2, name: "Asian Sneakers", brand: "Asian", price: 1200, image: "asian1.png" },
  { id: 3, name: "RedTape Classic", brand: "RedTape", price: 1500, image: "redtape1.png" },
  { id: 4, name: "Budget Sneakers", brand: "Generic", price: 900, image: "budget1.png" },
];

const productsContainer = document.getElementById("products");
const productView = document.getElementById("productView");

function renderProducts(list) {
  productsContainer.innerHTML = "";
  list.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-item";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
    `;
    div.onclick = () => viewProduct(product);
    productsContainer.appendChild(div);
  });
}

function viewProduct(product) {
  productView.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.name}">
    <p>Brand: ${product.brand}</p>
    <p>Price: ₹${product.price}</p>
  `;
}

function filterCampus() {
  renderProducts(products.filter(p => p.brand === "Campus"));
}

function filterAsian() {
  renderProducts(products.filter(p => p.brand === "Asian"));
}

function filterRedtape() {
  renderProducts(products.filter(p => p.brand === "RedTape"));
}

function filterPrice() {
  renderProducts(products.filter(p => p.price <= 1000));
}

// Initial render
renderProducts(products);
