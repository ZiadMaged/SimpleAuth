const Mongoose = require('mongoose');

const accountSchema = Mongoose.Schema({
    email: {
        unique: true,
        type: String
    },
    name: {
        type: String
    },
    password: {
        type: String
    }
},{
    collection: "accounts"
});

exports.Account = Mongoose.model('Account', accountSchema);