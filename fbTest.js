var FB = require('fb');
var fs = require('fs');

FB.setAccessToken('CAACEdEose0cBACZAbXHt7toKzjCRPbv5hZBwjmtwusfxd7R2MTsWlXY8i5CLtr9lCHfN6dqJvI8hsRBg6wVDfTtbkZCNnsGjMGgrrBmPqrtack4THMpyv8vMrfz7baJns0U8NwfmbHqVZAcoTKP4vuiLb4WIYE8MNi7nRtysipzwyoQwAlexaAfZA3XJrLdfifZAJCxuWClRXUYBzzB73ZA');

/*
FB.api('oauth/access_token', {
    client_id: '998701320140541',
    client_secret: '2e711148de356026d7c0e967462cf5e5',
    grant_type: 'client_credentials'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    var accessToken = res.access_token;
	FB.setAccessToken(res.access_token);
});*/

FB.api('/v2.3/me', function (err, data) {
	if(err) {
		console.log(err);
		return;
	}

	
	/*var parsed = JSON.parse(data);
	
	fs.writeFile('message.txt', data, function (err) {
		if (err) {
			console.log(err);
		}
		console.log('It\'s saved!');
	});*/
	
	//console.log(parse);
	console.log(data);
});


