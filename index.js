const fs = require('fs');
const mime = require('mime-types')

class File2B64 {
    constructor(name, ext, mtype, array) {
      this.name = name;
      this.ext = ext;
      this.mtype = mtype;
      this.array = array;
    }
}

exports.convertFile2B64 = (filePath) => {

    const contents = fs.readFileSync(filePath, {encoding: 'base64'});
    let size = filePath.length;
    let positionExt = filePath.lastIndexOf(".");
    let nameFileTemp = filePath.substr(0, positionExt);
    let positionNameFileWithoutExt = nameFileTemp.lastIndexOf("/") + 1;
    let namefile = nameFileTemp.substr(positionNameFileWithoutExt, positionExt);
    let extension = filePath.substr(positionExt+1, size);
    let mimetype = mime.lookup(extension);
    return new File2B64(namefile, extension, mimetype, contents);

}


class B642File {
    constructor(name, ext, mtype, array) {
      this.name = name;
      this.ext = ext;
      this.mtype = mtype;
      this.array = array;
    }
}

class B642FileResponse {
    constructor(contentDisposition, attachment, type, body) {
      this.contentDisposition = contentDisposition;
      this.attachment = attachment;
      this.type = type;
      this.body = body;
    }
}

exports.convertB642File = (namefile, extension, mimetype, array) => {
    const myBuffer = Buffer.from(array, 'base64');
    let model = new B642File(namefile, extension, mimetype, myBuffer);
    return new B642FileResponse('Content-Disposition', 'attachment; filename=' + model.name + "." + model.ext, model.mtype, model.array);
}