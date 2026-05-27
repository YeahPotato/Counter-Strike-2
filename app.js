// ========================= 渲染逻辑 =========================
function renderHeroVis() {
  document.getElementById('heroVis').innerHTML = `
  <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hvBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1a2332"/><stop offset="100%" stop-color="#0a1018"/></linearGradient>
      <radialGradient id="hvGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#4fc3f7" stop-opacity="0.3"/><stop offset="100%" stop-color="transparent"/></radialGradient>
    </defs>
    <rect width="400" height="360" fill="url(#hvBg)"/>
    <rect width="400" height="360" fill="url(#hvGlow)"/>
    <!-- Mirage 雷达 -->
    <g transform="translate(40 60)" stroke="#4fc3f7" stroke-width="2" fill="none" opacity="0.6">
      <rect x="0" y="0" width="80" height="80" fill="#4fc3f733"/>
      <rect x="240" y="0" width="80" height="80" fill="#4fc3f733"/>
      <rect x="120" y="100" width="80" height="60" fill="#4fc3f722"/>
      <line x1="80" y1="40" x2="240" y2="40" stroke-dasharray="5,5"/>
      <line x1="160" y1="80" x2="160" y2="100"/>
    </g>
    <!-- 玩家位置 -->
    <g>
      <circle cx="80" cy="100" r="6" fill="#4fc3f7"><animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite"/></circle>
      <circle cx="320" cy="100" r="6" fill="#ffb74d"><animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" begin="0.5s"/></circle>
      <circle cx="200" cy="160" r="6" fill="#4fc3f7"/>
      <circle cx="280" cy="180" r="6" fill="#ffb74d"/>
      <circle cx="120" cy="180" r="6" fill="#4fc3f7"/>
    </g>
    <!-- 中央准星 -->
    <g transform="translate(200 280)">
      <line x1="-20" y1="0" x2="-8" y2="0" stroke="#4fc3f7" stroke-width="2"/>
      <line x1="8" y1="0" x2="20" y2="0" stroke="#4fc3f7" stroke-width="2"/>
      <line x1="0" y1="-20" x2="0" y2="-8" stroke="#4fc3f7" stroke-width="2"/>
      <line x1="0" y1="8" x2="0" y2="20" stroke="#4fc3f7" stroke-width="2"/>
      <circle cx="0" cy="0" r="2" fill="#4fc3f7"/>
    </g>
    <!-- 比分 -->
    <g transform="translate(200 320)">
      <text x="-40" y="0" text-anchor="end" font-family="Rajdhani" font-size="28" font-weight="800" fill="#4fc3f7">12</text>
      <text x="0" y="0" text-anchor="middle" font-family="Rajdhani" font-size="20" fill="#888">:</text>
      <text x="40" y="0" text-anchor="start" font-family="Rajdhani" font-size="28" font-weight="800" fill="#ffb74d">10</text>
    </g>
    <text x="200" y="40" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="#fff" letter-spacing="3" opacity="0.6">DE_MIRAGE</text>
  </svg>`;
}

function renderTicker() {
  const inner = document.getElementById('ticker');
  const items = TICKER_ITEMS.concat(TICKER_ITEMS).map(i =>
    `<div class="ticker-item"><span class="label">${i.label}</span><span>${i.text}</span><span class="val">${i.val}</span></div>`
  ).join('');
  inner.innerHTML = items;
}

