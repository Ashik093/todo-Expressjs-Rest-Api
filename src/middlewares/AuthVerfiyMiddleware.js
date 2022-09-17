const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    jwt.verify(req.headers['token'], 'secrete23', function(error, data) {
        if (error) {
            res.status(401).json({ status: "Unauthorized", data: error })
        } else {
            req.headers.username = data['data']['UserName']
            next()
        }
    })
}