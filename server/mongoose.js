const mongoose = require('mongoose');

module.exports = db_name =>{
    mongoose.connect(`mongodb://localhost/${db_name}`, {})
        //connecting to mongodb
        .then(() => console.log(`successfully connected to ${db_name}`))
        .catch(err => console.log("somethnig went wrong", err));
}