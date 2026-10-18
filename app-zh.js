const demos={
 'factory':{tag:'当前系统 · 完整任务 · 5×',title:'工厂 · 769.5 秒 · 已完成',description:'维修、并行备料、装配、交付及停机断电；保留原始仿真界面。',src:'assets/scenes/factory-full-5x.mp4',poster:'assets/scenes/factory-poster.jpg',current:true},
 'police':{tag:'当前系统 · 完整任务 · 5×',title:'警局 · 887.8 秒 · 已完成',description:'任务单、诊断、维修、质检与交付；保留原始仿真界面。',src:'assets/scenes/police-full-5x.mp4',poster:'assets/scenes/police-poster.jpg',current:true},
 'gpt56-semantic':{tag:'仿真器语义观测 · 早期实验',title:'GPT-5.6 medium · 578.6 秒 · 已完成',description:'仿真语义观测，无在线图像识别。',src:'assets/zh/gpt56-semantic.mp4',poster:'assets/zh/gpt56-semantic.jpg'},
 'gpt6-semantic':{tag:'仿真器语义观测 · 早期实验',title:'GPT-6 Astra medium · 738.2 秒 · 已完成',description:'仿真语义观测，无在线图像识别。',src:'assets/zh/gpt6-semantic.mp4?v=3',poster:'assets/zh/gpt6-semantic.jpg?v=3'},
 'gpt56-visual':{tag:'完整视觉流程 · 早期实验',title:'GPT-5.6 low · 993.6 秒 · 已完成',description:'从未知物体和地图开始的完整视觉流程。',src:'assets/zh/gpt56-visual.mp4',poster:'assets/zh/gpt56-visual.jpg'},
 'known-state':{tag:'从检查点恢复 · 早期实验',title:'Qwen3.8 Flash Next BF16 · 剩余 315.6 秒 · 已完成',description:'12 个物体及完整地图已知；仅计剩余任务时间。',src:'assets/zh/known-state.mp4',poster:'assets/zh/known-state.jpg'}
};
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',()=>{
 const data=demos[button.dataset.demo],video=document.querySelector('#experiment-video');
 video.pause();video.poster=data.poster;video.src=data.src;video.classList.toggle('current-scene',Boolean(data.current));video.setAttribute('aria-label',data.title);video.load();
 document.querySelectorAll('[data-demo]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
 document.querySelectorAll('[data-mission-panel]').forEach(panel=>{panel.hidden=panel.dataset.missionPanel!==button.dataset.demo;});
 document.querySelector('#demo-tag').textContent=data.tag;document.querySelector('#demo-title').textContent=data.title;document.querySelector('#demo-description').textContent=data.description;document.querySelector('#demo-download').href=data.src;
}));
const sections=[...document.querySelectorAll('article>section')];
const update=()=>{let current=sections[0]?.id;for(const s of sections){if(s.getBoundingClientRect().top<180)current=s.id;}document.querySelectorAll('.contents a').forEach(a=>a.classList.toggle('current',a.hash==='#'+current));};
addEventListener('scroll',update,{passive:true});update();
