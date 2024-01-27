const router = require('express').Router();
const {
    getUsers,
    createUser,
    getSingleUser,
    addUserFriend,
} = require('../../controllers/userController')

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addUserFriend);

module.exports = router;