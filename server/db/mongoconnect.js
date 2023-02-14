const mongoose = require('mongoose')


const connectDB = () => {
    return mongoose.connect('mongodb+srv://chiranjeev:passwordispassword@cluster0.a9qtbjp.mongodb.net/LogData?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
      useUnifiedTopology: true,
    },()=>{
        console.log('connected to mongodb')
    });
  };
  
module.exports = connectDB;