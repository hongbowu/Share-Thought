const { Schema, model } = require('mongoose');

// Create thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now, 
            get: function(timestamp){
                return new Date(timestamp).toLocaleString();
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
                {
                    type: SchemaTypes.ObjectId,
                    ref: 'Reaction',
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

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;