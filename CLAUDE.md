# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Local development (requires Hugo v0.114.0+)
hugo server                    # Serve site at localhost:1313

# Or use npm scripts from themes/paper/ directory:
npm run dev                    # Tailwind watch + hugo server + browser open
npm run build                  # Production build with minification

# Build only
hugo --minify                  # Output goes to /public
```

## Architecture

This is a **Hugo static site** for Scene Police Records (German/UK hardcore-punk label, 1998–2003, revived 2024), deployed to Google Cloud Storage via GitHub Actions on push to `master`.

**Content** lives in `/content/` as Markdown with YAML frontmatter:
- `_index.md`, `about.md`, `contact.md`, `releases.md` — top-level pages
- `post/` — blog posts/announcements

**Theme** is `themes/paper/` (git submodule from `nanxiaobei/hugo-paper`), a Tailwind CSS-based Hugo theme. Do not modify files inside `themes/paper/` directly — override them instead.

**Custom overrides** sit in `/layouts/` and `/data/`:
- `layouts/list.html` — overrides the theme's home page list layout; adds the Scene Police logo
- `data/header.html` — custom header template

**Static assets** (logo, album art) are in `/static/images/`.

**Site config** is `hugo.toml` — sets base URL, language (en-us), navigation menu (Home, About, Releases, Contact), and theme.

**Deploy** is handled by `.github/workflows/hugo.yml`: builds with `hugo --minify`, syncs `/public` to `gs://scenepolice` via `gsutil`, and sets a 1-hour Cache-Control header.
