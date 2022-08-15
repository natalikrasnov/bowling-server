const iframeReturn = require('./iframeReturn')
const logsData = require('../data/logs');
const {formatDataToLogWithoutData} = require('../utils/formatData');


module.exports ={
    success:  (req,res) =>{ 
        logsData.insert(formatDataToLogWithoutData(req));
        res.status(200).send({status: "ok",message: "successfully", data: res.body});
    },
    fail: (err, req, res)=> {
        console.error(err)
        req.body.error = err.toString()
        logsData.insert(formatDataToLogWithoutData(req));
        res.status(500).send( {status: "error", message: err.message || err.Message})
    }
}

