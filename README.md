# built-version

> Generates a JSON file with git SHA and latest module version

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

## Why

Getting accurate and complete build version information is crucial for
quick debugging. For NPM packages, this should include Git commit id and
module version. This module gets both and saves into a file.

During execution you can load the file using
[version-middleware](https://github.com/bahmutov/version-middleware) or
similar module and return the version information.

## Install and use

Best to use in combination with
[semantic-release](https://github.com/semantic-release/semantic-release).

```sh
npm i -D built-version
```

Then run this module right before `NPM publish` command to save a file.
Change the semantic release script command in `package.json` to

```json
{
  "scripts": {
    "built": "built-version --file build.json",
    "semantic-release": "semantic-release pre && npm run built && npm publish && semantic-release post"
  }
}
```

If deploying directly from the CI server, add the `build.json` to the
commit before pushing code. See the
[Deployed Commit](https://glebbahmutov.com/blog/deployed-commit/) blog post
on how to do this.

## Related

* [include-version](https://github.com/bahmutov/include-version)
* [ggit](https://github.com/bahmutov/ggit)
* [latest-version-or-tag](https://github.com/bahmutov/latest-version-or-tag)

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017


* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)


License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/built-version/issues) on Github

## MIT License

Copyright (c) 2017 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/built-version.svg?downloads=true
[npm-url]: https://npmjs.org/package/built-version
[ci-image]: https://travis-ci.org/bahmutov/built-version.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/built-version
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
