//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://llerenabarruetos:%50izza357@cen3031-bootcamp2plus-namdl.mongodb.net/Bootcamp2?retryWrites=true&w=majority'
	//place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'f7c736579ace45519b894e0393a1d5ffv' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};