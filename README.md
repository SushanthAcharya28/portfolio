# 3D Profile Website

React + VC:\Users\sumanth\Downloadste + TypeScript + MUI + React Three Fiber + Framer Motion.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build      # outputs dist/
npm run preview
```

## Customize
Edit `src/data/profile.ts` (name, bio, projects, experience, links). All content there is sample data.
Colors and typography live in `src/app/theme.ts`. Update `<title>` and meta tags in `index.html`.

## Deploy (Vercel)
Import the repo, framework preset "Vite", build `npm run build`, output `dist`. Any static host works the same way.

## Notes
- The 3D scene is lazy-loaded and has a static fallback when WebGL is unavailable or errors.
- `prefers-reduced-motion` stops idle rotation, distortion, pointer parallax and entrance animations.
- Mobile uses fewer particles, lower geometry detail and a lower pixel ratio.
