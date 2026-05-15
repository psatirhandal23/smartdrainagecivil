
// Inisialisasi AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: false, // Animasi akan berjalan setiap kali di-scroll ulang
        mirror: true
    });

    // Efek transparan pada Navbar saat scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
            nav.style.padding = "15px 5%";
        } else {
            nav.style.boxShadow = "none";
            nav.style.padding = "20px 5%";
        }
    });

    // Smooth scroll untuk link menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animasi klik tombol beli
    const buttons = document.querySelectorAll('.buy-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Produk ini akan segera hadir. Kami akan mengarahkan Anda ke WhatsApp admin.");
        });
    });
});
