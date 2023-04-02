# eltana.com 🥯

[![deploy](https://github.com/eltana-org/eltana.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/eltana-org/eltana.com/actions/workflows/deploy.yml) [![ci](https://github.com/eltana-org/eltana.com/actions/workflows/ci.yml/badge.svg)](https://github.com/eltana-org/eltana.com/actions/workflows/ci.yml) [![lint](https://github.com/eltana-org/eltana.com/actions/workflows/lint.yml/badge.svg)](https://github.com/eltana-org/eltana.com/actions/workflows/lint.yml) [![CodeQL](https://github.com/eltana-org/eltana.com/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/eltana-org/eltana.com/actions/workflows/codeql-analysis.yml)

The public source code for the [eltana.com](https://eltana.com) website

![homepage](docs/assets/homepage.png)

## About 💡

This repository contains the source code for [eltana.com](https://eltana.com). It is built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). The site is hosted on [GitHub Pages](https://pages.github.com) and deployed using [GitHub Actions](https://github.com/features/actions).

## Config Files

The core way this template is different from the original is that it heavily uses `.js` config files to configure data and content for its site.

Here are a few common config directories and what you will find there:

- [`src/config/site/*`](src/config/site) - Site configuration
  - [`config.js`](src/config/site/config.js) - Global site configuration
  - [`blog.js`](src/config/site/blog.js) - Blog configuration
- [`src/config/pages/home/*`](src/config/pages/home) - Home page configuration
  - [`featured-posts.js`](src/config/pages/home/featured-posts.js) - Featured blog posts on the home page
  - [`hero.js`](src/config/pages/home/hero.js) - Hero component configuration on the home page
  - [`content.js`](src/config/pages/home/content.js) - Main content component configuration on the home page
- [`src/config/components/*`](src/config/components) - Component configuration
  - [`announcement.js`](src/config/components/announcement.js) - Announcement component configuration on all pages
  - [`footer.js`](src/config/components/footer.js) - Footer component configuration on all pages
  - [`header.js`](src/config/components/header.js) - Header component configuration on all pages
  - [`logo.js`](src/config/components/logo.js) - Logo (text) component configuration on all pages

## Project structure

Inside AstroWind template, you'll see the following folders and files:

```text
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       └── base.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   └── Logo.astro
│   ├── config/
│   │   ├── components/
|   |   |   ├── announcement.js
|   |   |   ├── call-to-action.js
│   │   │   └── ...
│   │   ├── home/
|   |   |   ├── content.js
|   |   |   ├── faqs.js
│   │   │   └── ...
│   │   ├── site/
│   │   │   ├── blog.js
|   |   |   ├── config.js
│   │   │   └── ...
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ...
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── about.md
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.mjs
│   └── data.js
├── package.json
├── astro.config.mjs
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

## Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Installs dependencies                              |
| `npm run dev`         | Starts local dev server at `localhost:3000`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run format`      | Format codes with Prettier                         |
| `npm run lint:eslint` | Run Eslint                                         |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

## Development

Here are some basic commands to get you up and running to develop with this template:

1. Install `npm` dependencies

   ```bash
   npm i
   ```

2. Start the development server

   ```bash
   npm run dev
   ```

3. View your site at [`localhost:3000`](http://localhost:3000/)

> Live reload is enabled by default, so any changes you make will be reflected in the browser.

## Deployment

> Deployment docs for GitHub Pages

When you `push` changes to your repository, GitHub will automatically build and deploy your site.

### Branch Deploy

This template also comes bundled with the [branch-deploy](https://github.com/github/branch-deploy) Action. Please ensure you view the [`branch-deploy.yml`](.github/workflows/branch-deploy.yml) file and make any necessary changes if you wish to use it.

The `branch-deploy` Action will allow you to trigger branch deployments from pull requests by using comments such as `.deploy`.

## Making Changes

This section goes into details on how you can make changes to the template.

## Live Commit Examples

Actual examples in the form of commits to this repository:

- [Adding a new page](https://github.com/eltana-org/eltana.com/commit/6836c11a3140181a65f252e3709e398f67e632c4)

## Acknowledgements

This theme is based off the template by [onwidget](https://github.com/onwidget/astrowind)
