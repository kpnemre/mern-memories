const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  message: String,
  creator: String,
  selectedFiles: String,
  tags: [String],
// selectedFiles: Buffer,

  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// module.exports = PostMessage = mongoose.model("PostMessage", postSchema);
var PostMessage = mongoose.model('PostMessage', postSchema);

module.exports= PostMessage;