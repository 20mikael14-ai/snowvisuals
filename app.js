// ==================== НАСТРОЙКИ ====================
// Впиши сюда свой ник на GitHub и название репозитория.
// Версия, размер, ссылка "Скачать" и счетчик скачиваний берутся из GitHub Releases сами.
const GITHUB_USER = "20mikael14-ai";
const GITHUB_REPO = "snowvisuals";

// Если GitHub недоступен, показываем это:
const FALLBACK = {
  version: "v1.6.1",
  url: `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/releases/latest`,
};

// ==================== ФУНКЦИИ МОДА ====================
const FEATURES = {
  "PvP": [
    ["Zoom", "Приближает камеру, пока зажата кнопка зума. Колесико меняет силу."],
    ["Custom Enchantment", "Меняет цвет блеска всех зачарованных предметов."],
    ["HitColor", "Меняет цвет подсветки сущностей при ударе."],
    ["HitParticles", "Частицы при каждом твоем ударе: криты, магия, сердечки, снежинки."],
    ["HitSound", "Проигрывает звук, когда ты бьешь."],
    ["KillEffect", "Молния или взрыв частиц, когда ты убиваешь цель."],
    ["NoHurtCam", "Убирает или ослабляет тряску камеры от урона."],
    ["LowFire", "Опускает или скрывает огонь на экране."],
    ["ViewModel", "Положение и размер предметов в руках."],
    ["SwingSpeed", "Скорость анимации взмаха рукой."],
    ["Crosshair", "Свой прицел: стиль, размер, цвет, индикатор удара."],
    ["TotemAnimation", "Размер анимации тотема на экране."],
    ["ToggleSprint", "Всегда бежать, не зажимая Ctrl."],
    ["AspectRatio", "Растянутое разрешение, как у PvP-игроков."],
  ],
  "Визуалы": [
    ["Fullbright", "Все видно даже в темноте, без факелов."],
    ["BlockOutline", "Цвет обводки блока под прицелом."],
    ["ItemScale", "Размер выброшенных на землю предметов."],
    ["Trails", "След из частиц за тобой при движении."],
    ["ArrowTrails", "След за летящими стрелами, жемчугами и снежками."],
    ["ChinaHat", "Конусная шляпа над головой в F5."],
    ["JumpCircles", "Круг на земле, когда ты прыгаешь."],
    ["SelfNametag", "Твой ник над головой в F5."],
    ["NoVignette", "Убирает затемнение по краям экрана."],
    ["NoBossBar", "Скрывает полоски здоровья боссов."],
    ["NoScoreboard", "Скрывает таблицу счета справа."],
    ["NoContainerBG", "Убирает темный фон за инвентарем и сундуками."],
  ],
  "Мир": [
    ["TimeChanger", "Меняет время суток только у тебя."],
    ["Weather", "Своя погода: ясно, дождь, гроза или снег."],
    ["SnowField", "Снежинки всегда падают вокруг тебя."],
    ["CustomFog", "Дальность и цвет тумана."],
    ["SkyColor", "Красит небо в выбранный цвет."],
  ],
  "HUD": [
    ["Watermark", "Снежинка, FPS, пинг и сервер в одной строке."],
    ["TargetInfo", "Имя и здоровье игрока или моба под прицелом."],
    ["Keystrokes", "Нажатые WASD, кнопки мыши и пробел."],
    ["ArmorHUD", "Броня и ее прочность."],
    ["PotionHUD", "Активные эффекты и их время."],
    ["TotemCounter", "Сколько тотемов в инвентаре."],
    ["ComboCounter", "Сколько ударов подряд ты нанес."],
    ["ReachDisplay", "Дистанция твоего последнего удара."],
    ["FPS · Ping · CPS", "Кадры, пинг и клики в секунду."],
    ["Coordinates", "Координаты, можно с пересчетом для Незера."],
    ["Speed · Direction", "Скорость в блоках в секунду и сторона света."],
    ["Clock · SessionTime", "Реальное время и сколько ты в игре."],
    ["ServerIP · Memory", "Адрес сервера и занятая память."],
    ["Biome · Saturation", "Текущий биом, голод и насыщение."],
  ],
  "Утилиты": [
    ["ChatTimestamps", "Время перед каждым сообщением в чате."],
    ["TabPing", "Пинг цифрами в списке игроков."],
    ["BackgroundFPS", "Меньше FPS, когда игра свернута."],
    ["Снежинка у ника", "Видно, у кого из игроков тоже стоит Snow Visuals."],
    ["Discord-статус", "«Играет в Snow Visuals» в твоем Discord."],
    ["Главное меню", "Снег, новые кнопки и экраны загрузки в стиле мода."],
    ["Встроенный Sodium", "Высокий FPS без отдельной установки."],
  ],
};

// ==================== Вкладки функций ====================
(function renderFeatures() {
  const tabs = document.getElementById("tabs");
  const grid = document.getElementById("feature-grid");
  const names = Object.keys(FEATURES);
  let total = 0;
  names.forEach((n) => (total += FEATURES[n].length));
  document.querySelectorAll(".js-features").forEach((el) => (el.textContent = total + "+"));

  function show(name) {
    tabs.querySelectorAll(".tab").forEach((t) => {
      const on = t.dataset.name === name;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on);
    });
    grid.innerHTML = "";
    FEATURES[name].forEach(([title, desc], i) => {
      const card = document.createElement("article");
      card.className = "feature";
      card.style.animationDelay = i * 25 + "ms";
      card.innerHTML = `<h4></h4><p></p>`;
      card.querySelector("h4").textContent = title;
      card.querySelector("p").textContent = desc;
      grid.appendChild(card);
    });
  }

  names.forEach((name) => {
    const b = document.createElement("button");
    b.className = "tab";
    b.type = "button";
    b.role = "tab";
    b.dataset.name = name;
    b.innerHTML = `${name}<small>${FEATURES[name].length}</small>`;
    b.addEventListener("click", () => show(name));
    tabs.appendChild(b);
  });
  show(names[0]);
})();

