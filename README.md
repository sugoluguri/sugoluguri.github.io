# Personal site

Static site. No build step, no dependencies — three files and a font link.

```
index.html
assets/css/style.css
assets/js/main.js
Surekha_Goluguri_Resume.pdf   <- add this yourself
```

## Deploying to GitHub Pages

**Repo name matters.** Name the repository `<your-username>.github.io` and it serves at
`https://<your-username>.github.io`. Any other name serves at
`https://<your-username>.github.io/<repo-name>/`, which is a worse URL to put on a résumé.

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/sugoluguri/sugoluguri.github.io.git
git push -u origin main
```

Then: repo → **Settings** → **Pages** → Source: *Deploy from a branch* → `main` / `/ (root)` → Save.

First deploy takes a couple of minutes. After that, every push to `main` republishes.

## Filling it in

Search `index.html` for `FILL` — each comment marks a slot waiting on you.

- [ ] Add `Surekha_Goluguri_Resume.pdf` to the repo root, or the Résumé button 404s
- [ ] Photo: `assets/img/portrait.jpg`, then uncomment the `<img>` in the hero and delete the `<span class="ph">`
- [ ] Rewrite the three About paragraphs in your own voice
- [ ] B.S. graduation year on the JNTU card
- [ ] Bullets for Chewse and Johnson Controls
- [ ] Optional: your earlier India role as a fourth `.role-row`
- [ ] Cloud platform in the Infrastructure skill column
- [ ] One scope line on each project

## Section order

Currently Education -> Skills -> Work Experience -> Projects, matching the nav.
To lead with Work Experience instead, move the `<section id="experience">` block
above `<section id="education">` and reorder the nav links to match. Swap the
`field-mist` / `field-paper` classes on the two so the bands still alternate.

## Editing

Colours and fonts are tokens at the top of `style.css` under `:root`:

| Token | Used for |
|---|---|
| `--sage` `#e4ecd8` | hero, Projects band |
| `--mist` `#eef3f4` | Education, Work Experience, footer |
| `--paper` `#ffffff` | About, Skills |
| `--deep` `#4e5a55` | buttons only |

Change one and every section using it follows.

To add a project, copy any `<article class="proj">` block in `index.html`.

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
