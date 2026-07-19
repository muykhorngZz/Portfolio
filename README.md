# Hang Muykhorng — Personal Website

A static site. No build step, no dependencies. Open `index.html` in a browser to view it.

## How to update it

**All content lives in [`js/data.js`](js/data.js).** You never need to touch the HTML, CSS, or `main.js`
to add a project, award, certification, or volunteering experience — just edit that one file.

### Add a photo

1. Drop the image into `assets/images/`
2. Add it to the relevant `photos: []` array:

```js
photos: [
  { src: "assets/images/nus-2026-stage.jpg", caption: "Receiving the award in Singapore" },
  { src: "assets/images/nus-2026-team.jpg",  caption: "With my team after the final pitch" }
]
```

Photos appear as a scrollable strip and open in a full-screen lightbox
(arrow keys and Esc work). Broken image paths silently remove themselves, so
a typo won't break the layout.

### Add a project

Find the right group in `projectGroups` (`startup`, `academic`, or `collab`)
and append an object to its `projects` array:

```js
{
  name: "Project name",
  role: "Optional — your role",
  type: "Category shown above the title",
  summary: "Two sentences, max.",
  tech: ["Python", "PyTorch"],
  featured: true,     // optional — makes the card double-width
  photos: []
}
```

### Add an award or certification

Append to the `items` array of the matching group in `awardGroups`
(`achievements`, `international`, `leadership`, `certifications`).

### Add volunteering

Append an object to the `volunteering` array.

## To do before publishing

- [ ] Add your portrait at `assets/images/portrait.jpg` (portrait orientation, ~800×1000px works well)
- [ ] Add your resume at `assets/resume/Hang-Muykhorng-Resume.pdf`
- [ ] Replace the `#` placeholder URLs in `DATA.links` (LinkedIn, Facebook, Instagram) and your real email
- [ ] Fill in `photos: []` arrays as you collect images

## Publishing

Any static host works. Easiest options:

- **GitHub Pages** — push the folder to a repo, then Settings → Pages → deploy from `main` / root
- **Netlify or Vercel** — drag the folder onto their dashboard

## Structure

```
index.html          page shell and section markup
css/styles.css      all styling (palette variables at the top)
js/data.js          ← your content
js/main.js          renders data.js into the page
assets/images/      photos
assets/resume/      resume PDF
```

The colour palette is defined as CSS variables in the `:root` block at the top of
`css/styles.css` — change `--rose`, `--berry`, and `--plum` to reshade the whole site.