// ==================== Версия и счетчик скачиваний ====================
function formatSize(bytes) {
  return (bytes / 1048576).toFixed(1).replace(".", ",") + " МБ";
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
}

function countUp(el, target) {
  const start = performance.now();
  const dur = 1200;
  function step(now) {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * eased).toLocaleString("ru-RU");
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function applyRelease(info) {
  document.querySelectorAll(".js-version").forEach((el) => (el.textContent = info.version));
  document.querySelectorAll(".js-download").forEach((a) => {
    if (a.getAttribute("href") === "#download") return; // ссылка в меню просто листает к кнопке
    a.href = info.url;
  });
  if (info.size) document.querySelectorAll(".js-size").forEach((el) => (el.textContent = formatSize(info.size)));
  if (info.date) document.querySelectorAll(".js-date").forEach((el) => (el.textContent = "от " + formatDate(info.date)));
  if (typeof info.downloads === "number") {
    document.querySelectorAll(".js-downloads").forEach((el) => countUp(el, info.downloads));
  }
}

async function loadRelease() {
  applyRelease(FALLBACK);
  if (GITHUB_USER === "YOUR_GITHUB_NAME") return; // ник еще не вписан

  // Кэш на 10 минут: у GitHub лимит 60 запросов в час на одного посетителя
  const cacheKey = `sv-release-${GITHUB_USER}/${GITHUB_REPO}`;
  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
    if (cached && Date.now() - cached.time < 10 * 60 * 1000) {
      applyRelease(cached.info);
      return;
    }
  } catch (e) { /* localStorage может быть недоступен */ }

  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/releases?per_page=100`);
    if (!res.ok) throw new Error(res.status);
    const releases = await res.json();

    // Счетчик: сумма скачиваний .jar файлов во всех версиях
    let downloads = 0;
    releases.forEach((r) => r.assets.forEach((a) => {
      if (a.name.endsWith(".jar")) downloads += a.download_count;
    }));

    const latest = releases.find((r) => !r.draft && !r.prerelease);
    const jar = latest && latest.assets.find((a) => a.name.endsWith(".jar"));
    const info = {
      version: latest ? latest.tag_name : FALLBACK.version,
      url: jar ? jar.browser_download_url : FALLBACK.url,
      size: jar ? jar.size : null,
      date: latest ? latest.published_at : null,
      downloads,
    };
    applyRelease(info);
    try { localStorage.setItem(cacheKey, JSON.stringify({ time: Date.now(), info })); } catch (e) { /* ничего */ }
  } catch (e) {
    console.warn("GitHub недоступен, показываю запасные данные", e);
  }
}
loadRelease();

// ==================== Галерея ====================
(function lightbox() {
  const box = document.getElementById("lightbox");
  const big = box.querySelector("img");
  document.querySelectorAll(".gallery img, .show img, .hero-shot img").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      big.src = img.src;
      big.alt = img.alt;
      box.hidden = false;
    });
  });
  box.addEventListener("click", () => (box.hidden = true));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") box.hidden = true; });
})();

// ==================== Падающий снег ====================
(function snow() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.getElementById("snow");
  const ctx = canvas.getContext("2d");
  let w, h, flakes = [];

  function resize() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(160, (w * h) / 11000));
    flakes = Array.from({ length: count }, () => newFlake(true));
  }

  function newFlake(anywhere) {
    const size = Math.random() < 0.6 ? 2 : Math.random() < 0.85 ? 3 : 5;
    return {
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : -10,
      size,
      speed: 18 + size * 10 + Math.random() * 14,
      drift: 6 + Math.random() * 14,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.25 + size * 0.1,
    };
  }

  // Крупные снежинки рисуем пиксельным крестиком, как в моде
  function drawFlake(f, x) {
    ctx.fillStyle = `rgba(255,255,255,${f.alpha})`;
    if (f.size < 5) {
      ctx.fillRect(x, f.y, f.size, f.size);
      return;
    }
    const p = 1.5;
    ctx.fillRect(x - p * 3, f.y, p * 7, p);
    ctx.fillRect(x, f.y - p * 3, p, p * 7);
    ctx.fillRect(x - p * 2, f.y - p * 2, p, p);
    ctx.fillRect(x + p * 2, f.y - p * 2, p, p);
    ctx.fillRect(x - p * 2, f.y + p * 2, p, p);
    ctx.fillRect(x + p * 2, f.y + p * 2, p, p);
  }

  let last = performance.now();
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    ctx.clearRect(0, 0, w, h);
    const t = now / 1000;
    for (let i = 0; i < flakes.length; i++) {
      const f = flakes[i];
      f.y += f.speed * dt;
      if (f.y > h + 10) flakes[i] = newFlake(false);
      drawFlake(f, f.x + Math.sin(t * 0.8 + f.phase) * f.drift);
    }
    requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(frame);
})();
