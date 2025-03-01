const mongoose = require('mongoose');
const { REPORT_REASONS } = require('../constants/enums/comment');

const CommentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true }, // mini schema for the content which will have the text and and attachments like images links etc
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    is_accepted: { type: Boolean, default: false }, // Indicates if the comment is accepted as the answer
    upvotes: { type: Number, default: 0, min: 0 },
    downvotes: { type: Number, default: 0, min: 0 },
    parent_comment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    edited: { type: Boolean, default: false },
    is_reported: { type: Boolean, default: false }, // Indicates if the comment has been reported
    report_reason: { type: String, enum: Object.values(REPORT_REASONS) }, // enum base on the reasons
    is_deleted: { type: Boolean, default: false },
    flagged_by: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of users who flagged the comment
    is_anonymous: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports = mongoose.model('Comment', CommentSchema);
