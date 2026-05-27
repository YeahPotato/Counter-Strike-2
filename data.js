// ========================= 数据 =========================
const MAPS = [
  { name: 'Dust II', code: 'de_dust2', type: '经典爆破', radar: 'dust2',
    tags: ['T侧优势', '快节奏', '新手友好'], tWinRate: 52, avgRounds: 24, pickRate: 28, color: '#ffb74d',
    desc: 'CS 历史上最具标志性的地图，每个 CS 玩家的入门必修课。中路控制是核心，T 侧通过中门和 B 隧道施压，CT 侧需要平衡 A/B 防守兵力。地图开阔、视线清晰，非常适合训练枪法和报点。',
    callouts: ['A大', 'A小道', 'A坑', '中门', '中下道', 'B隧道', 'B门', 'B车', '警家', '匪家', '短箱', '长箱', '双门'],
    strategies: { T: ['Rush B（全队冲B隧道+烟雾掩护）', '中门控制 → A小道分割两点', 'A大慢打 + 小道夹A 经典战术', '默认展开+中路施压压制信息', '诈打B隧道转点A大'], CT: ['A大1人卡长箱 + 小道1人卡警家', 'B区2人防守（隧道口+车）', '中门1人扔反闪获取信息', '灵活换防配合烟弹断点', '保枪策略：先撤后回'] }
  },
  { name: 'Mirage', code: 'de_mirage', type: '经典爆破', radar: 'mirage',
    tags: ['平衡', '道具密集', '战术深度'], tWinRate: 49, avgRounds: 26, pickRate: 22, color: '#4fc3f7',
    desc: '欧洲服务器最热门地图，道具点位最丰富。A 点进攻路线丰富（Palace / Apartments / Ramp），中路连接是关键信息节点。Mirage 是衡量玩家战术理解的最佳地图。',
    callouts: ['Palace', 'Apartments', 'Jungle', 'Window', 'Connector', 'Stairs', 'Market', 'B Apartments', 'Ramp', 'Ticket', 'Underpass', 'Top Mid'],
    strategies: { T: ['A点夹攻（palace + apart + jungle 三线）', '中窗烟 → 连接控制 → 切B', 'B rush 配合 market 分割', '默认展开中路博弈，根据信息切点', '诈A真B 经典套路'], CT: ['A点三区各一人（jungle/connector/site）', '中路connector防守+反闪', 'B区两人配合 retake（apart+ramp）', '反道具消耗 T 侧经济', '关键 retake 烟雾扔法'] }
  },
  { name: 'Inferno', code: 'de_inferno', type: '经典爆破', radar: 'inferno',
    tags: ['CT优势', '巷战', '意大利风情'], tWinRate: 46, avgRounds: 27, pickRate: 18, color: '#ef5350',
    desc: 'CT 侧优势地图，意大利乡村巷战。Banana 控制权决定 B 区攻防，A 点长距离交火考验枪法和道具配合。窄巷和转角使 utility 使用变得至关重要。',
    callouts: ['Banana', 'Pit', 'Library', 'Apartments', 'Arch', 'Boiler', 'Short', 'Balcony', 'CT', 'Bench', 'Construction', 'Coffin'],
    strategies: { T: ['Banana 控制是 B 攻前提（烟+火+闪）', 'A点慢打配合 Library 烟+ Pit 火', '中路夹攻配合 smoke 切短', 'ECO 局偷人建立人数优势', 'Apartments 推进配合屋顶绕后'], CT: ['Banana 前压信息获取（火+反闪）', 'A点 Pit + Library 卡点', 'Short 一人灵活换防', 'Retake 时利用道具优势（烟+火）', '充分利用 CT 道具优势消耗T'] }
  },
  { name: 'Nuke', code: 'de_nuke', type: '垂直爆破', radar: 'nuke',
    tags: ['CT强势', '垂直结构', '信息战'], tWinRate: 42, avgRounds: 25, pickRate: 8, color: '#ab47bc',
    desc: 'CS2 中最具战术深度的地图，CT 优势最显著。上下两层结构使信息收集和沟通变得极其重要，A 点 Heaven 卡位、B 点垂直防守是 CT 的招牌战术。',
    callouts: ['Heaven', 'Hell', 'Ramp', 'Vent', 'Silo', 'T Roof', 'Outside', 'Secret', 'Decon', 'B Ramp', 'Squeaky', 'Toxic', 'Trophy'],
    strategies: { T: ['外场控制是核心（一人架garage信息）', 'Ramp 推进配合屋顶诈打', '通风管奇袭 B 经典战术', '声东击西利用垂直结构', 'Squeaky 偷人战术'], CT: ['内场 Heaven 卡点（上下双重）', '外场前压信息（控屋顶）', 'B Ramp 深度防守', '充分利用高低位优势', '反 Vent 战术防偷'] }
  },
  { name: 'Overpass', code: 'de_overpass', type: '爆破', radar: 'overpass',
    tags: ['CT优势', '水道', '复杂地形'], tWinRate: 47, avgRounds: 26, pickRate: 10, color: '#66bb6a',
    desc: '柏林公园主题，水道和连接通道使地图攻防节奏独特。A 点长距离交火配合近距离混战，B 点多入口（短/长/水道）进攻选择丰富。地形复杂，需要大量地图熟悉度。',
    callouts: ['Water', 'Connector', 'Playground', 'Pipes', 'Toilet', 'Monster', 'Bank', 'B Short', 'Heaven', 'Truck', 'Park', 'Sandwich'],
    strategies: { T: ['水道控制提供 A/B 双向选择', 'B 点多入口同步进攻（短+长+水道）', '连接区域 Connector 信息获取', 'Playground 控制配合短A', 'Bank 强势开局'], CT: ['Water 前压或反闪信息', 'A 点 Heaven + Truck 远距离', 'B 点密集防守（Toilet+Pillar）', 'Retake 配合道具链（烟+火+闪）', '保枪节奏切换'] }
  },
  { name: 'Ancient', code: 'de_ancient', type: '爆破', radar: 'ancient',
    tags: ['新图', '玛雅遗迹', '开放交火'], tWinRate: 48, avgRounds: 25, pickRate: 7, color: '#ff8a65',
    desc: 'CS2 新加入的竞技地图，玛雅遗迹主题视觉惊艳。A 点开放区域多，适合长距离交火，B 点巷战密集，转角处处都是阴人位。战术体系还在不断开发，先掌握者占优。',
    callouts: ['A Main', 'A Ramp', 'Donut', 'Temple', 'B Ramp', 'B Main', 'Cave', 'Mid', 'Heaven', 'Pillars', 'Boss'],
    strategies: { T: ['A 主道快打或慢清', 'B ramp 配合道具', '中路控制提供信息', '灵活选择 A/B 进攻点', '残局诈包战术'], CT: ['A 点远距离卡点（Heaven）', 'B 点近战防守（Cave/Pillars）', '中路灵活换防', 'Retake 利用开阔地形', '前压信息收集'] }
  },
  { name: 'Anubis', code: 'de_anubis', type: '爆破', radar: 'anubis',
    tags: ['埃及', '中路关键', '新图'], tWinRate: 48, avgRounds: 25, pickRate: 5, color: '#ffee58',
    desc: '埃及神庙主题，中路连接是关键。B 点通道狭窄，A 点相对开放，中路控制权直接决定进攻方向。运河（Canal）提供了独特的绕后机会。',
    callouts: ['A Main', 'Mid', 'B Main', 'Palace', 'Canal', 'B Ramp', 'Connector', 'Heaven', 'Window', 'Watercut'],
    strategies: { T: ['中路控制是进攻核心', 'A 点从 main/palace 双路夹攻', 'B 点慢打清角配合道具', 'Canal 提供绕后机会', 'Window 控制压制 CT'], CT: ['中路深度防守（mid+window）', 'A 点 Palace 卡点制高点', 'B 点近距离强势', '信息收集决定换防时机', 'Retake 配合烟雾分割'] }
  },
  { name: 'Vertigo', code: 'de_vertigo', type: '爆破', radar: 'vertigo',
    tags: ['高层建筑', '快速节奏', '电梯'], tWinRate: 50, avgRounds: 23, pickRate: 4, color: '#4fc3f7',
    desc: '摩天大楼施工现场主题，节奏紧凑。电梯和楼梯提供了快速的进攻路线，A/B 点攻防转换迅速。地图边缘是悬崖，谨慎走位避免坠落。',
    callouts: ['A Ramp', 'Elevator', 'Stairs', 'B Ramp', 'Pillar', 'CT', 'T Spawn', 'Sandwich', 'Headshot', 'Heaven', 'Mid'],
    strategies: { T: ['电梯快攻 A 点（Heaven）', '楼梯灵活转点制造节奏', 'B 点慢打配合道具（B ramp）', '利用节奏变化打乱 CT', '中路烟雾分割'], CT: ['A 点多层防守（Sandwich+Heaven）', '电梯信息收集', 'B 点激进前压', '快速回防策略', '边缘 utility 使用'] }
  },
  { name: 'Office', code: 'cs_office', type: '人质救援', radar: 'office',
    tags: ['人质图', '室内', 'CT进攻'], tWinRate: 55, avgRounds: 20, pickRate: 2, color: '#90a4ae',
    desc: '经典人质救援地图，CT 侧进攻。办公室内部走廊和房间结构复杂，需要团队配合推进。T 侧人数较少，需要充分利用地图熟悉度防守。',
    callouts: ['Main Hall', 'Side Hall', 'Back Office', 'Garage', 'Conference', 'Kitchen', 'Storage', 'Vent', 'Snowy'],
    strategies: { T: ['利用拐角和掩体防守', '分散站位避免被清', '信息收集和及时转点', '时间消耗战术（耗到回合结束）', '人质点近距离防守'], CT: ['多路同步推进（Main+Side+Garage）', '闪光弹清角是关键', '快速定位人质位置', '掩护人质撤离回CT', '时间管理避免被反包'] }
  }
];

