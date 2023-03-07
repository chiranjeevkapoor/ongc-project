const con = require('../db/connect')
const {body, validationResult} = require('express-validator');



const createUser = (req,res) =>{
   console.log('this route was hit')
   //console.log(req.body);
   const obj = req.body;
   const errors = validationResult(req)
   console.log(errors)
   console.log(errors.errors[0].msg)
   const msg = errors.errors[0].msg
   if(msg === 'Invalid value'){
      return res.send('Invalid value, please use one @ and atleast one.')
       
   }


   // console.log(obj.email)
   
   // try {
   //    const query = 'INSERT INTO users.user_info (name, email, password, region, city) VALUES (?,?,?,?,?);'
   //    con.query(query, [obj.name, obj.email,obj.password, obj.region, obj.city], function (err, result) {
   //    if(err)  {res.send(err)}
   //    else { res.send('user created');}
   //    // console.log("inserted")
      
   // })
   // } catch(err){
   //    console.log(err);
   // }
}

module.exports = createUser;