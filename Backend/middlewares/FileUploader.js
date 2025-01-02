const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const sanitizeFilename = (filename) => {
    return filename.replace(/[^a-z0-9]/gi, '_').toLowerCase();
};

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        format: async (req, file) => {
            const mimeType = file.mimetype.split('/')[1]; // Extract file extension from MIME type
            return mimeType; // Use the original file format
        },
        
        
        public_id: (req, file) => sanitizeFilename(file.originalname.split('.')[0])+""
    },
});

const cloudinaryFileUploader = multer({ storage: storage });

module.exports = {
    cloudinaryFileUploader
}