function renderMaps() {
  const grid = document.getElementById('mapsGrid');
  grid.innerHTML = MAPS.map((m, i) => `
    <div class="map-card fade-in" onclick="showMapDetail(${i})">
      <div class="map-card-img">
        ${MAP_RADAR[m.radar]}
        <div class="map-card-img-overlay"></div>
        <div class="map-card-img-tag">${m.code}</div>
        <div class="map-card-img-name">
          <h3 style="color:${m.color}">${m.name}</h3>
          <span>${m.type}</span>
        </div>
      </div>
      <div class="map-card-body">
        <div class="map-card-tags">
          ${m.tags.map((t, j) => `<span class="map-tag ${j===0?'t-tag':''}">${t}</span>`).join('')}
        </div>
        <div class="map-card-stats">
          <div class="map-card-stat"><div class="map-card-stat-val" style="color:${m.tWinRate>50?'var(--accent-t)':'var(--accent-ct)'}">${m.tWinRate}%</div><div class="map-card-stat-label">T胜率</div></div>
          <div class="map-card-stat"><div class="map-card-stat-val">${m.avgRounds}</div><div class="map-card-stat-label">均回合</div></div>
          <div class="map-card-stat"><div class="map-card-stat-val">${m.pickRate}%</div><div class="map-card-stat-label">选取率</div></div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderWeapons(cat) {
  const grid = document.getElementById('weaponsGrid');
  const list = WEAPONS[cat] || WEAPONS['步枪'];
  grid.innerHTML = list.map(w => {
    const stats = [
      { label: '伤害', val: w.damage, color: '#ef5350' },
      { label: '射速', val: w.firerate, color: '#ffb74d' },
      { label: '精准', val: w.accuracy, color: '#4fc3f7' },
      { label: '射程', val: w.range, color: '#66bb6a' },
      { label: '后坐力', val: w.recoil, color: '#ab47bc' }
    ];
    return `
    <div class="weapon-card fade-in visible">
      <div class="weapon-img">${getWeaponSvg(w.name)}</div>
      <div class="weapon-card-body">
        <div class="weapon-header">
          <div class="weapon-name">${w.name}</div>
          <span class="weapon-side ${w.side === 'both' ? 'both' : w.side}">${w.side === 'ct' ? 'CT' : w.side === 't-side' ? 'T' : '通用'}</span>
        </div>
        <div class="weapon-meta">
          <div><span class="label">价格:</span><span class="val">${w.price}</span></div>
          <div><span class="label">击杀奖励:</span><span class="val">${w.killReward || '$300'}</span></div>
        </div>
        <div class="weapon-stats">
          ${stats.map(s => `
            <div class="weapon-stat-row">
              <div class="weapon-stat-label">${s.label}</div>
              <div class="weapon-stat-bar"><div class="weapon-stat-fill" style="width:${s.val}%;background:${s.color}"></div></div>
              <div class="weapon-stat-val">${s.val}</div>
            </div>`).join('')}
        </div>
        <div class="weapon-tip"><strong>💡 实战:</strong> ${w.tip}</div>
      </div>
    </div>`;
  }).join('');
}

function renderWeaponTabs() {
  const tabs = document.getElementById('weaponTabs');
  tabs.innerHTML = Object.keys(WEAPONS).map((c, i) =>
    `<button class="weapon-tab ${i === 0 ? 'active' : ''}" onclick="switchWeaponTab(this, '${c}')">${c}</button>`
  ).join('');
}

function switchWeaponTab(el, cat) {
  document.querySelectorAll('.weapon-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderWeapons(cat);
}

function renderGrenades() {
  document.getElementById('grenadesGrid').innerHTML = GRENADES.map(g => `
    <div class="grenade-card">
      <div class="grenade-icon-wrap">${GRENADE_SVG[g.icon]}</div>
      <div class="grenade-name">${g.name}</div>
      <div class="grenade-price">${g.price}</div>
      <div class="grenade-desc">${g.desc}</div>
      <div class="grenade-stats-mini">
        ${g.stats.map(s => `<div class="grenade-stat-mini"><strong>${s[1]}</strong>${s[0]}</div>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderEconBonus() {
  const items = [
    { icon: '💀', label: '步枪击杀', val: '$300' },
    { icon: '🎯', label: 'AWP击杀', val: '$100' },
    { icon: '🔫', label: '微冲击杀', val: '$600' },
    { icon: '💥', label: '霰弹枪击杀', val: '$900' },
    { icon: '🔪', label: '刀杀奖励', val: '$1500' },
    { icon: '💣', label: '下包奖励(T)', val: '$300' },
    { icon: '🛡️', label: '拆包奖励(CT)', val: '$300' },
    { icon: '⚡', label: '资金上限', val: '$16000' }
  ];
  document.getElementById('econBonus').innerHTML = items.map(i => `
    <div class="econ-bonus-item">
      <div class="econ-bonus-icon">${i.icon}</div>
      <div class="econ-bonus-info">
        <div class="econ-bonus-label">${i.label}</div>
        <div class="econ-bonus-val">${i.val}</div>
      </div>
    </div>
  `).join('');
}

function renderEconRounds() {
  const winData = [
    ['R1', '手枪局胜利', '基础+胜利奖励', '$3,250'],
    ['R2', '连胜第1轮', '连败终结奖励', '$3,250'],
    ['R3', '连胜第2轮', '连续胜利', '$3,500'],
    ['R4', '连胜第3轮', '连续胜利', '$3,750'],
    ['R5+', '连胜第4轮+', '最大连胜奖励', '$4,000']
  ];
  const loseData = [
    ['R1', '首次失败', '基础奖励', '$1,400'],
    ['R2', '连败第2轮', '补偿递增', '$1,900'],
    ['R3', '连败第3轮', '补偿递增', '$2,400'],
    ['R4', '连败第4轮', '补偿递增', '$2,900'],
    ['R5+', '连败第5轮+', '最大连败补偿', '$3,400']
  ];
  document.getElementById('econWin').innerHTML = winData.map(d => `
    <div class="econ-round">
      <div class="econ-round-num w-num">${d[0]}</div>
      <div class="econ-round-info"><div class="econ-round-label">${d[1]}</div><div class="econ-round-desc">${d[2]}</div></div>
      <div class="econ-round-money">${d[3]}</div>
    </div>`).join('');
  document.getElementById('econLose').innerHTML = loseData.map(d => `
    <div class="econ-round">
      <div class="econ-round-num l-num">${d[0]}</div>
      <div class="econ-round-info"><div class="econ-round-label">${d[1]}</div><div class="econ-round-desc">${d[2]}</div></div>
      <div class="econ-round-money">${d[3]}</div>
    </div>`).join('');
}

function renderRanks() {
  document.getElementById('ranksTrack').innerHTML = RANKS.map(r => `
    <div class="rank-card" title="${r.name}">
      <div class="rank-icon">${RANK_SVG(r.color, r.level)}</div>
      <div class="rank-name" style="color:${r.color}">${r.name}</div>
    </div>
  `).join('');
}

function renderTips() {
  document.getElementById('tipsGrid').innerHTML = TIPS.map(t => `
    <div class="tip-card fade-in">
      <div class="tip-card-img">
        ${TIP_VISUAL(t.color, t.type)}
        <div class="tip-card-img-overlay"></div>
        <div class="tip-card-img-icon" style="background:${t.color}66">${t.emoji}</div>
      </div>
      <div class="tip-card-body">
        <div class="tip-card-title">${t.title}</div>
        <div class="tip-card-text">${t.text}</div>
        <ul class="tip-card-list">${t.list.map(l => `<li>${l}</li>`).join('')}</ul>
      </div>
    </div>
  `).join('');
}

function renderPros() {
  document.getElementById('prosGrid').innerHTML = PROS.map(p => `
    <div class="pro-card">
      <div class="pro-img">
        ${PLAYER_AVATAR(p.bg, p.accent, p.code)}
        <div class="pro-img-overlay"></div>
        <div class="pro-team">${p.team}</div>
        <div class="pro-rating">${p.rating}</div>
      </div>
      <div class="pro-body">
        <div class="pro-name">${p.name}</div>
        <div class="pro-real">${p.real}</div>
        <span class="pro-role">${p.role}</span>
        <div class="pro-stats">
          <div class="pro-stat"><div class="pro-stat-val">${p.headshot}</div><div class="pro-stat-lbl">爆头率</div></div>
          <div class="pro-stat"><div class="pro-stat-val">${p.kd}</div><div class="pro-stat-lbl">K/D</div></div>
          <div class="pro-stat"><div class="pro-stat-val">${p.adr}</div><div class="pro-stat-lbl">ADR</div></div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderTournaments() {
  document.getElementById('tourList').innerHTML = TOURNAMENTS.map(t => `
    <div class="tour-card">
      <div class="tour-img">
        ${TOUR_BANNER(t.color1, t.color2, t.name.replace(/\s/g, ''))}
        <div class="tour-img-overlay"></div>
        <div class="tour-status ${t.status}">${t.status === 'live' ? 'LIVE' : t.status === 'upcoming' ? '即将开始' : '已结束'}</div>
        <div class="tour-info">
          <div class="tour-name">${t.name}</div>
          <div class="tour-prize">奖金池: ${t.prize}</div>
        </div>
      </div>
      <div class="tour-body">
        <div class="tour-detail"><span class="lbl">日期</span><span class="val">${t.date}</span></div>
        <div class="tour-detail"><span class="lbl">参赛队伍</span><span class="val">${t.teams}</span></div>
        <div class="tour-detail"><span class="lbl">举办地</span><span class="val">${t.map}</span></div>
      </div>
    </div>
  `).join('');
}

function renderTrainings() {
  document.getElementById('trainingGrid').innerHTML = TRAININGS.map(t => `
    <div class="training-card">
      <div class="training-card-header">
        <div class="training-icon" style="background:${t.iconBg}">${t.icon}</div>
        <div>
          <div class="training-card-title">${t.title}</div>
          <div class="training-card-time">⏱️ ${t.time}</div>
        </div>
      </div>
      <div class="training-card-desc">${t.desc}</div>
      ${t.tags.map(tag => `<span class="training-card-tag">${tag}</span>`).join('')}
    </div>
  `).join('');
}

function renderNews() {
  document.getElementById('newsGrid').innerHTML = NEWS.map((n, i) => `
    <div class="news-card ${n.featured ? 'featured' : ''}">
      <div class="news-card-visual">
        <div class="news-badge ${n.badge}">${n.badgeText}</div>
        ${NEWS_VISUAL(n.visual, n.color)}
      </div>
      <div class="news-card-body">
        <div class="news-card-date">${n.date}</div>
        <div class="news-card-title">${n.title}</div>
        <div class="news-card-text">${n.text}</div>
      </div>
    </div>
  `).join('');
}

function renderFAQ() {
  document.getElementById('faqList').innerHTML = FAQ.map((f, i) => `
    <div class="faq-item" onclick="this.classList.toggle('open')">
      <div class="faq-q">${f.q}<span class="icon">+</span></div>
      <div class="faq-a">${f.a}</div>
    </div>
  `).join('');
}

function renderCrosshairPresets() {
  document.getElementById('crosshairPresets').innerHTML = CROSSHAIR_PRESETS.map((p, i) => `
    <div class="crosshair-preset" onclick="applyPreset(${i})">
      <div class="crosshair-preset-avatar" style="background:${p.avatar}">${p.name.substring(0,2)}</div>
      <div class="crosshair-preset-info">
        <div class="crosshair-preset-name">${p.name}</div>
        <div class="crosshair-preset-player">${p.player}</div>
      </div>
    </div>
  `).join('');
}

// ========================= 交互 =========================
function showMapDetail(idx) {
  const m = MAPS[idx];
  const modal = document.getElementById('modalContent');
  modal.innerHTML = `
    <div class="modal-img">${MAP_RADAR[m.radar]}</div>
    <div class="modal-body">
      <div class="modal-title" style="color:${m.color}">${m.name}</div>
      <div class="modal-subtitle">${m.code} · ${m.type} · T胜率 ${m.tWinRate}% · 平均回合 ${m.avgRounds}</div>
      <div class="modal-content">
        <p>${m.desc}</p>
        <h3>📍 关键报点</h3>
        <div class="modal-callouts">${m.callouts.map(c => `<span class="modal-callout">${c}</span>`).join('')}</div>
        <h3>🔴 T 侧战术</h3>
        <ul>${m.strategies.T.map(s => `<li>${s}</li>`).join('')}</ul>
        <h3>🔵 CT 侧战术</h3>
        <ul>${m.strategies.CT.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.add('show');
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay') || e.target.classList.contains('modal-close')) {
    document.getElementById('modalOverlay').classList.remove('show');
  }
}

function applyPreset(idx) {
  const p = CROSSHAIR_PRESETS[idx];
  document.getElementById('chSize').value = p.size;
  document.getElementById('chThick').value = p.thick;
  document.getElementById('chGap').value = p.gap;
  document.getElementById('chColor').value = p.color;
  document.getElementById('chDot').value = p.dot;
  document.getElementById('chOutline').value = p.outline;
  document.querySelectorAll('.crosshair-preset').forEach((el, i) => el.classList.toggle('active', i === idx));
  updateCrosshair();
}

function updateCrosshair() {
  const size = parseFloat(document.getElementById('chSize').value);
  const thick = parseFloat(document.getElementById('chThick').value);
  const gap = parseFloat(document.getElementById('chGap').value);
  const color = document.getElementById('chColor').value;
  const dot = parseInt(document.getElementById('chDot').value);
  const outline = parseFloat(document.getElementById('chOutline').value);
  document.getElementById('sizeVal').textContent = size;
  document.getElementById('thickVal').textContent = thick;
  document.getElementById('gapVal').textContent = gap;
  document.getElementById('dotVal').textContent = dot ? '开' : '关';
  document.getElementById('outlineVal').textContent = outline;

  const len = size * 4, t = thick * 2, g = gap * 3;
  let html = '';
  if (outline > 0) {
    const ow = outline * 2;
    html += `<div style="position:absolute;background:rgba(0,0,0,0.8);width:${len+ow*2}px;height:${t+ow*2}px;top:50%;left:50%;transform:translate(-50%,-50%) translateY(${-(g+t/2+ow)}px)"></div>`;
    html += `<div style="position:absolute;background:rgba(0,0,0,0.8);width:${len+ow*2}px;height:${t+ow*2}px;top:50%;left:50%;transform:translate(-50%,-50%) translateY(${g+t/2+ow}px)"></div>`;
    html += `<div style="position:absolute;background:rgba(0,0,0,0.8);width:${t+ow*2}px;height:${len+ow*2}px;top:50%;left:50%;transform:translate(-50%,-50%) translateX(${-(g+t/2+ow)}px)"></div>`;
    html += `<div style="position:absolute;background:rgba(0,0,0,0.8);width:${t+ow*2}px;height:${len+ow*2}px;top:50%;left:50%;transform:translate(-50%,-50%) translateX(${g+t/2+ow}px)"></div>`;
  }
  html += `<div style="position:absolute;background:${color};width:${len}px;height:${t}px;top:50%;left:50%;transform:translate(-50%,-50%) translateY(${-(g+t/2)}px)"></div>`;
  html += `<div style="position:absolute;background:${color};width:${len}px;height:${t}px;top:50%;left:50%;transform:translate(-50%,-50%) translateY(${g+t/2}px)"></div>`;
  html += `<div style="position:absolute;background:${color};width:${t}px;height:${len}px;top:50%;left:50%;transform:translate(-50%,-50%) translateX(${-(g+t/2)}px)"></div>`;
  html += `<div style="position:absolute;background:${color};width:${t}px;height:${len}px;top:50%;left:50%;transform:translate(-50%,-50%) translateX(${g+t/2}px)"></div>`;
  if (dot) html += `<div style="position:absolute;background:${color};width:${t+2}px;height:${t+2}px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%)"></div>`;
  document.getElementById('crosshairDisplay').innerHTML = html;
}

function copyCrosshairCode() {
  const size = document.getElementById('chSize').value;
  const thick = document.getElementById('chThick').value;
  const gap = document.getElementById('chGap').value;
  const color = document.getElementById('chColor').value;
  const dot = document.getElementById('chDot').value;
  const outline = document.getElementById('chOutline').value;
  const r = parseInt(color.substr(1,2), 16), g = parseInt(color.substr(3,2), 16), b = parseInt(color.substr(5,2), 16);
  const code = `cl_crosshairsize ${size}; cl_crosshairthickness ${thick}; cl_crosshairgap ${gap}; cl_crosshaircolor_r ${r}; cl_crosshaircolor_g ${g}; cl_crosshaircolor_b ${b}; cl_crosshairdot ${dot}; cl_crosshair_outlinethickness ${outline}; cl_crosshaircolor 5;`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => showToast('✅ 准星代码已复制到剪贴板')).catch(() => showToast('📋 ' + code));
  } else {
    showToast('📋 ' + code);
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function calcEconomy() {
  const money = parseInt(document.getElementById('econMoney').value) || 0;
  const result = document.getElementById('econResult').value;
  const buy = document.getElementById('econBuy').value;
  const rewards = { win: 3250, lose1: 1400, lose2: 1900, lose3: 2400, lose4: 2900 };
  const costs = { full: 4300, fullawp: 6200, eco: 300, force: 2200, none: 0 };
  let cur = money - (costs[buy] || 0);
  if (cur < 0) cur = 0;
  const next = Math.min(cur + (rewards[result] || 3250), 16000);
  document.getElementById('econResultVal').textContent = '$' + next.toLocaleString();
  // 策略建议
  let strat = '建议：';
  if (next >= 10000) strat += '可以全装备购买';
  else if (next >= 5000) strat += '考虑全甲+步枪';
  else if (next >= 2500) strat += '强起或存钱';
  else strat += 'ECO 局保枪';
  document.getElementById('econStrategy').textContent = strat;
}

function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `position:absolute;width:2px;height:2px;background:var(--accent-ct);border-radius:50%;left:${Math.random()*100}%;top:${Math.random()*100}%;opacity:0;animation:floatP ${4+Math.random()*8}s ease-in-out infinite ${Math.random()*5}s;`;
    container.appendChild(p);
  }
}

function handleScroll() {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 50);
  const bt = document.getElementById('backTop');
  if (bt) bt.classList.toggle('show', window.scrollY > 500);
  document.querySelectorAll('.fade-in').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) el.classList.add('visible');
  });
}

function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(timer); }
      el.textContent = cur;
    }, 30);
  });
}

function toggleMobileNav() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.cssText = '';
  } else {
    links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:64px;left:0;right:0;background:rgba(10,10,15,0.98);padding:16px;border-bottom:1px solid var(--border);';
  }
}

// 搜索
document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('searchInput');
  if (search) {
    search.addEventListener('input', e => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) return;
      const map = {
        maps: ['地图','dust','mirage','inferno','nuke','overpass','ancient','anubis','vertigo','office'],
        weapons: ['武器','枪','ak','m4','awp','步枪','手枪','微冲','deagle','负罪','沙鹰'],
        grenades: ['投掷','道具','烟雾','闪光','手雷','燃烧','smoke','flash','molotov','grenade','he'],
        economy: ['经济','钱','eco','买甲','强起','计算器'],
        crosshair: ['准星','十字','crosshair'],
        ranks: ['段位','rank','等级','上分'],
        tips: ['技巧','攻略','教学','训练','心得'],
        pros: ['职业','选手','s1mple','zywoo','niko','donk'],
        tournaments: ['赛事','比赛','iem','blast','major','锦标'],
        training: ['训练','练习','热身','aim_botz','复盘'],
        news: ['新闻','更新','版本','资讯'],
        faq: ['faq','问题','常见','疑问']
      };
      for (const sec in map) {
        if (map[sec].some(k => k.includes(q) || q.includes(k))) {
          document.getElementById(sec).scrollIntoView({ behavior: 'smooth' });
          break;
        }
      }
    });
  }

  const m = document.getElementById('econMoney');
  if (m) m.addEventListener('input', calcEconomy);
  const r = document.getElementById('econResult');
  if (r) r.addEventListener('change', calcEconomy);
  const b = document.getElementById('econBuy');
  if (b) b.addEventListener('change', calcEconomy);
});

// 启动
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
  renderHeroVis();
  renderTicker();
  renderMaps();
  renderWeaponTabs();
  renderWeapons('步枪');
  renderGrenades();
  renderEconBonus();
  renderEconRounds();
  renderRanks();
  renderTips();
  renderPros();
  renderTournaments();
  renderTrainings();
  renderNews();
  renderFAQ();
  renderCrosshairPresets();
  applyPreset(0);
  calcEconomy();
  createParticles();
  setTimeout(animateCounters, 400);
  handleScroll();
});

// 注入粒子动画
const style = document.createElement('style');
style.textContent = `@keyframes floatP { 0%,100% { transform: translateY(0); opacity: 0; } 30%,70% { opacity: 0.6; } 50% { transform: translateY(-30px); } }`;
document.head.appendChild(style);
