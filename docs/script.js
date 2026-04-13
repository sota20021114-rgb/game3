const BASE_GENRE_LIBRARY = [
  { key: "music", label: "音楽", words: ["ギター", "メロディ", "ライブ", "リズム", "アルバム"] },
  { key: "space", label: "宇宙", words: ["星雲", "ロケット", "探査機", "宇宙服", "AI"] },
  { key: "cooking", label: "料理", words: ["レシピ", "包丁", "火加減", "味", "シェフ"] },
  { key: "sports", label: "スポーツ", words: ["ゴール", "スタジアム", "勝負", "ドリブル", "選手"] },
  { key: "ocean", label: "海", words: ["波", "サンゴ", "深海", "海岸", "イルカ"] },
  { key: "magic", label: "魔法", words: ["呪文", "杖", "魔法陣", "ほうき", "ルーン"] },
  { key: "mystery", label: "ミステリー", words: ["探偵", "証拠", "アリバイ", "密室", "推理"] },
  { key: "cinema", label: "映画", words: ["俳優", "カメラ", "脚本", "スクリーン", "エンドロール"] },
  { key: "books", label: "本", words: ["栞", "著者", "章", "図書館", "朗読"] },
  { key: "weather", label: "天気", words: ["台風", "雨", "晴れ間", "気圧", "予報"] },
  { key: "travel", label: "旅", words: ["地図", "切符", "荷物", "宿", "乗換"] },
  { key: "festival", label: "祭り", words: ["屋台", "太鼓", "花火", "神輿", "提灯"] },
  { key: "science", label: "科学", words: ["実験", "分子", "理論", "顕微鏡", "方程式"] },
  { key: "technology", label: "テクノロジー", words: ["端末", "センサー", "回路", "更新", "仮想"] },
  { key: "forest", label: "森", words: ["木漏れ日", "切り株", "小川", "苔", "鹿"] },
  { key: "art", label: "美術", words: ["彫刻", "色彩", "画廊", "額縁", "作品"] },
  { key: "castle", label: "城", words: ["石垣", "櫓", "城門", "堀", "王座"] },
  { key: "sweets", label: "お菓子", words: ["クリーム", "焼き菓子", "砂糖", "シロップ", "パティシエ"] },
];

function createGenreEntries(entries) {
  return entries.map(([key, label, words]) => ({ key, label, words }));
}

const EXTRA_GENRE_LIBRARY = [
  ...createGenreEntries([
    ["dance", "ダンス", ["ステップ", "振付", "フロア", "ターン"]],
    ["theater", "演劇", ["舞台", "台本", "照明", "幕", "拍手"]],
    ["photography", "写真", ["レンズ", "構図", "露光", "シャッター", "暗室", "現像"]],
    ["fashion", "ファッション", ["生地", "装い", "縫製", "ランウェイ"]],
    ["boardgame", "ボードゲーム", ["駒", "盤面", "手番", "ルール", "勝利点", "サイコロ"]],
    ["manga", "マンガ", ["コマ", "吹き出し", "連載", "単行本", "作画"]],
    ["animation", "アニメーション", ["原画", "中割り", "作監", "上映"]],
    ["radio", "ラジオ", ["電波", "番組", "深夜", "投稿"]],
  ]),
  ...createGenreEntries([
    ["mountain", "山岳", ["稜線", "登山道", "山頂", "尾根", "岩場"]],
    ["river", "川", ["源流", "中州", "瀬", "河口"]],
    ["desert", "砂漠", ["砂丘", "蜃気楼", "乾風", "オアシス"]],
    ["glacier", "氷河", ["氷壁", "融水", "亀裂", "青氷"]],
    ["island", "島", ["岬", "潮風", "桟橋", "入江"]],
    ["jungle", "密林", ["樹冠", "湿気", "つる", "探検", "霧"]],
    ["volcano", "火山", ["火口", "噴煙", "溶岩", "地熱"]],
    ["cave", "洞窟", ["鍾乳石", "足音", "反響", "地下水"]],
  ]),
  ...createGenreEntries([
    ["ramen", "ラーメン", ["湯気", "麺", "出汁", "丼"]],
    ["sushi", "寿司", ["酢飯", "握り", "海苔", "醤油", "わさび"]],
    ["coffee", "コーヒー", ["焙煎", "香り", "ドリップ", "カップ"]],
    ["tea", "お茶", ["茶葉", "急須", "湯温", "香気", "一服"]],
    ["bakery", "ベーカリー", ["発酵", "窯", "小麦", "焼き色"]],
    ["curry", "カレー", ["香辛料", "鍋", "煮込み", "皿"]],
    ["barbecue", "バーベキュー", ["炭火", "串", "網", "煙", "屋外"]],
    ["breakfast", "朝食", ["目玉焼き", "トースト", "牛乳", "果物", "朝日"]],
  ]),
  ...createGenreEntries([
    ["programming", "プログラミング", ["変数", "関数", "デバッグ", "構文", "実行"]],
    ["robotics", "ロボット", ["センサー", "関節", "制御", "アーム", "自律"]],
    ["security", "セキュリティ", ["認証", "暗号", "脆弱性", "防御", "監査"]],
    ["architecture", "建築", ["設計図", "梁", "採光", "模型", "外壁"]],
    ["economics", "経済", ["市場", "価格", "需要", "供給"]],
    ["medicine", "医療", ["診断", "処方", "検査", "病棟", "回復"]],
    ["law", "法律", ["条文", "判決", "契約", "証言"]],
    ["education", "教育", ["授業", "教材", "課題", "学び"]],
  ]),
  ...createGenreEntries([
    ["train", "鉄道", ["レール", "駅", "改札", "時刻表", "車両"]],
    ["airplane", "飛行機", ["滑走路", "機内", "翼", "管制塔"]],
    ["bicycle", "自転車", ["ペダル", "車輪", "チェーン", "ヘルメット"]],
    ["car", "自動車", ["ハンドル", "道路", "燃料", "車庫", "助手席"]],
    ["camping", "キャンプ", ["テント", "焚き火", "寝袋", "星空", "ランタン"]],
    ["hotel", "ホテル", ["ロビー", "鍵", "宿泊", "朝刊"]],
    ["market", "市場", ["屋台", "値札", "呼び声", "籠"]],
    ["museum", "博物館", ["展示", "収蔵", "解説", "ガラスケース", "来館", "学芸員"]],
  ]),
  ...createGenreEntries([
    ["gardening", "園芸", ["土", "水やり", "鉢", "芽"]],
    ["pottery", "陶芸", ["粘土", "ろくろ", "釉薬", "窯"]],
    ["sewing", "裁縫", ["糸", "針", "布", "型紙"]],
    ["stationery", "文房具", ["ノート", "万年筆", "インク", "定規"]],
    ["woodworking", "木工", ["木目", "鑿", "削りくず", "接合", "工房"]],
    ["glasswork", "ガラス工芸", ["炉", "吹き竿", "透明", "色粒"]],
    ["perfume", "香水", ["香調", "瓶", "余韻", "滴"]],
    ["clocks", "時計", ["秒針", "歯車", "文字盤", "振り子"]],
  ]),
  ...createGenreEntries([
    ["birds", "鳥", ["羽音", "くちばし", "巣", "渡り", "さえずり"]],
    ["cats", "猫", ["ひげ", "肉球", "爪とぎ", "昼寝"]],
    ["dogs", "犬", ["散歩", "しっぽ", "吠える", "首輪"]],
    ["insects", "昆虫", ["羽化", "触角", "殻", "採集", "夏"]],
    ["flowers", "花", ["花弁", "香り", "蕾", "花束"]],
    ["trees", "樹木", ["年輪", "木陰", "幹", "落葉"]],
    ["mushrooms", "きのこ", ["胞子", "森床", "傘", "湿り気"]],
    ["aquarium", "水族館", ["水槽", "群泳", "照明", "クラゲ", "飼育員"]],
  ]),
  ...createGenreEntries([
    ["samurai", "侍", ["刀", "城下町", "甲冑", "主君", "覚悟"]],
    ["pirates", "海賊", ["帆船", "地図", "宝箱", "舵"]],
    ["mythology", "神話", ["神殿", "伝承", "星座", "予言", "英雄"]],
    ["archaeology", "考古学", ["遺跡", "発掘", "土器", "年代"]],
    ["circus", "サーカス", ["綱渡り", "曲芸", "テント", "客席", "喝采"]],
    ["alchemy", "錬金術", ["坩堝", "蒸留", "秘薬", "記号"]],
    ["espionage", "諜報", ["暗号文", "潜入", "偽名", "尾行", "連絡"]],
    ["palace", "宮殿", ["回廊", "玉座", "衛兵", "儀式", "庭園"]],
  ]),
];

