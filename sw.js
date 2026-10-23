/* 오프라인 저장: 앱 파일을 폰에 보관해 인터넷 없이 열리게 함.
   내용을 고치면 VERSION 숫자를 올려야 폰에 새 내용이 반영됨 */
const VERSION = "gyohwa-v5";
const FILES = [
  "./", "index.html", "style.css", "app.js",
  "content.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png",
  "data/ch03.js", "data/ch04.js", "data/ch05.js", "data/ch06.js",
  "data/ch07.js", "data/ch08.js", "data/ch09.js", "data/ch10.js",
  "data/ch11.js", "data/ch12.js", "data/ch13.js", "data/ch14.js",
  "data/ch15.js", "data/ch16.js", "data/ch17.js", "data/ch18.js",
  "data/ch19.js", "data/ch20.js", "data/ch21.js", "data/ch22.js",
  "data/ch23.js", "data/ch24.js", "data/ch25.js", "data/ch26.js",
  "data/ch27.js", "data/ch28.js", "data/ch29.js", "data/ch30.js",
  "data/ch31.js", "data/ch32.js", "data/ch33.js", "data/ch34.js",
  "data/jeongyeong.js", "data/glossary_book.js", "img/ch2_myeongbu_1.jpg", "img/ch2_myeongbu_2.jpg",
  "img/ch2_myeongbu_3.jpg", "img/dosim_p001.webp", "img/dosim_p002.webp", "img/dosim_p003.webp",
  "img/dosim_p004.webp", "img/dosim_p005.webp", "img/dosim_p006.webp", "img/dosim_p007.webp",
  "img/dosim_p008.webp", "img/dosim_p009.webp", "img/dosim_p010.webp", "img/dosim_p011.webp",
  "img/dosim_p012.webp", "img/dosim_p013.webp", "img/dosim_p014.webp", "img/dosim_p015.webp",
  "img/dosim_p016.webp", "img/dosim_p017.webp", "img/dosim_p018.webp", "img/dosim_p019.webp",
  "img/dosim_p020.webp", "img/dosim_p021.webp", "img/eonhaeng_p001.webp", "img/eonhaeng_p002_f0.webp",
  "img/eonhaeng_p004_f0.webp", "img/eonhaeng_p010_f0.webp", "img/eonhaeng_p011.webp", "img/eonhaeng_p012.webp",
  "img/eonhaeng_p013.webp", "img/eonhaeng_p014.webp", "img/eonhaeng_p015.webp", "img/eonhaeng_p016.webp",
  "img/eonhaeng_p017.webp", "img/eonhaeng_p018.webp", "img/eonhaeng_p020.webp", "img/eonhaeng_p021_f0.webp",
  "img/eonhaeng_p022.webp", "img/eonhaeng_p023.webp", "img/eonhaeng_p024.webp", "img/goejil_p005_f0.webp",
  "img/goejil_p006_f0.webp", "img/goejil_p007.webp", "img/goejil_p008.webp", "img/goejil_p009.webp",
  "img/goejil_p010.webp", "img/goejil_p011.webp", "img/goejil_p012_f0.webp", "img/goejil_p012_f1.webp",
  "img/goejil_p013_f0.webp", "img/gongsa_p002.webp", "img/gongsa_p003.webp", "img/gongsa_p004.webp",
  "img/gongsa_p005.webp", "img/gongsa_p006.webp", "img/gongsa_p007.webp", "img/gongsa_p008.webp",
  "img/gongsa_p009.webp", "img/gongsa_p010.webp", "img/gongsa_p011.webp", "img/gongsa_p012.webp",
  "img/gongsa_p014_f0.webp", "img/gongsa_p015.webp", "img/gongsa_p016.webp", "img/gongsa_p017.webp",
  "img/gongsa_p018_f0.webp", "img/gongsa_p018_f1.webp", "img/hudosu_p001.webp", "img/hudosu_p005.webp",
  "img/husun_p001.webp", "img/husun_p002.webp", "img/husun_p004_f0.webp", "img/jongtong_p002.webp",
  "img/jongtong_p003.webp", "img/jongtong_p004.webp", "img/jongtong_p005.webp", "img/jongtong_p006.webp",
  "img/jongtong_p007.webp", "img/jongtong_p008.webp", "img/jongtong_p009.webp", "img/jongtong_p010.webp",
  "img/jongtong_p011.webp", "img/jongtong_p012.webp", "img/jongtong_p013.webp", "img/jongtong_p014.webp",
  "img/jongtong_p015.webp", "img/jongtong_p016.webp", "img/jongtong_p017.webp", "img/jongtong_p018.webp",
  "img/jongtong_p019.webp", "img/jongtong_p020.webp", "img/jongtong_p021.webp", "img/jongtong_p022.webp",
  "img/jongtong_p023.webp", "img/jongtong_p024.webp", "img/jongtong_p025.webp", "img/jongtong_p026.webp",
  "img/jongtong_p027.webp", "img/jongtong_p028.webp", "img/jongtong_p029.webp", "img/jongtong_p030_f0.webp",
  "img/jongtong_p030_f2.webp", "img/jongtong_p031_f0.webp", "img/jongtong_p032.webp", "img/jongtong_p033.webp",
  "img/jongtong_p034.webp", "img/jongtong_p035_f0.webp", "img/jongtong_p035_f1.webp", "img/jongtong_p042.webp",
  "img/jongtong_p043_f0.webp", "img/jongtong_p049_f0.webp", "img/jumun_p025.webp", "img/jumun_p026_map.webp",
  "img/lec_p003_f0.webp", "img/lec_p007_f0.webp", "img/lec_p007_f1.webp", "img/lec_p010_f0.webp",
  "img/lec_p015.webp", "img/lec_p016_f0.webp", "img/lec_p020_f1.webp", "img/lec_p021.webp",
  "img/uju_p001.webp", "img/uju_p002.webp", "img/uju_p003.webp", "img/uju_p004.webp",
  "img/uju_p005.webp", "img/uju_p006.webp", "img/uju_p007.webp", "img/uju_p008.webp",
  "img/uju_p009.webp", "img/uju_p010.webp", "img/uju_p011.webp", "img/uju_p012.webp",
  "img/uju_p013.webp", "img/uju_p014_f0.webp", "img/uju_p017.webp", "img/uju_p018.webp",
  "img/uju_p019.webp", "img/uju_p020.webp", "img/uju_p021.webp", "img/uju_p022.webp",
  "img/uju_p023.webp", "img/uju_p024.webp", "img/uju_p025.webp", "img/uju_p026.webp",
  "img/uju_p027.webp", "img/uju_p028.webp", "img/uju_p029.webp", "img/uju_p030.webp",
  "img/uju_p031.webp", "img/uju_p032_f0.webp", "img/uju_p035_f0.webp", "img/uju_p039.webp",
  "img/uju_p040.webp", "img/uju_p041.webp", "img/uju_p042.webp", "img/uju_p043.webp",
  "img/uju_p044.webp", "img/uju_p045.webp", "img/uju_p050.webp", "img/uju_p051.webp",
  "img/uju_p052.webp", "img/uju_p053.webp", "img/uju_p054.webp", "img/uju_p055.webp",
  "img/uju_p056.webp", "img/uju_p057.webp", "img/uju_p058.webp", "img/uju_p059.webp",
  "img/uju_p063.webp", "img/uju_p064.webp", "img/uju_p066.webp", "img/uju_p067.webp",
  "img/uju_p068.webp", "img/uju_p070_f0.webp"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  // 인터넷이 되면 새 내용을 받아 보관하고, 안 되면 보관해 둔 내용을 씀
  e.respondWith(
    fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(VERSION).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || caches.match("index.html")))
  );
});
