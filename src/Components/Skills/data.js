import React from "react";
import {
  HtmlLogo,
  CssLogo,
  JsLogo,
  ReactLogo,
  NextjsLogo,
  TailwindLogo,
  ReduxLogo,
  BootstrapLogo,
  WordpressLogo,
  ElementorLogo,
  GithubLogo
} from "./Logos";

export const skillsData = [
  {
    id: "html",
    name: "HTML5",
    category: "Structure",
    experience: "5+ Years",
    proficiency: 95,
    summary: "Expert-level understanding of semantic markup structures, accessibility compliance (WCAG & ARIA specifications), search engine optimization (SEO) techniques, and modern document trees. Skilled in crafting clean DOM architectures that serve as highly performant foundations for dynamic apps.",
    features: [
      "Semantic elements & DOM architecture",
      "WAI-ARIA & accessibility configurations",
      "Meta tags & SEO optimization",
      "Web storage (Local/Session) APIs"
    ],
    snippet: `// Semantic HTML layout structure
<header role="banner" className="site-header">
  <nav aria-label="Main Navigation">
    <ul className="flex-row">
      <li><a href="#main" className="skip-link">Skip</a></li>
    </ul>
  </nav>
</header>`,
    component: HtmlLogo,
    color: "#E34F26"
  },
  {
    id: "css",
    name: "CSS3",
    category: "Presentation",
    experience: "5+ Years",
    proficiency: 92,
    summary: "Comprehensive mastery of advanced stylesheet layouts including Flexbox, Grid, container queries, custom properties (CSS variables), and performance-focused hardware-accelerated animations. Adept at achieving pixel-perfect interactive responsive designs.",
    features: [
      "Flexible & responsive grid systems",
      "CSS custom property systems",
      "Keyframe animations & 3D transforms",
      "Cross-browser normalization styles"
    ],
    snippet: `/* Advanced Grid & Animation styling */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  will-change: transform, opacity;
}`,
    component: CssLogo,
    color: "#1572B6"
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Languages",
    experience: "4+ Years",
    proficiency: 94,
    summary: "In-depth understanding of ES6+ syntax patterns, asynchronous programming (promises/async-await), closure structures, functional scope, execution contexts, prototype chains, and performance profiling. Strong experience in structural logic optimization.",
    features: [
      "ES6+ syntaxes & module workflows",
      "Asynchronous event loops & fetch APIs",
      "State closures & high-order functions",
      "Optimized DOM manipulations & events"
    ],
    snippet: `// Asynchronous API query pattern
async function fetchAccountData(userID) {
  try {
    const response = await fetch(\`/api/v1/user/\${userID}\`);
    if (!response.ok) throw new Error("Fetch failed");
    return await response.json();
  } catch (err) {
    console.error("System Error:", err);
  }
}`,
    component: JsLogo,
    color: "#F7DF1E"
  },
  {
    id: "react",
    name: "React",
    category: "Frameworks",
    experience: "3+ Years",
    proficiency: 90,
    summary: "Proficient implementation of custom Hooks, state management algorithms, virtual DOM reconciliation, performance memoization wrappers (useMemo, useCallback), context structures, and concurrent mode characteristics. Focused on creating highly reusable single-screen modules.",
    features: [
      "Component lifecycle hooks & custom APIs",
      "State management & context brokers",
      "Memoization & rendering optimization",
      "Declarative UI component blueprints"
    ],
    snippet: `// Custom state tracking hook pattern
import React, { useState, useEffect } from "react";

function useDeviceWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}`,
    component: ReactLogo,
    color: "#61DAFB"
  },
  {
    id: "redux",
    name: "Redux",
    category: "State Management",
    experience: "2+ Years",
    proficiency: 85,
    summary: "Expert setup of global deterministic application states. Skilled in implementing modern Redux Toolkit (RTK) slices, configureStore structures, RTK Query interfaces for caching, and middleware logs to secure high scalability in massive data applications.",
    features: [
      "RTK state queries & slices",
      "Global dispatch actions & reducers",
      "Middleware pipelines & extraReducers",
      "Normalized storage structures"
    ],
    snippet: `// Redux Toolkit state slice example
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "dark" },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    }
  }
});`,
    component: ReduxLogo,
    color: "#764ABC"
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Meta Frameworks",
    experience: "2+ Years",
    proficiency: 88,
    summary: "In-depth deployment experience using next-generation server architectures. Specializing in App Router mechanisms, Server Components (RSC), Client Components, serverless dynamic routes, edge optimizations, and hybrid static site generation (SSG).",
    features: [
      "React Server Components architecture",
      "Dynamic routing & file layouts",
      "Incremental Static Regeneration (ISR)",
      "SEO headers & search metadata"
    ],
    snippet: `// Next.js server component API handler
export async function GET(request) {
  return Response.json({
    timestamp: Date.now(),
    status: "online",
    activeNode: "node_alpha"
  });
}`,
    component: NextjsLogo,
    color: "#ffffff"
  },
  {
    id: "tailwindcss",
    name: "TailwindCSS",
    category: "Styling Utilities",
    experience: "3+ Years",
    proficiency: 93,
    summary: "Expertise in designing custom styling frameworks. Skilled in customizing configurations, theme extensions, custom utility creation, responsive design modifiers (@xs down to @2xl), and dark mode class-level toggles for interactive elements.",
    features: [
      "Utility-first responsiveness frameworks",
      "Theme extensions & setup modifications",
      "Interactive transitions & transform styles",
      "Fluid typography & custom spacing variables"
    ],
    snippet: `<!-- Tailwind fluid spacing layout -->
<div className="flex flex-col gap-4 p-6 sm:p-8 bg-zinc-950/80 border border-zinc-800 rounded-lg hover:border-indigo-500/50 transition-all duration-300">
  <span className="text-xs text-indigo-400 font-mono">Status Live</span>
</div>`,
    component: TailwindLogo,
    color: "#38bdf8"
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "Styling Frameworks",
    experience: "4+ Years",
    proficiency: 89,
    summary: "Extensive background working within standard grids. Experience customization through Sass variable maps, complex column layouts, accordion collapse states, and rapid utility styling layouts for commercial dashboards.",
    features: [
      "Responsive 12-column grid containers",
      "Sass variables overriding procedures",
      "Compact pre-built component classes",
      "Interactive modals & utilities"
    ],
    snippet: `// Sass variable modification pattern
$primary: #6366f1;
$theme-colors: (
  "brand-accent": #14b8a6
);
@import "bootstrap/scss/bootstrap";`,
    component: BootstrapLogo,
    color: "#7952B3"
  },
  {
    id: "wordpress",
    name: "WordPress",
    category: "Content Management",
    experience: "4+ Years",
    proficiency: 84,
    summary: "Full grasp of CMS infrastructure, plugin integration routes, server deployment systems, performance adjustments, child themes, query executions, and custom dashboard modifications to deliver resilient publishing systems.",
    features: [
      "Custom post types & metadata structures",
      "Theme override systems & actions",
      "Performance optimization & server-side caches",
      "REST API hooks & headless integrations"
    ],
    snippet: `// Register custom post type pattern
add_action('init', 'register_custom_portfolio');
function register_custom_portfolio() {
    register_post_type('portfolio', [
        'public' => true,
        'label'  => 'Projects',
        'supports' => ['title', 'editor', 'thumbnail']
    ]);
}`,
    component: WordpressLogo,
    color: "#21759B"
  },
  {
    id: "elementor",
    name: "Elementor Pro",
    category: "Page Builders",
    experience: "3+ Years",
    proficiency: 86,
    summary: "Advanced layout designer inside visual editors. Experienced in developing custom widget blocks, responsive spacing adjustments, CSS animation classes integration, dynamic tags routing, and template structures.",
    features: [
      "Dynamic data field references",
      "Responsive layout breakpoint tuning",
      "Custom JS scripts embeds triggers",
      "Unified system global templates"
    ],
    snippet: `/* Advanced Elementor widget CSS rule */
selector .elementor-widget-container {
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
}`,
    component: ElementorLogo,
    color: "#92003B"
  },
  {
    id: "github",
    name: "GitHub & Git",
    category: "Version Control",
    experience: "5+ Years",
    proficiency: 91,
    summary: "Strong Git workflows implementation, merge conflict resolution architectures, semantic release routines, and GitHub actions CI/CD automation pipelines to secure safe production updates and team reviews.",
    features: [
      "Trunk-based development & branching workflow",
      "GitHub Actions automation routines",
      "Rebasing, cherry-picking, and resolving conflicts",
      "Secure peer reviews deployment cycles"
    ],
    snippet: `# GitHub Action push workflow blueprint
name: Production Deployment Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build and deploy
        run: npm run build`,
    component: GithubLogo,
    color: "#f0f0f0"
  }
];