const WEAPONS = {
  '步枪': [
    { name: 'AK-47', side: 't-side', price: '$2,700', killReward: '$300', damage: 36, firerate: 80, accuracy: 65, range: 72, recoil: 75,
      tip: '一发爆头是 AK 的灵魂。远距离点射，近距离压枪扫射。前 10 发压枪轨迹呈 T 形（先抬后右）。25-30 米内一枪爆头。' },
    { name: 'M4A4', side: 'ct', price: '$3,100', killReward: '$300', damage: 33, firerate: 78, accuracy: 72, range: 70, recoil: 65,
      tip: '稳定性优于 AK，但无法一枪爆头（除超近距离）。30 发弹匣，适合防守卡点和 retake，中远距离表现优秀。' },
    { name: 'M4A1-S', side: 'ct', price: '$2,900', killReward: '$300', damage: 33, firerate: 75, accuracy: 80, range: 72, recoil: 55,
      tip: '消音版本，精度更高、后坐力更小。弹匣仅 20 发，需精准射击。无穿透时杀伤反而更高，适合单点卡位。' },
    { name: 'AWP', side: 'both', price: '$4,750', killReward: '$100', damage: 100, firerate: 25, accuracy: 95, range: 100, recoil: 95,
      tip: '一枪一个的狙击之王。移动中开枪精度极差，必须站定射击。经济不足时不要强起，AWP 死亡损失巨大。' },
    { name: 'SG 553', side: 't-side', price: '$3,000', killReward: '$300', damage: 30, firerate: 75, accuracy: 70, range: 80, recoil: 70,
      tip: '开镜后远距离精准度极高，适合中远距离架枪。开镜移动速度慢，注意走位。一枪爆头能力。' },
    { name: 'AUG', side: 'ct', price: '$3,300', killReward: '$300', damage: 28, firerate: 75, accuracy: 75, range: 78, recoil: 60,
      tip: 'CT 侧开镜步枪，防守架枪利器。开镜后精度大幅提升，适合远距离卡点。但近距离表现一般。' },
    { name: 'FAMAS', side: 'ct', price: '$2,050', killReward: '$300', damage: 30, firerate: 70, accuracy: 65, range: 65, recoil: 55,
      tip: 'CT 侧便宜步枪，有连发模式。强起局首选，3 连发模式中距离稳定杀伤。性价比之王。' },
    { name: 'Galil AR', side: 't-side', price: '$1,800', killReward: '$300', damage: 30, firerate: 75, accuracy: 60, range: 65, recoil: 65,
      tip: 'T 侧强起神器。后坐力比 AK 大但价格便宜，适合连败局或经济局过渡。前 5 发还是比较稳的。' }
  ],
  '微冲': [
    { name: 'MP9', side: 'ct', price: '$1,250', killReward: '$600', damage: 22, firerate: 90, accuracy: 50, range: 30, recoil: 40,
      tip: 'CT 侧 ECO 局神器，杀人奖励 $600。近距离秒人，远距离疲软。激进前压和近距离遭遇战首选。' },
    { name: 'MAC-10', side: 't-side', price: '$1,050', damage: 23, killReward: '$600', firerate: 88, accuracy: 45, range: 28, recoil: 42,
      tip: 'T 侧最强微冲，近距离 DPS 爆表。跑打精准度比步枪高很多，适合突脸打法和 ECO 翻盘。' },
    { name: 'UMP-45', side: 'both', price: '$1,200', killReward: '$600', damage: 26, firerate: 70, accuracy: 55, range: 38, recoil: 48,
      tip: '微冲中伤害最高，中距离也有一定威胁。ECO 局和强起局不错的选择，平衡性最好的微冲。' },
    { name: 'P90', side: 'both', price: '$2,350', killReward: '$300', damage: 20, firerate: 92, accuracy: 48, range: 25, recoil: 38,
      tip: '50 发弹匣，跑打精准度尚可。适合新手和防 Rush，但性价比不如步枪。后坐力小但伤害低。' },
    { name: 'MP7', side: 'both', price: '$1,500', killReward: '$600', damage: 24, firerate: 82, accuracy: 60, range: 35, recoil: 50,
      tip: '德制微冲，30 发弹匣。中近距离平衡性好，2 发爆头近距离致命。' },
    { name: 'MP5-SD', side: 'both', price: '$1,500', killReward: '$600', damage: 24, firerate: 78, accuracy: 70, range: 38, recoil: 45,
      tip: '消音版本，精度高且开火无声。适合潜伏战术和 1v1 残局，听不到方位的优势巨大。' }
  ],
  '手枪': [
    { name: 'Desert Eagle', side: 'both', price: '$700', killReward: '$300', damage: 53, firerate: 30, accuracy: 70, range: 60, recoil: 88,
      tip: 'ECO 局翻盘利器，俗称 "沙鹰"。一枪爆头，两枪身体。但射速慢后坐力大，每枪之间需要等回复。' },
    { name: 'USP-S', side: 'ct', price: '$200', killReward: '$300', damage: 35, firerate: 50, accuracy: 75, range: 45, recoil: 30,
      tip: 'CT 默认手枪，消音无声射击。远距离一枪爆头无甲对手，手枪局精准卡点首选。' },
    { name: 'Glock-18', side: 't-side', price: '$200', killReward: '$300', damage: 30, firerate: 55, accuracy: 55, range: 35, recoil: 25,
      tip: 'T 默认手枪，近距离三连发模式爆发力强（按 B/3）。手枪局 Rush 配合三连发有奇效。' },
    { name: 'P250', side: 'both', price: '$300', killReward: '$300', damage: 38, firerate: 55, accuracy: 65, range: 48, recoil: 35,
      tip: '性价比之王，$300 买一把能爆头的手枪。ECO 局首选，远距离精准度不错，弹匣 13 发。' },
    { name: 'Tec-9', side: 't-side', price: '$500', killReward: '$300', damage: 33, firerate: 65, accuracy: 50, range: 32, recoil: 50,
      tip: 'T 侧 ECO 神器，近距离疯狂输出。移动中精准度不错，适合冲锋打法。爆头致命。' },
    { name: 'Five-SeveN', side: 'ct', price: '$500', killReward: '$300', damage: 32, firerate: 60, accuracy: 62, range: 40, recoil: 35,
      tip: 'CT 侧强力手枪，弹匣大（20发）精度高。ECO 局配合甲是不错的强起选择。' },
    { name: 'CZ75-Auto', side: 'both', price: '$500', killReward: '$100', damage: 32, firerate: 75, accuracy: 50, range: 30, recoil: 60,
      tip: '全自动手枪，但杀人奖励仅 $100。近距离突脸有奇效，远距离精度差。' },
    { name: 'Dual Berettas', side: 'both', price: '$300', killReward: '$300', damage: 28, firerate: 60, accuracy: 50, range: 30, recoil: 40,
      tip: '双枪流派，弹匣大但精度差。ECO 局可选，但实战中不如 P250 实用。' }
  ],
  '重武器': [
    { name: 'Nova', side: 'both', price: '$1,050', killReward: '$900', damage: 45, firerate: 35, accuracy: 35, range: 15, recoil: 60,
      tip: '近距离伤害极高但衰减严重。只在极近距离有效，适合角落卡点和 ECO 局。' },
    { name: 'MAG-7', side: 'ct', price: '$1,300', killReward: '$900', damage: 48, firerate: 30, accuracy: 30, range: 12, recoil: 65,
      tip: 'CT 侧近距离之王，一枪一个不是梦。但有效射程极短（5米内），必须等敌人近身。' },
    { name: 'XM1014', side: 'both', price: '$2,000', killReward: '$900', damage: 42, firerate: 70, accuracy: 30, range: 14, recoil: 70,
      tip: '半自动霰弹枪，连续射击能力强。近距离扫射利器，retake 时清角效果好。' },
    { name: 'Sawed-Off', side: 't-side', price: '$1,100', killReward: '$900', damage: 50, firerate: 30, accuracy: 30, range: 10, recoil: 70,
      tip: 'T 侧锯短霰弹枪，近距离爆炸伤害。但射程极短（3米内），适合角落埋伏。' },
    { name: 'Negev', side: 'both', price: '$1,700', killReward: '$300', damage: 30, firerate: 95, accuracy: 25, range: 40, recoil: 85,
      tip: '前几发散到飞起，持续射击 1 秒后精度反而提升。压制用武器，实战价值有限。' },
    { name: 'M249', side: 'both', price: '$2,250', killReward: '$300', damage: 32, firerate: 90, accuracy: 30, range: 45, recoil: 80,
      tip: '机枪类武器，100 发弹匣。压制力强但移动速度慢，性价比低。' }
  ]
};

