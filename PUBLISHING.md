# Publishing to npm

This document outlines the steps for maintainers to publish new versions of the package to npm.

## Prerequisites

- You must have an npm account
- You must be added as a maintainer to the package
- You must be logged in to npm locally (`pnpm login`)

## Publishing Process

1. **Update Version**

   ```bash
   # Choose one of:
   pnpm version patch  # For bug fixes (0.0.x)
   pnpm version minor  # For new features (0.x.0)
   pnpm version major  # For breaking changes (x.0.0)
   ```

2. **Build the Package**

   ```bash
   pnpm build
   ```

3. **Test the Build**

   ```bash
   pnpm test
   ```

4. **Review Package Contents**

   ```bash
   # Verify included files
   pnpm pack --dry-run
   ```

5. **Publish to npm**

   ```bash
   pnpm publish --access public
   ```

6. **Create Git Tag and Push (optional for now)**
   ```bash
   git push origin main --tags
   ```

## Pre-publish Checklist

- [ ] All tests are passing
- [ ] Package version is updated in `package.json`
- [ ] All changes are committed
- [ ] Build succeeds locally

## Handling Errors

If you encounter errors during publishing:

1. Check if you're logged in: `pnpm whoami`
2. Verify package name is available: `pnpm search <package-name>`
3. Ensure version number hasn't been used before
4. Check npm status: https://status.npmjs.org/

## Rolling Back a Release

If you need to unpublish a version (within 72 hours of publishing):

```bash
pnpm unpublish <package-name>@<version>
```

Note: Unpublishing should be avoided unless absolutely necessary.
