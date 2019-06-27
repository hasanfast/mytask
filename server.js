
		//Adding required dependenicies

		const mongoose = require('mongoose');
		const express = require('express');
		var cors = require('cors');
		const bodyParser = require('body-parser');
		const logger = require('morgan');
		const Data = require('./data');
		const ExpData = require('./experience');
		const EduData = require('./education');
		const SkillData = require('./skills');
		const ProjectData = require('./projects');


		process.env.SECRET_KEY = 'secret'
		const jwt = require("jsonwebtoken")
		const bcrypt = require("bcrypt")

		//To validate user login
		var { check, validationResult } = require("express-validator/check");


		const API_PORT = 3001;
		const app = express();
		app.use(cors());
		const router = express.Router();

		// this is  MongoDB database Connection
		const dbRoute = 'mongodb+srv://hasan86:fast2211@cluster0-4etkq.mongodb.net/Resume?retryWrites=true&w=majority';

		// connects our back end code with the database
		mongoose.connect(dbRoute, { useNewUrlParser: true });

		let db = mongoose.connection;
		db.once('open', () => console.log('connected to the database'));

		// checks if connection with the database is successful
		db.on('error', console.error.bind(console, 'MongoDB connection error:'));


		// bodyParser, parses the request body to be a readable json format
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(bodyParser.json());
		app.use(logger('dev'));

		// this is our get method
		// this method fetches basic details from database
		router.get('/getData', (req, res) => {
			Data.find((err, data) => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true, data: data });
			});
		});

		// this method fetches experience from database
		router.get('/experience', (req, res) => {
			ExpData.find((err, data) => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true, data: data });
			});
		});

		// this method fetches skills from database
		router.get('/skills', (req, res) => {
			SkillData.find((err, data) => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true, data: data });
			});
		});

		// this method fetches education from database
		router.get('/education', (req, res) => {
			EduData.find((err, data) => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true, data: data });
			});
		});

		// this method fetches projects from database
		router.get('/projects', (req, res) => {
			ProjectData.find((err, data) => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true, data: data });
			});
		});

		// these method updates the data in our database
		router.post('/updateData', (req, res) => {
			const { id, update } = req.body;
			Data.findByIdAndUpdate(id, update, (err) => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
			});
		});

		//updatephone
		router.post('/updatephone', (req, res) => {
			const { id, update } = req.body;
			Data.findByIdAndUpdate(req.body.id, {
				$set: {
					phone: update.phone,
				}
			}, (err)=> {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
			});
		});

		//update emaiil
		router.post('/updateemail', (req, res) => {
			const { id, update } = req.body;
			Data.findByIdAndUpdate(req.body.id, {
				$set: {
					email: update.email,
				}
			}, (err)=> {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
			});
		});

		//update home address
		router.post('/updateaddress', (req, res) => {
			const { id, update } = req.body;
			Data.findByIdAndUpdate(req.body.id, {
				$set: {
					address: update.address,
				}
			}, (err)=> {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
			});
		});

		//update position in experience
		router.post('/updateposition', (req, res) => {
			const { id, update } = req.body;
			ExpData.findByIdAndUpdate(id, update, (err) => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
			});
		});

		//update company name in experience
		router.post('/updatecompany', (req, res) => {
			const { id, update } = req.body;
			ExpData.findByIdAndUpdate(req.body.id, {
				$set: {
					companyname: update.companyname,
				}
			}, (err)=> {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
			});
		});


		//update description in experience
		router.post('/updatedescription', (req, res) => {
			const { id, update } = req.body;
			ExpData.findByIdAndUpdate(req.body.id, {
				$set: {
					description: update.description,
				}
			}, (err)=> {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
			});
		});

		//update institute in education
		router.post('/updateinstitute', (req, res) => {
			const { id, update } = req.body;
			EduData.findByIdAndUpdate(id, update, (err) => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
			});
		});

		//update degree in education
		router.post('/updatedegree', (req, res) => {
			const { id, update } = req.body;
			EduData.findByIdAndUpdate(req.body.id, {
				$set: {
					degree: update.degree,
				}
			}, (err)=> {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
			});
		});

		router.post('/updatecompletedon', (req, res) => {
		  const { id, update } = req.body;
		  EduData.findByIdAndUpdate(req.body.id, {
				$set: {
					completedon: update.completedon,
				}
			}, (err)=> {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
		  });
		});


		router.post('/updateprojecttitle', (req, res) => {
		  const { id, update } = req.body;
		  ProjectData.findByIdAndUpdate(req.body.id, {
				$set: {
					title: update.title,
				}
			}, (err)=> {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
		  });
		});

		router.post('/updateprojectdescription', (req, res) => {
		  const { id, update } = req.body;
		  ProjectData.findByIdAndUpdate(req.body.id, {
				$set: {
					description: update.description,
				}
			}, (err)=> {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
		  });
		});


		router.post('/updateprojectcompletedon', (req, res) => {
		  const { id, update } = req.body;
		  ProjectData.findByIdAndUpdate(req.body.id, {
				$set: {
					completedon: update.completedon,
				}
			}, (err)=> {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
		  });
		});

		router.delete('/deleteskill',async  (req, res) => {
		  const { data } = req.body;
		  console.log(data)
		  console.log(req.body.skl)
			const query= { "skill":  req.body.skl  }
		   await SkillData.findOneAndDelete(query,);	 
		});


		//add experience in DB
		router.post('/putexperience', (req, res) => {
			let data = new ExpData();
			const { id, position, description, companyname ,startdate , enddate} = req.body;

			if ((!id && id !== 0) || !position) {
			return res.json({
			  success: false,
			  error: 'INVALID INPUTS',
			});
			}
		  
			  data.description = description;	
			  data.startdate = startdate;
			  data.enddate = enddate;
			  data.position = position;
			  data.companyname = companyname;
			  data.id = id;
			  data.save((err) => {
				if (err) return res.json({ success: false, error: err });
				return res.json({ success: true });
			  });
		});

		//add education in DB
		router.post('/puteducation', (req, res) => {
			let data = new EduData();
			const { id, institute, degree, completedon} = req.body;

			if ((!id && id !== 0) || !institute) {
			return res.json({
			  success: false,
			  error: 'INVALID INPUTS',
			});
			}
			  data.degree= degree;	
			  data.completedon= completedon;
			  data.institute  =   institute ;
			  data.id = id;
			  data.save((err) => {
				if (err) return res.json({ success: false, error: err });
				return res.json({ success: true });
			  });
		});

		//add projects in DB
		router.post('/putproject', (req, res) => {
			  let data = new ProjectData();
			  const { id, title, description, completedon} = req.body;

			if ((!id && id !== 0) || ! title) {
			return res.json({
			  success: false,
			  error: 'INVALID INPUTS',
			});
			}
			  data.title = title;	
			  data.completedon = completedon;
			  data.description  =  description ;
			  data.id = id;
			  data.save((err) => {
				if (err) return res.json({ success: false, error: err });
				return res.json({ success: true });
			  });
		});

		//add skills in DB
		router.post('/putskill', (req, res) => {
			let data = new SkillData();
			const { skill} = req.body;

			  if (!skill) {
				return res.json({
				  success: false,
				  error: 'INVALID INPUTS',
				});
			  }
			  data.skill= skill;
			  data.save((err) => {
				if (err) return res.json({ success: false, error: err });
				return res.json({ success: true });
			  });
		});



	//LOGIN USER
	const logValidation = [
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email is required"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password is required")
	];
	function loginUser(req, res)
	{
		var errors = validationResult(req);
		if (!errors.isEmpty()) {
		  return res.send({ errors: errors.mapped() });
		}
		Data.findOne({
		  email: req.body.email
		})
      .then(function(user) {
        if (!user) {
          return res.send({ error: true, message: "User does not exist!" });
        }
        if (req.body.password === user.password) {

        
        return res.send({ message: "You are signed in" });
        res.send(user);
        }
		else{
			return res.send({ error: true, message: "Incorrect password" });
		}
        
      })
      .catch(function(error) {
        console.log(error);
      });
		}
	  app.post("/api/login", logValidation, loginUser);
	  //----------------------------------------------------
	  function isLoggedIn(req, res, next) {
		if (req.session.isLoggedIn) {
		  res.send(true);
		} else {
		  res.send(false);
		}
	 }


// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
