
const logs = require('../models/logs');

const getUsersLogs = async(req,res) =>{
    const data = await logs.find()
    //console.log(data)
    res.send(data)
}

module.exports = getUsersLogs;