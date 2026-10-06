const SZ={card:"(max-width:520px) 92vw, 300px",gal:"(max-width:620px) 92vw, 380px",big:"(max-width:860px) 92vw, 560px"};
const ss=(k,sizes)=>IMGSM[k]?` srcset="${IMGSM[k]} 440w, ${IMG[k]} 820w" sizes="${sizes}"`:"";
const ic = {
  leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19 14 10"/></svg>',
  drop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  shade:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  bag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  arr:'<svg class="flipx" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  left:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
  right:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  pencil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16v4z"/></svg>',
  building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V5l8-2v18M12 8h8v13M8 8v.01M8 12v.01M8 16v.01M16 12v.01M16 16v.01"/></svg>',
  scissors:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5 20 18M8.5 16.5 20 6"/></svg>',
  pot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 10h14l-2 10H7L5 10zM12 10V5M12 5c-2 0-4-1-4-3 2 0 4 1 4 3zM12 5c2 0 4-1 4-3-2 0-4 1-4 3"/></svg>',
  spray:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 21v-7M8 14h8M12 10v.01M8 7v.01M16 7v.01M5 4v.01M19 4v.01M12 4v.01"/></svg>',
  chip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',
  wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 1-2-2z"/></svg>',
  palm:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c0-6 0-9 1-13M13 9c-2-3-6-4-9-2M13 9c1-3 5-5 8-4M13 9c3-1 6 1 7 4M13 9c-3 0-6 2-6 6"/></svg>',
  wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>'
};

