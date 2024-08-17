import multer from 'multer';
import path from 'path';

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('public/images')); // Use path.resolve to ensure the correct path
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

// Create the multer instance
const upload = multer({ storage: storage });

export default upload;