const GRENADES = [
  { name: '烟雾弹 (Smoke)', price: '$300', icon: 'smoke', desc: '阻挡视线，封锁通道，掩护进攻路线。CS2 中烟雾可被 HE 炸开 1 秒露出敌人位置。', stats: [['持续', '18s'], ['半径', '350u']] },
  { name: '闪光弹 (Flashbang)', price: '$200', icon: 'flash', desc: '致盲敌人 1-5 秒，是进攻方最重要的道具。可携带 2 个，配合队友闪进效果最佳。', stats: [['闪盲', '1-5s'], ['延时', '1.5s']] },
  { name: '高爆手雷 (HE)', price: '$300', icon: 'he', desc: '范围伤害最高 98 点，能炸开烟雾。残血敌人补刀利器，也能用来清角。', stats: [['伤害', '98HP'], ['半径', '400u']] },
  { name: '燃烧弹 (Molotov/Inc)', price: '$400/$600', icon: 'molotov', desc: 'T 燃烧弹/CT 燃烧器，封锁区域 7 秒。逼迫敌人移位、清点、阻断进攻路线。', stats: [['持续', '7s'], ['伤害', '40/s']] },
  { name: '诱饵弹 (Decoy)', price: '$50', icon: 'decoy', desc: '模拟枪声，诱导敌人误判位置。$50 的极致性价比，残局欺骗利器。', stats: [['持续', '15s'], ['价格', '$50']] }
];

