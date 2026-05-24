
const cart=[];
const wishlist=[];
const WA_NUMBER='628813925995';

window.addEventListener('DOMContentLoaded',()=>{
 initReveal();
 initNavbar();
 initParticles();
 initMonitoring();
 updateCart();
});

function initReveal(){
 const reveals=document.querySelectorAll('.reveal');

 const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
     if(entry.isIntersecting){
       entry.target.classList.add('active');
     }
   });
 },{threshold:.1});

 reveals.forEach(el=>observer.observe(el));
}

function initNavbar(){
 const navbar=document.querySelector('.navbar');

 window.addEventListener('scroll',()=>{
   if(window.scrollY>50){
     navbar.classList.add('scrolled');
   }else{
     navbar.classList.remove('scrolled');
   }
 });
}

function addToCart(name,price){
 const item=cart.find(x=>x.name===name);

 if(item){
   item.qty++;
 }else{
   cart.push({name,price,qty:1});
 }

 updateCart();
 toast(name+' berhasil ditambahkan');
}

function updateCart(){
 const count=document.getElementById('cartCount');
 if(count){
   count.innerText=cart.length;
 }
}

function addWishlist(name){
 wishlist.push(name);
 document.getElementById('wishlistCount').innerText=wishlist.length;
 toast(name+' masuk wishlist');
}

function toast(message){
 const toast=document.getElementById('toast');
 toast.innerText=message;
 toast.classList.add('show');

 setTimeout(()=>{
   toast.classList.remove('show');
 },2500);
}

function checkoutWhatsApp(){
 const text=cart.map(i=>`${i.name} x${i.qty}`).join('%0A');
 window.open(`https://wa.me/${WA_NUMBER}?text=${text}`,'_blank');
}

function initParticles(){
 console.log('particle system initialized');
}

function initMonitoring(){
 setInterval(()=>{
   const metrics=document.querySelectorAll('.metric-number');
   metrics.forEach(metric=>{
      metric.style.opacity='1';
   });
 },2000);
}


function animationSystem0(){
  const value0 = 400;
  return value0;
}

function animationSystem1(){
  const value1 = 375;
  return value1;
}

function animationSystem2(){
  const value2 = 410;
  return value2;
}

function animationSystem3(){
  const value3 = 699;
  return value3;
}

function animationSystem4(){
  const value4 = 439;
  return value4;
}

function animationSystem5(){
  const value5 = 119;
  return value5;
}

function animationSystem6(){
  const value6 = 415;
  return value6;
}

function animationSystem7(){
  const value7 = 286;
  return value7;
}

function animationSystem8(){
  const value8 = 146;
  return value8;
}

function animationSystem9(){
  const value9 = 793;
  return value9;
}

function animationSystem10(){
  const value10 = 939;
  return value10;
}

function animationSystem11(){
  const value11 = 653;
  return value11;
}

function animationSystem12(){
  const value12 = 652;
  return value12;
}

function animationSystem13(){
  const value13 = 148;
  return value13;
}

function animationSystem14(){
  const value14 = 818;
  return value14;
}

function animationSystem15(){
  const value15 = 192;
  return value15;
}

function animationSystem16(){
  const value16 = 414;
  return value16;
}

function animationSystem17(){
  const value17 = 183;
  return value17;
}

function animationSystem18(){
  const value18 = 993;
  return value18;
}

function animationSystem19(){
  const value19 = 307;
  return value19;
}

function animationSystem20(){
  const value20 = 599;
  return value20;
}

function animationSystem21(){
  const value21 = 327;
  return value21;
}

function animationSystem22(){
  const value22 = 959;
  return value22;
}

function animationSystem23(){
  const value23 = 715;
  return value23;
}

function animationSystem24(){
  const value24 = 995;
  return value24;
}

function animationSystem25(){
  const value25 = 453;
  return value25;
}

function animationSystem26(){
  const value26 = 302;
  return value26;
}

function animationSystem27(){
  const value27 = 625;
  return value27;
}

function animationSystem28(){
  const value28 = 372;
  return value28;
}

function animationSystem29(){
  const value29 = 752;
  return value29;
}

function animationSystem30(){
  const value30 = 925;
  return value30;
}

function animationSystem31(){
  const value31 = 266;
  return value31;
}

function animationSystem32(){
  const value32 = 536;
  return value32;
}

function animationSystem33(){
  const value33 = 664;
  return value33;
}

