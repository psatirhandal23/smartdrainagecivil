// Data Dummy Produk IoT Sipil
const products = [
    {
        id: 1,
        name: "Smart Drainage Blockage Cleaning System v2.0 - Auto Sensor",
        price: "12.500.000",
        image: "https://via.placeholder.com/200?text=Smart+Drainage",
        sold: "12 Terjual",
        location: "Semarang"
    },
    {
        id: 2,
        name: "IoT Water Level Sensor GPRS/LoRaWAN High Precision",
        price: "2.450.000",
        image: "https://via.placeholder.com/200?text=Water+Level",
        sold: "45 Terjual",
        location: "Jakarta"
    },
    {
        id: 3,
        name: "Ultrasonic Flow Meter for Open Channel Drainage",
        price: "5.700.000",
        image: "https://via.placeholder.com/200?text=Flow+Meter",
        sold: "8 Terjual",
        location: "Bandung"
    },
    {
        id: 4,
        name: "Smart Trash Gate Control - Civil Engineering IoT",
        price: "18.900.000",
        image: "https://via.placeholder.com/200?text=Trash+Gate",
        sold: "3 Terjual",
        location: "Surabaya"
    },
    {
        id: 5,
        name: "Rain Gauge Tipping Bucket Bluetooth Integrated",
        price: "1.200.000",
        image: "https://via.placeholder.com/200?text=Rain+Gauge",
        sold: "100+ Terjual",
        location: "Medan"
    },
    {
        id: 6,
        name: "Water Quality Monitor Node (PH, Turbidity, DO)",
        price: "8.350.000",
        image: "https://via.placeholder.com/200?text=Water+Quality",
        sold: "15 Terjual",
        location: "Semarang"
    }
];

function renderProducts() {
    const container = document.getElementById('productContainer');
    
    products.forEach(product => {
        const card = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">Rp${product.price}</div>
                    <div class="product-stats">
                        <span>${product.location}</span>
                        <span>${product.sold}</span>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    
    // Logika sederhana untuk simulasi keranjang
    let count = 0;
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(c => {
        c.onclick = () => {
            count++;
            document.getElementById('cart-count').innerText = count;
            alert("Produk berhasil ditambahkan ke keranjang!");
        };
    });
});
