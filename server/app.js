require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoconnect = require('./db/mongoconnect')
const con = require('./db/connect')
const getuserslogsRouter = require('./routes/getuserslogs')
const createUserRouter = require('./routes/createUser')
const adminsigninRouter = require('./routes/adminsignin')
const createAdminRouter = require('./routes/createadmin')
const deleteuserRouter = require('./routes/deleteuser')
const softdeleteuserRouter = require('./routes/softdeleteUser')
const updateuserRouter = require('./routes/updateuser')
//const authenticationmiddleware = require('./middleware/auth')
const adminAuthenticationmiddleware = require('./middleware/adminauth')
const getuserinfoRouter = require('./routes/getuserinfo')


app.use(express.json())
app.use(cors())

app.use('/createuser',adminAuthenticationmiddleware,createUserRouter);
app.use('/userslogs',adminAuthenticationmiddleware,getuserslogsRouter)
// app.use('/deleteuser',adminAuthenticationmiddleware,deleteuserRouter);
app.use('/deleteuser',deleteuserRouter);
app.use('/softdeleteuser',softdeleteuserRouter);
app.use('/adminsignin',adminsigninRouter)
app.use('/createadmin',createAdminRouter)
app.use('/getuserinfo',getuserinfoRouter)
app.use('/updateuser',updateuserRouter)

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