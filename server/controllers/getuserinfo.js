const con = require('../db/connect');

const getuserinfo = (req,res) => {
    console.log('getuser info route was hit')
    //console.log(req.body);
    const obj = req.body;
    console.log(obj)
    const id = obj.id;
    try {
       const query = `SELECT user_id, name, email, region, city, role, is_softdeleted FROM users.user_info WHERE user_id = ${id};`
       con.query(query, function (err, result) {
       if(err)  {res.send(err)}
       else { 
        // console.log(result)
        const resobj = {};
        resobj.id = result[0].user_id;
        resobj.name = result[0].name;
        resobj.email = result[0].email;
        resobj.city = result[0].region;
        resobj.region = result[0].city;
        resobj.role = result[0].role;
        resobj.is_softdeleted = result[0].is_softdeleted;
        
        console.log(resobj) 
        res.send(resobj);
    }
       // console.log("inserted")
       
    })
    } catch(err){
       console.log(err);
    }
}

module.exports = getuserinfo;