ic.chev = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
ic.bulb = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/></svg>';
/* ---------- state ---------- */
const store = {
  get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
const S = { lang: store.get("sa_lang","en"), enq: store.get("sa_enq",{}), cat:"all", q:"", sort:"feat", gtag:"all", est:{area:300,type:"mixed",season:"summer"} };
const t = () => T[S.lang];
const L = o => o[S.lang];
const $ = (s,r=document) => r.querySelector(s);
const $$ = (s,r=document) => [...r.querySelectorAll(s)];
const fmtKD = n => S.lang==="ar" ? `${n.toFixed(3)} ${t().kd}` : `${t().kd} ${n.toFixed(3)}`;
const num = n => n.toLocaleString(S.lang==="ar"?"ar-KW":"en-US");
const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ---------- shell ---------- */
const ROUTES = ["home","plants","seasonal","landscaping","irrigation","wholesale","gallery","care","about","faq","contact","plant","guide"];
const NAV = [["home"],["grpPlants",["plants","seasonal"]],["grpServices",["landscaping","irrigation","wholesale"]],["gallery"],["care"],["about"],["contact"]];
function renderHead(route){
  const n=t().nav, count=Object.values(S.enq).reduce((a,b)=>a+b,0);
  $("#head").innerHTML = `
    <a class="brand" href="#/home" aria-label="Shuwaikh Almashatil Nurseries"><img src="${IMG.logo}" width="150" height="46" alt="Shuwaikh Almashatil Nurseries logo"></a>
    <nav class="nav" id="nav" aria-label="Main">${NAV.map(([k,kids])=>{const act=route==="plant"?"plants":route==="guide"?"care":route;
      return kids?`<div class="grp"><button type="button" aria-haspopup="true" ${kids.includes(act)?'aria-current="true"':""}>${t()[k]}${ic.chev}</button><div class="sub">${kids.map(c=>`<a href="#/${c}" ${c===act?'aria-current="page"':""}>${c==="plants"?t().allPlants:n[c]}<small>${t().subDesc[c]}</small></a>`).join("")}</div></div>`
      :`<a href="#/${k}" ${k===act?'aria-current="page"':""}>${n[k]}</a>`}).join("")}</nav>
    <div class="head-tools">
      <button class="icon-btn lang-btn" id="langBtn" lang="${S.lang==="en"?"ar":"en"}">${t().langBtn}</button>
      <button class="icon-btn" id="enqBtn" aria-label="${t().enquiry}">${ic.bag}${count?`<span class="count">${count}</span>`:""}</button>
      <button class="icon-btn menu-btn" id="menuBtn" aria-label="${t().menu}" aria-expanded="false" aria-controls="nav">${ic.menu}</button>
    </div>`;
  $("#langBtn").onclick = () => { S.lang = S.lang==="en"?"ar":"en"; store.set("sa_lang",S.lang); applyLang(); route_(); };
  $("#enqBtn").onclick = openDrawer;
  $$("#nav .grp>button").forEach(b=>b.onclick=()=>b.parentElement.classList.toggle("open"));
  $("#menuBtn").onclick = e => { const o=$("#nav").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded",o); e.currentTarget.innerHTML=o?ic.x:ic.menu; };
}
function renderFoot(){
  const x=t(), n=x.nav, y=new Date().getFullYear();
  $("#foot").innerHTML = `<div class="wrap">
    <div class="foot-grid">
      <div><img class="icon" src="${IMG.icon}" alt=""><p class="blurb">${x.footBlurb}</p></div>
      <div><h4>${x.fPages}</h4><ul>${["home","plants","seasonal","gallery","care","faq","about","contact"].map(r=>`<li><a href="#/${r}">${n[r]}</a></li>`).join("")}</ul></div>
      <div><h4>${x.fServices}</h4><ul>
        <li><a href="#/landscaping">${n.landscaping}</a></li><li><a href="#/irrigation">${n.irrigation}</a></li><li><a href="#/wholesale">${n.wholesale}</a></li>
        <li><a href="#/plants?cat=indoor">${CATS[0][S.lang][0]}</a></li><li><a href="#/plants?cat=palms">${CATS[3][S.lang][0]}</a></li></ul></div>
      <div><h4>${x.fVisit}</h4><ul>
        <li><a href="tel:${SITE.phone.replace(/\s/g,"")}" dir="ltr">${SITE.phone}</a></li>
        <li>${SITE.email}</li>
        <li><a href="${SITE.mapLink}" target="_blank" rel="noopener">${L(SITE.address)}</a></li></ul></div>
    </div>
    <div class="foot-bottom"><span>© ${y} Shuwaikh Almashatil Nurseries. ${x.rights}</span><span>${x.madeBy} VartexFlow</span></div>
  </div>`;
}
function applyLang(){
  document.documentElement.lang = S.lang;
  document.documentElement.dir = S.lang==="ar"?"rtl":"ltr";
  renderFoot();
}

/* ---------- shared pieces ---------- */
function productCard(p){
  const x=t(), inList=!!S.enq[p.id];
  const light = p.light==="i"?[ic.home,x.indoorL]:p.light==="s"?[ic.sun,x.sunL]:[ic.shade,x.partL];
  const water = [x.waterLow,x.waterMed,x.waterHigh][p.water-1];
  const tag = p.tag==="sale"?`<span class="tag hot">${S.lang==="ar"?"تخفيض":"Sale"}</span>`:p.tag==="new"?`<span class="tag">${S.lang==="ar"?"جديد":"New in"}</span>`:"";
  return `<article class="pcard">
    <a class="ph" href="#/plant/${p.id}" style="display:block"><img src="${IMGSM[p.img]}"${ss(p.img,SZ.card)} alt="${esc(L(p))}" loading="lazy" decoding="async">${tag}</a>
    <div class="body">
      <h3><a href="#/plant/${p.id}">${L(p)}</a></h3><span class="sci">${p.sci} · ${L(p.size)}</span>
      <div class="care"><span>${light[0]}${light[1]}</span><span>${ic.drop}${water}</span></div>
      <div class="pfoot"><span class="price">${fmtKD(p.price)}</span>
        <button class="add ${inList?"in":""}" data-add="${p.id}" aria-pressed="${inList}">${inList?ic.check+x.added:ic.plus+x.add}</button></div>
    </div></article>`;
}
function bindAdds(root=document){
  $$("[data-add]",root).forEach(b=>b.onclick=()=>{
    const id=b.dataset.add;
    if(S.enq[id]){delete S.enq[id];toast(t().toastRemove)}else{S.enq[id]=1;toast(t().toastAdd)}
    store.set("sa_enq",S.enq);
    const inList=!!S.enq[id]; b.classList.toggle("in",inList); b.setAttribute("aria-pressed",inList);
    b.innerHTML = inList?ic.check+t().added:ic.plus+t().add;
    renderHead(current);
  });
}
const band = () => { const x=t(); return `<section class="section-tight"><div class="wrap"><div class="band">
  <div><h2>${x.bandTitle}</h2><p>${x.bandSub}</p></div>
  <div class="acts"><a class="btn btn-light" href="#/contact">${x.contactUs}</a></div>
</div></div></section>`; };
const crumbs = name => `<div class="crumbs"><a href="#/home">${t().nav.home}</a> / <span>${name}</span></div>`;

/* ---------- pages ---------- */
const P = {};
P.home = () => { const x=t(); const heroImgs=["flower_hall","bougain_colors","nursery_view","indoor_shelves"];
  return `
  <section class="hero"><div class="wrap hero-grid">
    <div>
      <h1>${x.heroTitle}</h1>
      <p class="hero-sub">${x.heroSub}</p>
      <div class="hero-cta"><a class="btn btn-primary" href="#/plants">${x.browse}${ic.arr}</a><a class="btn btn-ghost" href="#/contact">${x.visit}</a></div>
      <div class="hero-facts"><span>${ic.truck}${x.fact1}</span><span>${ic.sun}${x.fact2}</span><span>${ic.drop}${x.fact3}</span></div>
    </div>
    <div class="arch-stage">
      <div class="arch-ring"></div>
      <div class="arch-frame" id="slides">${heroImgs.map((k,i)=>`<img ${i===0?`src="${IMG[k]}"${ss(k,SZ.big)} fetchpriority="high"`:`data-src="${IMG[k]}" data-srcset="${IMGSM[k]} 440w, ${IMG[k]} 820w" sizes="${SZ.big}"`} alt="" decoding="async" class="${i===0?"on":""}">`).join("")}</div>
      <div class="arch-caption"><span class="drop"></span><div><b>${x.capT}</b><small>${x.capS}</small></div></div>
      <div class="arch-dots">${heroImgs.map((_,i)=>`<button aria-label="Slide ${i+1}" class="${i===0?"on":""}" data-slide="${i}"></button>`).join("")}</div>
    </div>
  </div></section>
  <svg class="wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30 C 240 0, 480 60, 720 30 S 1200 0, 1440 30" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".5"/><path d="M0 42 C 240 12, 480 72, 720 42 S 1200 12, 1440 42" fill="none" stroke="currentColor" stroke-width="1" opacity=".25"/></svg>

  <section class="section"><div class="wrap">
    <div class="sec-head"><h2>${x.catTitle}</h2><p>${x.catSub}</p></div>
    <div class="cats">${CATS.map(c=>`<a class="cat" href="#/plants?cat=${c.id}"><div class="ph"><img src="${IMGSM[c.img]}"${ss(c.img,SZ.card)} alt="" loading="lazy" decoding="async"></div><h3>${c[S.lang][0]}</h3><p>${c[S.lang][1]}</p></a>`).join("")}</div>
  </div></section>

  <section class="section" style="background:var(--surface)"><div class="wrap split">
    <div class="media"><img src="${IMG.banana}"${ss("banana",SZ.big)} decoding="async" alt="" loading="lazy"></div>
    <div><h2>${x.splitTitle}</h2><p class="lead">${x.splitLead}</p>
      <ul class="ticks">
        <li>${ic.leaf}<div><b>${x.t1}</b><span>${x.t1s}</span></div></li>
        <li>${ic.drop}<div><b>${x.t2}</b><span>${x.t2s}</span></div></li>
        <li>${ic.scissors}<div><b>${x.t3}</b><span>${x.t3s}</span></div></li>
      </ul>
      <a class="btn btn-primary" href="#/landscaping">${x.ourServices}${ic.arr}</a></div>
  </div></section>

  <section class="section"><div class="wrap">
    <div class="sec-head"><div><h2>${x.featTitle}</h2><p class="muted" style="margin-top:10px">${x.featSub}</p></div><a class="link" href="#/plants">${x.allPlants}</a></div>
    <div class="grid">${PRODUCTS.filter(p=>p.feat).map(productCard).join("")}</div>
  </div></section>

  <section class="section-tight"><div class="wrap">
    <div class="sec-head"><h2>${x.stepsTitle}</h2></div>
    <div class="steps">${[1,2,3,4].map(i=>`<div class="step"><h3>${x["s"+i]}</h3><p>${x["s"+i+"d"]}</p></div>`).join("")}</div>
  </div></section>

  <section class="section-tight"><div class="wrap bloom">
    <div class="ph"><img src="${IMG.marigold}"${ss("marigold",SZ.big)} decoding="async" alt="" loading="lazy"></div>
    <div><h2>${x.bloomNow(monthName(kwMonth()))}</h2>
      <div class="bloom-chips">${bloomingNow().map(f=>`<span><i style="background:${f.c}"></i>${L(f)}</span>`).join("")}</div>
      <p style="margin-top:22px"><a class="link" href="#/seasonal">${x.seeCal}</a></p></div>
  </div></section>

  <section class="section"><div class="wrap">
    <div class="sec-head"><h2>${x.quotesTitle}</h2><p class="note">${x.sample}</p></div>
    <div class="quotes">${x.quotes.map(q=>`<figure class="quote" style="margin:0"><span class="stars" aria-label="5/5">★★★★★</span><p>${q[0]}</p><figcaption class="who"><span class="av">${q[2][0]}</span><span><b>${q[1]}</b><br><span class="muted">${q[2]}</span></span></figcaption></figure>`).join("")}</div>
  </div></section>

  <section class="section-tight"><div class="wrap visit">
    <div><h2>${x.visitTitle}</h2><p class="lead muted" style="margin-top:14px">${x.visitSub}</p>
      <ul class="ticks">
        <li>${ic.pin}<div><b>${L(SITE.address)}</b><a class="link" href="${SITE.mapLink}" target="_blank" rel="noopener" style="font-size:.9rem">${x.openMaps}</a></div></li>
        <li>${ic.clock}<div><b>${x.today}: <span dir="ltr">${openStatus().txt}</span></b><span class="open-pill ${openStatus().open?"on":"off"}"><i></i>${openStatus().open?x.openNow:x.closedNow}</span></div></li>
        <li>${ic.phone}<div><b dir="ltr">${SITE.phone}</b></div></li>
      </ul>
      <a class="btn btn-primary" href="#/contact">${x.contactUs}${ic.arr}</a></div>
    ${mapBlock()}
  </div></section>
  ${band()}`;
};
P.home.after = () => {
  bindAdds();
  const imgs=$$("#slides img"), dots=$$(".arch-dots button"); let i=0;
  const show=n=>{imgs[i].classList.remove("on");dots[i].classList.remove("on");i=n;imgs[i].classList.add("on");dots[i].classList.add("on")};
  dots.forEach(d=>d.onclick=()=>{show(+d.dataset.slide);restart()});
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const restart=()=>{clearInterval(timer);if(!reduce)timer=setInterval(()=>show((i+1)%imgs.length),5000)};
  const loadRest=()=>imgs.forEach(im=>{if(im.dataset.src){im.srcset=im.dataset.srcset;im.src=im.dataset.src;im.removeAttribute("data-src")}});
  if(document.readyState==="complete")setTimeout(loadRest,1200);else addEventListener("load",()=>setTimeout(loadRest,600),{once:true});
  restart();
};

P.plants = () => { const x=t(); return `
  <section class="page-head"><div class="wrap">${crumbs(x.nav.plants)}<h1>${x.plantsTitle}</h1><p>${x.plantsSub}</p></div></section>
  <section style="padding-bottom:80px"><div class="wrap">
    <div class="toolbar">
      <label class="search">${ic.search}<span class="sr">${x.searchPh}</span><input id="q" type="search" placeholder="${x.searchPh}" value="${esc(S.q)}"></label>
      <label><span class="sr">${x.sortBy}</span><select class="select" id="sort">
        <option value="feat">${x.sortBy}: ${x.sortFeat}</option><option value="low">${x.sortLow}</option><option value="high">${x.sortHigh}</option><option value="name">${x.sortName}</option></select></label>
    </div>
    <div class="chips" role="group" aria-label="Category">
      <button class="chip" data-cat="all" aria-pressed="${S.cat==="all"}">${x.all}</button>
      ${CATS.map(c=>`<button class="chip" data-cat="${c.id}" aria-pressed="${S.cat===c.id}">${c[S.lang][0]}</button>`).join("")}
    </div>
    <p class="result-n" id="rn"></p>
    <div id="plist"></div>
  </div></section>
  ${band()}`;
};
P.plants.after = () => {
  $("#sort").value=S.sort;
  const draw=()=>{
    const q=S.q.trim().toLowerCase();
    let list=PRODUCTS.filter(p=>(S.cat==="all"||p.cat===S.cat)&&(!q||[p.en,p.ar,p.sci].join(" ").toLowerCase().includes(q)));
    if(S.sort==="low")list.sort((a,b)=>a.price-b.price);
    if(S.sort==="high")list.sort((a,b)=>b.price-a.price);
    if(S.sort==="name")list.sort((a,b)=>L(a).localeCompare(L(b),S.lang));
    if(S.sort==="feat")list.sort((a,b)=>b.feat-a.feat);
    $("#rn").textContent=t().results(list.length);
    $("#plist").innerHTML=list.length?`<div class="grid">${list.map(productCard).join("")}</div>`:
      `<div class="empty"><b>${t().emptyT}</b>${t().emptyS}<div style="margin-top:16px"><button class="btn btn-ghost" id="clr">${t().clear}</button></div></div>`;
    bindAdds($("#plist"));
    const c=$("#clr"); if(c)c.onclick=()=>{S.q="";S.cat="all";$("#q").value="";syncChips();draw()};
  };
  const syncChips=()=>$$("[data-cat]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.cat===S.cat));
  $$("[data-cat]").forEach(b=>b.onclick=()=>{S.cat=b.dataset.cat;syncChips();draw()});
  $("#q").oninput=e=>{S.q=e.target.value;draw()};
  $("#sort").onchange=e=>{S.sort=e.target.value;draw()};
  draw();
};

P.landscaping = () => { const ar=S.lang==="ar"; const x=t();
  const rows = ar ? [
    ["تصميم وتنسيق الحدائق","palms","نصمم حدائق تتحمل حرارة الكويت وتبدو جميلة طوال العام، مع مخطط زراعة وري متكامل.",["تصميم حدائق الفلل والأفنية","اختيار نباتات تتحمل الحرارة والملوحة","عشب طبيعي أو صناعي وممرات حجرية"]],
    ["نباتات للمكاتب والمشاريع","indoor_large","نوفر ونضع النباتات الداخلية للمكاتب والفنادق والمطاعم، مع أصص عصرية وزيارات عناية منتظمة.",["تنسيق نباتات الردهات والمكاتب","عقود تأجير وصيانة شهرية","توريد بالجملة للمقاولين"]],
    ["صيانة الحدائق","topiary","زيارات مجدولة للتقليم والتسميد ومكافحة الآفات وفحص الري، لتبقى حديقتك في أفضل حال.",["زيارات أسبوعية أو شهرية","تقليم وتشكيل الشجيرات","استبدال الزهور الموسمية"]],
    ["الأصص والتربة ولوازم الزراعة","indoor_palm","أصص فخارية وألياف زجاجية وخلطات تربة وأسمدة مختارة لتناسب كل نبتة ومكان.",["أصص داخلية وخارجية بمقاسات كبيرة","خلطات تربة للنباتات الداخلية والصبار","خدمة التأصيص عند الشراء"]]
  ] : [
    ["Garden design & landscaping","palms","Gardens designed to handle Kuwait's heat and still look good all year, with the planting plan and irrigation drawn up together.",["Villa gardens, courtyards and roof terraces","Heat- and salt-tolerant plant selection","Natural or artificial lawn, paths and gravel"]],
    ["Plants for offices & projects","indoor_large","We supply and place indoor plants for offices, hotels and restaurants, with modern planters and regular care visits.",["Lobby and office plant styling","Monthly rental and care contracts","Wholesale supply for contractors"]],
    ["Garden maintenance","topiary","Scheduled visits for pruning, feeding, pest control and irrigation checks, so the garden keeps its shape.",["Weekly or monthly visits","Shrub pruning and topiary shaping","Seasonal flower changeovers"]],
    ["Pots, soil & supplies","indoor_palm","Terracotta, fibreglass and stone-finish planters, soil mixes and fertilisers matched to each plant and spot.",["Large indoor and outdoor planters","Soil mixes for indoor plants and cacti","Free potting with your purchase"]]
  ];
  return `
  <section class="page-head"><div class="wrap">${crumbs(x.nav.landscaping)}<h1>${x.landTitle}</h1><p>${x.landSub}</p></div></section>
  <section style="padding-bottom:40px"><div class="wrap">
    ${rows.map(r=>`<div class="svc-row"><div class="media"><img src="${IMG[r[1]]}" alt="" loading="lazy"></div>
      <div><h2>${r[0]}</h2><p>${r[2]}</p><ul>${r[3].map(li=>`<li>${ic.check}<span>${li}</span></li>`).join("")}</ul>
      <a class="btn btn-ghost" href="#/contact">${x.visit}</a></div></div>`).join("")}
  </div></section>
  <section class="section-tight"><div class="wrap">
    <div class="sec-head"><h2>${x.stepsTitle}</h2></div>
    <div class="steps">${[1,2,3,4].map(i=>`<div class="step"><h3>${x["s"+i]}</h3><p>${x["s"+i+"d"]}</p></div>`).join("")}</div>
  </div></section>
  ${band()}`;
};

P.irrigation = () => { const x=t(), ar=S.lang==="ar";
  const sys = ar ? [
    [ic.drop,"الري بالتنقيط","يوصل الماء مباشرة إلى جذور الأحواض والأسوار والأصص مع أقل تبخر ممكن."],
    [ic.spray,"الرشاشات المنبثقة","رشاشات تختفي تحت الأرض لري العشب بالتساوي دون إعاقة الحركة."],
    [ic.palm,"نافورات النخيل والأشجار","كمية مياه أكبر وعميقة لكل نخلة أو شجرة كبيرة حسب احتياجها."],
    [ic.chip,"المؤقتات الذكية","جداول ري تُضبط من الهاتف وتتغير تلقائياً بين الصيف والشتاء."],
    [ic.wrench,"الصيانة والإصلاح","كشف التسريبات وتنظيف الفلاتر واستبدال الأجزاء التالفة في أي نظام قائم."]
  ] : [
    [ic.drop,"Drip irrigation","Water delivered straight to the roots of beds, hedges and pots, with the least evaporation."],
    [ic.spray,"Pop-up sprinklers","Sprinklers that sit flush with the ground and water lawns evenly without getting in the way."],
    [ic.palm,"Palm & tree bubblers","Deep, larger volumes for each palm or mature tree, sized to what it actually needs."],
    [ic.chip,"Smart controllers","Schedules you can change from your phone, with automatic summer and winter adjustments."],
    [ic.wrench,"Maintenance & repair","Leak detection, filter cleaning and part replacement on any existing system."]
  ];
  return `
  <section class="page-head"><div class="wrap">${crumbs(x.nav.irrigation)}<h1>${x.irrTitle}</h1><p>${x.irrSub}</p></div></section>
  <section style="padding-bottom:40px"><div class="wrap">
    <div class="sec-head"><h2>${x.sysTitle}</h2></div>
    <div class="svc">${sys.map(s=>`<div class="svc-card"><span class="ico w">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join("")}</div>
  </div></section>
  <section class="section"><div class="wrap">
    <div class="sec-head"><div><h2>${x.estTitle}</h2><p class="muted" style="margin-top:10px">${x.estSub}</p></div></div>
    <div class="est">
      <div class="est-in">
        <div class="field"><label for="ea">${x.area}</label><div class="range-row"><input type="range" id="ea" min="20" max="2000" step="10" value="${S.est.area}"><output id="eao"></output></div></div>
        <div class="field"><span class="lbl">${x.gtype}</span><div class="seg" id="etype">${["lawn","beds","trees","mixed"].map(k=>`<button data-v="${k}" aria-pressed="${S.est.type===k}">${x[k]}</button>`).join("")}</div></div>
        <div class="field"><span class="lbl">${x.season}</span><div class="seg" id="eseason">${["summer","winter"].map(k=>`<button data-v="${k}" aria-pressed="${S.est.season===k}">${x[k]}</button>`).join("")}</div></div>
      </div>
      <div class="est-out" aria-live="polite">
        <div><div class="big" id="eL">0</div><p class="muted">${x.perDay}</p></div>
        <dl><dt>${x.recSys}</dt><dd id="eSys"></dd><dt>${x.zones}</dt><dd id="eZ"></dd><dt>${x.saving}</dt><dd id="eSave"></dd></dl>
        <p class="note">${x.estNote}</p>
        <a class="btn btn-primary" href="#/contact" style="align-self:flex-start">${x.getQuote}${ic.arr}</a>
      </div>
    </div>
  </div></section>
  <section class="section-tight"><div class="wrap split flip">
    <div class="media"><img src="${IMG.bougain_pole}"${ss("bougain_pole",SZ.big)} decoding="async" alt="" loading="lazy"></div>
    <div><h2>${x.splitTitle}</h2><p class="lead">${x.splitLead}</p>
    <div class="faq" style="margin-top:26px">${x.faq.slice(2).map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")}</div></div>
  </div></section>
  ${band()}`;
};
P.irrigation.after = () => {
  const rate={lawn:[8,4],beds:[5,2.5],trees:[3.5,1.8],mixed:[6,3]};
  const sysName={en:{lawn:"Pop-up sprinklers",beds:"Drip lines",trees:"Bubblers + drip rings",mixed:"Drip + sprinkler zones"},
                 ar:{lawn:"رشاشات منبثقة",beds:"خطوط تنقيط",trees:"نافورات وحلقات تنقيط",mixed:"تنقيط ورشاشات بمناطق"}};
  const calc=()=>{
    const {area,type,season}=S.est;
    const litres=Math.round(area*rate[type][season==="summer"?0:1]/10)*10;
    const zones=Math.max(1,Math.ceil(area/(type==="lawn"?150:type==="mixed"?180:250)));
    const saved=Math.round(litres*0.35*30/100)*100;
    $("#eao").textContent=`${num(area)} ${S.lang==="ar"?"م²":"m²"}`;
    animateNum($("#eL"),litres);
    $("#eSys").textContent=sysName[S.lang][type];
    $("#eZ").textContent=num(zones);
    $("#eSave").textContent=`~${num(saved)} ${S.lang==="ar"?"لتر":"L"}`;
  };
  $("#ea").oninput=e=>{S.est.area=+e.target.value;calc()};
  const seg=(id,key)=>$$(`#${id} button`).forEach(b=>b.onclick=()=>{S.est[key]=b.dataset.v;$$(`#${id} button`).forEach(o=>o.setAttribute("aria-pressed",o===b));calc()});
  seg("etype","type");seg("eseason","season");calc();
};
let numRaf;
function animateNum(el,to){
  const from=+(el.dataset.v||0); el.dataset.v=to; cancelAnimationFrame(numRaf);
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){el.textContent=num(to);return}
  const t0=performance.now(), d=400;
  const step=now=>{const k=Math.min(1,(now-t0)/d),e=1-Math.pow(1-k,3);el.textContent=num(Math.round(from+(to-from)*e));if(k<1)numRaf=requestAnimationFrame(step)};
  numRaf=requestAnimationFrame(step);
}

let galList=[], galIdx=0;
P.gallery = () => { const x=t(); const tags=[["all",x.gAll],["nursery",x.gNursery],["indoor",x.gIndoor],["flowers",x.gFlowers],["outdoor",x.gOutdoor]];
  return `
  <section class="page-head"><div class="wrap">${crumbs(x.nav.gallery)}<h1>${x.galTitle}</h1><p>${x.galSub}</p></div></section>
  <section style="padding-bottom:80px"><div class="wrap">
    <div class="chips" role="group">${tags.map(g=>`<button class="chip" data-g="${g[0]}" aria-pressed="${S.gtag===g[0]}">${g[1]}</button>`).join("")}</div>
    <div class="masonry" id="mas"></div>
  </div></section>
  ${band()}`;
};
P.gallery.after = () => {
  const draw=()=>{
    galList=GALLERY.filter(g=>S.gtag==="all"||g.t===S.gtag);
    $("#mas").innerHTML=galList.map((g,i)=>`<figure tabindex="0" data-i="${i}"><img src="${IMGSM[g.img]}"${ss(g.img,SZ.gal)} alt="${esc(L(g))}" loading="lazy" decoding="async"><figcaption>${L(g)}</figcaption></figure>`).join("");
    $$("#mas figure").forEach(f=>{const o=()=>openLb(+f.dataset.i);f.onclick=o;f.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();o()}}});
  };
  $$("[data-g]").forEach(b=>b.onclick=()=>{S.gtag=b.dataset.g;$$("[data-g]").forEach(o=>o.setAttribute("aria-pressed",o===b));draw()});
  draw();
};
function openLb(i){
  galIdx=i; const lb=$("#lb");
  lb.innerHTML=`<button class="x" aria-label="Close">${ic.x}</button><button class="pv" aria-label="Previous">${ic.left}</button><img alt=""><button class="nx" aria-label="Next">${ic.right}</button><div class="cap"></div>`;
  const show=()=>{const g=galList[galIdx];$("img",lb).src=IMG[g.img];$("img",lb).alt=L(g);$(".cap",lb).textContent=`${L(g)}  ·  ${galIdx+1}/${galList.length}`};
  const mv=d=>{galIdx=(galIdx+d+galList.length)%galList.length;show()};
  const rtl=S.lang==="ar";
  $(".pv",lb).onclick=()=>mv(-1); $(".nx",lb).onclick=()=>mv(1); $(".x",lb).onclick=closeLb;
  lb.onclick=e=>{if(e.target===lb)closeLb()};
  lb._key=e=>{if(e.key==="Escape")closeLb();if(e.key==="ArrowRight")mv(rtl?-1:1);if(e.key==="ArrowLeft")mv(rtl?1:-1)};
  document.addEventListener("keydown",lb._key);
  let sx=null; lb.ontouchstart=e=>sx=e.touches[0].clientX; lb.ontouchend=e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)mv((dx<0)!==rtl?1:-1);sx=null};
  show(); lb.classList.add("open"); document.body.style.overflow="hidden"; $(".x",lb).focus();
}
function closeLb(){const lb=$("#lb");lb.classList.remove("open");document.removeEventListener("keydown",lb._key);document.body.style.overflow=""}

