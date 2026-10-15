---
name: 阿良 One Liang
description: A one-page freelance front-end portfolio filed as Taiwanese office case folders (卷宗) on a pressboard-green desk.
colors:
  desk: "#1E5A45"
  desk-deep: "#174836"
  desk-ink: "#F4F3EE"
  desk-ink-soft: "#CFE1D7"
  kraft: "#CFA86C"
  kraft-deep: "#B48A50"
  kraft-ink: "#1F1A13"
  kraft-ink-soft: "#3D3120"
  paper: "#F7F6F1"
  paper-line: "#D8D4C8"
  ink: "#1C1B19"
  ink-soft: "#55524A"
  print-white: "#FBFAF6"
  stamp: "#C2301D"
  stamp-on-kraft: "#7A180E"
  stamp-ink: "#FFF8F0"
  pen: "#172866"
  sun: "#F2B705"
  sun-ink: "#1C1B19"
  metal: "#7F878F"
  shadow-tint: "#061A12"
  desk-dark: "#0D2219"
  desk-deep-dark: "#08170F"
  desk-ink-dark: "#E8EEE9"
  desk-ink-soft-dark: "#A9C3B6"
  kraft-dark: "#4A3B27"
  kraft-deep-dark: "#3A2E1E"
  kraft-ink-dark: "#F3E9D6"
  kraft-ink-soft-dark: "#D6C4A3"
  paper-dark: "#1C2420"
  paper-line-dark: "#34403A"
  ink-dark: "#ECEEE9"
  ink-soft-dark: "#B3BCB6"
  stamp-dark: "#FF7A63"
  stamp-on-kraft-dark: "#FF8A72"
  stamp-ink-dark: "#1C1B19"
  pen-dark: "#A9BCFF"
  metal-dark: "#9AA3AA"
  shadow-tint-dark: "#000000"
typography:
  display:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(2.1rem, 0.85rem + 5vw, 4.75rem)"
    fontWeight: 900
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 3vw, 3.5rem)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(1.45rem, 1.05rem + 1.3vw, 2.125rem)"
    fontWeight: 900
    lineHeight: 1.25
  title-sm:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 900
    lineHeight: 1.3
  lede:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.3vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.8
  body:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.8
  body-prose:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.95
  label:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.2em"
  tab:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.2
  button:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.2
  stamp:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 900
    lineHeight: 1.45
    letterSpacing: "0.12em"
  typed:
    fontFamily: "Courier Prime, Noto Sans TC, ui-monospace, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
  typed-index:
    fontFamily: "Courier Prime, Noto Sans TC, ui-monospace, monospace"
    fontSize: "0.9375rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  hand:
    fontFamily: "LXGW WenKai TC, Noto Sans TC, serif"
    fontSize: "clamp(1.05rem, 0.95rem + 0.4vw, 1.25rem)"
    fontWeight: 700
    lineHeight: 1.3
  hand-tag:
    fontFamily: "LXGW WenKai TC, Noto Sans TC, serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
rounded:
  print: "2px"
  paper: "3px"
  seal: "4px"
  control: "6px"
  chip: "8px"
  tab: "10px"
  folder: "12px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  header: "4.25rem"
  section-open: "clamp(5rem, 10vw, 8.5rem)"
  section-mid: "clamp(3rem, 6vw, 5rem)"
  section-close: "clamp(4rem, 8vw, 7rem)"
  tab-rise: "2.15rem"
  folder-overlap: "1rem"
  gap-xs: "0.5rem"
  gap-sm: "0.75rem"
  gap-md: "1.25rem"
  gap-lg: "2.5rem"
