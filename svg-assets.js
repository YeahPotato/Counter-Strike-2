// ========================= SVG 资源库 =========================
// 全部使用游戏内风格的纯 SVG，不依赖任何外部图片

// ---- 地图雷达图 (CS2 mini-map 风格) ----
const MAP_RADAR = {
  dust2: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dust2bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3d2817"/><stop offset="100%" stop-color="#1a0f08"/>
      </linearGradient>
      <pattern id="dust2sand" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="0.5" fill="#5a3d1f" opacity="0.4"/></pattern>
    </defs>
    <rect width="400" height="280" fill="url(#dust2bg)"/>
    <rect width="400" height="280" fill="url(#dust2sand)"/>
    <!-- A 区 (右上) -->
    <g fill="#8b6f47" stroke="#3d2817" stroke-width="2">
      <rect x="280" y="30" width="100" height="90" opacity="0.9"/>
      <rect x="295" y="45" width="30" height="30" fill="#5a3d1f"/>
      <rect x="335" y="60" width="35" height="40" fill="#5a3d1f"/>
    </g>
    <!-- B 区 (左下) -->
    <g fill="#8b6f47" stroke="#3d2817" stroke-width="2">
      <rect x="20" y="170" width="110" height="90" opacity="0.9"/>
      <rect x="35" y="190" width="35" height="35" fill="#5a3d1f"/>
      <rect x="80" y="200" width="40" height="50" fill="#5a3d1f"/>
    </g>
    <!-- 中路 -->
    <rect x="170" y="100" width="100" height="60" fill="#a08060" stroke="#3d2817" stroke-width="2" opacity="0.8"/>
    <!-- 通道 -->
    <path d="M130 215 L170 130 M270 130 L310 75 M220 100 L220 60 L260 30" stroke="#a08060" stroke-width="14" fill="none" opacity="0.7"/>
    <!-- 标记点 -->
    <circle cx="320" cy="65" r="8" fill="#ef5350" stroke="#fff" stroke-width="2"/>
    <text x="320" y="69" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">A</text>
    <circle cx="65" cy="215" r="8" fill="#4fc3f7" stroke="#fff" stroke-width="2"/>
    <text x="65" y="219" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">B</text>
    <!-- 玩家位置 -->
    <circle cx="200" cy="145" r="4" fill="#ffb74d"/>
    <circle cx="220" cy="125" r="4" fill="#ffb74d"/>
    <circle cx="305" cy="100" r="4" fill="#4fc3f7"/>
    <circle cx="80" cy="195" r="4" fill="#4fc3f7"/>
    <text x="200" y="20" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="#ffb74d" letter-spacing="3">DUST II</text>
  </svg>`,

  mirage: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="mirbg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#c8a878"/><stop offset="100%" stop-color="#5a4030"/></linearGradient></defs>
    <rect width="400" height="280" fill="url(#mirbg)"/>
    <!-- A 点 (右) -->
    <g fill="#e0c090" stroke="#5a4030" stroke-width="2">
      <rect x="270" y="40" width="110" height="100"/>
      <rect x="285" y="55" width="40" height="35" fill="#a07050"/>
      <rect x="335" y="80" width="30" height="40" fill="#a07050"/>
    </g>
    <!-- B 点 (左) -->
    <g fill="#e0c090" stroke="#5a4030" stroke-width="2">
      <rect x="20" y="50" width="110" height="100"/>
      <rect x="35" y="65" width="35" height="40" fill="#a07050"/>
      <rect x="85" y="80" width="35" height="50" fill="#a07050"/>
    </g>
    <!-- 中路连接 -->
    <rect x="160" y="120" width="80" height="50" fill="#d4b888" stroke="#5a4030" stroke-width="2"/>
    <rect x="180" y="180" width="40" height="60" fill="#a07050" stroke="#5a4030" stroke-width="2"/>
    <!-- 通道 -->
    <path d="M130 100 L160 130 M240 130 L270 90 M200 240 L200 170" stroke="#d4b888" stroke-width="12" fill="none" opacity="0.7"/>
    <circle cx="325" cy="90" r="8" fill="#ef5350" stroke="#fff" stroke-width="2"/>
    <text x="325" y="94" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">A</text>
    <circle cx="65" cy="100" r="8" fill="#4fc3f7" stroke="#fff" stroke-width="2"/>
    <text x="65" y="104" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">B</text>
    <text x="200" y="20" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="#3d2817" letter-spacing="3">MIRAGE</text>
  </svg>`,

  inferno: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="infbg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7a4530"/><stop offset="100%" stop-color="#2a1810"/></linearGradient></defs>
    <rect width="400" height="280" fill="url(#infbg)"/>
    <!-- A 点 (上) - 教堂广场 -->
    <g fill="#a06040" stroke="#3a1810" stroke-width="2">
      <polygon points="220,30 320,30 340,80 200,80"/>
      <rect x="240" y="40" width="30" height="30" fill="#5a2810"/>
      <rect x="290" y="50" width="35" height="25" fill="#5a2810"/>
    </g>
    <!-- B 点 (左) - 香蕉道 -->
    <g fill="#a06040" stroke="#3a1810" stroke-width="2">
      <rect x="20" y="160" width="100" height="80"/>
      <rect x="35" y="175" width="30" height="30" fill="#5a2810"/>
      <rect x="80" y="185" width="30" height="40" fill="#5a2810"/>
    </g>
    <!-- 中路/Banana -->
    <path d="M120 195 Q160 180 200 100" stroke="#c08060" stroke-width="22" fill="none" opacity="0.5"/>
    <!-- Apartments -->
    <rect x="170" y="110" width="60" height="50" fill="#704030" stroke="#3a1810" stroke-width="2"/>
    <!-- 屋顶 -->
    <g fill="#8a3020" stroke="#3a1810" stroke-width="1.5" opacity="0.8">
      <polygon points="220,30 320,30 270,15"/>
      <polygon points="20,160 120,160 70,145"/>
    </g>
    <circle cx="270" cy="55" r="8" fill="#ef5350" stroke="#fff" stroke-width="2"/>
    <text x="270" y="59" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">A</text>
    <circle cx="70" cy="200" r="8" fill="#4fc3f7" stroke="#fff" stroke-width="2"/>
    <text x="70" y="204" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">B</text>
    <text x="200" y="270" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="#ffb74d" letter-spacing="3">INFERNO</text>
  </svg>`,

  nuke: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="nukbg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3a4a5a"/><stop offset="100%" stop-color="#1a2030"/></linearGradient></defs>
    <rect width="400" height="280" fill="url(#nukbg)"/>
    <!-- 主建筑外围 -->
    <rect x="40" y="40" width="320" height="200" fill="#5a6a7a" stroke="#0a1020" stroke-width="3"/>
    <!-- 上层 (heaven) -->
    <rect x="60" y="60" width="280" height="80" fill="#7a8a9a" stroke="#0a1020" stroke-width="2"/>
    <text x="200" y="105" text-anchor="middle" font-family="Rajdhani" font-size="12" font-weight="700" fill="#0a1020" opacity="0.8">UPPER A SITE</text>
    <!-- 下层 (B 点) -->
    <rect x="60" y="160" width="280" height="60" fill="#3a4a5a" stroke="#0a1020" stroke-width="2"/>
    <text x="200" y="195" text-anchor="middle" font-family="Rajdhani" font-size="12" font-weight="700" fill="#fff" opacity="0.8">LOWER B SITE</text>
    <!-- Silo -->
    <circle cx="140" cy="100" r="22" fill="#bfa080" stroke="#0a1020" stroke-width="2"/>
    <circle cx="140" cy="100" r="10" fill="#7a6040"/>
    <!-- Vent -->
    <rect x="245" y="93" width="20" height="14" fill="#0a1020"/>
    <!-- 楼梯 -->
    <g stroke="#0a1020" stroke-width="1" fill="#5a6a7a">
      <rect x="180" y="140" width="40" height="20"/>
      <line x1="190" y1="140" x2="190" y2="160"/><line x1="200" y1="140" x2="200" y2="160"/><line x1="210" y1="140" x2="210" y2="160"/>
    </g>
    <circle cx="200" cy="100" r="8" fill="#ef5350" stroke="#fff" stroke-width="2"/>
    <text x="200" y="104" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">A</text>
    <circle cx="200" cy="190" r="8" fill="#4fc3f7" stroke="#fff" stroke-width="2"/>
    <text x="200" y="194" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">B</text>
    <text x="200" y="20" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="#4fc3f7" letter-spacing="3">NUKE</text>
  </svg>`,

  overpass: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="ovrbg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#5a6850"/><stop offset="100%" stop-color="#2a3020"/></linearGradient></defs>
    <rect width="400" height="280" fill="url(#ovrbg)"/>
    <!-- A 点 (上) - 公园 -->
    <g fill="#7a8a60" stroke="#1a2010" stroke-width="2">
      <rect x="240" y="40" width="130" height="90"/>
      <circle cx="280" cy="80" r="14" fill="#3a5a30"/>
      <circle cx="330" cy="100" r="12" fill="#3a5a30"/>
      <rect x="290" y="55" width="30" height="20" fill="#5a6840"/>
    </g>
    <!-- B 点 (下) - 卡车区 -->
    <g fill="#6a7050" stroke="#1a2010" stroke-width="2">
      <rect x="40" y="170" width="130" height="80"/>
      <rect x="55" y="185" width="50" height="30" fill="#3a4030"/>
      <rect x="115" y="195" width="40" height="40" fill="#3a4030"/>
    </g>
    <!-- 水道 -->
    <path d="M180 240 Q200 200 220 130 Q240 80 260 50" stroke="#4a6a8a" stroke-width="14" fill="none" opacity="0.7"/>
    <!-- Connector -->
    <rect x="160" y="100" width="80" height="50" fill="#5a6a40" stroke="#1a2010" stroke-width="2"/>
    <circle cx="305" cy="80" r="8" fill="#ef5350" stroke="#fff" stroke-width="2"/>
    <text x="305" y="84" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">A</text>
    <circle cx="105" cy="210" r="8" fill="#4fc3f7" stroke="#fff" stroke-width="2"/>
    <text x="105" y="214" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">B</text>
    <text x="200" y="20" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="#a8c080" letter-spacing="2">OVERPASS</text>
  </svg>`,

  ancient: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="ancbg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4a3520"/><stop offset="100%" stop-color="#1a1008"/></linearGradient></defs>
    <rect width="400" height="280" fill="url(#ancbg)"/>
    <!-- 玛雅金字塔 (A 点) -->
    <g fill="#8a6840" stroke="#2a1810" stroke-width="2">
      <polygon points="270,30 370,30 350,140 290,140"/>
      <polygon points="280,40 360,40 345,130 295,130" fill="#a08060"/>
      <line x1="280" y1="65" x2="360" y2="65" stroke="#5a3a20"/>
      <line x1="285" y1="90" x2="355" y2="90" stroke="#5a3a20"/>
      <line x1="290" y1="115" x2="350" y2="115" stroke="#5a3a20"/>
    </g>
    <!-- B 点 -->
    <g fill="#8a6840" stroke="#2a1810" stroke-width="2">
      <rect x="40" y="160" width="120" height="100"/>
      <polygon points="40,160 160,160 100,140" fill="#a08060"/>
      <rect x="60" y="180" width="35" height="35" fill="#5a3a20"/>
      <rect x="105" y="200" width="35" height="40" fill="#5a3a20"/>
    </g>
    <!-- 树木装饰 -->
    <g fill="#3a5a30" opacity="0.8">
      <circle cx="200" cy="100" r="12"/><circle cx="180" cy="180" r="10"/><circle cx="240" cy="200" r="11"/>
    </g>
    <!-- 中路 -->
    <rect x="170" y="120" width="80" height="40" fill="#6a4a2a" stroke="#2a1810" stroke-width="1"/>
    <circle cx="320" cy="80" r="8" fill="#ef5350" stroke="#fff" stroke-width="2"/>
    <text x="320" y="84" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">A</text>
    <circle cx="100" cy="210" r="8" fill="#4fc3f7" stroke="#fff" stroke-width="2"/>
    <text x="100" y="214" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">B</text>
    <text x="200" y="20" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="#ff8a65" letter-spacing="3">ANCIENT</text>
  </svg>`,

  anubis: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="anubg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#d4a850"/><stop offset="100%" stop-color="#5a4020"/></linearGradient></defs>
    <rect width="400" height="280" fill="url(#anubg)"/>
    <!-- 金字塔 (A 区) -->
    <g fill="#e0c060" stroke="#3a2810" stroke-width="2">
      <polygon points="280,30 380,30 380,130 280,130"/>
      <polygon points="280,30 380,30 330,55" fill="#b09040"/>
      <rect x="305" y="70" width="40" height="50" fill="#7a5520"/>
      <polygon points="305,70 345,70 325,55" fill="#5a3810"/>
    </g>
    <!-- 神庙 (B 区) -->
    <g fill="#d0b050" stroke="#3a2810" stroke-width="2">
      <rect x="20" y="170" width="120" height="80"/>
      <rect x="35" y="190" width="25" height="50" fill="#7a5520"/>
      <rect x="75" y="190" width="25" height="50" fill="#7a5520"/>
      <rect x="115" y="190" width="25" height="50" fill="#7a5520"/>
      <polygon points="20,170 140,170 80,150" fill="#a08040"/>
    </g>
    <!-- 运河 (Canal) -->
    <path d="M0 130 Q100 120 200 140 Q300 160 400 150" stroke="#4a8acc" stroke-width="10" fill="none" opacity="0.6"/>
    <!-- 中路 -->
    <rect x="160" y="100" width="80" height="50" fill="#c0a050" stroke="#3a2810" stroke-width="2"/>
    <circle cx="325" cy="80" r="8" fill="#ef5350" stroke="#fff" stroke-width="2"/>
    <text x="325" y="84" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">A</text>
    <circle cx="80" cy="210" r="8" fill="#4fc3f7" stroke="#fff" stroke-width="2"/>
    <text x="80" y="214" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">B</text>
    <text x="200" y="20" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="#3a2810" letter-spacing="3">ANUBIS</text>
  </svg>`,

  vertigo: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="vrtbg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4a5060"/><stop offset="100%" stop-color="#1a1f30"/></linearGradient></defs>
    <rect width="400" height="280" fill="url(#vrtbg)"/>
    <!-- 摩天大楼俯视 -->
    <rect x="60" y="60" width="280" height="160" fill="#6a7080" stroke="#0a1020" stroke-width="3"/>
    <!-- 楼板格子 -->
    <g stroke="#3a4050" stroke-width="1" fill="none">
      <line x1="60" y1="100" x2="340" y2="100"/>
      <line x1="60" y1="140" x2="340" y2="140"/>
      <line x1="60" y1="180" x2="340" y2="180"/>
      <line x1="130" y1="60" x2="130" y2="220"/>
      <line x1="200" y1="60" x2="200" y2="220"/>
      <line x1="270" y1="60" x2="270" y2="220"/>
    </g>
    <!-- A 点 (右) -->
    <rect x="270" y="80" width="60" height="60" fill="#8a90a0" stroke="#0a1020" stroke-width="2"/>
    <!-- B 点 (左下) -->
    <rect x="80" y="160" width="70" height="50" fill="#8a90a0" stroke="#0a1020" stroke-width="2"/>
    <!-- 钢架 -->
    <g stroke="#ffb74d" stroke-width="1" opacity="0.6">
      <line x1="60" y1="60" x2="340" y2="220"/>
      <line x1="340" y1="60" x2="60" y2="220"/>
    </g>
    <!-- 电梯 -->
    <rect x="190" y="140" width="20" height="40" fill="#ffb74d" stroke="#0a1020" stroke-width="1.5"/>
    <circle cx="300" cy="110" r="8" fill="#ef5350" stroke="#fff" stroke-width="2"/>
    <text x="300" y="114" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">A</text>
    <circle cx="115" cy="185" r="8" fill="#4fc3f7" stroke="#fff" stroke-width="2"/>
    <text x="115" y="189" text-anchor="middle" font-family="Rajdhani" font-size="11" font-weight="700" fill="#fff">B</text>
    <text x="200" y="20" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="#4fc3f7" letter-spacing="3">VERTIGO</text>
  </svg>`,

  office: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="ofcbg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#5a6070"/><stop offset="100%" stop-color="#2a3040"/></linearGradient></defs>
    <rect width="400" height="280" fill="url(#ofcbg)"/>
    <!-- 办公室外墙 -->
    <rect x="40" y="40" width="320" height="200" fill="#7a8090" stroke="#1a2030" stroke-width="3"/>
    <!-- 内部隔间 -->
    <g fill="#9aa0b0" stroke="#1a2030" stroke-width="2">
      <rect x="60" y="60" width="80" height="60"/>
      <rect x="160" y="60" width="80" height="60"/>
      <rect x="260" y="60" width="80" height="60"/>
      <rect x="60" y="140" width="100" height="80"/>
      <rect x="180" y="140" width="80" height="80"/>
      <rect x="280" y="140" width="60" height="80"/>
    </g>
    <!-- 办公桌 -->
    <g fill="#5a4030" stroke="#1a2030" stroke-width="1">
      <rect x="70" y="80" width="30" height="20"/><rect x="170" y="80" width="30" height="20"/>
      <rect x="280" y="80" width="40" height="20"/><rect x="80" y="170" width="40" height="20"/>
      <rect x="200" y="170" width="40" height="20"/>
    </g>
    <!-- 走廊 -->
    <rect x="140" y="60" width="20" height="160" fill="#8a90a0" opacity="0.6"/>
    <rect x="240" y="60" width="20" height="160" fill="#8a90a0" opacity="0.6"/>
    <!-- 人质 -->
    <circle cx="200" cy="180" r="8" fill="#ffee58" stroke="#fff" stroke-width="2"/>
    <text x="200" y="184" text-anchor="middle" font-family="Rajdhani" font-size="10" font-weight="700" fill="#000">H</text>
    <text x="200" y="20" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="#90a4ae" letter-spacing="3">OFFICE</text>
  </svg>`
};

// ---- 武器 SVG (轮廓风格) ----
const WEAPON_SVG = {
  ak47: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="akG" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#5a4030"/><stop offset="50%" stop-color="#8a6040"/><stop offset="100%" stop-color="#3a2010"/></linearGradient></defs>
    <!-- 枪托 -->
    <path d="M5 38 L40 32 L45 50 L8 56 Z" fill="url(#akG)" stroke="#1a1008" stroke-width="1"/>
    <!-- 主体 -->
    <rect x="40" y="30" width="120" height="20" fill="#3a3a4a" stroke="#1a1018" stroke-width="1"/>
    <!-- 弹匣 -->
    <path d="M70 50 L85 50 L88 70 L65 70 Z" fill="url(#akG)" stroke="#1a1008" stroke-width="1"/>
    <!-- 准星 -->
    <rect x="115" y="22" width="6" height="10" fill="#1a1018"/>
    <!-- 枪管 -->
    <rect x="160" y="35" width="65" height="10" fill="#3a3a4a" stroke="#1a1018" stroke-width="1"/>
    <rect x="220" y="33" width="12" height="14" fill="#1a1018"/>
    <!-- 握把 -->
    <path d="M55 50 L65 50 L62 65 L52 65 Z" fill="url(#akG)" stroke="#1a1008" stroke-width="1"/>
  </svg>`,

  m4: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
    <!-- 枪托 -->
    <rect x="5" y="34" width="38" height="14" fill="#2a2a3a" stroke="#0a0a18" stroke-width="1"/>
    <!-- 主体 -->
    <rect x="43" y="30" width="115" height="22" fill="#2a2a3a" stroke="#0a0a18" stroke-width="1"/>
    <!-- 弹匣 -->
    <rect x="75" y="52" width="20" height="22" fill="#3a3a4a" stroke="#0a0a18" stroke-width="1"/>
    <!-- 握把 -->
    <path d="M55 52 L70 52 L66 67 L54 67 Z" fill="#2a2a3a" stroke="#0a0a18" stroke-width="1"/>
    <!-- 瞄具 -->
    <rect x="100" y="22" width="20" height="8" fill="#0a0a18"/>
    <circle cx="110" cy="20" r="3" fill="#4fc3f7"/>
    <!-- 枪管 -->
    <rect x="158" y="36" width="60" height="10" fill="#2a2a3a" stroke="#0a0a18" stroke-width="1"/>
    <rect x="215" y="34" width="14" height="14" fill="#0a0a18"/>
  </svg>`,

  awp: `<svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="awpG" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#3a3a4e"/><stop offset="100%" stop-color="#1a1a2e"/></linearGradient></defs>
    <!-- 枪托 -->
    <path d="M5 35 L45 30 L50 55 L8 60 Z" fill="url(#awpG)" stroke="#0a0a18" stroke-width="1"/>
    <!-- 主体 -->
    <rect x="45" y="32" width="140" height="20" fill="url(#awpG)" stroke="#0a0a18" stroke-width="1"/>
    <!-- 瞄准镜 -->
    <rect x="100" y="14" width="70" height="18" fill="#0a0a18" stroke="#4fc3f7" stroke-width="1"/>
    <circle cx="115" cy="23" r="5" fill="#4fc3f7" opacity="0.7"/>
    <circle cx="155" cy="23" r="5" fill="#4fc3f7" opacity="0.7"/>
    <!-- 弹匣 -->
    <rect x="80" y="52" width="22" height="14" fill="#3a3a4e" stroke="#0a0a18" stroke-width="1"/>
    <!-- 握把 -->
    <path d="M58 52 L72 52 L68 67 L56 67 Z" fill="url(#awpG)" stroke="#0a0a18" stroke-width="1"/>
    <!-- 枪管 -->
    <rect x="185" y="38" width="80" height="8" fill="url(#awpG)" stroke="#0a0a18" stroke-width="1"/>
    <rect x="262" y="36" width="14" height="12" fill="#0a0a18"/>
    <!-- 两脚架 -->
    <line x1="200" y1="46" x2="195" y2="60" stroke="#0a0a18" stroke-width="2"/>
    <line x1="210" y1="46" x2="215" y2="60" stroke="#0a0a18" stroke-width="2"/>
  </svg>`,

  smg: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
    <!-- 主体 -->
    <rect x="45" y="32" width="100" height="20" fill="#2a2a3a" stroke="#0a0a18" stroke-width="1"/>
    <!-- 折叠枪托 -->
    <path d="M15 38 L45 38 L45 46 L15 46 Z" fill="#3a3a4a" stroke="#0a0a18" stroke-width="1"/>
    <!-- 弹匣 (倾斜) -->
    <path d="M62 52 L82 52 L88 75 L60 75 Z" fill="#3a3a4a" stroke="#0a0a18" stroke-width="1"/>
    <!-- 握把 -->
    <path d="M50 52 L62 52 L60 67 L48 67 Z" fill="#2a2a3a" stroke="#0a0a18" stroke-width="1"/>
    <!-- 瞄具 -->
    <rect x="92" y="24" width="14" height="8" fill="#0a0a18"/>
    <!-- 枪管 -->
    <rect x="145" y="36" width="50" height="10" fill="#2a2a3a" stroke="#0a0a18" stroke-width="1"/>
    <rect x="190" y="34" width="12" height="14" fill="#0a0a18"/>
  </svg>`,

  pistol: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="pisG" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#3a3a4a"/><stop offset="100%" stop-color="#1a1a2a"/></linearGradient></defs>
    <!-- 滑套 -->
    <path d="M40 30 L150 30 L155 38 L40 38 Z" fill="url(#pisG)" stroke="#0a0a18" stroke-width="1"/>
    <!-- 主体 -->
    <path d="M40 38 L150 38 L150 50 L100 50 L100 75 L65 75 L40 50 Z" fill="url(#pisG)" stroke="#0a0a18" stroke-width="1"/>
    <!-- 握把 -->
    <path d="M65 50 L100 50 L100 88 L72 88 Z" fill="#1a1a2a" stroke="#0a0a18" stroke-width="1"/>
    <!-- 弹匣 -->
    <rect x="78" y="74" width="18" height="20" fill="#0a0a18"/>
    <!-- 准星 -->
    <rect x="135" y="24" width="6" height="6" fill="#0a0a18"/>
    <rect x="48" y="24" width="6" height="6" fill="#0a0a18"/>
    <!-- 扳机 -->
    <circle cx="105" cy="60" r="6" fill="none" stroke="#0a0a18" stroke-width="1.5"/>
  </svg>`,

  shotgun: `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="sgG" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#5a4030"/><stop offset="50%" stop-color="#8a6040"/><stop offset="100%" stop-color="#3a2010"/></linearGradient></defs>
    <!-- 木质枪托 -->
    <path d="M5 35 L40 28 L45 56 L8 62 Z" fill="url(#sgG)" stroke="#1a1008" stroke-width="1"/>
    <!-- 主体 -->
    <rect x="45" y="32" width="100" height="18" fill="#3a3a4a" stroke="#0a0a18" stroke-width="1"/>
    <!-- 泵动手柄 -->
    <rect x="80" y="50" width="40" height="12" fill="url(#sgG)" stroke="#1a1008" stroke-width="1"/>
    <!-- 双枪管 -->
    <rect x="145" y="33" width="80" height="7" fill="#3a3a4a" stroke="#0a0a18" stroke-width="1"/>
    <rect x="145" y="42" width="80" height="7" fill="#3a3a4a" stroke="#0a0a18" stroke-width="1"/>
    <circle cx="222" cy="36" r="3" fill="#0a0a18"/>
    <circle cx="222" cy="46" r="3" fill="#0a0a18"/>
    <!-- 握把 -->
    <path d="M55 50 L70 50 L65 65 L52 65 Z" fill="url(#sgG)" stroke="#1a1008" stroke-width="1"/>
  </svg>`
};

function getWeaponSvg(name) {
  if (name.includes('AK')) return WEAPON_SVG.ak47;
  if (name.includes('AWP')) return WEAPON_SVG.awp;
  if (name.includes('M4') || name.includes('SG') || name.includes('AUG') || name.includes('FAMAS') || name.includes('Galil')) return WEAPON_SVG.m4;
  if (name.includes('Nova') || name.includes('MAG') || name.includes('XM1014') || name.includes('Sawed')) return WEAPON_SVG.shotgun;
  if (name.includes('Negev')) return WEAPON_SVG.shotgun;
  if (name.includes('MP') || name.includes('MAC') || name.includes('UMP') || name.includes('P90') || name.includes('PP')) return WEAPON_SVG.smg;
  return WEAPON_SVG.pistol;
}

// ---- 投掷物 SVG ----
const GRENADE_SVG = {
  smoke: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="smkG"><stop offset="0%" stop-color="#9eb8c8"/><stop offset="100%" stop-color="#4a6878"/></radialGradient></defs><rect x="20" y="14" width="20" height="36" rx="3" fill="url(#smkG)" stroke="#1a2a38" stroke-width="1"/><rect x="22" y="10" width="16" height="6" fill="#3a4a58" stroke="#1a2a38" stroke-width="1"/><circle cx="30" cy="13" r="2" fill="#ef5350"/><line x1="20" y1="22" x2="40" y2="22" stroke="#1a2a38" stroke-width="0.5"/><line x1="20" y1="42" x2="40" y2="42" stroke="#1a2a38" stroke-width="0.5"/></svg>`,
  flash: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="flsG"><stop offset="0%" stop-color="#e8e8e8"/><stop offset="100%" stop-color="#888"/></radialGradient></defs><circle cx="30" cy="32" r="18" fill="url(#flsG)" stroke="#1a1a1a" stroke-width="1"/><rect x="26" y="10" width="8" height="8" fill="#3a3a3a" stroke="#1a1a1a" stroke-width="1"/><circle cx="30" cy="32" r="6" fill="#fff" opacity="0.8"/><line x1="14" y1="32" x2="46" y2="32" stroke="#1a1a1a" stroke-width="0.5"/><line x1="30" y1="16" x2="30" y2="48" stroke="#1a1a1a" stroke-width="0.5"/></svg>`,
  he: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="heG"><stop offset="0%" stop-color="#7a6040"/><stop offset="100%" stop-color="#3a2810"/></radialGradient></defs><ellipse cx="30" cy="35" rx="16" ry="18" fill="url(#heG)" stroke="#1a1008" stroke-width="1"/><rect x="26" y="12" width="8" height="8" fill="#3a3a3a" stroke="#1a1008" stroke-width="1"/><path d="M16 28 Q30 24 44 28" stroke="#1a1008" stroke-width="0.5" fill="none"/><path d="M16 38 Q30 34 44 38" stroke="#1a1008" stroke-width="0.5" fill="none"/><circle cx="22" cy="32" r="1" fill="#1a1008"/><circle cx="38" cy="32" r="1" fill="#1a1008"/></svg>`,
  molotov: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="molG" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff8a30"/><stop offset="100%" stop-color="#cc4400"/></linearGradient></defs><path d="M22 18 L22 30 Q22 50 30 50 Q38 50 38 30 L38 18 Z" fill="url(#molG)" stroke="#1a0808" stroke-width="1"/><rect x="24" y="10" width="12" height="10" fill="#5a3a20" stroke="#1a0808" stroke-width="1"/><path d="M28 5 Q30 0 32 5 Q33 8 30 10 Q27 8 28 5 Z" fill="#ff5500"/><path d="M26 35 Q30 40 34 35" stroke="#fff" stroke-width="0.5" fill="none" opacity="0.5"/></svg>`,
  decoy: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="14" width="16" height="34" rx="3" fill="#5a6878" stroke="#1a2a38" stroke-width="1"/><rect x="24" y="10" width="12" height="6" fill="#3a4a58" stroke="#1a2a38" stroke-width="1"/><text x="30" y="35" text-anchor="middle" font-family="Rajdhani" font-size="8" font-weight="700" fill="#fff">DEC</text><circle cx="30" cy="13" r="2" fill="#4fc3f7"/></svg>`
};

// ---- 段位徽章 SVG ----
const RANK_SVG = (color, level) => `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="rk${level}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="${color}"/><stop offset="100%" stop-color="${color}88"/></linearGradient></defs>
  <polygon points="32,4 58,18 58,46 32,60 6,46 6,18" fill="url(#rk${level})" stroke="${color}" stroke-width="2" opacity="0.85"/>
  <polygon points="32,12 50,22 50,42 32,52 14,42 14,22" fill="${color}33" stroke="${color}" stroke-width="1"/>
  ${level <= 4 ? '<path d="M22 32 L30 38 L42 24" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>' : ''}
  ${level >= 5 && level <= 10 ? '<polygon points="32,20 35,29 44,29 37,35 40,44 32,38 24,44 27,35 20,29 29,29" fill="#fff" opacity="0.9"/>' : ''}
  ${level >= 11 && level <= 14 ? '<g fill="#fff"><polygon points="32,18 35,28 32,38 29,28"/><polygon points="22,28 32,25 42,28 32,31"/></g>' : ''}
  ${level >= 15 ? '<g><polygon points="32,16 36,28 32,40 28,28" fill="#ffd700"/><circle cx="32" cy="28" r="3" fill="#fff"/></g>' : ''}
</svg>`;

// ---- 玩家头像 SVG ----
const PLAYER_AVATAR = (bg, accent, code) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pl${code}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="${bg}"/><stop offset="100%" stop-color="${bg}33"/></linearGradient>
    <radialGradient id="plg${code}" cx="50%" cy="40%"><stop offset="0%" stop-color="${accent}44"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  </defs>
  <rect width="220" height="200" fill="url(#pl${code})"/>
  <rect width="220" height="200" fill="url(#plg${code})"/>
  <!-- 头像剪影 -->
  <circle cx="110" cy="80" r="32" fill="${accent}99"/>
  <path d="M60 200 Q60 130 110 130 Q160 130 160 200 Z" fill="${accent}99"/>
  <!-- 装备元素 -->
  <rect x="80" y="65" width="60" height="20" fill="${accent}" opacity="0.6" rx="2"/>
  <line x1="85" y1="80" x2="135" y2="80" stroke="${bg}" stroke-width="2"/>
  <!-- 网格背景 -->
  <g stroke="${accent}" stroke-width="0.5" opacity="0.15">
    <line x1="0" y1="50" x2="220" y2="50"/>
    <line x1="0" y1="100" x2="220" y2="100"/>
    <line x1="0" y1="150" x2="220" y2="150"/>
    <line x1="55" y1="0" x2="55" y2="200"/>
    <line x1="110" y1="0" x2="110" y2="200"/>
    <line x1="165" y1="0" x2="165" y2="200"/>
  </g>
  <!-- 标记 -->
  <text x="200" y="30" text-anchor="end" font-family="Rajdhani" font-size="11" font-weight="700" fill="${accent}" opacity="0.7">PRO</text>
</svg>`;

// ---- 赛事横幅 SVG ----
const TOUR_BANNER = (color1, color2, name) => `<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="tb${name}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${color1}"/><stop offset="100%" stop-color="${color2}"/></linearGradient>
    <pattern id="tp${name}" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 20 L40 20 M20 0 L20 40" stroke="${color1}" stroke-width="0.5" opacity="0.3"/></pattern>
  </defs>
  <rect width="320" height="140" fill="url(#tb${name})"/>
  <rect width="320" height="140" fill="url(#tp${name})"/>
  <!-- 奖杯 -->
  <g transform="translate(120 30)">
    <path d="M30 10 L50 10 L48 30 Q40 40 32 40 Q24 40 16 30 L14 10 L34 10 Z" fill="#ffd700" stroke="#5a3810" stroke-width="1.5"/>
    <rect x="28" y="40" width="8" height="14" fill="#ffd700"/>
    <rect x="20" y="54" width="24" height="6" fill="#ffd700"/>
    <path d="M14 14 L8 18 L8 26 L14 22 Z M50 14 L56 18 L56 26 L50 22 Z" fill="#ffd700" stroke="#5a3810" stroke-width="1"/>
  </g>
  <!-- 装饰线 -->
  <g stroke="${color1}" stroke-width="1" opacity="0.6">
    <line x1="0" y1="100" x2="320" y2="100"/>
    <line x1="0" y1="115" x2="320" y2="115" opacity="0.4"/>
  </g>
</svg>`;

// ---- 新闻配图 SVG ----
const NEWS_VISUAL = (idx, color) => {
  const visuals = [
    `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="nv0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${color}"/><stop offset="100%" stop-color="${color}33"/></linearGradient></defs>
      <rect width="320" height="200" fill="#0d1620"/>
      <rect width="320" height="200" fill="url(#nv0)" opacity="0.4"/>
      <!-- 地图轮廓 -->
      <g stroke="${color}" stroke-width="2" fill="none" opacity="0.7">
        <rect x="60" y="60" width="60" height="50"/>
        <rect x="200" y="80" width="70" height="60"/>
        <line x1="120" y1="85" x2="200" y2="110"/>
      </g>
      <text x="160" y="180" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="${color}" opacity="0.6">UPDATE</text>
    </svg>`,
    `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#1a1020"/>
      <!-- 奖杯 -->
      <g transform="translate(110 40)">
        <path d="M40 20 L60 20 L58 60 Q50 80 40 80 Q30 80 22 60 L20 20 Z" fill="${color}" opacity="0.8"/>
        <rect x="36" y="80" width="8" height="20" fill="${color}"/>
        <rect x="26" y="100" width="28" height="8" fill="${color}"/>
      </g>
      <text x="160" y="180" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="${color}" opacity="0.6">TOURNAMENT</text>
    </svg>`,
    `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#102030"/>
      <!-- 准星 -->
      <g stroke="${color}" stroke-width="3" fill="none">
        <circle cx="160" cy="100" r="40"/>
        <line x1="160" y1="50" x2="160" y2="80"/>
        <line x1="160" y1="120" x2="160" y2="150"/>
        <line x1="110" y1="100" x2="140" y2="100"/>
        <line x1="180" y1="100" x2="210" y2="100"/>
      </g>
      <circle cx="160" cy="100" r="3" fill="${color}"/>
      <text x="160" y="180" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="${color}" opacity="0.6">GUIDE</text>
    </svg>`,
    `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0d1820"/>
      <!-- 盾牌 -->
      <path d="M160 30 L210 50 L210 110 Q210 140 160 170 Q110 140 110 110 L110 50 Z" fill="none" stroke="${color}" stroke-width="3"/>
      <path d="M140 90 L155 105 L185 75" stroke="${color}" stroke-width="3" fill="none"/>
      <text x="160" y="190" text-anchor="middle" font-family="Rajdhani" font-size="14" font-weight="700" fill="${color}" opacity="0.6">SECURITY</text>
    </svg>`
  ];
  return visuals[idx % visuals.length];
};

// ---- Tip 卡片图 SVG ----
const TIP_VISUAL = (color, type) => {
  const map = {
    aim: `<g><circle cx="160" cy="80" r="35" fill="none" stroke="${color}" stroke-width="2"/><circle cx="160" cy="80" r="20" fill="none" stroke="${color}" stroke-width="2"/><circle cx="160" cy="80" r="3" fill="${color}"/><line x1="160" y1="40" x2="160" y2="65" stroke="${color}" stroke-width="2"/><line x1="160" y1="95" x2="160" y2="120" stroke="${color}" stroke-width="2"/><line x1="120" y1="80" x2="145" y2="80" stroke="${color}" stroke-width="2"/><line x1="175" y1="80" x2="200" y2="80" stroke="${color}" stroke-width="2"/></g>`,
    move: `<g><path d="M50 100 L100 80 L160 90 L220 70 L290 95" stroke="${color}" stroke-width="3" fill="none" stroke-dasharray="5,5"/><circle cx="100" cy="80" r="6" fill="${color}"/><circle cx="220" cy="70" r="6" fill="${color}"/><polygon points="285,85 295,95 285,105" fill="${color}"/></g>`,
    nade: `<g><circle cx="100" cy="60" r="14" fill="${color}66" stroke="${color}" stroke-width="2"/><circle cx="180" cy="100" r="20" fill="${color}66" stroke="${color}" stroke-width="2"/><circle cx="240" cy="60" r="10" fill="${color}66" stroke="${color}" stroke-width="2"/><path d="M70 30 Q140 50 170 90" stroke="${color}" stroke-width="2" fill="none" stroke-dasharray="3,3"/></g>`,
    comms: `<g><circle cx="100" cy="80" r="20" fill="none" stroke="${color}" stroke-width="2"/><circle cx="220" cy="80" r="20" fill="none" stroke="${color}" stroke-width="2"/><path d="M120 80 L200 80" stroke="${color}" stroke-width="2"/><circle cx="100" cy="80" r="6" fill="${color}"/><circle cx="220" cy="80" r="6" fill="${color}"/><path d="M140 60 Q160 50 180 60" stroke="${color}" stroke-width="1" fill="none" opacity="0.5"/><path d="M140 100 Q160 110 180 100" stroke="${color}" stroke-width="1" fill="none" opacity="0.5"/></g>`,
    mental: `<g><path d="M160 30 Q120 30 100 60 Q80 90 100 120 Q120 140 160 140 Q200 140 220 120 Q240 90 220 60 Q200 30 160 30 Z" fill="none" stroke="${color}" stroke-width="2"/><circle cx="135" cy="75" r="4" fill="${color}"/><circle cx="185" cy="75" r="4" fill="${color}"/><path d="M135 105 Q160 120 185 105" stroke="${color}" stroke-width="2" fill="none"/></g>`,
    util: `<g><rect x="120" y="40" width="80" height="80" fill="none" stroke="${color}" stroke-width="2"/><line x1="160" y1="40" x2="160" y2="120" stroke="${color}" stroke-width="2"/><line x1="120" y1="80" x2="200" y2="80" stroke="${color}" stroke-width="2"/><circle cx="140" cy="60" r="4" fill="${color}"/><circle cx="180" cy="60" r="4" fill="${color}"/><circle cx="140" cy="100" r="4" fill="${color}"/><circle cx="180" cy="100" r="4" fill="${color}"/></g>`
  };
  return `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="160" fill="#0d1620"/>${map[type] || map.aim}</svg>`;
};
