
// Custom site-wide enhancements injected by assistant
(function(){
  function createStyle(){
    const css = `
/* Modern navbar */
#assistant-navbar{position:sticky;top:0;z-index:999;background:linear-gradient(180deg, rgba(255,255,255,0.95), rgba(250,250,250,0.95));backdrop-filter:saturate(120%) blur(6px);border-bottom:1px solid rgba(0,0,0,0.06);display:flex;align-items:center;justify-content:space-between;padding:12px 18px;font-family:system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;}
#assistant-navbar .brand{font-weight:700;font-size:1.05rem;}
#assistant-navbar .nav-links{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}
.btn-like{appearance:none;border:1px solid rgba(0,0,0,0.08);background:white;padding:8px 12px;border-radius:8px;cursor:pointer;font-size:0.95rem;}
.btn-like:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(0,0,0,0.06);}
/* dropdown fix */
.assistant-dropdown{position:relative;}
.assistant-dropdown ul{list-style:none;margin:0;padding:8px;border-radius:8px;background:white;box-shadow:0 6px 18px rgba(0,0,0,0.08);position:absolute;display:none;min-width:180px;right:0;}
.assistant-dropdown.open ul{display:block;}
.assistant-dropdown ul li{padding:6px 10px;border-radius:6px;cursor:pointer;}
.assistant-dropdown ul li:hover{background:rgba(0,0,0,0.03);}
/* Alerts */
.assistant-alert{border-radius:8px;padding:12px 14px;margin:10px 0;border-left:4px solid #d9534f;background:#fff4f4;color:#6b1b1b;font-weight:600;}
/* Images */
.assistant-broken{opacity:0.6;border:1px dashed #ccc;padding:6px;border-radius:6px;}
/* Make anchor-looking-buttons consistent */
a.buttonized{display:inline-block;text-decoration:none;}
`;
    const s = document.createElement('style');
    s.textContent = css;
    document.head.appendChild(s);
  }

  function convertAnchorsToButtons(){
    document.querySelectorAll('a').forEach(a=>{
      const href = a.getAttribute('href');
      if(!href) return;
      // Keep external links as anchors with target
      const isExternal = href.startsWith('http') || href.startsWith('//');
      if(isExternal){
        a.classList.add('buttonized','btn-like');
        a.setAttribute('role','button');
        a.setAttribute('aria-pressed','false');
        return;
      }
      // Create a button that navigates
      const btn = document.createElement('button');
      btn.className = 'btn-like';
      btn.innerHTML = a.innerHTML || a.textContent || href;
      btn.onclick = ()=>{ window.location.href = href; };
      // copy dataset
      for(const k in a.dataset) btn.dataset[k]=a.dataset[k];
      a.replaceWith(btn);
    });
  }

  function replaceVulnSentences(){
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const nodes = [];
    while(walker.nextNode()){
      nodes.push(walker.currentNode);
    }
    nodes.forEach(n=>{
      if(n.nodeValue && n.nodeValue.includes("This game was updated with an automated tool to protect against a security vulnerability affecting the Unity Engine")){
        const parent = n.parentNode;
        const wrapper = document.createElement('div');
        wrapper.className = 'assistant-alert';
        wrapper.textContent = n.nodeValue.trim();
        parent.replaceChild(wrapper, n);
      }
    });
  }

  function fixBrokenImages(){
    document.querySelectorAll('img').forEach(img=>{
      if(!img.complete || img.naturalWidth===0){
        img.classList.add('assistant-broken');
        img.alt = img.alt || 'Broken screenshot';
        img.addEventListener('error', ()=>{
          img.classList.add('assistant-broken');
          img.alt = 'Broken screenshot';
        });
      }
    });
  }

  function injectNavbarFooter(){
    if(!document.getElementById('assistant-navbar')){
      const nav = document.createElement('nav');
      nav.id = 'assistant-navbar';
      nav.innerHTML = `<div class="brand">Lockyz Media</div>
<div class="nav-links">
  <button class="btn-like" onclick="window.location.href='/'">Home</button>
  <div class="assistant-dropdown" id="all-games-dropdown">
    <button class="btn-like" onclick="document.getElementById('all-games-dropdown').classList.toggle('open')">All Games ▾</button>
    <ul>
      <li onclick="window.location.href='/games/project-jareth'">Project Jareth</li>
      <li onclick="window.location.href='/games/table-ball'">Table Ball</li>
      <li onclick="window.location.href='/games/template'">Template</li>
    </ul>
  </div>
  <button class="btn-like" onclick="window.location.href='/games'">Games</button>
  <button class="btn-like" onclick="window.location.href='/about'">About</button>
</div>`;
      document.body.insertBefore(nav, document.body.firstChild);
    }
    if(!document.getElementById('assistant-footer')){
      const f = document.createElement('footer');
      f.id = 'assistant-footer';
      f.style.padding = '18px';
      f.style.borderTop = '1px solid rgba(0,0,0,0.06)';
      f.style.marginTop = '24px';
      f.style.fontSize = '0.95rem';
      f.innerHTML = `© ${new Date().getFullYear()} Lockyz Media — Modernized by assistant`;
      document.body.appendChild(f);
    }
  }

  // init
  document.addEventListener('DOMContentLoaded', function(){
    try{
      createStyle();
      injectNavbarFooter();
      convertAnchorsToButtons();
      replaceVulnSentences();
      fixBrokenImages();
    }catch(e){ console.error('Assistant script error', e); }
  });
})();
