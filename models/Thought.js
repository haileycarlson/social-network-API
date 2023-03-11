const { Schema, Types, model } = require('mongoose')
const reactionSchema = require('./Reaction')

// What is required for thoughts
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => {
      if (date) return date.toISOString().split('T')[0]
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
})

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
})

// Creating thought model so it can be used
const Thought = model('thought', thoughtSchema)

module.exports = Thought
