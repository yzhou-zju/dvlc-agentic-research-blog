(() => {
 const language=document.documentElement.lang==='zh-CN'?'zh':'en';
 const clock=t=>`${String(Math.floor(t/60)).padStart(2,'0')}:${String(Math.floor(t%60)).padStart(2,'0')}`;
 const video=document.getElementById('highlight-video');
 const still=document.getElementById('highlight-still');
 const setMode=mode=>{
  video.pause();video.hidden=mode!=='video';still.hidden=mode!=='still';
  document.querySelectorAll('[data-focus-mode]').forEach(b=>{const selected=b.dataset.focusMode===mode;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
 };
 document.querySelectorAll('[data-focus-mode]').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.focusMode)));
 document.querySelectorAll('[data-highlight]').forEach(button=>button.addEventListener('click',()=>{
  const id=button.dataset.highlight,d=mediaCatalog.highlights[id],label=d[language];
  video.pause();video.poster=d.focus.poster;video.src=d.focus.video;video.load();
  still.src=d.focus.poster;still.alt=d.focus.view[language];
  document.getElementById('highlight-fullsize').href=d.focus.poster;
  document.getElementById('highlight-view').textContent=d.focus.view[language];
  const ledger=document.getElementById('highlight-events');ledger.replaceChildren();
  d.focus.events.forEach(event=>{const li=document.createElement('li'),time=document.createElement('time');time.textContent=event.time.toFixed(3)+' s';li.append(time,document.createTextNode(' '+event[language]));ledger.append(li);});
  setMode('still');
  document.querySelectorAll('[data-highlight]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});
  ['highlight-tag','highlight-title','highlight-description'].forEach((key,i)=>document.getElementById(key).textContent=label[i]);
  document.getElementById('highlight-run').textContent=(language==='zh'?'来源：':'Source: ')+mediaCatalog.archives[d.run][language][1]+(d.run.endsWith('semantic')?(language==='zh'?' · 仿真语义观测':' · simulator semantics'):(language==='zh'?' · 完整视觉':' · full vision'));
  document.getElementById('highlight-time').textContent=`${language==='zh'?'任务时间':'Mission time'} ${clock(d.start_elapsed)}–${clock(d.end_elapsed)} · 3×`;
  document.getElementById('highlight-context').dataset.context=id;
 }));
 const archive=document.getElementById('archive-video');
 const selectArchive=(id,time=0)=>{
  const d=mediaCatalog.archives[id];archive.pause();
  document.querySelector(`[data-archive="${id}"]`)?.closest('details')?.setAttribute('open','');
  archive.onloadedmetadata=()=>{archive.currentTime=Math.min(time,Math.max(0,archive.duration-.1));};
  archive.poster=d.poster;archive.src=d.src;archive.load();
  document.querySelectorAll('[data-archive]').forEach(b=>{const selected=b.dataset.archive===id;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
  document.getElementById('archive-title').textContent=d[language][1];document.getElementById('archive-description').textContent=d[language][2];document.getElementById('archive-download').href=d.src;
 };
 document.querySelectorAll('[data-archive]').forEach(b=>b.addEventListener('click',()=>selectArchive(b.dataset.archive)));
 document.getElementById('highlight-context').addEventListener('click',e=>{
  const d=mediaCatalog.highlights[e.currentTarget.dataset.context];selectArchive(d.run,d.start_video_s);
 });
 // Do not play multiple large recordings simultaneously.
 document.querySelectorAll('video').forEach(v=>v.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==v)other.pause();})));
})();
