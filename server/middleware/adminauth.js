const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    console.log('admin auth running')
    const auth_header = req.headers.authorization;
    // console.log(auth_header)
    if(!auth_header) {res.status(401).send('Unauthorized request')}
    else {
        console.log('this is running')
    const token = auth_header.split(' ')[1]
    jwt.verify(token, process.env.JWT_SECRET, (err, result)=>{
        // if(err) res.send(401,'unauthorized request')
        if(err) {
            console.log(err);
        } else {
            console.log(result)
        const {user_id, role} = result;
        req.user = {user_id, role};
        console.log(req.user)
        if(req.user.role === 'admin'){
            console.log('next is called')
            next();
        } else {
            res.send('acces denied')
        }
    }        
    })
}
}

module.exports = auth