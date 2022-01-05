var express = require('express');
var router = express.Router();
const { sanitize, validate } = require('../../../middlewares');
const rules =require('../../../../rules');
const {qr} = require('../../../services');
const safePromise = require('../../../utilities/safe-promise');



router.post('/qrcode', sanitize,validate(rules.QRCODE),async function(req, res) {
  const [err,data] =   await safePromise(qr(req.payload))
 
  if(err){
    return res.status(500).json({
      "status":"fail",
      "message":"error occured while generating qrcode",
      "res":{
        err
      }
    })
  }
  res.json({
    "status":"success",
    "message":"QR CODE GENERATED",
    "res":{
      "qrcode_link":data
    }
  })
})
module.exports = router;