const GENRE_LIBRARY = [...BASE_GENRE_LIBRARY, ...EXTRA_GENRE_LIBRARY];
const GENRES_BY_KEY = Object.fromEntries(GENRE_LIBRARY.map((genre) => [genre.key, genre]));
const GENRE_WORD_COUNT_BY_KEY = Object.fromEntries(GENRE_LIBRARY.map((genre) => [genre.key, genre.words.length]));
const GENRE_CARD_COUNT_BY_KEY = Object.fromEntries(
  GENRE_LIBRARY.map((genre) => [genre.key, genre.words.length + 1]),
);

const INTRO_LEVELS = [
  {
    id: "level-1",
    label: "Lv.1",
    name: "昼下がりの文机",
    genreKeys: ["music", "cooking", "ocean", "books", "weather", "cinema"],
    moveLimit: 72,
  },
  {
    id: "level-2",
    label: "Lv.2",
    name: "軽謎の庭",
    genreKeys: ["sports", "magic", "mystery", "cinema", "books", "travel", "festival", "forest"],
    moveLimit: 96,
  },
  {
    id: "level-3",
    label: "Lv.3",
    name: "連想ルート",
    genreKeys: ["music", "space", "cooking", "sports", "ocean", "science", "technology", "sweets", "travel", "art"],
    moveLimit: 120,
  },
  {
    id: "level-4",
    label: "Lv.4",
    name: "交差する書架",
    genreKeys: ["music", "space", "cooking", "sports", "magic", "mystery", "cinema", "books", "festival", "science", "castle", "forest"],
    moveLimit: 144,
  },
  {
    id: "level-5",
    label: "Lv.5",
    name: "大広間の逡巡",
    genreKeys: ["music", "space", "cooking", "sports", "ocean", "magic", "mystery", "cinema", "books", "weather", "travel", "festival", "science", "art"],
    moveLimit: 168,
  },
];

function getGenreWordCountByKey(genreKey) {
  return GENRE_WORD_COUNT_BY_KEY[genreKey] || 0;
}

function getGenreCardCountByKey(genreKey) {
  return GENRE_CARD_COUNT_BY_KEY[genreKey] || 0;
}

function pickUniqueGenreKeys(allKeys, startIndex, genreCount, step) {
  const picks = [];
  let cursor = ((startIndex % allKeys.length) + allKeys.length) % allKeys.length;
  let attempts = 0;

  while (picks.length < genreCount && attempts < allKeys.length * 6) {
    const key = allKeys[cursor];
    if (key && !picks.includes(key)) {
      picks.push(key);
    }
    cursor = (cursor + step) % allKeys.length;
    attempts += 1;
  }

  for (const key of allKeys) {
    if (picks.length >= genreCount) {
      break;
    }
    if (!picks.includes(key)) {
      picks.push(key);
    }
  }

  return picks;
}

function estimateMoveLimit(genreKeys, bonus = 0) {
  const totalCards = genreKeys.reduce((sum, key) => sum + getGenreCardCountByKey(key), 0);
  const totalWords = totalCards - genreKeys.length;
  return totalCards + Math.ceil(totalWords * 0.55) + (genreKeys.length * 3) + bonus + 12;
}

const GENERATED_LEVEL_PLANS = [
  { name: "ひらめきの散歩", levels: 10, genreCount: 6, startStep: 3, pickStep: 5, moveBonus: 2, moveRamp: 1 },
  { name: "連想の回廊", levels: 10, genreCount: 7, startStep: 5, pickStep: 7, moveBonus: 6, moveRamp: 1 },
  { name: "語群の広場", levels: 10, genreCount: 8, startStep: 7, pickStep: 9, moveBonus: 10, moveRamp: 2 },
  { name: "混線する図鑑", levels: 10, genreCount: 9, startStep: 9, pickStep: 11, moveBonus: 14, moveRamp: 2 },
  { name: "推理の温室", levels: 10, genreCount: 10, startStep: 11, pickStep: 13, moveBonus: 18, moveRamp: 2 },
  { name: "長編の航路", levels: 8, genreCount: 12, startStep: 13, pickStep: 15, moveBonus: 24, moveRamp: 3 },
  { name: "迷路じかけの百科", levels: 6, genreCount: 14, startStep: 15, pickStep: 17, moveBonus: 30, moveRamp: 3 },
  { name: "博覧会の夜", levels: 5, genreCount: 16, startStep: 17, pickStep: 19, moveBonus: 36, moveRamp: 4 },
  { name: "超連想圏", levels: 4, genreCount: 18, startStep: 19, pickStep: 21, moveBonus: 42, moveRamp: 4 },
  { name: "果てない展示室", levels: 4, genreCount: 20, startStep: 23, pickStep: 25, moveBonus: 50, moveRamp: 5 },
];

function buildGeneratedLevels() {
  const allKeys = GENRE_LIBRARY.map((genre) => genre.key);
  const generated = [];
  let levelNumber = INTRO_LEVELS.length + 1;
  let startCursor = INTRO_LEVELS.length;

  GENERATED_LEVEL_PLANS.forEach((plan, planIndex) => {
    for (let levelOffset = 0; levelOffset < plan.levels; levelOffset += 1) {
      const genreKeys = pickUniqueGenreKeys(
        allKeys,
        startCursor + (levelOffset * plan.startStep) + planIndex,
        plan.genreCount,
        plan.pickStep,
      );
      generated.push({
        id: `level-${levelNumber}`,
        label: `Lv.${levelNumber}`,
        name: `${plan.name} ${String(levelOffset + 1).padStart(2, "0")}`,
        genreKeys,
        moveLimit: estimateMoveLimit(genreKeys, plan.moveBonus + (levelOffset * plan.moveRamp)),
      });
      levelNumber += 1;
    }

    startCursor += (plan.levels * plan.startStep) + plan.genreCount;
  });

  return generated;
}

const LEVELS = [...INTRO_LEVELS, ...buildGeneratedLevels()];

const COLUMN_COUNT = 4;
const ACTIVE_FOUNDATION_COUNT = 4;
const CARDS_PER_COLUMN = 4;

const UI_TEXT = {
  title: "ことばソリティア",
  eyebrow: "Genre Link Solitaire",
  controls: {
    retry: "このレベルをやり直す",
    nextLevel: "次のレベル",
    hint: "ヒント",
  },
  levels: {
    kicker: "Level Select",
    selectAria: "レベル選択",
  },
  stats: {
    level: "レベル",
    completed: "完成",
    active: "進行中",
    stock: "山札",
    moves: "移動",
    time: "時間",
  },
  zones: {
    stock: "山札",
    waste: "めくり札",
    activeFoundations: "ジャンル置き場",
    completed: "完成置き場",
    tableau: "場札",
  },
  stockButton: {
    draw: "1枚めくる",
    recycle: "山札に戻す",
    empty: "山札なし",
    drawAria: "山札から1枚めくる",
    recycleAria: "めくり札を山札に戻す",
    recycleHint: "めくり札を戻せます",
  },
  hints: {
    activeLimit: "4枠まで",
    drag: "ドラッグ対応",
    completedInitial: "0セット",
    wasteInitial: "0枚",
    wasteEmpty: "ここに\nめくり札が出ます",
  },
  foundation: {
    emptyTitle: "空きスロット",
    emptyBody: "ジャンルカードを置くと\nそのジャンルの関連語を重ねられます。",
  },
  messages: {
    deselect: "選択を外しました。",
    invalidFoundation: "そこには置けません。まずジャンルカードを置き、同じジャンルの関連語だけを重ねてください。",
    invalidTableauGenre: "ジャンルカードは空き列にだけ置けます。ジャンル置き場へ出すか、空いた場札へ移動してください。",
    invalidTableau: "そこには置けません。関連語カードだけを別の列へ移動できます。",
    invalidTableauMismatch: "違うジャンルです。同じジャンルの関連語だけを重ねられます。",
    invalidTableauGenreBase: "元のジャンルカードの上には重ねられません。ジャンル置き場へ出してから集めてください。",
    stockEmpty: "山札は空です。",
    stockRecycle: "めくり札を山札へ戻しました。",
    stockRecycleEmpty: "戻せるめくり札がありません。",
    noHint: "今すぐ大きく動ける手が見つかりません。山札をめくるか、見えている関連語の移動先を見直してみてください。",
    alreadyWon: "このレベルはクリア済みです。次のレベルへ進むか、やり直せます。",
    alreadyLost: "このレベルは手数切れです。やり直すともう一度挑戦できます。",
  },
};

document.title = UI_TEXT.title;

