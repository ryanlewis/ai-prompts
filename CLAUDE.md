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