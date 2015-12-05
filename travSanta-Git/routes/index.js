var api = require('../api/api');

var HashMap = require('hashmap');
var map = new HashMap();
map.set("DEL", "Delhi");
map.set("BOM", "Bombay");
map.set("PNQ", "Pune");

	getTopDestinations = exports.getTopDestinations = function (request, response) {
	  	//var accountId = request.param('accountId');
		console.log("Request recieved in routes");
		//console.log('accountId ' + accountId);
		response.header('Content-Type', 'application/json');
	    api.getTopDestinations(function(data, err) {
		   if (err) {
		     console.log('Error from getTopDestinations ' + err);
			 response.status(500).send('Error getting reporting data');
		   }
		   else {
		   	console.log("recieved data"+JSON.stringify(data));
		   	  var length = data.results.length, i = 0;

		   	  while(i < length){
		      temp =  data.results[i].destination; 
              data.results[i].destination = map.get(temp);
		   	  i++;
		   	  }
		      response.send(JSON.stringify(data));
		   }
		});
	};


	getHotels = exports.getHotels = function (request, response) {
	  	//var accountId = request.param('accountId');
		console.log("Request recieved in routes");
		//console.log('accountId ' + accountId);
		response.header('Content-Type', 'application/json');
	    api.getHotels(function(data, err) {
		   if (err) {
		     console.log('Error from getTopDestinations ' + err);
			 response.status(500).send('Error getting reporting data');
		   }
		   else {
		   	console.log("recieved data"+JSON.stringify(data));
		   	  var length = data.results.length, i = 0;  
		      response.send(JSON.stringify(data));
		   }
		});
	};