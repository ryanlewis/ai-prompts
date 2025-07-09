---
title: Implement GitHub Issue
author: "@ryanlewis"
---

# Implement GitHub Issue

## Description

This prompt automates the complete workflow for implementing GitHub issues in any project. It guides through fetching issue details, creating feature branches following conventional commit standards, implementing changes with proper testing, and creating pull requests that automatically close issues upon merge. The workflow emphasises code quality through comprehensive validation checks and maintains project conventions throughout the implementation process.

## Usage

```
gh-issue <issue-number>
```

## Implementation Workflow

### 1. Fetch and Analyze Issue

- Use `gh issue view <issue-number>` to retrieve issue details
- Extract title, description, labels, and acceptance criteria
- Identify the type, priority, and category from labels
- Parse acceptance criteria from the markdown checklist

### 2. Understand Requirements

- Identify if this is a feature, fix, infrastructure, or testing task
- List specific changes needed based on acceptance criteria
- Check for any dependencies mentioned in the issue
- Review relevant project documentation if referenced

### 3. Create Feature Branch

- Determine branch type from issue labels (feat, fix, chore, docs, test)
- Create a new branch from main: `git checkout -b <type>/issue-<issue-number>-<brief-description>`
- Example: `git checkout -b feat/issue-42-add-user-authentication`
- Ensure you're not on main branch before making changes

### 4. Search and Analyze Codebase

- Use Task tool to search for related code and patterns
- Understand existing implementations and conventions
- Review similar features or components for consistency
- Check for existing tests that might need updating

### 5. Plan Implementation

- Break down the task into specific steps
- List all files that need to be created or modified
- Identify test files that need creation or updates
- Note any configuration changes required
- Use TodoWrite to track all implementation steps

### 5. Implement Changes

- Follow existing code patterns and conventions
- Follow the project's coding standards and conventions
- Use appropriate typing/type annotations if applicable
- Implement using project-specific frameworks and patterns
- Ensure all acceptance criteria are addressed
- Follow the project structure defined in documentation

### 6. Write/Update Tests

- Use the project's designated test runner
- Ensure comprehensive test coverage
- Test all acceptance criteria explicitly
- Include edge cases and error scenarios
- Follow existing test patterns in the codebase

### 7. Run Validation Checks

Execute in parallel (adjust commands based on project setup):

- Run all tests (e.g., `npm test`, `yarn test`, `bun test`)
- Check linting (e.g., `npm run lint`)
- Format code if needed (e.g., `npm run format`)
- Verify type checking if applicable (e.g., `npm run typecheck`)

Fix any issues found before proceeding.

### 8. Update Implementation Status

- Mark all completed todos as done
- Review that all acceptance criteria are met
- Ensure no tasks were missed

### 9. Create Commit

Following conventional commits format:

- `feat:` for new features
- `fix:` for bug fixes
- `test:` for test additions
- `chore:` for infrastructure tasks
- `refactor:` for code improvements

**IMPORTANT**: Include issue reference in commit message to link it:
- Format: `<type>: <description> (closes #<issue-number>)`
- Example: `feat: add user authentication system (closes #42)`

### 10. Push Branch and Create Pull Request

First push the branch:
- `git push -u origin <type>/issue-<issue-number>-<brief-description>`

Then create PR using `gh pr create`:

- Title should reference the issue: `<type>: <description> (closes #<issue-number>)`
- Body must include:
  - Summary of changes
  - **Issue link**: `Closes #<issue-number>` (this will auto-close the issue when PR is merged)
  - Checklist of acceptance criteria (copied from issue)
  - Test results summary
  - Any additional notes
- Target branch: `main`
- Never push directly to main

### 11. Provide Summary

Recap:

- What was implemented
- All files changed
- Tests added/modified
- Any remaining work or follow-up needed

## Error Handling

- If gh CLI is not available, ask user to install it
- If issue doesn't exist, inform user
- If validation checks fail, fix before creating PR
- If dependencies aren't met, inform user

## Important Notes

- Use the project's designated package manager (npm, yarn, pnpm, bun, etc.)
- Follow the project structure consistently
- Adhere to framework-specific patterns and conventions
- Match any specifications or requirements documentation exactly
- Respect issue milestones and project timelines
- **Never commit directly to main branch**
- **Always create a feature branch for each issue**
- **Always reference the issue number in commits and PRs to enable auto-closing**
