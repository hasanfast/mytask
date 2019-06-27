const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

		// this is schema for Education
		const education = new Schema({ id: Number,  institute : String, degree : String, completedon : String, }, 
           { collection : 'education' });

// export the new Schema so we could modify it using Node.js
const data= module.exports = mongoose.model("education", education);
