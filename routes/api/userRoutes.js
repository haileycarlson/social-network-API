const router = require('express').Router()
const {
  getUser,
  createUser,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  addFriend,
  removeFriend,
} = require('')

// /api/user
router.route('/').get(getUser).post(createUser)

// /api/user/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateSingleUser)
  .delete(deleteSingleUser)

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router
