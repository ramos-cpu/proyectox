// script.js

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const cardHolder = document.getElementById('card-holder').value;

    // Validaciones básicas
    if (!cardNumber || !expiryDate || !cvv || !cardHolder) {
        showMessage('Por favor, complete todos los campos.', 'error');
        return;
    }

    if (!validateCardNumber(cardNumber)) {
        showMessage('Número de tarjeta inválido.', 'error');
        return;
    }

    if (!validateExpiryDate(expiryDate)) {
        showMessage('Fecha de expiración inválida.', 'error');
        return;
    }

    if (!validateCVV(cvv)) {
        showMessage('CVV inválido.', 'error');
        return;
    }

    showMessage('¡Pago procesado con éxito!', 'success');
});

// Función para mostrar mensajes
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = type === 'success' ? 'green' : 'red';
}

// Validación de número de tarjeta (solo formato básico)
function validateCardNumber(cardNumber) {
    const regex = /^[0-9]{4}(\s?[0-9]{4}){3}$/; // Debe tener el formato xxxx xxxx xxxx xxxx
    return regex.test(cardNumber);
}

// Validación de fecha de expiración
function validateExpiryDate(expiryDate) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Formato MM/AA
    return regex.test(expiryDate);
}

// Validación de CVV (debe ser un número de 3 dígitos)
function validateCVV(cvv) {
    const regex = /^\d{3}$/; // 3 dígitos
    return regex.test(cvv);
}