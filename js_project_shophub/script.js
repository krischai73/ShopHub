// Product data
const products = [
    {
        pid: 101,
        pname: "Redmi 14",
        pdesc: "6GB RAM, 128GB Storage, Powerful Processor",
        price: 12000,
        pic: "101.jpg",
        rate: 5
    },
    {
        pid: 102,
        pname: "Samsung Galaxy",
        pdesc: "Premium Android Smartphone",
        price: 15000,
        pic: "102.jpg",
        rate: 4
    },
    {
        pid: 103,
        pname: "iPhone 13",
        pdesc: "Latest Apple Smartphone",
        price: 25000,
        pic: "103.jpg",
        rate: 5
    },
    {
        pid: 104,
        pname: "OnePlus Nord",
        pdesc: "Mid-range Flagship Killer",
        price: 18000,
        pic: "104.jpg",
        rate: 4
    },
    {
        pid: 105,
        pname: "Pixel 6",
        pdesc: "Google's Latest Innovation",
        price: 22000,
        pic: "105.jpg",
        rate: 5
    },
    {
        pid: 106,
        pname: "Vivo V21",
        pdesc: "Camera-focused Smartphone",
        price: 16000,
        pic: "106.jpg",
        rate: 4
    },
    {
        pid: 107,
        pname: "Oppo F19",
        pdesc: "Sleek Design with Great Features",
        price: 14000,
        pic: "107.jpg",
        rate: 4
    },
    {
        pid: 108,
        pname: "Realme GT",
        pdesc: "Performance Beast",
        price: 19000,
        pic: "108.jpg",
        rate: 5
    },
    {
        pid: 109,
        pname: "Moto Edge",
        pdesc: "Pure Android Experience",
        price: 17000,
        pic: "109.jpg",
        rate: 4
    },
    {
        pid: 110,
        pname: "Nokia X30",
        pdesc: "Durable Build Quality",
        price: 13000,
        pic: "110.jpg",
        rate: 4
    }
];

// Cart array to store items
let cart = [];

// Function to generate star rating HTML
function getStarRating(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    return stars;
}

// Function to render products
function renderProducts() {
    const productGrid = $('#productGrid');
    productGrid.empty();

    products.forEach(product => {
        const productCard = `
            <div class="col-md-4 col-lg-3">
                <div class="product-card">
                    <img src="images/${product.pic}" alt="${product.pname}" class="product-image">
                    <h5>${product.pname}</h5>
                    <p class="text-muted">${product.pdesc}</p>
                    <div class="star-rating">${getStarRating(product.rate)}</div>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="product-price">$${product.price}</span>
                        <button class="btn btn-primary buy-btn" data-pid="${product.pid}">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;
        productGrid.append(productCard);
    });
}

// Function to update cart count
function updateCartCount() {
    $('#cartCount').text(cart.length);
}

// Function to calculate cart total
function calculateCartTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Function to render cart items
function renderCart() {
    const cartItems = $('#cartItems');
    cartItems.empty();

    if (cart.length === 0) {
        cartItems.html('<p class="text-center">Your cart is empty</p>');
        $('#cartTotal').text('0');
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = `
            <div class="d-flex align-items-center mb-3">
                <img src="images/${item.pic}" class="cart-item-image me-3">
                <div class="flex-grow-1">
                    <h6 class="mb-0">${item.pname}</h6>
                    <p class="mb-0">$${item.price}</p>
                </div>
                <button class="btn btn-danger btn-sm remove-item" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.append(cartItem);
    });

    $('#cartTotal').text(calculateCartTotal());
}

// Event Handlers
$(document).ready(function() {
    // Render initial products
    renderProducts();

    // Buy button click handler
    $(document).on('click', '.buy-btn', function() {
        const pid = $(this).data('pid');
        const product = products.find(p => p.pid === pid);
        if (product) {
            cart.push(product);
            updateCartCount();
            renderCart();
            // Show toast notification
            alert(`${product.pname} added to cart!`);
        }
    });

    // Remove item from cart handler
    $(document).on('click', '.remove-item', function() {
        const index = $(this).data('index');
        cart.splice(index, 1);
        updateCartCount();
        renderCart();
    });

    // Cart button click handler
    $('#cartBtn').click(function() {
        renderCart();
        new bootstrap.Modal('#cartModal').show();
    });

    // Checkout button click handler
    $('#checkoutBtn').click(function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        const orderId = Math.random().toString(36).substr(2, 9);
        alert(`Order placed successfully!\nOrder ID: ${orderId}`);
        cart = [];
        updateCartCount();
        renderCart();
        $('#cartModal').modal('hide');
    });
});
