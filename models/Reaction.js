const reactionSchema = new Schema(
  {
    reactionId: {
      //Mongoose's ObjectId data type
      //Default value set to a new ObjectId
      type: userSchema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
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
