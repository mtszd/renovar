/
├── astro.config.mjs
├── package-lock.json
├── package.json
├── svelte.config.js
├── tsconfig.js
│
├── public/
│   ├── fonts/
│   │   └── ...
│   ├── icons/
│   │   └── ...
│   ├── img/
│   │   └── ...
│   ├── favicon.ico
│   └── ...
└── src/
    ├── components/
    │   ├── layout/
    │   │   ├── footer/
    │   │   │   └── Footer.astro
    │   │   └── Header/
    │   │       ├── BaseHead.astro
    │   │       ├── DropMenuLink.astro
    │   │       ├── Hamburger.svelte
    │   │       ├── Header.astro
    │   │       ├── HeaderLink.astro
    │   │       └── HeaderNav.astro
    │   ├── Pages/
    │   │   ├── index/
    │   │   │   └─ Hero.astro
    │   │   ├── blog/
    │   │   │   └─ FormattedDate.astro
    │   │   └── OtherPage/
    │   ├── Logo.astro
    │   └── Rrss.astro
    ├── content/
    │   ├── config.js
    │   └── blog/
    │       ├── post-1.mdx
    │       ├── post-2.mdx
    │       └── ...
    │   
    ├── layouts/
    │   ├── MainLayout.astro
    │   └── BlogLayout.astro
    ├── pages/
    │   ├── about.astro
    │   ├── index.astro
    │   ├── blog/
    │   │   ├── [...slug].astro
    │   │   └── index.astro
    │   └── rss.xml.js
    ├── consts.ts
    ├── env.d.ts
    ├── styles/
    │   ├── Global.css
    │   └── ...
    ├── consts.ts
    └── env.d.ts