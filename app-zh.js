const demos={"gpt56-semantic": {"tag": "仿真器语义观测", "title": "GPT-5.6 medium · 578.6 秒 · 已完成", "description": "仿真语义观测，无在线图像识别。"}, "gpt6-semantic": {"tag": "仿真器语义观测", "title": "GPT-6 Astra medium · 738.2 秒 · 已完成", "description": "仿真语义观测，无在线图像识别。"}, "gpt56-visual": {"tag": "完整视觉流程", "title": "GPT-5.6 low · 993.6 秒 · 已完成", "description": "从未知物体和地图开始的完整视觉流程。"}, "known-state": {"tag": "从检查点恢复", "title": "Qwen3.8 Flash Next BF16 · 剩余 315.6 秒 · 已完成", "description": "12 个物体及完整地图已知；仅计剩余任务时间。"}};
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',()=>{
 const id=button.dataset.demo,data=demos[id],v=document.querySelector('#experiment-video'),version=id==='gpt6-semantic'?'?v=2':'';v.pause();v.poster=`assets/zh/${id}.jpg${version}`;v.src=`assets/zh/${id}.mp4${version}`;v.load();
 document.querySelectorAll('[data-demo]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 document.querySelector('#demo-tag').textContent=data.tag;document.querySelector('#demo-title').textContent=data.title;document.querySelector('#demo-description').textContent=data.description;document.querySelector('#demo-download').href=`assets/zh/${id}.mp4${version}`;
}));
const sections=[...document.querySelectorAll('article>section')];
const update=()=>{let current=sections[0]?.id;for(const s of sections){if(s.getBoundingClientRect().top<180)current=s.id;}document.querySelectorAll('.contents a').forEach(a=>a.classList.toggle('current',a.hash==='#'+current));};
addEventListener('scroll',update,{passive:true});update();
