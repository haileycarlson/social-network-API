const router = require('express').Router()
const {
  getThoughts,
  singleThought,
  addThought,
  updateThought,
  removeThought,
} = require('')

// /api/thoughts
router.route('/').get(getThoughts)

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(singleThought)
  .post(addThought)
  .put(updateThought)
  .delete(removeThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router