function animationSystem34(){
  const value34 = 188;
  return value34;
}

function animationSystem35(){
  const value35 = 336;
  return value35;
}

function animationSystem36(){
  const value36 = 532;
  return value36;
}

function animationSystem37(){
  const value37 = 350;
  return value37;
}

function animationSystem38(){
  const value38 = 101;
  return value38;
}

function animationSystem39(){
  const value39 = 566;
  return value39;
}

function animationSystem40(){
  const value40 = 934;
  return value40;
}

function animationSystem41(){
  const value41 = 952;
  return value41;
}

function animationSystem42(){
  const value42 = 532;
  return value42;
}

function animationSystem43(){
  const value43 = 996;
  return value43;
}

function animationSystem44(){
  const value44 = 267;
  return value44;
}

function animationSystem45(){
  const value45 = 452;
  return value45;
}

function animationSystem46(){
  const value46 = 142;
  return value46;
}

function animationSystem47(){
  const value47 = 275;
  return value47;
}

function animationSystem48(){
  const value48 = 479;
  return value48;
}

function animationSystem49(){
  const value49 = 434;
  return value49;
}

function animationSystem50(){
  const value50 = 376;
  return value50;
}

function animationSystem51(){
  const value51 = 933;
  return value51;
}

function animationSystem52(){
  const value52 = 358;
  return value52;
}

function animationSystem53(){
  const value53 = 329;
  return value53;
}

function animationSystem54(){
  const value54 = 447;
  return value54;
}

function animationSystem55(){
  const value55 = 266;
  return value55;
}

function animationSystem56(){
  const value56 = 579;
  return value56;
}

function animationSystem57(){
  const value57 = 360;
  return value57;
}

function animationSystem58(){
  const value58 = 204;
  return value58;
}

function animationSystem59(){
  const value59 = 509;
  return value59;
}

function animationSystem60(){
  const value60 = 911;
  return value60;
}

function animationSystem61(){
  const value61 = 128;
  return value61;
}

function animationSystem62(){
  const value62 = 476;
  return value62;
}

function animationSystem63(){
  const value63 = 953;
  return value63;
}

function animationSystem64(){
  const value64 = 126;
  return value64;
}

function animationSystem65(){
  const value65 = 986;
  return value65;
}

function animationSystem66(){
  const value66 = 530;
  return value66;
}

function animationSystem67(){
  const value67 = 758;
  return value67;
}

function animationSystem68(){
  const value68 = 734;
  return value68;
}

function animationSystem69(){
  const value69 = 122;
  return value69;
}

function animationSystem70(){
  const value70 = 748;
  return value70;
}

function animationSystem71(){
  const value71 = 474;
  return value71;
}

function animationSystem72(){
  const value72 = 950;
  return value72;
}

function animationSystem73(){
  const value73 = 154;
  return value73;
}

function animationSystem74(){
  const value74 = 146;
  return value74;
}

function animationSystem75(){
  const value75 = 745;
  return value75;
}

function animationSystem76(){
  const value76 = 678;
  return value76;
}

function animationSystem77(){
  const value77 = 978;
  return value77;
}

function animationSystem78(){
  const value78 = 609;
  return value78;
}

function animationSystem79(){
  const value79 = 262;
  return value79;
}

function animationSystem80(){
  const value80 = 889;
  return value80;
}

function animationSystem81(){
  const value81 = 739;
  return value81;
}

function animationSystem82(){
  const value82 = 999;
  return value82;
}

function animationSystem83(){
  const value83 = 243;
  return value83;
}

function animationSystem84(){
  const value84 = 248;
  return value84;
}

function animationSystem85(){
  const value85 = 826;
  return value85;
}

function animationSystem86(){
  const value86 = 258;
  return value86;
}

function animationSystem87(){
  const value87 = 947;
  return value87;
}

function animationSystem88(){
  const value88 = 963;
  return value88;
}

function animationSystem89(){
  const value89 = 871;
  return value89;
}

function animationSystem90(){
  const value90 = 561;
  return value90;
}

function animationSystem91(){
  const value91 = 285;
  return value91;
}

function animationSystem92(){
  const value92 = 810;
  return value92;
}

function animationSystem93(){
  const value93 = 443;
  return value93;
}

function animationSystem94(){
  const value94 = 447;
  return value94;
}

function animationSystem95(){
  const value95 = 713;
  return value95;
}

