const mongoose = require("mongoose");

module.exports =(DB)=>{
	mongoose.connect(`mongodb://localhost/${DB}`) 
	.then(() => console.log(`connected to ${DB}`))
	.catch(err => console.log("Something went wrong when connecting to the database", err));
}