# Reshoot-Anything — Paper Website

CVPR 2026 paper website for **"Reshoot-Anything: A Self-Supervised Model for In-the-Wild Video Reshooting"**.

## Hosting on GitHub Pages

1. Create a new **public** repository on GitHub (e.g. `reshoot-anything`).
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git remote add origin https://github.com/<your-username>/reshoot-anything.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repository.
4. Under **Source**, select **Deploy from a branch** → branch `main`, folder `/ (root)`.
5. Click **Save**. Your site will be live at `https://<your-username>.github.io/reshoot-anything/` within a minute or two.

## File structure

```
index.html              ← main website
static/
  css/style.css         ← all styling
  js/main.js            ← autoplay + copy button
  images/               ← figures converted from PDF
cvpr26v2v/
  results/              ← side-by-side example videos
  ablations/            ← inference example videos
ReTake_V2V.pdf          ← paper PDF
.nojekyll               ← tells GitHub Pages not to run Jekyll
```

## Updating placeholders

- **arXiv link**: replace `href="#"` on the arXiv button in `index.html` once you have the arXiv ID.
- **HuggingFace link**: same for the HuggingFace button.
- **Demo video**: uncomment the `<video>` block in the Demo section and set the correct `src`.
- **Authors line**: edit the authors paragraph near the top of `index.html`.
