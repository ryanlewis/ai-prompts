---
title: Tips
author: "@ryanlewis"
---

## Be Specific and Clear

- **Use precise language**: Avoid ambiguous terms and clearly define what you want
- **Provide context**: Include relevant background information the AI needs to understand your request
- **Set boundaries**: Specify what should and shouldn't be included in the response

## Structure Your Prompts

- **Break down complex tasks**: Divide large requests into smaller, manageable steps
- **Use formatting**: Leverage markdown, bullet points, or numbered lists for clarity
- **Include examples**: Show the AI what kind of output you're looking for

## Optimise for Better Results

- **Iterate and refine**: Don't hesitate to rephrase or add details if the first response isn't quite right
- **Specify the format**: Tell the AI if you want JSON, markdown, code, or plain text
- **Set the tone**: Indicate if you want formal, casual, technical, or creative responses

## Common Patterns

### Role-Based Prompts
Start with "You are a [role]..." to set the AI's perspective and expertise level.

### Chain-of-Thought
Ask the AI to "think step by step" or "explain your reasoning" for complex problems.

### Few-Shot Learning
Provide 2-3 examples of input/output pairs to demonstrate the pattern you want.

## Avoid Common Pitfalls

- **Don't be too vague**: "Write something about X" rarely produces useful results
- **Avoid contradictions**: Ensure your requirements don't conflict with each other
- **Watch token limits**: Very long prompts may get truncated or produce incomplete responses

## Advanced Techniques

- **Temperature control**: Request more creative (higher temperature) or focused (lower temperature) responses
- **System prompts**: Use system-level instructions for consistent behavior across conversations
- **Prompt chaining**: Use the output of one prompt as input for the next
- **Direct the architecture**: When asking LLMs to complete refactors, define the desired files, classes, and interfaces upfront rather than leaving it to the AI to decide. You're better off completing small, focused refactors instead of large re-architectures

## Testing and Validation

- **Test edge cases**: Try your prompts with unusual inputs to ensure robustness
- **Version control**: Keep track of prompt iterations that work well
- **Measure effectiveness**: Document which prompts consistently produce good results
