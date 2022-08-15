
const { fail} = require('./sendStatus')
const userData = require('../data/userData');

module.exports = {
    getUserData: async (req,res,next) =>{ 
        try{
            let result = await userData.find(req.name)
            console.log(result)
            res.body = result
        }catch(e){
            fail (e,req,res,next)
            return
        }
       next();
    }
}
