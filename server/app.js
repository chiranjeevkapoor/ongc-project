const express = require('express');
const app = express();
const cors = require('cors');
const mongoconnect = require('./db/mongoconnect')
const con = require('./db/connect')
const getuserslogsRouter = require('./routes/getuserslogs')
const createUserRouter = require('./controllers/createUser')

app.use(express.json())
app.use(cors())

app.use('/createuser',createUserRouter);
app.use('/userslogs/',getuserslogsRouter)

app.get('/',(req,res)=>{
    res.send('express is live')
})


// app.listen(8000, ()=>{
//     console.log('listening on port 8000')
// })


const start = async() => {
    try{
        // 
        await con.connect(function(err) {
            if (err) throw err;
            console.log("Connected to sql database!");
          })
          await mongoconnect()
          
          app.listen(8000, ()=>{
            console.log('listening on port 8000')
        })
    } catch(err){
        console.log(err)
    }
     
}

start()