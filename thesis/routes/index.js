var express = require('express');
var router = express.Router();

//Added these
var FB = require('fb');
var url = require('url');
var fs = require('fs');

//Set global access_token
FB.setAccessToken('CAACEdEose0cBACmRxwDdJVu56nDSOAJfVK3Ec8kJ0BjjdmaVYmZA0vUcU8FOyC7z1nxn9SWsZAdYwBsCujXj0TnGb6i8FG5GRAAfishSGZAII4SuADCtyudY3GaZCBREKFennqlZBXh4440LQJ8g04hzdV1EefdlS4oApK9ClOtqQMRqUtXgcLcFuRSvgTyoVD7eyFZBNhOGJ2vcbO1X2O');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
	
	
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.Email;
    var userPass = req.body.Password;

	
    // Set our collection
    //var collection = db.get('usercollection');
	console.log(userName);
	console.log(userPass);
	
	//Assume we have the access token
	//Only can pull 25 feed items apparently
	FB.api('/v2.3/me/home' , function (response) {
	
		if (response && !response.error) {
			//console.log(response);
			
			console.log(typeof response.data[0].message);
			
			var size = response.data.length;
			console.log("Size of data is", response.data.length);
			var i = 0;
				
			try {
				JSON.parse(response[0]);
			} catch (e) {
				console.log("not JSON");
			}
			
			//Need to append all fields
			while (i < size) {
				//var parsed = JSON.parse(response[i]);
				var data = i.toString() + " " + response.data[i].name;
				//if (data != "undefined") {
					//fs.writeFile('./log/log.JSON', data + "\r\n", function (err) {
					fs.appendFile('./log/log.txt', data + "\r\n", function (err) {
					if (err) {
						return console.log(err);
					}
					});
				//}
				//console.log(i);
				i++;
			}
		} else {
			//Print out error message
			console.log(response);
		}
	});
	/*
	FB.api('oauth/access_token', {
		client_id: '998701320140541',
		client_secret: '2e711148de356026d7c0e967462cf5e5',
		redirect_uri: 'http://localhost:3000/',
		code: 'code'
	}, function (res) {
		if(!res || res.error) {
			console.log(!res ? 'error occurred' : res.error);
			return;
		}

		var accessToken = res.access_token;
		//var expires = res.expires ? res.expires : 0;
	});*/
	
	//This way requires an access token
	// /me/home is feed
	/*
	FB.api('/v2.3/me/home', function (err, data) {
	
	if(err) {
		console.log(err);
		return;
	}
	
	});
	*/
	// If it worked, set the header so the address bar doesn't still say /adduser
	res.location("/");
	// And forward to success page
	res.redirect("/");
	 /*
    // Do something to facebook
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });*/
});
module.exports = router;
