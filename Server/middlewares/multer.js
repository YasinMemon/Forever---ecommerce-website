const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Use __dirname to get the current directory and path.join to go up one level
        const filepath = path.join(__dirname, '..', 'public', 'products');
        cb(null, filepath); // Provide the absolute path
    },

    filename: (req, file, cb) => {
        const tmpName = crypto.randomBytes(10).toString('hex');
        const ext = path.extname(file.originalname);
        const fileName = `${file.fieldname}-${tmpName}${ext}`;
        cb(null, fileName);
    }
});

const upload = multer({ storage });

module.exports = {
    upload
};
