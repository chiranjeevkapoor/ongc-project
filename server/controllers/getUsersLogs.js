
const logs = require('../models/logs');
const con = require('../db/connect')



const getUsersLogs = (req,res) => {
    const sql = `SELECT user_id,name,email,region,city,role FROM users.user_info WHERE role = 'basic';`
    con.query(sql,function (err,result){
        if(err) console.log(err);
        // const arr = [...result]
       // console.log(result[0]);
        
        const arr = result.map((el) => ({user_id: el.user_id, name: el.name}));

        console.log(arr)
        res.send(arr)
    } )
}


//getting user list from mongodb
// const getUsersLogs = async(req,res) =>{
//     const data = await logs.find()
//     //console.log(data)
//     res.send(data)
// }

module.exports = getUsersLogs;