

const products = [
    {
        id: 1,
        name: "Công chúa và quái vật",
        price: 79000,
        image: "images/9ed99dea-79d6-4ab7-b3a3-4afa4dd3969c.jpg"
    },
    {
        id: 2,
        name: "Bạch tuyết và ông kẹ",
        price: 299000,
        image: "images/b05dcc2c-919b-4c63-8adf-78e69044a367.jpg"
    },
    {
        id: 3,
        name: "",
        price: 59000,
        image: "https://placehold.co/600x400/FFF1F5/AD315D?text=Phone+Stand"
    },
    {
        id: 4,
        name: "",
        price: 159000,
        image: "https://placehold.co/600x400/FFF1F5/AD315D?text=Charger"
    },
    {
        id: 5,
        name: "",
        price: 99000,
        image: "https://placehold.co/600x400/FFF1F5/AD315D?text=Accessory+Bag"
    },
    {
        id: 6,
        name: "",
        price: 35000,
        image: "https://placehold.co/600x400/FFF1F5/AD315D?text=Keychain"
    }
];


const productList = document.getElementById("productList");

function displayProducts(items) {
    productList.innerHTML = "";

    items.forEach(function(product) {
        productList.innerHTML += `
            <article class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-price">
                        ${product.price.toLocaleString("vi-VN")} đ
                    </p>
                    <button onclick="addToCart(${product.id})">
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </article>
        `;
    });
}

let cartCount = 0;

function addToCart(productId) {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
}

displayProducts(products);