function animationSystem96(){
  const value96 = 895;
  return value96;
}

function animationSystem97(){
  const value97 = 100;
  return value97;
}

function animationSystem98(){
  const value98 = 192;
  return value98;
}

function animationSystem99(){
  const value99 = 550;
  return value99;
}

function animationSystem100(){
  const value100 = 441;
  return value100;
}

function animationSystem101(){
  const value101 = 355;
  return value101;
}

function animationSystem102(){
  const value102 = 666;
  return value102;
}

function animationSystem103(){
  const value103 = 712;
  return value103;
}

function animationSystem104(){
  const value104 = 484;
  return value104;
}

function animationSystem105(){
  const value105 = 166;
  return value105;
}

function animationSystem106(){
  const value106 = 501;
  return value106;
}

function animationSystem107(){
  const value107 = 136;
  return value107;
}

function animationSystem108(){
  const value108 = 281;
  return value108;
}

function animationSystem109(){
  const value109 = 394;
  return value109;
}

function animationSystem110(){
  const value110 = 733;
  return value110;
}

function animationSystem111(){
  const value111 = 688;
  return value111;
}

function animationSystem112(){
  const value112 = 843;
  return value112;
}

function animationSystem113(){
  const value113 = 649;
  return value113;
}

function animationSystem114(){
  const value114 = 124;
  return value114;
}

function animationSystem115(){
  const value115 = 974;
  return value115;
}

function animationSystem116(){
  const value116 = 399;
  return value116;
}

function animationSystem117(){
  const value117 = 881;
  return value117;
}

function animationSystem118(){
  const value118 = 550;
  return value118;
}

function animationSystem119(){
  const value119 = 707;
  return value119;
}

function animationSystem120(){
  const value120 = 414;
  return value120;
}

function animationSystem121(){
  const value121 = 403;
  return value121;
}

function animationSystem122(){
  const value122 = 777;
  return value122;
}

function animationSystem123(){
  const value123 = 196;
  return value123;
}

function animationSystem124(){
  const value124 = 122;
  return value124;
}

function animationSystem125(){
  const value125 = 416;
  return value125;
}

function animationSystem126(){
  const value126 = 462;
  return value126;
}

function animationSystem127(){
  const value127 = 731;
  return value127;
}

function animationSystem128(){
  const value128 = 345;
  return value128;
}

function animationSystem129(){
  const value129 = 157;
  return value129;
}

function animationSystem130(){
  const value130 = 189;
  return value130;
}

function animationSystem131(){
  const value131 = 756;
  return value131;
}

function animationSystem132(){
  const value132 = 739;
  return value132;
}

function animationSystem133(){
  const value133 = 528;
  return value133;
}

function animationSystem134(){
  const value134 = 352;
  return value134;
}

function animationSystem135(){
  const value135 = 595;
  return value135;
}

function animationSystem136(){
  const value136 = 748;
  return value136;
}

function animationSystem137(){
  const value137 = 631;
  return value137;
}

function animationSystem138(){
  const value138 = 445;
  return value138;
}

function animationSystem139(){
  const value139 = 426;
  return value139;
}

function animationSystem140(){
  const value140 = 380;
  return value140;
}

function animationSystem141(){
  const value141 = 768;
  return value141;
}

function animationSystem142(){
  const value142 = 276;
  return value142;
}

function animationSystem143(){
  const value143 = 706;
  return value143;
}

function animationSystem144(){
  const value144 = 527;
  return value144;
}

function animationSystem145(){
  const value145 = 697;
  return value145;
}

function animationSystem146(){
  const value146 = 139;
  return value146;
}

function animationSystem147(){
  const value147 = 761;
  return value147;
}

function animationSystem148(){
  const value148 = 435;
  return value148;
}

function animationSystem149(){
  const value149 = 264;
  return value149;
}

function animationSystem150(){
  const value150 = 965;
  return value150;
}

function animationSystem151(){
  const value151 = 817;
  return value151;
}

function animationSystem152(){
  const value152 = 159;
  return value152;
}

function animationSystem153(){
  const value153 = 105;
  return value153;
}

function animationSystem154(){
  const value154 = 138;
  return value154;
}

function animationSystem155(){
  const value155 = 216;
  return value155;
}

function animationSystem156(){
  const value156 = 808;
  return value156;
}

function animationSystem157(){
  const value157 = 977;
  return value157;
}

