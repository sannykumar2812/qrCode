require('dotenv').config()

const config = {
  DATA_DIR : process.env.DATA_DIR,
  ASSETS_PATH : process.env.ASSETS_PATH,
  PORT: process.env.PORT,
  MOUNT_POINT : process.env.MOUNT_POINT,
  URL: process.env.URL,
  // AUTHENTICATION_ENDPOINT:process.env.AUTHENTICATION_ENDPOINT,
}

function checkIfAllEnvKeysPresent(config, scope="") {
  const configKeys = Object.keys(config);
  configKeys.forEach((key) => {
    if (!config[key]) {
      throw new Error(`"${scope} ${key}" is blank in .env or related configuration file`)
    }
    if(typeof config[key] === "object"){
      checkIfAllEnvKeysPresent({...config[key]}, key);
    }
  });
}

checkIfAllEnvKeysPresent(config);

module.exports = config;