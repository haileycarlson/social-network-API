const router = require('express').Router()
const {
  getUser,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController')
// are these supposed to be in the same one??????
// /api/user
router.route('/').get(getUser).post(createUser)

// /api/user/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router
