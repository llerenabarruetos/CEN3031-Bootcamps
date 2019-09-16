/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false); //due to deprecation warning for findOneAndUpdate() and findOneAndDelete()

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.findOne({ name: 'Library West'}, function(err, listing) {
	   console.log("Name: " + listing.name);
	   console.log("Code: " + listing.code);
       console.log("Coordinates: " + listing.coordinates);
       console.log("Address: " + listing.address + "\n");	
   });	
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndDelete({ code: 'CABL'}, function(err, listing) {
	   console.log("Name: " + listing.name);
	   console.log("Code: " + listing.code);
	   console.log("Coordinates: " + listing.coordinates);
       console.log("Address: " + listing.address + "\n");	 
   });
   
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   //you must make new: true in order to retrieve the updated document in the callback function 
   Listing.findOneAndUpdate({name: 'Phelps Laboratory' }, {address: '1953 Museum Rd, Gainesville, FL 32603'}, {new: true}, function(err, listing) {
	   console.log("Name: " + listing.name);
	   console.log("Code: " + listing.code);
       console.log("Coordinates: " + listing.coordinates);
       console.log("Address: " + listing.address + "\n");	
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find(function(err, listing) {
	   listing.forEach(function(element) {
	   console.log("Name :" + element.name);
	   console.log("Code: " + element.code);
	   console.log("Coordinates: " + element.coordinates);
	   console.log("Address: " + element.address + "\n");
	   });
   });
   
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings(); 