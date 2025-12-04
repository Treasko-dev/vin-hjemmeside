const products = [
  {
    name: 'Barolo "Serralunga" DOCG',
    category: 'rødvin',
    country: 'Italien',
    region: 'Piemonte',
    year: 2018,
    grape: 'Nebbiolo',
    price: 389,
    outlet: false,
    description: 'Klassisk Barolo med rosenblade, tjære og modne kirsebær. Lagret 30 måneder på store fade.',
    image: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Chianti Classico Riserva',
    category: 'rødvin',
    country: 'Italien',
    region: 'Toscana',
    year: 2019,
    grape: 'Sangiovese',
    price: 189,
    outlet: false,
    description: 'Saftig sangiovese med noter af syrlige kirsebær, læder og tørrede urter. Perfekt til pastabordet.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Cape Blend Reserve',
    category: 'rødvin',
    country: 'Sydafrika',
    region: 'Stellenbosch',
    year: 2020,
    grape: 'Cabernet Sauvignon / Pinotage',
    price: 159,
    outlet: false,
    description: 'Fyldig blend med modne solbær, mokka og diskret ristet fad. Bæredygtigt certificeret.',
    image: 'https://images.unsplash.com/photo-1510626176961-4b37d0b4e904?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Priorat Llicorella',
    category: 'rødvin',
    country: 'Spanien',
    region: 'Priorat',
    year: 2017,
    grape: 'Garnacha / Cariñena',
    price: 329,
    outlet: false,
    description: 'Mineralsk og intens med mørke kirsebær, lakrids og grafit. Økologisk dyrket på skiferterrasser.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Chablis Premier Cru "Montmains"',
    category: 'hvidvin',
    country: 'Frankrig',
    region: 'Bourgogne',
    year: 2021,
    grape: 'Chardonnay',
    price: 249,
    outlet: false,
    description: 'Spændstig chablis med citrus, hvide blomster og kalket mineralitet. Lagret på ståltank for renhed.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sancerre Les Caillottes',
    category: 'hvidvin',
    country: 'Frankrig',
    region: 'Loire',
    year: 2022,
    grape: 'Sauvignon Blanc',
    price: 179,
    outlet: false,
    description: 'Sprød og aromatisk med stikkelsbær, citrus og saltet finish. Perfekt til skaldyr og goat cheese.',
    image: 'https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Marlborough Single Vineyard',
    category: 'hvidvin',
    country: 'New Zealand',
    region: 'Marlborough',
    year: 2023,
    grape: 'Sauvignon Blanc',
    price: 139,
    outlet: false,
    description: 'Eksotisk aroma af passionsfrugt, lime og hyldeblomst med energisk syre.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Rheingau Riesling Kabinett',
    category: 'hvidvin',
    country: 'Tyskland',
    region: 'Rheingau',
    year: 2021,
    grape: 'Riesling',
    price: 129,
    outlet: false,
    description: 'Let restsødme med grønne æbler, lime og skifer. Lav alkohol og høj drikkeglæde.',
    image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Prosecco Superiore DOCG',
    category: 'bobler',
    country: 'Italien',
    region: 'Valdobbiadene',
    year: 2022,
    grape: 'Glera',
    price: 119,
    outlet: false,
    description: 'Ekstra brut med fine bobler, hvide blomster og grønne pærer. Fantastisk som aperitif.',
    image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Champagne Blanc de Blancs',
    category: 'bobler',
    country: 'Frankrig',
    region: 'Côte des Blancs',
    year: 2016,
    grape: 'Chardonnay',
    price: 449,
    outlet: false,
    description: 'Håndværkschampagne lagret 72 måneder sur lie med noter af brioche, citroncreme og kridt.',
    image: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Cava Gran Reserva Brut Nature',
    category: 'bobler',
    country: 'Spanien',
    region: 'Penedès',
    year: 2018,
    grape: 'Xarel·lo / Macabeo / Parellada',
    price: 139,
    outlet: true,
    description: '18 måneders flaskelagring giver nøddepræg, citrus og saltet finish. Ingen dosage.',
    image: 'https://images.unsplash.com/photo-1506377872008-397fd055263f?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tavel Rosé Cru',
    category: 'rosé',
    country: 'Frankrig',
    region: 'Rhône',
    year: 2022,
    grape: 'Grenache / Cinsault',
    price: 149,
    outlet: false,
    description: 'Dybere rosé med jordbær, blodappelsin og krydret afslutning. Server let afkølet.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Côtes de Provence Rosé',
    category: 'rosé',
    country: 'Frankrig',
    region: 'Provence',
    year: 2023,
    grape: 'Grenache / Syrah',
    price: 119,
    outlet: false,
    description: 'Lys og elegant med hvide ferskner, lyse bær og lavendel. Perfekt til tapas og salater.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Pinot Noir Rosé Pet Nat',
    category: 'rosé',
    country: 'Tyskland',
    region: 'Pfalz',
    year: 2022,
    grape: 'Pinot Noir',
    price: 165,
    outlet: false,
    description: 'Naturlig perlende rosé med vilde jordbær og røde ribs. Ufiltreret og tør.',
    image: 'https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Vin Santo del Chianti',
    category: 'dessert',
    country: 'Italien',
    region: 'Toscana',
    year: 2015,
    grape: 'Trebbiano / Malvasia',
    price: 269,
    outlet: false,
    description: 'Nøddeagtig sødme, tørret frugt og karamelliseret appelsinskal. Serveres til cantucci.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Late Harvest Chenin Blanc',
    category: 'dessert',
    country: 'Sydafrika',
    region: 'Swartland',
    year: 2020,
    grape: 'Chenin Blanc',
    price: 139,
    outlet: false,
    description: 'Honning, abrikos og safran med balanceret syre. Smuk til blåskimmel og foie gras.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Julens smagskasse (6 flasker)',
    category: 'smagskasse',
    country: 'Blandet',
    region: 'Europa & Sydafrika',
    year: 2023,
    grape: 'Mix',
    price: 699,
    outlet: false,
    description: 'Temaboks med Barolo, Chianti, Sancerre, Prosecco, Tavel rosé og dessertvin. Leveres gaveklar.',
    image: 'https://images.unsplash.com/photo-1506377872008-397fd055263f?auto=format&fit=crop&w=800&q=80',
  },
];

