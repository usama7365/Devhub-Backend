const mongoose = require('mongoose');
const {
  BUG_PRIORITY,
  BUG_STATUS,
  BUG_CATEGORY,
} = require('../constants/enums/bugReport');

const BugReportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  priority: {
    type: String,
    enum: Object.values(BUG_PRIORITY),
    default: BUG_PRIORITY.MEDIUM,
  }, // enum based on the priority
  status: {
    type: String,
    enum: Object.values(BUG_STATUS),
    default: BUG_STATUS.OPEN,
  }, // enum based on the status
  category: {
    type: String,
    enum: Object.values(BUG_CATEGORY),
    required: true,
  }, // enum based on the category
  environment: {
    os: String,
    browser: String,
    version: String,
  },
  reproduction_steps: [String],
  expected_behavior: { type: String },
  actual_behavior: { type: String },
  // code_snippets: [{
  //   language: String,
  //   code: String,
  //   description: String
  // }],
  attachments: [
    {
      url: String,
      filename: String,
      type: String,
    },
  ],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  watchers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  related_issues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BugReport' }],
  tags: [String],
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  is_resolved: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BugReport', BugReportSchema);
