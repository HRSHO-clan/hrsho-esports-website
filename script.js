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
    contact_sponsor_label: 'Спонсорство',

    footer_sub:         'Профессиональная киберспортивная организация',

    role_igl:           'IGL',
    role_awp:           'AWP',
    role_rifler:        'Rifler',
    role_support:       'Support',
    role_entry:         'Entry Fragger',
    role_coach:         'Тренер',
    role_sub:           'Заменщик',

    modal_close:        'Закрыть',
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
    contact_sponsor_label: 'Sponsorship',

    footer_sub:         'Professional Esports Organization',

    role_igl:           'IGL',
    role_awp:           'AWP',
    role_rifler:        'Rifler',
    role_support:       'Support',
    role_entry:         'Entry Fragger',
    role_coach:         'Coach',
    role_sub:           'Substitute',

    modal_close:        'Close',
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
    contact_sponsor_label: 'Sponsorlus',

    footer_sub:         'Professionaalne espordi organisatsioon',

    role_igl:           'IGL',
    role_awp:           'AWP',
    role_rifler:        'Rifler',
    role_support:       'Support',
    role_entry:         'Entry Fragger',
    role_coach:         'Treener',
    role_sub:           'Asendaja',

    modal_close:        'Sulge',
  }
};

/* ============================================================
   2. PLAYERS DATA
   ============================================================ */
const players = [
  {
    nickname:    'YG0Nagato',
    role:        'igl',
    country:     'Estonia',
    countryFlag: '🇪🇪',
    age:         22,
    desc:        { 
      ru: 'Капитан команды. Мастер тактики и принятия решений под давлением. Обладает уникальным видением игры.',
      en: 'Team captain. Master of tactics and decision-making under pressure. Possesses unique game vision.',
      et: 'Meeskonna kapten. Taktika ja otsustamise meister surve all. Omab ainulaadset mänguvaadet.' 
    },
    avatar:      'images/avatar_yg0nagato.png',
    fullBio: {
      ru: 'YG0Nagato — лидер HRSHO, известный своей аналитической способностью и хладнокровием в критические моменты. Настоящий стратег на поле боя.',
      en: 'YG0Nagato is the leader of HRSHO, known for his analytical abilities and composure in critical moments. A true strategist on the battlefield.',
      et: 'YG0Nagato on HRSHO liider, kuulus oma analüütiliste võimete ja külmaverelisuse poolest kriitilistes hetkedel.'
    }
  },
  {
    nickname:    'ZympleOo',
    role:        'awp',
    country:     'Russia',
    countryFlag: '🇷🇺',
    age:         21,
    desc:        { 
      ru: 'Снайпер с исключительной точностью. Лучший AWP-игрок команды. Его выстрелы — это искусство.',
      en: 'Sniper with exceptional accuracy. The team\'s premier AWP player. His shots are art.',
      et: 'Snaiper erandliku täpsusega. Meeskonna parim AWP mängija. Tema laskud on kunst.' 
    },
    avatar:      'images/avatar_zympleoo.png',
    fullBio: {
      ru: 'ZympleOo — элита AWP-игроков. Его способность контролировать карту с помощью снайперской винтовки не имеет аналогов.',
      en: 'ZympleOo is the elite of AWP players. His ability to control the map with a sniper rifle is unparalleled.',
      et: 'ZympleOo on regiooni AWP-mängijate eelit. Tema võime kaardi kontrollimiseks snaiperrelva abil on võrratu.'
    }
  },
  {
    nickname:    'piuipp',
    role:        'entry',
    country:     'Latvia',
    countryFlag: '🇱🇻',
    age:         20,
    desc:        { 
      ru: 'Агрессивный вход на позиции. Создаёт пространство для команды. Его смелые ходы часто становятся переломными.',
      en: 'Aggressive entry player. Creates space and opportunities for the team. His bold moves are game-changers.',
      et: 'Agressiivne entry mängija. Loob ruumi ja võimalusi meeskonnale.' 
    },
    avatar:      'images/avatar_piuipp.png',
    fullBio: {
      ru: 'piuipp — молодой талант, который быстро зарекомендовал себя как один из лучших entry-фрагеров. Его энергия заражает всю команду.',
      en: 'piuipp is a young talent who quickly established himself as one of the best entry fraggers. His energy inspires the entire team.',
      et: 'piuipp on noor talent, kes kiiresti tõestas end ühe parimana entry-frageri rollis.'
    }
  },
  {
    nickname:    'OGdante',
    role:        'support',
    country:     'Estonia',
    countryFlag: '🇪🇪',
    age:         23,
    desc:        { 
      ru: 'Незаменимый саппорт. Обеспечивает команду гранатами и информацией. Его понимание игры на высшем уровне.',
      en: 'Indispensable support. Provides the team with utility and information. High-level game understanding.',
      et: 'Asendamatu support. Varustab meeskonda utiliidi ja infoga.' 
    },
    avatar:      'images/avatar_ogdante.png',
    fullBio: {
      ru: 'OGdante — опытный поддерживающий игрок с глубоким пониманием CS2. Его гранаты часто определяют исход раундов.',
      en: 'OGdante is an experienced support player with deep understanding of CS2. His utility usage often determines round outcomes.',
      et: 'OGdante on kogenud support-mängija sügava CS2 mõistmisega.'
    }
  },
  {
    nickname:    'Deeshka2',
    role:        'rifler',
    country:     'Lithuania',
    countryFlag: '🇱🇹',
    age:         21,
    desc:        { 
      ru: 'Универсальный рифлер. Высокий рейтинг и стабильная игра в любой ситуации. Надежная опора команды.',
      en: 'Versatile rifler. High rating and consistent performance in any situation. The team\'s backbone.',
      et: 'Mitmekülgne rifler. Kõrge reiting ja stabiilne mäng igas olukorras.' 
    },
    avatar:      'images/avatar_deeshka2.png',
    fullBio: {
      ru: 'Deeshka2 — универсальный боец, который может играть на любой позиции и адаптироваться к любому стилю.',
      en: 'Deeshka2 is a versatile fighter who can play any position and adapt to any team style.',
      et: 'Deeshka2 on mitmekülgne võitleja, kes saab mängida iga positsiooni.'
    }
  },
  {
    nickname:    'Sancho_ON',
    role:        'sub',
    country:     'Poland',
    countryFlag: '🇵🇱',
    age:         19,
    desc:        { 
      ru: 'Перспективный заменщик. Молодой талант с огромным потенциалом. Готов усилить команду в любой момент.',
      en: 'Promising substitute. Young talent with huge potential. Ready to strengthen the team at any moment.',
      et: 'Lubav asendaja. Noor talent tohutute võimalustega.' 
    },
    avatar:      'images/avatar_sancho_on.png',
    fullBio: {
      ru: 'Sancho_ON — молодой игрок, который активно развивается. Его потенциал огромен, и команда верит в его будущее.',
      en: 'Sancho_ON is a young player who is actively developing. His potential is huge, and the team believes in his future.',
      et: 'Sancho_ON on noor mängija, kes areneb aktiivselt.'
    }
  },
  {
    nickname:    'Pito Poncho',
    role:        'coach',
    country:     'Sweden',
    countryFlag: '🇸🇪',
    age:         28,
    desc:        { 
      ru: 'Главный стратег. Огромный опыт за плечами. Разрабатывает победные тактики и следит за дисциплиной.',
      en: 'Master strategist. Vast experience behind him. Develops winning tactics and maintains discipline.',
      et: 'Peamine strateeg. Suur kogemus selja taga. Arendab võidustrateegiaid.' 
    },
    avatar:      'images/avatar_pitoponcho.png',
    fullBio: {
      ru: 'Pito Poncho — мозг команды. Его тактические наработки и умение анализировать противника принесли HRSHO множество побед.',
      en: 'Pito Poncho is the brain of the team. His tactical developments and ability to analyze opponents have brought HRSHO many victories.',
      et: 'Pito Poncho on meeskonna aju. Tema taktikalised arendused on toonud HRSHO-le palju võite.'
    }
  }
];