const CROSSHAIR_PRESETS = [
  { name: 's1mple', player: 'NAVI · AWP', size: 2, thick: 0.5, gap: -2, color: '#00ff00', dot: 0, outline: 0, avatar: '#4fc3f7' },
  { name: 'ZywOo', player: 'Vitality · AWP', size: 1.5, thick: 1, gap: -2, color: '#00ff00', dot: 1, outline: 0, avatar: '#ffb74d' },
  { name: 'NiKo', player: 'G2 · Rifler', size: 2, thick: 0.5, gap: 0, color: '#ff0000', dot: 0, outline: 1, avatar: '#ef5350' },
  { name: 'donk', player: 'Spirit · Rifler', size: 1, thick: 1, gap: -3, color: '#00ffff', dot: 1, outline: 0, avatar: '#66bb6a' },
  { name: 'm0NESY', player: 'Falcons · AWP', size: 2, thick: 0.5, gap: -1, color: '#00ff00', dot: 0, outline: 0, avatar: '#ab47bc' },
  { name: 'ropz', player: 'FaZe · Rifler', size: 1.5, thick: 1, gap: -2, color: '#ffff00', dot: 0, outline: 0, avatar: '#ffee58' },
  { name: 'device', player: 'Astralis · AWP', size: 2.5, thick: 0.5, gap: -1, color: '#ff00ff', dot: 0, outline: 1, avatar: '#e91e63' }
];

