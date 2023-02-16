const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    const auth_header = req.headers.authorization;
    if(!auth_header) res.send(401, 'Unauthorized request')
    const token = auth_header.split(' ')[1]
    jwt.verify(token, process.env.JWT_SECRET, (err, result)=>{
        if(err) res.send(401,'unauthorized request')
        const {user_id, role} = result;
        req.user = {user_id, role};
        next();
    })
}

module.exports = auth