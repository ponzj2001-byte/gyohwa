/* 오프라인 저장: 앱 파일을 폰에 보관해 인터넷 없이 열리게 함.
   내용을 고치면 VERSION 숫자를 올려야 폰에 새 내용이 반영됨 */
const VERSION = "gyohwa-v3";
const FILES = [
  "./", "index.html", "style.css", "app.js", "content.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png",
  "img/ch2_myeongbu_1.jpg", "img/ch2_myeongbu_2.jpg", "img/ch2_myeongbu_3.jpg"
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
