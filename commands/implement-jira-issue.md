---
title: Implement Jira Issue
author: "@ryanlewis"
---

# Implement Jira Issue

## Description

This Claude Code command automates the complete workflow of implementing a Jira issue - from fetching and analysing the issue details to making code changes, writing tests, and updating the ticket status. It provides a structured approach to ensure thorough implementation with proper testing and documentation.

---

Analyse and implement a Jira issue by fetching issue details, understanding requirements, and making the necessary code changes.

## Usage

```
/implement-jira-issue <jira-id>
```

Example: `/implement-jira-issue AI-123`

## Command

Please implement Jira issue: $ARGUMENTS

Follow these steps:

### 1. Fetch and Analyze Issue

First, retrieve details of the issue using mcp-atlassian tooling.

Parse and display:
- **Summary**: The issue title
- **Description**: Full issue description
- **Acceptance Criteria**: Any defined criteria
- **Type**: Bug, Feature, Task, etc.
- **Priority**: Critical, High, Medium, Low
- **Labels**: Any relevant labels
- **Comments**: Recent discussion for context

### 2. Understand Requirements

Based on the issue information:
- Identify the core problem or feature request
- List the specific changes needed
- Note any constraints or special considerations
- Check for linked issues or dependencies

### 3. Search and Analyze Codebase

Find all relevant files and understand the current implementation.

Read and understand:
- Current implementation details
- Existing tests
- Code patterns and conventions
- Dependencies and integrations

### 4. Plan Implementation

Create a clear implementation plan:
1. List files that need to be modified
2. Describe the changes for each file
3. Identify any new files needed
4. Note test updates required
5. Consider edge cases and error handling

Ask for confirmation before proceeding with implementation.

### 5. Implement Changes

For each file in the plan:
- Make the necessary code changes
- Follow existing code style and patterns
- Add appropriate comments and documentation
- Handle errors gracefully
- Consider performance implications

### 6. Write/Update Tests

Ensure comprehensive test coverage:

```bash
# From root directory:
make check


# From a module directory e.g. src/py/module_name
uv run pytest

# Write new tests for:
# - Happy path scenarios
# - Edge cases
# - Error conditions
# - Integration points
```

### 7. Verify Implementation

Run all quality checks:
```bash
# Linting (from root directory)
make  lint

# Tests with coverage (from root directory)
make test-coverage

# Formatting of Markdown files
prettier --write <file.md>
```

### 8. Update the plan

Update the plan with the latest changes and status and other relevant information.

### 9. Create Commit

Once all checks pass, create a descriptive commit in the following format:

```
<jira-id>: <brief-description>

- <detailed change 1>
- <detailed change 2>
- <test coverage added>
```

### 10. Update Jira Issue

Add a comment to the issue using mcp-atlassian tooling with implementation details:
```
## Changes
- [List of changes made]

## Testing
- [Tests added/updated]

## Notes
- [Any notes for reviewers]
```

Update issue status by transitioning to a new status if appropriate.

### 11. Summary

Provide a summary of:
- Changes implemented
- Tests added/modified
- Any remaining work or follow-up items
- Suggestions for code review focus areas

## Notes

- Always read the issue thoroughly before starting
- If requirements are unclear, ask for clarification
- Follow existing code patterns and conventions
- Ensure backward compatibility unless breaking changes are explicitly required
- Consider security implications of changes
- Document any assumptions made during implementation