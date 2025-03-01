# Enums Directory

This directory contains enumeration constants used throughout the application, organized by domain.

## Files

- `user.js`: User-related enums

  - `USER_ROLES`: User role types (user, moderator, admin)

- `discussion.js`: Discussion-related enums

  - `DISCUSSION_CATEGORIES`: Categories for discussions (Code Help, Architecture, etc.)
  - `DISCUSSION_TYPES`: Types of discussions (Question, Discussion, Poll)

- `blog.js`: Blog-related enums

  - `BLOG_CATEGORIES`: Categories for blogs (Tutorial, Best Practices, etc.)
  - `BLOG_STATUS`: Status values for blogs (draft, published, archived)

- `bugReport.js`: Bug report-related enums

  - `BUG_PRIORITY`: Priority levels for bugs (Low, Medium, High, Critical)
  - `BUG_STATUS`: Status values for bugs (Open, In Progress, etc.)
  - `BUG_CATEGORY`: Categories for bugs (Bug, Feature Request, etc.)

- `knowledgeBase.js`: Knowledge base-related enums

  - `KB_CATEGORIES`: Categories for knowledge base articles
  - `KB_DIFFICULTY_LEVELS`: Difficulty levels (Beginner, Intermediate, Advanced)
  - `KB_STATUS`: Status values for knowledge base articles

- `comment.js`: Comment-related enums

  - `REPORT_REASONS`: Reasons for reporting comments

- `index.js`: Exports all enums for easier importing

## Adding New Enums

When adding new enums:

1. Create a new file if it's for a new domain, or add to an existing file if appropriate
2. Follow the naming convention: UPPERCASE_WITH_UNDERSCORES
3. Export the new enum from the file
4. Add the export to `index.js` if you created a new file
5. Update this README to document the new enum
