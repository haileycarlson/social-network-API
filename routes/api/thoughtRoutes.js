const router = require('express').Router()
const {
  getThoughts,
  singleThought,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController')

// /api/thoughts
router.route('/').get(getThoughts)

// /api/thoughts/:thoughtId
// Router path for thought options
router
  .route('/:thoughtId')
  .get(singleThought)
  .post(addThought)
  .put(updateThought)
  .delete(removeThought)

// /api/thoughts/:thoughtId/reactions
// Router path for posting rections
router.route('/:thoughtId/reactions').post(addReaction)

// Router path for deleting reaction with id
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router
