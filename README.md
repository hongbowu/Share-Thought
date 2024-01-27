# Share-Thought

This is the API for Share Thought, a social media startup that utilizes a NoSQL database for handling large amounts of unstructured data.

## Getting Started
To run the application, follow these steps:

Clone this repository to your local machine.
Install the necessary dependencies by running npm install in the terminal.
Start the server by running npm start.
Make sure you have MongoDB installed on your machine, and update the connection string in the server.js file if needed.

## Usage
Syncing Models with MongoDB
When the application is invoked, the server will start, and Mongoose models will be synced to the MongoDB database.

API Routes
Users
GET /api/users
Retrieves a list of all users in a formatted JSON.

POST /api/users
Creates a new user in the database.

PUT /api/users/:userId
Updates an existing user in the database.

DELETE /api/users/:userId
Deletes a user from the database.

Thoughts
GET /api/thoughts
Retrieves a list of all thoughts in a formatted JSON.

POST /api/thoughts
Creates a new thought in the database.

PUT /api/thoughts/:thoughtId
Updates an existing thought in the database.

DELETE /api/thoughts/:thoughtId
Deletes a thought from the database.

Reactions

POST /api/thoughts/:thoughtId/reactions
Creates a new reaction for a specific thought.

DELETE /api/thoughts/:thoughtId/reactions/:reactionId
Deletes a reaction from a specific thought.

Friends
POST /api/users/:userId/friends/:friendId
Adds a friend to a user's friend list.

DELETE /api/users/:userId/friends/:friendId
Removes a friend from a user's friend list.

## Testing
You can use tools like Insomnia to test the API routes. Ensure that you have a MongoDB server running and update the connection string accordingly.


## contact
Feel free to explore and interact with the API to create, update, and delete users, thoughts, reactions, and friends.
email: hongbowu87@gmail.com

## vedio_link
https://drive.google.com/file/d/1lbmQZkCTJmFkIvT1wJjFNeFawbG4UT3k/view?usp=sharing


Happy sharing on Share Thought!