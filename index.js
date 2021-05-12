//requiring mongoose
const mongoose = require('mongoose');
require('dotenv').config(); //environment variable
const {MONGO_URI} = process.env;

//connection function
// const connectDb = () => {
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false
//     })
//     .then(() => {
//         console.log('coonected to database');
//     })
//     .catch((err) => {
//         console.error(err.message);

//         //exiting
//         process.exit(1);
//     })
// }

//async mongoose connection
const connectDb = async() => {
try {
    await mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    console.log('connected to database');

} catch(err) {
console.error(err.message);

//exiting
process.exit(1);
}
}

//exporting the function
module.exports = connectDb;