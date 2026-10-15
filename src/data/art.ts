// 清線派插畫：每條線都是同一支筆（CSS 的 .art 統一 2px、non-scaling-stroke），
// 只用平塗色，不用漸層與陰影。填色用 class 對應色票，夜間版只換色票、不換圖。

type Fill = 'white' | 'sky' | 'sky-pale' | 'sand' | 'sand-pale' | 'hill' | 'cap' | 'red' | 'green' | 'ink' | 'steel' | 'screen'

const f = (fill: Fill): string => `class="f-${fill}"`

const svg = (viewBox: string, body: string, className: string, ratio = 'xMidYMid meet'): string =>
  `<svg class="art ${className}" viewBox="${viewBox}" preserveAspectRatio="${ratio}" aria-hidden="true" focusable="false">${body}</svg>`

/** 雲：平底，上緣三個圓弧 */
const cloud = (x: number, y: number, w: number): string => {
  const h = w * 0.3
  return `<path ${f('white')} d="M${x} ${y} H${x + w} A${h * 0.6} ${h * 0.6} 0 0 0 ${x + w * 0.9} ${y - h * 0.9} A${h} ${h} 0 0 0 ${x + w * 0.55} ${y - h * 1.3} A${h * 1.05} ${h * 1.05} 0 0 0 ${x + w * 0.16} ${y - h * 0.8} A${h * 0.55} ${h * 0.55} 0 0 0 ${x} ${y} Z"/>`
}

/** 開場格：塔式起重機吊著一個網頁視窗，吊臂下掛著紅色「接案中」告示牌 */
export function artCrane(): string {
  const tower: string[] = []
  for (let y = 60; y < 400; y += 22) {
    tower.push(`M300 ${y} H322`, y % 44 === 16 ? `M300 ${y} L322 ${y + 22}` : `M322 ${y} L300 ${y + 22}`)
  }
  const truss = (from: number, to: number): string => {
    let d = `M${from} 60`
    for (let x = from; x < to; x += 20) d += ` L${Math.min(x + 10, to)} 44 L${Math.min(x + 20, to)} 60`
    return d
  }

  return svg(
    '0 0 420 400',
    `
<g class="sun"><circle ${f('cap')} cx="376" cy="156" r="24"/></g>
<g class="moon"><path ${f('cap')} d="M376 132 A24 24 0 0 0 376 180 A28 28 0 0 1 376 132 Z"/></g>
${cloud(214, 176, 72)}
${cloud(18, 166, 86)}
<g class="crane">
  <path d="M300 60 V400 M322 60 V400 ${tower.join(' ')}"/>
  <path d="M311 6 L300 44 M311 6 L322 44 M311 6 L56 44 M311 6 L404 44"/>
  <path d="M40 44 H404 M40 60 H404 M40 44 V60 M404 44 V60"/>
  <path d="${truss(40, 300)} ${truss(322, 404)}"/>
  <rect ${f('cap')} x="292" y="60" width="38" height="28" rx="3"/>
  <rect ${f('sky-pale')} x="298" y="66" width="16" height="11" rx="1"/>
  <rect ${f('steel')} x="370" y="60" width="34" height="32" rx="2"/>
  <path d="M378 70 H396 M378 80 H396"/>
  <rect ${f('steel')} x="112" y="60" width="22" height="8" rx="2"/>
  <path d="M226 60 V78 M270 60 V78"/>
  <rect ${f('red')} x="214" y="78" width="68" height="36" rx="3"/>
  <text class="sign" x="248" y="102.5" text-anchor="middle">接案中</text>
</g>
<g class="load" data-crane-load>
  <path d="M123 68 V150"/>
  <rect ${f('cap')} x="113" y="150" width="20" height="13" rx="3"/>
  <path d="M123 163 V170 M123 170 L42 192 M123 170 L202 192"/>
  <rect ${f('white')} x="32" y="190" width="180" height="124" rx="4"/>
  <path ${f('sand')} d="M32 194 A4 4 0 0 1 36 190 H208 A4 4 0 0 1 212 194 V207 H32 Z"/>
  <circle ${f('white')} cx="43" cy="198.5" r="3.2"/>
  <circle ${f('white')} cx="53" cy="198.5" r="3.2"/>
  <circle ${f('white')} cx="63" cy="198.5" r="3.2"/>
  <rect ${f('white')} x="76" y="194" width="112" height="9" rx="4.5"/>
  <rect ${f('sky-pale')} x="42" y="215" width="160" height="40"/>
  <path ${f('hill')} d="M42 255 L80 229 L98 241 L124 222 L166 255 Z"/>
  <circle ${f('cap')} cx="182" cy="228" r="6"/>
  <path d="M42 266 H138 M42 276 H112"/>
  <rect ${f('sky')} x="150" y="263" width="52" height="15" rx="7.5"/>
  <rect ${f('sand-pale')} x="42" y="286" width="48" height="20"/>
  <rect ${f('sand-pale')} x="98" y="286" width="48" height="20"/>
  <rect ${f('sand-pale')} x="154" y="286" width="48" height="20"/>
</g>`,
    'art--crane',
    'xMaxYMax meet',
  )
}

