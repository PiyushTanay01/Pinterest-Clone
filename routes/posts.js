const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  imageText: {
    type: String,
    required: true,
  },
  image:{
    type:String
  },
  likes: {
    type: Array,
    default: [],
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Reference to the User model for the user who created the post
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//   },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