function createAppShell() {
  return `
    <div class="game-shell">
      <div class="table-surface">
        <header class="table-header-bar">
          <div class="brand-block">
            <p class="eyebrow">${UI_TEXT.eyebrow}</p>
            <h1>${UI_TEXT.title}</h1>
          </div>
          <div class="control-strip">
            <button id="retry-button" class="control-button primary" type="button">${UI_TEXT.controls.retry}</button>
            <button id="next-level-button" class="control-button" type="button">${UI_TEXT.controls.nextLevel}</button>
            <button id="hint-button" class="control-button" type="button">${UI_TEXT.controls.hint}</button>
          </div>
        </header>

        <section class="level-strip">
          <div class="level-copy">
            <p class="level-kicker">${UI_TEXT.levels.kicker}</p>
            <h2 id="level-name" class="level-name"></h2>
            <p id="level-note" class="level-note"></p>
          </div>
          <div id="level-buttons" class="level-buttons" aria-label="${UI_TEXT.levels.selectAria}"></div>
        </section>

        <section class="status-strip">
          <div class="status-pill">
            <span class="status-label">${UI_TEXT.stats.level}</span>
            <strong id="level-indicator"></strong>
            <span id="level-status" class="status-note"></span>
          </div>
          <div class="status-pill">
            <span class="status-label">${UI_TEXT.stats.completed}</span>
            <strong id="completed-count">0 / 0</strong>
          </div>
          <div class="status-pill">
            <span class="status-label">${UI_TEXT.stats.active}</span>
            <strong id="active-count">0 / ${ACTIVE_FOUNDATION_COUNT}</strong>
          </div>
          <div class="status-pill">
            <span class="status-label">${UI_TEXT.stats.stock}</span>
            <strong id="stock-count">0</strong>
          </div>
          <div class="status-pill move-pill">
            <span class="status-label">${UI_TEXT.stats.moves}</span>
            <strong id="move-count">0 / 0</strong>
            <span id="move-remaining" class="status-note"></span>
          </div>
          <div class="status-pill timer-pill">
            <span class="status-label">${UI_TEXT.stats.time}</span>
            <strong id="timer">00:00</strong>
          </div>
        </section>

        <section class="upper-row">
          <div class="top-zone stock-zone">
            <div class="zone-head">
              <h2>${UI_TEXT.zones.stock}</h2>
              <span id="waste-count" class="zone-badge">${UI_TEXT.hints.wasteInitial}</span>
            </div>
            <div class="stock-waste-row">
              <button id="stock-button" class="stock-stack" type="button" aria-label="${UI_TEXT.stockButton.drawAria}">
                <div class="stock-pattern"></div>
                <span id="stock-action" class="stock-title">${UI_TEXT.stockButton.draw}</span>
                <span id="stock-subtitle" class="stock-meta">残り 0 枚</span>
              </button>
              <div class="waste-wrap">
                <div class="zone-mini-label">${UI_TEXT.zones.waste}</div>
                <div id="waste-slot" class="waste-slot" aria-label="${UI_TEXT.zones.waste}"></div>
              </div>
            </div>
            <div class="stock-actions">
              <button id="recycle-button" class="stock-action-button" type="button">${UI_TEXT.stockButton.recycle}</button>
            </div>
          </div>
          <div class="top-zone foundation-zone">
            <div class="zone-head">
              <h2>${UI_TEXT.zones.activeFoundations}</h2>
              <span class="zone-badge">${UI_TEXT.hints.activeLimit}</span>
            </div>
            <div id="foundations" class="foundation-row" aria-label="${UI_TEXT.zones.activeFoundations}"></div>
          </div>
        </section>

        <p id="message" class="message" aria-live="polite"></p>

        <section class="tableau-zone">
          <div class="zone-head zone-head-tight">
            <h2>${UI_TEXT.zones.tableau}</h2>
            <span class="zone-badge subtle">${UI_TEXT.hints.drag}</span>
          </div>
          <div id="tableau" class="tableau" aria-label="${UI_TEXT.zones.tableau}"></div>
        </section>
      </div>
    </div>
  `;
}

document.getElementById("app").innerHTML = createAppShell();
document.querySelector(".table-surface")?.insertAdjacentHTML(
  "beforeend",
  `
    <div id="selection-tray" class="selection-tray" data-active="false" aria-live="polite">
      <div class="selection-tray-copy">
        <strong id="selection-tray-title" class="selection-tray-title"></strong>
        <span id="selection-tray-hint" class="selection-tray-hint"></span>
      </div>
      <button id="selection-tray-clear" class="selection-tray-button" type="button">選択解除</button>
    </div>
  `,
);

function emptyFoundation() {
  return {
    genreKey: null,
    genreLabel: "",
    cards: [],
  };
}

const state = {
  columns: [],
  stock: [],
  waste: [],
  activeFoundations: [],
  completed: [],
  selected: null,
  dragSource: null,
  moveCount: 0,
  startTime: Date.now(),
  elapsedSeconds: 0,
  timerId: null,
  message: "",
  currentLevelIndex: 0,
  status: "playing",
  clearedLevels: new Set(),
  attemptsByLevel: {},
};

const refs = {
  tableau: document.getElementById("tableau"),
  foundations: document.getElementById("foundations"),
  message: document.getElementById("message"),
  completedCount: document.getElementById("completed-count"),
  activeCount: document.getElementById("active-count"),
  stockCount: document.getElementById("stock-count"),
  moveCount: document.getElementById("move-count"),
  moveRemaining: document.getElementById("move-remaining"),
  timer: document.getElementById("timer"),
  levelIndicator: document.getElementById("level-indicator"),
  levelStatus: document.getElementById("level-status"),
  wasteCount: document.getElementById("waste-count"),
  stockButton: document.getElementById("stock-button"),
  recycleButton: document.getElementById("recycle-button"),
  stockAction: document.getElementById("stock-action"),
  stockSubtitle: document.getElementById("stock-subtitle"),
  wasteSlot: document.getElementById("waste-slot"),
  retryButton: document.getElementById("retry-button"),
  nextLevelButton: document.getElementById("next-level-button"),
  hintButton: document.getElementById("hint-button"),
  levelName: document.getElementById("level-name"),
  levelNote: document.getElementById("level-note"),
  levelButtons: document.getElementById("level-buttons"),
  selectionTray: document.getElementById("selection-tray"),
  selectionTrayTitle: document.getElementById("selection-tray-title"),
  selectionTrayHint: document.getElementById("selection-tray-hint"),
  selectionTrayClear: document.getElementById("selection-tray-clear"),
};

const TOUCH_DRAG_THRESHOLD = 12;
const TOUCH_CLICK_SUPPRESSION_MS = 450;

const touchDrag = {
  pointerId: null,
  source: null,
  sourceElement: null,
  startX: 0,
  startY: 0,
  clientX: 0,
  clientY: 0,
  dragging: false,
  ghost: null,
};

let touchClickSuppressedUntil = 0;

