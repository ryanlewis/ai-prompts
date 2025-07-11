# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI prompts documentation site built with [Eleventy](https://www.11ty.dev/) and the [eleventy-notes](https://github.com/rothsandro/eleventy-notes) starter template by Sandro Roth. It combines Obsidian-style note-taking with static site generation to create a searchable, browsable collection of AI prompts.

## Development Commands

### Essential Commands
```bash
# Install dependencies (must be run from .app directory)
cd .app && npm install && cd ..

# Start development server (runs on http://localhost:8080)
npm start

# Build static site (outputs to _site directory)
npm run build

# Clean build artifacts
npm run clean
```

### Working with Dependencies
All Node.js dependencies are managed in `.app/package.json`. The root `package.json` only contains convenience scripts that delegate to the .app directory.

## Architecture & Structure

### Two-Layer Architecture
1. **Root Level**: Content files (Markdown notes, prompts, assets)
2. **App Level (.app/)**: Eleventy static site generator and build tooling

### Key Files
- `app.mjs`: Site configuration (title, navigation, sidebar structure)
- `.app/`: Contains all build tooling, templates, and Eleventy configuration
- `prompts/`: Directory for AI prompt markdown files
- `public/`: Static assets (images, custom CSS/JS)
- `_site/`: Generated static site output (git-ignored)

### Content Organization
- **Prompts**: Place AI prompt files in `/prompts/` directory
- **Documentation**: Create markdown files in root or organized folders
- **Assets**: Store images and static files in `/public/`
- **Planning Docs**: Keep in `.plans/` (excluded from site build)

### Content Guidelines
- **Domain Focus**: Prompts are designed around Jira, Python, and JavaScript workflows but should be written as adaptable templates
- **Tone**: Frame domain-specific content as examples that can be customized for other tools/languages
- **Structure**: Include placeholder variables (e.g., [PROJECT_NAME], [MODULE_NAME]) to encourage adaptation
- **Documentation**: Explain the specific tools/workflows but emphasize broader applicability

## Key Features to Maintain

### Wikilinks
- Internal links use `[[Note Name]]` syntax
- Automatically resolved by eleventy-notes
- Support for backlinks and note graphs
- When referencing `CLAUDE.md` in content, wrap it in backticks to prevent wikilink creation
  - Exception: Don't use backticks when `CLAUDE.md` is part of a markdown link (e.g., `[text](path/to/CLAUDE.md)`)

### Site Configuration
The `app.mjs` file controls:
- Site metadata (title, description)
- Sidebar navigation structure
- External links
- Content ignore patterns

### Build Process
1. Eleventy processes all markdown files (except those matching ignore patterns)
2. Wikilinks are resolved
3. Search index is generated (production only)
4. Static assets are copied from public/
5. Output is generated in _site/

## Important Considerations

- **Never modify files in .app/** unless updating build tooling
- **All content edits** should be in markdown files outside .app/
- **The README.md is ignored** in the build (see app.mjs ignores)
- **Search only works** in production builds (`npm run build`)

## Development Tips

- If running the server and we make changes to app.mjs, restart the server after making changes

## Writing Guidelines

- Use UK english instead of US english

## Changelog Management

Before committing any changes to the repository, you MUST update the CHANGELOG.md file to document your changes:

1. **Create a new dated section** at the top of the changelog (after any existing [Unreleased] section) using the format `## [YYYY-MM-DD] - Brief Description`
2. **Add entries under the appropriate category**:
   - **Added**: New features, files, or functionality
   - **Changed**: Modifications to existing features
   - **Deprecated**: Features marked for removal
   - **Removed**: Deleted features or files
   - **Fixed**: Bug fixes and corrections
   - **Security**: Security-related changes

3. **Follow the format**: Use bullet points with clear, concise descriptions
4. **Be specific**: Describe what changed and why it matters to users
5. **Reference issues or pull requests**: Include relevant numbers when applicable

### Example Entry
```markdown
## [2025-06-29] - Feature Updates

### Added
- New prompt template for code review workflows
- Search functionality to prompt collection

### Fixed
- Broken wikilinks in navigation sidebar
```

**Important**: Always update the changelog BEFORE creating commits. Since commits to main are automatically published, each commit should have its changes documented with the current date.

## Git Commit Guidelines

This project follows [Conventional Commits](https://conventionalcommits.org/) specification. All commit messages MUST adhere to this format:

### Commit Message Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types
- **feat**: New feature or functionality
- **fix**: Bug fix
- **docs**: Documentation changes only
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code changes that neither fix bugs nor add features
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates, build changes
- **perf**: Performance improvements
- **ci**: CI/CD configuration changes

### Examples

#### Simple commit
```
fix: correct markdown formatting in prompt copy functionality
```

#### Commit with scope
```
feat(prompts): add new Jira ticket creation template
```

#### Multi-line commit with body
```
refactor: restructure prompt organization for better discoverability

- Move all prompt templates to /prompts directory
- Update navigation structure in app.mjs
- Add categories for different prompt types
```

#### Breaking change
```
feat!: change prompt template format to use YAML frontmatter

BREAKING CHANGE: All existing prompts must be updated to include
YAML frontmatter with title and category fields.
```

### Guidelines
1. Use present tense ("add feature" not "added feature")
2. Use imperative mood ("fix bug" not "fixes bug")
3. Don't capitalise the first letter of the description
4. Don't end the description with a period
5. Limit the first line to 72 characters
6. Reference issues and PRs in the footer when applicable

**Note**: The changelog should reflect these commit types in its categories (Added → feat, Fixed → fix, Changed → refactor/style, etc.)