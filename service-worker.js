/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "44afe9791f297a1dc3f78c5d1e733951"
  },
  {
    "url": "about.html",
    "revision": "5911aaff68f2b67ca7a2477a881ab748"
  },
  {
    "url": "assets/css/0.styles.ab1aa851.css",
    "revision": "0794aafa8116bccb265eb186af8a5eb5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f2283238.js",
    "revision": "ae2c2bdf53b24b4c37a5903c2353f2de"
  },
  {
    "url": "assets/js/11.2771d596.js",
    "revision": "735803f03fcbfe4c760c8b4152f543f0"
  },
  {
    "url": "assets/js/12.96159e78.js",
    "revision": "421b88f222c6447b97ebac3b4205637e"
  },
  {
    "url": "assets/js/13.6d7983fe.js",
    "revision": "d7f5160f4e9cfed827fc693093f09862"
  },
  {
    "url": "assets/js/14.110e8a2a.js",
    "revision": "aa16a460bc210eddc66d51a369a8570a"
  },
  {
    "url": "assets/js/15.d7283bf5.js",
    "revision": "59b69061cd7d2e9977e8521134eb6fca"
  },
  {
    "url": "assets/js/16.7d58ad5a.js",
    "revision": "85292c39085418aafc2d3c5f85c01229"
  },
  {
    "url": "assets/js/17.9d6f47ef.js",
    "revision": "397a8e97a351d12a13dd79edec9372ec"
  },
  {
    "url": "assets/js/18.100fbe85.js",
    "revision": "8d2860d967e2c4f357abbef7f1d55a12"
  },
  {
    "url": "assets/js/19.8c0b34df.js",
    "revision": "68cf0934488ad9c16b09d00338dc1398"
  },
  {
    "url": "assets/js/20.39b93220.js",
    "revision": "46f5d2fce7ef409e1d57653c31b79f04"
  },
  {
    "url": "assets/js/21.6e65a038.js",
    "revision": "f455458160740135ac18125cee50faad"
  },
  {
    "url": "assets/js/22.b4d126ef.js",
    "revision": "d857d540b4c709e49a05c5275fb577fb"
  },
  {
    "url": "assets/js/23.75e05e92.js",
    "revision": "5c085f5a2c101ab819f636b242d27143"
  },
  {
    "url": "assets/js/24.bcac4cc3.js",
    "revision": "85f52a80861534526d3d95fed67f0e6c"
  },
  {
    "url": "assets/js/25.ec6fd61c.js",
    "revision": "9bc01deea05fb88489eec190b82aa8db"
  },
  {
    "url": "assets/js/26.fdef87a8.js",
    "revision": "935bdf011aa0ea44c44954665c541292"
  },
  {
    "url": "assets/js/27.e7aae259.js",
    "revision": "b2a2b67deaddc88b4824035ce5c4acd7"
  },
  {
    "url": "assets/js/28.44344be8.js",
    "revision": "9a617f06bb3c4270a9ee18455bbaa4ab"
  },
  {
    "url": "assets/js/29.c32bac93.js",
    "revision": "e5a0acf3d5bf8031bf4da2ffa8459cc9"
  },
  {
    "url": "assets/js/3.6d74c075.js",
    "revision": "3a7805ceb8b08cb62d3b5f50a43b4f5a"
  },
  {
    "url": "assets/js/30.f1fea3e6.js",
    "revision": "8ab751988d3740e47138a62277f1dc38"
  },
  {
    "url": "assets/js/31.2f2e24f2.js",
    "revision": "a9ded7b230911f8cb6bea7b839b4d7ba"
  },
  {
    "url": "assets/js/32.fdcef6d6.js",
    "revision": "bb63ec213ba5d45d438e1055917b37f5"
  },
  {
    "url": "assets/js/4.6833dbb2.js",
    "revision": "36287a285e32a9b90acfae8a35f188e8"
  },
  {
    "url": "assets/js/5.8fcb1d32.js",
    "revision": "7d98d33ed607ecbf1aa27816595d8580"
  },
  {
    "url": "assets/js/6.a46a4e0b.js",
    "revision": "2bc0ae8970b1632bb80a1f1e35066c25"
  },
  {
    "url": "assets/js/7.83ccad9a.js",
    "revision": "d5926272b570610d998cd388765fca77"
  },
  {
    "url": "assets/js/8.262b47ef.js",
    "revision": "51f199cb159e6a025ba604ea0c7f071e"
  },
  {
    "url": "assets/js/9.8f8b6c82.js",
    "revision": "9cef0481067200a77bb444e7f77aa3d6"
  },
  {
    "url": "assets/js/app.b5eee5ef.js",
    "revision": "af9aaf44fd7229873b15cd8b75bdb93a"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "demo.html",
    "revision": "4547d35130e3e7af1d2a9c6fcb25e902"
  },
  {
    "url": "en/about.html",
    "revision": "8db76a45fcb0146cdce260fc2270f3d5"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "a5cb5c8b1c7418f9b063b759e793c714"
  },
  {
    "url": "en/guide/config.html",
    "revision": "70d7d3faf0922b9284e71325c06447e9"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "a5cae115e822318d1815d10d58133c48"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "8aa0702ad53a3573181d7ea3b7be6592"
  },
  {
    "url": "en/guide/index.html",
    "revision": "41a2e15c8055a4e493cb97f3218c3e37"
  },
  {
    "url": "en/guide/page.html",
    "revision": "681ec4a8dd81712af824bab4b3723f30"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "8edae94d7246fa368e2dc2a167c2b780"
  },
  {
    "url": "en/index.html",
    "revision": "56c51ef5300ebcbc0832668a290a7cc5"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "a3e745c445f5415ee559f02e71715ef8"
  },
  {
    "url": "guide/config.html",
    "revision": "5c7161ca0c499649b086f609d832fd34"
  },
  {
    "url": "guide/faq.html",
    "revision": "974ab98b8bf5312758b75262aeea18de"
  },
  {
    "url": "guide/icon.html",
    "revision": "9c214f7773869241b8cbc14fe700d01d"
  },
  {
    "url": "guide/index.html",
    "revision": "e326c4559a9b1ce0dc4cf2c76b3ecc7e"
  },
  {
    "url": "guide/migrate.html",
    "revision": "863c161b8dc1e3d824a81e99c04cc9f8"
  },
  {
    "url": "guide/page.html",
    "revision": "845a5b573cf67813eb84e671944abd1d"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "084452765e43f18e960a44798a2a1f4b"
  },
  {
    "url": "images/index-preview.jpg",
    "revision": "7c5199d9f75605f77990cf7a984eaf0f"
  },
  {
    "url": "images/mickey-mouse.jpg",
    "revision": "c636a5e47f7a741a28a57ff22c98ceac"
  },
  {
    "url": "index.html",
    "revision": "15352f05436522fdca92aed8b830d60d"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
