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

## Before you publish

Search the files for `TODO` — each one marks something only you can fill in.

- [x] GitHub username confirmed: `sugoluguri`
- [ ] Add `Surekha_Goluguri_Resume.pdf` to the repo root, or change the Résumé link
- [ ] Fill the Chewse, Johnson Controls, and India role bullets
- [ ] Fill the four case studies under Selected Work — this is the whole point of the site
- [ ] Add your B.S. graduation year
- [ ] Add the cloud platform you've actually used to the Skills section
- [ ] Decide whether to uncomment the AI / agent section (see the comment block in `index.html`)

## Editing

Colors, fonts, and the reading-column width are all tokens at the top of `style.css`
under `:root`. Dark mode overrides sit directly below. Change a value once and it
propagates everywhere.

To add a case study, copy any `<details class="case">` block in `index.html` and edit it.

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
