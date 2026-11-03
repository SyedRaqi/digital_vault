<!-- FACE_VAULT | CINEMATIC VAULT DOOR README -->

<div align="center">

<img src="fv-hero.svg" width="100%" alt="FACE_VAULT animated banner: a face scan unlocks a golden vault door" />

<a href="https://github.com/SyedRaqi/digital_vault">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=900&color=F5C451&center=true&vCenter=true&width=760&lines=Your+face+is+the+key.;Secure+files+and+folders.;Face-verified+unlock.;Locked+until+it%27s+you." alt="Typing animation" />
</a>

<br/>

<a href="#twovaults"><img src="https://img.shields.io/badge/TWO%20VAULTS-F5C451?style=for-the-badge&logo=github&logoColor=black" alt="Two vaults"/></a>
&nbsp;
<a href="#unlock"><img src="https://img.shields.io/badge/UNLOCK%20SEQUENCE-0EA5E9?style=for-the-badge&logo=letsencrypt&logoColor=white" alt="Unlock sequence"/></a>
&nbsp;
<a href="#fineprint"><img src="https://img.shields.io/badge/FINE%20PRINT-DC2626?style=for-the-badge&logo=hackerone&logoColor=white" alt="Fine print"/></a>

<br/><br/>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"/>
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/>
<img src="https://img.shields.io/badge/SVG-FFB13B?style=flat-square&logo=svg&logoColor=black" alt="SVG"/>
<img src="https://img.shields.io/badge/STREAMLIT-FF4B4B?style=flat-square&logo=streamlit&logoColor=white" alt="Streamlit"/>
<img src="https://img.shields.io/badge/OPENCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white" alt="OpenCV"/>
<img src="https://img.shields.io/badge/LICENSE-UNLICENSE-lightgrey?style=flat-square" alt="Unlicense"/>

<br/><br/>

<img src="fv-stack.svg" width="100%" alt="HTML5, CSS3, JavaScript, SVG, Streamlit, OpenCV, Unlicense" />

</div>

<img src="fv-laser.svg" width="100%" alt="Laser tripwire divider with a golden keyhole" />

<a name="door"></a>
<img src="fv-h-door.svg" width="100%" alt="Clearance 00: The Vault Door" />

> **Read this before you knock.**
> The unified, functional Face Vault app, including its cinematic entrance and working file/folder protection, lives in `C:\Users\syedr\face-vault`. Run that app directly. **This folder contains the standalone visual landing-page experiment only.**

Face Vault is built around one idea: **your face is the key.** Enroll a face, encrypt files and folders in place, and unlock them only when your face is verified. What you're looking at here is the front door, the cinematic landing page that sets the mood and links to the local application.

<a name="twovaults"></a>
<img src="fv-h-two.svg" width="100%" alt="Clearance 01: Two Vaults, One Story" />

<div align="center">
<img src="fv-two-vaults.svg" width="100%" alt="Two vaults: this repository's landing page and the local Face Vault app" />
</div>

<br/>

| | 🏠 `digital_vault` (this repo) | 🔒 `face-vault` (the real app) |
|---|---|---|
| **What it is** | The standalone landing-page experiment | The unified, functional Face Vault app |
| **Where it lives** | This repository | `C:\Users\syedr\face-vault` |
| **Can it scan a face?** | No | Yes: face enrollment and face-verified unlock |
| **Can it touch your files?** | No | Yes: in-place file and folder encryption |

<a name="boxes"></a>
<img src="fv-h-boxes.svg" width="100%" alt="Clearance 02: Safety Deposit Boxes" />

<div align="center">
<img src="fv-boxes.svg" width="100%" alt="Four safety deposit boxes holding index.html, styles.css, logo.svg and background.js" />
</div>

<br/>

- **`index.html`**: Face Vault landing page and link to the local application.
- **`styles.css`**: color tokens, cinematic background, responsive layout, and motion.
- **`logo.svg`**: standalone horizontal lockup. It also defines reusable icon-only (`#vault-icon`) and monochrome (`#vault-icon-mono`) SVG symbols.
- **`background.js`**: canvas dust motes, pointer parallax, and visibility handling.

The animated page mark is inline SVG in `index.html`, so its shield, rings, and keyhole can animate independently. `logo.svg` is the convenient standalone brand asset. The SVG uses a 120 × 136 icon viewBox and scales cleanly for small and large use.

<a name="panel"></a>
<img src="fv-h-panel.svg" width="100%" alt="Clearance 03: The Control Panel" />

