const reactionSchema = new userSchema(
  {
    reactionId: {
      //Mongoose's ObjectId data type
      //Default value set to a new ObjectId
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
      //Is this right for getter method to timestamp?
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
