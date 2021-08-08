## how to upgrade versions of all deps at latest in react

### yarn upgrade commands (In-Progress)

```
yarn upgrade --latest
```

The upgrade --latest command upgrades packages the same as the upgrade command, but ignores the version range specified in package.json. Instead, the version specified by the latest tag will be used (potentially upgrading the packages across major versions).

The package.json file will be updated to reflect the latest version range. By default, the existing range specifier in package.json will be reused if it is one of: ^, ~, <=, >, or an exact version. Otherwise, it will be changed to a caret (^). One of the flags --caret, --tilde or --exact can be used to explicitly specify a range.

yarn upgrade --pattern <pattern> will upgrade all packages that match the pattern.

Examples:
yarn upgrade --pattern gulp
yarn upgrade left-pad --pattern "gulp|grunt"
yarn upgrade --latest --pattern "gulp-(match|newer)"

```
yarn upgrade --scope
```

--scope @scope : When a scope is specified, only packages that begin with that scope will be upgraded. A scope must begin with ‘@’.
--latest : Ignores the version range specified in package.json. Instead, the version specified by the latest tag will be used (potentially upgrading the packages across major versions).
Examples:
yarn upgrade --scope @angular
yarn upgrade -S @angular

## npm (In-Progress)

(stackoverflow)[https://stackoverflow.com/questions/16073603/how-to-update-each-dependency-in-package-json-to-the-latest-version]
(npm package)[https://github.com/raineorshine/npm-check-updates]

```
npm i -g npm-check-updates
ncu -u
npm install
```

## Migrating from one version to another version

npm install --save --save-exact react-scripts@4.0.3
or
yarn add --exact react-scripts@4.0.3

## Upgrade react app using yarn

run command `yarn upgrade --latest`
This will upgrade below packages.
Note1: These are core packages/deps for react app project.

- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- react
- react-dom
- react-scripts

(stackoverflow)[https://stackoverflow.com/questions/62650640/yarn-how-do-i-update-each-dependency-in-package-json-to-the-latest-version]
(source)[https://github.com/tylerlong/yarn-upgrade-all]
npm install -g yarn-upgrade-all
yarn yarn-upgrade-all
