D-VLC technical report — English and Chinese editions

Public website: https://yzhou-zju.github.io/dvlc-agentic-research-blog/
Chinese edition: https://yzhou-zju.github.io/dvlc-agentic-research-blog/zh.html

Buildless static GitHub Pages site. Publish the repository root from main.
index.html is English; zh.html is Chinese. The header switches languages.

Media:
- Four English camera remasters in assets/.
- Four corresponding Chinese camera remasters in assets/zh/.
- Five byte-identical original 3x cooperation-window recordings in assets/archive/.
- Six continuous 3x highlights in assets/highlights/.
- Archive hashes and highlight timestamps are provided in each folder's manifest.json.
- Current police and factory complete runs, factory excerpts, and metrics are in assets/scenes/. Both use the same frozen code; see assets/scenes/evidence.json for configuration, provenance, and limits.
- Three short D-VLC source excerpts are in assets/dvlc/: furnished-home exploration, the shared door-assistance view, and a separate Unity close-up of the door. Their sources and cut boundaries are recorded in assets/dvlc/provenance.json. They are predecessor demonstrations outside the two current mission evaluations.

The original videos preserve their Chinese interface. Recognition examples come from the predictive-preparation full visual run; semantic-observation examples are explicitly identified. These older examples are archived experiments. The two-scene validation in assets/scenes/ uses the later successful police and factory runs. The predictive pickup switch triggered zero times in the 896.1-second full run; its speed cannot be attributed to that feature.

No robot experiments, Unity instances, or model calls were started to build this website.
No credentials, model weights, raw inference requests, or private local paths are included.

For a local preview, serve this directory with any static HTTP server. A server supporting HTTP byte-range requests is required for reliable video seeking.

Report revision:
- Formal terminology and full D-VLC citation on first introduction.
- Four-stage framework evolution with GPT-6 Astra engineering roles, validation, retained changes and reversions.
- Original D-VLC Figures 1, 2 and 4 cropped directly from the paper PDF, with attribution under CC BY 4.0; assets/paper/manifest.json records provenance.
- Six annotated local event stills and continuous 3x clips in assets/focus/, featuring top-down maps and robot cameras. Event log timestamps and crop coordinates are provided.
- Section 04 includes factory excerpts and the humanoid video and adds directly playable R0, R1, and R2 excerpts, each with a direct MP4 link. The original recordings remain available separately.
- In the default complete cooperation-window remaster, the robot symbols on the colored shared map are doubled from approximately 22 to 44 pixels. The overlay follows icon positions detected in archived frames; no robot motion or task state was changed. See assets/gpt6-camera-remaster.json and assets/map-icon-tracking.json.

Current presentation:
- Restrained technical-report layout with no images in the research background. Original D-VLC figures are in the source appendix.
- Section 02 places selectable D-VLC home and door footage before the GPT-assisted research-loop account, so the predecessor system and subsequent software evolution appear in order.
- Concrete R0-R3 code-and-evaluation iteration, including the extended completion criterion and rollback evidence; see assets/iteration-evidence.json.
- Factory and police complete runs are the main video examples in Section 05. Four historical outcomes remain in assets/evidence.json and the older films remain selectable.
- GPT-5.6 measurements and recordings remain under historical disclosures with their original model attribution.

Latest architecture revision:
- The framework diagram shows an execution loop feeding evidence into an RSI-inspired research loop, then a revised system producing the next run.
- The dedicated GPT-6 Astra historical-results section is removed from both language editions; source metrics remain in the evidence manifest.

Two-scene update (October 17, 2026):
- Factory clips are integrated into Section 04 highlights; the complete 5x factory and police films and their metrics use the existing Section 05 experiment selector. No separate cross-scene section remains.
- The police run completed in 887.847 seconds; factory in 769.523 seconds. Their tasks differ, so this is not a speed comparison.
- The latest runs used Qwen3.8 Flash Next for task reasoning and Qwen3.5-4B for action/exploration; GPT-6 Astra remains the research-loop coding agent. Older films retain their source model labels.

Mission-flow diagrams (October 18, 2026):
- The experiment-film selector places a compact expected task flow beside each complete police or factory film, with the full mission brief below. The two missions are peer examples of the same algorithm's applicability across different task structures.
- SVG graphs and Graphviz source files in assets/scenes/ are derived from the provided mission texts. They describe prerequisites and allowed parallel branches, not the measured sequence or timing of either run.
- Earlier films hide the new mission panels; the full task briefs remain expandable to keep the report concise.
