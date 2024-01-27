const { Thought } = require('../models');
const User = require('../models/User');

module.exports = {
    async getUsers(req, res) {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.userId })
          .select('-__v');
  
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' });
        }
  
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // create a new user
    async createUser(req, res) {
      try {
        const dbUserData = await User.create(req.body);
        res.json(dbUserData);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async updateUser(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { new: true },
            );
            res.json(dbUserData);
          } catch (err) {
            res.status(500).json(err);
          }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }

            const thought = await Thought.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId }},
                { new: true }
            )
            if (!thought) {
                return res.status(404).json({ message: 'User deleted but no thought with this id!' });
            }
            res.json({ message: 'User successfully deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addUserFriend(req, res) {
        try {
            const { userId, friendId } = req.params;
          const user = await User.findOneAndUpdate(
            { _id: userId },
            { $addToSet: { friends: friendId } },
            { runValidators: true, new: true }
          )
    
          if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
    
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },
  };
  