interface Building {
  x: number
  w: number
  top: number
  fill: Fill
  roof?: 'tank' | 'antenna' | 'shed'
}

const BUILDINGS: Building[] = [
  { x: 0, w: 64, top: 118, fill: 'sand-pale', roof: 'tank' },
  { x: 64, w: 52, top: 84, fill: 'white' },
  { x: 116, w: 84, top: 128, fill: 'sand' },
  { x: 200, w: 58, top: 70, fill: 'sky-pale', roof: 'antenna' },
  { x: 258, w: 92, top: 112, fill: 'white', roof: 'tank' },
  { x: 350, w: 60, top: 92, fill: 'sand' },
  { x: 410, w: 104, top: 126, fill: 'sand-pale', roof: 'shed' },
  { x: 514, w: 66, top: 80, fill: 'white', roof: 'tank' },
  { x: 580, w: 86, top: 116, fill: 'sand' },
  { x: 666, w: 56, top: 64, fill: 'sky-pale', roof: 'antenna' },
  { x: 722, w: 96, top: 104, fill: 'white', roof: 'shed' },
  { x: 818, w: 70, top: 124, fill: 'sand', roof: 'tank' },
  { x: 888, w: 74, top: 96, fill: 'sand-pale' },
]

/** 開場格下緣：遠山與城市天際線，頂樓有水塔、天線與鐵皮加蓋 */
export function artSkyline(): string {
  const parts = BUILDINGS.map((b, bi) => {
    const cols = Math.floor((b.w - 14) / 16)
    const start = b.x + (b.w - (cols * 16 - 6)) / 2
    const windows: string[] = []
    for (let j = 0, y = b.top + 12; y + 11 < 180; j += 1, y += 20) {
      for (let i = 0; i < cols; i += 1) {
        const lit = (i * 5 + j * 3 + bi * 7) % 4 === 0
        windows.push(`<rect class="f-window${lit ? ' is-lit' : ''}" x="${start + i * 16}" y="${y}" width="10" height="11"/>`)
      }
    }
    let roof = ''
    if (b.roof === 'tank') {
      const tx = b.x + b.w - 28
      roof = `<path d="M${tx + 3} ${b.top} V${b.top - 6} M${tx + 15} ${b.top} V${b.top - 6}"/><rect ${f('steel')} x="${tx}" y="${b.top - 20}" width="18" height="14" rx="4"/>`
    } else if (b.roof === 'antenna') {
      const ax = b.x + b.w / 2
      roof = `<path d="M${ax} ${b.top} V${b.top - 26} M${ax - 8} ${b.top - 18} H${ax + 8} M${ax - 5} ${b.top - 24} H${ax + 5}"/>`
    } else if (b.roof === 'shed') {
      roof = `<path ${f('steel')} d="M${b.x + 10} ${b.top} V${b.top - 12} L${b.x + 52} ${b.top - 18} V${b.top} Z"/>`
    }
    return `${roof}<rect ${f(b.fill)} x="${b.x}" y="${b.top}" width="${b.w}" height="${190 - b.top}"/>${windows.join('')}`
  }).join('')

  return svg(
    '0 0 960 200',
    `<path ${f('hill')} d="M-2 96 Q80 40 170 78 Q250 22 360 70 Q440 38 530 74 Q650 18 760 66 Q850 40 962 60 V202 H-2 Z"/>
${parts}
<rect ${f('sand')} x="-2" y="186" width="964" height="16"/>`,
    'art--skyline',
    'xMidYMax slice',
  )
}

