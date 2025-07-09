---
title: Cleanup Git Branch
author: "@ryanlewis"
---

# Cleanup Git Branch

## Description

This Claude Code command automates the post-merge cleanup workflow for Git branches. It safely removes local branches that have been merged, prunes remote references, and ensures your local repository stays clean and organised. The command includes comprehensive safety checks to prevent accidental deletion of unmerged work and provides clear feedback throughout the process.

---

Performs post-merge cleanup of the current Git branch and its remote references after it has been merged.

## Usage

```
/cleanup
```

## Command

Please perform Git branch cleanup for the current branch.

Follow these steps:

### 1. Pre-Cleanup Validation

First, check the current Git status to ensure safe cleanup:

- Run `git branch --show-current` to get the current branch
- If on main, stop with error message "Cannot cleanup main branch"
- Store the current branch name for use throughout the workflow
- Run `git status` to check for uncommitted changes
- If there are uncommitted changes, inform the user and stop

### 2. Verify Branch Status

Check if the branch has been merged:

- Run `git branch --merged main` to see merged branches
- If the current branch is NOT in the merged list, warn the user that the branch may not be fully merged
- Ask for confirmation before proceeding with deletion of unmerged branches

### 3. Switch to Main Branch

If not already on main:

- Run `git checkout main`
- If checkout fails, report the error and stop

### 4. Update Main Branch

Pull the latest changes:

- Run `git pull origin main`
- If pull fails due to conflicts, inform user and stop
- Report the summary of changes pulled

### 5. Delete Local Branch

Remove the specified local branch:

- Run `git branch -d <current-branch>` (using the branch name from step 1)
- If the branch is not fully merged, git will warn - capture this
- If user previously confirmed deletion of unmerged branch, use `git branch -D <current-branch>`
- Confirm successful deletion

### 6. Prune Remote References

Clean up stale remote-tracking branches:

- Run `git remote prune origin`
- Report which remote branches were pruned

### 7. Show Remaining Branches

Display current branch state:

- Run `git branch -a` to show all remaining local and remote branches
- Highlight if there are other local branches that might need cleanup

### 8. Optional: Check for Associated PRs

If the gh CLI is available:

- Run `gh pr list --state merged --author @me --limit 5` to show recently merged PRs
- This helps identify other branches that might need cleanup

## Error Handling

- **Uncommitted changes**: Stop and ask user to commit or stash changes first
- **Branch not found**: Check if branch name was typed correctly
- **Network errors**: Inform user that remote operations failed but local cleanup can continue
- **Unmerged branch**: Warn user and require explicit confirmation

## Notes

- NEVER force delete a branch without user confirmation
- Always ensure main is up to date before cleaning up
- If multiple branches need cleanup, process them one at a time
- Inform the user of each major step as it happens
- The command is designed to prevent accidental data loss through multiple safety checks

## Examples

These are examples of output, where you should replace <placeholders> with relevant information.
You should adapt the output based on what you have found out and done.

Example of a placeholder: <branch> should be the current branch 

### Example 1: Standard cleanup after PR merge

```
User: /cleanup

Assistant: I am checking Git status...
✓ Currently on <branch>
✓ No uncommitted changes

I am checking if the branch has been merged...
✓ Branch <branch> has been merged to main

I am switching to main branch...
✓ Switched to branch 'main'

I am pulling latest changes...
✓ Updated main branch (<commit-count> commits pulled)

I am deleting local branch <branch>...
✓ Deleted branch <branch> (was <commit-hash>)

I am pruning remote references...
✓ Pruned origin/<branch>

Current branches:
* main
  feat/other-feature
  remotes/origin/main
  remotes/origin/feat/other-feature

Cleanup complete! Branch <branch> has been removed locally and remote references pruned.
```

### Example 2: Cleanup with uncommitted changes

```
User: /cleanup

Assistant: I am checking Git status...
✓ Currently on <branch>
✗ Error: You have uncommitted changes in your working directory.

Please commit or stash your changes before running cleanup:
  modified:   <file1>
  modified:   <file2>

You can:
1. Commit your changes: git add . && git commit -m "your message"
2. Stash your changes: git stash
3. Discard changes: git checkout -- . (WARNING: this will lose your changes)
```

### Example 3: Attempting to cleanup main branch

```
User: /cleanup

Assistant: I am checking Git status...
✓ Currently on main

✗ Error: Cannot cleanup main branch.

Please switch to a feature branch before running cleanup.
```

### Example 4: Cleanup of unmerged branch

```
User: /cleanup

Assistant: I am checking Git status...
✓ Currently on <branch>
✓ No uncommitted changes

I am checking if the branch has been merged...
⚠️  Warning: Branch <branch> has NOT been merged to main.

This branch contains <commit-count> commits that are not in main.
Are you sure you want to delete this unmerged branch? This action cannot be undone.

User: yes

Assistant: I am switching to main branch...
✓ Switched to branch 'main'

I am pulling latest changes...
✓ Updated main branch (<commit-count> commits pulled)

I am force deleting local branch <branch>...
✓ Deleted branch <branch> (was <commit-hash>)

I am pruning remote references...
✓ Pruned origin/<branch>

Cleanup complete! Unmerged branch <branch> has been force deleted.
```