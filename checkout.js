const summaryItems = document.getElementById('summary-items');
const subtotalEl = document.getElementById('co-subtotal');
const giftWrap = document.getElementById('co-gift-wrap');
const giftBox = document.getElementById('co-gift-box');
const neighbor = document.getElementById('co-neighbor');
const cardInput = document.getElementById('co-card');
const checkoutForm = document.getElementById('checkout-form');
const toast = document.querySelector('.toast');

const STORAGE_CART = 'nvh-cart';
const STORAGE_WRAP = 'nvh-giftWrap';
const STORAGE_BOX = 'nvh-giftBox';

const cart = new Map();

function formatPrice(value) {
  return `${value.toLocaleString('da-DK')} kr.`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function loadCart() {
  try {
    const storedCart = JSON.parse(localStorage.getItem(STORAGE_CART) || '[]');
    storedCart.forEach((item) => cart.set(item.name, item));
    giftWrap.checked = JSON.parse(localStorage.getItem(STORAGE_WRAP) || 'false');
    giftBox.checked = JSON.parse(localStorage.getItem(STORAGE_BOX) || 'false');
  } catch (e) {
    console.warn('Kunne ikke læse gemt kurv', e);
  }
}

function saveCart() {
  const serialized = Array.from(cart.values());
  localStorage.setItem(STORAGE_CART, JSON.stringify(serialized));
  localStorage.setItem(STORAGE_WRAP, JSON.stringify(!!giftWrap.checked));
  localStorage.setItem(STORAGE_BOX, JSON.stringify(!!giftBox.checked));
}

function changeQty(name, delta) {
  const item = cart.get(name);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  cart.set(name, item);
  render();
}

function removeItem(name) {
  cart.delete(name);
  render();
}

function render() {
  summaryItems.innerHTML = '';
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.qty;
    const row = document.createElement('div');
    row.className = 'summary-row';
    row.innerHTML = `
      <div class="summary-info">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h4>${item.name}</h4>
          <div class="muted">${item.region}</div>
          <div class="muted">${formatPrice(item.price)} pr. fl.</div>
        </div>
      </div>
      <div class="summary-actions">
        <div class="qty">
          <button aria-label="Fjern" data-minus>-</button>
          <span style="padding:6px 10px;">${item.qty}</span>
          <button aria-label="Tilføj" data-plus>+</button>
        </div>
        <button class="ghost" data-remove>Fjern</button>
      </div>
    `;
    row.querySelector('[data-minus]').addEventListener('click', () => changeQty(item.name, -1));
    row.querySelector('[data-plus]').addEventListener('click', () => changeQty(item.name, 1));
    row.querySelector('[data-remove]').addEventListener('click', () => removeItem(item.name));
    summaryItems.appendChild(row);
  });

  if (!cart.size) {
    summaryItems.innerHTML = '<p>Din kurv er tom. Gå tilbage og vælg rosé eller Prosecco.</p>';
  }

  if (giftWrap.checked) subtotal += 35;
  if (giftBox.checked) subtotal += 85;

  subtotalEl.textContent = formatPrice(subtotal);
  saveCart();
}

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!cart.size) return showToast('Læg rosé eller Prosecco i kurven først');

  const data = new FormData(checkoutForm);
  const navn = data.get('name');
  const leveringsnote = neighbor.checked ? 'Lever til naboen ved fravær.' : 'Normal levering.';
  const kort = cardInput.value ? `Kort: "${cardInput.value}"` : 'Ingen korttekst';

  showToast(`Tak ${navn}! Ordre sendt. ${leveringsnote} ${kort}`);
  cart.clear();
  saveCart();
  render();
  checkoutForm.reset();
  cardInput.value = '';
  neighbor.checked = false;
});

giftWrap.addEventListener('change', render);
giftBox.addEventListener('change', render);
neighbor.addEventListener('change', () => showToast(neighbor.checked ? 'Vi leverer til naboen hvis du ikke er hjemme' : 'Normal levering valgt'));
cardInput.addEventListener('input', () => saveCart());

loadCart();
render();
