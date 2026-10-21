# FACE_VAULT

The unified, functional Face Vault app—including its cinematic entrance and working file/folder protection—lives in `C:\Users\syedr\face-vault`. Run that app directly; this folder contains the standalone visual landing-page experiment only.

## Files

- `index.html` — Face Vault landing page and link to the local application.
- `styles.css` — color tokens, cinematic background, responsive layout, and motion.
- `logo.svg` — standalone horizontal lockup. It also defines reusable icon-only (`#vault-icon`) and monochrome (`#vault-icon-mono`) SVG symbols.
- `background.js` — canvas dust motes, pointer parallax, and visibility handling.

The animated page mark is inline SVG in `index.html`, so its shield, rings, and keyhole can animate independently. `logo.svg` is the convenient standalone brand asset. The SVG uses a 120 × 136 icon viewBox and scales cleanly for small and large use.

## Adjusting the look

Edit the custom properties at the top of `styles.css` to change the palette. The main controls are `--bg-0`, `--bg-1`, `--bg-2`, `--text`, `--text-dim`, `--accent`, and `--accent-glow`. The matching metallic logo stops and gold keyhole are in `logo.svg` and the inline SVG in `index.html`.

Change `--intro-duration`, `--idle-duration`, `--spotlight-duration`, or `--dial-duration` in `styles.css` to adjust the CSS motion timing. Individual intro beats and hover effects have their own delays and durations alongside their keyframes.

Set `PARTICLE_COUNT`, `PARTICLE_SPEED_MIN`, and `PARTICLE_SPEED_MAX` in the `CONFIG` object near the top of `background.js` to tune the dust layer. The particle count defaults to 76. Parallax travel and easing are controlled by `PARALLAX_PIXELS` and `PARALLAX_EASE` there.

## Motion and accessibility

The unlock control is keyboard operable, has a visible focus treatment, and announces the resulting state through a live region. The page mark has an accessible name and title. Users who enable reduced motion get a static background with the intro reduced to simple fades; canvas particles and pointer parallax are disabled. The canvas stops its animation frame loop when the tab is hidden and scales for high-density screens, capped at 2× for a light memory footprint.

## Run the unified app

Open PowerShell and run:

```powershell
cd C:\Users\syedr\face-vault
.\.venv\Scripts\python.exe -m streamlit run streamlit_app.py --server.port 8000
```

Then visit `http://localhost:8000`. The app supports face enrollment, in-place file/folder encryption, and face-verified unlock; run it on the same Windows PC as the files.

The static landing-page preview cannot itself scan a face or access arbitrary files. Those capabilities belong to the unified local Face Vault application. Face matching is performed locally with OpenCV SFace; the app can also use its configured Groq backup. The **Ask** feature sends your question and retrieved snippets to Groq when used. Review `C:\Users\syedr\face-vault\README.md` and its security limitations before protecting important files. Face Vault is a personal project and is not a substitute for a security-audited backup and encryption solution.

## Notes

The design uses a perspective line grid instead of a hexagonal lattice, keeping the depth cue quiet and legible behind the central mark. The page uses the system font stack so it remains fully offline.
