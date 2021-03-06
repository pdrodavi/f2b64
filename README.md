![logo-f2b64](https://raw.githubusercontent.com/pdrodavi/f2b64/main/FB64.svg)

[![NPM Version][npm-version-image]][npm-url]
[![Node.js Version][node-version-image]][node-version-url]

Javascript utility for converting files to base64 to save to database and convert back to save or download file.

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm i f2b64
```

## API

```js
const f2b64 = require("f2b64");
```

### f2b64.convertFile2B64(path)

It can convert any file to base64 to save to database. Keeping these fields in the collection or column.

```js
let result = f2b64.convertFile2B64(path);

let namefile = result.name;
let extension = result.ext;
let mimetype = result.mtype;
let array = result.array;
```

### f2b64.convertB642File(namefile, extension, mimetype, array);

Retrieve the file to burn to disk or send as a client download. Passing the parameters retrieved from the database.

```js
let b642file = f2b64.convertB642File(namefile, extension, mimetype, array);

res.setHeader(b642file.contentDisposition, b642file.attachment);
res.type(b642file.type);
res.send(b642file.body); // send download client
```

## License

[MIT](LICENSE)

[node-version-image]: https://badgen.net/npm/node/next
[node-version-url]: https://nodejs.org/en/download
[npm-url]: https://www.npmjs.com/package/f2b64
[npm-version-image]: https://badgen.net/npm/v/@babel/core
