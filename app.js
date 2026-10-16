const demos={
 'gpt56-semantic':{tag:'SIMULATOR SEMANTICS',title:'GPT-5.6 medium · 578.6 seconds · completed',description:'Starts with no known objects or completed operations. The simulator supplies object identity and position under visibility constraints; online image recognition is not evaluated.'},
 'gpt6-semantic':{tag:'SIMULATOR SEMANTICS',title:'GPT-6 Astra medium · 738.2 seconds · completed',description:'A successful historical runtime example with visibility-gated simulator semantics. The four-run GPT-6 Astra set also includes one incomplete, manually stopped trial. This is not evidence of a general runtime speedup.'},
 'gpt56-visual':{tag:'FULL VISUAL PIPELINE',title:'GPT-5.6 low · 993.6 seconds · completed',description:'Starts with unknown objects and map. GPT handles task decomposition, correction and concurrency review; Qwen3.5-4B handles recognition, action selection and exploration. Includes all search, planning, waiting and recovery time.'},
 'known-state':{tag:'RESTORED CHECKPOINT',title:'Qwen3.8 Flash Next BF16 · 315.6 seconds remaining · completed',description:'Starts with 12 known objects, a full map, an existing plan and three successful earlier operations. Routine discovery is initially disabled; a newly fabricated item can trigger a local check. This is not a from-zero mission.'}
};
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',()=>{
 const id=button.dataset.demo,data=demos[id],v=document.querySelector('#experiment-video');v.pause();v.poster=`assets/${id}.jpg`;v.src=`assets/${id}.mp4`;v.load();
 document.querySelectorAll('[data-demo]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 document.querySelector('#demo-tag').textContent=data.tag;document.querySelector('#demo-title').textContent=data.title;document.querySelector('#demo-description').textContent=data.description;document.querySelector('#demo-download').href=`assets/${id}.mp4`;
}));
const sections=[...document.querySelectorAll('article>section')];
const update=()=>{let current=sections[0]?.id;for(const s of sections){if(s.getBoundingClientRect().top<180)current=s.id;}document.querySelectorAll('.contents a').forEach(a=>a.classList.toggle('current',a.hash==='#'+current));};
addEventListener('scroll',update,{passive:true});update();
