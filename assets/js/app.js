
// <!-- order cart popup js start -->
let body = document.querySelector("body"); 
let orderCartWrap = document.getElementById('orderCartWrap');

// function showOrderCart(){
//     orderCartWrap.classList.add('overlay')
//     orderCartWrap.delay('800')
//     orderCartWrap.fadeIn('500')
//     body.style.overflow = "hidden"
// }

// function closeOrderCart(){
//     orderCartWrap.classList.remove('overlay')
//     orderCartWrap.delay('800')
//     orderCartWrap.fadeOut('500')
//     body.style.overflow = "auto"
// }

function showOrderCart() {
    orderCartWrap.classList.add('overlay');
    orderCartWrap.style.opacity = 0; // Start with invisible
    orderCartWrap.style.display = 'block';
    setTimeout(() => {
        orderCartWrap.style.opacity = 1; // Gradual fade-in
    }, 50);
    // body.style.overflow = "hidden";
}

function closeOrderCart() {
    orderCartWrap.style.opacity = 0; // Gradual fade-out
    setTimeout(() => {
        orderCartWrap.classList.remove('overlay');
        orderCartWrap.style.display = 'none';
    }, 500);
    // body.style.overflow = "auto";
}


// input validation 
function validateQtyInput(input) {
    if (isNaN(input.value) || input.value < 1) {
        input.value = 1; // Reset to 1 if invalid
    }
}

document.querySelectorAll('.cart-input').forEach(input => {
    input.addEventListener('input', function () {
        validateQtyInput(this);
    });
});


// order cart qty plus minus js start 

const maxQty = 10;  // Replace this with your actual maximum quantity

// Function to increase quantity
// function increaseQty(button) {
//     const qtyInput = button.closest('.qty-layout').querySelector('.cart-input');
//     let currentValue = parseInt(qtyInput.value);
//     if (currentValue < maxQty) {
//         qtyInput.value = currentValue + 1;
//     }
// }

function increaseQty(button) {
    const qtyInput = button.closest('.qty-layout').querySelector('.cart-input');
    let currentValue = parseInt(qtyInput.value);
    if (currentValue < maxQty) {
        qtyInput.value = currentValue + 1;
        updateTotals();
    }
}

// Function to decrease quantity
// function decreaseQty(button) {
//     const qtyInput = button.closest('.qty-layout').querySelector('.cart-input');
//     let currentValue = parseInt(qtyInput.value);
//     if (currentValue > 1) {
//         qtyInput.value = currentValue - 1;
//     }
// }


function decreaseQty(button) {
    const qtyInput = button.closest('.qty-layout').querySelector('.cart-input');
    let currentValue = parseInt(qtyInput.value);
    if (currentValue > 1) {
        qtyInput.value = currentValue - 1;
        updateTotals();
    }
}



// Attach event listeners to all cart-plus and cart-minus buttons
document.querySelectorAll('.cart-plus').forEach(button => {
    button.addEventListener('click', function () {
        increaseQty(this);
    });
});

document.querySelectorAll('.cart-minus').forEach(button => {
    button.addEventListener('click', function () {
        decreaseQty(this);
    });
});




// delete items from cart js 
document.querySelectorAll('.btn-delete').forEach(button => {
    button.addEventListener('click', function () {
        // Get the closest 'cart-item' row and remove it
        const cartItem = this.closest('.cart-item');
        if (cartItem) {
            cartItem.remove();
        }
        // Optionally, update the subtotal and gross total after deletion
        updateTotals();
    });
});

// Example function to update subtotal, gross total, etc.
function updateTotals() {
    let subtotal = 0;
    const cartItems = document.querySelectorAll('.cart-item');

    // Loop through all cart items to calculate the subtotal
    cartItems.forEach(item => {
        const priceElement = item.querySelector('.price');
        if (priceElement) {
            const price = parseFloat(priceElement.innerText.replace(/[^\d.-]/g, '')); // Extract price as a number
            subtotal += price;
        }
    });

    // Update the subtotal and gross total in the table
    document.querySelector('td.text-end').innerText = subtotal;
}

// cart js end 