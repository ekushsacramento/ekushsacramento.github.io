# Ekush Sacramento website

Live at **https://ekushsacramento.github.io**

A simple, fast, one-page website built with plain HTML, CSS and JavaScript. No build tools, no frameworks. Edit a file, commit, and the site updates.

---

## 📁 Folder structure

```
ekushsacramento.github.io/
├── index.html              ← all page content lives here
├── README.md               ← this file
├── .nojekyll               ← tells GitHub to serve files as-is
└── assets/
    ├── css/style.css       ← colors, fonts, layout
    ├── js/main.js          ← mobile menu, footer year, scroll animation
    └── img/
        ├── favicon.svg     ← browser tab icon
        └── gallery/        ← put your event photos here
```

---

## 🚀 Step 1: Upload the files to GitHub

### Option A: In your browser (easiest)
1. Go to https://github.com/ekushsacramento/ekushsacramento.github.io
2. Click **Add file → Upload files**.
3. Unzip the template on your computer, open the folder, then **drag everything inside it** (the `assets` folder, `index.html`, `README.md`, `.nojekyll`) onto the GitHub page.
   - `.nojekyll` is a hidden file. On Mac press `Cmd + Shift + .` in Finder to show it; on Windows turn on *View → Hidden items*. (If it doesn't upload, the site still works.)
4. Scroll down and click **Commit changes**.

### Option B: With Git on your computer
```bash
git clone https://github.com/ekushsacramento/ekushsacramento.github.io.git
cd ekushsacramento.github.io
# copy the template files into this folder, then:
git add .
git commit -m "Add website template"
git push
```

## 🌐 Step 2: Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. Wait 1–3 minutes, then visit **https://ekushsacramento.github.io**.
   - Check progress under the repo's **Actions** tab. A green check means it's live.
   - If you still see an old version, hard-refresh (`Ctrl + F5` / `Cmd + Shift + R`).

> The repo must be **Public** for free GitHub Pages (Settings → General → Danger Zone → Change visibility).

---

## ✏️ Step 3: Customize the content

Everything you'd normally change is in `index.html`. Edit it right on GitHub by clicking the file, then the ✏️ pencil icon, then **Commit changes**.

| What to change | Where |
|---|---|
| Page title and Google description | `<title>` and `<meta name="description">` near the top |
| Hero heading and tagline | `<!-- HERO -->` section |
| Your story / mission | `<!-- ABOUT -->` section |
| Numbers (founded, families…) | `<ul class="stats">` |
| Email, Facebook link | `<!-- CONTACT -->` section |
| Colors | `:root { ... }` at the top of `assets/css/style.css` |

### Add or edit an event
Copy one whole `<article class="card"> … </article>` block in the Events section, paste it below, and change the date, title and text:
```html
<article class="card">
  <div class="card-date"><span>05</span>OCT</div>
  <div class="card-body">
    <h3>Durga Puja Gathering</h3>
    <p class="card-meta">Sunday, Oct 5 · 4:00 PM · Community Center</p>
    <p>Short description of the event.</p>
  </div>
</article>
```
Delete past events by removing their block.

### Add photos to the gallery
1. Shrink photos first (about 1200px wide, under 300 KB) with a free tool like https://squoosh.app.
2. Upload them into `assets/img/gallery/` (open that folder on GitHub → **Add file → Upload files**).
3. In `index.html`, replace each `<div class="ph">Photo 1</div>` with:
   ```html
   <img src="assets/img/gallery/shaheed-dibosh-2026.jpg" alt="Wreath laying at Shaheed Dibosh 2026">
   ```
   File names are case-sensitive: `Photo.JPG` ≠ `photo.jpg`. Avoid spaces in file names.

### Social share image
Add a 1200×630 image named `og-image.jpg` to `assets/img/`. It's what shows up when someone shares the link on Facebook or WhatsApp.

### Make the contact form work
GitHub Pages only hosts static files, so the form needs a free helper:
1. Sign up at https://formspree.io and create a new form.
2. Copy your form ID (looks like `xyzabcd`).
3. In `index.html`, replace `YOUR_FORM_ID` in `action="https://formspree.io/f/YOUR_FORM_ID"`.

Messages will then arrive in your email. Prefer not to use a form? Delete the `<form>…</form>` block; the email link still works.

---

## 🧪 Preview on your computer (optional)
Double-click `index.html` to open it in a browser. For a closer match to the live site:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## 🔗 Custom domain (optional, later)
If you buy a domain like `ekushsacramento.org`:
1. **Settings → Pages → Custom domain**, enter it, save.
2. At your domain registrar, add the DNS records GitHub shows you.
3. Tick **Enforce HTTPS** once it becomes available.

## 🛠 Troubleshooting
- **404 page** → file must be named exactly `index.html` and sit at the top level of the repo, not inside a sub-folder.
- **Page shows with no styling** → the `assets` folder didn't upload, or the path/capitalization is off.
- **Changes not showing** → wait a couple of minutes, check the Actions tab, then hard-refresh.
