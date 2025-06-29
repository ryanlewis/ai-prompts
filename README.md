# AI Prompts

This repository contains an Obsidian notes vault with AI prompts and documentation, configured to generate a static website using [Eleventy](https://www.11ty.dev/) and the [eleventy-notes](https://github.com/rothsandro/eleventy-notes) starter template.

## Overview

This project combines the power of Obsidian for note-taking with Eleventy's static site generation capabilities, providing:

- **Local Editing**: Use Obsidian to edit and manage your notes locally
- **Static Site Output**: Automatically generate a beautiful, searchable website from your notes
- **Wikilinks Support**: Internal linking using `[[Note Name]]` syntax
- **Organised Content**: Separate sections for different types of content (prompts, documentation, etc.)
- **Version Control**: Full Git integration for tracking changes

## Project Structure

```
/
├── .app/                    # Eleventy-notes core application files
├── .plans/                  # Planning and setup documentation
├── prompts/                 # AI prompt collection
├── public/                  # Static assets (images, etc.)
├── _site/                   # Generated static site (git-ignored)
├── README.md               # This file (also serves as the site landing page)
└── [other notes].md        # Additional documentation and notes
```

## Quick Start

### Prerequisites

- Node.js 16+ and npm
- Git
- Obsidian (optional, for enhanced editing experience)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ryanlewis/ai-prompts.git
   cd ai-prompts
   ```

2. **Install dependencies**
   ```bash
   cd .app
   npm install
   cd ..
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **View your site**
   Open http://localhost:8080 in your browser

### Building for Production

```bash
npm run build
```

The static site will be generated in the `_site` directory.

## Configuration

### Site Settings

Edit `app.mjs` to customize:
- Site title and description
- Theme colors
- Sidebar navigation
- External links

### Content Organization

- **Main Notes**: Place markdown files in the root directory or organize in folders
- **Prompts**: Add AI prompts to the `prompts/` directory
- **Assets**: Store images and other static files in `public/`

## Features

### Wikilinks & Navigation
- Use `[[Note Name]]` to link between notes
- Automatic backlinks show which notes reference the current page
- Hierarchical sidebar navigation with collapsible sections

### Search
- Full-text search across all notes
- Instant results as you type
- Works offline once the site is loaded

### Themes
- Multiple color schemes available
- Light/dark mode support
- Responsive design for mobile devices

## Writing Notes

### Markdown Support
- Standard Markdown syntax
- Code blocks with syntax highlighting
- Tables, lists, and blockquotes
- Task lists with checkboxes

### Frontmatter Options
```yaml
---
title: Custom Page Title
tags: [tag1, tag2]
date: 2024-01-01
---
```

### Special Features
- Callout blocks for important information
- Mermaid diagram support
- Math equations with KaTeX

## Deployment

The generated site can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

See `.plans/00-SETUP.md` for detailed deployment instructions.

## Development

### Available Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build production site
- `npm run clean` - Clean build artifacts

### Customization

- **Styles**: Add custom CSS to `public/custom.css`
- **JavaScript**: Add functionality in `public/custom.js`
- **Templates**: Modify layouts in `.app/_layouts/`

## Troubleshooting

### Common Issues

1. **Build Errors**: Ensure Node.js 16+ is installed
2. **Missing Notes**: Check file paths and wikilink syntax
3. **Search Not Working**: Only available in production build

For detailed troubleshooting, see `.plans/00-SETUP.md`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project uses the [eleventy-notes](https://github.com/rothsandro/eleventy-notes) template by Sandro Roth, which is licensed under the MIT License. Your content remains your own.

## Resources

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Eleventy Notes Documentation](https://eleventy-notes.sandroroth.com)
- [Obsidian](https://obsidian.md/)
- [Markdown Guide](https://www.markdownguide.org/)