function shuffle(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function getCurrentLevel() {
  return LEVELS[state.currentLevelIndex];
}

function getGenreByKey(genreKey) {
  return GENRES_BY_KEY[genreKey] || null;
}

function getGenresForLevel(level = getCurrentLevel()) {
  return level.genreKeys.map((key) => getGenreByKey(key)).filter(Boolean);
}

function getGenreCount(level = getCurrentLevel()) {
  return getGenresForLevel(level).length;
}

function getLevelWordCount(level = getCurrentLevel()) {
  return level.genreKeys.reduce((sum, key) => sum + getGenreWordCountByKey(key), 0);
}

function getLevelCardCount(level = getCurrentLevel()) {
  return level.genreKeys.reduce((sum, key) => sum + getGenreCardCountByKey(key), 0);
}

function getFoundationTargetLength(genreKey) {
  return getGenreCardCountByKey(genreKey);
}

function getMoveLimit(level = getCurrentLevel()) {
  return level.moveLimit;
}

function getAttemptCount(level = getCurrentLevel()) {
  return state.attemptsByLevel[level.id] || 0;
}

function getMovesRemaining() {
  return Math.max(0, getMoveLimit() - state.moveCount);
}

function isPlaying() {
  return state.status === "playing";
}

function syncTitle() {
  const level = getCurrentLevel();
  document.title = `${UI_TEXT.title} | ${level.label}`;
}

function buildLevelNote(level = getCurrentLevel()) {
  return `${getGenreCount(level)}ジャンル / ${getLevelCardCount(level)}枚 / 制限 ${level.moveLimit} 手 / 挑戦 ${getAttemptCount(level)} 回`;
}

function buildInitialMessage(level = getCurrentLevel()) {
  return `${level.label}「${level.name}」。${getGenreCount(level)}ジャンル・${getLevelCardCount(level)}枚の札を、${level.moveLimit}手以内に完成させてください。`;
}

function normalizeCard(card, defaultFaceUp = false) {
  return {
    ...card,
    faceUp: typeof card.faceUp === "boolean" ? card.faceUp : defaultFaceUp,
  };
}

function normalizeColumn(column = []) {
  return column.map((card) => normalizeCard(card, true));
}

function revealTopTableauCard(columnIndex) {
  const column = state.columns[columnIndex];
  const topCard = column?.[column.length - 1];
  if (topCard) {
    topCard.faceUp = true;
  }
}

function getFirstFaceUpIndex(column) {
  return column.findIndex((card) => card.faceUp);
}

function getHiddenCount(column) {
  const firstFaceUpIndex = getFirstFaceUpIndex(column);
  return firstFaceUpIndex === -1 ? column.length : firstFaceUpIndex;
}

function getFaceUpCards(column) {
  const firstFaceUpIndex = getFirstFaceUpIndex(column);
  if (firstFaceUpIndex === -1) {
    return [];
  }
  return column.slice(firstFaceUpIndex);
}

function createDeck(genres) {
  let nextId = 0;
  const cards = [];

  for (const genre of genres) {
    cards.push({
      id: nextId += 1,
      type: "genre",
      genreKey: genre.key,
      genreLabel: genre.label,
      label: genre.label,
      faceUp: false,
    });

    for (const word of genre.words) {
      cards.push({
        id: nextId += 1,
        type: "word",
        genreKey: genre.key,
        genreLabel: genre.label,
        label: word,
        faceUp: false,
      });
    }
  }

  return cards;
}

function createDeal(level = getCurrentLevel()) {
  const deck = createDeck(getGenresForLevel(level));
  const genreCards = shuffle(deck.filter((card) => card.type === "genre"));
  const wordCards = shuffle(deck.filter((card) => card.type === "word"));
  const visibleGenreCount = Math.min(ACTIVE_FOUNDATION_COUNT, genreCards.length);
  const forcedTopIndices = new Set(
    shuffle(Array.from({ length: COLUMN_COUNT }, (_, index) => index)).slice(0, visibleGenreCount),
  );
  const forcedTopGenres = genreCards.splice(0, visibleGenreCount);
  const pool = shuffle([...genreCards, ...wordCards]);
  const columns = Array.from({ length: COLUMN_COUNT }, () => []);
  let forcedTopCursor = 0;

  for (let columnIndex = 0; columnIndex < COLUMN_COUNT; columnIndex += 1) {
    for (let rowIndex = 0; rowIndex < CARDS_PER_COLUMN - 1; rowIndex += 1) {
      const buriedCard = pool.pop();
      if (buriedCard) {
        columns[columnIndex].push(buriedCard);
      }
    }

    let topCard = null;
    if (forcedTopIndices.has(columnIndex) && forcedTopCursor < forcedTopGenres.length) {
      topCard = forcedTopGenres[forcedTopCursor++];
    } else {
      topCard = pool.pop() || null;
    }

    if (topCard) {
      topCard.faceUp = true;
      columns[columnIndex].push(topCard);
    }
  }

  return { columns, stock: pool };
}

function startTimer() {
  clearInterval(state.timerId);
  state.startTime = Date.now();
  state.elapsedSeconds = 0;
  state.timerId = window.setInterval(updateTimer, 1000);
}

function freezeTimer() {
  state.elapsedSeconds = Math.floor((Date.now() - state.startTime) / 1000);
  clearInterval(state.timerId);
  state.timerId = null;
}

function getElapsedSeconds() {
  if (isPlaying()) {
    return Math.floor((Date.now() - state.startTime) / 1000);
  }
  return state.elapsedSeconds;
}

function initGame() {
  const level = getCurrentLevel();
  state.attemptsByLevel[level.id] = getAttemptCount(level) + 1;

  const deal = createDeal(level);
  state.columns = deal.columns;
  state.stock = deal.stock;
  state.waste = [];
  state.activeFoundations = Array.from({ length: ACTIVE_FOUNDATION_COUNT }, () => emptyFoundation());
  state.completed = [];
  state.selected = null;
  state.dragSource = null;
  state.moveCount = 0;
  state.status = "playing";
  setMessage("");

  startTimer();
  render();
}

function updateTimer() {
  const elapsed = getElapsedSeconds();
  const minutes = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const seconds = String(elapsed % 60).padStart(2, "0");
  refs.timer.textContent = `${minutes}:${seconds}`;
}

function setMessage(text) {
  state.message = text;
  refs.message.textContent = text;
}

function setMessageState() {
  refs.message.dataset.state = state.status;
}

function activeSource() {
  return state.dragSource || state.selected;
}

function sameSource(a, b) {
  return Boolean(a && b && a.type === b.type && a.index === b.index);
}

function getCardFromSource(source) {
  const cards = getCardsFromSource(source);
  return cards[cards.length - 1] || null;
}

function getCardsFromSource(source) {
  if (!source) {
    return [];
  }

  if (source.type === "tableau") {
    const column = state.columns[source.index];
    const topCard = column?.[column.length - 1];
    if (!topCard) {
      return [];
    }

    if (topCard.type !== "word") {
      return [topCard];
    }

    let startIndex = column.length - 1;
    while (startIndex > 0) {
      const previousCard = column[startIndex - 1];
      if (!previousCard.faceUp || previousCard.type !== "word" || previousCard.genreKey !== topCard.genreKey) {
        break;
      }
      startIndex -= 1;
    }

    return column.slice(startIndex);
  }

  if (source.type === "waste") {
    const card = state.waste[state.waste.length - 1] || null;
    return card ? [card] : [];
  }

  return [];
}

function getLeadCardFromSource(source) {
  const cards = getCardsFromSource(source);
  return cards[0] || null;
}

function removeCardFromSource(source) {
  return removeCardsFromSource(source).pop() || null;
}

function removeCardsFromSource(source) {
  if (!source) {
    return [];
  }

  if (source.type === "tableau") {
    const cards = getCardsFromSource(source);
    if (cards.length === 0) {
      return [];
    }
    const removed = state.columns[source.index].splice(state.columns[source.index].length - cards.length, cards.length);
    revealTopTableauCard(source.index);
    return removed;
  }

  if (source.type === "waste") {
    const card = state.waste.pop() || null;
    return card ? [card] : [];
  }

  return [];
}

function clearInteractions() {
  state.selected = null;
  state.dragSource = null;
  clearTouchDragState();
}

function suppressTouchClick() {
  touchClickSuppressedUntil = Date.now() + TOUCH_CLICK_SUPPRESSION_MS;
}

function shouldSuppressTouchClick() {
  return Date.now() < touchClickSuppressedUntil;
}

function isTrackedTouchPointer(event) {
  return Boolean(event && touchDrag.pointerId !== null && event.pointerId === touchDrag.pointerId);
}

function removeTouchGhost() {
  if (touchDrag.ghost?.isConnected) {
    touchDrag.ghost.remove();
  }
  touchDrag.ghost = null;
}

function clearTouchDragState() {
  removeTouchGhost();
  document.body.classList.remove("touch-drag-active");
  if (touchDrag.sourceElement?.isConnected) {
    touchDrag.sourceElement.classList.remove("touch-source-card");
  }
  touchDrag.pointerId = null;
  touchDrag.source = null;
  touchDrag.sourceElement = null;
  touchDrag.startX = 0;
  touchDrag.startY = 0;
  touchDrag.clientX = 0;
  touchDrag.clientY = 0;
  touchDrag.dragging = false;
}

function createTouchGhost(cards) {
  const topCard = cards[cards.length - 1] || null;
  if (!topCard) {
    return null;
  }

  const ghost = document.createElement("div");
  ghost.className = "touch-drag-ghost";

  const stack = document.createElement("div");
  stack.className = "touch-drag-stack";

  if (cards.length > 1) {
    for (let index = 0; index < Math.min(cards.length - 1, 2); index += 1) {
      const shadow = document.createElement("div");
      shadow.className = `touch-drag-shadow touch-drag-shadow-${index + 1}`;
      stack.appendChild(shadow);
    }

    const count = document.createElement("span");
    count.className = "touch-drag-count";
    count.textContent = `x${cards.length}`;
    stack.appendChild(count);
  }

  const cardEl = document.createElement("div");
  cardEl.className = `touch-drag-card ${topCard.type === "genre" ? "genre-card" : "word-card"}`;
  cardEl.innerHTML = createCardFaceMarkup(topCard);
  stack.appendChild(cardEl);

  ghost.appendChild(stack);
  document.body.appendChild(ghost);
  return ghost;
}

function updateTouchGhostPosition(clientX, clientY) {
  if (!touchDrag.ghost) {
    return;
  }

  const rect = touchDrag.ghost.getBoundingClientRect();
  const left = clientX - (rect.width / 2);
  const top = clientY - Math.min(42, rect.height * 0.18);
  touchDrag.ghost.style.transform = `translate(${Math.round(left)}px, ${Math.round(top)}px)`;
}

function startTouchDrag() {
  if (touchDrag.dragging || !touchDrag.source) {
    return;
  }

  const cards = getCardsFromSource(touchDrag.source);
  if (cards.length === 0) {
    clearTouchDragState();
    return;
  }

  touchDrag.dragging = true;
  state.dragSource = touchDrag.source;
  state.selected = null;
  touchDrag.ghost = createTouchGhost(cards);
  document.body.classList.add("touch-drag-active");
  document.querySelectorAll(".play-card.selected").forEach((element) => {
    element.classList.remove("selected");
  });
  if (touchDrag.sourceElement?.isConnected) {
    touchDrag.sourceElement.classList.add("touch-source-card");
  }
  refs.selectionTray.dataset.active = "false";
  updateTouchGhostPosition(touchDrag.clientX, touchDrag.clientY);
}

function getTouchDropTarget(clientX, clientY) {
  const hitElements = document.elementsFromPoint(clientX, clientY);
  for (const element of hitElements) {
    if (!(element instanceof Element)) {
      continue;
    }
    const dropTarget = element.closest("[data-drop-kind]");
    if (!dropTarget) {
      continue;
    }
    if (dropTarget.dataset.dropKind === "foundation") {
      return { type: "foundation", index: Number(dropTarget.dataset.foundationIndex) };
    }
    if (dropTarget.dataset.dropKind === "tableau") {
      return { type: "tableau", index: Number(dropTarget.dataset.columnIndex) };
    }
  }
  return null;
}

function handleTouchPointerDown(event, source) {
  if (event.pointerType !== "touch" || !isPlaying() || touchDrag.pointerId !== null) {
    return;
  }

  suppressTouchClick();
  event.preventDefault();
  touchDrag.pointerId = event.pointerId;
  touchDrag.source = source;
  touchDrag.sourceElement = event.currentTarget;
  touchDrag.startX = event.clientX;
  touchDrag.startY = event.clientY;
  touchDrag.clientX = event.clientX;
  touchDrag.clientY = event.clientY;
  touchDrag.dragging = false;
  removeTouchGhost();

  try {
    event.currentTarget.setPointerCapture?.(event.pointerId);
  } catch {
    // Pointer capture is optional in some mobile browsers.
  }
}

function finishTouchPointer(event, cancelled = false) {
  if (!isTrackedTouchPointer(event)) {
    return;
  }

  const source = touchDrag.source;
  const wasDragging = touchDrag.dragging;
  const clientX = touchDrag.clientX;
  const clientY = touchDrag.clientY;

  try {
    touchDrag.sourceElement?.releasePointerCapture?.(event.pointerId);
  } catch {
    // Pointer capture release is best-effort.
  }

  clearTouchDragState();

  if (!source) {
    return;
  }

  if (!wasDragging) {
    if (!cancelled) {
      selectSource(source);
    }
    return;
  }

  clearInteractions();

  if (cancelled) {
    render();
    return;
  }

  const dropTarget = getTouchDropTarget(clientX, clientY);
  if (!dropTarget) {
    render();
    return;
  }

  if (dropTarget.type === "foundation") {
    moveToFoundation(source, dropTarget.index);
    return;
  }

  moveToTableau(source, dropTarget.index);
}

function handleTouchPointerMove(event) {
  if (!isTrackedTouchPointer(event)) {
    return;
  }

  touchDrag.clientX = event.clientX;
  touchDrag.clientY = event.clientY;

  const distance = Math.hypot(
    event.clientX - touchDrag.startX,
    event.clientY - touchDrag.startY,
  );

  if (!touchDrag.dragging && distance >= TOUCH_DRAG_THRESHOLD) {
    startTouchDrag();
  }

  if (!touchDrag.dragging) {
    return;
  }

  event.preventDefault();
  updateTouchGhostPosition(event.clientX, event.clientY);
}

function handleTouchPointerUp(event) {
  finishTouchPointer(event);
}

function handleTouchPointerCancel(event) {
  finishTouchPointer(event, true);
}

function getPlayableElementFromSource(source) {
  if (!source) {
    return null;
  }

  if (source.type === "tableau") {
    return refs.tableau.querySelector(`.tableau-column[data-column-index="${source.index}"] .play-card`);
  }

  if (source.type === "waste") {
    return refs.wasteSlot.querySelector(".play-card");
  }

  return null;
}

function getDropElement(target) {
  if (!target) {
    return null;
  }

  if (target.type === "foundation") {
    return refs.foundations.querySelector(`.foundation-slot[data-foundation-index="${target.index}"]`);
  }

  if (target.type === "tableau") {
    return refs.tableau.querySelector(`.tableau-column[data-column-index="${target.index}"]`);
  }

  return null;
}

function scrollTouchGestureIntoView(sourceElement, targetElement) {
  const anchor = sourceElement.closest(".upper-row")
    || targetElement.closest(".upper-row")
    || sourceElement.closest(".tableau-zone")
    || targetElement.closest(".tableau-zone")
    || targetElement;

  anchor?.scrollIntoView({
    block: "center",
    inline: "nearest",
  });
}

function simulateTouchDragGesture(source, target) {
  const sourceElement = getPlayableElementFromSource(source);
  const targetElement = getDropElement(target);
  if (!sourceElement || !targetElement) {
    return false;
  }

  scrollTouchGestureIntoView(sourceElement, targetElement);

  const sourceRect = sourceElement.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();
  const pointerId = 999;
  const startX = sourceRect.left + (sourceRect.width / 2);
  const startY = sourceRect.top + (sourceRect.height / 2);
  const targetX = targetRect.left + (targetRect.width / 2);
  const targetY = targetRect.top + Math.min(targetRect.height * 0.4, 88);

  handleTouchPointerDown({
    pointerType: "touch",
    pointerId,
    currentTarget: sourceElement,
    clientX: startX,
    clientY: startY,
    preventDefault() {},
  }, source);

  handleTouchPointerMove({
    pointerId,
    clientX: targetX,
    clientY: targetY,
    preventDefault() {},
  });

  handleTouchPointerUp({
    pointerId,
    clientX: targetX,
    clientY: targetY,
  });

  return true;
}

function debugTouchDragGesture(source, target) {
  const sourceElement = getPlayableElementFromSource(source);
  const targetElement = getDropElement(target);
  if (!sourceElement || !targetElement) {
    return {
      hasSource: Boolean(sourceElement),
      hasTarget: Boolean(targetElement),
    };
  }

  scrollTouchGestureIntoView(sourceElement, targetElement);

  const sourceRect = sourceElement.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();
  const targetX = targetRect.left + (targetRect.width / 2);
  const targetY = targetRect.top + Math.min(targetRect.height * 0.4, 88);
  const hit = getTouchDropTarget(targetX, targetY);
  const hitClasses = document.elementsFromPoint(targetX, targetY).map((element) => (
    element instanceof Element
      ? `${element.tagName.toLowerCase()}.${String(element.className || "").trim().replace(/\s+/g, ".")}`
      : String(element)
  ));

  return {
    hasSource: true,
    hasTarget: true,
    sourceRect: {
      left: sourceRect.left,
      top: sourceRect.top,
      width: sourceRect.width,
      height: sourceRect.height,
    },
    targetRect: {
      left: targetRect.left,
      top: targetRect.top,
      width: targetRect.width,
      height: targetRect.height,
    },
    targetPoint: {
      x: targetX,
      y: targetY,
    },
    hit,
    hitClasses,
    canDropOnFoundation: target.type === "foundation" ? canDropOnFoundation(source, target.index) : null,
    canDropOnTableau: target.type === "tableau" ? canDropOnTableau(source, target.index) : null,
  };
}

function ensurePlaying() {
  if (isPlaying()) {
    return true;
  }
  setMessage(state.status === "won" ? UI_TEXT.messages.alreadyWon : UI_TEXT.messages.alreadyLost);
  render();
  return false;
}

function switchLevel(levelIndex) {
  if (levelIndex < 0 || levelIndex >= LEVELS.length) {
    return;
  }

  state.currentLevelIndex = levelIndex;
  initGame();
}

function selectSource(source) {
  if (!ensurePlaying()) {
    return;
  }

  if (sameSource(state.selected, source)) {
    clearInteractions();
    setMessage(UI_TEXT.messages.deselect);
    render();
    return;
  }

  state.selected = source;
  const card = getCardFromSource(source);
  if (card) {
    setMessage(`「${card.label}」を選択中です。置きたい場所をクリックするか、ドラッグしてください。`);
  }
  render();
}

function getActiveFoundationCount() {
  return state.activeFoundations.filter((slot) => slot.cards.length > 0).length;
}

function resolveAfterCountedMove(successMessage) {
  const level = getCurrentLevel();
  const totalGenres = getGenreCount(level);

  if (state.completed.length === totalGenres) {
    state.status = "won";
    state.clearedLevels.add(level.id);
    freezeTimer();
    const nextText = state.currentLevelIndex < LEVELS.length - 1
      ? "次のレベルへ進めます。"
      : "これで全レベルクリアです。";
    setMessage(`クリア。${level.label}「${level.name}」を ${state.moveCount} / ${level.moveLimit} 手で完成しました。${nextText}`);
    render();
    return;
  }

  if (state.moveCount >= level.moveLimit) {
    state.status = "lost";
    freezeTimer();
    const remainingGenres = totalGenres - state.completed.length;
    setMessage(`手数切れです。あと ${remainingGenres} ジャンル残っていました。${level.moveLimit} 手以内に完成を目指してください。`);
    render();
    return;
  }

  setMessage(successMessage);
  render();
}

function drawFromStock() {
  if (!ensurePlaying()) {
    return;
  }

  clearInteractions();

  if (state.stock.length === 0) {
    setMessage(UI_TEXT.messages.stockEmpty);
    render();
    return;
  }

  const card = state.stock.pop();
  card.faceUp = true;
  state.waste.push(card);
  state.moveCount += 1;
  resolveAfterCountedMove(`山札から「${card.label}」をめくりました。`);
}

function recycleWaste() {
  if (!ensurePlaying()) {
    return;
  }

  clearInteractions();

  if (state.waste.length === 0) {
    setMessage(UI_TEXT.messages.stockRecycleEmpty);
    render();
    return;
  }

  state.stock = [...state.stock, ...[...state.waste].reverse().map((card) => ({ ...card, faceUp: false }))];
  state.waste = [];
  state.moveCount += 1;
  resolveAfterCountedMove(UI_TEXT.messages.stockRecycle);
}

function canDropOnFoundation(source, foundationIndex) {
  const card = getCardFromSource(source);
  if (!card) {
    return false;
  }

  const slot = state.activeFoundations[foundationIndex];
  if (slot.cards.length === 0) {
    return card.type === "genre";
  }

  return (
    card.type === "word"
    && slot.genreKey === card.genreKey
    && slot.cards.length < getFoundationTargetLength(slot.genreKey)
  );
}

function getTableauDropReason(source, columnIndex) {
  const card = getCardFromSource(source);
  if (!card || card.type === "genre") {
    return "source-genre";
  }

  if (source.type === "tableau" && source.index === columnIndex) {
    return "same-column";
  }

  const column = state.columns[columnIndex];
  if (column.length === 0) {
    return null;
  }

  const topCard = column[column.length - 1];
  if (topCard.type === "genre") {
    return "genre-base";
  }

  if (topCard.genreKey !== card.genreKey) {
    return "genre-mismatch";
  }

  return null;
}

function canDropOnTableau(source, columnIndex) {
  return getTableauDropReason(source, columnIndex) === null;
}

function finalizeFoundation(foundationIndex) {
  const slot = state.activeFoundations[foundationIndex];
  state.completed.push({
    genreKey: slot.genreKey,
    genreLabel: slot.genreLabel,
  });
  state.activeFoundations[foundationIndex] = emptyFoundation();
}

function moveToFoundation(source, foundationIndex) {
  if (!ensurePlaying()) {
    return;
  }

  if (!canDropOnFoundation(source, foundationIndex)) {
    setMessage(UI_TEXT.messages.invalidFoundation);
    render();
    return;
  }

  const card = removeCardFromSource(source);
  if (!card) {
    render();
    return;
  }

  const slot = state.activeFoundations[foundationIndex];
  if (slot.cards.length === 0) {
    slot.genreKey = card.genreKey;
    slot.genreLabel = card.genreLabel;
  }

  slot.cards.push({ ...card, faceUp: true });
  state.moveCount += 1;
  clearInteractions();

  if (slot.cards.length === getFoundationTargetLength(slot.genreKey)) {
    const clearedLabel = slot.genreLabel;
    finalizeFoundation(foundationIndex);
    resolveAfterCountedMove(`「${clearedLabel}」が完成しました。ジャンル置き場が空きます。`);
    return;
  }

  const message = card.type === "genre"
    ? `「${slot.genreLabel}」のジャンル置き場を作りました。`
    : `「${slot.genreLabel}」に「${card.label}」を重ねました。`;

  resolveAfterCountedMove(message);
}

function moveToTableau(source, columnIndex) {
  if (!ensurePlaying()) {
    return;
  }

  const card = getCardFromSource(source);
  if (card?.type === "genre") {
    setMessage(UI_TEXT.messages.invalidTableauGenre);
    render();
    return;
  }

  const dropReason = getTableauDropReason(source, columnIndex);
  if (dropReason !== null) {
    if (dropReason === "genre-base") {
      setMessage(UI_TEXT.messages.invalidTableauGenreBase);
    } else if (dropReason === "genre-mismatch") {
      setMessage(UI_TEXT.messages.invalidTableauMismatch);
    } else {
      setMessage(UI_TEXT.messages.invalidTableau);
    }
    render();
    return;
  }

  const movedCard = removeCardFromSource(source);
  if (!movedCard) {
    render();
    return;
  }

  state.columns[columnIndex].push({ ...movedCard, faceUp: true });
  state.moveCount += 1;
  clearInteractions();
  resolveAfterCountedMove(`「${movedCard.label}」を列 ${columnIndex + 1} に移動しました。`);
}

function handleDragStart(event, source) {
  if (!ensurePlaying()) {
    event.preventDefault();
    return;
  }

  state.dragSource = source;
  state.selected = null;

  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify(source));
  }
}

