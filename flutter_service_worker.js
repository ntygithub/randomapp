'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b98d308648152c362d735faa7c0f69dd",
"assets/AssetManifest.bin.json": "4f510cd49243f92104fda350f79dd17c",
"assets/AssetManifest.json": "4d2370ed01d0b26b7c3831d0cf825e1e",
"assets/assets/sample.pdf": "cee5ddcb00266aa07d99550b39a6632d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d74286b6873e65e4bea1e48ca5f0966d",
"assets/NOTICES": "f265b7dc79847be0abc0709e8bc1b254",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b35f1c15877e232e90e74ade984622b6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8658472e64135c36be1c404165e14089",
"/": "8658472e64135c36be1c404165e14089",
"main.dart.js": "d833db7f6acf7175ec7fdad7286d20b1",
"manifest.json": "5d775b44cd93d8f2528cf815be526c8a",
"randomapp/.git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
"randomapp/.git/config": "9d51bb256b3a3481ac7906a455b22e37",
"randomapp/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"randomapp/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"randomapp/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"randomapp/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"randomapp/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"randomapp/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"randomapp/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"randomapp/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"randomapp/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"randomapp/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"randomapp/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"randomapp/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"randomapp/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"randomapp/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"randomapp/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"randomapp/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"randomapp/.git/index": "a53df1125b387bc85bc94906ee5c6035",
"randomapp/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"randomapp/.git/logs/HEAD": "1e2c0542dfb680fb7b29e7d43bb5bc75",
"randomapp/.git/logs/refs/heads/main": "1e2c0542dfb680fb7b29e7d43bb5bc75",
"randomapp/.git/logs/refs/remotes/origin/HEAD": "c235c780e37e550b4a652884c2c14658",
"randomapp/.git/logs/refs/remotes/origin/main": "c0453f05102016b97ca18dfacda74b65",
"randomapp/.git/objects/03/bfd5927cecb3e25113906a4d980a400dd9a401": "905ee928fc24adee9227036bbd783a97",
"randomapp/.git/objects/08/327d7c9a4198848a27b9c69173a4a3077fa558": "96012891357256376aec9802871d6801",
"randomapp/.git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
"randomapp/.git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
"randomapp/.git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
"randomapp/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"randomapp/.git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
"randomapp/.git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
"randomapp/.git/objects/2a/e1535b6bf55c3766d9764baeb65eed56d68be7": "84687458a5939778b2cf1af7127a4228",
"randomapp/.git/objects/3c/598cfacd4f477e5c977d1c1945cf931dc846de": "b8830cc5ec02d1241300bf9ff1c665c1",
"randomapp/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"randomapp/.git/objects/47/cc157ff3c8170bda62d57ad1650724d0cd1d66": "62c477def2ac845c185c3e86eab32937",
"randomapp/.git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
"randomapp/.git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
"randomapp/.git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
"randomapp/.git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
"randomapp/.git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
"randomapp/.git/objects/80/6da374aa2a1c3f589b7552da325af58380ad53": "6d443df8c3517313bed7463a9bcb66d8",
"randomapp/.git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
"randomapp/.git/objects/85/f0e89e2568badddfcac21a34d8a69c8735657c": "af87c2c67f3d047d9c7ae26b79a3ec5c",
"randomapp/.git/objects/88/8e18b05e4cd3c72eed2645c1fc56e026d752f4": "249af25a93afc0ff3ae758841035e128",
"randomapp/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"randomapp/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"randomapp/.git/objects/8e/cd6fea2fbc384d4f3616b5aeb6fc916aefea65": "5d268a620cd650f50972fc45679f22ff",
"randomapp/.git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
"randomapp/.git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
"randomapp/.git/objects/ab/16ad706b6ea461f303f65285ae40c1962564cc": "e579409d25652f4bc7e56244455ce334",
"randomapp/.git/objects/b1/97efd8e5124f0d3647e455409f40b8ddec0243": "e08d16adf31a3f9f31bf410446d2df69",
"randomapp/.git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
"randomapp/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"randomapp/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"randomapp/.git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
"randomapp/.git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
"randomapp/.git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
"randomapp/.git/objects/d1/8cf85fbcf565a99ce70885833cbc0429ce616f": "d988371ac8bb553e2774d3d66f9ad771",
"randomapp/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"randomapp/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"randomapp/.git/objects/dd/3fc57839b9ed724ca2d52c181a4e767eecb081": "e1e39eb469a779ba2ec2c80604b4f594",
"randomapp/.git/objects/e0/c05ecddd056119eb7085262138b3d51d4ddfcc": "7d79407e1d4dc0c03186cac7cf2e186b",
"randomapp/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"randomapp/.git/objects/ee/cbb3bfaef3eff85d294ec7009eceef55dadd44": "4b7688d19c803ef4e435f2f6657841eb",
"randomapp/.git/objects/ef/641d6f9a80f5ce1129e7aa741876913bf36afc": "0b196fd46f5dfcbe307478783f1f52da",
"randomapp/.git/objects/ef/8ffac123c23ff1c21ed19d85a18aa80f441e04": "32da966be5c6bce0044f62949597fa63",
"randomapp/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"randomapp/.git/objects/pack/pack-ed8e472e18e904e54604483be18cabdaed3e4ffa.idx": "6513bb8017bb866783cceeff0cd461ba",
"randomapp/.git/objects/pack/pack-ed8e472e18e904e54604483be18cabdaed3e4ffa.pack": "eb6f650c2964797b163a21a325c50e39",
"randomapp/.git/objects/pack/pack-ed8e472e18e904e54604483be18cabdaed3e4ffa.rev": "40596f31870be2ad5dfed13ad38a9bf6",
"randomapp/.git/packed-refs": "cba57ca6be06cba291d16e48c9d90c1c",
"randomapp/.git/refs/heads/main": "1939f0c38df437fe724f64f874894396",
"randomapp/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"randomapp/.git/refs/remotes/origin/main": "1939f0c38df437fe724f64f874894396",
"randomapp/assets/AssetManifest.bin": "b98d308648152c362d735faa7c0f69dd",
"randomapp/assets/AssetManifest.bin.json": "4f510cd49243f92104fda350f79dd17c",
"randomapp/assets/AssetManifest.json": "4d2370ed01d0b26b7c3831d0cf825e1e",
"randomapp/assets/assets/sample.pdf": "cee5ddcb00266aa07d99550b39a6632d",
"randomapp/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"randomapp/assets/fonts/MaterialIcons-Regular.otf": "d74286b6873e65e4bea1e48ca5f0966d",
"randomapp/assets/NOTICES": "f265b7dc79847be0abc0709e8bc1b254",
"randomapp/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"randomapp/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"randomapp/canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"randomapp/canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"randomapp/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"randomapp/canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"randomapp/canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"randomapp/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"randomapp/canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"randomapp/canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"randomapp/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"randomapp/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"randomapp/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"randomapp/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"randomapp/flutter_bootstrap.js": "00141a4a1dd4770e712158fab6cd3d9c",
"randomapp/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"randomapp/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"randomapp/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"randomapp/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"randomapp/index.html": "8658472e64135c36be1c404165e14089",
"randomapp/main.dart.js": "d833db7f6acf7175ec7fdad7286d20b1",
"randomapp/manifest.json": "5d775b44cd93d8f2528cf815be526c8a",
"randomapp/README.md": "388745963f18cd79d54bcd4b7d65be11",
"randomapp/version.json": "69346249e9faed573f709f5684f17740",
"version.json": "69346249e9faed573f709f5684f17740"};
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