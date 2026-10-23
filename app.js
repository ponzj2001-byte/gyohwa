(function () {
  "use strict";
  const D = window.APP_DATA;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  const UI = {
    ko: { searchPh: "용어·내용 검색", order: "교화 순서", toc: "목차", search: "검색", gloss: "용어", more: "북마크·설정", home: "홈",
      bookmarks: "북마크", settings: "설정", fontSize: "글자 크기", theme: "화면", rate: "읽기 속도", autoNext: "다 읽으면 다음 쪽으로",
      pages: "쪽 목록", prev: "이전", next: "다음", font: "글자", resume: "마지막으로 본 곳", go: "이어보기", start: "처음부터",
      startSub: "1장부터 시작", soon: "준비 중", done: "완료", light: "밝게", dark: "어둡게", auto: "자동",
      noBm: "북마크한 쪽이 없음. 읽기 화면 위쪽 ☆을 누르면 저장됨", noRes: "찾는 내용이 없음", where: "나온 곳",
      bmAdd: "북마크에 저장함", bmDel: "북마크를 지움", kyoOn: "교화 모드: 글씨를 크게 보여 줌", kyoOff: "교화 모드를 끔",
      showA: "정답 보기", ask: "확인 질문", src: "출처", noVoice: "이 폰에 한국어 읽기 음성이 없음. 설정 > 텍스트 음성 변환에서 설치",
      about: "샘플 버전: 1~2장만 들어 있음. 모든 내용은 폴더의 원자료에서 가져왔고, 쪽마다 출처를 표시함. 인터넷 없이도 작동함.",
      pg: (a, b) => `${a} / ${b}쪽`, chN: (n) => `${n}장`, terms: "용어",
      shareTitle: "앱 설치·보내기", shareBtn: "이 앱을 다른 분께 보내기 (카톡 등)", installHow: "내 폰에 앱으로 설치하는 방법", voiceHow: "읽어주기 음성이 안 나올 때",
      instT: "이 폰에 앱으로 설치하기", instP: "홈 화면에 아이콘이 생기고, 인터넷이 없어도 열림", instBtn: "지금 설치", instHow: "설치 방법 보기",
      shareMsg: "교화 길잡이 앱 주소입니다. 아래 주소를 눌러 열고, 화면 안내에 따라 ‘홈 화면에 추가’를 누르면 앱으로 설치됩니다.",
      copied: "주소를 복사함. 카톡 대화창에 붙여넣기 하면 됨", installed: "설치됨. 홈 화면의 ‘교화 길잡이’ 아이콘으로 열면 됨",
      notOnline: "아직 인터넷 주소에 올리기 전이라 보낼 주소가 없음. 설치 매뉴얼 1부를 먼저 진행",
      howChrome: ["<b>크롬</b>으로 이 앱 주소를 엶", "오른쪽 위 <b>⋮</b>(점 세 개)를 누름", "<b>홈 화면에 추가</b> 또는 <b>앱 설치</b>를 누름", "<b>설치</b>를 누름", "홈 화면에 생긴 <b>교화 길잡이</b> 아이콘으로 엶"],
      howSamsung: ["<b>삼성 인터넷</b>으로 이 앱 주소를 엶", "아래쪽 <b>☰</b>(줄 세 개)를 누름", "<b>페이지 추가</b>(또는 현재 페이지 추가) → <b>홈 화면</b>을 누름", "<b>추가</b>를 누름", "홈 화면에 생긴 <b>교화 길잡이</b> 아이콘으로 엶"],
      howNote: "설치한 뒤 한 번 열어 두면 인터넷이 없어도 열림. 마지막에 본 쪽이 저장되어 다음에 그 쪽부터 열림",
      voiceSteps: ["폰 <b>설정</b>을 엶", "위쪽 검색(돋보기)에 <b>텍스트 음성 변환</b>을 입력해 엶", "<b>기본 엔진</b>에서 <b>삼성 TTS</b> 또는 <b>Google 음성 인식 및 음성 합성</b>을 고름", "엔진 옆 <b>⚙</b>(톱니) → <b>음성 데이터 설치</b>(또는 언어)에서 <b>한국어</b>를 받음. 영어판을 쓰려면 <b>English</b>도 받음", "앱으로 돌아와 ▶를 다시 누름"],
      chromeT: "크롬에서 설치", samsungT: "삼성 인터넷에서 설치", voiceT: "읽어주기 음성 설치" },
    en: { searchPh: "Search terms and text", order: "Teaching order", toc: "Contents", search: "Search", gloss: "Terms", more: "Saved · Settings", home: "Home",
      bookmarks: "Bookmarks", settings: "Settings", fontSize: "Text size", theme: "Theme", rate: "Reading speed", autoNext: "Go to next page after reading",
      pages: "Pages", prev: "Prev", next: "Next", font: "Text", resume: "Last viewed", go: "Continue", start: "Start",
      startSub: "Begin with Chapter 1", soon: "Coming soon", done: "Done", light: "Light", dark: "Dark", auto: "Auto",
      noBm: "No bookmarks yet. Tap ☆ at the top of a page to save it", noRes: "No results", where: "Appears in",
      bmAdd: "Bookmarked", bmDel: "Bookmark removed", kyoOn: "Teaching mode: larger text", kyoOff: "Teaching mode off",
      showA: "Show answer", ask: "Check question", src: "Source", noVoice: "No English voice on this phone. Install one in Settings > Text-to-speech",
      about: "Sample version: Chapters 1–2 only. All content comes from the source files, with the source on every page. Works offline. (English is a draft translation.)",
      pg: (a, b) => `${a} / ${b}`, chN: (n) => `Ch. ${n}`, terms: "Terms",
      shareTitle: "Install · Share", shareBtn: "Send this app to someone (KakaoTalk etc.)", installHow: "How to install on my phone", voiceHow: "If read-aloud has no voice",
      instT: "Install as an app on this phone", instP: "Adds an icon to the home screen and opens without internet", instBtn: "Install now", instHow: "How to install",
      shareMsg: "Here is the Gyohwa Guide app. Open the link and tap ‘Add to Home screen’ to install it as an app.",
      copied: "Link copied. Paste it into a chat", installed: "Installed. Open it from the ‘Gyohwa Guide’ icon on the home screen",
      notOnline: "Not online yet, so there is no link to send. Do Part 1 of the install manual first",
      howChrome: ["Open the app link in <b>Chrome</b>", "Tap <b>⋮</b> at the top right", "Tap <b>Add to Home screen</b> or <b>Install app</b>", "Tap <b>Install</b>", "Open it from the <b>Gyohwa Guide</b> icon"],
      howSamsung: ["Open the app link in <b>Samsung Internet</b>", "Tap <b>☰</b> at the bottom", "Tap <b>Add page to</b> → <b>Home screen</b>", "Tap <b>Add</b>", "Open it from the <b>Gyohwa Guide</b> icon"],
      howNote: "After opening it once, it works without internet. The last page you viewed is saved",
      voiceSteps: ["Open phone <b>Settings</b>", "Search <b>Text-to-speech</b>", "Choose <b>Samsung TTS</b> or <b>Google</b> as the preferred engine", "Tap <b>⚙</b> next to the engine → <b>Install voice data</b>, and download <b>Korean</b> and <b>English</b>", "Return to the app and tap ▶ again"],
      chromeT: "Install in Chrome", samsungT: "Install in Samsung Internet", voiceT: "Install read-aloud voices" }
  };

  /* ---------- 저장 (마지막 본 쪽 등) ---------- */
  const KEY = "gyohwa.v1";
  const S = Object.assign({ lang: "ko", last: null, font: 1, theme: "auto", rate: 1, auto: false, bm: [], seen: {}, kyo: false }, load());
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  const L = () => D[S.lang];
  const T = () => UI[S.lang];
  let cur = { ch: 1, i: 0 };
  let view = "home";

  /* ---------- 공통 ---------- */
  function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function rich(s) { return esc(s).replace(/\{\{(\w+)\|([^}]+)\}\}/g, '<span class="term" data-term="$1">$2</span>'); }
  function plain(s) { return String(s).replace(/\{\{\w+\|([^}]+)\}\}/g, "$1"); }
  function toast(m) { const t = $("#toast"); t.textContent = m; t.classList.add("on"); clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove("on"), 1800); }
  function chapter(n) { return L().chapters[n]; }
  function partOf(n) { const r = D.toc.find((x) => x[1] === n); return D.parts.find((p) => p.id === r[0]); }
  function tocTitle(n) { const r = D.toc.find((x) => x[1] === n); return S.lang === "ko" ? r[2] : r[3]; }
  function allPages() { const out = []; Object.keys(L().chapters).forEach((c) => chapter(c).pages.forEach((p, i) => out.push({ ch: +c, i, p }))); return out; }

  function applyPrefs() {
    document.documentElement.lang = S.lang;
    const fs = [15, 17, 19.5, 22][S.font];
    document.documentElement.style.setProperty("--fs", fs + "px");
    const dark = S.theme === "dark" || (S.theme === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.body.classList.toggle("kyo", !!S.kyo);
    $$("[data-t]").forEach((el) => { const k = el.dataset.t; const v = k in T() ? T()[k] : L()[k]; if (typeof v === "string") el.textContent = v; });
    $$(".lang button").forEach((b) => b.classList.toggle("on", b.dataset.lang === S.lang));
    $("#q").placeholder = T().searchPh; $("#gq").placeholder = T().terms;
  }

  /* ---------- 화면 전환 ---------- */
  function go(v, push = true) {
    stopSpeak();
    view = v;
    $$(".view").forEach((s) => s.classList.toggle("on", s.id === "v-" + v));
    $("#tabs").classList.toggle("hide", v === "read");
    $$("#tabs button").forEach((b) => b.classList.toggle("on", b.dataset.go === v));
    if (v === "home") renderHome();
    if (v === "toc") renderToc();
    if (v === "search") { renderSearch(); setTimeout(() => $("#q").focus(), 50); }
    if (v === "gloss") renderGloss();
    if (v === "more") renderMore();
    if (push) history.pushState({ v }, "");
    window.scrollTo(0, 0);
  }
  window.addEventListener("popstate", (e) => { closeSheet(); go((e.state && e.state.v) || "home", false); });

  /* ---------- 홈 ---------- */
  function chRow(n, extra) {
    const p = partOf(n); const has = !!L().chapters[n];
    const isCur = S.last && S.last.ch === n;
    const done = has && chapter(n).pages.every((pg) => S.seen[pg.id]);
    const st = !has ? T().soon : isCur ? T().pg(S.last.i + 1, chapter(n).pages.length) : done ? "✓ " + T().done : "";
    return `<button class="ch ${has ? "" : "lock"} ${isCur ? "cur" : ""}" data-open="${has ? n : ""}" ${extra || ""}>
      <span class="no" style="background:${has ? p.color : "#aaa"}">${n}</span><span class="tt">${esc(tocTitle(n))}</span><span class="st">${st}</span></button>`;
  }
  function renderHome() {
    const r = $("#resume");
    if (S.last && L().chapters[S.last.ch]) {
      const pg = chapter(S.last.ch).pages[S.last.i];
      r.innerHTML = `<div><small>${T().resume}</small><b>${T().chN(S.last.ch)} ${esc(chapter(S.last.ch).title)}</b><small>${T().pg(S.last.i + 1, chapter(S.last.ch).pages.length)} · ${esc(plain(pg.sec))}</small></div><button class="go" data-resume>${T().go}</button>`;
    } else {
      r.innerHTML = `<div><small>${T().start}</small><b>${esc(L().appName)}</b><small>${T().startSub}</small></div><button class="go" data-open="1">${T().start}</button>`;
    }
    let h = ""; D.parts.slice(0, 2).forEach((p) => {
      h += `<div class="part" style="background:${p.color}">${esc(S.lang === "ko" ? p.ko : p.en)}</div>`;
      D.toc.filter((x) => x[0] === p.id).forEach((x) => (h += chRow(x[1])));
    });
    h += `<button class="ch" data-go="toc"><span class="tt" style="text-align:center">${T().toc} ›</span></button>`;
    $("#home-list").innerHTML = h;
    renderInstall();
  }
  function renderToc() {
    let h = "";
    D.parts.forEach((p) => {
      h += `<div class="part" style="background:${p.color}">${esc(S.lang === "ko" ? p.ko : p.en)}</div>`;
      D.toc.filter((x) => x[0] === p.id).forEach((x) => {
        h += chRow(x[1]);
        if (L().chapters[x[1]]) h += chapter(x[1]).pages.map((pg, i) => `<button class="sl" style="padding-left:18px;font-size:14px" data-open="${x[1]}" data-i="${i}">${esc(plain(pg.sec))}</button>`).join("");
      });
    });
    $("#toc-list").innerHTML = h;
  }

  /* ---------- 읽기 ---------- */
  function openPage(ch, i, dir) {
    stopSpeak();
    const c = chapter(ch); if (!c) return;
    i = Math.max(0, Math.min(i, c.pages.length - 1));
    cur = { ch, i };
    S.last = { ch, i }; S.seen[c.pages[i].id] = 1; save();
    if (view !== "read") go("read");
    const el = $("#page");
    const draw = () => { el.innerHTML = pageHTML(c.pages[i]); el.className = "page"; window.scrollTo(0, 0); };
    if (dir) { el.classList.add(dir > 0 ? "out-l" : "out-r"); setTimeout(draw, 160); } else draw();
    $("#r-title").textContent = `${T().chN(ch)} ${c.title}`;
    $("#r-pn").textContent = T().pg(i + 1, c.pages.length);
    $("#r-bar").style.width = ((i + 1) / c.pages.length) * 100 + "%";
    $("#r-bm").classList.toggle("on", S.bm.includes(c.pages[i].id));
    $("#r-bm").textContent = S.bm.includes(c.pages[i].id) ? "★" : "☆";
    $("#r-kyo").classList.toggle("on", !!S.kyo);
  }
  function step(d) {
    const c = chapter(cur.ch); const n = cur.i + d;
    if (n >= 0 && n < c.pages.length) return openPage(cur.ch, n, d), true;
    const nc = cur.ch + d;
    if (L().chapters[nc]) return openPage(nc, d > 0 ? 0 : chapter(nc).pages.length - 1, d), true;
    return false;
  }
  function li(it) {
    if (typeof it === "string") return `<li>${rich(it)}</li>`;
    return `<li>${rich(it.x)}<ul class="subl">${it.sub.map((s) => `<li>${rich(s)}</li>`).join("")}</ul></li>`;
  }
  function layer(b) { return `<div class="layer"><span class="n t${b.tone}">${esc(b.n)}</span><div>${rich(b.x)}${b.sub ? `<span class="sub">${rich(b.sub)}</span>` : ""}</div></div>`; }
  function blockHTML(b) {
    switch (b.t) {
      case "p": return `<p class="blk">${rich(b.x)}</p>`;
      case "list": return `<ol class="lst blk">${b.items.map(li).join("")}</ol>`;
      case "table": return `<div class="blk">${b.cap ? `<div class="tcap">${rich(b.cap)}</div>` : ""}<table class="tb"><tr>${b.head.map((h) => `<th>${rich(h)}</th>`).join("")}</tr>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${rich(c)}</td>`).join("")}</tr>`).join("")}</table></div>`;
      case "layer": return layer(b);
      case "group": return `<div class="grp blk"><div class="gt">${rich(b.title)}</div><div class="gx">${rich(b.x)}</div>${b.items.map(layer).join("")}</div>`;
      case "quote": return `<div class="quote blk">${b.who ? `<span class="who">${rich(b.who)}</span>` : ""}${rich(b.x)}</div>`;
      case "img": return `<figure class="blk"><img src="${b.src}" alt="${esc(b.cap)}" loading="lazy"><figcaption>${rich(b.cap)}</figcaption></figure>`;
      case "note": return `<div class="note blk"><b>${rich(b.title)}</b>${rich(b.x)}</div>`;
      case "map": return `<div class="map blk">${b.rows.map((r) => `<button class="t${r[3]}" data-jump="${r[2]}"><span class="n">${esc(r[0])}</span>${esc(r[1])}</button>`).join("")}</div>`;
    }
    return "";
  }
  function pageHTML(p) {
    return `<div class="sec">${rich(p.sec)}</div><span class="tag">${rich(p.tag)}</span>
      <div class="core" data-say>${rich(p.core)}</div>
      ${p.blocks.map(blockHTML).join("")}
      ${p.q ? `<div class="qa"><b>❓ ${T().ask}</b><div>${rich(p.q.q)}</div><div class="ans">${rich(p.q.a)}</div><button data-ans>${T().showA}</button></div>` : ""}
      <div class="src">${T().src} · ${esc(p.src)}</div>`;
  }
  function pageText(p) {
    const parts = [plain(p.sec), plain(p.core)];
    p.blocks.forEach((b) => {
      if (b.t === "list") b.items.forEach((it) => { if (typeof it === "string") return parts.push(plain(it)); parts.push(plain(it.x)); it.sub.forEach((s) => parts.push(plain(s))); });
      else if (b.t === "table") { if (b.cap) parts.push(plain(b.cap)); b.rows.forEach((r) => parts.push(r.map(plain).filter(Boolean).join(", "))); }
      else if (b.t === "layer") parts.push(plain(b.n + ". " + b.x + (b.sub ? ". " + b.sub : "")));
      else if (b.t === "group") { parts.push(plain(b.title), plain(b.x)); b.items.forEach((x) => parts.push(plain(x.n + ". " + x.x + (x.sub ? ". " + x.sub : "")))); }
      else if (b.t === "quote") parts.push(plain((b.who || "") + " " + b.x));
      else if (b.t === "note") parts.push(plain(b.title + ". " + b.x));
      else if (b.t === "img") parts.push(plain(b.cap));
      else if (b.t === "map") b.rows.forEach((r) => parts.push(r[0] + ", " + r[1]));
      else if (b.x) parts.push(plain(b.x));
    });
    return parts.filter(Boolean);
  }

  /* ---------- 읽어주기 (TTS) ---------- */
  let speaking = false, queue = [];
  function voiceFor() {
    const want = S.lang === "ko" ? "ko" : "en";
    const vs = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith(want));
    return vs.find((v) => /google|samsung/i.test(v.name)) || vs[0] || null;
  }
  function speakPage() {
    if (!("speechSynthesis" in window)) return toast(T().noVoice);
    stopSpeak();
    const v = voiceFor();
    if (!v && speechSynthesis.getVoices().length) toast(T().noVoice);
    queue = pageText(chapter(cur.ch).pages[cur.i]);
    speaking = true; $("#r-play").classList.add("on"); $("#r-play").textContent = "❚❚";
    next();
    function next() {
      if (!speaking) return;
      if (!queue.length) {
        speaking = false; setPlay();
        if (S.auto && step(1)) setTimeout(speakPage, 600);
        return;
      }
      const u = new SpeechSynthesisUtterance(queue.shift());
      u.lang = S.lang === "ko" ? "ko-KR" : "en-US"; if (v) u.voice = v; u.rate = S.rate;
      u.onend = next; u.onerror = () => { speaking = false; setPlay(); };
      speechSynthesis.speak(u);
    }
  }
  function setPlay() { $("#r-play").classList.toggle("on", speaking); $("#r-play").textContent = speaking ? "❚❚" : "▶"; }
  function stopSpeak() { speaking = false; queue = []; try { speechSynthesis.cancel(); } catch (e) {} if ($("#r-play")) setPlay(); }
  if ("speechSynthesis" in window) speechSynthesis.onvoiceschanged = () => {};

  /* ---------- 시트 (용어 풀이·쪽 목록·글자 크기) ---------- */
  function openSheet(html) { $("#sheet-body").innerHTML = html; $("#sheet").classList.add("on"); $("#sheet-bg").classList.add("on"); }
  function closeSheet() { $("#sheet").classList.remove("on"); $("#sheet-bg").classList.remove("on"); }
  function wherePages(id) { return allPages().filter((x) => JSON.stringify(x.p).includes("{{" + id + "|")); }
  function termSheet(id) {
    const g = L().glossary[id]; if (!g) return;
    const other = D[S.lang === "ko" ? "en" : "ko"].glossary[id];
    const w = wherePages(id);
    openSheet(`<div class="tw">${esc(g.w)}<small>${esc(g.h)}</small></div>
      <div class="ten">${other ? esc(other.w) : ""}</div>
      <div class="td">${esc(g.d)}</div>
      <div style="margin:12px 0"><button class="chip" data-sayterm="${id}">🔊 ${S.lang === "ko" ? "읽어주기" : "Read aloud"}</button></div>
      <div class="label">${T().where} (${w.length})</div>
      ${w.map((x) => `<button class="sl" data-open="${x.ch}" data-i="${x.i}">${T().chN(x.ch)} · ${esc(plain(x.p.sec))}</button>`).join("")}
      <div class="src">${T().src} · ${esc(g.s)}</div>`);
  }
  function listSheet() {
    const c = chapter(cur.ch);
    openSheet(`<div class="tw" style="font-size:18px">${T().chN(cur.ch)} ${esc(c.title)}</div>
      ${c.pages.map((p, i) => `<button class="sl ${i === cur.i ? "on" : ""}" data-open="${cur.ch}" data-i="${i}">${esc(plain(p.sec))}</button>`).join("")}`);
  }
  function fontSheet() {
    openSheet(`<div class="tw" style="font-size:18px">${T().fontSize}</div><div class="seg" style="margin:12px 0">${segBtns("font", ["가", "가", "가", "가"], [0, 1, 2, 3], true)}</div>
      <div class="tw" style="font-size:18px">${T().rate}</div><div class="seg" style="margin:12px 0">${segBtns("rate", ["0.8", "1.0", "1.2", "1.5"], [0.8, 1, 1.2, 1.5])}</div>`);
  }
  function segBtns(key, labels, vals, sized) {
    return vals.map((v, i) => `<button class="${S[key] === v ? "on" : ""}" data-set="${key}" data-val="${v}" ${sized ? `style="font-size:${13 + i * 3}px"` : ""}>${labels[i]}</button>`).join("");
  }

  /* ---------- 검색·용어·북마크 ---------- */
  function renderSearch() {
    const q = $("#q").value.trim(); const box = $("#results");
    if (!q) { box.innerHTML = ""; return; }
    const ql = q.toLowerCase(); let h = "";
    Object.entries(L().glossary).forEach(([id, g]) => {
      if ((g.w + g.h + g.d).toLowerCase().includes(ql)) h += `<button class="res" data-term="${id}"><small>${T().terms}</small><b>${mark(g.w, q)}</b> ${esc(g.h)}<div>${mark(g.d, q)}</div></button>`;
    });
    allPages().forEach((x) => {
      const txt = pageText(x.p).join(" "); const k = txt.toLowerCase().indexOf(ql);
      if (k >= 0) h += `<button class="res" data-open="${x.ch}" data-i="${x.i}"><small>${T().chN(x.ch)} · ${esc(plain(x.p.sec))}</small>${mark(txt.slice(Math.max(0, k - 30), k + q.length + 50), q)}</button>`;
    });
    box.innerHTML = h || `<p class="fine">${T().noRes}</p>`;
  }
  function mark(s, q) { const e = esc(s); const r = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"); return e.replace(r, (m) => `<mark>${m}</mark>`); }
  function renderGloss() {
    const q = $("#gq").value.trim().toLowerCase();
    const items = Object.entries(L().glossary).filter(([, g]) => !q || (g.w + g.h + g.d).toLowerCase().includes(q))
      .sort((a, b) => a[1].w.localeCompare(b[1].w, S.lang));
    $("#gloss-list").innerHTML = items.map(([id, g]) => `<button class="res" data-term="${id}"><b>${esc(g.w)}</b> <small style="display:inline">${esc(g.h)}</small><div>${esc(g.d)}</div></button>`).join("");
  }
  function renderMore() {
    const bms = allPages().filter((x) => S.bm.includes(x.p.id));
    $("#bm-list").innerHTML = bms.length ? bms.map((x) => `<button class="res" data-open="${x.ch}" data-i="${x.i}"><small>${T().chN(x.ch)} ${esc(chapter(x.ch).title)}</small>${esc(plain(x.p.sec))}</button>`).join("") : `<p class="fine">${T().noBm}</p>`;
    $("#s-font").innerHTML = segBtns("font", ["가", "가", "가", "가"], [0, 1, 2, 3], true);
    $("#s-theme").innerHTML = segBtns("theme", [T().auto, T().light, T().dark], ["auto", "light", "dark"]);
    $("#s-rate").innerHTML = segBtns("rate", ["0.8", "1.0", "1.2", "1.5"], [0.8, 1, 1.2, 1.5]);
    $("#s-auto").checked = !!S.auto;
  }

  /* ---------- 설치·보내기 ---------- */
  let installEvt = null;
  const standalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const online = () => /^https?:$/.test(location.protocol) && !/^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  const appUrl = () => location.origin + location.pathname.replace(/index\.html$/, "");
  window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installEvt = e; renderInstall(); });
  window.addEventListener("appinstalled", () => { installEvt = null; renderInstall(); toast(T().installed); });
  function renderInstall() {
    const box = $("#install"); if (!box) return;
    if (standalone()) { box.classList.remove("on"); return; }
    box.classList.add("on");
    box.innerHTML = `<b>📲 ${T().instT}</b><p>${T().instP}</p><div class="btns">
      ${installEvt ? `<button class="btn" id="i-now">${T().instBtn}</button>` : ""}
      <button class="btn ${installEvt ? "ghost" : ""}" id="i-how">${T().instHow}</button></div>`;
  }
  function stepsHTML(title, arr) { return `<div class="tw" style="font-size:18px">${title}</div><ol class="steps">${arr.map((s) => `<li>${s}</li>`).join("")}</ol>`; }
  function installSheet() {
    openSheet(stepsHTML(T().chromeT, T().howChrome) + stepsHTML(T().samsungT, T().howSamsung) + `<p class="fine">${T().howNote}</p>`);
  }
  function voiceSheet() { openSheet(stepsHTML(T().voiceT, T().voiceSteps)); }
  async function shareApp() {
    if (!online()) return toast(T().notOnline);
    const url = appUrl(); const text = T().shareMsg;
    if (navigator.share) { try { await navigator.share({ title: L().appName, text, url }); return; } catch (e) { if (e.name === "AbortError") return; } }
    try { await navigator.clipboard.writeText(text + "\n" + url); toast(T().copied); }
    catch (e) { openSheet(`<div class="td">${esc(text)}</div><div class="link">${esc(url)}</div>`); }
  }
  document.addEventListener("click", async (e) => {
    if (e.target.closest("#i-now") && installEvt) { installEvt.prompt(); await installEvt.userChoice; installEvt = null; renderInstall(); }
    if (e.target.closest("#i-how,#m-install")) installSheet();
    if (e.target.closest("#m-voice")) voiceSheet();
    if (e.target.closest("#m-share")) shareApp();
  });

  /* ---------- 이벤트 ---------- */
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-term],[data-open],[data-go],[data-lang],[data-resume],[data-jump],[data-ans],[data-set],[data-sayterm]");
    if (!t) return;
    if (t.dataset.sayterm) { const g = L().glossary[t.dataset.sayterm]; stopSpeak(); const u = new SpeechSynthesisUtterance(g.w + ". " + g.d); u.lang = S.lang === "ko" ? "ko-KR" : "en-US"; u.rate = S.rate; const v = voiceFor(); if (v) u.voice = v; speechSynthesis.speak(u); return; }
    if (t.dataset.term) return termSheet(t.dataset.term);
    if (t.dataset.open) { closeSheet(); return openPage(+t.dataset.open, +(t.dataset.i || 0)); }
    if (t.hasAttribute("data-resume")) return openPage(S.last.ch, S.last.i);
    if (t.dataset.jump) { const [c, p] = t.dataset.jump.split("-").map(Number); return openPage(c, p - 1, 1); }
    if (t.hasAttribute("data-ans")) { t.parentElement.classList.toggle("open"); return; }
    if (t.dataset.go) return go(t.dataset.go);
    if (t.dataset.lang) { S.lang = t.dataset.lang; save(); applyPrefs(); return go(view, false); }
    if (t.dataset.set) {
      const k = t.dataset.set, v = t.dataset.val; S[k] = isNaN(+v) ? v : +v; save(); applyPrefs();
      t.parentElement.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b === t));
    }
  });
  $("#s-auto").addEventListener("change", (e) => { S.auto = e.target.checked; save(); });
  $("#q").addEventListener("input", renderSearch);
  $("#gq").addEventListener("input", renderGloss);
  $("#sheet-bg").addEventListener("click", closeSheet);
  $("#r-back").addEventListener("click", () => go("home"));
  $("#r-title").addEventListener("click", listSheet);
  $("#r-list").addEventListener("click", listSheet);
  $("#r-prev").addEventListener("click", () => step(-1));
  $("#r-next").addEventListener("click", () => step(1));
  $("#r-font").addEventListener("click", fontSheet);
  $("#r-play").addEventListener("click", () => (speaking ? stopSpeak() : speakPage()));
  $("#r-bm").addEventListener("click", () => {
    const id = chapter(cur.ch).pages[cur.i].id; const k = S.bm.indexOf(id);
    if (k >= 0) { S.bm.splice(k, 1); toast(T().bmDel); } else { S.bm.push(id); toast(T().bmAdd); }
    save(); openPage(cur.ch, cur.i);
  });
  $("#r-kyo").addEventListener("click", () => { S.kyo = !S.kyo; save(); applyPrefs(); $("#r-kyo").classList.toggle("on", S.kyo); toast(S.kyo ? T().kyoOn : T().kyoOff); });

  // 좌우로 밀어서 쪽 넘기기
  let sx = 0, sy = 0;
  $("#stage").addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  $("#stage").addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
  });
  document.addEventListener("keydown", (e) => { if (view !== "read") return; if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyPrefs);

  /* ---------- 시작: 마지막 본 쪽을 자동으로 엶 ---------- */
  applyPrefs();
  history.replaceState({ v: "home" }, "");
  if (S.last && L().chapters[S.last.ch]) { go("home", false); openPage(S.last.ch, S.last.i); }
  else go("home", false);

  if ("serviceWorker" in navigator && location.protocol !== "file:") navigator.serviceWorker.register("sw.js");
})();