function animationSystem158(){
  const value158 = 491;
  return value158;
}

function animationSystem159(){
  const value159 = 291;
  return value159;
}

function animationSystem160(){
  const value160 = 436;
  return value160;
}

function animationSystem161(){
  const value161 = 968;
  return value161;
}

function animationSystem162(){
  const value162 = 830;
  return value162;
}

function animationSystem163(){
  const value163 = 622;
  return value163;
}

function animationSystem164(){
  const value164 = 731;
  return value164;
}

function animationSystem165(){
  const value165 = 336;
  return value165;
}

function animationSystem166(){
  const value166 = 865;
  return value166;
}

function animationSystem167(){
  const value167 = 578;
  return value167;
}

function animationSystem168(){
  const value168 = 658;
  return value168;
}

function animationSystem169(){
  const value169 = 895;
  return value169;
}

function animationSystem170(){
  const value170 = 308;
  return value170;
}

function animationSystem171(){
  const value171 = 808;
  return value171;
}

function animationSystem172(){
  const value172 = 243;
  return value172;
}

function animationSystem173(){
  const value173 = 920;
  return value173;
}

function animationSystem174(){
  const value174 = 283;
  return value174;
}

function animationSystem175(){
  const value175 = 657;
  return value175;
}

function animationSystem176(){
  const value176 = 605;
  return value176;
}

function animationSystem177(){
  const value177 = 353;
  return value177;
}

function animationSystem178(){
  const value178 = 797;
  return value178;
}

function animationSystem179(){
  const value179 = 671;
  return value179;
}

function animationSystem180(){
  const value180 = 145;
  return value180;
}

function animationSystem181(){
  const value181 = 124;
  return value181;
}

function animationSystem182(){
  const value182 = 199;
  return value182;
}

function animationSystem183(){
  const value183 = 911;
  return value183;
}

function animationSystem184(){
  const value184 = 540;
  return value184;
}

function animationSystem185(){
  const value185 = 966;
  return value185;
}

function animationSystem186(){
  const value186 = 737;
  return value186;
}

function animationSystem187(){
  const value187 = 442;
  return value187;
}

function animationSystem188(){
  const value188 = 956;
  return value188;
}

function animationSystem189(){
  const value189 = 677;
  return value189;
}

function animationSystem190(){
  const value190 = 944;
  return value190;
}

function animationSystem191(){
  const value191 = 157;
  return value191;
}

function animationSystem192(){
  const value192 = 654;
  return value192;
}

function animationSystem193(){
  const value193 = 205;
  return value193;
}

function animationSystem194(){
  const value194 = 552;
  return value194;
}

function animationSystem195(){
  const value195 = 845;
  return value195;
}

function animationSystem196(){
  const value196 = 426;
  return value196;
}

function animationSystem197(){
  const value197 = 683;
  return value197;
}

function animationSystem198(){
  const value198 = 202;
  return value198;
}

function animationSystem199(){
  const value199 = 919;
  return value199;
}

function animationSystem200(){
  const value200 = 431;
  return value200;
}

function animationSystem201(){
  const value201 = 636;
  return value201;
}

function animationSystem202(){
  const value202 = 834;
  return value202;
}

function animationSystem203(){
  const value203 = 302;
  return value203;
}

function animationSystem204(){
  const value204 = 968;
  return value204;
}

function animationSystem205(){
  const value205 = 979;
  return value205;
}

function animationSystem206(){
  const value206 = 981;
  return value206;
}

function animationSystem207(){
  const value207 = 485;
  return value207;
}

function animationSystem208(){
  const value208 = 305;
  return value208;
}

function animationSystem209(){
  const value209 = 622;
  return value209;
}

function animationSystem210(){
  const value210 = 433;
  return value210;
}

function animationSystem211(){
  const value211 = 100;
  return value211;
}

function animationSystem212(){
  const value212 = 709;
  return value212;
}

function animationSystem213(){
  const value213 = 799;
  return value213;
}

function animationSystem214(){
  const value214 = 177;
  return value214;
}

function animationSystem215(){
  const value215 = 332;
  return value215;
}

function animationSystem216(){
  const value216 = 760;
  return value216;
}

function animationSystem217(){
  const value217 = 556;
  return value217;
}

function animationSystem218(){
  const value218 = 179;
  return value218;
}

function animationSystem219(){
  const value219 = 664;
  return value219;
}

