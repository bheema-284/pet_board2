const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect(`mongodb+srv://PETBOARDINGSITE:PETBOARDINGSITE@cluster0.pytlk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
}

module.exports = connect