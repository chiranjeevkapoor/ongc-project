const jwt = require('jsonwebtoken')
const con = require('../db/connect')
const bcrypt = require('bcryptjs')


const adminsignin = async(req,res) => {
    const obj = req.body;
    const sql = `SELECT user_id, name, email, password, role FROM users.user_info WHERE email='${obj.email}'`;
    con.query(sql, function (err,result,fields){
        // console.log(result)
        //console.log(fields)
        if(err) {console.log(err)}
        if(result.length == 0)
        {
            console.log('phuk u')
            res.send('no user with the provided credentials exist')
        }
        
                // if(result[0].user_id == undefined){
                //     res.send('no user with the provided credentials exist')
                // }
        else{
        console.log(result[0].user_id)
        var genobject = {};
        genobject.user_id = `${result[0].user_id}`;
        genobject.name = result[0].name;
        genobject.email = result[0].email;
        genobject.password = result[0].password;
        genobject.role = result[0].role;
        console.log(result)
        console.log(genobject.password, obj.password)
        bcrypt.compare(obj.password, genobject.password,function(err,result){
            if(result == true){
                const user_id = genobject.user_id;
                const role = genobject.role;
                console.log('passwords matched')
                console.log(user_id, role)
                //generate jsonweb token
                const token = jwt.sign({user_id , role},process.env.JWT_SECRET,{expiresIn:"1d"})
                return res.json({token})
            } else {
                console.log('passwords didnt match')
            }
        })
    }
           
    })
    // const validate = await bcrypt.compare(obj.password, genobject.password)
    // if(!validate){
    //     res.send('logged in')
    // }
    // console.log(req.body)
    //console.log(helo)
    
}

module.exports = adminsignin;