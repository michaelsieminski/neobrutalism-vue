# neobrutalism-vue

A vue-based registry of neobrutalism-styled Tailwind components.

## Installation

### 1. Add Global CSS

First, add the following CSS to your project's global CSS file (e.g., `src/assets/index.css`):

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(96.22% 0.0569 95.61);
  --secondary-background: oklch(100% 0 0);
  --foreground: oklch(0% 0 0);
  --main-foreground: oklch(0% 0 0);
  --main: oklch(84.08% 0.1725 84.2);
  --border: oklch(0% 0 0);
  --ring: oklch(0% 0 0);
  --overlay: oklch(0% 0 0 / 0.8);
  --shadow: 4px 4px 0px 0px var(--border);
  --chart-1: #ffbf00;
  --chart-2: #0099ff;
  --chart-3: #ff7a05;
  --chart-4: #00d696;
  --chart-5: #7a83ff;
  --chart-active-dot: #000;
}

.dark {
  --background: oklch(28.91% 0.0359 90.09);
  --secondary-background: oklch(23.93% 0 0);
  --foreground: oklch(92.49% 0 0);
  --main-foreground: oklch(0% 0 0);
  --main: oklch(77.7% 0.1593880864006951 84.38427202675717);
  --border: oklch(0% 0 0);
  --ring: oklch(100% 0 0);
  --shadow: 4px 4px 0px 0px var(--border);
  --chart-1: #e5ac00;
  --chart-2: #008ae5;
  --chart-3: #eb6d00;
  --chart-4: #00bd84;
  --chart-5: #7a83ff;
  --chart-active-dot: #fff;
}

@theme inline {
  --color-main: var(--main);
  --color-background: var(--background);
  --color-secondary-background: var(--secondary-background);
  --color-foreground: var(--foreground);
  --color-main-foreground: var(--main-foreground);
  --color-border: var(--border);
  --color-overlay: var(--overlay);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);

  --spacing-boxShadowX: 4px;
  --spacing-boxShadowY: 4px;
  --spacing-reverseBoxShadowX: -4px;
  --spacing-reverseBoxShadowY: -4px;
  --radius-base: 10px;
  --shadow-shadow: var(--shadow);
  --font-weight-base: 500;
  --font-weight-heading: 800;
}

@layer base {
  body {
    @apply text-foreground font-base bg-background;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-heading;
  }
}
```

### 2. Install Components

Components are available via the shadcn-vue CLI:

```bash
npx shadcn-vue@latest add https://neobrutalism-vue.vercel.app/r/accordion.json
```

Available components:

- `accordion` - A vertically stacked set of interactive headings
- `utils` - Utility functions

## Development

Build the registry:

```bash
bun install
bun registry:build
```

## Credits

This project is inspired by [neobrutalism.dev](https://neobrutalism.dev) and built with [shadcn](https://ui.shadcn.com) and [shadcn-vue](https://www.shadcn-vue.com).
