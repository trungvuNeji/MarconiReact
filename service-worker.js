"use strict";var precacheConfig=[["/MarconiReact/index.html","70b78ddc834e42946e9099f9bbb39aaa"],["/MarconiReact/static/css/main.fd485756.css","da1f9242dcc259ba312b3afb64497959"],["/MarconiReact/static/js/main.4921c5e5.js","d9032d3e76f986bd735be150900899d5"],["/MarconiReact/static/media/admin-apps.f0101d11.svg","f0101d1169a140f9693d3f2d903e560f"],["/MarconiReact/static/media/advisor-1.fea48e56.jpg","fea48e5638c231763c0662560917fd52"],["/MarconiReact/static/media/advisor-2.939b7306.jpg","939b73064344950fa0ed1017264bf6a5"],["/MarconiReact/static/media/advisor-3.235e2d05.jpg","235e2d05cba8826065dc81f07ec355e6"],["/MarconiReact/static/media/advisor-4.dfaea31e.jpg","dfaea31e399edd57fd433141bed68fc8"],["/MarconiReact/static/media/advisor-5.73af4a50.jpg","73af4a50ec1d37536ffddd77b53e5318"],["/MarconiReact/static/media/branch-chains.0339f58d.svg","0339f58d67b7f54c99453984c7e68c4c"],["/MarconiReact/static/media/core-team-1.b8b10745.png","b8b107454ea0b77bd80a9660a29e70f8"],["/MarconiReact/static/media/core-team-2.f9c6cb93.png","f9c6cb93469abd494a37d5a00dc22e1d"],["/MarconiReact/static/media/core-team-3.84d15aa5.png","84d15aa55738444092050eb672e5478d"],["/MarconiReact/static/media/core-team-4.dcc82e81.png","dcc82e81eda5f8c59c6cb2fdd4a70011"],["/MarconiReact/static/media/core-team-5.e91dbb6a.png","e91dbb6a9015d25fb9073bb63f9a6a42"],["/MarconiReact/static/media/core-team-6.a1cf7d47.png","a1cf7d47d4a17881dff8c2aad41cebc7"],["/MarconiReact/static/media/core-team-di.2adea4a5.png","2adea4a5c0b4b568894f4daff1040cd4"],["/MarconiReact/static/media/email-icon.c55641fd.svg","c55641fd169d9f7a3e5ec70cac6df101"],["/MarconiReact/static/media/ethernet-level.4fea9c78.svg","4fea9c78e3d9860bd6b3552459516ef5"],["/MarconiReact/static/media/heroimage.4bd4139e.svg","4bd4139e6e415f829a54f6703781dfc6"],["/MarconiReact/static/media/iot.7111b08d.svg","7111b08d269abeb848104cd6d1f80ff4"],["/MarconiReact/static/media/logo.0b66d125.svg","0b66d1254b52d712508bfdc124d5932f"],["/MarconiReact/static/media/programmable-packets.adfe3044.svg","adfe3044399d992912442bc13ad1b27e"],["/MarconiReact/static/media/secure-networks.003e91ed.svg","003e91edd9c951df358f5a591c6c9989"],["/MarconiReact/static/media/security-apps.14d88f27.svg","14d88f2710ad45590f7fc29ba4e5b92d"],["/MarconiReact/static/media/token-migration.fa6e961e.svg","fa6e961e541108d9315ce3afe0d5b301"],["/MarconiReact/static/media/virtualized-blocckchain.e7899493.svg","e789949384238aeaa4d937a319d71a73"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/MarconiReact/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});