const demos={"gpt56-semantic": {"tag": "仿真器语义观测", "title": "GPT-5.6 medium · 578.6 秒 · 已完成", "description": "初始没有已知物体或已完成操作。仿真器在可见性约束下提供物体身份与位置；本轮不评估在线图像识别。"}, "gpt6-semantic": {"tag": "仿真器语义观测", "title": "GPT-6 Astra medium · 738.2 秒 · 已完成", "description": "可见性约束下的仿真语义观测，一轮历史成功案例。同组四轮 GPT-6 Astra 实验还包括一轮被手动停止的未完成任务，不能据此证明普遍运行加速。"}, "gpt56-visual": {"tag": "完整视觉流程", "title": "GPT-5.6 low · 993.6 秒 · 已完成", "description": "初始物体和地图未知。GPT 负责子任务分解、纠错和并行评估；Qwen3.5-4B 负责识别、动作选择和探索。耗时包含搜索、规划、等待与恢复。"}, "known-state": {"tag": "从检查点恢复", "title": "Qwen3.8 Flash Next BF16 · 剩余 315.6 秒 · 已完成", "description": "初始恢复 12 个已知物体、完整地图、已有计划及三项成功操作。常规搜索初始关闭，新加工物体仍可触发局部复核。这不是从零开始的任务。"}};
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',()=>{
 const id=button.dataset.demo,data=demos[id],v=document.querySelector('#experiment-video');v.pause();v.poster=`assets/zh/${id}.jpg`;v.src=`assets/zh/${id}.mp4`;v.load();
 document.querySelectorAll('[data-demo]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 document.querySelector('#demo-tag').textContent=data.tag;document.querySelector('#demo-title').textContent=data.title;document.querySelector('#demo-description').textContent=data.description;document.querySelector('#demo-download').href=`assets/zh/${id}.mp4`;
}));
const sections=[...document.querySelectorAll('article>section')];
const update=()=>{let current=sections[0]?.id;for(const s of sections){if(s.getBoundingClientRect().top<180)current=s.id;}document.querySelectorAll('.contents a').forEach(a=>a.classList.toggle('current',a.hash==='#'+current));};
addEventListener('scroll',update,{passive:true});update();
