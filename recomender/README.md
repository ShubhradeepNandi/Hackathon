# Watson Natural Language Classifier and Weather Recommendation Demo
The IBM Watson&trade; Natural Language Classifier service applies deep learning techniques to make predictions about the best predefined classes for short sentences or phrases. The classifications can trigger a corresponding action to direct a request to a Recommender Engine. 

Give it a try! Click the button below to fork into IBM DevOps Services and deploy your own copy of this application on Bluemix.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=)

## Getting started

1. You can see the live demo of this application [Weather Recomender](http://recomender.mybluemix.net/) 

1. You need a Bluemix account. If you don't have one, [sign up][sign_up]. Experimental Watson Services are free to use.

1. Download and install the [Cloud-foundry CLI][cloud_foundry] tool if you haven't already.

1. Edit the `manifest.yml` file and change `<application-name>` to something unique. The name you use determines the URL of your application. For example, `<application-name>.mybluemix.net`.

	```
	applications:
	- services:
	  - natural-language-classifier-service
	  name: <application-name>
	  command: node app.js
	  path: .
	  memory: 128M
	```

1. Connect to Bluemix with the command line tool.

	```sh
	$ cf api https://api.ng.bluemix.net
	$ cf login -u <your user ID>
	```

1. Create the Natural Language Classifier service in Bluemix.

	```sh
	$ cf create-service natural_language_classifier standard natural-language-classifier-service
	```

1. Push your app to make it live:

	```sh
	$ cf push
	```

1. [Create and train](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/nl-classifier/get_start.shtml#create) the NLC service using the weather training data. Take note of the `<classifier-id>`.

1. To configure the [app.js](app.js#L48) file to use your classifier, export the classifier ID as an environment variable.

	```sh
	$ cf set-env <application-name> CLASSIFIER_ID <classifier-id>
	```

1. Finally, restage the application to ensure the environment variable is set.

	```sh
	$ cf restage <application-name>
	```

	For more details about developing applications that use Watson Developer Cloud services in Bluemix, see [Getting started with Watson Developer Cloud and Bluemix][getting_started].

## Running locally
1. Download and install [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.com/).

1. Create an instance of the Natural Language Classifier service on Bluemix.

1. [Create and train](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/nl-classifier/get_start.shtml#create) the NLC service using, for example, the weather training data. Note the value of the `Classifier ID` in the response.

1. Configure the code to connect to your service:

	1. Copy the credentials from your `natural-language-classifier-service` service in Bluemix. Run the following command:

		```sh
		$ cf env <application-name>
		```

		Example output:

		```sh
		System-Provided:
		{
		  "VCAP_SERVICES": {
			"natural_language_classifier": [
			  {
				"credentials": {
				  "password": "<password>",
				  "url": "<url>",
				  "username": "<username>"
				}
				"label": "natural-language-classifier",
				"name": "natural-language-classifier-service",
				"plan": "standard",
				"tags": [
				  ...
				]
			  }
			]
		  }
		}
		```

	1. Copy `username`, `password`, and `url` from the credentials.
	1. Open the `app.js` file and paste the username, password, and url credentials for the service.
	1. In the `app.js` file paste the "Classifier ID". Save the `app.js` file.


1. Install the Natural Language Classifier Node.js package:
	1. Change to the new directory that contains the project.
	2. Run the following command:node

	```node
	$ npm install
	```

1. Run the following command to start the application:

	```node
	node app.js
	```

1. Point your browser to [http://localhost:3000](http://localhost:3000).

1. Train the classifier, if you haven't already. See the step earlier under Getting started.


## Troubleshooting

* The main source of troubleshooting and recovery information is the Bluemix log. To view the log, run the following command:

  ```sh
  $ cf logs <application-name> --recent
  ```

* For more details about the service, see the [documentation][nlc_docs] for the Natural Language Classifier.

## License

  This sample code is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).  
  This sample uses [jquery](https://jquery.com/) which is MIT license
## Contributing

  See [CONTRIBUTING](CONTRIBUTING.md).

## Open Source @ IBM - Contributed by Shubhradeep Nandi(shnandi1@in.ibm.com)