const RANKS = [
  { name: 'Silver I', color: '#bdbdbd', level: 1 }, { name: 'Silver II', color: '#bdbdbd', level: 2 },
  { name: 'Silver III', color: '#bdbdbd', level: 3 }, { name: 'Silver IV', color: '#bdbdbd', level: 4 },
  { name: 'Silver Elite', color: '#9ccc65', level: 5 }, { name: 'Silver Elite Master', color: '#9ccc65', level: 6 },
  { name: 'Gold Nova I', color: '#fdd835', level: 7 }, { name: 'Gold Nova II', color: '#fdd835', level: 8 },
  { name: 'Gold Nova III', color: '#fdd835', level: 9 }, { name: 'Gold Nova Master', color: '#ffb74d', level: 10 },
  { name: 'MG I', color: '#ffb74d', level: 11 }, { name: 'MG II', color: '#ffb74d', level: 12 },
  { name: 'MG Elite', color: '#ff8a65', level: 13 }, { name: 'DMG', color: '#ef5350', level: 14 },
  { name: 'LE', color: '#e91e63', level: 15 }, { name: 'LEM', color: '#ab47bc', level: 16 },
  { name: 'SMFC', color: '#9c27b0', level: 17 }, { name: 'Global Elite', color: '#fdd835', level: 18 }
];

