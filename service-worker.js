const CACHE='miami-icon-v0.9.0';
const CORE=[
  './',
  './index.html',
  './styles.css',
  './app.js',
  './trip-data.js',
  './manifest.webmanifest',
  './version.json',
  './icon-192.png',
  './icon-512.png',
  './offline.html'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)));
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    if(self.registration.navigationPreload){
      try{await self.registration.navigationPreload.enable();}catch(e){}
    }
    await self.clients.claim();
  })());
});

self.addEventListener('message',event=>{
  if(event.data&&event.data.type==='SKIP_WAITING') self.skipWaiting();
});

async function networkFirstNavigation(event){
  const cache=await caches.open(CACHE);
  try{
    const preload=await event.preloadResponse;
    const response=preload||await fetch(event.request);
    if(response&&response.ok) await cache.put('./index.html',response.clone());
    return response;
  }catch(e){
    return (await cache.match('./index.html'))||(await cache.match('./offline.html'));
  }
}

async function staticResponse(event){
  const cache=await caches.open(CACHE);
  const hit=await cache.match(event.request);
  const refresh=fetch(event.request).then(async response=>{
    if(response&&response.ok) await cache.put(event.request,response.clone());
    return response;
  }).catch(()=>null);
  if(hit){
    event.waitUntil(refresh);
    return hit;
  }
  return (await refresh)||(await cache.match('./offline.html'));
}

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return;

  if(url.pathname.endsWith('/version.json')){
    event.respondWith(fetch(req,{cache:'no-store'}).catch(()=>caches.match('./version.json')));
    return;
  }
  if(req.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/')){
    event.respondWith(networkFirstNavigation(event));
    return;
  }
  event.respondWith(staticResponse(event));
});
