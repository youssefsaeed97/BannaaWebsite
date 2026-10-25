# Bannaa website

The public marketing site for Bannaa. It is a static React app, separate from the product: the app never talks to it and no user data goes to it.

Live (temporary address): https://d5ts1a7bd9bbi.cloudfront.net

## Run it

```sh
npm install
npm run dev      # local dev server
npm run lint     # oxlint
npm run build    # type-check and build into dist/
npm run preview  # serve the built dist/
```

## How it's built

- React 19, TypeScript, Vite.
- Arabic RTL is the default, with an English LTR version behind the language button.
- All text is in `src/i18n/strings.ts`. Write the Arabic first; English mirrors it key for key. Components read it with `useLanguage()`.
- Styles use CSS logical properties only (`margin-inline`, `padding-block`, …), never `left` or `right`.

```
src/
  App.tsx            page layout
  components/        Header, Hero, Features, Footer
  i18n/              strings, language context and useLanguage()
  index.css          design tokens and styles (light and dark)
```

## Deploy

Every push to `main` that changes `website/` deploys automatically through `.github/workflows/deploy-website.yml`:

1. `npm ci`, `npm run lint`, `npm run build`
2. Sign in to AWS with GitHub OIDC (no stored AWS keys)
3. Upload `dist/` to S3: `assets/` with a one-year immutable cache, everything else with `no-cache`
4. Clear the CloudFront cache (`/*`)

It can also be started by hand from the Actions tab ("Deploy website", Run workflow).

## AWS resources

| Resource | Name / ID |
| --- | --- |
| Account, region | `161099087454`, us-east-1 |
| S3 bucket (private, encrypted) | `bannaa-website-161099087454` |
| CloudFront distribution | `E27SBJIMAEVHNW` (`d5ts1a7bd9bbi.cloudfront.net`) |
| Origin Access Control | `E1OLCCL0S9ELPT` |
| Deploy role (GitHub OIDC) | `arn:aws:iam::161099087454:role/bannaa-website-deploy` |

Only CloudFront can read the bucket. The deploy role can only write to this bucket and invalidate this distribution, and only from the `main` branch of `youssefsaeed97/Bannaa`.

## Not done yet

- A custom domain (needs an ACM certificate in us-east-1 and DNS pointing at CloudFront).
- Real copy. The current text is placeholder.
