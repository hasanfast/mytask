const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

// this is schema for skills 
		const skills = new Schema({ skill : String, }, 
           { collection : 'skills' });

// export the new Schema so we could modify it using Node.js
const data= module.exports = mongoose.model("skills", skills);
