# Obsidian Configuration

This repository is configured to work with both Obsidian (for note-taking) and Eleventy (for static site generation).

## File Exclusions

To keep Obsidian focused on content files only, the following are excluded from Obsidian's indexing:

### Excluded Patterns
- `.app/` - Eleventy build tooling and dependencies
- `_site/` - Generated static site output
- `*.njk` - Nunjucks template files
- `package*.json` - Node.js configuration files
- `app.mjs` - Site configuration
- `*.scss` - Sass stylesheets

### Configuration Methods

1. **File Ignore Plugin** (Recommended)
   - The "file-ignore" community plugin is configured in `plugins/file-ignore/data.json`
   - This provides the most comprehensive exclusion capabilities
   - To activate: Settings → Community plugins → Browse → Search "File Ignore" → Install

2. **Built-in Exclusion**
   - Basic patterns are also configured in `app.json` under `userIgnoreFilters`
   - This provides fallback exclusion if the plugin is not installed

3. **Manual Hiding**
   - Files/folders can be hidden by prefixing with a dot (e.g., `.app/`)
   - Obsidian naturally ignores dotfiles

## Effect

With these exclusions, Obsidian will only show and index:
- Markdown content files (`.md`)
- Images and assets in `public/`
- Documentation and prompt files

This keeps the Obsidian interface clean and focused on content creation.