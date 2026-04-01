# Scene Police Records

Website for Scene Police Records — German & UK hardcore/punk label, formed 1998, closed 2003, revived 2024.

Built with [Hugo](https://gohugo.io/) + [Paper theme](https://github.com/nanxiaobei/hugo-paper). Deploys to Google Cloud Storage via GitHub Actions on push to `master`.

## Local Development

Requires [Hugo](https://gohugo.io/installation/) v0.114.0+.

```bash
# Clone with submodules (required for theme)
git clone --recurse-submodules https://github.com/geekpunk/scenepolice2026.git

# Serve locally
hugo server
# → http://localhost:1313
```

## Content

All content lives in `content/` as Markdown with YAML frontmatter:

| Path | Description |
|------|-------------|
| `content/post/` | News posts — create a new `.md` file to add a post |
| `content/artists/` | Artist pages with bio, Bandcamp link, and release list |
| `content/about.md` | About page |
| `content/releases.md` | Full releases catalog |
| `content/contact.md` | Contact page |

### Adding a news post

Create `content/post/my-post-title.md`:

```yaml
---
title: "Post Title"
date: 2025-01-01
featured: false
---

Post body in Markdown.
```

### Adding an artist

Create `content/artists/band-name.md`:

```yaml
---
title: "Band Name"
bandcamp_url: "https://scenepolice.bandcamp.com/..."
releases:
  - catalog: "SCP ##"
    title: "Release Title"
    year: 2000
    bandcamp_url: "https://scenepolice.bandcamp.com/album/slug"
---

Bio in Markdown.
```

## CMS

A browser-based admin UI is available at `/admin/` (Decap CMS). It requires a GitHub OAuth proxy to be configured — see `static/admin/config.yml` for setup instructions.

## Deployment

Pushes to `master` automatically build and deploy to `gs://scenepolice` via GitHub Actions. Requires a `GCP_SA_KEY` secret set in the repository (Settings → Secrets → Actions).

## Images

Static assets live in `static/images/` and are referenced as `/images/filename.ext` in content files.
