
function openPayment(){
document.getElementById('paymentModal').style.display='flex';
}

function closePayment(){
document.getElementById('paymentModal').style.display='none';
}

function checkoutWA(){
window.open(
'https://wa.me/6280000000000?text=Halo%20saya%20ingin%20checkout%20produk%20DrainioMart',
'_blank'
);
}
