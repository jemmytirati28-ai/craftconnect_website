'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4b98e695078aeb47cbf5272ddfebca23",
".git/config": "6155cc306040c52f745e8e9b8696a330",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0c9554a11a61ffb7a2381859f54b377a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc0240ad2ad854612f823ac0a53cd6dc",
".git/logs/refs/heads/master": "dc0240ad2ad854612f823ac0a53cd6dc",
".git/logs/refs/remotes/origin/gh-pages": "b331a3a79c6734c1aa4a750a16de6ca1",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/06/4c6971daad149f515a26cf33c39e588fa32643": "c345bfe4c5e5a8f66a53e80e2bb97c3a",
".git/objects/12/a9cf35419b782d7c473c2d88d19c2d0f14eb5f": "1658ab4d2b96953e08e888a2ac6f2242",
".git/objects/1c/2fc445a6684c3965cf1f4e83d49a98e8e72288": "b56b35b88a410d4feb608710bd216a33",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/a269351bd5bf5c51d506f7ef5af066b7e6fc39": "d5c02b1596554882e6f7a3220fc93514",
".git/objects/24/10bbd1aa0eae2b19bb9b3d09d82ad73baf381c": "8aeee7484c5b80abad92a3fca98e1bbb",
".git/objects/24/f567b0b7d07d944806ed09e20ad09b33923327": "c03b41533b945482c74f2222d7dcd08f",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/31/8112b701fba66aa9d0ee015498c3ad668901f9": "3bbb563561d452c85b6befe63f85ea6e",
".git/objects/34/15dcb271cd9229566aff95fdb8a0da0cf34419": "6290b38fe149c7717f1bc416aa517e88",
".git/objects/3a/b5a1fad785e76cd40d06ebb5981aa20e99e39d": "e0aa9709f3eb466f6b136a9321f58757",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/e66a045a4e8c0d0485e72682874fe2644dd8a6": "dd43fef97d3d2b65e6c43a185a845b63",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/c882b681cef8fd424aadb570cd7097d4d2e309": "3dc801b27f64b171ae1483e6e1b9ca0c",
".git/objects/55/95c9e2540d199ba995bffd70d90867786d7d0e": "49cdebc7bf406a4819318691904ddb72",
".git/objects/61/65dc044d8c8102e0697b34689c2f3175ca5a53": "7375b29e65c2768c0612b8bb05a95957",
".git/objects/63/5667c206d70f126eff2866d0962bea6655bd38": "36148cdbcbd942c034d568f86833c738",
".git/objects/67/00ca606223b6430940f3735f53abf3ad7df89b": "c356c181276d53c9f7b3407987a2e671",
".git/objects/68/207dd131ae1911689ac7bf4682c759a7c6e5ea": "0b7541b836dae9eead549c6b50885e05",
".git/objects/6e/2b88ee64a96b9bda91579cd020657222581194": "7620b40c4148f53b1f6c7024593209cf",
".git/objects/78/c0fecad3739cddd658737974bd3cfc6ed8079f": "b070d971c874c842da494f406e7e426f",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/82/4fff91f38d2bbf415d2bed1171d36fe559b515": "a842ce1c72625c1b7533928b2fdbc8e7",
".git/objects/88/30ce8077352b5f2b471cffee9267d405b7779e": "50fabe9626e4147f6fb1b29265191aae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/2d6849632d2d273537f3a4ac819a9c42031df9": "e5fb2f0d2d516f0ae9b3b3192fd38dc8",
".git/objects/93/53d5fa11d5a36570e9fd522c126f20e1885ded": "ac92c00204b3377fef5c25ba03fab509",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/cf706cf8616ba22b581bdc5b8b80f5fdd1fbcb": "bb2b200c17483ad846b82af4bfaaa8ae",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a4/f957aa2361390d0da12ddd370d99a32ec17c82": "02882b46ac0e21af7453fb752532a2ae",
".git/objects/ac/6643cf81df32dd4293a4b814917eb82d667832": "a4db1ec268f14a913027fc40b50d5e64",
".git/objects/ae/75cb8187d706f9d76e7e330969e16e7fb4ecd6": "03d4861c6322e0d32396f86a2083cf42",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/0bccaea85329eb3f650a15eb59fb28ae350a1f": "ff6bc0ce76c2ab28a1e370925a317ebf",
".git/objects/c0/6491800ff146683843c5169cc7961a0b8880a7": "ab12c0be63a0c3f8c75a3ec6b4a0ff0e",
".git/objects/c1/ef2757de4e565dcc8a2936ba87fbf25417f655": "4579d6f9fd21d7e46d7b6ebdd2a3b770",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/6c54e757e66bae11cbb0a3e1d3560925b88887": "58f8e4a1a3d7c39c1bfbffa3114680d7",
".git/objects/d2/da70b46d95b6c1b112b4f95db287718437e7e1": "4f1b2de552452a33659c4080c4045839",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/7ecddad54e746da8a4c6616ddc5b8a990639f7": "988e501ca28dfbdf3de85ba2be3cf483",
".git/objects/de/bb98776b3aa62dfa1c95afd94e0c6a2e488f96": "888eeeabfa988feb9c5253bf3147c455",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/d8b164c7c9bfcbeecdca60ecb0605c37e3cc1a": "cf52c0d6699d80ec8d85de5953dd1651",
".git/objects/e7/6f3b145c43267d4ada63250c97392b5e846dcc": "c3b37dbc702d26c11073a2824b206879",
".git/objects/ea/bd039314e5d14c5c0497bc9bfc7dec823a819f": "ddee8ba463d4a9f6101e5d8f5a249182",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/master": "f93afb62a936239180264f7d107fd7ec",
".git/refs/remotes/origin/gh-pages": "f93afb62a936239180264f7d107fd7ec",
"apk/craftconnect.apk": "d7c2296cecc6524d4ee8672ba506ec07",
"assets/AssetManifest.bin": "5e823afa49a3743a7c3f58c89a21fc56",
"assets/AssetManifest.bin.json": "2b24f6c5c48677467d87a0b548258f49",
"assets/AssetManifest.json": "0b31e02885355c455f1d2755ad769b65",
"assets/assets/images/logo.png": "52ac6e12bdf123bb95af5be392cb768f",
"assets/assets/images/Screenshot%25202026-05-22%2520141047.png": "894396742812aaab2c994397f5756360",
"assets/assets/images/Screenshot%25202026-05-22%2520141144.png": "9ad0095a591644daa1b5010ec9a4ad40",
"assets/assets/images/Screenshot%25202026-05-22%2520141214.png": "df5490c9da5d15074d42ef7f7f52259b",
"assets/assets/images/Screenshot%25202026-05-22%2520141238.png": "6aadc133fcf868ac5b33cd9ac10cbbad",
"assets/assets/images/Screenshot%25202026-05-22%2520141311.png": "446031a273a8dfc83ec3b2f2e62083d6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "f90236807b50309fc2cee33c67c64a36",
"assets/NOTICES": "171b02963b9ef604deff44f2aba3cf37",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/apk/craftconnect.apk": "d7c2296cecc6524d4ee8672ba506ec07",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "52ac6e12bdf123bb95af5be392cb768f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c92d5afcaae0ed49eece1e2c7155241f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "10b0a42d9cc4b9e419943975f63f9f10",
"/": "10b0a42d9cc4b9e419943975f63f9f10",
"main.dart.js": "41ea03cd4d267687ab13fe36f5e70352",
"manifest.json": "63f51ff1429969e4905ec3af5a40c214",
"version.json": "524b3ead6ab9d83739770525dea8b92f"};
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
