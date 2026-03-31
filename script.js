const i18n = {
  en: {
    "nav.home":"Home","nav.about":"About","nav.exp":"Experience","nav.proj":"Projects","nav.blog":"Blog","nav.contact":"Contact",
    "home.subtitle":"Front Office Financial Analyst | Investment Research"
  },
  zh: {
    "nav.home":"首页","nav.about":"关于我","nav.exp":"经历","nav.proj":"项目","nav.blog":"博客","nav.contact":"联系",
    "home.subtitle":"金融前台分析师｜投资研究"
  },
  tw: {
    "nav.home":"首頁","nav.about":"關於我","nav.exp":"經歷","nav.proj":"項目","nav.blog":"部落格","nav.contact":"聯繫",
    "home.subtitle":"金融前台分析師｜投資研究"
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.innerText = i18n[currentLang][el.dataset.i18n];
  });
  const t = document.getElementById('name-text');
  if(t) t.innerText = currentLang==='en' ? 'Zheying Liu' : currentLang==='zh' ? '刘哲瑛' : '劉哲瑛';
}

function setLang(l) {
  currentLang = l;
  localStorage.setItem('lang',l);
  applyLang();
}

// 时间
function updateTime() {
  const d = new Date();
  const s = `${String(d.getHours()).padStart(2,0)}:${String(d.getMinutes()).padStart(2,0)}:${String(d.getSeconds()).padStart(2,0)}`;
  const e = document.getElementById('real-time');
  if(e) e.innerHTML = `<i class="fa-solid fa-clock"></i> ${s}`;
}
setInterval(updateTime,1000);
updateTime();

// 音乐
const bgm = document.getElementById('bgm');
const btn = document.getElementById('musicToggle');
let playing = false;
btn.onclick = ()=>{
  if(playing){
    bgm.pause();
    btn.innerHTML = '<i class="fa-solid fa-music"></i>';
  } else {
    bgm.play().catch(()=>{});
    btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }
  playing = !playing;
};

// 代码雨
const canvas = document.getElementById('codeRain');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const drops = Array(Math.floor(canvas.width / 20)).fill(1);

  function rain() {
    ctx.fillStyle = 'rgba(12, 74, 49, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#1effaa';
    ctx.font = '18px monospace';
    drops.forEach((y, i) => {
      ctx.fillText(String.fromCharCode(0x30A0 + Math.random()*96), i*20, y);
      drops[i] = y > canvas.height*Math.random() ? 0 : y+22;
    });
  }
  setInterval(rain, 40);
}

applyLang();
