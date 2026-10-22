# 小栖 BabyLog — public product site

Public product, support and privacy pages for the local-first BabyLog app.

- Product: https://hvntonight.github.io/babylog-site/
- Support: https://hvntonight.github.io/babylog-site/support.html
- Privacy: https://hvntonight.github.io/babylog-site/privacy.html
- English: append `?lang=en` to any page.

Build with `node build.mjs`, then serve this folder with a static HTTP server.
GitHub Pages publishes the root of `main`. There are no packages to install,
remote scripts, analytics, forms, accounts or app-data uploads.

`legal/privacy.json` is the bilingual source used to generate the policy page.
Keep it identical to the app's bundled `assets/legal/privacy.json`.
The policy is statically rendered for review and also readable offline in the app.

Screenshots show the actual Flutter app with fictional example data. The hero is
decorative AI-generated artwork, not a screenshot or a claim about app features.
Only public demo imagery and public business contact details belong here.
App source, credentials, signing files and actual care records do not.

## Artwork and fonts

- `assets/hero.png`: generated with OpenAI ImageGen on 2026-10-22, using the
  app's cloud and bottle mascots as visual references. Brief: a warm cream studio,
  soft lilac shadows, smiling cloud and bottle in the right third, clear negative
  space on the left; no text, interface, watermark or extra features. Used as
  brand illustration only.
- App icon and fictional demo screenshots: BabyLog project artwork/UI.
- Nunito and rounded Chinese font are distributed unmodified with their license
  notices in `assets/fonts/`.

Copyright 2026 Qinglin Liu. Product artwork and site content are not licensed for
redistribution except for the font rights stated in the accompanying licenses.
