

const adminsignin = (req,res) => {
    console.log(req.body)
    const obj = req.body;
    res.send(obj)
}

module.exports = adminsignin;