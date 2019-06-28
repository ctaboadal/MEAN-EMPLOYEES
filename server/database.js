const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true
};

const URI = 'mongodb://localhost:27017/mean-crud';

mongoose.connect(URI, options)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;