<div align="center">
<img src="fv-controls.svg" width="100%" alt="Control panel: palette tokens, motion timing dials and dust settings" />
</div>

<br/>

**Palette.** Edit the custom properties at the top of `styles.css` to change the palette. The main controls are `--bg-0`, `--bg-1`, `--bg-2`, `--text`, `--text-dim`, `--accent`, and `--accent-glow`. The matching metallic logo stops and gold keyhole are in `logo.svg` and the inline SVG in `index.html`.

**Timing.** Change `--intro-duration`, `--idle-duration`, `--spotlight-duration`, or `--dial-duration` in `styles.css` to adjust the CSS motion timing. Individual intro beats and hover effects have their own delays and durations alongside their keyframes.

**Dust.** Set `PARTICLE_COUNT`, `PARTICLE_SPEED_MIN`, and `PARTICLE_SPEED_MAX` in the `CONFIG` object near the top of `background.js` to tune the dust layer. The particle count defaults to 76. Parallax travel and easing are controlled by `PARALLAX_PIXELS` and `PARALLAX_EASE` there.

<div align="center">
<img src="fv-dust.svg" width="100%" alt="Dust motes in three depth layers shifting with a moving pointer" />
</div>

<a name="alarms"></a>
<img src="fv-h-alarms.svg" width="100%" alt="Clearance 04: The Silent Alarms" />

<div align="center">
<img src="fv-access.svg" width="100%" alt="Five accessibility and performance features" />
</div>

<br/>

The unlock control is keyboard operable, has a visible focus treatment, and announces the resulting state through a live region. The page mark has an accessible name and title. Users who enable reduced motion get a static background with the intro reduced to simple fades; canvas particles and pointer parallax are disabled. The canvas stops its animation frame loop when the tab is hidden and scales for high-density screens, capped at 2× for a light memory footprint.

<img src="fv-laser.svg" width="100%" alt="Laser tripwire divider with a golden keyhole" />

<a name="unlock"></a>
<img src="fv-h-unlock.svg" width="100%" alt="Clearance 05: The Unlock Sequence" />

<div align="center">
<img src="fv-unlock.svg" width="100%" alt="Storyboard: enroll a face, encrypt in place, face-verified unlock" />
</div>

<br/>

To run the unified app, open PowerShell and run:

```powershell
cd C:\Users\syedr\face-vault
.\.venv\Scripts\python.exe -m streamlit run streamlit_app.py --server.port 8000
```

Then visit `http://localhost:8000`. The app supports face enrollment, in-place file/folder encryption, and face-verified unlock. **Run it on the same Windows PC as the files.**

The static landing-page preview cannot itself scan a face or access arbitrary files. Those capabilities belong to the unified local Face Vault application.

<a name="data"></a>
<img src="fv-h-data.svg" width="100%" alt="Clearance 06: Where Your Data Goes" />

<div align="center">
<img src="fv-dataflow.svg" width="100%" alt="Where data goes: face matching stays local, the Ask feature sends a question and snippets to Groq" />
</div>

<br/>

Face matching is performed locally with OpenCV SFace; the app can also use its configured Groq backup. The **Ask** feature sends your question and retrieved snippets to Groq when used.

<a name="fineprint"></a>
<img src="fv-h-print.svg" width="100%" alt="Clearance 07: The Fine Print" />

<div align="center">
<img src="fv-plaque.svg" width="100%" alt="Fine print plaque: personal project, not a substitute for a security-audited solution" />
</div>

<br/>

Review `C:\Users\syedr\face-vault\README.md` and its security limitations before protecting important files. Face Vault is a personal project and is not a substitute for a security-audited backup and encryption solution.

<a name="notes"></a>
<img src="fv-h-notes.svg" width="100%" alt="Clearance 08: Design Notes" />

The design uses a perspective line grid instead of a hexagonal lattice, keeping the depth cue quiet and legible behind the central mark. The page uses the system font stack so it remains fully offline.

<a name="license"></a>
<img src="fv-h-license.svg" width="100%" alt="Clearance 09: License" />

Released under the [Unlicense](LICENSE).

<div align="center">

<img src="fv-door.svg" width="100%" alt="Vault door halves closing and locking" />

**FACE_VAULT** · Built by [Syed Raqi](https://github.com/SyedRaqi) · [⭐ Star the repo](https://github.com/SyedRaqi/digital_vault)

<sub>The landing page for Face Vault, a digital vault for securing and encrypting files and folders.</sub>

</div>
