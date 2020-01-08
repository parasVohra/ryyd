var express = require("express");
var app = express();
let bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require('../api/schema');
const bcrypt = require('bcryptjs');



//conection to mongodb
mongoose.connect('mongodb+srv://paras966:parasvohra966@cluster0-jjlz1.mongodb.net/Ryyd?retryWrites=true&w=majority', {  useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
let db = mongoose.connection;

db.once('open', function(){
    console.log('connected with database')
})

//check for db error
db.on('error', function(err){
    console.log("error"+ err);
})


//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//enabling cros
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//route request
app.get("/", function(req,res){
    console.dir(req);

    res.send("data from the server");
})


//get data from sign up form
app.post("/signUp", (req,res) => {

    var data = req.body;

    var newUser = new Users({
        firstName: data.formData.firstName,
        lastName: data.formData.lastName,
        email: data.formData.email,
        phone: data.formData.phone,
        password: data.formData.password
    })
    console.log(newUser.email);

    // checking for exixting email in database
    Users.findOne({ email: data.formData.email })
    .then((err,found)=>{
        if(err) {
            console.log(err) ;
            res.send("err in saveing")
        }
        if(found){
            console.log(found+" alreday saved in database");
            res.send("Record already exsist")

        }

        else{
            // hash function for password
            bcrypt.genSalt(10,(err,salt) => 
                bcrypt.hash(data.formData.password, salt, (err, hash) => {
                if(err) throw err;

                newUser.password = hash


                // saving new user in data base 
                newUser.save(function (err) {
                    if (err){
                        console.log(err);
                        res.send("error in saving" + err);
                    }
    
                     res.send("users saved")
                  });

            }))
           
            
        }
    })
    .catch(err=>{
        console.log(err)
    })
     
})


//get data from signIn form
app.post("/signIn", (req,res) => {

    var data = req.body;
    console.log(data)

    

    Users.findOne({email: data.email})
    //match email
    .then(user =>{
        if(!user){
            res.send({message: "Given email is not registered"});
            console.log("email not found")
        }
        //Match password

        console.log(user.password)
        bcrypt.compare(data.password,user.password, (err,isMatch)=>{
            if (err) throw err;

            if(isMatch){
                console.log( "login successfull");
                res.send(user)
            }
            else{
                console.log( "Password is incorrect");
                res.send( "Password is incorrect")
            }
        } )
    })
    .catch( err=> {
        console.log(err)
    })


    
})

//search for ride and return search results
app.post("/searchRide", (req,res) => {

    var data = req.body;

    console.log(data);
    res.send(data);
    res.end();
})

//publish ride 
app.post("/publishRide", (req,res) => {

    var data = req.body;

    console.log(data);
    res.send(data);
    res.end();
})


//base url for server request
module.exports = {
    path : "/api/",
    handler: app
}