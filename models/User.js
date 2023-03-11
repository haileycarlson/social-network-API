const { Schema, Types, model } = require('mongoose')

// What is required for user 
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
  },
  thoughts: {
    // _id: ,
    type: Schema.Types.ObjectId,
    ref: 'thought',
  },
  friends: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
})

userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

// Creating a user model to be used
const User = model('user', userSchema)

module.exports = User
