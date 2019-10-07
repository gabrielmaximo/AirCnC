const multer = require('multer');
const { resolve, extname } = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      cb(
        null,
        `${file.originalname}-${Date.now()}${extname(file.originalname)}`
      );
    },
  }),
};