function handleDragEnd() {
  state.dragSource = null;
  render();
}

function bindDropTarget(element, canDrop, onDrop) {
  element.addEventListener("dragover", (event) => {
    if (state.dragSource && canDrop(state.dragSource)) {
      event.preventDefault();
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "move";
      }
    }
  });

  element.addEventListener("drop", (event) => {
    event.preventDefault();
    if (state.dragSource && canDrop(state.dragSource)) {
      onDrop(state.dragSource);
      return;
    }
    state.dragSource = null;
    render();
  });
}

function getVisibleCards() {
  const cards = [];

  state.columns.forEach((column, columnIndex) => {
    const card = column[column.length - 1];
    if (card) {
      cards.push({
        source: { type: "tableau", index: columnIndex },
        label: `列 ${columnIndex + 1}`,
        card,
      });
    }
  });

  const wasteCard = state.waste[state.waste.length - 1];
  if (wasteCard) {
    cards.push({
      source: { type: "waste", index: 0 },
      label: UI_TEXT.zones.waste,
      card: wasteCard,
    });
  }

  return cards;
}

function getMatchingFoundationIndex(genreKey) {
  return state.activeFoundations.findIndex(
    (slot) => (
      slot.genreKey === genreKey
      && slot.cards.length > 0
      && slot.cards.length < getFoundationTargetLength(slot.genreKey)
    ),
  );
}

