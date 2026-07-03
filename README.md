# GIVU Website

Marketing website for the GIVU iOS app.

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `givu-website`)
2. Upload all files in this folder to the repository root
3. Go to **Settings → Pages**
4. Set Source to **Deploy from a branch** → `main` → `/ (root)`
5. Click Save — your site will be live at `https://yourusername.github.io/givu-website/`

## Customise Before Publishing

Search for these placeholders and replace them:

- `[YOUR NAME / COMPANY NAME]` — your name or company
- `[YOUR EMAIL ADDRESS]` — your support/contact email
- `[YOUR COUNTRY / STATE]` — your jurisdiction for Terms of Service

## Add Real Screenshots

Replace the phone mockup placeholders in `index.html` with real app screenshots:
- Add screenshot images to the `assets/` folder
- Replace the `.phone-screen` divs with `<img>` tags

## File Structure

```
index.html       — Homepage
privacy.html     — Privacy Policy
terms.html       — Terms of Service
support.html     — Support & FAQ
style.css        — All styles (derived from iOS app design system)
script.js        — Scroll animations, FAQ accordion, mobile nav
assets/
  favicon.svg    — App icon favicon
robots.txt       — SEO
sitemap.xml      — SEO
```
