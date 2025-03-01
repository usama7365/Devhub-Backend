# Constants Directory

This directory contains constant values used throughout the application. The goal is to centralize all constants to make the codebase more maintainable and reduce duplication.

## Structure

### Enums

The `enums/` directory contains enumeration constants organized by domain:

- `user.js`: User-related enums (roles, etc.)
- `discussion.js`: Discussion-related enums (categories, types, etc.)
- `blog.js`: Blog-related enums (categories, statuses, etc.)
- `bugReport.js`: Bug report-related enums (priorities, statuses, categories, etc.)
- `knowledgeBase.js`: Knowledge base-related enums (categories, difficulty levels, statuses, etc.)
- `comment.js`: Comment-related enums (report reasons, etc.)
- `index.js`: Exports all enums for easier importing

### Config

The `config/` directory contains application configuration constants:

- `app.js`: General application configuration (pagination, file sizes, limits, etc.)

### Messages

The `messages/` directory contains message strings used throughout the application:

- `errors.js`: Error messages organized by domain

### Validation

The `validation/` directory contains validation-related constants:

- `schemas.js`: Validation schemas for different entities

## Usage

You can import specific constants directly from their respective files:

```javascript
const { USER_ROLES } = require('../constants/enums/user');
const { APP_CONFIG } = require('../constants/config/app');
```

Or import all constants from the main index file:

```javascript
const { USER_ROLES, APP_CONFIG, AUTH_ERRORS } = require('../constants');
```

## Benefits

- **Maintainability**: Changes to constant values only need to be made in one place
- **Consistency**: Ensures consistent usage of values throughout the application
- **Type Safety**: Provides better type checking and autocompletion in IDEs
- **Documentation**: Self-documents the valid values for each constant
- **Centralization**: Makes it easier to find and understand all the constants used in the application

## Adding New Constants

When adding new constants:

1. Determine the appropriate category (enums, config, messages, validation)
2. Create a new file if it's for a new domain, or add to an existing file if appropriate
3. Follow the naming convention: UPPERCASE_WITH_UNDERSCORES for constants
4. Export the new constants from the file
5. Add the export to the appropriate index.js file
6. Update this README to document the new constants
