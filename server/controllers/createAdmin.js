const con = require('../db/connect')



const createAdmin = (req,res) =>{
   console.log('this route was hit')
   //console.log(req.body);
   const obj = req.body;
   console.log(obj)
   const query = 'INSERT INTO users.user_info (name, email, password, region, city, role) VALUES (?,?,?,?,?,?);'
   con.query(query, [obj.name, obj.email,obj.password, null, null,obj.role], function (err, result) {
      if(err) throw err;
      console.log("inserted")
   })
   res.send('admin created');
}

module.exports = createAdmin;

