const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema 
const UserSchema = mongoose.Schema({

  lname:{
      type:String
  }, 
  fname:{
      type:String
  }, 
  email:{
      type:String ,
      require:true
 },
 username:{
     type:String ,
     require:true
 },
 password:{
     type:String ,
     require:true
 }

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById= function(id,callback){
    User.findById(id,callback);
}

module.exports.getUserByName=function(username,callback){
    const query= {username:username};
    User.findOne(query,callback);
}

module.exports.addUser=function(newUser,callback){
 
 //console.log("HIIIIIDID");
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        // Store hash in your password DB.  
        newUser.password=hash; 
        newUser.save(callback);
    });
});

}

module.exports.comparePassword = function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    });
}
