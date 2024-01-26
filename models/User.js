const { Schema, model } = require('mongoose');

// Schema for what makes up a user
const userSchema = new Schema(
    {
        username: {
            type: String,
            Unique: true,
            required: true,
            Trimmed: true,
        },
        email: {
            type: String,
            required: true,
            Unique: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
        thoughts: [
            {
                type: SchemaTypes.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
            {
                type: SchemaTypes.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            id: false,
        }
    }
);

// Create a virtual property 'friendCount' that gets the amount of friends for the user
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;