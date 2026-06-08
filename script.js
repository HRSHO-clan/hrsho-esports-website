/* ============================================================
   HRSHO ESPORTS — script.js
   All data stored in separate objects/arrays for easy editing
   ============================================================ */

/* ============================================================
   1. TRANSLATIONS
   ============================================================ */
const translations = {
  ru: {
    nav_about:          'О команде',
    nav_roster:         'Состав',
    nav_achievements:   'Достижения',
    nav_social:         'Соцсети',
    nav_contact:        'Контакты',

    hero_subtitle:      'CS2 ESPORTS TEAM',
    hero_slogan:        'PLAY HARD. AIM BETTER.',
    hero_btn_about:     'О команде',
    hero_btn_roster:    'Наш состав',

    stat_players:       'Игроков',
    stat_trophies:      'Трофеев',
    stat_founded:       'Основана',

    scroll_down:        'SCROLL',

    about_tag:          '// О НАС',
    about_title:        'О КОМАНДЕ',
    about_text:         'HRSHO — киберспортивная команда по Counter-Strike 2, объединяющая игроков с высоким уровнем игры, дисциплиной и стремлением к победе. Мы не просто играем — мы доминируем на каждой карте, в каждом раунде.',

    feat1_title:        'Точность',
    feat1_desc:         'Каждый выстрел — результат многочасовых тренировок',
    feat2_title:        'Стратегия',
    feat2_desc:         'Тактическое превосходство на каждой карте',
    feat3_title:        'Командная работа',
    feat3_desc:         'Победа достигается только вместе',

    roster_tag:         '// СОСТАВ',
    roster_title:       'НАШ СОСТАВ',

    ach_tag:            '// ТРОФЕИ',
    ach_title:          'ДОСТИЖЕНИЯ',

    social_tag:         '// СЛЕДИ ЗА НАМИ',
    social_title:       'СОЦИАЛЬНЫЕ СЕТИ',

    contact_tag:        '// СВЯЗЬ',
    contact_title:      'КОНТАКТЫ',
    contact_discord_label: 'Discord',
    contact_email_label:   'Email',
    contact_manager_label: 'Менеджер',

    footer_sub:         'Профессиональная киберспортивная организация',

    role_igl:           'IGL',
    role_awp:           'AWP',
    role_rifler:        'Rifler',
    role_support:       'Support',
    role_entry:         'Entry Fragger',
  },

  en: {
    nav_about:          'About',
    nav_roster:         'Roster',
    nav_achievements:   'Achievements',
    nav_social:         'Social',
    nav_contact:        'Contact',

    hero_subtitle:      'CS2 ESPORTS TEAM',
    hero_slogan:        'PLAY HARD. AIM BETTER.',
    hero_btn_about:     'About Us',
    hero_btn_roster:    'Our Roster',

    stat_players:       'Players',
    stat_trophies:      'Trophies',
    stat_founded:       'Founded',

    scroll_down:        'SCROLL',

    about_tag:          '// ABOUT US',
    about_title:        'ABOUT THE TEAM',
    about_text:         'HRSHO is a professional Counter-Strike 2 esports team uniting players with exceptional skill, discipline, and an unrelenting drive to win. We don\'t just play — we dominate every map, every round.',

    feat1_title:        'Precision',
    feat1_desc:         'Every shot is the result of countless hours of training',
    feat2_title:        'Strategy',
    feat2_desc:         'Tactical superiority on every map',
    feat3_title:        'Teamwork',
    feat3_desc:         'Victory is only achieved together',

    roster_tag:         '// PLAYERS',
    roster_title:       'OUR ROSTER',

    ach_tag:            '// TROPHIES',
    ach_title:          'ACHIEVEMENTS',

    social_tag:         '// FOLLOW US',
    social_title:       'SOCIAL MEDIA',

    contact_tag:        '// REACH US',
    contact_title:      'CONTACT',
    contact_discord_label: 'Discord',
    contact_email_label:   'Email',
    contact_manager_label: 'Manager',

    footer_sub:         'Professional Esports Organization',

    role_igl:           'IGL',
    role_awp:           'AWP',
    role_rifler:        'Rifler',
    role_support:       'Support',
    role_entry:         'Entry Fragger',
  },

  et: {
    nav_about:          'Meeskonnast',
    nav_roster:         'Koosseis',
    nav_achievements:   'Saavutused',
    nav_social:         'Sotsiaalmeedia',
    nav_contact:        'Kontakt',

    hero_subtitle:      'CS2 ESPORDI MEESKOND',
    hero_slogan:        'MÄNGI KÕVASTI. SIHTI PAREMINI.',
    hero_btn_about:     'Meeskonnast',
    hero_btn_roster:    'Meie koosseis',

    stat_players:       'Mängijat',
    stat_trophies:      'Karikat',
    stat_founded:       'Asutatud',

    scroll_down:        'KERI',

    about_tag:          '// MEIST',
    about_title:        'MEESKONNAST',
    about_text:         'HRSHO on professionaalne Counter-Strike 2 espordi meeskond, mis ühendab kõrge tasemega mängijaid, kes on distsiplineeritud ja pühendunud võidule. Me ei mängi lihtsalt — me domineerime igal kaardil, igas voorus.',

    feat1_title:        'Täpsus',
    feat1_desc:         'Iga lask on tundide treenimise tulemus',
    feat2_title:        'Strateegia',
    feat2_desc:         'Taktikaline üleolek igal kaardil',
    feat3_title:        'Meeskonnatöö',
    feat3_desc:         'Võit saavutatakse ainult koos',

    roster_tag:         '// MÄNGIJAD',
    roster_title:       'MEIE KOOSSEIS',

    ach_tag:            '// KARIKAS',
    ach_title:          'SAAVUTUSED',

    social_tag:         '// JÄLGI MEID',
    social_title:       'SOTSIAALMEEDIA',

    contact_tag:        '// VÕTA ÜHENDUST',
    contact_title:      'KONTAKT',
    contact_discord_label: 'Discord',
    contact_email_label:   'E-post',
    contact_manager_label: 'Mänedžer',

    footer_sub:         'Professionaalne espordi organisatsioon',

    role_igl:           'IGL',
    role_awp:           'AWP',
    role_rifler:        'Rifler',
    role_support:       'Support',
    role_entry:         'Entry Fragger',
  }
};

