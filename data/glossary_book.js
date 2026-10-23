/* 부록 B 용어 사전 — 앞 장들에 흩어진 용어 풀이(glossary)를 모아 앱이 열릴 때 자동으로 만듦.
   한국어는 첫 글자의 초성(ㄱㄴㄷ…)별로, 영어는 첫 글자(A–Z)별로 한 쪽씩 묶음 */
(function () {
  const D = window.APP_DATA;
  const CHO = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
  const MERGE = { "ㄲ": "ㄱ", "ㄸ": "ㄷ", "ㅃ": "ㅂ", "ㅆ": "ㅅ", "ㅉ": "ㅈ" };
  function koKey(w) {
    const c = w.charCodeAt(0) - 0xac00;
    if (c < 0 || c > 11171) return "기타";
    const k = CHO[Math.floor(c / 588)];
    return MERGE[k] || k;
  }
  function enKey(w) { const c = w.trim()[0].toUpperCase(); return /[A-Z]/.test(c) ? c : "#"; }
  function build(lang) {
    const G = D[lang].glossary, groups = {};
    Object.keys(G).forEach((id) => {
      const g = G[id], k = lang === "ko" ? koKey(g.w) : enKey(g.w);
      (groups[k] = groups[k] || []).push([id, g]);
    });
    const keys = Object.keys(groups).sort((a, b) => a.localeCompare(b, lang));
    const pages = keys.map((k, i) => {
      const rows = groups[k].sort((a, b) => a[1].w.localeCompare(b[1].w, lang))
        .map(([id, g]) => [`{{${id}|${g.w}}}`, g.h || "", g.d, g.s || ""]);
      return {
        id: "36-" + (i + 1),
        sec: (lang === "ko" ? "용어 " : "Terms ") + k,
        tag: lang === "ko" ? "부록 B 용어 사전" : "Appendix B Glossary",
        core: lang === "ko" ? `‘${k}’으로 시작하는 용어 ${rows.length}개. 낱말을 누르면 풀이와 나온 곳이 열림` : `${rows.length} terms beginning with ‘${k}’. Tap a term to see its meaning and where it appears`,
        blocks: [{ t: "table", head: lang === "ko" ? ["용어", "한자", "풀이", "출처"] : ["Term", "Characters", "Meaning", "Source"], rows }],
        src: lang === "ko" ? "이 앱 1~34장의 용어 풀이" : "Glossary entries of Chapters 1–34",
        q: null
      };
    });
    return { title: lang === "ko" ? "용어 사전" : "Glossary", pages };
  }
  D.ko.chapters[36] = build("ko");
  D.en.chapters[36] = build("en");
})();