components:
  button-desk:
    backgroundColor: "{colors.desk}"
    textColor: "{colors.desk-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0.55rem 1.15rem"
    height: "2.875rem"
  button-desk-hover:
    backgroundColor: "{colors.desk-deep}"
  button-desk-night:
    backgroundColor: "{colors.desk-ink-dark}"
    textColor: "{colors.desk-dark}"
  button-sun:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.sun-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0.55rem 1.15rem"
    height: "2.875rem"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.kraft-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0.55rem 1.15rem"
    height: "2.875rem"
  button-line-light:
    backgroundColor: "transparent"
    textColor: "{colors.desk-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0.55rem 1.15rem"
    height: "2.875rem"
  index-tab:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.kraft-ink}"
    typography: "{typography.tab}"
    rounded: "{rounded.tab}"
    padding: "1.15rem clamp(0.6rem, 1.6vw, 1.15rem) 0.6rem"
  index-tab-current:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  index-tab-contact:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.sun-ink}"
  theme-toggle-tab:
    backgroundColor: "{colors.desk-deep}"
    textColor: "{colors.desk-ink}"
    rounded: "{rounded.tab}"
    padding: "1.15rem 0.9rem 0.6rem"
  brand-seal:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.stamp-ink}"
    rounded: "{rounded.seal}"
    size: "2.25rem"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.desk-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.chip}"
    padding: "0.4rem 0.95rem"
    height: "2.75rem"
  filter-chip-pressed:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.kraft-ink}"
  hero-cover:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.kraft-ink}"
    rounded: "{rounded.folder}"
    padding: "clamp(1.4rem, 4vw, 3.25rem)"
  case-folder:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.kraft-ink}"
    rounded: "{rounded.folder}"
    padding: "clamp(2.75rem, 5vw, 3.75rem) clamp(1rem, 3.2vw, 2.75rem)"
  case-tab:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.kraft-ink}"
    typography: "{typography.typed-index}"
    rounded: "{rounded.tab}"
    padding: "0.15rem 1.6rem 0"
    height: "2.3rem"
  photo-print:
    backgroundColor: "{colors.print-white}"
    padding: "clamp(0.4rem, 0.9vw, 0.7rem)"
  open-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.pen}"
    typography: "{typography.hand-tag}"
    rounded: "{rounded.print}"
    padding: "0.15rem 0.65rem"
  stamp-chip:
    backgroundColor: "transparent"
    textColor: "{colors.stamp-on-kraft}"
    typography: "{typography.stamp}"
    rounded: "{rounded.seal}"
    padding: "0 0.45rem"
  stamp-label-paper:
    backgroundColor: "transparent"
    textColor: "{colors.stamp}"
    rounded: "{rounded.seal}"
    padding: "0 0.45rem"
  demo-link:
    textColor: "{colors.pen}"
    typography: "{typography.typed}"
  pencil-note:
    textColor: "{colors.kraft-ink-soft}"
    typography: "{typography.hand}"
  paper-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paper}"
    padding: "clamp(1.5rem, 4.5vw, 3.25rem)"
  commission-form:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paper}"
    padding: "clamp(1.5rem, 5vw, 4rem)"
  tick-box:
    backgroundColor: "transparent"
    textColor: "{colors.stamp}"
    rounded: "{rounded.paper}"
    size: "1.6rem"
  skill-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.typed}"
    rounded: "{rounded.paper}"
    padding: "0.1rem 0.55rem"
  binding-spine:
    backgroundColor: "{colors.kraft-deep}"
    textColor: "{colors.kraft-ink}"
    rounded: "{rounded.seal}"
    padding: "3.6rem 0 1.25rem 2rem"
    width: "11.5rem"
  binding-spine-current:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  index-strip:
    backgroundColor: "{colors.desk-deep}"
    textColor: "{colors.desk-ink}"
    padding: "0.55rem clamp(1rem, 4vw, 3rem)"
  index-strip-link:
    backgroundColor: "transparent"
    textColor: "{colors.desk-ink}"
    rounded: "{rounded.control}"
    padding: "0.3rem 0.65rem"
  index-strip-link-current:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.kraft-ink}"
  toast:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.1rem"
  skip-link:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.sun-ink}"
    rounded: "{rounded.control}"
    padding: "0.6rem 1rem"
---

# Design System: 阿良 One Liang

## Overview

**Creative North Star: "The Case-File Desk (卷宗桌)"**

The page is a desk in a Taiwanese office. A pressboard-green desk owns the ground. Kraft case folders (卷宗) with index tabs hold the work. Cool file paper holds anything meant for reading. Vermilion rubber stamps mark status and type, ballpoint-pen blue marks only what opens something, and pencil graphite carries the handwritten notes. Every component is an object you would find on that desk. The page takes its grid language from the form printed on the folder cover: field rows, a fixed label column and heavy rules.