const productGrid = document.getElementById('product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search');
const cartItems = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal');
const giftWrap = document.getElementById('gift-wrap');
const giftBox = document.getElementById('gift-box');
const checkoutForm = document.getElementById('checkout-form');
const toast = document.querySelector('.toast');
const cart = new Map();

function formatPrice(value) {
  return `${value.toLocaleString('da-DK')} kr.`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function createCard(product) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.category = product.category;
  card.dataset.name = product.name.toLowerCase();
  card.dataset.country = product.country.toLowerCase();
  card.dataset.grape = product.grape.toLowerCase();

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="meta">
      <span class="badge">${product.country} • ${product.region}</span>
      <span class="price">${formatPrice(product.price)}</span>
    </div>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <div class="meta">
      <span class="badge">Årgang ${product.year}</span>
      <span class="badge">${product.grape}</span>
    </div>
    <div class="meta">
      ${product.outlet ? '<span class="pill small">Outlet</span>' : '<span class="pill small">Jul</span>'}
      <button class="btn ghost" data-details>Detaljer</button>
      <button class="btn primary" data-add>Tilføj til kurv</button>
    </div>
  `;

  card.querySelector('[data-add]').addEventListener('click', () => addToCart(product));
  card.querySelector('[data-details]').addEventListener('click', () => showDetails(product));
  return card;
}

function renderProducts(filter = 'alle', term = '') {
  productGrid.innerHTML = '';
  const normalized = term.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesFilter = filter === 'alle' || product.category === filter;
    const matchesSearch =
      !normalized ||
      product.name.toLowerCase().includes(normalized) ||
      product.country.toLowerCase().includes(normalized) ||
      product.grape.toLowerCase().includes(normalized);
    return matchesFilter && matchesSearch;
  });

  filtered.forEach((product) => productGrid.appendChild(createCard(product)));

  if (!filtered.length) {
    productGrid.innerHTML = '<p>Ingen vine matcher din søgning. Prøv en anden drue eller region.</p>';
  }
}

function addToCart(product) {
  const key = product.name;
  const existing = cart.get(key) || { ...product, qty: 0 };
  existing.qty += 1;
  cart.set(key, existing);
  renderCart();
  showToast(`${product.name} er lagt i kurven`);
}

function removeFromCart(name) {
  cart.delete(name);
  renderCart();
}

function changeQty(name, delta) {
  const item = cart.get(name);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  cart.set(name, item);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = '';
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h4>${item.name}</h4>
        <div class="muted">${item.country} • ${item.region}</div>
        <div class="muted">${formatPrice(item.price)} pr. fl.</div>
      </div>
      <div>
        <div class="qty">
          <button aria-label="Fjern" data-minus>-</button>
          <span style="padding:6px 10px;">${item.qty}</span>
          <button aria-label="Tilføj" data-plus>+</button>
        </div>
        <button class="ghost" data-remove>Fjern</button>
      </div>
    `;

    div.querySelector('[data-minus]').addEventListener('click', () => changeQty(item.name, -1));
    div.querySelector('[data-plus]').addEventListener('click', () => changeQty(item.name, 1));
    div.querySelector('[data-remove]').addEventListener('click', () => removeFromCart(item.name));

    cartItems.appendChild(div);
  });

  if (giftWrap.checked) subtotal += 35;
  if (giftBox.checked) subtotal += 85;

  subtotalEl.textContent = formatPrice(subtotal);
}

function showDetails(product) {
  const detail = `\n${product.name}\nÅrgang: ${product.year}\nDrue: ${product.grape}\nRegion: ${product.region}, ${product.country}\nPris: ${formatPrice(
    product.price,
  )}\n\n${product.description}`;
  alert(detail);
}

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter, searchInput.value);
  });
});

searchInput.addEventListener('input', (e) => {
  const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
  renderProducts(activeFilter, e.target.value);
});

giftWrap.addEventListener('change', renderCart);
giftBox.addEventListener('change', renderCart);

document.querySelector('[data-clear]').addEventListener('click', () => {
  cart.clear();
  renderCart();
});

document.querySelector('[data-checkout]').addEventListener('click', () => {
  checkoutForm.style.display = checkoutForm.style.display === 'flex' ? 'none' : 'flex';
});

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!cart.size) return showToast('Læg noget i kurven før du checker ud');
  showToast('Ordre modtaget! Vi sender bekræftelse på e-mail.');
  checkoutForm.reset();
  giftWrap.checked = false;
  giftBox.checked = false;
  cart.clear();
  renderCart();
});

document.querySelector('[data-subscribe]').addEventListener('click', () => {
  showToast('Smagskasse-abonnement aktiveret – vi sender detaljer på mail');
});

renderProducts();
renderCart();
