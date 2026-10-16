const demos={
 'gpt56-semantic':{tag:'SIMULATOR SEMANTICS',title:'GPT-5.6 medium · 578.6 seconds · completed',description:'Starts with no known objects or completed operations. The simulator supplies object identity and position under visibility constraints; online image recognition is not evaluated.'},
 'gpt6-semantic':{tag:'SIMULATOR SEMANTICS',title:'GPT-6 Astra medium · 738.2 seconds · completed',description:'A successful historical runtime example with visibility-gated simulator semantics. The four-run GPT-6 set also includes one incomplete, manually stopped trial. This is not evidence of a general runtime speedup.'},
 'gpt56-visual':{tag:'FULL VISUAL PIPELINE',title:'GPT-5.6 low · 993.6 seconds · completed',description:'Starts with unknown objects and map. GPT handles task decomposition, correction and concurrency review; Qwen3.5-4B handles recognition, action selection and exploration. Includes all search, planning, waiting and recovery time.'},
 'known-state':{tag:'RESTORED CHECKPOINT',title:'Qwen3.8 Flash Next BF16 · 315.6 seconds remaining · completed',description:'Starts with 12 known objects, a full map, an existing plan and three successful earlier operations. Routine discovery is initially disabled; a newly fabricated item can trigger a local check. This is not a from-zero mission.'}
};
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',()=>{
 const id=button.dataset.demo,data=demos[id],v=document.querySelector('#experiment-video');v.pause();v.poster=`assets/${id}.jpg`;v.src=`assets/${id}.mp4`;v.load();
 document.querySelectorAll('[data-demo]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 document.querySelector('#demo-tag').textContent=data.tag;document.querySelector('#demo-title').textContent=data.title;document.querySelector('#demo-description').textContent=data.description;document.querySelector('#demo-download').href=`assets/${id}.mp4`;
}));
const stages=[
 ['FROM A HUMAN OBSERVATION TO A TESTABLE CAUSE','Trace the waiting, not just the model call.','Inspect requests, execution receipts, carrying state, dependencies, and robot motion. Separate model latency from queueing, navigation, and a legitimate sustained action.','Example: an idle-looking robot may be holding authorization; another may be unable to release a carried object.'],
 ['FROM A CAUSE TO A BOUNDED CHANGE','Change the smallest useful part of the system.','Make the hypothesis concrete in code: revise a dependency, reorder a nearby pickup, reduce unnecessary recognition, or repair a terminal operation. Preserve the rest of the execution pipeline.','Example: propose picking up a nearby required object before leaving, while accounting for cancellation and replanning costs.'],
 ['FROM A PATCH TO MEASURED BEHAVIOR','Test at the scale of the claim.','Check deterministic contracts, replay recorded sensor inputs, restore representative simulator checkpoints, and compare complete missions. Unit-test success alone does not establish a time saving.','Example: a restored-checkpoint pair completed in 422.1 s and 352.1 s; the same initial state makes the remaining-task comparison informative.'],
 ['FROM MEASUREMENTS TO A RESEARCH DECISION','Keep improvements. Reject attractive regressions.','Inspect success, failure, latency, travel, and interference. Retain supported changes, roll back harmful ones, and state when a candidate has not received a complete evaluation.','Example: retain nearby pickup reordering, remove obstructive waiting-point prepositioning, and reject reference images that did not improve the sampled perception pipeline.']
];
document.querySelectorAll('[data-stage]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-stage]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});
 const s=stages[Number(button.dataset.stage)];['cycle-kicker','cycle-title','cycle-text','cycle-example'].forEach((id,i)=>document.getElementById(id).textContent=s[i]);
}));
const sections=[...document.querySelectorAll('article>section')];
const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.reading-progress').style.width=(max>0?scrollY/max*100:0)+'%';let current=sections[0]?.id;for(const s of sections){if(s.getBoundingClientRect().top<180)current=s.id;}document.querySelectorAll('.contents a').forEach(a=>a.classList.toggle('current',a.hash==='#'+current));};
addEventListener('scroll',update,{passive:true});update();
