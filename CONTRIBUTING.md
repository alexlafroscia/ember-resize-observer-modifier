# How To Contribute

## Installation

- `git clone <repository-url>`
- `cd ember-resize-observer-modifier`
- `yarn install`

## Linting

- `yarn lint:hbs`
- `yarn lint:js`
- `yarn lint:js --fix`

## Running tests

- `ember test` – Runs the test suite on the current Ember version
- `ember test --server` – Runs the test suite in "watch mode"
- `ember try:each` – Runs the test suite against multiple Ember versions

## Running the dummy application

- `ember serve`
- Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Commit Format

This project follows the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for formatting commit messages. This allows for the automatic generation of a `CHANGELOG` in each package and helps to publish semver-correct versions of each package automatically.

Some commit "types" to work with might include

- `feat`
- `fix`
- `chore`

You can find more information at the link above.

## Publishing a New Version

[`standard-version`](https://github.com/conventional-changelog/standard-version) is used to bump the package version number and update the `CHANGELOG` based on the commit history. To release a new version, first run

```
yarn release --dry-run
```

to verify that the proposed changes look correct. Assuming that they do, you can then run

```
yarn release
```

to correctly create the release commit. With that complete, upload to GitHub and `npm`. Make sure to update the GitHube Release notes with the new `CHANGELOG` entry, too!