/* ============================================================
   2. PLAYERS DATA
   ============================================================ */
const players = [
  {
    nickname:    'PHANTOM',
    role:        'igl',
    country:     'Estonia',
    countryFlag: '🇪🇪',
    age:         22,
    desc:        { ru: 'Капитан команды. Мастер тактики и принятия решений под давлением.', en: 'Team captain. Master of tactics and decision-making under pressure.', et: 'Meeskonna kapten. Taktika ja otsustamise meister surve all.' },
    avatar:      null
  },
  {
    nickname:    'VIPER',
    role:        'awp',
    country:     'Russia',
    countryFlag: '🇷🇺',
    age:         21,
    desc:        { ru: 'Снайпер с исключительной точностью. Лучший AWP-игрок команды.', en: 'Sniper with exceptional accuracy. The team\'s premier AWP player.', et: 'Snaiper erandliku täpsusega. Meeskonna parim AWP mängija.' },
    avatar:      null
  },
  {
    nickname:    'STORM',
    role:        'entry',
    country:     'Latvia',
    countryFlag: '🇱🇻',
    age:         20,
    desc:        { ru: 'Агрессивный вход на позиции. Создаёт пространство для команды.', en: 'Aggressive entry player. Creates space and opportunities for the team.', et: 'Agressiivne entry mängija. Loob ruumi ja võimalusi meeskonnale.' },
    avatar:      null
  },
  {
    nickname:    'GHOST',
    role:        'support',
    country:     'Estonia',
    countryFlag: '🇪🇪',
    age:         23,
    desc:        { ru: 'Незаменимый саппорт. Обеспечивает команду гранатами и информацией.', en: 'Indispensable support. Provides the team with utility and information.', et: 'Asendamatu support. Varustab meeskonda utiliidi ja infoga.' },
    avatar:      null
  },
  {
    nickname:    'BLADE',
    role:        'rifler',
    country:     'Lithuania',
    countryFlag: '🇱🇹',
    age:         21,
    desc:        { ru: 'Универсальный рифлер. Высокий рейтинг и стабильная игра в любой ситуации.', en: 'Versatile rifler. High rating and consistent performance in any situation.', et: 'Mitmekülgne rifler. Kõrge reiting ja stabiilne mäng igas olukorras.' },
    avatar:      null
  }
];

/* ============================================================
   3. ACHIEVEMENTS DATA
   ============================================================ */
