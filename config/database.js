const Mongoose = require('mongoose');

exports.connect = async () => {
    await Mongoose.connect("mongodb://localhost:27017");
}