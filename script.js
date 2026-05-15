function reveal(){

let reveals = document.querySelectorAll('.reveal');

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 120;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add('active');

}else{

reveals[i].classList.remove('active');

}

}

}

window.addEventListener('scroll', reveal);

reveal();

window.addEventListener('scroll', ()=>{

const navbar = document.querySelector('.navbar');

if(window.scrollY > 50){

navbar.style.background = "rgba(4,12,24,.95)";
navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,.4)";

}else{

navbar.style.background = "rgba(5,15,30,.75)";
navbar.style.boxShadow = "none";

}

});

document.querySelectorAll('.buy-btn').forEach(btn=>{

btn.addEventListener('click', ()=>{

alert('Produk berhasil ditambahkan ke keranjang!');

});

});