const achievements = [
  {
    medal:      '🥇',
    place:      { ru: '1 место', en: '1st Place', et: '1. koht' },
    tournament: 'Baltic Cup 2025',
    year:       '2025'
  },
  {
    medal:      '🥈',
    place:      { ru: '2 место', en: '2nd Place', et: '2. koht' },
    tournament: 'CS2 Open League',
    year:       '2025'
  },
  {
    medal:      '🥉',
    place:      { ru: '3 место', en: '3rd Place', et: '3. koht' },
    tournament: 'Winter Esports Cup',
    year:       '2024'
  },
  {
    medal:      '🏆',
    place:      { ru: 'Финалист', en: 'Finalist', et: 'Finalist' },
    tournament: 'Eastern European League',
    year:       '2024'
  },
  {
    medal:      '⚡',
    place:      { ru: 'MVP', en: 'MVP Award', et: 'MVP auhind' },
    tournament: 'Baltic Clash 2025',
    year:       '2025'
  }
];

/* ============================================================
   4. SOCIAL LINKS
   ============================================================ */
const socialLinks = [
  {
    name:  'Discord',
    icon:  'fab fa-discord',
    url:   'https://discord.gg/hrsho',
    color: '#5865F2'
  },
  {
    name:  'Steam',
    icon:  'fab fa-steam',
    url:   'https://steamcommunity.com/groups/hrsho',
    color: '#1b2838'
  },
  {
    name:  'Twitch',
    icon:  'fab fa-twitch',
    url:   'https://twitch.tv/hrsho',
    color: '#9146FF'
  },
  {
    name:  'YouTube',
    icon:  'fab fa-youtube',
    url:   'https://youtube.com/@hrsho',
    color: '#FF0000'
  },
  {
    name:  'TikTok',
    icon:  'fab fa-tiktok',
    url:   'https://tiktok.com/@hrsho',
    color: '#010101'
  },
  {
    name:  'Instagram',
    icon:  'fab fa-instagram',
    url:   'https://instagram.com/hrsho',
    color: '#E1306C'
  },
  {
    name:  'X / Twitter',
    icon:  'fab fa-x-twitter',
    url:   'https://x.com/hrsho',
    color: '#1DA1F2'
  }
];

/* ============================================================
   5. CONTACT INFO
   ============================================================ */
const contactInfo = {
  discord:  'discord.gg/hrsho',
  email:    'manager@hrsho.gg',
  manager:  'contact@hrshoclan.com'
};

/* ============================================================
   6. LANGUAGE SWITCHER
   ============================================================ */
let currentLang = 'ru';

function applyTranslations(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  // Update all elements with data-key
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Re-render dynamic content with new language
  renderRoster(lang);
  renderAchievements(lang);

  // Update html lang attribute
  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    applyTranslations(lang);
  });
});

/* ============================================================
   7. RENDER ROSTER
   ============================================================ */
function getRoleKey(role) {
  const map = { igl: 'role_igl', awp: 'role_awp', rifler: 'role_rifler', support: 'role_support', entry: 'role_entry' };
  return map[role] || role;
}

function renderRoster(lang) {
  const grid = document.getElementById('roster-grid');
  if (!grid) return;
  const t = translations[lang];

  grid.innerHTML = players.map((p, i) => {
    const roleLabel = t[getRoleKey(p.role)] || p.role.toUpperCase();
    const desc = typeof p.desc === 'object' ? (p.desc[lang] || p.desc.en) : p.desc;
    const avatarHtml = p.avatar
      ? `<img src="${p.avatar}" alt="${p.nickname}" class="player-avatar" loading="lazy" />`
      : `<div class="player-avatar-placeholder"><i class="fas fa-user"></i></div>`;

    return `
      <div class="player-card reveal" style="transition-delay: ${i * 0.1}s">
        <div class="player-avatar-wrap">
          ${avatarHtml}
          <div class="player-role-badge">${roleLabel}</div>
        </div>
        <div class="player-info">
          <h3 class="player-nickname">${p.nickname}</h3>
          <div class="player-meta">
            <span class="player-country"><i class="fas fa-globe"></i> ${p.countryFlag} ${p.country}</span>
            <span class="player-age"><i class="fas fa-calendar"></i> ${p.age}</span>
          </div>
          <p class="player-desc">${desc}</p>
        </div>
      </div>
    `;
  }).join('');

  // Re-observe new elements
  observeReveal();
}

/* ============================================================
   8. RENDER ACHIEVEMENTS
   ============================================================ */
function renderAchievements(lang) {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;

  grid.innerHTML = achievements.map((a, i) => {
    const place = typeof a.place === 'object' ? (a.place[lang] || a.place.en) : a.place;
    return `
      <div class="achievement-card reveal" style="transition-delay: ${i * 0.1}s">
        <div class="ach-corner"></div>
        <span class="ach-medal">${a.medal}</span>
        <p class="ach-place">${place}</p>
        <h3 class="ach-tournament">${a.tournament}</h3>
        <p class="ach-year">${a.year}</p>
      </div>
    `;
  }).join('');

  observeReveal();
}

