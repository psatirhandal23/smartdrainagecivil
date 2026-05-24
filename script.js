/* ═══════════════════════════════════════
   DRAINIOMART — script.js
   Semua transaksi via WhatsApp
═══════════════════════════════════════ */

const WA_NUMBER = '628813925995';

// ─── STATE ────────────────────────────
let cart = [];

// ─── INIT ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  updateCartUI();
});


// ─── NAVBAR SCROLL ────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 50);
  revealOnScroll();
});


// ─── HAMBURGER ────────────────────────
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}


// ─── SCROLL REVEAL ────────────────────
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('active');
    }
  });
}


// ─── PRODUCT SEARCH ───────────────────
function filterProducts() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  let visible = 0;
  document.querySelectorAll('.product-card').forEach(card => {
    const match = (card.dataset.name || '').includes(q);
    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  document.getElementById('noResults').style.display = visible === 0 ? 'block' : 'none';
}


// ─── CART ─────────────────────────────
function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCartUI();
  showToast(`✅ ${name} ditambahkan ke keranjang`);

  // Buka sidebar
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = total;

  const itemsEl  = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty">Keranjang masih kosong.<br><small>Tekan "+ Keranjang" pada produk.</small></div>`;
    footerEl.style.display = 'none';
    return;
  }

  footerEl.style.display = 'block';
  itemsEl.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>${formatRupiah(item.price * item.qty)}</span>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty(${i}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${i}, +1)">+</button>
        <button class="cart-item-remove" onclick="removeFromCart(${i})">🗑</button>
      </div>
    </div>
  `).join('');

  const grandTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = formatRupiah(grandTotal);
}

function checkoutWA() {
  if (cart.length === 0) return;
  const lines = cart.map(i =>
    `• ${i.name} x${i.qty} = ${formatRupiah(i.price * i.qty)}`
  ).join('%0A');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const msg = `Halo DrainioMart! Saya ingin memesan:%0A%0A${lines}%0A%0ATotal: *${formatRupiah(total)}*%0A%0AMohon konfirmasi ketersediaan dan detail pembayaran. Terima kasih!`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}


// ─── DETAIL MODAL ─────────────────────
function openDetail(name, desc, img, price, specs) {
  document.getElementById('detailName').textContent  = name;
  document.getElementById('detailDesc').textContent  = desc;
  document.getElementById('detailPrice').textContent = formatRupiah(price);

  const imgEl = document.getElementById('detailImg');
  imgEl.src   = img;
  imgEl.alt   = name;
  imgEl.style.display = 'block';

  document.getElementById('detailSpecs').innerHTML =
    specs.map(s => `<span class="detail-specs-item">${s}</span>`).join('');

  // Tombol keranjang
  document.getElementById('detailCartBtn').onclick = () => {
    addToCart(name, price);
    closeDetail();
  };

  // Tombol WA langsung
  document.getElementById('detailBuyBtn').onclick = () => {
    closeDetail();
    orderDirectWA(name, price);
  };

  document.getElementById('detailModal').classList.add('open');
}

function closeDetail() {
  document.getElementById('detailModal').classList.remove('open');
}

// Klik overlay → tutup modal
function handleModalOverlayClick(e) {
  if (e.target === e.currentTarget) closeDetail();
}


// ─── ORDER LANGSUNG VIA WA ────────────
function orderDirectWA(name, price) {
  const msg = `Halo DrainioMart! Saya tertarik memesan:%0A%0A• ${name}%0AHarga: ${formatRupiah(price)}%0A%0AMohon info ketersediaan, metode pembayaran, dan ongkos kirim. Terima kasih!`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}


// ─── FAQ ACCORDION ────────────────────
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  // Tutup semua
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  // Buka yang diklik (kecuali sudah terbuka)
  if (!isOpen) item.classList.add('open');
}


// ─── TOAST ────────────────────────────
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}


// ─── UTILITY ──────────────────────────
function formatRupiah(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}


// AI CHATBOT
function openAIChat() {
  document.getElementById('aiChatWindow')
    .classList.toggle('open');
}

function quickWA(message) {
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// WISHLIST
function toggleWishlist(el) {
  el.classList.toggle('active');

  if(el.classList.contains('active')) {
    showToast('❤ Ditambahkan ke wishlist');
  } else {
    showToast('Wishlist dihapus');
  }
}

// LIVE NOTIFICATION
const notifications = [
  'PT Nusantara membeli Smart Sensor',
  'Dinas PU melakukan bulk order',
  'Kontraktor Surabaya checkout produk',
  'Smart Flood Sensor sedang trending'
];

function showLiveNotification() {
  const notif = document.createElement('div');

  notif.className = 'toast show';
  notif.style.bottom = '160px';

  notif.innerHTML = '🔔 ' + notifications[
    Math.floor(Math.random() * notifications.length)
  ];

  document.body.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 4000);
}

setInterval(showLiveNotification, 12000);
