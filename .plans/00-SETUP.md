# Eleventy Notes Setup Plan

This document provides a detailed, step-by-step plan to convert your existing Obsidian notes vault into a static website using Eleventy with the [eleventy-notes](https://github.com/rothsandro/eleventy-notes) starter template.

## Overview

The eleventy-notes template provides a powerful static site generator with features like wikilinks, backlinks, search, and customizable themes. This plan will integrate it with your existing repository while preserving your content structure.

## Prerequisites

- Node.js 16+ and npm installed
- Git repository with your Obsidian vault
- Basic familiarity with command line operations

## Setup Steps

### 1. Download the Eleventy Notes Template

```bash
# Create a temporary directory to download the template
mkdir temp-eleventy-notes
cd temp-eleventy-notes

# Clone the eleventy-notes repository
git clone https://github.com/rothsandro/eleventy-notes.git .

# Return to your project root
cd ..
```

### 2. Copy Required Files and Directories

Execute these commands from your repository root:

```bash
# Copy the core application directory
cp -r temp-eleventy-notes/.app .

# Copy essential root files
cp temp-eleventy-notes/n.njk .
cp temp-eleventy-notes/app.mjs .

# Create public directory if it doesn't exist
mkdir -p public

# Clean up temporary directory
rm -rf temp-eleventy-notes
```

### 3. Install Dependencies

```bash
# Navigate to the .app directory
cd .app

# Install all required dependencies
npm install

# Return to project root
cd ..
```

### 4. Configure Your Site

Edit the `app.mjs` file in your repository root with your site configuration:

```javascript
export default {
  title: "AI Prompts by @ryanlewis",
  description: "A collection of AI prompts and documentation",
  lang: "en",
  theme: {
    color: "sky" // Options: sky, mint, purple, red, rose
  },
  editThisNote: {
    url: "https://github.com/yourusername/yourrepo/edit/main/{{file}}"
  },
  sidebar: {
    links: [
      {
        url: "https://github.com/yourusername/yourrepo",
        label: "GitHub",
        icon: '<svg>...</svg>' // Optional icon
      }
    ],
    sections: [
      {
        label: "Main",
        groups: [
          {
            query: '{ .url === "/" }',
            label: "Home"
          },
          {
            query: '*',
            label: "All Notes",
            tree: true
          }
        ]
      },
      {
        label: "Prompts",
        groups: [
          {
            query: '/^\/prompts\//',
            label: "AI Prompts",
            tree: true
          }
        ]
      }
    ]
  }
}
```

### 5. Configure Landing Page

Since you want `README.md` to be your landing page, you need to create a special index file that references it:

Create `index.md` in your repository root:

```markdown
---
layout: default
eleventyComputed:
  eleventyNavigation:
    key: Home
    order: 0
---

{% include "./README.md" %}
```

### 6. Update .gitignore

Add these entries to your `.gitignore`:

```
# Eleventy output
_site/
.cache/

# Node modules
node_modules/
.app/node_modules/

# Build artifacts
.app/.parcel-cache/
.app/dist/

# OS files
.DS_Store
Thumbs.db
```

### 7. Create Package.json Scripts

Create a `package.json` in your repository root for convenience:

```json
{
  "name": "ai-prompts-site",
  "version": "1.0.0",
  "description": "AI Prompts by @ryanlewis - Static site",
  "scripts": {
    "start": "cd .app && npm start",
    "build": "cd .app && npm run build",
    "serve": "cd .app && npm start",
    "clean": "rm -rf _site .cache"
  },
  "private": true
}
```

### 8. Configure Eleventy for Your Structure

Create `.eleventy.js` in your repository root to handle custom configurations:

```javascript
module.exports = function(eleventyConfig) {
  // Pass through your existing assets
  eleventyConfig.addPassthroughCopy("public");
  
  // Configure prompts directory
  eleventyConfig.addCollection("prompts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("prompts/**/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: ".app/_includes",
      layouts: ".app/_layouts",
      data: ".app/_data"
    }
  };
};
```

## Testing Your Site

### Development Server

```bash
# Using npm scripts from root
npm start

# Or directly
cd .app && npm start
```

Your site will be available at `http://localhost:8080`

### Build for Production

```bash
# Using npm scripts from root
npm run build

# Or directly
cd .app && npm run build
```

The built site will be in the `_site` directory.

## Manual Actions Required

1. **Review and Update Links**: Check your markdown files for any absolute paths or Obsidian-specific syntax that may need adjustment.

2. **Configure GitHub Repository URL**: Update the `editThisNote.url` in `app.mjs` with your actual GitHub repository URL.

3. **Customize Theme**: Choose a color scheme in `app.mjs` that matches your preferences.

4. **Add Custom Styles** (Optional): Create custom CSS in `public/custom.css` and reference it if needed.

5. **Configure Deployment**: Set up deployment to your preferred platform (Netlify, Vercel, GitHub Pages, etc.).

## Common Pitfalls and Solutions

### 1. Wikilinks Not Working
- **Issue**: Obsidian uses `[[Note Name]]` syntax
- **Solution**: Eleventy-notes supports this syntax natively, but ensure your note titles match exactly (case-sensitive)

### 2. Images Not Displaying
- **Issue**: Image paths may be relative to Obsidian vault
- **Solution**: Place images in the `public` directory and update paths to `/image-name.jpg`

### 3. Build Errors with Special Characters
- **Issue**: Special characters in filenames
- **Solution**: Rename files to use URL-safe characters (letters, numbers, hyphens, underscores)

### 4. Missing Dependencies
- **Issue**: npm install fails
- **Solution**: Ensure Node.js 16+ is installed, delete `node_modules` and `package-lock.json`, then retry

### 5. Sidebar Not Showing All Notes
- **Issue**: Query syntax in sidebar configuration
- **Solution**: Use `'*'` to show all notes or adjust regex patterns for specific folders

### 6. Search Not Working
- **Issue**: Pagefind not indexing properly
- **Solution**: Ensure build completes successfully; search only works in production build

## File Structure After Setup

Your repository will have this structure:

```
/
├── .app/                    # Eleventy-notes core files
├── .plans/                  # Planning documents
│   └── 00-SETUP.md         # This file
├── prompts/                 # Your AI prompts
├── public/                  # Static assets
├── _site/                   # Generated site (git-ignored)
├── .eleventy.js            # Custom Eleventy config
├── .gitignore              # Updated ignore file
├── app.mjs                 # Site configuration
├── index.md                # Landing page wrapper
├── n.njk                   # Note template
├── package.json            # Convenience scripts
├── README.md               # Your actual landing page content
└── [your other notes].md   # Your existing notes
```

## Next Steps

1. Follow the setup steps sequentially
2. Test locally with `npm start`
3. Customize the configuration to your needs
4. Deploy to your preferred hosting platform

## Additional Resources

- [Eleventy Notes Documentation](https://eleventy-notes.sandroroth.com)
- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [GitHub Repository](https://github.com/rothsandro/eleventy-notes)

## Troubleshooting

If you encounter issues:

1. Check the console for error messages
2. Verify all files were copied correctly
3. Ensure Node.js version is 16+
4. Review the [eleventy-notes issues](https://github.com/rothsandro/eleventy-notes/issues) for similar problems
5. Clear cache with `npm run clean` and rebuild