const con = require('../db/connect')



const deleteUser = (req,res) =>{
   console.log('delete route was hit')
   //console.log(req.body);
   const obj = req.body;
   console.log(obj)
   const id = req.body.id;
   console.log(id);

//    res.send(id)
   try {
    const query = `DELETE FROM users.user_info WHERE user_id = ${id};`
      con.query(query, function (err, result) {
      if(err)  {
        console.log(err)
        res.send(err)
    }
      else { 
        console.log(result);
        res.send('user deleted');}
      // console.log("inserted")
      
   })
   } catch(err){
      console.log(err);
   }
}

module.exports = deleteUser;