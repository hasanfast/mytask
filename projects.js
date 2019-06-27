const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

	// this is schema for Projects
	const projects = new Schema({ id: Number,  title : String, description : String, completedon : String, }, 
           { collection : 'projects' });

// export the new Schema so we could modify it using Node.js
const data= module.exports = mongoose.model("projects", projects);
