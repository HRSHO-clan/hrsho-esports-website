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
    contact_manager_label: 'Manager',

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
    contact_manager_label: 'Mänedžer',

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
   2. PLAYERS DATA (EXPANDED WITH COACH & SUB)
   ============================================================ */
const players = [
  {
    nickname:    'PHANTOM',
    role:        'igl',
    country:     'Estonia',
    countryFlag: '🇪🇪',
    age:         22,
    desc:        { 
      ru: 'Капитан команды. Мастер тактики и принятия решений под давлением. Обладает уникальным видением игры и способностью адаптироваться к любому противнику.',
      en: 'Team captain. Master of tactics and decision-making under pressure. Possesses unique game vision and adaptability against any opponent.',
      et: 'Meeskonna kapten. Taktika ja otsustamise meister surve all. Omab ainulaadset mänguvaadet ja võimet kohaneda iga vastasega.' 
    },
    avatar:      null,
    fullBio: {
      ru: 'PHANTOM — лидер HRSHO, известный своей аналитической способностью и хладнокровием в критические моменты. За три года профессиональной карьеры завоевал множество трофеев и признание в киберспортивном сообществе.',
      en: 'PHANTOM is the leader of HRSHO, known for his analytical abilities and composure in critical moments. Over three years of professional career, he has won numerous trophies and recognition in the esports community.',
      et: 'PHANTOM on HRSHO liider, kuulus oma analüütiliste võimete ja külmaverelisuse poolest kriitilistes hetkedel. Kolme aasta jooksul professionaalsel karjääril on ta võitnud arvukaid trofeeasi ja tunnustust espordi kogukonnast.'
    }
  },
  {
    nickname:    'VIPER',
    role:        'awp',
    country:     'Russia',
    countryFlag: '🇷🇺',
    age:         21,
    desc:        { 
      ru: 'Снайпер с исключительной точностью. Лучший AWP-игрок команды. Его выстрелы — это искусство, каждый раунд он показывает класс.',
      en: 'Sniper with exceptional accuracy. The team\'s premier AWP player. His shots are art, every round he demonstrates class.',
      et: 'Snaiper erandliku täpsusega. Meeskonna parim AWP mängija. Tema laskud on kunst, iga vooru ta näitab klassi.' 
    },
    avatar:      null,
    fullBio: {
      ru: 'VIPER — элита AWP-игроков региона. Его способность контролировать карту с помощью снайперской винтовки не имеет аналогов. Постоянно входит в топ лучших игроков по убийствам.',
      en: 'VIPER is the elite of AWP players in the region. His ability to control the map with a sniper rifle is unparalleled. Consistently ranks among the top players by kills.',
      et: 'VIPER on regiooni AWP-mängijate eelit. Tema võime kaardi kontrollimiseks snaiperrelva abil on võrratu. Järjekindlalt paremate mängijate hulgas tappude arvu järgi.'
    }
  },
  {
    nickname:    'STORM',
    role:        'entry',
    country:     'Latvia',
    countryFlag: '🇱🇻',
    age:         20,
    desc:        { 
      ru: 'Агрессивный вход на позиции. Создаёт пространство для команды. Его смелые ходы часто становятся переломными в раундах.',
      en: 'Aggressive entry player. Creates space and opportunities for the team. His bold moves often become turning points in rounds.',
      et: 'Agressiivne entry mängija. Loob ruumi ja võimalusi meeskonnale. Tema julgeid käike muutuvad sageli vooru pöördepunktideks.' 
    },
    avatar:      null,
    fullBio: {
      ru: 'STORM — молодой талант, который быстро зарекомендовал себя как один из лучших entry-фрагеров в регионе. Его энергия и агрессия заражают всю команду.',
      en: 'STORM is a young talent who quickly established himself as one of the best entry fraggers in the region. His energy and aggression inspire the entire team.',
      et: 'STORM on noor talent, kes kiiresti tõestas end ühe parimana entry-frageri rollis regioonis. Tema energia ja agressiivsus nakatavad kogu meeskonda.'
    }
  },
  {
    nickname:    'GHOST',
    role:        'support',
    country:     'Estonia',
    countryFlag: '🇪🇪',
    age:         23,
    desc:        { 
      ru: 'Незаменимый саппорт. Обеспечивает команду гранатами и информацией. Его игровое понимание позволяет команде играть как один организм.',
      en: 'Indispensable support. Provides the team with utility and information. His game understanding allows the team to play as one organism.',
      et: 'Asendamatu support. Varustab meeskonda utiliidi ja infoga. Tema mängumõistmine võimaldab meeskonnal mängida kui üks organism.' 
    },
    avatar:      null,
    fullBio: {
      ru: 'GHOST — опытный поддерживающий игрок с глубоким пониманием CS2. Его гранаты и позиционирование часто определяют исход раундов. Настоящий профессионал своего дела.',
      en: 'GHOST is an experienced support player with deep understanding of CS2. His utility usage and positioning often determine round outcomes. A true professional.',
      et: 'GHOST on kogenud support-mängija sügava CS2 mõistmisega. Tema utiliidi kasutamine ja positsioneerimine määravad sageli vooru tulemuse. Tõeline professionaal.'
    }
  },
  {
    nickname:    'BLADE',
    role:        'rifler',
    country:     'Lithuania',
    countryFlag: '🇱🇹',
    age:         21,
    desc:        { 
      ru: 'Универсальный рифлер. Высокий рейтинг и стабильная игра в любой ситуации. Можно положиться на него в любой момент.',
      en: 'Versatile rifler. High rating and consistent performance in any situation. You can rely on him at any moment.',
      et: 'Mitmekülgne rifler. Kõrge reiting ja stabiilne mäng igas olukorras. Saad temale loota igal ajal.' 
    },
    avatar:      null,
    fullBio: {
      ru: 'BLADE — универсальный боец, который может играть на любой позиции и адаптироваться к любому стилю команды. Его консистентность делает его ценным членом состава.',
      en: 'BLADE is a versatile fighter who can play any position and adapt to any team style. His consistency makes him a valuable member of the roster.',
      et: 'BLADE on mitmekülgne võitleja, kes saab mängida iga positsiooni ja kohaneda iga meeskonna stiilile. Tema järjepidevus teeb temast väärtuslikku meeskonna liiget.'
    }
  },
  {
    nickname:    'NEXUS',
    role:        'sub',
    country:     'Poland',
    countryFlag: '🇵🇱',
    age:         19,
    desc:        { 
      ru: 'Перспективный заменщик. Молодой талант с огромным потенциалом. Готов в любой момент заменить основной состав.',
      en: 'Promising substitute. Young talent with huge potential. Ready to replace the main roster at any moment.',
      et: 'Lubav asendaja. Noor talent tohutute võimalustega. Valmis igal ajal asendama põhikoosseisu.' 
    },
    avatar:      null,
    fullBio: {
      ru: 'NEXUS — молодой игрок, который активно развивается и готовится к профессиональной карьере. Его потенциал огромен, и команда верит в его будущее. Постоянно тренируется и улучшает свои навыки.',
      en: 'NEXUS is a young player who is actively developing and preparing for a professional career. His potential is huge, and the team believes in his future. Constantly trains and improves his skills.',
      et: 'NEXUS on noor mängija, kes aktiivselt areneb ja valmistub professionaalse karjääri jaoks. Tema potentsiaal on tohutu ja meeskond usub tema tulevikku. Pidevalt treenib ja parandab oma oskusi.'
    }
  },
  {
    nickname:    'COACH ALEX',
    role:        'coach',
    country:     'Sweden',
    countryFlag: '🇸🇪',
    age:         28,
    desc:        { 
      ru: 'Главный тренер команды. Стратег с 10-летним опытом в киберспорте. Его тактики и подготовка определяют успех HRSHO.',
      en: 'Head coach of the team. Strategist with 10 years of esports experience. His tactics and preparation determine HRSHO\'s success.',
      et: 'Meeskonna peatreener. Strateegia 10 aasta espordi kogemusega. Tema taktika ja ettevalmistus määravad HRSHO edu.' 
    },
    avatar:      null,
    fullBio: {
      ru: 'COACH ALEX — опытный тренер, который привел множество команд к вершинам киберспорта. Его аналитические способности и понимание игры помогают HRSHO постоянно совершенствоваться. Работает над тактикой, физической подготовкой и психологической устойчивостью игроков.',
      en: 'COACH ALEX is an experienced coach who has led many teams to the heights of esports. His analytical abilities and game understanding help HRSHO constantly improve. Works on tactics, physical fitness and psychological resilience of players.',
      et: 'COACH ALEX on kogenud treener, kes on viinud paljusid meeskondi espordi tippu. Tema analüütilised võimed ja mängumõistmine aitavad HRSHO pidevalt parandada. Töötab taktika, füüsilise vormi ja mängijate psühholoogilise vastupidavuse kallal.'
    }
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
   7. PLAYER MODAL SYSTEM
   ============================================================ */
function openPlayerModal(playerIndex) {
  const player = players[playerIndex];
  if (!player) return;

  const t = translations[currentLang];
  const roleLabel = t[getRoleKey(player.role)] || player.role.toUpperCase();
  const desc = typeof player.desc === 'object' ? (player.desc[currentLang] || player.desc.en) : player.desc;
  const fullBio = typeof player.fullBio === 'object' ? (player.fullBio[currentLang] || player.fullBio.en) : player.fullBio;

  const modal = document.createElement('div');
  modal.className = 'player-modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close" aria-label="Close">&times;</button>
      <div class="modal-header">
        <div class="modal-avatar-wrap">
          ${player.avatar 
            ? `<img src="${player.avatar}" alt="${player.nickname}" class="modal-avatar" />` 
            : `<div class="modal-avatar-placeholder"><i class="fas fa-user"></i></div>`}
        </div>
        <div class="modal-header-info">
          <h2 class="modal-nickname">${player.nickname}</h2>
          <div class="modal-role">${roleLabel}</div>
          <div class="modal-meta">
            <span>${player.countryFlag} ${player.country}</span>
            <span>Age: ${player.age}</span>
          </div>
        </div>
      </div>
      <div class="modal-body">
        <div class="modal-section">
          <h3>О игроке</h3>
          <p>${desc}</p>
        </div>
        <div class="modal-section">
          <h3>Полная биография</h3>
          <p>${fullBio}</p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.classList.add('active');

  // Close on overlay click
  modal.querySelector('.modal-overlay').addEventListener('click', () => closePlayerModal(modal));
  modal.querySelector('.modal-close').addEventListener('click', () => closePlayerModal(modal));

  // Close on Escape
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closePlayerModal(modal);
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);
}

function closePlayerModal(modal) {
  modal.classList.remove('active');
  setTimeout(() => modal.remove(), 300);
}

/* ============================================================
   8. RENDER ROSTER
   ============================================================ */
function getRoleKey(role) {
  const map = { igl: 'role_igl', awp: 'role_awp', rifler: 'role_rifler', support: 'role_support', entry: 'role_entry', coach: 'role_coach', sub: 'role_sub' };
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
      <div class="player-card reveal clickable" style="transition-delay: ${i * 0.1}s" role="button" tabindex="0" data-player-index="${i}">
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

  // Add click listeners to player cards
  document.querySelectorAll('.player-card.clickable').forEach(card => {
    card.addEventListener('click', function() {
      const index = this.getAttribute('data-player-index');
      openPlayerModal(parseInt(index));
    });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const index = this.getAttribute('data-player-index');
        openPlayerModal(parseInt(index));
      }
    });
  });

  // Re-observe new elements
  observeReveal();
}

/* ============================================================
   9. RENDER ACHIEVEMENTS
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
   10. RENDER SOCIAL LINKS
   ============================================================ */
function renderSocial() {
  const grid = document.getElementById('social-grid');
  if (!grid) return;

  grid.innerHTML = socialLinks.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-btn" style="--social-color: ${link.color}">
      <i class="${link.icon}"></i>
      <span>${link.name}</span>
    </a>
  `).join('');
}

/* ============================================================
   11. RENDER CONTACT
   ============================================================ */
function renderContact() {
  // Contact is static in HTML, no need to render
}

/* ============================================================
   12. SCROLL ANIMATIONS (REVEAL ON SCROLL)
   ============================================================ */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function observeReveal() {
  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => observer.observe(el));
  document.querySelectorAll('[class*="reveal-"]:not(.revealed)').forEach(el => observer.observe(el));
}

/* ============================================================
   13. NAVBAR SCROLL EFFECT & MOBILE MENU
   ============================================================ */
const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// Hamburger menu toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ============================================================
   14. PARTICLE ANIMATION
   ============================================================ */
(() => {
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
      const navHeight = 72; // var(--nav-height)
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
