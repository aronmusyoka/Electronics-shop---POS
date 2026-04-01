
let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({item, price});
  total += price;
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  cart.forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.item} - KES ${c.price}`;
    cartList.appendChild(li);
  });
  document.getElementById('total').textContent = `Total: KES ${total}`;
}

function checkout(method) {
  alert(`Sale completed via ${method}. Total: KES ${total}`);
  cart = [];
  total = 0;
  renderCart();
}
