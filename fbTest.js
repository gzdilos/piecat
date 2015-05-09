var FB = require('fb');
var fs = require('fs');

FB.setAccessToken('CAACEdEose0cBAE0GtZC7BHlKNkn6MDnxZAQZArACAs5oVZCFIaeZAYUj9oYaWCgpSF4W6jgx17KUZATJc1GTWycPzAcubSjBJEBHxvELxIDTf9WNvTOzLvB75ZBZAbbOncAETZCbA21Fp6BDeXPoRZBs2pP05ZACOOKHKggJMtZBEd4FUpCFSSYpQ6KaATlOIYnSZASI461ZCmjq6SJK1eSmZCUgSNb');

FB.api('/v2.3/me/home', function (err, data) {
	if(err) {
		console.log(err);
		return;
	}

	var parsed = JSON.parse(data);
	
	fs.writeFile('message.txt', data, function (err) {
		if (err) {
			console.log(err);
		}
		console.log('It\'s saved!');
	});
	
	//console.log(parse);
	//console.log(data);
});


