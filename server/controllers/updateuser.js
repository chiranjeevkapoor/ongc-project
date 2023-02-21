const con = require('../db/connect')

const updateuser = (req,res) =>{
    console.log('update user rote was hit');
    const obj = req.body;
    console.log(req.body)
    // const sql = ``
    if(obj.name !== ''){
        const sql = `UPDATE users.user_info SET name = '${obj.name}' WHERE user_id = ${obj.id};`
        con.query(sql,function(err,result){
            if(err){
                console.log(err);
            }
            console.log(result)

        })
    }
    if(obj.password !== ''){
        const sql = `UPDATE users.user_info SET password = '${obj.password}' WHERE user_id = ${obj.id};`
        con.query(sql,function(err,result){
            if(err){
                console.log(err);
            }
            console.log(result)

        })
    }
    if(obj.region !== ''){
        const sql = `UPDATE users.user_info SET region = '${obj.region}' WHERE user_id = ${obj.id};`
        con.query(sql,function(err,result){
            if(err){
                console.log(err);
            }
            console.log(result)

        })
    }
    if(obj.city !== ''){
        const sql = `UPDATE users.user_info SET city = '${obj.city}' WHERE user_id = ${obj.id};`
        con.query(sql,function(err,result){
            if(err){
                console.log(err);
            }
            console.log(result)
        })
    }
    res.send('update user rote was hit');
}

module.exports = updateuser;