

const products = [
    {
        id: 1,
        name: "Ốp lưng điện thoại",
        price: 79000,
        image: "https://placehold.co/600x400/FFF1F5/AD315D?text=Phone+Case"
    },
    {
        id: 2,
        name: "Tai nghe không dây",
        price: 299000,
        image: "https://placehold.co/600x400/FFF1F5/AD315D?text=Earbuds"
    },
    {
        id: 3,
        name: "Giá đỡ điện thoại",
        price: 59000,
        image: "https://placehold.co/600x400/FFF1F5/AD315D?text=Phone+Stand"
    },
    {
        id: 4,
        name: "Sạc điện thoại",
        price: 159000,
        image: "https://placehold.co/600x400/FFF1F5/AD315D?text=Charger"
    },
    {
        id: 5,
        name: "Túi đựng phụ kiện",
        price: 99000,
        image: "https://placehold.co/600x400/FFF1F5/AD315D?text=Accessory+Bag"
    },
    {
        id: 6,
        name: "Móc khóa dễ thương",
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