/** 夜間版的星星（日間隱藏）。桌機只鋪在開場格右側的天空，不壓到標題 */
export function artStars(): string {
  const points: [number, number][] = [
    [30, 40], [90, 118], [150, 26], [212, 86], [270, 18], [330, 64], [384, 30], [56, 214], [246, 158], [362, 140], [126, 178], [300, 250],
  ]
  const stars = points
    .map(([x, y], i) => {
      const r = i % 3 === 0 ? 5 : 3.5
      const k = r * 0.3
      return `<path class="star f-cap" d="M${x} ${y - r} L${x + k} ${y - k} L${x + r} ${y} L${x + k} ${y + k} L${x} ${y + r} L${x - k} ${y + k} L${x - r} ${y} L${x - k} ${y - k} Z"/>`
    })
    .join('')
  return svg('0 0 400 300', stars, 'art--stars', 'xMidYMid slice')
}

/** 條漫第一格：設計稿、色票、游標與鉛筆 */
export function artComp(): string {
  return svg(
    '0 0 240 150',
    `
<rect ${f('white')} x="30" y="14" width="152" height="122" rx="2"/>
<rect ${f('sky-pale')} x="40" y="24" width="132" height="10"/>
<rect ${f('sand-pale')} x="40" y="40" width="132" height="44"/>
<path ${f('hill')} d="M40 84 L76 58 L94 70 L120 52 L172 84 Z"/>
<circle ${f('cap')} cx="152" cy="54" r="7"/>
<path d="M40 96 H138 M40 106 H116"/>
<circle ${f('sky')} cx="52" cy="123" r="6"/>
<circle ${f('sand')} cx="70" cy="123" r="6"/>
<circle ${f('hill')} cx="88" cy="123" r="6"/>
<path ${f('ink')} d="M144 98 V121 L150 115.5 L155 126 L159.5 124 L154.5 113.5 L162 113 Z"/>
<g transform="rotate(22 212 84)">
  <rect ${f('sand')} x="205" y="18" width="14" height="10" rx="2"/>
  <rect ${f('cap')} x="205" y="28" width="14" height="80"/>
  <path ${f('sand-pale')} d="M205 108 L212 126 L219 108 Z"/>
  <path ${f('ink')} d="M209.5 120 L212 126 L214.5 120 Z"/>
</g>`,
    'art--strip',
  )
}

/** 條漫第二格：程式碼與後端 API */
export function artCode(): string {
  return svg(
    '0 0 240 150',
    `
<rect ${f('white')} x="18" y="12" width="152" height="104" rx="4"/>
<rect ${f('screen')} x="26" y="20" width="136" height="86" rx="2"/>
<g class="code">
  <path class="s-cap" d="M36 32 H62"/><path class="s-sky" d="M70 32 H118"/>
  <path class="s-sand" d="M46 44 H92"/><path class="s-white" d="M100 44 H132"/>
  <path class="s-sky" d="M46 56 H80"/>
  <path class="s-white" d="M56 68 H118"/>
  <path class="s-sand" d="M56 80 H98"/><path class="s-cap" d="M106 80 H122"/>
  <path class="s-sky" d="M36 94 H60"/>
</g>
<path ${f('steel')} d="M82 116 L76 132 H112 L106 116 Z"/>
<rect ${f('steel')} x="62" y="132" width="64" height="6" rx="3"/>
<path class="dash" d="M172 66 H188"/>
<path d="M176 61 L171 66 L176 71 M184 61 L189 66 L184 71"/>
<rect ${f('sand-pale')} x="190" y="38" width="40" height="28" rx="3"/>
<rect ${f('sand-pale')} x="190" y="66" width="40" height="28" rx="3"/>
<circle ${f('green')} cx="200" cy="52" r="3.5"/>
<circle ${f('green')} cx="200" cy="80" r="3.5"/>
<path d="M210 52 H222 M210 80 H222"/>`,
    'art--strip',
  )
}

