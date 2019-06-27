const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

	// this is schema for Experience 
		const experience = new Schema({ id: Number, position : String, description : String, companyname : String, startdate : String, enddate : String,}, 
           { collection : 'Experience' });

// export the new Schema so we could modify it using Node.js
const data= module.exports = mongoose.model("experience", experience);
