const mediaCatalog={
  "archives": {
    "gpt56-semantic": {
      "en": [
        "GPT-5.6 · fast execution",
        "GPT-5.6 medium · 578.6 s · completed",
        "Visibility-gated simulator semantics; no online RGB recognition. Starts without known objects or completed operations."
      ],
      "zh": [
        "GPT-5.6 快速执行",
        "GPT-5.6 medium · 578.6 秒 · 已完成",
        "可见性约束下的仿真语义观测；不含在线 RGB 识别，初始无已知物体和已完成操作。"
      ],
      "src": "assets/archive/gpt56-semantic-swarm-3x.mp4",
      "poster": "assets/archive/gpt56-semantic-swarm-3x.jpg"
    },
    "gpt6-semantic": {
      "en": [
        "GPT-6 · execution",
        "GPT-6 Astra medium · 738.2 s · completed",
        "Selected successful historical run with simulator semantics; the four-run set also includes one incomplete trial."
      ],
      "zh": [
        "GPT-6 执行实例",
        "GPT-6 Astra medium · 738.2 秒 · 已完成",
        "仿真语义观测下的历史成功案例；同组四轮还包括一轮未完成实验。"
      ],
      "src": "assets/archive/gpt6-semantic-swarm-3x.mp4",
      "poster": "assets/archive/gpt6-semantic-swarm-3x.jpg"
    },
    "gpt56-visual": {
      "en": [
        "GPT-5.6 · full vision",
        "GPT-5.6 low · 993.6 s · completed",
        "Full visual pipeline, initially unknown objects and map. Task reasoning: GPT-5.6 low; actions and perception: Qwen3.5-4B."
      ],
      "zh": [
        "GPT-5.6 完整视觉",
        "GPT-5.6 low · 993.6 秒 · 已完成",
        "完整视觉流程，初始物体与地图未知。GPT-5.6 low 负责子任务层，Qwen3.5-4B 负责动作与感知。"
      ],
      "src": "assets/archive/gpt56-visual-swarm-3x.mp4",
      "poster": "assets/archive/gpt56-visual-swarm-3x.jpg"
    },
    "known-state": {
      "en": [
        "Known-state execution",
        "Qwen3.8 Flash Next BF16 · 315.6 s remaining",
        "Restored 12 known objects, a full map, an existing plan and three completed operations. Not a from-zero run."
      ],
      "zh": [
        "找齐后执行",
        "Qwen3.8 Flash Next BF16 · 剩余 315.6 秒",
        "恢复 12 个已知物体、完整地图、已有计划和 3 项成功操作，并非从零开始。"
      ],
      "src": "assets/archive/known-state-swarm-3x.mp4",
      "poster": "assets/archive/known-state-swarm-3x.jpg"
    },
    "predictive": {
      "en": [
        "Visual discovery · 896.1 s",
        "Predictive-preparation version · Qwen3.8 Flash Next · 896.1 s · completed",
        "Full visual mission from the requested predictive-preparation recording. The new predictive-pickup switch triggered zero times here; this video does not establish its causal speedup."
      ],
      "zh": [
        "预测取送版本 · 完整视觉",
        "预测取送版本 · Qwen3.8 Flash Next · 896.1 秒 · 已完成",
        "来自指定的“预测取送加速”录像，展示从头完整视觉任务。本轮新增预测取物切换触发 0 次，不将这段录像作为该功能因果加速的证据。"
      ],
      "src": "assets/archive/predictive-swarm-3x.mp4",
      "poster": "assets/archive/predictive-swarm-3x.jpg"
    }
  },
  "highlights": {
    "recognition-authorization": {
      "id": "recognition-authorization",
      "start_elapsed": 578,
      "end_elapsed": 600,
      "robots": [
        0
      ],
      "claim": "R0 confirms the authorization box upstairs at 589.299 s; routine discovery is disabled after the required static resources are localized. Original recorded interface, no added detection boxes.",
      "events": [
        589.299,
        589.324
      ],
      "run": "predictive",
      "start_video_s": 192.361211,
      "duration_video_s": 7.333333333333333,
      "visual_source": "Original swarm_cooperation_window, continuous excerpt, no added overlay",
      "en": [
        "Discovery upstairs",
        "R0 confirms the authorization box",
        "The scout identifies the authorization box at 589.299 s. The remaining static resource is now localized, and routine discovery is disabled. Watch the second-floor map gain the object marker. Original Chinese interface; no detection overlay added."
      ],
      "zh": [
        "楼上物体识别",
        "无人机确认授权盒，结束常规搜索",
        "R0 在第 589.299 秒确认授权盒。所需静态资源全部定位后，常规搜索关闭。注意二层地图上新增的物体标记。此处保留原始中文窗口，没有补画检测框。"
      ]
    },
    "recognition-product": {
      "id": "recognition-product",
      "start_elapsed": 804,
      "end_elapsed": 827,
      "robots": [
        2
      ],
      "claim": "After processing and inspection, the new finished workpiece is discovered at 817.047 s and picked up at 820.587 s. Local recognition remains available after routine discovery stops.",
      "events": [
        808.579,
        812.457,
        817.047,
        820.587
      ],
      "run": "predictive",
      "start_video_s": 267.694545,
      "duration_video_s": 7.666666666666667,
      "visual_source": "Original swarm_cooperation_window, continuous excerpt, no added overlay",
      "en": [
        "Perception to action",
        "A newly made key is recognized, then picked up",
        "Machining succeeds at 808.579 s; inspection follows at 812.457 s. R2 discovers the new workpiece at 817.047 s and completes pickup at 820.587 s. Local recognition can still serve newly produced objects after routine search stops."
      ],
      "zh": [
        "识别衔接操作",
        "新成品被识别，随后抓取",
        "加工于第 808.579 秒完成，812.457 秒完成质检。R2 在 817.047 秒发现新成品，820.587 秒完成抓取。常规搜索结束后，新生成物体仍可按需局部识别。"
      ]
    },
    "parallel-repair": {
      "id": "parallel-repair",
      "run": "gpt56-semantic",
      "start_elapsed": 390,
      "end_elapsed": 446,
      "robots": [
        1,
        3
      ],
      "claim": "R1 inserts the repair key and opens the service compartment while R3 fetches module M-23.",
      "events": [
        392.973,
        394.043,
        422.45,
        430.471,
        438.092,
        443.861
      ],
      "start_video_s": 129.72363,
      "duration_video_s": 18.666666666666668,
      "en": [
        "Two useful actions overlap",
        "Open the device while a teammate fetches its module",
        "R1 inserts the repair key, unlocks and opens the service compartment. R3 simultaneously travels to and picks up module M-23. Both actions appear in the execution log; the clip alone does not measure a causal time saving."
      ],
      "zh": [
        "两项有效工作重叠",
        "一边打开维修舱，一边取维修模块",
        "R1 插入检修钥匙、解锁并打开维修舱；与此同时，R3 前往并抓取 M-23 维修模块。日志确认两项操作发生重叠；片段本身不用于量化因果加速。"
      ]
    },
    "power-and-loading": {
      "id": "power-and-loading",
      "run": "gpt56-semantic",
      "start_elapsed": 490,
      "end_elapsed": 521,
      "robots": [
        1,
        2,
        3
      ],
      "claim": "R1 connects power while R2 loads the blank. R3 subsequently authorizes machining.",
      "events": [
        491.956,
        492.403,
        501.873,
        503.119,
        503.928,
        510.213,
        517.116
      ],
      "start_video_s": 163.056963,
      "duration_video_s": 10.333333333333334,
      "en": [
        "Parallel preparation",
        "Connect power and load material together",
        "After repair, R1 connects temporary power while R2 loads the matching blank. R3 then establishes authorization and R2 starts machining. Different roles converge on one shared task."
      ],
      "zh": [
        "并行准备",
        "接电与装料同时推进",
        "维修完成后，R1 连接临时供电，R2 同时装入匹配毛坯。随后 R3 建立授权，R2 启动加工。不同角色的操作汇合到同一项任务。"
      ]
    },
    "humanoid-delivery": {
      "id": "humanoid-delivery",
      "run": "gpt6-semantic",
      "start_elapsed": 574,
      "end_elapsed": 659,
      "robots": [
        3
      ],
      "claim": "R3 picks up the finished key and delivers it. This excerpt shows ground-floor transport, not a cross-floor delivery.",
      "events": [
        574.74,
        595.811,
        596.51,
        656.155
      ],
      "start_video_s": 191.045357,
      "duration_video_s": 28.333333333333332,
      "en": [
        "Transport and delivery",
        "The humanoid takes the finished key to its destination",
        "R3 picks up the finished key and carries it to the delivery station, where placement succeeds at 656.155 s. This segment shows ground-floor transport, not a cross-floor delivery."
      ],
      "zh": [
        "搬运与交付",
        "人形机器人将成品送到交接台",
        "R3 抓起成品钥匙并运往交接台，于第 656.155 秒完成放置。这里展示的是一层内搬运，不将其描述为跨层交付。"
      ]
    },
    "close-pickup": {
      "id": "close-pickup",
      "run": "gpt56-visual",
      "start_elapsed": 889,
      "end_elapsed": 909,
      "robots": [
        2
      ],
      "claim": "After inspection and local product recognition, R2 picks up the finished key and starts the delivery action. Delivery is not yet complete in this clip.",
      "events": [
        892.542,
        897.016,
        899.364
      ],
      "start_video_s": 295.95519,
      "duration_video_s": 6.666666666666667,
      "en": [
        "Close-range manipulation",
        "Pick up the verified finished key",
        "R2 completes pickup at 897.016 s, then starts delivery at 899.364 s. This is the recent full-visual comparison run. The clip ends before delivery; its later recheck and recovery remain in the full recording."
      ],
      "zh": [
        "近距离操作",
        "抓起已经确认的成品钥匙",
        "R2 于第 897.016 秒完成抓取，899.364 秒开始交付。这段来自近期完整视觉对照，结束时尚未交付；之后的复核与恢复保留在完整录像中。"
      ]
    }
  }
};
