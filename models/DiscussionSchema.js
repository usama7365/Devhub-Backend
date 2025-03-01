const mongoose = require('mongoose');
const {
  DISCUSSION_CATEGORIES,
  DISCUSSION_TYPES,
} = require('../constants/enums/discussion');

const DiscussionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: {
    type: String,
    enum: Object.values(DISCUSSION_CATEGORIES),
    required: true,
  }, // enum base
  type: {
    type: String,
    enum: Object.values(DISCUSSION_TYPES),
    default: DISCUSSION_TYPES.DISCUSSION,
  },
  tags: [{ type: String }],
  // code_snippets: [{
  //   language: String,
  //   code: String,
  //   description: String
  // }],
  poll_options: [
    {
      // For poll-type discussions
      text: String,
      votes: { type: Number, default: 0 },
      voters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    },
  ],
  answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  accepted_answer: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
  views: { type: Number, default: 0 },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  poll_voters: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      vote: { type: Number, enum: [-1, 1] }, // -1 for downvote, 1 for upvote
    },
  ],
  is_resolved: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Discussion', DiscussionSchema);
