'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4347221fda8dcfc0ce05141c2e551d4b",
"version.json": "aafc656fd5d6524b637e3352a2c5b30b",
"index.html": "ba16927d8b9535ed1db548f79dfdddb2",
"/": "ba16927d8b9535ed1db548f79dfdddb2",
"main.dart.js": "9537590d36289453c069b68df5367b01",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "b535a49a7340c9ee52fe3401b82bb5e2",
"icons/Icon-192.png": "29495fcf23e7816229976ff5ef604019",
"icons/Icon-maskable-512.png": "a44949cc04e6bc40f594bb80fa216d06",
"icons/Icon-512.png": "a44949cc04e6bc40f594bb80fa216d06",
"icons/Icon-maskable-192.png": "29495fcf23e7816229976ff5ef604019",
"manifest.json": "a0ff0eb3cdd9e2fcbc4d61050ef555f2",
".git/FETCH_HEAD": "f38444a373f24fbecfd553d55a0c3053",
".git/config": "b84053cd92a1d84c63201393ce065318",
".git/objects/95/4dfb2d59d261c0f97bfbf5271af121382f72e5": "12200f2824f3a4e319245dc782c0e930",
".git/objects/92/4775f65bb5e42e69dd73b71c6d00418b1d4793": "ec7a7e7a1ff0768e982762404f84742c",
".git/objects/3e/df1783f4ec56bd6b80e074ecf6d18dd2cf460d": "fe356d2377f8f25c08c1a690ee13806f",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/6a/7a4e1e5d91ab711025d15609846639d408d94b": "2b91b0555c6de0775631c93e19951f3a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/a9a483dc9b307b28b8ae2bc10b0cfa3d0b0217": "f9e597a1f08e46e9c76822c1b0683957",
".git/objects/35/cc601d67de091c5468b784e3569b556294413f": "fecffaed28bc30c9589339078a93841a",
".git/objects/3c/e902a4889221d6b19e2eb537439dcf8e64edd4": "b835f02f413395df23671854d4da314e",
".git/objects/56/6d2fb09907878c2abb734f891ec8f11f8e8242": "287786406fff2ff3a880e752f1e16ab2",
".git/objects/0b/79be2bbd39f9e8422265d069edc8b22c4f8007": "d40a909767e77dc3ccf15caaec164984",
".git/objects/93/f1ec56fe90f6b493709f42e1f2c774b188c115": "31472f6c218ed7a69462ddb3c8a91abc",
".git/objects/9d/e976cbaaeea2ba1e6bcc83bb05db1b9bbdfbbe": "b6e18531d12c338688544a02da4efc03",
".git/objects/9d/c499e02f90d3de5781fb76c9a47489387b4135": "65d549bb6901ef96f6eccb3530120a58",
".git/objects/a3/0a3d70664699255c468d09fb3a33e2193b8572": "20be931d8c0556de9eaf2727acba3dc6",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/df/6f349afecd5510ff6433490c46b564034cf0ce": "90becddf0a02c67398a42acf94ce5d7c",
".git/objects/df/0476a585ba8975dc4dd144ce74f0f77c471b1f": "d83e7d8371afc1547ee3ba1c13e8ba63",
".git/objects/da/0b01be51ec15ab50176658e0b27cebe6ea54e2": "0b786a20483c2b72e2f705608e71b968",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/ee/bd4c88932e4270416bd3451a48d7801630a323": "e076ebc0b1188c47d0bd149e2b50c1fd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/bf68ad88d2879e37f9694fe4cf5072233f94fe": "4107a149e23e0292bc67b213b2bcc204",
".git/objects/fb/fdea36e3df8a463825e62859df7df6d1bc68d9": "ba03cfbb161efe992dcdc0122c252886",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/1d9ef62d3a86b3df89cd564ac5684f1d90ed62": "9daafaeb805b9ea43434b2fc1aee3a33",
".git/objects/42/a5d1dcbccba3e132015c8bf33aa416edc104f1": "8c3daed8825ebddccaef36292ce113f6",
".git/objects/80/3b115a77ecf766da1b09c08460b8ebe4da9feb": "defe155435e5bbac4954b4300af5c896",
".git/objects/74/75b697b2a6dab594461ca61aadf9fa0f9bbb8f": "711466d0b356a62e31ed3c80a975ef62",
".git/objects/72/670b5308e9fd5cf79448a6ef1daf02cb046106": "3c36050a31ed31eee570114a13c0563c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/72aa9e9d966a1d1b616953ec090db9e238c720": "30110d82a0d102673272b372f127070c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/64/9e6b07f087f15fbcb68bb823704a0dc22f1fa0": "dbe86acf81d413757c589317bfcc3c37",
".git/objects/64/40c5e2f8c712727aa95cc770cf53956a1a6763": "cd97528a34a7c0527ebd09fb09d46407",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/c3/f4c219e599fab3d17093c1887445cebcc156d2": "3a8f380455b2b9fc3900229b64d5ebbf",
".git/objects/ea/6e0f78a070603f07ac1743c882d3740ad2df08": "19315febc23e4d7b93c5726d2940d730",
".git/objects/e1/433d0c003e7499fc8254bb76636877f2ed8b5c": "66859cd7808ed7c3c6d95316de3937d3",
".git/objects/e8/c62c1269cf113b99fef2939d51bd01670f0b28": "1a5d8dff8c3049f218abf92ef536028d",
".git/objects/e7/01b00c1c7aaf730192905475034e2887d3b6d4": "00e6b0f81cf7278e4f745758445345f3",
".git/objects/2c/97eeadffe1a34bd67d3ff1c3887fd53e22c2ca": "083284edbfcb5640ad9f2ae180e0b94b",
".git/objects/83/00736401235976d8fb9ed1863b7a3ff67f73ed": "011bb0915217a501914c9df637956da6",
".git/objects/1b/70ed3a9f358df6a8cdee238496f35f1dad3cff": "f6bed2459fc71ea2e63fb0b45d83769d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "da2cdd8c643dc80245f6dba6d877d948",
".git/logs/refs/heads/master": "9a6f3725acb08bb1a0b7fd470318acb9",
".git/logs/refs/remotes/origin/master": "2f60005faf62df87fd18da1eedecaf4d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/COMMIT_EDITMSG": "85489dc4113ef2cec683ae8cb32d197e",
".git/refs/heads/master": "c5c8fb7cc9824076adb0cc3eea37121b",
".git/refs/remotes/origin/master": "c5c8fb7cc9824076adb0cc3eea37121b",
".git/index": "dffcdcc5c700b7dd2472a9a989ee1819",
"assets/AssetManifest.bin.json": "fbdb1ad38312e303cc16a305bd134a2a",
"assets/AssetManifest.json": "cf3a01541970ae130e38b97c2c3b2156",
"assets/NOTICES": "a2e24f62bd02eeb35f6a5757f683f30b",
"assets/FontManifest.json": "a95ac489daba831d1e312c2b5b86c5df",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9829dde8aa75970bcc902e029db5d9e4",
"assets/fonts/MaterialIcons-Regular.otf": "71966cc21dc47dd9edb39800068d8a49",
"assets/assets/images/background.png": "36eb2f217ac05bac61758fb63c1c9546",
"assets/assets/images/table_top.png": "f9cd290ba1e6248b585f42d0f778bba8",
"assets/assets/images/back_of_card.png": "69343a21ce301c560530ff63c6317e06",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
