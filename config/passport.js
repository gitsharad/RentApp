const jwtstrategy = require('passport-jwt').Strategy;
const jwtextract = require('passport-jwt').ExtractJwt;
const User = require('../models/users');
const config = require('../config/database');

module.exports =function(passport){

         let opts= {};
         opts.jwtFromRequest=jwtextract.fromAuthHeader();
         opts.secretOrKey = config.secret;
         passport.use(new jwtstrategy(opts,(jwt_payload,done)=>{
              
             User.getUserById(jwt_payload._doc._id,(err,user)=>{
                 //console.log("jwtsdfsdf",jwt_payload) ;

             if(err){ 
                   return done(err,false);
               }
               if(user){
                   return done(null,user);
               }else{ 
                   return done(null,false);
               }

             }) ; 
               
         }));
}