const TIPS = [
  { type: 'aim', color: '#ef5350', emoji: '🎯', title: '枪法训练（基础中的基础）',
    text: '枪法是 CS2 的根基，没有枪法再好的战术也无法执行。每天坚持训练，3 个月内可见明显提升。',
    list: ['每天 15 分钟 aim_botz 死靶练习（瞄头）', '死斗模式热身 2-3 局再排位', '练习压枪控制（Recoil Master 创意工坊）', '专注头线高度，减少瞄准时鼠标垂直移动', '使用相同灵敏度（推荐 800DPI × 1.5-2 游戏内）'] },
  { type: 'move', color: '#4fc3f7', emoji: '🏃', title: '走位意识（站桩等死等于自杀）',
    text: '好的走位让你在交火前就占据优势。CS2 中 peeker\'s advantage 让主动权变得更重要。',
    list: ['预瞄常见敌人出现位置（瞄准头线高度）', '利用 peeker\'s advantage 主动出击 (200ms 优势)', '避免同时面对多个敌人（侧身切角）', '学习 shoulder peek 获取信息不送命', '使用 jiggle peek 引诱 AWP 开枪'] },
  { type: 'nade', color: '#ffb74d', emoji: '💣', title: '道具运用（多打一人的关键）',
    text: '道具是 CS2 中的战力倍增器。每张地图熟练 5-10 个核心道具点位，胜率提升 30%+。',
    list: ['烟雾弹封阻视线创造空间和时间', '闪光弹清角和致盲（配合队友闪进）', '燃烧弹清点逼迫敌人移位', '手雷补伤害和穿墙清角（98 伤害可秒残血）', '诱饵弹欺骗信息（$50 性价比之王）'] },
  { type: 'comms', color: '#ab47bc', emoji: '📡', title: '团队沟通（信息差最致命）',
    text: 'CS2 是 5v5 团队竞技，信息差就是胜负差。学会简洁有效的报点和沟通。',
    list: ['报点格式：位置 + 人数（"A大2人"）', '报告敌人血量和装备（"AK 残血"）', '及时通知队友死亡信息（"我死了，1人A大"）', '进攻/防守时统一决策（"打A，全A"）', '少说废话，关键信息优先'] },
  { type: 'mental', color: '#66bb6a', emoji: '🧠', title: '心态管理（CS2 心理博弈）',
    text: 'CS2 是一个心理博弈游戏，心态崩溃比技术差距更致命。好心态 = 高胜率。',
    list: ['连败 3 局休息 10 分钟，避免上头', '不要追责队友，专注自己提升', 'ECO 局不气馁，经济局也是策略', '保持积极心态，正面影响团队氛围', '复盘失败原因而非情绪化输出'] },
  { type: 'util', color: '#4fc3f7', emoji: '🔧', title: '实用工具（高效训练）',
    text: '善用外部工具事半功倍。职业选手都用的训练工具，业余玩家更应该用。',
    list: ['CS2 控制台练习道具（sv_cheats 1; sv_grenade_trajectory 1）', 'Steam 创意工坊：aim_botz / Recoil Master / Yprac', '复盘 Demo 分析失误（看自己的死亡视角）', 'Leetify 数据分析个人弱项', 'YouTube 学习职业选手 POV'] }
];

const PROS = [
  { name: 's1mple', real: 'Oleksandr Kostyliev', team: 'NAVI', role: 'AWP', rating: '1.30', headshot: '40%', kd: '1.32', adr: '85', bg: '#ffeb3b', accent: '#ff6f00', code: 's1' },
  { name: 'ZywOo', real: 'Mathieu Herbaut', team: 'VITALITY', role: 'AWP', rating: '1.31', headshot: '45%', kd: '1.35', adr: '88', bg: '#1a237e', accent: '#4fc3f7', code: 'zy' },
  { name: 'donk', real: 'Danil Kryshkovets', team: 'SPIRIT', role: 'Rifler', rating: '1.28', headshot: '52%', kd: '1.29', adr: '90', bg: '#212121', accent: '#fdd835', code: 'dn' },
  { name: 'NiKo', real: 'Nikola Kovač', team: 'G2', role: 'Rifler', rating: '1.21', headshot: '55%', kd: '1.22', adr: '82', bg: '#212121', accent: '#ef5350', code: 'nk' },
  { name: 'm0NESY', real: 'Ilya Osipov', team: 'FALCONS', role: 'AWP', rating: '1.25', headshot: '42%', kd: '1.26', adr: '83', bg: '#0d47a1', accent: '#4fc3f7', code: 'mn' },
  { name: 'ropz', real: 'Robin Kool', team: 'FAZE', role: 'Rifler', rating: '1.18', headshot: '50%', kd: '1.19', adr: '78', bg: '#b71c1c', accent: '#ffb74d', code: 'rp' },
  { name: 'sh1ro', real: 'Dmitry Sokolov', team: 'CLOUD9', role: 'AWP', rating: '1.20', headshot: '38%', kd: '1.21', adr: '76', bg: '#1565c0', accent: '#4fc3f7', code: 'sh' },
  { name: 'Twistzz', real: 'Russel Van Dulken', team: 'FAZE', role: 'Rifler', rating: '1.16', headshot: '48%', kd: '1.17', adr: '77', bg: '#b71c1c', accent: '#66bb6a', code: 'tw' }
];