function findHint() {
  if (state.status === "won") {
    return UI_TEXT.messages.alreadyWon;
  }

  if (state.status === "lost") {
    return UI_TEXT.messages.alreadyLost;
  }

  const visibleCards = getVisibleCards();

  for (const item of visibleCards) {
    if (item.card.type === "genre") {
      const emptyIndex = state.activeFoundations.findIndex((slot) => slot.cards.length === 0);
      if (emptyIndex !== -1) {
        return `${item.label} の「${item.card.label}」をジャンル置き場へ。`;
      }
    }
  }

  for (const item of visibleCards) {
    if (item.card.type === "word") {
      const foundationIndex = getMatchingFoundationIndex(item.card.genreKey);
      if (foundationIndex !== -1) {
        const slot = state.activeFoundations[foundationIndex];
        return `${item.label} の「${item.card.label}」は「${slot.genreLabel}」へ置けます。`;
      }
    }
  }

  for (const item of visibleCards) {
    if (item.card.type === "word") {
      const emptyColumn = state.columns.findIndex((column) => column.length === 0);
      if (emptyColumn !== -1) {
        return `${item.label} の「${item.card.label}」は空き列へ逃がせます。`;
      }

      const wordColumn = state.columns.findIndex((column, columnIndex) => {
        if (item.source.type === "tableau" && item.source.index === columnIndex) {
          return false;
        }
        const topCard = column[column.length - 1];
        return Boolean(topCard) && topCard.type === "word" && topCard.genreKey === item.card.genreKey;
      });

      if (wordColumn !== -1) {
        return `${item.label} の「${item.card.label}」は列 ${wordColumn + 1} に重ねられます。`;
      }
    }
  }

  if (state.stock.length > 0) {
    return "次の手が見えないときは、山札を1枚めくって流れを変えてみてください。";
  }

  return UI_TEXT.messages.noHint;
}

function createCardFaceMarkup(card) {
  return `
    <div class="card-face">
      <div class="card-top">
        <span class="card-type-dot" aria-hidden="true"></span>
        <span class="card-mark" aria-hidden="true"></span>
      </div>
      <div class="card-main">
        <h3 class="card-label">${card.label}</h3>
      </div>
    </div>
  `;
}

