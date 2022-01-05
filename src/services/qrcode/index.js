const QRCode = require('qrcode');
const data = require('../../../data');
const config = require('../../../config');
const moment = require('moment');
const ASSETS_PATH = config.ASSETS_PATH;
const DATA_DIR = config.DATA_DIR;
const URL = config.URL;



async function qr( payload ) {
  console.log(payload)
  const { link, type } = payload;
  // ${DATA_DIR}/${ASSETS_PATH}/${uniqueName}
  // C:\\Users\\sunny\\Desktop\\project\\qrcode\\qrcodeimages\\images.png
  const uniqueName = moment().format();
  const url =`${URL}/${uniqueName}.png`
  QRCode.toFile(`C:\\Users\\sunny\\Desktop\\project\\qrcode\\qrcodeimages\\images\\1.png`, link, {
    color: {
      dark: data[type] || data['default'],  
      light: '#ffff' // Transparent background
    }
  }, function (err) {
    if (err) {
      return Promise.reject(err)
    } 
    
    return Promise.resolve(url);
    
  })

}
module.exports = qr;