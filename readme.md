# supports-color-cli [![Build Status](https://travis-ci.org/chalk/supports-color-cli.svg?branch=master)](https://travis-ci.org/chalk/supports-color-cli)

> Detect whether a terminal supports color


## Install

```
$ npm install --global supports-color-cli
```


## Usage

```
$ supports-color --help

  Usage
    $ supports-color [--<256|16m>]

  Options
    --256   Check for 256 color support
    --16m   Check for 16 million color support (True Color)

  Examples
    $ supports-color
    $ supports-color --256
    $ supports-color --16m

  Exits with code 0 if color is supported and 1 if not
```

You can force color by setting the environment variable `FORCE_COLOR` to any value.


## Related

- [supports-color](https://github.com/chalk/supports-color) - API for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
