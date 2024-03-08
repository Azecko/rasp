# rasp

> Gitlab pages: https://formatz.gitlab.io/rasp

## Requirements

-   [Node >= v.20.10.0](https://nodejs.org/en/) (NVM documentation in Notion if needed)

## Creating a new project

**Replace `rasp` with the name of your project. (kebab-case)**

```bash
git clone git@gitlab.com:formatz/rasp.git rasp
cd rasp


# setup git
git add .
git commit -m ":tada:"
git remote add origin git@gitlab.com:formatz/rasp.git
git push origin main
```

## Install dependencies

```bash
yarn install
```

## Development

```bash
# start development at http://localhost:3000
yarn dev
# check your formatting (prettier)
yarn format --check
# automatically format files (prettier)
yarn format --write
# check your js (eslint)
yarn lint
# check your css (stylelint)
yarn lintcss
# auto fix css if possible (stylelint)
yarn lintcss --fix
```

## Preview build

```bash
# build production files for local preview
yarn preview
```

## Build

```bash
# build production files
yarn build
```

### Documentation

Anything in the `public` folder will be copied to the `build` folder.

## Deployment

### Gitlab pages (branch test)

When pushing/merging into `test`, the pipeline will build the project and deploy it to gitlab pages. The url will be `https://formatz.gitlab.io/rasp`.

### Contao website (branch main)

When pushing/merging to `main`, this will automatically trigger a pipeline that should deploy the project to the contao assets.

**Requirements:**

1. Have a `main` branch ready, protected.
2. Have an empty contao website ready on infomaniak
3. Create an SSH key pair (see Notion "Auto deploy gitlab -> infomaniak")
4. Create a gitlab ssh user in infomaniak
5. Add the following variables in Gitlab Settings > CI/CD > Variables

-   $DEPLOY_SSH_PRIVATE_KEY
-   $DEPLOY_SSH_USER
-   $DEPLOY_SSH_HOST
-   $DEPLOY_SSH_PATH

### Symfony project

-   todo

### Dependencies updates

Use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to automatically update dependencies.

```bash
npm install -g npm-check-updates

ncu # check for updates
ncu -u # update the whole package.json
ncu swiper # update a specific package
yarn install # after updating, install new dependencies
```

## TODO

-   figure out why is photoswipe is creating file?
