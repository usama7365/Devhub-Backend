const BUG_PRIORITY = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
  CRITICAL: 'Critical',
};

const BUG_STATUS = {
  OPEN: 'Open',
  IN_PROGRESS: 'In Progress',
  UNDER_REVIEW: 'Under Review',
  RESOLVED: 'Resolved',
  CLOSED: 'Closed',
};

const BUG_CATEGORY = {
  BUG: 'Bug',
  FEATURE_REQUEST: 'Feature Request',
  PERFORMANCE: 'Performance',
  SECURITY: 'Security',
  DOCUMENTATION: 'Documentation',
};

module.exports = {
  BUG_PRIORITY,
  BUG_STATUS,
  BUG_CATEGORY,
};