P.about = () => { const x=t(); return `
  <section class="page-head"><div class="wrap">${crumbs(x.nav.about)}<h1>${x.aboutTitle}</h1><p>${x.aboutSub}</p></div></section>
  <section style="padding-bottom:40px"><div class="wrap split">
    <div class="prose"><p>${x.ab1}</p><p>${x.ab2}</p><div><a class="btn btn-primary" href="#/contact">${x.visit}</a></div></div>
    <div class="collage"><img src="${IMG.palms}"${ss("palms",SZ.big)} decoding="async" alt="" loading="lazy"><img src="${IMG.cactus_display}"${ss("cactus_display",SZ.big)} decoding="async" alt="" loading="lazy"><img src="${IMG.vinca_crates}"${ss("vinca_crates",SZ.big)} decoding="async" alt="" loading="lazy"></div>
  </div></section>
  <section class="section"><div class="wrap">
    <div class="sec-head"><h2>${x.valuesTitle}</h2></div>
    <div class="values">${[1,2,3].map(i=>`<div class="value"><h3>${x["v"+i]}</h3><p>${x["v"+i+"d"]}</p></div>`).join("")}</div>
  </div></section>
  <section class="section-tight"><div class="wrap">
    <div class="sec-head"><h2>${x.faqTitle}</h2></div>
    <div class="faq">${x.faq.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")}</div>
  </div></section>
  ${band()}`;
};

