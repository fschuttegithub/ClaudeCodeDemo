 CLAUDE.md — claude-demo

This file is the primary instruction set for Claude Code when operating on this repository.
Read this file in full before taking any action.

---

## Project Overview

This is a simple React demo application used to showcase AI-powered development workflows.
The core concept: a team member tags `@Claude` in Slack with a change request, and within
minutes the live site at GitHub Pages reflects that change.

The app is intentionally minimal — its purpose is to be visually obvious when something changes.

**Live URL:** `https://<your-github-username>.github.io/claude-demo`
**Repo:** `https://github.com/<your-github-username>/claude-demo`

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React (Vite) |
| Styling | Plain CSS (single file) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Triggered by | Slack bot (`mpociot/claude-code-slack-bot`) |

---

## Project Structure

```
claude-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions: build & deploy on push to main
├── public/
│   └── index.html
├── src/
│   ├── App.jsx                # ⭐ Main component — this is where most changes happen
│   ├── App.css                # ⭐ All styles live here
│   └── main.jsx               # Entry point — do not modify
├── CLAUDE.md                  # This file
├── package.json
└── vite.config.js
```

---

## The Two Files You'll Edit Most

### `src/App.jsx`
The main React component. It contains:
- A page title
- A subtitle / description text
- A primary call-to-action button
- A small status/info section

### `src/App.css`
All visual styling. Key CSS variables are defined at the top under `:root` for easy theming:

```css
:root {
  --primary-color: #6366f1;     /* Button and accent color */
  --background-color: #ffffff;  /* Page background */
  --text-color: #1f2937;        /* Main text */
  --font-size-base: 16px;       /* Base font size */
}
```

**To change the button color**, update `--primary-color`.
**To change the background**, update `--background-color`.

---

## How to Make Changes

### Simple text changes
Edit the relevant string directly in `src/App.jsx`. Example:

```jsx
// Before
Welcome to the Demo

// After
Hello from Claude!
```

### Color / style changes
Update the CSS variable in `src/App.css` under `:root`. Example:

```css
/* Before */
--primary-color: #6366f1;

/* After */
--primary-color: #f97316;  /* orange */
```

### Adding a new element
Add it inside the `<main>` tag in `src/App.jsx`. Keep it simple and visible.

---

## Workflow: How a Slack Request Becomes a Live Change

1. Team member types `@Claude <change request>` in Slack
2. The Slack bot receives the message and runs Claude Code against this repo
3. Claude Code reads `CLAUDE.md` first, then makes the requested change
4. Claude Code commits the change with a clear commit message
5. Claude Code pushes to the `main` branch
6. GitHub Actions triggers automatically, builds the app, deploys to GitHub Pages
7. The bot posts back to Slack: "Done! View it live: https://..."
8. The live site updates within ~60 seconds

---

## Commit Convention

Always use clear, descriptive commit messages in this format:

```
feat: change button color to orange (from Slack request)
fix: correct typo in page title
style: update background to dark theme
```

Prefix options:
- `feat:` — new element or visible feature
- `style:` — color, font, spacing change
- `fix:` — correcting something broken or wrong
- `content:` — text/copy change only

---

## After Making Changes

Always do the following after editing files:

```bash
git add .
git commit -m "your commit message here"
git push origin main
```

Do **not** run `npm run build` manually — GitHub Actions handles the build automatically on push.

Do **not** push to any branch other than `main` unless explicitly asked.

---

## GitHub Actions Pipeline

The deploy workflow lives at `.github/workflows/deploy.yml`.
It triggers on every push to `main` and does the following:

1. Checks out the repo
2. Installs Node.js dependencies (`npm ci`)
3. Runs `npm run build` (Vite builds to `./dist`)
4. Deploys `./dist` to the `gh-pages` branch via GitHub Pages

**Do not modify `deploy.yml`** unless explicitly asked.

---

## What NOT to Do

- Do not modify `src/main.jsx` or `vite.config.js` unless explicitly asked
- Do not install new npm packages unless explicitly asked
- Do not create new files unless explicitly asked
- Do not push to branches other than `main`
- Do not run the dev server (`npm run dev`) — just make changes and push
- Do not delete or rename existing files
- Do not make multiple unrelated changes in a single commit

---

## Responding in Slack

After successfully pushing changes, always end your response with:

```
✅ Done! Changes are live (or deploying now):
👉 https://<your-github-username>.github.io/claude-demo

Deployed: <short description of what changed>
ETA: ~60 seconds for GitHub Pages to update
```

If something goes wrong, explain clearly what failed and what the team should do.

---

## Example Slack Requests & How to Handle Them

| Slack message | What to change |
|---|---|
| "change the button to orange" | Update `--primary-color` in `App.css` |
| "make the background dark" | Update `--background-color` to `#0f172a`, `--text-color` to `#f8fafc` |
| "change the title to Hello World" | Edit the `<h1>` text in `App.jsx` |
| "make the font bigger" | Update `--font-size-base` in `App.css` |
| "add a footer that says Made by Frank" | Add a `<footer>` element in `App.jsx` |
| "remove the subtitle" | Delete or comment out the `<p>` subtitle in `App.jsx` |

---

## Local Development (optional)

If you need to preview changes locally before pushing:

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

---

## Repo & Environment Notes

- Node version: 18+
- Package manager: npm
- Build output: `./dist`
- GitHub Pages source: `gh-pages` branch (managed by GitHub Actions)
- All secrets (GitHub token) are handled by GitHub Actions automatically — no manual setup needed