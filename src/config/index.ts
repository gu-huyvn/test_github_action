const APP_ENVIRONMENT = globals.APP_ENVIRONMENT;
const API_DOMAIN =
  APP_ENVIRONMENT !== 'local' ? globals.API_DOMAIN : '/proxy-api';

export default { API_DOMAIN, APP_ENVIRONMENT };
