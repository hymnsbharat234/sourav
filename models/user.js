const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const AVATAR_PATH = path.join('/uploads/user/avatars');
const newpath = path.join(__dirname, '..', AVATAR_PATH);
if (!fs.existsSync(newpath)) {
    fs.mkdirSync(newpath, { recursive: true });
}
const userSchema = mongoose.Schema({

    email: {
        type: String,


    },
    password: {
        type: String,

    },
    name: {
        type: String,

    },
    gender: {
        type: String
    },
    education: [{
        degree: {
            type: String
        },
        college: {
            type: String
        },
        yoc: {
            type: String
        }
    }],
    avatar: {
        type: String
    },
    fbid: {
        type: String
    },
    twitter: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    idproof: {
        type: String
    },
    contacts: {
        address: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        pincode: {
            type: Number
        },
        service: {
            type: String
        },
        country: {
            type: String
        },
    },




}, {
    timestamps: true
});
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '..', AVATAR_PATH));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

userSchema.statics.uploadedAvatar = multer({ storage: storage }).fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'souravphoto', maxCount: 10 }
]);
userSchema.statics.avatarPath = AVATAR_PATH;
const User = mongoose.model(
    'User', userSchema);

module.exports = User;