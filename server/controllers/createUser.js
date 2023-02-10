const con = require('../db/connect')


const createUser = (req,res) =>{
   console.log('this route was hit')
   //console.log(req.body);
   const obj = req.body;
   // console.log(obj)
   const query = 'INSERT INTO users.user_info (name, password, region, city) VALUES (?,?,?,?);'
   con.query(query, [obj.name, obj.password, obj.region, obj.city], function (err, result) {
      if(err) throw err;
      console.log("inserted")
   })
   res.send('user created');
}

module.exports = createUser;