function kuwaitNow(){
  const parts=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kuwait",weekday:"short",hour:"numeric",minute:"numeric",hour12:false}).formatToParts(new Date());
  const g=k=>parts.find(p=>p.type===k).value;
  const day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(g("weekday"));
  return {day,h:(+g("hour"))%24+(+g("minute"))/60};
}
const hh = h => { const d=new Date(2000,0,1,h); return d.toLocaleTimeString(S.lang==="ar"?"ar-KW":"en-US",{hour:"numeric"}); };
P.contact = () => { const x=t(); const now=kuwaitNow(); const [o,c]=SITE.hours[now.day]; const isOpen=now.h>=o&&now.h<c;
  const order=[6,0,1,2,3,4,5];
  return `
  <section class="page-head"><div class="wrap">${crumbs(x.nav.contact)}<h1>${x.contactTitle}</h1><p>${x.contactSub}</p></div></section>
  <section style="padding-bottom:40px"><div class="wrap contact-grid">
    <div class="info-card">
      <div class="info-row"><span class="ico">${ic.phone}</span><div><b>${x.phoneL}</b><a href="tel:${SITE.phone.replace(/\s/g,"")}" dir="ltr">${SITE.phone}</a></div></div>
      <div class="info-row"><span class="ico">${ic.mail}</span><div><b>${x.mailL}</b><span>${SITE.email}</span></div></div>
      <div class="info-row"><span class="ico">${ic.pin}</span><div><b>${x.addrL}</b><span class="muted">${L(SITE.address)}</span></div></div>
      <div class="info-row"><span class="ico">${ic.clock}</span><div><b>${x.hoursL}</b>
        <span class="open-pill ${isOpen?"on":"off"}"><i></i>${isOpen?x.openNow:x.closedNow}</span>
        <div class="hours">${order.map(d=>`<span class="${d===now.day?"today":""}">${x.days[d]}</span><span class="${d===now.day?"today":""}" dir="ltr">${hh(SITE.hours[d][0])} – ${hh(SITE.hours[d][1])}</span>`).join("")}</div></div></div>
    </div>
    <form class="form" id="cform" novalidate>
      <h2 style="font-size:1.5rem">${x.formTitle}</h2>
      <div class="two">
        <label>${x.fName}<input name="name" autocomplete="name"><span class="err" data-err="name"></span></label>
        <label>${x.fPhone}<input name="phone" type="tel" autocomplete="tel" dir="ltr"><span class="err" data-err="phone"></span></label>
      </div>
      <label>${x.fService}<select name="svc">${x.svcOpts.map(s=>`<option>${s}</option>`).join("")}</select></label>
      <label>${x.fMsg}<textarea name="msg"></textarea></label>
      <div class="acts"><button class="btn btn-primary" type="submit">${ic.mail}${x.sendWa}</button></div>
    </form>
  </div></section>
  <section style="padding-bottom:60px"><div class="wrap">
    ${mapBlock()}
    </div></section>`;
};
P.contact.after = () => {
  const form=$("#cform");
  const collect=()=>{
    const d=Object.fromEntries(new FormData(form)); let ok=true;
    $$("[data-err]",form).forEach(e=>e.textContent="");
    if(!d.name.trim()){$('[data-err="name"]',form).textContent=t().errName;ok=false}
    if(d.phone.replace(/\D/g,"").length<7){$('[data-err="phone"]',form).textContent=t().errPhone;ok=false}
    if(!ok){$("[data-err]:not(:empty)",form).previousElementSibling.focus();return null}
    return `${t().waHello}\n${t().fName}: ${d.name}\n${t().fPhone}: ${d.phone}\n${t().fService}: ${d.svc}\n${d.msg?t().fMsg+": "+d.msg:""}`;
  };
  // Portfolio demo: nothing is sent.
  form.onsubmit=e=>{e.preventDefault();if(collect()){toast(S.lang==="ar"?"شكراً! هذا موقع تجريبي، لذلك لم يتم إرسال أي رسالة.":"Thanks! This is a portfolio demo, so no message was sent.",4000);form.reset()}};
};


