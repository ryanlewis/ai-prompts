Create a Jira ticket for the AI project with the following information:

**Problem/Issue**: 
Describe the problem or feature request

**Issue Type**:
Task/Bug/Story

**Additional Context**: 
Any relevant background, affected files, related PRs, or why this matters

**Expected Outcome**:
What should happen when this is fixed/implemented

Please format the ticket using this structure:

Summary: Concise one-line description

Description:
```
## Summary (Brief overview of the issue/task)
        
## Context (Background information, why this is needed, what's currently happening)
        
## Acceptance criteria (Bullet points starting with * describing what needs to be done)
        
## Other information (Optional - links, references, additional notes)    
```

Use professional, straightforward language focused on the technical issue. For bugs, explain what's wrong and what the correct behavior should be. For tasks, explain what needs to be created or changed.

---

### Example usage

Create a Jira ticket for the AI project with the following information:

**Problem/Issue**: 
Our STYLEGUIDE.md suggests single quotes for docstrings but PEP 257 and ruff require double quotes

**Issue Type**: 
Bug

**Additional Context**: 
This conflicts with Python standards and our ruff formatter configuration

**Expected Outcome**: 
STYLEGUIDE.md should recommend triple double quotes for docstrings to align with PEP 257"