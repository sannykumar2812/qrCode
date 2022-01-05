'use strict'
const utilites = require("../../utilities");
const logger = utilites.logger;

const log = logger('sanitize');
const functionName = "sanitize-middleware";

let sanitize = (req, res, next) => {
  const payload = req.body;
  const sanitized_payload = {};
  log.info(functionName, "Incoming Headers", JSON.stringify(req.headers));
  log.info(functionName, "Req Body", JSON.stringify(payload));

  //Sanitize input payload - Example
  if (payload.source|| payload.source || payload.source_name || payload.sourcename ) {
    sanitized_payload.Source = (payload.Source || payload.source || payload.source_name || payload.sourcename).toString().trim();
  }
  if (payload.appname || payload.app_name || payload.app|| payload.App) {
    sanitized_payload.App = (payload.App || payload.app_name || payload.app|| payload.appname).toString().trim();
  }
  if (payload.link|| payload.Link) {
    sanitized_payload.link = (payload.link || payload.Link ).toString().trim();
  }
  if (payload.type|| payload.Type) {
    sanitized_payload.type = (payload.Type || payload.type ).toString().trim();
  }
  
  req.payload = sanitized_payload;

  next();
}


module.exports = sanitize;