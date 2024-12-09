let cart = [];  // Array para almacenar los productos en el carrito

// Función para agregar productos al carrito
function addToCart(productName, price) {
    const product = {
        name: productName,
        price: price
    };
    cart.push(product);
    renderCart();
}

// Función para eliminar productos del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Función para renderizar el carrito
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';  // Limpiar la lista actual
    let total = 0;

    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${product.name} - $${product.price} 
            <button class="remove-button" onclick="removeFromCart(${index})">Eliminar</button>`;
        cartItems.appendChild(li);
        total += product.price;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total;
}

// Función para mostrar u ocultar el modal del carrito
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';


    ocultarcarrito();

}

// Función para proceder al pago
function checkout() {
    alert('Procediendo al pago...');
    cart = [];  // Vaciar el carrito después del pago
    renderCart();  // Actualizar la vista del carrito
}

function ocultarcarrito(){
    var carritoitems = Document.getElementByclassName('carrito-items')[0];
    if (carritoitems.childElementcount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        
    }
}

