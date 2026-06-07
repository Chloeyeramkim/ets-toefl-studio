# TOEFL Studio Deployment

This is a static web app. The deploy target is:

```text
ets-toefl-studio/
```

## Current Local Setup

This folder is ready to push as a Git repository. The app entry point is:

```text
ets-toefl-studio/index.html
```

## GitHub Pages

1. Create a GitHub repository.
2. Push this project to the `main` branch:

```sh
git remote add origin https://github.com/YOUR_ID/YOUR_REPO.git
git push -u origin main
```

3. In GitHub, open `Settings > Pages`.
4. Set the source to `GitHub Actions`.
5. The included workflow `.github/workflows/pages.yml` will deploy the app.
6. The URL will usually look like:

```text
https://YOUR_ID.github.io/YOUR_REPO/
```

## Netlify

1. Create a new Netlify site from this folder/repository.
2. Netlify will read `netlify.toml`.
3. Publish directory is `ets-toefl-studio`.
4. No build command is required.

## Privacy Note

This app is currently personal-study oriented. Anything stored directly in `app.js`,
including class links or saved material passwords, can be visible to anyone who can
open the deployed website. Use a private deployment if you keep class-only data in
the app.

For the current app, the Reading document password is stored in browser-visible
JavaScript because this is intended for personal use. Do not publish it to a
public URL unless you are comfortable with that exposure.
