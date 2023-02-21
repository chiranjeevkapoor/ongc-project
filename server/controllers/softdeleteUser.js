const con = require('../db/connect')



const softdeleteUser = (req,res) =>{
   console.log('soft delete route was hit')
   //console.log(req.body);
   const obj = req.body;
   console.log(obj)
   const id = req.body.id;
   console.log(id);

//    res.send(id)
   try {
    const query = `UPDATE users.user_info SET is_softdeleted = '1' WHERE user_id = ${id};`
      con.query(query, function (err, result) {
      if(err)  {
        console.log(err)
        res.send(err)
    }
      else { 
        console.log(result);
        res.send('user softdeleted');}
      // console.log("inserted")
      
   })
   } catch(err){
      console.log(err);
   }
}

module.exports = softdeleteUser;