/** 條漫第三格：同一個網站在電腦、平板、手機上 */
export function artDevices(): string {
  const layout = (x: number, y: number, w: number, h: number): string => {
    const pad = Math.max(4, w * 0.07)
    const iw = w - pad * 2
    return `<rect ${f('sky-pale')} x="${x + pad}" y="${y + pad}" width="${iw}" height="${h * 0.1}"/>
<rect ${f('sand-pale')} x="${x + pad}" y="${y + pad + h * 0.17}" width="${iw}" height="${h * 0.34}"/>
<path d="M${x + pad} ${y + h * 0.7} H${x + pad + iw * 0.72} M${x + pad} ${y + h * 0.82} H${x + pad + iw * 0.5}"/>`
  }
  return svg(
    '0 0 240 150',
    `
<path d="M4 138 H236"/>
<rect ${f('white')} x="10" y="26" width="120" height="80" rx="4"/>
${layout(10, 26, 120, 80)}
<path ${f('steel')} d="M62 106 L58 126 H82 L78 106 Z"/>
<rect ${f('steel')} x="46" y="126" width="48" height="6" rx="3"/>
<rect ${f('white')} x="140" y="50" width="56" height="84" rx="6"/>
${layout(144, 56, 48, 68)}
<circle ${f('white')} cx="168" cy="128" r="2.5"/>
<rect ${f('white')} x="204" y="78" width="30" height="58" rx="5"/>
${layout(206, 84, 26, 44)}
<path d="M226 64 L232 54 M236 72 L244 68 M216 62 L215 52"/>`,
    'art--strip',
  )
}

/** 服務：切版開發 */
export function artBuild(): string {
  return svg(
    '0 0 200 110',
    `
<rect ${f('white')} x="14" y="10" width="112" height="88" rx="4"/>
<path ${f('sand')} d="M14 14 A4 4 0 0 1 18 10 H122 A4 4 0 0 1 126 14 V24 H14 Z"/>
<circle ${f('white')} cx="23" cy="17" r="2.6"/><circle ${f('white')} cx="31" cy="17" r="2.6"/><circle ${f('white')} cx="39" cy="17" r="2.6"/>
<rect ${f('sky-pale')} x="22" y="32" width="96" height="28"/>
<rect ${f('sand-pale')} x="22" y="68" width="28" height="22"/>
<rect ${f('sand-pale')} x="56" y="68" width="28" height="22"/>
<rect ${f('sand-pale')} x="90" y="68" width="28" height="22"/>
<rect ${f('white')} x="116" y="30" width="40" height="72" rx="6"/>
<rect ${f('sky-pale')} x="122" y="40" width="28" height="16"/>
<rect ${f('sand-pale')} x="122" y="62" width="28" height="12"/>
<rect ${f('sand-pale')} x="122" y="78" width="28" height="12"/>
<path d="M168 42 L178 36 M170 56 H182 M168 70 L178 76"/>`,
    'art--service',
  )
}