Density is calm and readable. CJK body text runs large and loose (1.0625rem, line-height 1.8 to 1.95), and hierarchy comes only from size contrast between Noto Sans TC Black display type and regular body type. Objects sit a little askew (−0.8° to 3°) and cast soft, green-tinted contact shadows. When they move, they move like paper: folders settle onto the desk, prints slide out of the folder mouth, stamps press down, and pencil leaders draw themselves in. Light mode is the default. Dark mode is a night version of the same desk that the visitor turns on with the toggle tab.

Confirmed rejections: the industry-default portfolio (copy on the left, avatar on the right, then a row of equal work cards); cream or warm paper (the file paper is cool on purpose, so it reads against the kraft); and yellow fills on kraft, which fail WCAG 1.4.11 boundary contrast.

**Key Characteristics:**
- Three materials with three ink sets: desk green, kraft folder, cool file paper.
- Every case uses the same printed field rows: 類型 / 技術 / 簡述 / 網址.
- Stamps are ink impressions: a transparent ground, a currentColor border, roughened edges, multiply blending.
- Each typeface has one job: Noto Sans TC for the voice, Courier Prime for typed data, LXGW WenKai TC for handwriting.
- Paper-physics motion (expo.out), all of it gated behind prefers-reduced-motion.
- Index tabs hang from the header. The binding spine marks your place in the stack.

## Colors

Pressboard green, kraft and cool white paper form the ground. Vermilion, sun yellow and pen blue are inks, and each ink has one rule about where it may appear.

