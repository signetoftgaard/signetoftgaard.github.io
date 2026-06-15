# Portfolio — Signe Toftgaard Henriksen

A React + TypeScript portfolio with tab-based navigation, deployable to GitHub Pages.

## Quick start

```bash
cd portfolio
npm install
npm start
```

## Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. In `package.json`, set `"homepage"` to your actual URL:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
   ```
3. Run: `npm run deploy`

## Link to a specific tab

Add a hash to the URL:
- `yoursite.github.io#software` → Software & XR tab
- `yoursite.github.io#academic` → Academic tab  
- `yoursite.github.io#design` → Design / UI tab

When applying for jobs you can send:
- **XR/Software role**: link with `#software`
- **Research role**: link with `#academic`
- **Design role**: link with `#design`

## Adding a new project

Edit `src/data/projects.ts`. Each project has:

```ts
{
  id: 'my-project',          // unique slug
  title: 'My Project',
  subtitle: 'Short tagline',
  year: '2025',
  tags: ['Unity', 'VR'],
  tabs: ['software'],        // which tabs show this card: 'software' | 'academic' | 'design'
  description: '...',        // shown by default
  details: ['...', '...'],   // shown when expanded
  skills: ['Unity', '...'],  // shown when expanded
  media: [
    { type: 'image', src: '/images/screenshot.png', alt: 'Screenshot' },
    { type: 'youtube', src: 'https://youtu.be/XXXX' },
  ],
  accentColor: '#f4a261',    // card accent colour
}
```

## Adding images

Put images in `public/images/` and reference them as `/images/filename.png`.

## Adding a new tab

1. Add to the `Tab` type in `src/data/projects.ts`
2. Add to the `TABS` array in `src/App.tsx`
3. Add a description paragraph in the `tab-intro` section of `App.tsx`