/* ============================================================
   3. ACHIEVEMENTS DATA
   ============================================================ */
const achievements = [
  {
    title: { ru: 'Baltic Cup 2024', en: 'Baltic Cup 2024', et: 'Balti Karikas 2024' },
    place: '1st',
    icon:  '🏆'
  },
  {
    title: { ru: 'CS2 Open League', en: 'CS2 Open League', et: 'CS2 Avatud Liiga' },
    place: '2nd',
    icon:  '🥈'
  },
  {
    title: { ru: 'Winter Esports Cup', en: 'Winter Esports Cup', et: 'Talvine Espordi Karikas' },
    place: '3rd',
    icon:  '🥉'
  },
  {
    title: { ru: 'EE League Season 5', en: 'EE League Season 5', et: 'EE Liiga 5. hooaeg' },
    place: 'Winner',
    icon:  '💎'
  }
];

/* ============================================================
   4. SOCIAL LINKS
   ============================================================ */
const socialLinks = [
  { name: 'Discord', icon: 'fab fa-discord', url: 'https://discord.gg/MpYHgTeSxY' },
  { name: 'Steam', icon: 'fab fa-steam', url: 'https://steamcommunity.com/groups/hrsho' },
  { name: 'Twitch', icon: 'fab fa-twitch', url: 'https://twitch.tv/hrshoclan' },
  { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/@hrshoclan' },
  { name: 'TikTok', icon: 'fab fa-tiktok', url: 'https://tiktok.com/@hrshoclan' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/hrshoclan' },
  { name: 'Twitter', icon: 'fab fa-x-twitter', url: 'https://x.com/hrshoclan' }
];

/* ============================================================
   5. CONTACT INFO
   ============================================================ */
const contactInfo = {
  discord: 'MpYHgTeSxY',
  email:   'hrsho@tuta.io',
  sponsor: 'We are looking for a sponsor!'
};

/* ============================================================
   CORE LOGIC — DOM & RENDER
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const rosterGrid = document.getElementById('roster-grid');
  const achGrid = document.getElementById('achievements-grid');
  const socialGrid = document.getElementById('social-grid');
  const langBtns = document.querySelectorAll('.lang-btn');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  let currentLang = 'ru';

  // --- Initialize Roster ---
  function renderRoster() {
    rosterGrid.innerHTML = '';
    players.forEach((p, index) => {
      const card = document.createElement('div');
      card.className = 'player-card reveal';
      card.innerHTML = `
        <div class="player-avatar-wrap">
          <img src="${p.avatar || 'https://via.placeholder.com/300x400?text=HRSHO'}" alt="${p.nickname}" class="player-avatar">
          <div class="player-role-badge">${translations[currentLang]['role_' + p.role]}</div>
        </div>
        <div class="player-info">
          <h3 class="player-nickname">${p.nickname}</h3>
          <div class="player-meta">
            <span class="player-flag">${p.countryFlag}</span>
            <span class="player-age">${p.age} y.o.</span>
          </div>
          <p class="player-desc">${p.desc[currentLang]}</p>
        </div>
      `;
      card.addEventListener('click', () => openModal(index));
      rosterGrid.appendChild(card);
    });
  }

  // --- Initialize Achievements ---
  function renderAchievements() {
    achGrid.innerHTML = '';
    achievements.forEach(a => {
      const card = document.createElement('div');
      card.className = 'ach-card glass-card reveal';
      card.innerHTML = `
        <div class="ach-icon">${a.icon}</div>
        <h3 class="ach-place">${a.place}</h3>
        <p class="ach-title">${a.title[currentLang]}</p>
      `;
      achGrid.appendChild(card);
    });
  }

  // --- Initialize Socials ---
  function renderSocials() {
    socialGrid.innerHTML = '';
    socialLinks.forEach(s => {
      const link = document.createElement('a');
      link.href = s.url;
      link.target = '_blank';
      link.className = `social-btn social-${s.name.toLowerCase()} reveal`;
      link.innerHTML = `<i class="${s.icon}"></i> <span>${s.name}</span>`;
      socialGrid.appendChild(link);
    });
  }

  // --- Update Static Texts ---
  function updateTexts() {
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });

    // Update Contact Section specifically
    document.getElementById('contact-discord').textContent = contactInfo.discord;
    document.getElementById('contact-email').textContent = contactInfo.email;
    document.getElementById('contact-manager').textContent = contactInfo.sponsor;
    
    // Update "Founded" year in hero stats
    const foundedStat = document.querySelector('.hero-stat:last-child .stat-num');
    if (foundedStat) foundedStat.textContent = '2021';
  }

  // --- Language Switcher ---
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLang = btn.getAttribute('data-lang');
      
      renderRoster();
      renderAchievements();
      updateTexts();
    });
  });

  // --- Mobile Menu ---
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // --- Modal Logic ---
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'player-modal';
  modal.innerHTML = `
    <div class="modal-content glass-card">
      <button class="modal-close">&times;</button>
      <div class="modal-body">
        <div class="modal-img-wrap">
          <img src="" alt="" id="modal-img">
        </div>
        <div class="modal-info">
          <div class="modal-header">
            <h2 id="modal-nickname"></h2>
            <span id="modal-role-badge" class="player-role-badge"></span>
          </div>
          <div class="modal-meta">
            <span id="modal-flag"></span>
            <span id="modal-country"></span>
            <span class="modal-sep">|</span>
            <span id="modal-age"></span>
          </div>
          <div class="modal-bio">
            <p id="modal-bio-text"></p>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalImg = document.getElementById('modal-img');
  const modalNickname = document.getElementById('modal-nickname');
  const modalRole = document.getElementById('modal-role-badge');
  const modalFlag = document.getElementById('modal-flag');
  const modalCountry = document.getElementById('modal-country');
  const modalAge = document.getElementById('modal-age');
  const modalBio = document.getElementById('modal-bio-text');
  const closeBtn = modal.querySelector('.modal-close');

  function openModal(index) {
    const p = players[index];
    modalImg.src = p.avatar || 'https://via.placeholder.com/300x400?text=HRSHO';
    modalNickname.textContent = p.nickname;
    modalRole.textContent = translations[currentLang]['role_' + p.role];
    modalFlag.textContent = p.countryFlag;
    modalCountry.textContent = p.country;
    modalAge.textContent = `${p.age} years old`;
    modalBio.textContent = p.fullBio[currentLang];
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // --- Smooth Scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Reveal Animations ---
  const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', revealElements);

  // --- Canvas Particles ---
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.fillStyle = `rgba(255, 102, 0, ${this.alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }
  }
  initParticles();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();

  // Initial render
  renderRoster();
  renderAchievements();
  renderSocials();
  updateTexts();
  revealElements();
});
