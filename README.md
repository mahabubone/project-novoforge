# project-novoforge

Public face of the Novoforge app: the landing page + docs website (GitHub
Pages) and the token-free release feed for the auto-updater.

## Site

Built with [Astro](https://astro.build), static output, zero client JS.

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # static site into dist/
pnpm preview    # preview the build
```

The site deploys automatically to GitHub Pages on every push to `main`
(workflow: `.github/workflows/pages.yml`).

## Releases

CI in the main (private) application repo builds Linux (AppImage/deb/rpm)
and Windows (NSIS) installers and uploads them to the releases here, along
with `latest*.yml` update feeds. Installers in the app point at this repo,
so users get updates without any credentials.

## Layout

```
src/pages/
  index.astro   landing page
  install.md    install guide
  license.md    license summary
```

## License

Novoforge is free for personal, non-commercial use by individuals only.
Commercial use, organizational use, modification, and redistribution are
prohibited without the author's permission. See the application repo's
`LICENSE` for the full terms.

© 2026 Mahabub · github.com/mahabubone