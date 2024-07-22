document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.getElementById('items');
    const cartContainer = document.getElementById('cart');
    const cartItemsList = document.getElementById('cart-items');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const totalAmountElement = document.getElementById('total-amount');
  
    const items = [
      { id: 1, name: 'Item 1', price: 10 },
      { id: 2, name: 'Item 2', price: 20 },
      { id: 3, name: 'Item 3', price: 30 },
      { id: 4, name: 'Item 4', price: 40 }
    ];
  
    // Function to calculate total amount
    function calculateTotalAmount() {
      let totalAmount = 0;
      cartItemsList.querySelectorAll('.cart-item').forEach(cartItem => {
        const price = parseFloat(cartItem.dataset.price);
        const quantity = parseInt(cartItem.querySelector('.quantity').textContent);
        totalAmount += price * quantity;
      });
      return totalAmount;
    }
  
    // Function to update total amount display
    function updateTotalAmount() {
      const totalAmount = calculateTotalAmount();
      totalAmountElement.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    }
  
    // Render items
    items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.innerHTML = `
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
        <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
      `;
      itemsContainer.appendChild(itemElement);
    });
  
    // Add to cart button click event
    itemsContainer.addEventListener('click', function(e) {
      if (e.target.classList.contains('add-to-cart-btn')) {
        const itemId = parseInt(e.target.getAttribute('data-id'));
        const selectedItem = items.find(item => item.id === itemId);
        if (selectedItem) {
          const existingCartItem = cartItemsList.querySelector(`[data-id="${selectedItem.id}"]`);
          if (existingCartItem) {
            const quantityElement = existingCartItem.querySelector('.quantity');
            const quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity + 1;
          } else {
            const cartItemElement = document.createElement('li');
            cartItemElement.classList.add('cart-item');
            cartItemElement.dataset.price = selectedItem.price;
            cartItemElement.dataset.id = selectedItem.id;
            cartItemElement.innerHTML = `
              <span>${selectedItem.name} - $${selectedItem.price}</span>
              <button class="decrement-quantity-btn">-</button>
              <span class="quantity">1</span>
              <button class="increment-quantity-btn">+</button>
              <button class="delete-item-btn">Delete</button>
            `;
            cartItemsList.appendChild(cartItemElement);
          }
          updateTotalAmount();
        }
      }
    });
  
    // Increment quantity button click event
    cartItemsList.addEventListener('click', function(e) {
      if (e.target.classList.contains('increment-quantity-btn')) {
        const quantityElement = e.target.parentElement.querySelector('.quantity');
        const quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        updateTotalAmount();
      }
    });
  
    // Decrement quantity button click event
    cartItemsList.addEventListener('click', function(e) {
      if (e.target.classList.contains('decrement-quantity-btn')) {
        const quantityElement = e.target.parentElement.querySelector('.quantity');
        const quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
          quantityElement.textContent = quantity - 1;
          updateTotalAmount();
        }
      }
    });
  
    // Delete item button click event
    cartItemsList.addEventListener('click', function(e) {
      if (e.target.classList.contains('delete-item-btn')) {
        e.target.parentElement.remove();
        updateTotalAmount();
      }
    });
  
    // Clear cart button click event
    clearCartBtn.addEventListener('click', function() {
      cartItemsList.innerHTML = ''; // Clear cart items
      updateTotalAmount();
    });
  });
  