/* ---------- additions: helpers ---------- */
function mapBlock(){
  const x=t(), q=encodeURIComponent(SITE.mapQuery);
  return `<div class="map">
    <svg class="art" viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="800" height="420" fill="var(--surface-2)"/>
      <path d="M0 0 H800 V120 C 640 150 560 90 430 120 S 180 60 0 110 Z" fill="var(--water-soft)"/>
      <g stroke="var(--surface)" stroke-width="14" fill="none" stroke-linecap="round"><path d="M-20 250 H820"/><path d="M300 130 V440"/><path d="M560 130 L 620 440"/></g>
      <g transform="translate(430 250)"><path d="M0 -8 C -14 -24 -14 -44 0 -44 C 14 -44 14 -24 0 -8 Z" transform="translate(0 4) scale(1.2)" fill="var(--bloom)"/><circle cx="0" cy="-37" r="5" fill="#fff"/></g>
    </svg>
    <iframe src="https://maps.google.com/maps?q=${q}&z=15&hl=${S.lang}&output=embed" loading="lazy" title="${esc(x.mapTitle)}" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    <div class="map-card"><b>${x.mapTitle}</b><span class="muted" style="font-size:.88rem">${L(SITE.address)}</span>
      <div class="acts"><a class="btn btn-primary" href="${SITE.mapLink}" target="_blank" rel="noopener">${ic.pin}${x.openMaps}</a>
      <a class="btn btn-ghost" href="https://www.google.com/maps/dir/?api=1&destination=${q}" target="_blank" rel="noopener">${x.directions}</a></div></div>
  </div>`;
}
function openStatus(){
  const now=kuwaitNow(), [o,c]=SITE.hours[now.day], x=t();
  return {open:now.h>=o&&now.h<c, txt:`${hh(o)} – ${hh(c)}`, x};
}
const monthName = m => MONTHS[S.lang][m-1];
const bloomingNow = () => { const m=kwMonth(); return FLOWERS.filter(f=>f.m.includes(m)); };
const catName = id => (CATS.find(c=>c.id===id)||CATS[0])[S.lang][0];
const stepsHTML = arr => `<div class="steps">${arr.map(s=>`<div class="step"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div>`;

/* ---------- additions: pages ---------- */
P.plant = () => {
  const x=t(), p=PRODUCTS.find(q=>q.id===S.param), inList=S.enq[p.id]||0;
  const light = p.light==="i"?x.indoorL:p.light==="s"?x.sunL:x.partL;
  const water = [x.waterLow,x.waterMed,x.waterHigh][p.water-1];
  const rel = PRODUCTS.filter(q=>q.cat===p.cat&&q.id!==p.id).slice(0,4);
  return `
  <div class="wrap"><div class="pd">
    <div class="media"><img src="${IMG[p.img]}"${ss(p.img,SZ.big)} alt="${esc(L(p))}" fetchpriority="high"></div>
    <div>
      <div class="crumbs"><a href="#/home">${x.nav.home}</a> / <a href="#/plants">${x.nav.plants}</a> / <a href="#/plants?cat=${p.cat}">${catName(p.cat)}</a></div>
      <h1>${L(p)}</h1><span class="sci">${p.sci}</span>
      <span class="price">${fmtKD(p.price)}</span>
      <dl class="specs">
        <div><dt>${x.specSize}</dt><dd>${L(p.size)}</dd></div><div><dt>${x.specCat}</dt><dd>${catName(p.cat)}</dd></div>
        <div><dt>${x.specLight}</dt><dd>${light}</dd></div><div><dt>${x.specWater}</dt><dd>${water}</dd></div>
      </dl>
      <div class="buy">
        <div class="stepper" role="group" aria-label="${x.qty}"><button type="button" data-st="-1" aria-label="-">−</button><output id="pq">${num(inList||1)}</output><button type="button" data-st="1" aria-label="+">+</button></div>
        <button class="btn btn-primary" id="pAdd">${ic.bag}${inList?x.updList:x.addList}</button>
        <a class="btn btn-ghost" href="#/contact">${x.askWa}</a>
      </div>
      <p class="note" style="margin-top:14px">${x.pdNote}</p>
      <div class="caretxt"><h2>${x.careT}</h2>
        <div>${p.light==="i"?ic.home:p.light==="s"?ic.sun:ic.shade}<span>${x.lightTxt[p.light]}</span></div>
        <div>${ic.drop}<span>${x.waterTxt[p.water-1]}</span></div>
        <div>${ic.leaf}<span>${x.hardTxt}</span></div>
      </div>
    </div>
  </div></div>
  ${rel.length?`<section class="section-tight"><div class="wrap"><div class="sec-head"><h2>${x.related}</h2><a class="link" href="#/plants?cat=${p.cat}">${catName(p.cat)}</a></div><div class="grid">${rel.map(productCard).join("")}</div></div></section>`:""}
  ${band()}`;
};
P.plant.after = () => {
  const p=PRODUCTS.find(q=>q.id===S.param); let q=S.enq[p.id]||1;
  $$("[data-st]").forEach(b=>b.onclick=()=>{q=Math.max(1,q+(+b.dataset.st));$("#pq").textContent=num(q)});
  $("#pAdd").onclick=()=>{S.enq[p.id]=q;store.set("sa_enq",S.enq);toast(t().toastAdd);renderHead(current);$("#pAdd").innerHTML=ic.bag+t().updList};
  bindAdds();
};

P.seasonal = () => {
  const x=t(), m=kwMonth(), now=bloomingNow();
  const cal = FLOWERS.map(f=>{
    const cells=[...Array(12)].map((_,i)=>{const mm=i+1,on=f.m.includes(mm),prev=f.m.includes(mm===1?12:mm-1),next=f.m.includes(mm===12?1:mm+1);
      return `<div style="--bar:${f.c}" class="c ${on?"on":""} ${on&&!prev?"s":""} ${on&&!next?"e":""} ${mm===m?"now":""}"><span></span></div>`}).join("");
    return `<div class="fl"><i style="background:${f.c}"></i>${L(f)}</div>${cells}`;
  }).join("");
  return `
  <section class="page-head"><div class="wrap">${crumbs(x.nav.seasonal)}<h1>${x.seTitle}</h1><p>${x.seSub}</p>
    <h2 style="font-size:1.25rem;margin-top:30px">${x.bloomNow(monthName(m))}</h2>
    <div class="bloom-chips">${now.map(f=>`<span><i style="background:${f.c}"></i>${L(f)}</span>`).join("")}</div>
  </div></section>
  <section class="section-tight"><div class="wrap">
    <div class="sec-head"><h2>${x.calTitle}</h2><p>${x.calNote}</p></div>
    <div class="cal-wrap"><div class="cal" role="table">
      <div class="fl"></div>${[...Array(12)].map((_,i)=>`<div class="mh ${i+1===m?"now":""}">${MONTHS[S.lang+"S"][i]}</div>`).join("")}
      ${cal}
    </div></div>
  </div></section>
  <section class="section-tight"><div class="wrap seasons">
    <article class="season"><div class="ph"><img src="${IMG.marigold_petunia}"${ss("marigold_petunia",SZ.big)} decoding="async" alt="" loading="lazy"></div><div class="t"><h3>${x.winterT}</h3><p>${x.winterD}</p></div></article>
    <article class="season"><div class="ph"><img src="${IMG.vinca_rows}"${ss("vinca_rows",SZ.big)} decoding="async" alt="" loading="lazy"></div><div class="t"><h3>${x.summerT}</h3><p>${x.summerD}</p></div></article>
  </div></section>
  <section class="section-tight"><div class="wrap">
    <div class="sec-head"><h2>${x.seShop}</h2><a class="btn btn-ghost" href="#/contact">${x.bookPlanting}</a></div>
    <div class="grid">${PRODUCTS.filter(p=>p.cat==="seasonal").map(productCard).join("")}</div>
  </div></section>
  ${band()}`;
};
P.seasonal.after = () => bindAdds();

P.wholesale = () => {
  const x=t(), icons=[ic.building,ic.pencil,ic.leaf,ic.truck];
  return `
  <section class="page-head"><div class="wrap">${crumbs(x.nav.wholesale)}<h1>${x.whTitle}</h1><p>${x.whSub}</p></div></section>
  <section style="padding-bottom:30px"><div class="wrap">
    <div class="sec-head"><h2>${x.whoTitle}</h2></div>
    <div class="svc">${x.who.map((w,i)=>`<div class="svc-card"><span class="ico">${icons[i]}</span><h3>${w[0]}</h3><p>${w[1]}</p></div>`).join("")}</div>
  </div></section>
  <section class="section"><div class="wrap split">
    <div class="media"><img src="${IMG.flower_hall}"${ss("flower_hall",SZ.big)} decoding="async" alt="" loading="lazy"></div>
    <div><h2>${x.whyTitle}</h2>
      <ul class="ticks">${x.why.map(w=>`<li>${ic.check}<div><b>${w[0]}</b><span>${w[1]}</span></div></li>`).join("")}</ul></div>
  </div></section>
  <section class="section-tight"><div class="wrap"><div class="sec-head"><h2>${x.whStepsT}</h2></div>${stepsHTML(x.whSteps)}</div></section>
  <section class="section"><div class="wrap" style="max-width:860px">
    <form class="form" id="wform" novalidate>
      <h2 style="font-size:1.5rem">${x.wfTitle}</h2>
      <div class="two">
        <label>${x.wfCompany}<input name="company" autocomplete="organization"></label>
        <label>${x.fName}<input name="name" autocomplete="name"><span class="err" data-err="name"></span></label>
      </div>
      <div class="two">
        <label>${x.fPhone}<input name="phone" type="tel" dir="ltr" autocomplete="tel"><span class="err" data-err="phone"></span></label>
        <label>${x.wfDate}<input name="date" type="date"></label>
      </div>
      <label>${x.wfType}<select name="type">${x.wfTypes.map(s=>`<option>${s}</option>`).join("")}</select></label>
      <label>${x.wfList}<textarea name="list"></textarea></label>
      <div class="acts"><button class="btn btn-primary" type="submit">${x.wfSend}</button></div>
    </form>
  </div></section>
  ${band()}`;
};
P.wholesale.after = () => {
  const form=$("#wform");
  form.onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(form)),x=t();let ok=true;
    $$("[data-err]",form).forEach(el=>el.textContent="");
    if(!d.name.trim()){$('[data-err="name"]',form).textContent=x.errName;ok=false}
    if(d.phone.replace(/\D/g,"").length<7){$('[data-err="phone"]',form).textContent=x.errPhone;ok=false}
    if(!ok){$("[data-err]:not(:empty)",form).previousElementSibling.focus();return}
    // Portfolio demo: nothing is sent.
    toast(S.lang==="ar"?"شكراً! هذا موقع تجريبي، لذلك لم يتم إرسال أي رسالة.":"Thanks! This is a portfolio demo, so no message was sent.",4000);form.reset()};
};

const guideCard = g => { const c=g[S.lang]; return `<a class="guide-card" href="#/guide/${g.slug}"><div class="ph"><img src="${IMGSM[g.img]}"${ss(g.img,SZ.card)} alt="" loading="lazy" decoding="async"></div><span class="meta">${t().minRead(g.min)}</span><h3>${c.t}</h3><p>${c.x}</p></a>`; };
P.care = () => { const x=t(); return `
  <section class="page-head"><div class="wrap">${crumbs(x.nav.care)}<h1>${x.careTitle}</h1><p>${x.careSub}</p></div></section>
  <section style="padding-bottom:80px"><div class="wrap"><div class="guides">${GUIDES.map(guideCard).join("")}</div></div></section>
  ${band()}`; };
P.guide = () => {
  const x=t(), g=GUIDES.find(q=>q.slug===S.param), c=g[S.lang];
  return `
  <section class="page-head" style="padding-bottom:0"><div class="wrap"><article class="article">
    <div class="crumbs"><a href="#/home">${x.nav.home}</a> / <a href="#/care">${x.nav.care}</a></div>
    <h1>${c.t}</h1><p class="lede">${c.x}</p><p class="meta" style="margin-top:12px">${x.minRead(g.min)}</p>
    <div class="cover"><img src="${IMG[g.img]}"${ss(g.img,SZ.big)} alt=""></div>
    ${c.s.map(s=>`<h2>${s[0]}</h2><p class="body">${s[1]}</p>`).join("")}
    <div class="tip">${ic.bulb}<div><b>${x.tipL}</b><p class="muted">${c.tip}</p></div></div>
    <p class="muted" style="margin-top:28px">${x.needHelp}</p>
    <a class="btn btn-primary" style="margin-top:14px" href="#/contact">${x.contactUs}</a>
  </article></div></section>
  <section class="section"><div class="wrap"><div class="sec-head"><h2>${x.moreGuides}</h2></div>
    <div class="guides">${GUIDES.filter(q=>q.slug!==g.slug).map(guideCard).join("")}</div></div></section>`;
};

P.faq = () => { const x=t(); return `
  <section class="page-head"><div class="wrap">${crumbs(x.nav.faq)}<h1>${x.faqTitle}</h1><p>${x.faqSub}</p></div></section>
  <section style="padding-bottom:40px"><div class="wrap faq-groups">
    <nav class="faq-nav" aria-label="${x.faqTitle}">${x.faqGroups.map((g,i)=>`<a href="#fg${i}" data-jump="fg${i}">${g[0]}</a>`).join("")}</nav>
    <div>${x.faqGroups.map((g,i)=>`<div class="faq-group" id="fg${i}"><h2>${g[0]}</h2><div class="faq">${g[1].map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")}</div></div>`).join("")}
      <p class="muted" style="margin-top:10px">${x.faqMore} <a class="link" href="#/contact">${x.contactUs}</a></p></div>
  </div></section>
  ${band()}`; };
P.faq.after = () => { $$("[data-jump]").forEach(a=>a.onclick=e=>{e.preventDefault();$("#"+a.dataset.jump).scrollIntoView({behavior:"smooth"})}); };

/* ---------- drawer ---------- */
function openDrawer(){ renderDrawer(); $("#drawer").classList.add("open"); $("#drawer").setAttribute("aria-hidden","false"); $("#scrim").classList.add("open"); document.body.style.overflow="hidden"; setTimeout(()=>$("#dClose").focus(),50); }
function closeDrawer(){ $("#drawer").classList.remove("open"); $("#drawer").setAttribute("aria-hidden","true"); $("#scrim").classList.remove("open"); document.body.style.overflow=""; }
function renderDrawer(){
  const x=t(), items=Object.entries(S.enq).map(([id,q])=>({p:PRODUCTS.find(p=>p.id===id),q})).filter(i=>i.p);
  const total=items.reduce((s,i)=>s+i.p.price*i.q,0);
  $("#drawer").innerHTML=`<header><h2 id="d-title">${x.dTitle}</h2><button class="icon-btn" id="dClose" aria-label="Close">${ic.x}</button></header>
    <div class="d-list">${items.length?items.map(({p,q})=>`<div class="d-item"><img src="${IMGSM[p.img]}" alt="" decoding="async"><div><b>${L(p)}</b><small>${fmtKD(p.price)}</small></div>
      <div class="qty"><button data-q="${p.id}" data-d="-1" aria-label="-">−</button><span>${num(q)}</span><button data-q="${p.id}" data-d="1" aria-label="+">+</button></div></div>`).join("")
      :`<div class="empty" style="margin-top:20px">${x.dEmpty}<div style="margin-top:16px"><a class="btn btn-primary" href="#/plants" id="dBrowse">${x.browse}</a></div></div>`}</div>
    ${items.length?`<div class="d-foot"><div class="d-total"><span>${x.dTotal}</span><span>${fmtKD(total)}</span></div>
      <input id="dName" placeholder="${x.dName}" autocomplete="name">
      <button class="btn btn-primary" id="dSend" style="justify-content:center">${x.dSend}</button>
      <button class="btn btn-ghost" id="dClear" style="justify-content:center">${x.dClear}</button></div>`:""}`;
  $("#dClose").onclick=closeDrawer;
  const b=$("#dBrowse"); if(b)b.onclick=closeDrawer;
  $$("[data-q]").forEach(btn=>btn.onclick=()=>{const id=btn.dataset.q;S.enq[id]=(S.enq[id]||0)+(+btn.dataset.d);if(S.enq[id]<=0)delete S.enq[id];store.set("sa_enq",S.enq);renderDrawer();renderHead(current);syncAddButtons()});
  const send=$("#dSend");
  if(send){send.onclick=()=>toast(S.lang==="ar"?"شكراً! هذا موقع تجريبي، لذلك لم يتم إرسال أي رسالة.":"Thanks! This is a portfolio demo, so no message was sent.",4000);
    $("#dClear").onclick=()=>{S.enq={};store.set("sa_enq",S.enq);renderDrawer();renderHead(current);syncAddButtons()};}
}
function syncAddButtons(){ $$("[data-add]").forEach(b=>{const on=!!S.enq[b.dataset.add];b.classList.toggle("in",on);b.setAttribute("aria-pressed",on);b.innerHTML=on?ic.check+t().added:ic.plus+t().add}); }
$("#scrim").onclick=closeDrawer;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#drawer").classList.contains("open"))closeDrawer()});

let toastT; function toast(m,ms){const el=$("#toast");el.textContent=m;el.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>el.classList.remove("show"),ms||1800)}

/* ---------- router ---------- */
let current="home", lastKey="", timer;
function route_(){
  clearInterval(timer);
  const h=location.hash.replace(/^#\/?/,""), [path,qs]=h.split("?");
  const [r0,param]=(path||"").split("/");
  let r=ROUTES.includes(r0)?r0:"home";
  if(r==="plant"&&!PRODUCTS.find(p=>p.id===param)) r="plants";
  if(r==="guide"&&!GUIDES.find(g=>g.slug===param)) r="care";
  S.param=param;
  if(r==="plants"&&qs){const c=new URLSearchParams(qs).get("cat");if(c)S.cat=c}
  const key=r+"/"+(param||""); const changed=key!==lastKey; lastKey=key; current=r;
  renderHead(r);
  const main=$("#main"); main.innerHTML=P[r](); main.classList.remove("page-enter"); void main.offsetWidth; main.classList.add("page-enter");
  (P[r].after||(()=>bindAdds()))();
  const ttl = r==="plant"?L(PRODUCTS.find(p=>p.id===param)):r==="guide"?GUIDES.find(g=>g.slug===param)[S.lang].t:t().nav[r];
  document.title=`${ttl} | ${S.lang==="ar"?"مشاتل الشويخ":"Shuwaikh Almashatil Nurseries"}`;
  if(changed) window.scrollTo(0,0);
}
window.addEventListener("hashchange",()=>{closeDrawer();route_()});
applyLang(); route_();