/* ============================================================
   9. RENDER SOCIAL LINKS
   ============================================================ */
function renderSocial() {
  const grid = document.getElementById('social-grid');
  if (!grid) return;

  grid.innerHTML = socialLinks.map((s, i) => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer"
       class="social-btn reveal"
       style="--social-color: ${s.color}; transition-delay: ${i * 0.07}s">
      <i class="${s.icon}"></i>
      <span>${s.name}</span>
    </a>
  `).join('');

  observeReveal();
}

/* ============================================================
   10. CONTACT INFO
   ============================================================ */
function renderContact() {
  const discord = document.getElementById('contact-discord');
  const email   = document.getElementById('contact-email');
  const manager = document.getElementById('contact-manager');
  if (discord) discord.textContent = contactInfo.discord;
  if (email)   email.textContent   = contactInfo.email;
  if (manager) manager.textContent = contactInfo.manager;
}

/* ============================================================
   11. NAVBAR SCROLL
   ============================================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* ============================================================
   12. HAMBURGER MENU
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ============================================================
   13. INTERSECTION OBSERVER — REVEAL ANIMATIONS
   ============================================================ */
function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}

/* ============================================================
   14. PARTICLE CANVAS
   ============================================================ */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [], lines = [];
  const PARTICLE_COUNT = 80;
  const LINE_COUNT = 12;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = -(Math.random() * 0.5 + 0.2);
      this.size   = Math.random() * 2 + 0.5;
      this.alpha  = Math.random() * 0.6 + 0.1;
      this.life   = 0;
      this.maxLife = Math.random() * 300 + 200;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life++;
      if (this.life > this.maxLife || this.y < -10) this.reset(false);
    }
    draw() {
      const progress = this.life / this.maxLife;
      const a = this.alpha * (progress < 0.1 ? progress / 0.1 : progress > 0.9 ? (1 - progress) / 0.1 : 1);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 106, 0, ${a})`;
      ctx.fill();
    }
  }

  class GlowLine {
    constructor() { this.reset(); }
    reset() {
      this.x     = Math.random() * W;
      this.y     = Math.random() * H;
      this.angle = Math.random() * Math.PI * 2;
      this.speed = Math.random() * 0.5 + 0.2;
      this.len   = Math.random() * 120 + 60;
      this.alpha = Math.random() * 0.15 + 0.05;
      this.life  = 0;
      this.maxLife = Math.random() * 200 + 100;
    }
    update() {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      this.life++;
      if (this.life > this.maxLife || this.x < -200 || this.x > W + 200 || this.y < -200 || this.y > H + 200) this.reset();
    }
    draw() {
      const progress = this.life / this.maxLife;
      const a = this.alpha * (progress < 0.1 ? progress / 0.1 : progress > 0.9 ? (1 - progress) / 0.1 : 1);
      const ex = this.x + Math.cos(this.angle) * this.len;
      const ey = this.y + Math.sin(this.angle) * this.len;
      const grad = ctx.createLinearGradient(this.x, this.y, ex, ey);
      grad.addColorStop(0, `rgba(255,106,0,0)`);
      grad.addColorStop(0.5, `rgba(255,106,0,${a})`);
      grad.addColorStop(1, `rgba(255,106,0,0)`);
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    lines     = Array.from({ length: LINE_COUNT },     () => new GlowLine());
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    lines.forEach(l => { l.update(); l.draw(); });
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => { resize(); }, { passive: true });
  init();
  animate();
})();

/* ============================================================
   15. PARALLAX HERO
   ============================================================ */
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const scrolled = window.scrollY;
  const heroHeight = hero.offsetHeight;
  if (scrolled < heroHeight) {
    const parallaxFactor = scrolled * 0.4;
    const heroContent = hero.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.transform = `translateY(${parallaxFactor}px)`;
      heroContent.style.opacity = 1 - (scrolled / heroHeight) * 1.5;
    }
  }
}, { passive: true });

/* ============================================================
   16. SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ============================================================
   17. ACTIVE NAV LINK ON SCROLL
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active-link', scrollPos >= top && scrollPos < bottom);
    }
  });
}, { passive: true });

/* ============================================================
   18. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderRoster(currentLang);
  renderAchievements(currentLang);
  renderSocial();
  renderContact();
  applyTranslations(currentLang);
  observeReveal();

  // Add reveal classes to static elements
  document.querySelectorAll('.about-feature, .contact-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.12}s`;
  });
  document.querySelector('.about-text-block')?.classList.add('reveal-left');
  document.querySelector('.about-visual')?.classList.add('reveal-right');

  observeReveal();
});
