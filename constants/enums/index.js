const userEnums = require('./user');
const discussionEnums = require('./discussion');
const blogEnums = require('./blog');
const bugReportEnums = require('./bugReport');
const knowledgeBaseEnums = require('./knowledgeBase');
const commentEnums = require('./comment');

module.exports = {
  ...userEnums,
  ...discussionEnums,
  ...blogEnums,
  ...bugReportEnums,
  ...knowledgeBaseEnums,
  ...commentEnums,
};
