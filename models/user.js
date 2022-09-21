const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({
  firstname: {type:String,required:true},
  lastname: {type:String,required:true},
  gender: {type:String,required:true},
  age: {type:Number,required:true},
  email: {type:String,required:true},
  password:{type:String,required:true}
})

userSchema.pre('save',function(next){
  const user = this;
  // generate the salt
  bcrypt.genSalt(10,function(err,salt){
    console.log("salt generated");
    if(err) {next(err)}
    console.log("salt generated",salt);

    //hash the salt+ password
    bcrypt.hash(user.password,salt, null, function(er,hash){
      if(err) {
        return next(err)
      }
      user.password = hash;
      next();
    })
  })


})

// below method compares the password bubmitted by user and the password stroed in db
userSchema.methods.comparePassword = function(candidatePassword,callback) {
  bcrypt.compare(candidatePassword,this.password, function(err,isMatch){
    if(err) {return callback(err);}
    callback(null,isMatch);
  })
}




module.exports = mongoose.model('User',userSchema)
