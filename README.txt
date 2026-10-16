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

The original videos preserve their Chinese interface. Recognition examples come from the predictive-preparation full visual run; semantic-observation examples are explicitly identified. These are archived experiments, not new runs. The predictive pickup switch triggered zero times in the 896.1-second full run; its speed cannot be attributed to that feature.

No robot experiments, Unity instances, or model calls were started to build this website.
No credentials, model weights, raw inference requests, or private local paths are included.

For a local preview, serve this directory with any static HTTP server. A server supporting HTTP byte-range requests is required for reliable video seeking.

Report revision:
- Formal terminology and full D-VLC citation on first introduction.
- Four-stage framework evolution with GPT-6 Astra engineering roles, validation, retained changes and reversions.
- Original D-VLC Figures 1, 2 and 4 cropped directly from the paper PDF, with attribution under CC BY 4.0; assets/paper/manifest.json records provenance.
- Six annotated local event stills and continuous 3x clips in assets/focus/, featuring top-down maps and robot cameras. Event log timestamps and crop coordinates are provided.
- The event stills are the default highlight view. A control switches to local video; full recordings remain unchanged.

Current presentation:
- Restrained technical-report layout with no images in the research background. Original D-VLC figures are in the source appendix.
- Concrete R0-R3 code-and-evaluation iteration, including the extended completion criterion and rollback evidence; see assets/iteration-evidence.json.
- GPT-6 Astra is the main presentation. The four actual historical GPT-6 runs are reported together, including the incomplete run.
- GPT-5.6 measurements and recordings remain under historical disclosures with their original model attribution.
