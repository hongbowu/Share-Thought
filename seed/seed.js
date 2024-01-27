const connection = require('../config/connection');
const { User, Thought } = require('../models');


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [
    {
      username: 'john_doe',
      email: 'john@example.com',
      thoughts: [],
      friends: [], 
    },
    {
      username: 'jane_smith',
      email: 'jane@example.com',
      thoughts: [],
      friends: [], 
    },
    {
      username: 'user_with_friends',
      email: 'user_with_friends@example.com',
      thoughts: [],
      friends: [], 
    },
    {
      username: 'Hongbo Wu',
      email: 'hongbowu@example.com',
      thoughts: [],
      friends: [], 
    },
    {
      username: 'user5',
      email: 'user5@example.com',
      thoughts: [],
      friends: [],
    },
  ];
  const thoughts = [
    {
      thoughtText: 'This is my first thought!',
      username: 'john_doe',
      reactions: [],
    },
    {
      thoughtText: 'Another thought here!',
      username: 'jane_smith',
      reactions: [], 
    },
    {
      thoughtText: 'Thought with a past timestamp',
      username: 'user_with_friends',
      reactions: [], 
    },
    {
      thoughtText: 'Short thought',
      username: 'Hongbo Wu',
      reactions: [], 
    },
    {
      thoughtText: 'Thought with a future timestamp',
      username: 'user5',
      reactions: [], 
    },
  ];
  
await User.collection.insertMany(users);
await Thought.collection.insertMany(thoughts);

console.table(users);
console.table(thoughts);
console.info('Seeding complete!');
process.exit(0);
});