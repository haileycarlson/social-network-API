const thoughtSchema = new userSchema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //getter method??
  },
  username: {
    type: String,
    required: true,
  },
  reactions: {
    //array of nested documents from reactionSchema
  },
})

userSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
})

const Thought = model('thought', thoughtSchema)

model.exports = Thought
