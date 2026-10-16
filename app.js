const demos={
 'gpt56-semantic':{tag:'SIMULATOR SEMANTICS',title:'GPT-5.6 medium · 578.6 seconds · completed',description:'Simulator semantics; no online image recognition.'},
 'gpt6-semantic':{tag:'SIMULATOR SEMANTICS',title:'GPT-6 Astra medium · 738.2 seconds · completed',description:'Simulator semantics; no online image recognition.'},
 'gpt56-visual':{tag:'FULL VISUAL PIPELINE',title:'GPT-5.6 low · 993.6 seconds · completed',description:'Full visual run from unknown objects and map.'},
 'known-state':{tag:'RESTORED CHECKPOINT',title:'Qwen3.8 Flash Next BF16 · 315.6 seconds remaining · completed',description:'Twelve known objects and a full map; remaining time only.'}
};
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',()=>{
 const id=button.dataset.demo,data=demos[id],v=document.querySelector('#experiment-video'),version=id==='gpt6-semantic'?'?v=2':'';v.pause();v.poster=`assets/${id}.jpg${version}`;v.src=`assets/${id}.mp4${version}`;v.load();
 document.querySelectorAll('[data-demo]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 document.querySelector('#demo-tag').textContent=data.tag;document.querySelector('#demo-title').textContent=data.title;document.querySelector('#demo-description').textContent=data.description;document.querySelector('#demo-download').href=`assets/${id}.mp4${version}`;
}));
const sections=[...document.querySelectorAll('article>section')];
const update=()=>{let current=sections[0]?.id;for(const s of sections){if(s.getBoundingClientRect().top<180)current=s.id;}document.querySelectorAll('.contents a').forEach(a=>a.classList.toggle('current',a.hash==='#'+current));};
addEventListener('scroll',update,{passive:true});update();
