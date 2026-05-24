*{box-shadow:0 0 30px rgba(0,217,255,0.4);
  animation:floating 3s infinite;}

@keyframes floating{0%,100%{transform:translateY(0)}
   50%{transform:translateY(-10px)}}

.sidebar{position:fixed;top:0;right:-400px;width:350px;height:100vh;z-index:200;padding:30px;transition:.5s;}
.sidebar.active{right:0;}

footer{padding:80px;text-align:center;border-top:1px solid rgba(255,255,255,0.1);}

footer h2{color:#67e8f9;margin-bottom:20px;}

@media(max-width:900px){
  .hero,
  .payment-section{grid-template-columns:1fr;}

  .hero h1{font-size:4rem;}

  nav{padding:20px;}

  .nav-links{display:none;}

  .section,
  .hero{padding:120px 20px;}
