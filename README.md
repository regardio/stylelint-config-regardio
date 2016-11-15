# stylelint-config-regardio
[![NPM version](http://img.shields.io/npm/v/stylelint-config-regardio.svg)](https://www.npmjs.org/package/stylelint-config-regardio) [![Build Status](https://travis-ci.org/regardio/stylelint-config-regardio.svg?branch=master)](https://travis-ci.org/regardio/stylelint-config-regardio) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/adop4iufcxo5fxx6?svg=true)](https://ci.appveyor.com/project/bmatzner/stylelint-config-regardio)

> Regardio shareable config for stylelint.

Configuration rules to ensure your (S)CSS code is compliant with Regardio's styleguide.

This configuration extends [stylelint-config-suitcss](https://github.com/suitcss/stylelint-config-suitcss).

The styleguide adapts concepts from 
- [SUIT CSS's code style](https://github.com/suitcss/suit/blob/master/doc/STYLE.md)
- [CSSComb's property order configs](https://github.com/csscomb/csscomb.js/tree/dev/config)
- [Hugo Giraudel's Sass Guidelines](https://sass-guidelin.es/)

## Installation

```console
$ npm install stylelint-config-regardio --save-dev
```

## Usage

Create a `.stylelintrc` file in your project and set your config to:

```json
{
  "extends": "stylelint-config-regardio"
}
```

This configuration then can be consumed by [various tools](http://stylelint.io/#quick-start).  
We recommend using a [plugin for your build tool and editor](http://stylelint.io/user-guide/complementary-tools/#build-tool-plugins).

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:


```json
{
  "extends": "stylelint-config-regardio",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
