require("dotenv").config();

let keys = require(".keys");

var spotify = require('spotify'); 
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    console.log(data);
});

var pick = function(caseData, functionData) {
    switch (caseData) {

    default:
      console.log("LIRI doesn't know that");
    }
  };

var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);

//woudl need to let liri app actually show something unsure of why it isnt
