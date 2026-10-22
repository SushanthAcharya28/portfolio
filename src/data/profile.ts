// SAMPLE CONTENT — replace everything in this file with your own details.
// Social URLs and email are placeholders; swap in real ones before deploying.

export interface Profile {
  name: string; monogram: string; eyebrow: string; headline: string; intro: string;
  availability: string; email: string; bio: string[]; interests: string[]; skills: string[];
  socials: { label: string; href: string }[];
}
export interface Project {
  title: string; description: string; role: string; stack: string[]; year: string; category: string;
  hue: number; demo?: string; repo?: string;
}
export interface Experience {
  role: string; org: string; range: string; description: string; tags: string[];
}

export const profile: Profile = {
  name: 'Alex Rivera',
  monogram: 'AR',
  eyebrow: 'Designer · Developer · Creative Technologist',
  headline: 'Building digital experiences at the intersection of design and technology.',
  intro: 'I design and build interactive interfaces that feel considered, fast and a little bit unexpected.',
  availability: 'Available for opportunities',
  email: 'hello@example.com',
  bio: [
    'I am a frontend engineer with a design background, focused on interfaces where motion, 3D and typography carry the idea.',
    'I like small teams, clear constraints and shipping work that holds up on a mid-range phone.',
  ],
  interests: ['Interactive 3D', 'Design systems', 'Creative coding', 'Accessibility'],
  skills: ['TypeScript', 'React', 'Three.js', 'Material UI', 'Framer Motion', 'Node.js', 'Figma', 'WebGL / GLSL'],
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'X', href: 'https://x.com/' },
  ],
};

export const projects: Project[] = [
  { title: 'Orbit', description: 'A realtime analytics dashboard that renders traffic as a navigable 3D globe.', role: 'Lead frontend', stack: ['React', 'Three.js', 'D3'], year: '2025', category: 'Data visualisation', hue: 255, demo: 'https://example.com', repo: 'https://github.com/' },
  { title: 'Fieldnotes', description: 'A distraction-free writing app with offline sync and a typographic editor.', role: 'Design and development', stack: ['TypeScript', 'MUI', 'IndexedDB'], year: '2024', category: 'Product', hue: 200, demo: 'https://example.com' },
  { title: 'Kiln', description: 'A design-token pipeline that turns Figma variables into themed component libraries.', role: 'Engineer', stack: ['Node.js', 'Style Dictionary'], year: '2024', category: 'Tooling', hue: 160, repo: 'https://github.com/' },
  { title: 'Lumen', description: 'A WebGL product configurator for a lighting studio, tuned for mobile.', role: 'Creative technologist', stack: ['R3F', 'GLSL', 'Vite'], year: '2023', category: 'Commerce', hue: 30, demo: 'https://example.com' },
];

export const experience: Experience[] = [
  { role: 'Senior Frontend Engineer', org: 'Northwind Studio', range: '2023 – Present', description: 'Lead interactive work for brand and product sites; own the shared component library.', tags: ['React', 'Three.js', 'Design systems'] },
  { role: 'Frontend Engineer', org: 'Paperplane', range: '2020 – 2023', description: 'Built the customer dashboard and cut its main bundle by 40%.', tags: ['TypeScript', 'MUI', 'Performance'] },
  { role: 'B.Sc. Interaction Design', org: 'Sample University', range: '2016 – 2020', description: 'Thesis on spatial interfaces for the web.', tags: ['Prototyping', 'Research'] },
];