/** 服務：功能開發（表單驗證、API 串接） */
export function artFeature(): string {
  return svg(
    '0 0 200 110',
    `
<rect ${f('white')} x="14" y="8" width="80" height="94" rx="4"/>
<rect ${f('white')} x="24" y="20" width="60" height="13" rx="3"/>
<rect ${f('white')} x="24" y="40" width="60" height="13" rx="3"/>
<rect ${f('cap')} x="24" y="62" width="11" height="11" rx="2"/>
<path d="M26.5 67.5 L29 70 L33 64.5 M41 67.5 H70"/>
<rect ${f('sky')} x="24" y="82" width="40" height="12" rx="6"/>
<path class="dash" d="M98 55 H130"/>
<path d="M103 50 L97 55 L103 60 M125 50 L131 55 L125 60"/>
<rect ${f('sand-pale')} x="136" y="24" width="48" height="30" rx="3"/>
<rect ${f('sand-pale')} x="136" y="54" width="48" height="30" rx="3"/>
<circle ${f('green')} cx="147" cy="39" r="3.5"/><circle ${f('green')} cx="147" cy="69" r="3.5"/>
<path d="M157 39 H174 M157 69 H174"/>`,
    'art--service',
  )
}

/** 服務：SEO、無障礙、GA／GTM */
export function artExtra(): string {
  return svg(
    '0 0 200 110',
    `
<path ${f('steel')} d="M70 70 L78 62 L102 86 A5.7 5.7 0 0 1 94 94 Z"/>
<circle ${f('white')} cx="52" cy="48" r="30"/>
<circle ${f('ink')} cx="52" cy="32" r="5"/>
<path d="M36 42 H68 M52 42 V58 M52 58 L43 72 M52 58 L61 72"/>
<path d="M118 96 H190"/>
<rect ${f('sky')} x="124" y="64" width="16" height="32"/>
<rect ${f('sand')} x="146" y="46" width="16" height="50"/>
<rect ${f('cap')} x="168" y="28" width="16" height="68"/>
<path d="M128 52 L152 34 L170 18 M162 18 H170 V26"/>`,
    'art--service',
  )
}

/** 聯絡：台灣街頭的紅綠郵筒，一封信飛向紅色郵筒（人行道由 CSS 畫滿整格） */
export function artMailbox(): string {
  const box = (x: number, top: number, fill: Fill): string => `
<rect ${f('steel')} x="${x - 8}" y="258" width="82" height="12" rx="2"/>
<path ${f(fill)} d="M${x} 258 V${top} A33 33 0 0 1 ${x + 66} ${top} V258 Z"/>
<path d="M${x} ${top} H${x + 66}"/>
<rect ${f('ink')} x="${x + 12}" y="${top + 18}" width="42" height="7" rx="3.5"/>
<rect ${f('white')} x="${x + 14}" y="${top + 44}" width="38" height="30" rx="2"/>
<path d="M${x + 21} ${top + 54} H${x + 45} M${x + 21} ${top + 64} H${x + 38}"/>`

  return svg(
    '0 0 360 272',
    `
${box(92, 138, 'green')}
${box(192, 122, 'red')}
<path class="dash" d="M272 92 Q252 112 240 136"/>
<g transform="rotate(-16 300 70)">
  <rect ${f('white')} x="274" y="52" width="54" height="36" rx="2"/>
  <path d="M274 54 L301 75 L328 54"/>
</g>
<path d="M334 34 L354 24 M342 58 L362 54 M336 84 L356 90"/>`,
    'art--mailbox',
  )
}

/** 頁首品牌：黃色對話框裡的「良」 */
export function artBrand(): string {
  return `<svg class="brand__mark" viewBox="0 0 48 40" aria-hidden="true" focusable="false"><path class="f-cap" d="M24 3C36.2 3 45 9.4 45 17.5S36.2 32 24 32c-2.6 0-5-.3-7.3-.8L7.5 37.5l2.6-8.6C5.6 26.3 3 22.2 3 17.5 3 9.4 11.8 3 24 3Z"/><text x="24" y="24" text-anchor="middle">良</text></svg>`
}

/** 對話框尾巴（指向說話的人） */
export const balloonTail = `<svg class="balloon__tail" viewBox="0 0 32 30" aria-hidden="true" focusable="false"><path d="M3 0C8 11 7 20 1 29 14 23 24 13 30 0"/></svg>`
