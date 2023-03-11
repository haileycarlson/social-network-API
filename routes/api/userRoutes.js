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

// Router path for creating and getting users
// /api/user
router.route('/').get(getUser).post(createUser)

// /api/user/:userId
// Router path for getting a single user, updating a single user, and deleting a single user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

// /api/users/:userId/friends/:friendId
// Router path for adding and deleting a friend 
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router
