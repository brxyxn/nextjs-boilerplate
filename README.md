This is the bootstrap for a Next.js project with TypeScript, Tailwind CSS + shadcn/ui, ESLint, Prettier, and Vitest.

<!-- badges -->
<p align="center">
<span>Packages<br /></span>
<a href="https://react.dev/">
    <img src="https://img.shields.io/badge/v18.2-4C566A.svg?logo=react&labelColor=%2320232a" alt="React" />
</a>
<a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/v13.5-4C566A?logo=next.js&labelColor=%2320232a" alt="Next.js" />
</a>
<a href="https://axios-http.com/">
    <img src="https://img.shields.io/badge/v1.5-4C566A?logo=axios&labelColor=%2320232a" alt="Axios" />
</a>
<a href="https://nodejs.org/en">
    <img src="https://img.shields.io/badge/v18.18-4C566A?logo=node.js&labelColor=%2320232a" alt="NodeJS" />
</a>
<a href="https://pnpm.io/">
    <img src="https://img.shields.io/badge/v8.9-4C566A.svg?logo=pnpm&labelColor=%2320232a" alt="pnpm" />
</a>
<a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/v8.51-4C566A?logo=eslint&labelColor=%2320232a" alt="ESLint" />
</a>
<a href="https://prettier.io/">
    <img src="https://img.shields.io/badge/v3.0-2E3440?logo=prettier&labelColor=2E3440&color=4C566A" alt="Prettier" />
</a>
<a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/v3.3-4C566A.svg?logo=tailwind-css&labelColor=%2320232a" alt="TailwindCSS" />
</a>
</p>

<p align="center">
<span>Containerization<br /></span>
<a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/v24.0-4C566A.svg?logo=docker&labelColor=%2320232a" alt="Docker" />
</a>
<a href="https://www.alpinelinux.org/">
    <img src="https://img.shields.io/badge/v3.18-4C566A.svg?logo=alpine-linux&labelColor=%2320232a" alt="Alpine Linux" />
</a>
</p>

## Getting Started

### Local development

First, run the development server:

```bash
pnpm dev
```

Build the app:

```bash
pnpm build && pnpm start
```

### Docker

```sh
docker build -t my-app .
```

```sh
docker run --rm -d -p 3000:3000 --name my-app  my-app:latest
```

### Open the app

Open <http://localhost:3000> with your browser to see the result.
