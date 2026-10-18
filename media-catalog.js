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
        "Archived GPT-6 Astra experiment",
        "GPT-6 Astra medium · 738.2 s · completed",
        "The archived floor maps and task graph remain above four enlarged third-person cameras. Robot icons in the colored shared maps are doubled; recorded shared subtasks replace the lower mini-maps and action descriptions. No simulation rerun."
      ],
      "zh": [
        "历史 GPT-6 Astra 实验",
        "GPT-6 Astra medium · 738.2 秒 · 已完成",
        "保留历史录像的楼层俯视图与任务关系图，地图机器人图标放大两倍；下方放大四机第三人称画面，展示录制时的共享子任务；未重跑仿真。"
      ],
      "src": "assets/archive/gpt6-semantic-reframed-en-3x.mp4?v=5",
      "poster": "assets/archive/gpt6-semantic-reframed-en-3x.jpg?v=5",
      "src_zh": "assets/archive/gpt6-semantic-reframed-zh-3x.mp4?v=5",
      "poster_zh": "assets/archive/gpt6-semantic-reframed-zh-3x.jpg?v=5",
      "original_src": "assets/archive/gpt6-semantic-swarm-3x.mp4"
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
        "Target confirmation",
        "Authorization-box localization and discovery shutdown",
        "R0 confirms the authorization box at mission time 589.299 s. Routine discovery is disabled at 589.324 s once required static targets are localized. The crop retains the recorded recognition view and map markers."
      ],
      "zh": [
        "目标身份确认",
        "授权盒定位与常规搜索关闭",
        "R0 于任务第 589.299 秒确认授权盒；所需静态目标全部定位后，589.324 秒关闭常规搜索。局部画面保留原录像的识别视图与地图标记。"
      ],
      "focus": {
        "poster": "assets/focus/recognition-authorization.jpg",
        "video": "assets/focus/recognition-authorization.mp4",
        "view": {
          "zh": "R0 识别画面与二层俯视图",
          "en": "R0 recognition view and second-floor map"
        },
        "events": [
          {
            "time": 589.299,
            "zh": "R0 确认授权盒",
            "en": "R0 confirms the authorization box"
          },
          {
            "time": 589.324,
            "zh": "常规搜索关闭",
            "en": "Routine discovery is disabled"
          }
        ]
      }
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
        "Perception and execution",
        "Local recognition and pickup of a new workpiece",
        "After machining and inspection, the system discovers the new workpiece at 817.047 s; R2 completes pickup at 820.587 s. Newly created targets can still trigger local recognition after routine discovery stops."
      ],
      "zh": [
        "识别与执行衔接",
        "新成品的局部识别与抓取",
        "加工与质检完成后，系统在第 817.047 秒发现新成品，R2 于 820.587 秒完成抓取。该事件说明常规搜索关闭后，新生成目标仍可触发局部识别。"
      ],
      "focus": {
        "poster": "assets/focus/recognition-product.jpg",
        "video": "assets/focus/recognition-product.mp4",
        "view": {
          "zh": "R2 记录相机与工作区俯视图",
          "en": "R2 recorded camera and work-area map"
        },
        "events": [
          {
            "time": 817.047,
            "zh": "发现新生成的成品",
            "en": "Newly fabricated workpiece discovered"
          },
          {
            "time": 820.587,
            "zh": "R2 抓取成功",
            "en": "R2 pickup succeeds"
          }
        ]
      }
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
        "Concurrent repair preparation",
        "Overlapping compartment access and module retrieval",
        "R1 inserts the repair key, unlocks, and opens the compartment while R3 retrieves module M-23. The paired camera crops share the same recorded instant. Logs confirm temporal overlap; the clip does not isolate a causal speedup."
      ],
      "zh": [
        "维修准备并行",
        "维修舱开启与模块获取重叠",
        "R1 插入检修钥匙、解锁并打开维修舱；R3 同时前往获取 M-23 维修模块。并列画面来自同一录像时刻，日志确认两项操作存在时间重叠。片段不单独用于量化因果加速。"
      ],
      "focus": {
        "poster": "assets/focus/parallel-repair.jpg",
        "video": "assets/focus/parallel-repair.mp4",
        "view": {
          "zh": "R1 与 R3 的同步第三人称视角",
          "en": "Synchronized R1 and R3 third-person views"
        },
        "events": [
          {
            "time": 392.973,
            "zh": "R1 开始插入检修钥匙",
            "en": "R1 starts inserting the repair key"
          },
          {
            "time": 394.043,
            "zh": "R3 开始取维修模块",
            "en": "R3 starts module retrieval"
          },
          {
            "time": 438.092,
            "zh": "R1 打开维修舱",
            "en": "R1 opens the service compartment"
          },
          {
            "time": 443.861,
            "zh": "R3 取回模块",
            "en": "R3 retrieves the module"
          }
        ]
      }
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
        "Concurrent production preparation",
        "Temporary power connection and blank loading",
        "After repair, R1 connects temporary power while R2 loads the matching blank. R3 subsequently establishes authorization, followed by machining. Paired views show the overlapping preparation operations."
      ],
      "zh": [
        "加工准备并行",
        "临时供电连接与毛坯装载",
        "维修完成后，R1 连接临时供电，R2 同时装载匹配毛坯；随后 R3 建立授权，R2 启动加工。并列视图突出接电与装料的重叠过程。"
      ],
      "focus": {
        "poster": "assets/focus/power-and-loading.jpg",
        "video": "assets/focus/power-and-loading.mp4",
        "view": {
          "zh": "R1 与 R2 的同步第三人称视角",
          "en": "Synchronized R1 and R2 third-person views"
        },
        "events": [
          {
            "time": 491.956,
            "zh": "R1 开始接电",
            "en": "R1 starts connecting power"
          },
          {
            "time": 492.403,
            "zh": "R2 开始装料",
            "en": "R2 starts loading"
          },
          {
            "time": 503.928,
            "zh": "R3 建立授权",
            "en": "R3 establishes authorization"
          }
        ]
      }
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
        "Workpiece transport",
        "Humanoid pickup and delivery",
        "Following successful pickup, R3 carries the workpiece to the delivery station and completes placement at 656.155 s. The map and third-person camera show transport within the ground floor."
      ],
      "zh": [
        "成品搬运",
        "人形机器人的成品获取与交付",
        "R3 完成成品抓取后移向交接台，于第 656.155 秒完成交付。俯视地图与第三人称画面共同展示一层内搬运过程。"
      ],
      "focus": {
        "poster": "assets/focus/humanoid-delivery.jpg",
        "video": "assets/focus/humanoid-delivery.mp4",
        "view": {
          "zh": "R3 第三人称视角与一层俯视图",
          "en": "R3 third-person view and ground-floor map"
        },
        "events": [
          {
            "time": 595.811,
            "zh": "R3 抓取成品成功",
            "en": "R3 picks up the finished key"
          },
          {
            "time": 656.155,
            "zh": "R3 交付成功",
            "en": "R3 completes delivery"
          }
        ]
      }
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
        "Workpiece pickup and delivery initiation",
        "R2 completes pickup at 897.016 s and starts delivery at 899.364 s. This excerpt comes from the full-visual comparison and ends before delivery completion; subsequent rechecks and recovery remain in the full recording."
      ],
      "zh": [
        "近距离操作",
        "成品抓取与交付启动",
        "R2 于第 897.016 秒完成抓取，899.364 秒启动交付动作。该片段来自完整视觉对照，结束时尚未完成交付；后续复核与恢复记录保留在完整录像中。"
      ],
      "focus": {
        "poster": "assets/focus/close-pickup.jpg",
        "video": "assets/focus/close-pickup.mp4",
        "view": {
          "zh": "R2 记录相机与工作区俯视图",
          "en": "R2 recorded camera and work-area map"
        },
        "events": [
          {
            "time": 897.016,
            "zh": "R2 抓取成功",
            "en": "R2 pickup succeeds"
          },
          {
            "time": 899.364,
            "zh": "R2 开始交付动作",
            "en": "R2 starts the delivery action"
          }
        ]
      }
    }
  }
};
