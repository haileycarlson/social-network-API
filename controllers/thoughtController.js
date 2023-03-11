const { Thought, User } = require('../models')

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err))
  },
  singleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought),
      )
      .catch((err) => res.status(500).json(err))
  },
  addThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err))
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true },
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought),
      )
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },
  removeThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !course
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Thought.delete({ _id: thought }),
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err))
  },
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true },
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought),
      )
      .catch((err) => res.status(500).json(err))
  },
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { runValidators: true, new: true },
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No reaction with this id!' })
          : res.json(thought),
      )
      .catch((err) => res.status(500).json(err))
  },
}

// A getThoughts,
// A singleThought,
// A addThought,
// A updateThought,
// A removeThought,
// A addReaction,
// A removeReaction,