const TOURNAMENTS = [
  { name: 'IEM Cologne 2026', status: 'live', prize: '$1,000,000', date: '2026-05-25 ~ 06-01', teams: '24 队', map: '总决赛 BO5', color1: '#ff6f00', color2: '#bf360c' },
  { name: 'BLAST Premier Spring Final', status: 'upcoming', prize: '$425,000', date: '2026-06-08 ~ 06-15', teams: '8 队', map: '亚特兰大', color1: '#1a237e', color2: '#4a148c' },
  { name: 'PGL Major Copenhagen 2026', status: 'upcoming', prize: '$1,250,000', date: '2026-07-12 ~ 07-28', teams: '24 队', map: '哥本哈根', color1: '#0d47a1', color2: '#1976d2' },
  { name: 'ESL Pro League S20', status: 'finished', prize: '$850,000', date: '2026-04-10 ~ 05-05', teams: '32 队', map: '马耳他', color1: '#212121', color2: '#424242' },
  { name: 'IEM Katowice 2026', status: 'finished', prize: '$1,000,000', date: '2026-02-01 ~ 02-15', teams: '24 队', map: '波兰', color1: '#3e2723', color2: '#5d4037' },
  { name: 'EPL S21 Conference', status: 'upcoming', prize: '$200,000', date: '2026-08-20 ~ 09-10', teams: '16 队', map: '在线赛', color1: '#1b5e20', color2: '#2e7d32' }
];

const TRAININGS = [
  { icon: '🎯', iconBg: 'rgba(239,83,80,0.15)', title: '枪法热身菜单', time: '15-20 分钟', desc: '排位前必做的热身流程，3 个月可见明显提升。', tags: ['新手', 'aim_botz'] },
  { icon: '💥', iconBg: 'rgba(255,183,77,0.15)', title: '压枪练习', time: '10 分钟', desc: 'AK/M4 压枪轨迹熟练掌握，子弹打哪心中有数。', tags: ['进阶', 'recoil_master'] },
  { icon: '💣', iconBg: 'rgba(79,195,247,0.15)', title: '道具点位', time: '20-30 分钟', desc: '每张地图核心烟雾、闪光、燃烧弹投掷点。', tags: ['必修', 'yprac_smokes'] },
  { icon: '🏃', iconBg: 'rgba(102,187,106,0.15)', title: '预瞄走位', time: '15 分钟', desc: '常见点位预瞄训练，养成肌肉记忆。', tags: ['进阶', 'prefire_practice'] },
  { icon: '👁️', iconBg: 'rgba(171,71,188,0.15)', title: '复盘 Demo', time: '30-60 分钟', desc: '看自己上局 Demo，分析死亡原因和走位失误。', tags: ['关键', 'demo_review'] },
  { icon: '🎮', iconBg: 'rgba(255,238,88,0.15)', title: '死斗匹配', time: '20-30 分钟', desc: '热身的同时练习交火节奏和反应速度。', tags: ['热身', 'deathmatch'] },
  { icon: '👥', iconBg: 'rgba(102,187,106,0.15)', title: '5v5 排位', time: '40-60 分钟', desc: '与固定队友双排或五黑，应用所学战术。', tags: ['实战', 'competitive'] },
  { icon: '📊', iconBg: 'rgba(79,195,247,0.15)', title: '数据复盘', time: '10 分钟', desc: '使用 Leetify 分析个人弱项，针对性训练。', tags: ['必备', 'leetify'] }
];

const NEWS = [
  { badge: 'update', badgeText: '版本更新', title: 'CS2 2026 夏季大更新：新地图 Embark 上线',
    date: '2026-05-25', visual: 0, color: '#4fc3f7', featured: true,
    text: 'Valve 发布 CS2 夏季大更新，新增竞技地图 Embark（北欧港口主题）。同时调整了 AK-47 远距离伤害衰减、Mirage B 区平衡性改动，以及全新的烟雾弹物理效果优化。本次更新还引入了排位匹配的反作弊机器学习模型升级。' },
  { badge: 'event', badgeText: '赛事', title: 'IEM 科隆 2026：中国队 Lynn Vision 闯入四强',
    date: '2026-05-20', visual: 1, color: '#ffb74d',
    text: 'Lynn Vision 在 IEM 科隆站创造历史，击败 FaZe 和 Vitality 杀入四强。' },
  { badge: 'guide', badgeText: '攻略', title: 'Embark 全报点与默认战术解析',
    date: '2026-05-24', visual: 2, color: '#ab47bc',
    text: '全新地图 Embark 完整攻略：报点、CT/T 默认站位、关键道具投掷点。' },
  { badge: 'update', badgeText: '反作弊', title: 'VAC Live 升级：AI 检测响应秒级化',
    date: '2026-05-15', visual: 3, color: '#66bb6a',
    text: 'Valve 宣布 VAC Live 系统重大升级，利用机器学习模型实时检测作弊。' },
  { badge: 'event', badgeText: '赛事', title: 'BLAST 春季总决赛即将打响 8 强出炉',
    date: '2026-05-22', visual: 1, color: '#ffb74d',
    text: 'BLAST Premier 春季总决赛 8 强名单确定，奖金池 $425,000。' },
  { badge: 'guide', badgeText: '攻略', title: '十大职业选手准星配置全收录',
    date: '2026-05-18', visual: 2, color: '#ab47bc',
    text: '收集了当前 Top 10 职业选手的准星配置代码，一键复制即用。' }
];

