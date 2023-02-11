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
  },
  friends: {
    // _id: ,
  },
})

userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

const User = model('user', userSchema)

model.exports = User
