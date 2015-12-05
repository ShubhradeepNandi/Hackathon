/**
 * All our configurable data is kept or looked up  here 
 */

var config = {};


config.app = {};
//user details
config.app.user = 'Gabbar Singh';
// Update with bearer token from Citi API page
config.app.bearer = 'Replace with your Token';
config.app.apihost = 'api.sandbox.amadeus.com';
config.app.apipath = '/v1.2/';
// Update with your API key
config.app.apikey = '<your apikey>';

config.app.port = (process.env.VCAP_APP_PORT || 3000);
config.app.host = (process.env.VCAP_APP_HOST || 'localhost');

module.exports = config;