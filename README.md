# Raviteja Gundu: Portfolio

Static personal site (plain HTML, CSS and JavaScript, no build step). Content comes from `../profile/master_profile.md`.

## Files

- `index.html`: all page content
- `styles.css`: layout and light/dark themes
- `script.js`: theme toggle, mobile menu, scroll effects
- `.nojekyll`: tells GitHub Pages to serve the files as-is

## Preview locally

```sh
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

This folder is a clone of https://github.com/ravitejagundu11/ravitejagundu11.github.io (branch `main`). Pushing to `main` publishes the site.

```sh
cd portfolio
git add .
git commit -m "Describe the change"
git push
```

In the repo's Settings > Pages, Source is "Deploy from a branch", branch `main`, folder `/ (root)`. The site is at https://ravitejagundu11.github.io.

Custom domain: none. There is deliberately no `CNAME` file. Add one only after the domain's DNS points at GitHub Pages, otherwise the site redirects to a domain that doesn't load.
