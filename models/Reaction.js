const { Schema, Types } = require('mongoose')

// What is required for reaction
const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        if (date) return date.toISOString().split('T')[0]
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
  },
)

module.exports = reactionSchema
