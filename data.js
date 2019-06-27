const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

		// this is schema for Basic Details
		const DataSchema = new Schema({ id: Number, name : String, phone : String, email : String, address: String, password: String, }, 
           { collection : 'Resume' });

// export the new Schema so we could modify it using Node.js
const data= module.exports = mongoose.model("data", DataSchema);
