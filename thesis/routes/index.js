var express = require('express');
var router = express.Router();

//Added these
var FB = require('fb');
var url = require('url');

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
	//console.log(userPass);
	/*
	FB.api('oauth/access_token', {
		client_id: '998701320140541',
		client_secret: '2e711148de356026d7c0e967462cf5e5',
		redirect_uri: 'http://localhost:3000/callback',
		code: 'code'
	}, function (res) {
		if(!res || res.error) {
			console.log(!res ? 'error occurred' : res.error);
			return;
		}

		var accessToken = res.access_token;
		var expires = res.expires ? res.expires : 0;
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