function renderPlayableCard(card, source) {
  const isSelected = sameSource(activeSource(), source);
  const cardEl = document.createElement("button");
  cardEl.type = "button";
  cardEl.disabled = !isPlaying();
  cardEl.className = `play-card ${isSelected ? "selected" : ""} ${card.type === "genre" ? "genre-card" : "word-card"}`;
  cardEl.draggable = isPlaying();
  cardEl.innerHTML = createCardFaceMarkup(card);

  cardEl.addEventListener("click", (event) => {
    if (shouldSuppressTouchClick()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    event.stopPropagation();
    selectSource(source);
  });

  cardEl.addEventListener("pointerdown", (event) => handleTouchPointerDown(event, source));
  cardEl.addEventListener("dragstart", (event) => handleDragStart(event, source));
  cardEl.addEventListener("dragend", handleDragEnd);

  return cardEl;
}

function renderCardSlip(card, extraClass = "") {
  const slip = document.createElement("div");
  slip.className = `card-slip ${extraClass} ${card.type === "genre" ? "genre-card" : "word-card"}`;
  slip.innerHTML = `
    <span class="card-slip-dot" aria-hidden="true"></span>
    <strong class="card-slip-label">${card.label}</strong>
  `;
  return slip;
}

function renderLevelStrip() {
  const level = getCurrentLevel();
  refs.levelName.textContent = `${level.label} ${level.name}`;
  refs.levelNote.textContent = buildLevelNote(level);

  refs.levelButtons.innerHTML = "";
  LEVELS.forEach((entry, levelIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `level-button ${levelIndex === state.currentLevelIndex ? "current" : ""} ${state.clearedLevels.has(entry.id) ? "cleared" : ""}`;
    button.title = `${entry.label} ${entry.name} | ${getGenreCount(entry)}ジャンル / ${getLevelCardCount(entry)}枚 / ${entry.moveLimit}手`;
    button.innerHTML = `
      <span class="level-button-label">${entry.label}</span>
      <span class="level-button-name">${entry.name}</span>
    `;
    button.addEventListener("click", () => switchLevel(levelIndex));
    refs.levelButtons.appendChild(button);
  });
}

function renderStock() {
  refs.stockCount.textContent = String(state.stock.length);
  refs.wasteCount.textContent = `${state.waste.length} 枚`;
  refs.stockButton.disabled = !isPlaying() || state.stock.length === 0;
  refs.recycleButton.disabled = !isPlaying() || state.waste.length === 0;

  if (state.stock.length > 0) {
    refs.stockButton.classList.remove("empty");
    refs.stockAction.textContent = UI_TEXT.stockButton.draw;
    refs.stockSubtitle.textContent = `残り ${state.stock.length} 枚`;
    refs.stockButton.setAttribute("aria-label", UI_TEXT.stockButton.drawAria);
  } else {
    refs.stockButton.classList.add("empty");
    refs.stockAction.textContent = UI_TEXT.stockButton.empty;
    refs.stockSubtitle.textContent = state.waste.length > 0 ? UI_TEXT.stockButton.recycleHint : "もう使える札はありません";
    refs.stockButton.setAttribute("aria-label", UI_TEXT.stockButton.empty);
  }

  refs.wasteSlot.innerHTML = "";
  const wasteCard = state.waste[state.waste.length - 1];

  if (!wasteCard) {
    const empty = document.createElement("p");
    empty.className = "empty-copy";
    empty.textContent = UI_TEXT.hints.wasteEmpty;
    refs.wasteSlot.appendChild(empty);
    return;
  }

  refs.wasteSlot.appendChild(renderPlayableCard(wasteCard, { type: "waste", index: 0 }));
}

function renderFoundations() {
  refs.foundations.innerHTML = "";

  state.activeFoundations.forEach((slot, foundationIndex) => {
    const slotEl = document.createElement("div");
    slotEl.className = `foundation-slot ${slot.cards.length > 0 ? "started" : "empty"}`;
    slotEl.dataset.dropKind = "foundation";
    slotEl.dataset.foundationIndex = String(foundationIndex);

    if (slot.cards.length === 0) {
      slotEl.innerHTML = `<span class="foundation-slot-mark" aria-hidden="true"></span>`;
    } else {
      const totalCards = getFoundationTargetLength(slot.genreKey);
      const progress = `${slot.cards.length} / ${totalCards}`;
      const shell = document.createElement("div");
      shell.className = "foundation-card-shell";
      shell.innerHTML = `
        <div class="foundation-card genre-card">
          <h3 class="foundation-title">${slot.genreLabel}</h3>
          <span class="foundation-counter">${progress}</span>
        </div>
      `;

      const wordCards = slot.cards.filter((card) => card.type === "word");
      if (wordCards.length > 0) {
        const pile = document.createElement("div");
        pile.className = "foundation-slip-pile";
        wordCards.forEach((card) => {
          pile.appendChild(renderCardSlip(card, "foundation-slip"));
        });
        shell.appendChild(pile);
      }

      slotEl.appendChild(shell);
    }

    slotEl.addEventListener("click", () => {
      if (state.selected) {
        moveToFoundation(state.selected, foundationIndex);
      }
    });

    bindDropTarget(
      slotEl,
      (dragSource) => canDropOnFoundation(dragSource, foundationIndex),
      (dragSource) => moveToFoundation(dragSource, foundationIndex),
    );

    refs.foundations.appendChild(slotEl);
  });
}

function renderControls() {
  refs.hintButton.disabled = !isPlaying();
  refs.nextLevelButton.disabled = state.status !== "won" || state.currentLevelIndex >= LEVELS.length - 1;
  refs.recycleButton.disabled = !isPlaying() || state.waste.length === 0;
}

function renderTableau() {
  refs.tableau.innerHTML = "";

  state.columns.forEach((column, columnIndex) => {
    const columnEl = document.createElement("div");
    columnEl.className = `tableau-column ${column.length === 0 ? "empty" : ""}`;
    columnEl.dataset.dropKind = "tableau";
    columnEl.dataset.columnIndex = String(columnIndex);

    if (column.length > 0 && getFaceUpCards(column).length === 0) {
      revealTopTableauCard(columnIndex);
    }

    const hiddenCount = getHiddenCount(column);
    const faceUpCards = getFaceUpCards(column);
    const topCard = faceUpCards[faceUpCards.length - 1] || null;
    const head = document.createElement("div");
    head.className = "column-head";
    head.innerHTML = `
      <span class="column-index">列 ${columnIndex + 1}</span>
      <span class="column-depth">${hiddenCount > 0 ? `伏せ ${hiddenCount}` : `表 ${faceUpCards.length}`}</span>
    `;
    columnEl.appendChild(head);

    if (topCard) {
      const stack = document.createElement("div");
      stack.className = "column-stack";
      if (hiddenCount > 0) {
        const hiddenStack = document.createElement("div");
        hiddenStack.className = "column-hidden-stack";
        hiddenStack.innerHTML = `
          <div class="column-fan">
            <span class="fan-card"></span>
            <span class="fan-card"></span>
            <span class="fan-card"></span>
          </div>
          <span class="hidden-count">${hiddenCount} 枚ふせ</span>
        `;
        stack.appendChild(hiddenStack);
      }

      const faceUpPile = document.createElement("div");
      faceUpPile.className = "column-faceup-pile";
      faceUpCards.slice(0, -1).forEach((card) => {
        faceUpPile.appendChild(renderCardSlip(card, "tableau-slip"));
      });
      faceUpPile.appendChild(renderPlayableCard(topCard, { type: "tableau", index: columnIndex }));
      stack.appendChild(faceUpPile);

      columnEl.appendChild(stack);
    } else {
      const empty = document.createElement("div");
      empty.className = "column-empty";
      empty.innerHTML = `<span class="column-empty-mark" aria-hidden="true"></span>`;
      columnEl.appendChild(empty);
    }

    columnEl.addEventListener("click", () => {
      if (state.selected) {
        moveToTableau(state.selected, columnIndex);
      }
    });

    bindDropTarget(
      columnEl,
      (dragSource) => canDropOnTableau(dragSource, columnIndex),
      (dragSource) => moveToTableau(dragSource, columnIndex),
    );

    refs.tableau.appendChild(columnEl);
  });
}

function renderStats() {
  const level = getCurrentLevel();
  refs.levelIndicator.textContent = level.label;
  refs.levelStatus.textContent = level.name;
  refs.completedCount.textContent = `${state.completed.length} / ${getGenreCount(level)}`;
  refs.activeCount.textContent = `${getActiveFoundationCount()} / ${ACTIVE_FOUNDATION_COUNT}`;
  refs.moveCount.textContent = `${state.moveCount} / ${level.moveLimit}`;
  refs.moveRemaining.textContent = state.status === "won"
    ? "制限内クリア"
    : state.status === "lost"
      ? "手数切れ"
      : `残り ${getMovesRemaining()} 手`;
  refs.message.textContent = state.message;
  setMessageState();
  updateTimer();
}

function render() {
  syncTitle();
  renderLevelStrip();
  renderStats();
  renderControls();
  renderStock();
  renderFoundations();
  renderTableau();
  renderSelectionTray();
}

function getSelectionTraySummary() {
  const source = activeSource();
  if (!source) {
    return null;
  }

  const cards = getCardsFromSource(source);
  if (cards.length === 0) {
    return null;
  }

  const leadCard = cards[0];
  const topCard = cards[cards.length - 1];
  if (cards.length > 1) {
    return {
      title: `「${leadCard.genreLabel}」の束を ${cards.length} 枚選択中`,
      hint: "置き先をタップすると、まとめて移動します。",
    };
  }

  return {
    title: `「${topCard.label}」を選択中`,
    hint: topCard.type === "genre"
      ? "ジャンル置き場をタップしてください。"
      : "列かジャンル置き場をタップしてください。",
  };
}

function renderSelectionTray() {
  const summary = getSelectionTraySummary();
  refs.selectionTray.dataset.active = summary ? "true" : "false";
  refs.selectionTrayTitle.textContent = summary?.title || "";
  refs.selectionTrayHint.textContent = summary?.hint || "";
}

function selectSource(source) {
  if (!ensurePlaying()) {
    return;
  }

  if (sameSource(state.selected, source)) {
    clearInteractions();
    setMessage(UI_TEXT.messages.deselect);
    render();
    return;
  }

  state.selected = source;
  const cards = getCardsFromSource(source);
  const topCard = cards[cards.length - 1];
  if (topCard && cards.length > 1) {
    setMessage(`「${topCard.genreLabel}」の束を ${cards.length} 枚まとめて動かせます。`);
  } else if (topCard) {
    setMessage(`「${topCard.label}」を選択中です。置きたい場所をクリックするか、ドラッグしてください。`);
  }
  render();
}

function canDropOnFoundation(source, foundationIndex) {
  const cards = getCardsFromSource(source);
  if (cards.length === 0) {
    return false;
  }

  const slot = state.activeFoundations[foundationIndex];
  if (slot.cards.length === 0) {
    return cards.length === 1 && cards[0].type === "genre";
  }

  return cards.every((card) => card.type === "word" && card.genreKey === slot.genreKey)
    && slot.cards.length + cards.length <= getFoundationTargetLength(slot.genreKey);
}

function getTableauDropReason(source, columnIndex) {
  const cards = getCardsFromSource(source);
  const leadCard = cards[0] || null;
  if (!leadCard) {
    return "source-genre";
  }

  if (source.type === "tableau" && source.index === columnIndex) {
    return "same-column";
  }

  const column = state.columns[columnIndex];
  if (column.length === 0) {
    return leadCard.type === "genre" && cards.length > 1 ? "source-genre" : null;
  }

  if (leadCard.type === "genre") {
    return "source-genre";
  }

  const topCard = column[column.length - 1];
  if (topCard.type === "genre") {
    return "genre-base";
  }

  if (topCard.genreKey !== leadCard.genreKey) {
    return "genre-mismatch";
  }

  return null;
}

function moveToFoundation(source, foundationIndex) {
  if (!ensurePlaying()) {
    return;
  }

  if (!canDropOnFoundation(source, foundationIndex)) {
    setMessage(UI_TEXT.messages.invalidFoundation);
    render();
    return;
  }

  const cards = removeCardsFromSource(source);
  if (cards.length === 0) {
    render();
    return;
  }

  const slot = state.activeFoundations[foundationIndex];
  if (slot.cards.length === 0) {
    slot.genreKey = cards[0].genreKey;
    slot.genreLabel = cards[0].genreLabel;
  }

  slot.cards.push(...cards.map((card) => ({ ...card, faceUp: true })));
  state.moveCount += 1;
  clearInteractions();

  if (slot.cards.length === getFoundationTargetLength(slot.genreKey)) {
    const clearedLabel = slot.genreLabel;
    finalizeFoundation(foundationIndex);
    resolveAfterCountedMove(`「${clearedLabel}」が完成しました。ジャンル置き場が空きます。`);
    return;
  }

  if (cards[0].type === "genre") {
    resolveAfterCountedMove(`「${slot.genreLabel}」のジャンル置き場を作りました。`);
    return;
  }

  if (cards.length > 1) {
    resolveAfterCountedMove(`「${slot.genreLabel}」に ${cards.length} 枚まとめて重ねました。`);
    return;
  }

  resolveAfterCountedMove(`「${slot.genreLabel}」に「${cards[0].label}」を重ねました。`);
}

function moveToTableau(source, columnIndex) {
  if (!ensurePlaying()) {
    return;
  }

  const dropReason = getTableauDropReason(source, columnIndex);
  if (dropReason !== null) {
    if (dropReason === "genre-base") {
      setMessage(UI_TEXT.messages.invalidTableauGenreBase);
    } else if (dropReason === "genre-mismatch") {
      setMessage(UI_TEXT.messages.invalidTableauMismatch);
    } else {
      setMessage(UI_TEXT.messages.invalidTableau);
    }
    render();
    return;
  }

  const movedCards = removeCardsFromSource(source);
  if (movedCards.length === 0) {
    render();
    return;
  }

  state.columns[columnIndex].push(...movedCards.map((card) => ({ ...card, faceUp: true })));
  state.moveCount += 1;
  clearInteractions();

  if (movedCards[0]?.type === "genre") {
    resolveAfterCountedMove(`「${movedCards[0].label}」を空き列 ${columnIndex + 1} に移動しました。`);
    return;
  }

  if (movedCards.length > 1) {
    resolveAfterCountedMove(`「${movedCards[0].genreLabel}」の束を列 ${columnIndex + 1} に移動しました。`);
    return;
  }

  resolveAfterCountedMove(`「${movedCards[0].label}」を列 ${columnIndex + 1} に移動しました。`);
}

window.__wordSolitaireTest = {
  getState() {
    return {
      status: state.status,
      moveCount: state.moveCount,
      moveLimit: getMoveLimit(),
      currentLevelIndex: state.currentLevelIndex,
      currentLevelId: getCurrentLevel().id,
      levelCount: LEVELS.length,
      levelCardCount: getLevelCardCount(),
      levelWordCount: getLevelWordCount(),
      genreLibraryCount: GENRE_LIBRARY.length,
      completedCount: state.completed.length,
      completedLabels: state.completed.map((item) => item.genreLabel),
      genreCount: getGenreCount(),
      stockCount: state.stock.length,
      wasteCount: state.waste.length,
      activeFoundationCount: getActiveFoundationCount(),
      foundationCardCounts: state.activeFoundations.map((slot) => slot.cards.length),
      foundationTargets: state.activeFoundations.map((slot) => getFoundationTargetLength(slot.genreKey)),
      columnLengths: state.columns.map((column) => column.length),
      columnHiddenCounts: state.columns.map((column) => getHiddenCount(column)),
      columnFaceUpCounts: state.columns.map((column) => getFaceUpCards(column).length),
      columnTopLabels: state.columns.map((column) => column[column.length - 1]?.label || null),
      columnTopTypes: state.columns.map((column) => column[column.length - 1]?.type || null),
      columnTopGenres: state.columns.map((column) => column[column.length - 1]?.genreKey || null),
      message: state.message,
    };
  },
  setBoard(snapshot) {
    if (typeof snapshot.currentLevelIndex === "number") {
      state.currentLevelIndex = snapshot.currentLevelIndex;
    }
    if (snapshot.columns) {
      state.columns = snapshot.columns.map((column) => normalizeColumn(column));
    }
    if (snapshot.stock) {
      state.stock = snapshot.stock.map((card) => normalizeCard(card));
    }
    if (snapshot.waste) {
      state.waste = snapshot.waste.map((card) => normalizeCard(card, true));
    }
    if (snapshot.activeFoundations) {
      state.activeFoundations = snapshot.activeFoundations.map((slot) => ({
        ...emptyFoundation(),
        ...slot,
        cards: (slot.cards || []).map((card) => normalizeCard(card, true)),
      }));
      while (state.activeFoundations.length < ACTIVE_FOUNDATION_COUNT) {
        state.activeFoundations.push(emptyFoundation());
      }
    }
    if (snapshot.completed) {
      state.completed = snapshot.completed;
    }
    if (typeof snapshot.moveCount === "number") {
      state.moveCount = snapshot.moveCount;
    }
    if (typeof snapshot.status === "string") {
      state.status = snapshot.status;
    }
    clearInteractions();
    render();
  },
  setMoveCount(moveCount) {
    state.moveCount = moveCount;
    render();
  },
  setStatus(status) {
    state.status = status;
    if (status !== "playing") {
      freezeTimer();
    }
    render();
  },
  switchLevel(levelIndex) {
    switchLevel(levelIndex);
  },
  getGenreMeta(genreKey) {
    const genre = getGenreByKey(genreKey);
    if (!genre) {
      return null;
    }
    return {
      key: genre.key,
      label: genre.label,
      wordCount: genre.words.length,
      cardCount: genre.words.length + 1,
      words: [...genre.words],
    };
  },
  simulateTouchDrag(source, target) {
    return simulateTouchDragGesture(source, target);
  },
  debugTouchDrag(source, target) {
    return debugTouchDragGesture(source, target);
  },
};

refs.retryButton.addEventListener("click", initGame);
refs.nextLevelButton.addEventListener("click", () => {
  if (state.currentLevelIndex < LEVELS.length - 1) {
    switchLevel(state.currentLevelIndex + 1);
  }
});
refs.hintButton.addEventListener("click", () => {
  setMessage(findHint());
  render();
});
refs.stockButton.addEventListener("click", drawFromStock);
refs.recycleButton.addEventListener("click", recycleWaste);
refs.selectionTrayClear.addEventListener("click", () => {
  clearInteractions();
  setMessage(UI_TEXT.messages.deselect);
  render();
});
document.addEventListener("pointermove", handleTouchPointerMove, { passive: false });
document.addEventListener("pointerup", handleTouchPointerUp);
document.addEventListener("pointercancel", handleTouchPointerCancel);

initGame();
