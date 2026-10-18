const originClips={
 'home':{title:'Distributed exploration in a furnished home',description:'Multi-robot exploration and target discovery in a furnished home; the original demonstration film is already 4× speed.',src:'assets/dvlc/home-exploration-4x.mp4',poster:'assets/dvlc/home-exploration-poster.jpg'},
 'door-team':{title:'Collaborative door opening · team view',description:'A UAV finds a door and requests mobile-manipulator assistance; exploration continues after it opens. The original demonstration film is already 4× speed.',src:'assets/dvlc/door-assistance-4x.mp4',poster:'assets/dvlc/door-assistance-poster.jpg'},
 'door-closeup':{title:'Collaborative door opening · close-up',description:'The door action is excerpted from a separate original Unity recording; it is not a synchronized camera of the team-view clip.',src:'assets/dvlc/door-closeup.mp4',poster:'assets/dvlc/door-closeup-poster.jpg'}
};
document.querySelectorAll('[data-origin]').forEach(button=>button.addEventListener('click',()=>{
 const data=originClips[button.dataset.origin],video=document.querySelector('#origin-video');
 video.pause();video.poster=data.poster;video.src=data.src;video.setAttribute('aria-label',data.title);video.load();
 document.querySelectorAll('[data-origin]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
 document.querySelector('#origin-title').textContent=data.title;document.querySelector('#origin-description').textContent=data.description;
}));
const demos={
 'factory':{tag:'CURRENT SYSTEM · COMPLETE RUN · 5×',title:'Factory · 769.5 s · completed',description:'Repair, parallel staging, assembly, delivery, shutdown, and disconnection. Original simulator UI.',src:'assets/scenes/factory-full-5x.mp4',poster:'assets/scenes/factory-poster.jpg',current:true},
 'police':{tag:'CURRENT SYSTEM · COMPLETE RUN · 5×',title:'Police · 887.8 s · completed',description:'Work order, diagnosis, repair, inspection, and delivery. Original simulator UI.',src:'assets/scenes/police-full-5x.mp4',poster:'assets/scenes/police-poster.jpg',current:true},
 'gpt56-semantic':{tag:'SIMULATOR SEMANTICS · EARLIER RUN',title:'GPT-5.6 medium · 578.6 seconds · completed',description:'Simulator semantics; no online image recognition.',src:'assets/gpt56-semantic.mp4',poster:'assets/gpt56-semantic.jpg'},
 'gpt6-semantic':{tag:'SIMULATOR SEMANTICS · EARLIER RUN',title:'GPT-6 Astra medium · 738.2 seconds · completed',description:'Simulator semantics; no online image recognition.',src:'assets/gpt6-semantic.mp4?v=3',poster:'assets/gpt6-semantic.jpg?v=3'},
 'gpt56-visual':{tag:'FULL VISUAL PIPELINE · EARLIER RUN',title:'GPT-5.6 low · 993.6 seconds · completed',description:'Full visual run from unknown objects and map.',src:'assets/gpt56-visual.mp4',poster:'assets/gpt56-visual.jpg'},
 'known-state':{tag:'RESTORED CHECKPOINT · EARLIER RUN',title:'Qwen3.8 Flash Next BF16 · 315.6 seconds remaining · completed',description:'Twelve known objects and a full map; remaining time only.',src:'assets/known-state.mp4',poster:'assets/known-state.jpg'}
};
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',()=>{
 const data=demos[button.dataset.demo],video=document.querySelector('#experiment-video');
 video.pause();video.poster=data.poster;video.src=data.src;video.classList.toggle('current-scene',Boolean(data.current));video.setAttribute('aria-label',data.title);video.load();
 document.querySelectorAll('[data-demo]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
 document.querySelectorAll('[data-mission-panel]').forEach(panel=>{panel.hidden=panel.dataset.missionPanel!==button.dataset.demo;});
 document.querySelectorAll('[data-brief-panel]').forEach(panel=>{panel.hidden=panel.dataset.briefPanel!==button.dataset.demo;});
 document.querySelector('.mission-showcase').classList.toggle('historical',!data.current);
 document.querySelector('#demo-tag').textContent=data.tag;document.querySelector('#demo-title').textContent=data.title;document.querySelector('#demo-description').textContent=data.description;document.querySelector('#demo-download').href=data.src;
}));
const sections=[...document.querySelectorAll('article>section')];
const update=()=>{let current=sections[0]?.id;for(const s of sections){if(s.getBoundingClientRect().top<180)current=s.id;}document.querySelectorAll('.contents a').forEach(a=>a.classList.toggle('current',a.hash==='#'+current));};
addEventListener('scroll',update,{passive:true});update();