### Primary
- **Pressboard Green** (#1E5A45): the desk. It fills the page ground, the header and the contact section, and it fills primary buttons placed on kraft or paper. Against kraft its boundary contrast is 3.64:1, which is why the hero's 寄信洽詢 button is green, not yellow. It is also the `theme-color`.
- **Desk Deep** (#174836): the shadowed edge of the desk. Used for the footer, the theme-toggle tab, the mobile index strip, the hover state of the desk button, and the punched holes in the binding spine.

### Secondary
- **Vermilion Stamp** (#C2301D): stamp ink on file paper (the 報價 label and the commission ticks) and the solid ground of the 良 seal. It reaches 5.2:1 on paper.
- **Kraft Stamp Oxblood** (#7A180E): the same stamp ink pressed into kraft, which absorbs it and darkens it. Used for the type chips and the hero 接案中 seal. It reaches 4.8:1 on flat kraft, and the chips are 19.2px at weight 900, so they also qualify as large text.
- **Seal Paper** (#FFF8F0): the paper showing through the carved 良 character on the 白文 brand seal.

### Tertiary
- **Avatar Sun** (#F2B705): taken from the sparkles in the hand-drawn avatar. It has three jobs only: primary actions on the green desk, the focus ring on the desk, and the 聯絡 index tab. It reaches 4.44:1 against the desk.
- **Sun Ink** (#1C1B19): text on sun fills.
- **Ballpoint Blue** (#172866): reserved for links (the case 網址 rows) and the handwritten 開啟網站 tags, plus the focus ring on kraft and paper. It reaches 6.18:1 on kraft and 12.67:1 on paper.

### Neutral
- **Kraft** (#CFA86C): the folder material, used for the hero cover, case bodies and tabs, index tabs, and pressed filter chips. It always carries procedural SVG grain (`--grain-kraft`, with `--grain-fiber` added on large surfaces).
- **Kraft Deep** (#B48A50): the back flap of the hero folder and the binding spine.
- **Kraft Ink** (#1F1A13): text and the 2.5px form rules on kraft.
- **Pencil Graphite** (#3D3120): the handwritten notes, the memo lines, field labels and the lede on kraft.
- **File Paper** (#F7F6F1): a cool, slightly grey white used for the commission form, the about sheets, the toast, the 開啟網站 tag and the current index tab. It is deliberately not cream.
- **Paper Rule** (#D8D4C8): the inset frame and row dividers on paper.
- **Ink** (#1C1B19) / **Ink Soft** (#55524A): text on paper, primary and secondary.
- **Print White** (#FBFAF6): the border of photo prints (the ID photo and case screenshots). It stays light in dark mode because a print is a print.
- **Desk Chalk** (#F4F3EE) / **Desk Chalk Soft** (#CFE1D7): text on the desk, primary and secondary.
- **Clip Metal** (#7F878F): paperclips and the binding fastener.
- **Shadow Tint** (#061A12): the channel for every shadow (`rgb(var(--shadow-rgb) / α)`), so shadows read as the desk's own dark green, not grey.

### Night Desk (dark tokens)
Under `[data-theme="dark"]`, each `-dark` token replaces its light counterpart. The desk goes to near-black green (#0D2219). Kraft goes to a dark board (#4A3B27), and its fibre layer becomes finer and lighter (fractal-noise frequency 0.05×0.42, alpha 0.22), so it still reads as paper and not as wood. File paper goes to a dark green-grey (#1C2420). Both stamp reds become coral (#FF7A63 on paper, #FF8A72 on kraft), and pen blue becomes #A9BCFF. Sun yellow does not change. The desk button inverts to a chalk fill with desk-colored text.

Note on the direction contract: the brief named kraft #C49A5C and stamp #C8331F. The build settled on the values above, and the build values are the normative ones.

### Named Rules
**The Sun Is for Doing Rule.** Sun yellow appears only where the visitor acts on the green desk: primary buttons, the focus ring and the 聯絡 tab. It never fills anything on kraft or paper, where it measures 1.22:1 against kraft.

**The Pen Opens Things Rule.** Ballpoint blue means "this opens something": links and the 開啟網站 tags. Headings, notes and decoration never use it.

**The Two Reds Rule.** Stamp ink depends on what it lands on: #C2301D on paper and #7A180E on kraft. The paper red on kraft measures 2.54:1, so never cross them.

**The Focus Follows the Ground Rule.** `--focus` is set by the surface the 3px ring lands on: sun on the desk, pen blue on kraft or paper.

## Typography

**Display Font:** Noto Sans TC 900 (fallbacks PingFang TC, Microsoft JhengHei, sans-serif)
**Body Font:** Noto Sans TC 400 / 500 / 700
**Label/Mono Font:** Courier Prime 400 / 700, for typed data only (falls back to Noto Sans TC for CJK glyphs)
**Handwriting Font:** LXGW WenKai TC 700 (霞鶩文楷 TC)

**Character:** The voice is a heavy, plain-spoken CJK sans. The typewriter face fills in the fields of the form, and the brush-like kaishu handles the pencil notes. Each face has a single job, so you can tell what kind of mark you are reading from its face alone.

### Hierarchy
- **Display** (900, clamp(2.1rem → 4.75rem), 1.12): the hero headline and the contact headline. 4.75rem is the ceiling.
- **Headline** (900, clamp(2rem → 3.5rem), 1.15): section titles (作品卷宗, 服務委託單, 關於阿良).
- **Title** (900, clamp(1.45rem → 2.125rem), 1.25): case names on the folder label.
- **Title Small** (900, 1.375rem / 1.25rem): sheet titles and commission row titles.
- **Lede** (400, clamp(1rem → 1.125rem), 1.8): intro lines, max 34em.
- **Body** (400, 1.0625rem, 1.8): everything else. Prose paragraphs run at 1.95 with a 38em measure.
- **Label** (700, 0.8125–0.875rem, letter-spacing 0.18–0.2em): printed field labels (承辦人, 類型, 技術, 網址) in the form's label column. These are form captions, not kickers.
- **Tab / Button** (700, 0.95rem / 1.0625rem, 1.2): index tabs, buttons, filter chips.
- **Stamp** (900, 1.2rem, 1.45, letter-spacing 0.12em): type chips. Stamp text is at least 19px bold.
- **Typed** (Courier Prime 400–700, 0.875–0.9375rem; the email address scales to 2.25rem): case numbers No.01–08, URLs, tech lists, filter counts, the email address.
- **Hand** (LXGW WenKai TC 700, clamp(1.05rem → 1.25rem), 1.3): pencil notes with leader arrows. The same face appears on the 開啟網站 tag (1rem), the peek label and memo lines.

### Named Rules
**The Typed Is Data Rule.** Courier Prime sets only data a clerk would type into the form: case numbers, URLs, tech lists, index numbers, counts, the email address. It is not a costume for "technical", so never use it for headings, labels or prose.

**The Size Is Hierarchy Rule.** Rank comes from size contrast between 900 and 400, never from color or a third weight. The same Noto Sans TC Black carries every level of title.

**The Pencil Rule.** Handwritten notes are pencil graphite (#3D3120 on kraft). The only pen-blue handwriting is the 開啟網站 tag, because it opens something.

**The CJK Leading Rule.** Running CJK text stays at 1.0625rem with line-height 1.8 to 1.95. Tighter leading (1.12–1.3) is only for 900-weight titles of 1.375rem and up, and for one-line UI labels.

## Layout

The desk is full-bleed. Content sits in centered containers inside a fluid gutter (clamp(1rem, 4vw, 3rem)): 77.5rem for the header and works, 70rem for the hero folder and the commission form, 72rem for the about sheets. The header is sticky at 4.25rem, and `scroll-padding-top` clears it plus 1rem.

- **Hero cover:** a two-column grid, with the headline beside the photo and the field rows spanning beneath. On mobile it stacks: photo, headline, fields. The folder is rotated −0.8° (0° below 48rem), with the back flap sitting behind it at +1.8°.
- **Works:** below 75rem, a single column of folders under a sticky index strip. At 75rem and above, two columns: an 11.5rem binding spine and the folders, with a 2.5rem gap. Folders overlap by 1rem, and their tabs step across the width by index (`--tab` 0–3, a 21% step on desktop and 9% on mobile), so the stack staggers the way real folders do. At 64rem and above, the case body splits 1.7fr / 1fr, and even-numbered cases flip sides.
- **Commission form:** at 48rem and above, the head and the item lists go two-column. At 64rem and above, each row title moves into an 11rem left column.
- **About:** at 64rem and above, two columns (1.35fr / 1fr). The attachment sheet drops 4.5rem and overlaps the profile sheet by 2.5rem.
- **Contact:** centered on the desk below a 2px dashed rule.
- **Rhythm:** sections open with clamp(5rem, 10vw, 8.5rem) of space, mid sections with clamp(3rem, 6vw, 5rem), and they close with clamp(4rem, 8vw, 7rem). Inline gaps step through 0.5 / 0.75 / 1.25 / 2.5rem.
- **The form is the grid:** field blocks are framed by 2.5px kraft-ink rules top and bottom, with 1px rows at 45–55% ink. Each row has a fixed label column (5.5em on the cover and 3.6em in cases; 4em on the cover on mobile).

## Elevation & Depth

Depth is physical: paper stacked on a desk. Surfaces are tonally distinct (desk, then kraft, then paper). Thicker objects cast longer, softer contact shadows. Every shadow uses a large negative spread, so it pools under the object instead of haloing around it, and in light mode every shadow is tinted with the desk's own green-black. Kraft surfaces also get a one-pixel inset highlight along the top edge. Slight rotation adds to the sense of depth. There are no hard offset shadows.

Material is procedural. `--grain-kraft` is fractal noise at 0.9. `--grain-fiber` is directional fibres (0.008×0.42, made finer and lighter in dark mode). `--grain-desk` is noise at 0.7. All three are inline SVG data URIs. The `#ink` SVG filter (turbulence plus a 1.1 displacement plus a speckle mask) roughens and speckles stamp edges.

### Shadow Vocabulary
- **Folder** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.15) inset, 0 24px 48px -30px rgb(var(--shadow-rgb) / 0.95)`): case bodies. The hero cover uses 0 28px 56px -30px with a 0.18 highlight.
- **Sheet** (`box-shadow: 0 26px 52px -32px rgb(var(--shadow-rgb) / 0.95)`): about sheets. The commission form goes one step thicker: 0 30px 60px -36px.
- **Flap / Spine** (`box-shadow: 0 18px 40px -24px rgb(var(--shadow-rgb) / 0.9)`): the hero back flap. The spine uses 0 18px 34px -22px plus an inset right-edge shade, `inset -8px 0 12px -10px`.
- **Print** (`box-shadow: 0 16px 28px -18px rgb(var(--shadow-rgb) / 0.85)`): case screenshots. The ID photo uses 0 14px 22px -14px / 0.8.
- **Tab** (`box-shadow: 0 8px 14px -10px rgb(var(--shadow-rgb) / 0.8)`): index tabs, the theme toggle, the current spine entry. The 開啟網站 tag uses 0 8px 14px -8px / 0.75.
- **Lift** (`box-shadow: 0 8px 16px -10px rgb(var(--shadow-rgb) / 0.7)`): button hover only.
- **Header** (`box-shadow: 0 10px 24px -18px rgb(var(--shadow-rgb) / 0.9)`): appears once the hero folder scrolls out of view.
- **Toast** (`box-shadow: 0 16px 32px -16px rgb(var(--shadow-rgb) / 0.9)`).
- **Clip** (`filter: drop-shadow(1px 2px 1px rgb(var(--shadow-rgb) / 0.35))`): paperclips and the fastener.

### Named Rules
**The Thickness Rule.** Shadow length follows how thick the object is: folders and sheets > flap and spine > print > tab and tag. A new object takes the shadow of the real object it imitates.

**The Contact Shadow Rule.** Every shadow uses negative spread and the desk-green tint. A shadow that rings an element, or a flat black offset shadow, does not belong on this desk.

## Shapes

Corners are asymmetric because folders are asymmetric. A folder body is 4–6px at the corner its tab grows from and 12px everywhere else. Folder tabs are trapezoids, 10px at the top corners, clipped to `polygon(7% 0, 93% 0, 100% 100%, 0 100%)`. Index tabs hang from the header with only their bottom corners rounded (0 0 10px 10px). Filter chips are tab-shaped too (8px 8px 2px 2px). File paper is nearly square (3px). Photo prints are square, the 開啟網站 tag is 2px, seals and stamp borders are 4px, and controls (buttons, the toast, the skip link, strip links) are 6px. The spine is 4px on its bound edge and 2px on its free edge.

Lines carry the paperwork: 2.5px solid rules frame each form block, 1px rules divide rows, a 3px double rule closes the commission-form head, a 1.5px inset frame borders the commission sheet, and a 2px dashed rule opens the contact section. Recurring drawn shapes are the paperclip (a 28×72 SVG path with a round 3px stroke), the two-post binding fastener, the punched holes down the spine, the 24px icon set (1.75 stroke, round caps and joins), and the pencil leader arrows (2.2 stroke).

## Components

### Buttons
Sturdy and printed, like a rubber-stamped action on a form.
- **Shape:** gently squared (6px), 2px border slot, min-height 2.875rem, icon plus label with a 0.5rem gap.
- **Desk (primary on kraft and paper):** a Pressboard Green fill with Desk Chalk text. Hovering deepens it to Desk Deep. In dark mode it inverts to a chalk fill with desk text.
- **Sun (primary on the desk):** an Avatar Sun fill with Sun Ink text. Used only in the contact section.
- **Line (secondary):** transparent, with a 2px currentColor border on kraft and paper. The light version on the desk has a Desk Chalk Soft border.
- **Hover / Focus:** lifts −2px with the Lift shadow (0.25s, expo-out curve) and settles back when pressed. Focus is a 3px solid `--focus` ring with a 3px offset. `aria-busy` drops the button to 0.7 opacity with a progress cursor.

### Navigation: Hanging Index Tabs
- **Style:** kraft tabs with grain, hanging from the sticky desk header, with their bottom corners rounded and the Tab shadow. Labels are 0.95rem/700.
- **States:** hovering drops a tab 4px. The current section's tab turns to File Paper and drops 8px, as if pulled out of the drawer. 聯絡 is always a sun tab.
- **Theme toggle:** the last tab, in Desk Deep with a chalk inset baseline. It shows a moon icon plus 夜間模式, or a sun icon plus 日間模式, and the label hides below 48rem. Its `aria-pressed` tracks dark mode.
- **Brand:** the 良 seal (a solid 白文 seal: a stamp fill, Seal Paper character, and a 2px inner ring at 55%) beside 阿良 at 900, with One Liang hidden below 48rem.

### Filter Chips
- **Style:** tab-shaped (8px 8px 2px 2px), transparent on the desk, with a 2px chalk border at 40%. A Courier Prime count follows the label.
- **State:** the pressed chip becomes a kraft tab with grain (`aria-pressed="true"`). Hovering firms the border to full chalk. Filtering reorders the folders with GSAP Flip (0.7s expo.out). Entering folders rise 40px, leaving folders lift 20px and fade.

### Hero Cover Form
The opened case folder. A kraft cover with the back flap visible behind it, and a 委託案件 tab on the flap. The headline sits top-left. The ID photo is a white-bordered print, clipped on at 3°, with the 接案中 round seal pressed across it at −14°. Below sit the printed field rows (承辦人 / 服務 / 經手 / 聯絡), and the 聯絡 row holds the desk button and the line button. A peek of the No.01 folder below the cover links to the works.

### Case Folder (signature)
- **Tab:** a trapezoid kraft tab with a Courier Prime No.0x label, offset by index.
- **Body:** kraft with fibre and grain, 12px corners (6px at the top-left), the Folder shadow, and generous padding (clamp(2.75rem, 5vw, 3.75rem) block).
- **Print:** the screenshot (2:1, cropped from the top) on a Print White mount tilted ±1°, held by a paperclip. Hovering straightens it and lifts it 6px. A paper 開啟網站 tag in pen blue sits in the bottom corner.
- **Label:** the case title at Title size, then the printed field rows 類型 (an ink stamp chip) / 技術 (typed) / 簡述 / 網址 (a pen-blue typed link with an external-arrow icon). Archived sites add a pencil memo.
- **Pencil notes:** two LXGW WenKai notes with hand-drawn leader arrows, placed around the print at 64rem and above. Below that, they line up as a plain row and the arrows are hidden.
- **Motion:** at 78% of the viewport (once), the print slides out of the folder (yPercent 14, ±4°, 1.1s), the stamp drops (scale 1.8, back.out, 0.45s), and the leaders draw in (DrawSVG, 0.6s, staggered 0.12s).

### Ink Stamps
- **Impression stamps:** a transparent ground, a 2px currentColor border, 4px corners, weight 900, letter-spacing 0.12–0.2em, rotated −2° to −3°, `filter: url(#ink)`, and `mix-blend-mode: multiply` in light mode (normal in dark). Use the type chip on kraft (#7A180E) and the 報價 label on paper (#C2301D).
- **Round seal:** the hero 接案中 SVG seal: a double ring, a typed ring legend, and the word at 900. It is pressed in with scale 1.9 and −40°, back.out(2.2), 0.55s.
- **Brand seal:** the only solid seal (白文). Never use a solid fill for a status or type stamp.

### Binding Spine / Index Strip
- **Desktop (75rem and above):** a sticky Kraft Deep spine 1.75rem below the header. It has a metal two-post fastener on top, punched holes down its bound edge, and No.0x (typed) plus the case name per entry. Hovering nudges an entry 3px right. The current case becomes a paper slip that sticks 1rem out of the spine with the Tab shadow.
- **Below 75rem:** a sticky Desk Deep strip under the header that scrolls horizontally. It shows outlined typed No.0x chips (6px corners, a 1.5px chalk border at 35%), with names visually hidden. The current case becomes a kraft chip.

### Inputs: Commission Ticks
- **Style:** each service is a full-row label (6px corners, padding 0.55rem 0.5rem) with a hover wash of paper rule at 35%. The box is 1.6rem, with a 2px ink border and 3px corners.
- **Checked:** a vermilion check is stamped in (scale 1.6 → 1, 0.35s expo-out, opacity 0.15s), and the label turns bold.
- **Focus:** the native checkbox is transparent over the row, so the 3px pen-blue ring draws around the box.

### Attachment Sheet and Skill Tags
File paper tilted 1.2° and clipped to the profile sheet (tilted −0.5°) with a paperclip. Skill groups use the Label style. Tags are typed, on paper, with a 1.5px ink border at 55% and 3px corners.

### Toast and Skip Link
- **Toast:** a paper slip at the bottom center (6px corners, 700, the Toast shadow). It rises 1rem into place over 0.35s, stays for 2.6s, and is announced via `role="status"`.
- **Skip link:** a sun fill with Sun Ink, off-screen until focused, then it slides in at the top left with a chalk focus ring.

### Known Gaps (shipped, not rules)
The build ships with these open items. They are defects to fix later, not patterns to copy.
1. The desktop binding spine is a separate sticky column about 40px from the folders, not attached to their edge.
2. The punched holes repeat every 1.7rem down the spine and read like list bullets.
3. The mobile index strip gives no cue that No.06–08 are off-screen to the right.
4. The hero's No.01 peek sliver fades into the desk through a mask gradient instead of ending on a hard paper edge, and the real No.01 tab appears just below it, so No.01 shows twice.

### Drift Noted at Documentation (not rules)
- Pen blue also colors the commission form's handwritten status line, which is outside its reservation for links and 開啟網站.
- Courier Prime is applied to two pieces that are not data: the 委託案件 flap label (it actually renders in the Noto Sans TC fallback) and the hero seal's ring legend.
- Sun yellow also appears in `::selection` on every surface, and in the contact email's underline and hover color.
- The favicon is an outlined (朱文) seal in #9C2416, a red that is not a token, while the header uses the solid 白文 seal in stamp red.
- Print White and the screenshot placeholders (#ECE8DD, #E9E6DC) are literal values, not custom properties.
- The cover-form rows (承辦人 / 服務 / 經手 / 聯絡) are set in Noto Sans TC. The brief specified typed rows of 承辦人 / 服務 / 狀態.

## Do's and Don'ts

### Do:
- **Do** put every new surface on one of the three materials (desk #1E5A45, kraft #CFA86C, file paper #F7F6F1), and take its text color from that material's ink tokens.
- **Do** use the desk-green button for primary actions on kraft or paper, and the sun button only on the green desk.
- **Do** set `--focus` by the surface the ring lands on: sun on the desk, pen blue on kraft or paper (3px solid, 3px offset).
- **Do** stamp, don't fill: a transparent ground, a 2px currentColor border, `filter: url(#ink)`, multiply in light mode, rotated −2° to −14°.
- **Do** keep stamp text on kraft at 1.2rem/900 or larger in #7A180E, and use #C2301D only on paper.
- **Do** set Courier Prime only on typed data: case numbers, URLs, tech lists, counts, the email address.
- **Do** write annotations in LXGW WenKai TC 700 in pencil graphite (#3D3120).
- **Do** keep running text at 1.0625rem with line-height 1.8 (1.95 for prose), with measures of 34–40em.
- **Do** tint every shadow with `--shadow-rgb` and give it negative spread, sized to the object's thickness.
- **Do** keep content visible in the HTML and animate with GSAP `.from()` (expo.out) inside `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`.
- **Do** default to light and switch to dark only through the toggle, stored in `localStorage['liang-theme']` and applied before first paint.

### Don't:
- **Don't** fill controls with sun yellow on kraft or paper (1.22:1 against kraft fails WCAG 1.4.11).
- **Don't** use pen blue for headings, notes, rules or decoration. It means "this opens something".
- **Don't** warm the file paper toward cream. Its coolness is what separates it from kraft.
- **Don't** put the paper red #C2301D on kraft (2.54:1).
- **Don't** use Courier Prime as a "technical" costume for headings, labels or prose.
- **Don't** follow `prefers-color-scheme`. Dark mode is the visitor's choice only.
- **Don't** give a status or type stamp a solid fill. The 良 brand mark is the only solid seal.
- **Don't** build hierarchy with color or extra weights. Size contrast between 900 and 400 carries it.
- **Don't** use hard offset shadows, or untinted black shadows in light mode.
- **Don't** lay the work out as a row of equal cards beside a copy-left, avatar-right hero.
