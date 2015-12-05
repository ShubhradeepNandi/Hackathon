var https = require("https");
var config = require('../config');

var amadeusapi = exports

amadeusapi.getTopDestinations = function(callback) {
	callback = callback || function() {
	}
    opts = { 
	   host: config.app.apihost,	   
	   path: config.app.apipath + 'travel-intelligence/top-destinations?apikey=' + config.app.apikey + '&period=2015-10&origin=BLR&number_of_results=1',
	   method: 'GET',
	   rejectUnauthorized:false,
	   headers: {'Content-Type': 'application/json;charset=utf-8'}
    }	
	var req = https.request(opts, function (res) {
		var output = '';
		res.on('data', function(chunk) {
			output += chunk;		
		});
		res.on('end', function() {	
            //console.log('Request ended ' + output);		
			callback(JSON.parse(output), null);
		});
	});
	
	req.end();
	
	req.on('error', function(err){
		//console.log(err);
		console.log('Error from getAccounts ' + err);
		callback(null, err);
	});	
}


amadeusapi.getHotels = function(callback) {
	callback = callback || function() {
	}
    opts = { 
	   host: config.app.apihost,	   
	   path: config.app.apipath + 'hotels/search-airport?apikey=' + config.app.apikey + '&location=BLR&check_in=2016-01-14&check_out=2016-01-16&number_of_results=1',
	   method: 'GET',
	   rejectUnauthorized:false,
	   headers: {'Content-Type': 'application/json;charset=utf-8'}
    }	
	var req = https.request(opts, function (res) {
		var output = '';
		res.on('data', function(chunk) {
			output += chunk;		
		});
		res.on('end', function() {	
            //console.log('Request ended ' + output);		
			callback(JSON.parse(output), null);
		});
	});
	
	req.end();
	
	req.on('error', function(err){
		//console.log(err);
		console.log('Error from getAccounts ' + err);
		callback(null, err);
	});	
}