const FAQ = [
  { q: 'CS2 适合多少配置的电脑运行？',
    a: 'CS2 最低配置：i5-8400 / Ryzen 5 2600 + GTX 1060 6GB + 16GB 内存。建议配置：i5-12400F / Ryzen 5 5600X + RTX 3060 + 32GB 内存，可在 1080p 144Hz 下流畅运行。竞技玩家建议 240Hz+ 显示器获得 peeker\'s advantage。' },
  { q: '从 CS:GO 转到 CS2 有什么主要变化？',
    a: 'CS2 在以下方面有显著变化：1) 烟雾弹现在是动态体积烟，可被 HE 炸开 1 秒；2) Source 2 引擎带来更好的画面和物理；3) Sub-tick 更新提高了射击精度；4) 移除了 Cobblestone、Train、Cache 等地图，新增 Ancient、Anubis；5) 段位系统改为 Glicko-2 评分。' },
  { q: '新手应该专注练哪几张地图？',
    a: '推荐新手专注 2-3 张地图深度学习：① Dust II（最经典，地图开阔好理解）② Mirage（道具点位最丰富，适合学战术）③ Inferno（CT 强势图，学习道具配合）。一张地图至少打 50 局以上才能算熟悉。' },
  { q: '准星到底应该选多大？',
    a: '准星大小是个人偏好，没有绝对答案。一般原则：远距离作战（AWP）选小一点（size 1-1.5），近距离作战选稍大（size 2-3）。多数职业选手选 size 1.5-2，gap -2 到 0，颜色绿色或青色。建议从 s1mple/ZywOo 配置开始尝试，逐渐找到自己的舒适圈。' },
  { q: '为什么我枪法练了很久还是上不了分？',
    a: '枪法只是 CS2 的一部分，不能完全决定段位。上不了分通常因为：1) 走位站位糟糕（站桩、暴露多个角度）；2) 经济管理混乱（不该买的局强起）；3) 团队沟通差（信息延迟、报点不清）；4) 心态问题（连败上头、追责队友）。建议复盘 Demo 找具体问题。' },
  { q: 'ECO 局和强起局应该怎么打？',
    a: 'ECO（< $2000）：保枪存钱，分散站位偷人，下个回合全员买齐。强起（$2000-$3500）：买甲+微冲/手枪，主攻 1-2 个点位，靠 utility 配合打信息差。最忌讳半甲半枪，要么全力买，要么全力存。' },
  { q: '怎么提高战术意识和地图理解？',
    a: '看职业比赛 POV 是最快的途径。推荐看：HLTV.org 比赛回放、YouTube 上的职业选手第一视角（POV）、Twitch 直播。看的时候关注：1) 进攻方道具配合；2) 防守方站位变化；3) 关键回合的决策逻辑；4) 残局处理。看 + 实战才有效，纯看没用。' },
  { q: '段位多久能升一次？为什么连胜也不升段？',
    a: 'CS2 采用 Glicko-2 评分系统，每场比赛都会更新隐藏分。可见段位通常 5-10 局更新一次。连胜不一定升段是因为：1) 隐藏分还没到下一档；2) 对手平均分太低，胜利收益小；3) 个人表现拉低（K/D 差、ADR 低）。专注表现而非段位变化。' }
];

const TICKER_ITEMS = [
  { label: '🔴 LIVE', text: 'IEM Cologne 2026', val: 'NAVI vs Vitality' },
  { label: '🏆 奖金', text: 'PGL Major', val: '$1.25M' },
  { label: '📊 当前段位', text: '武汉地区平均', val: 'MG I' },
  { label: '🎯 热门武器', text: '本周拾取率第一', val: 'AK-47' },
  { label: '🗺️ 热门地图', text: '本周排位榜首', val: 'Mirage' },
  { label: '⚡ 玩家在线', text: 'CS2 全球', val: '1.2M+' },
  { label: '💎 最新更新', text: '版本号', val: 'v2.0.5' },
  { label: '🌟 顶级选手', text: 'HLTV Rating', val: 'donk 1.30' }
];
