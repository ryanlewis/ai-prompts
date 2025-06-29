export default function promptCopyData(Alpine) {
  Alpine.data('promptCopy', () => ({
    copied: false,
    
    init() {
      // Initialize the component when DOM is ready
      this.injectCopyButton();
    },
    
    injectCopyButton() {
      // Find all horizontal rules (hr elements) that mark the start of prompt content
      const hrElements = document.querySelectorAll('article hr');
      
      hrElements.forEach((hrElement, index) => {
        // Skip if this hr already has a copy button
        if (hrElement.nextElementSibling && hrElement.nextElementSibling.classList.contains('prompt-copy-btn')) {
          return;
        }
        
        // Create copy button
        const button = document.createElement('button');
        button.className = 'prompt-copy-btn toggle-btn';
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
          </svg>
          <span>Copy Prompt</span>
        `;
        button.setAttribute('data-prompt-index', index);
        
        // Add click handler
        button.addEventListener('click', (e) => {
          this.copyPromptContent(hrElement, button);
        });
        
        // Insert button after the horizontal rule
        hrElement.parentNode.insertBefore(button, hrElement.nextSibling);
      });
    },
    
    async copyPromptContent(hrElement, button) {
      try {
        // Collect all content after the hr element until end of article or next hr
        let contentElements = [];
        let currentElement = button.nextElementSibling; // Start after the button
        
        while (currentElement && currentElement.tagName !== 'HR') {
          // Skip button elements and copy-related elements
          if (!this.shouldSkipElement(currentElement)) {
            contentElements.push(currentElement);
          }
          currentElement = currentElement.nextElementSibling;
        }
        
        // Convert to markdown preserving formatting
        const markdownContent = this.convertToMarkdown(contentElements);
        
        // Copy to clipboard using modern Clipboard API
        await navigator.clipboard.writeText(markdownContent);
        
        // Update button state
        this.showCopiedState(button);
        
      } catch (err) {
        // Fallback for older browsers
        this.fallbackCopyToClipboard(hrElement, button);
      }
    },
    
    fallbackCopyToClipboard(hrElement, button) {
      try {
        // Collect all content after the hr element until end of article or next hr
        let contentElements = [];
        let currentElement = button.nextElementSibling; // Start after the button
        
        while (currentElement && currentElement.tagName !== 'HR') {
          // Skip button elements and copy-related elements
          if (!this.shouldSkipElement(currentElement)) {
            contentElements.push(currentElement);
          }
          currentElement = currentElement.nextElementSibling;
        }
        
        // Convert to markdown preserving formatting
        const markdownContent = this.convertToMarkdown(contentElements);
        
        // Create a temporary textarea
        const textarea = document.createElement('textarea');
        textarea.value = markdownContent;
        document.body.appendChild(textarea);
        
        // Select and copy
        textarea.select();
        document.execCommand('copy');
        
        // Clean up
        document.body.removeChild(textarea);
        
        // Update button state
        this.showCopiedState(button);
        
      } catch (err) {
        console.error('Failed to copy text: ', err);
        // Show error state
        this.showErrorState(button);
      }
    },
    
    shouldSkipElement(element) {
      // Skip button elements
      if (element.tagName === 'BUTTON') {
        return true;
      }
      
      // Skip elements with copy-related classes
      if (element.classList && (
        element.classList.contains('code-block__copy') ||
        element.classList.contains('prompt-copy-btn') ||
        element.classList.contains('copy-btn')
      )) {
        return true;
      }
      
      // Skip if the element contains only button children
      if (element.children.length === 1 && element.children[0].tagName === 'BUTTON') {
        return true;
      }
      
      return false;
    },
    
    convertToMarkdown(elements) {
      const markdown = elements.map(element => this.elementToMarkdown(element)).join('\n\n');
      
      // Normalize whitespace: replace multiple consecutive newlines with double newlines
      return markdown
        .replace(/\n{3,}/g, '\n\n')  // Replace 3+ newlines with 2
        .replace(/^\s+|\s+$/g, '')   // Trim leading/trailing whitespace
        .replace(/[ \t]+$/gm, '');   // Remove trailing spaces/tabs from lines
    },
    
    elementToMarkdown(element) {
      const tagName = element.tagName.toLowerCase();
      
      switch (tagName) {
        case 'h1':
          return `# ${element.textContent}`;
        case 'h2':
          return `## ${element.textContent}`;
        case 'h3':
          return `### ${element.textContent}`;
        case 'h4':
          return `#### ${element.textContent}`;
        case 'h5':
          return `##### ${element.textContent}`;
        case 'h6':
          return `###### ${element.textContent}`;
        
        case 'p':
          return this.processInlineElements(element);
        
        case 'ul':
          return this.processListItems(element, '- ');
        
        case 'ol':
          return this.processOrderedListItems(element);
        
        case 'pre':
          const codeElement = element.querySelector('code');
          if (codeElement) {
            const language = this.extractLanguageFromClass(codeElement.className);
            return '```' + language + '\n' + codeElement.textContent + '\n```';
          }
          return '```\n' + element.textContent + '\n```';
        
        case 'blockquote':
          return element.textContent.split('\n').map(line => `> ${line}`).join('\n');
        
        case 'div':
          // Handle div elements by processing their children, but skip if it's a code-block wrapper
          if (element.classList && element.classList.contains('code-block')) {
            // For code-block divs, extract just the pre/code content
            const preElement = element.querySelector('pre');
            if (preElement) {
              return this.elementToMarkdown(preElement);
            }
          }
          return this.processInlineElements(element);
        
        case 'button':
          // Skip button elements entirely
          return '';
        
        default:
          return this.processInlineElements(element);
      }
    },
    
    processInlineElements(element) {
      let result = '';
      
      for (const node of element.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
          result += node.textContent;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const tagName = node.tagName.toLowerCase();
          
          switch (tagName) {
            case 'strong':
            case 'b':
              result += `**${node.textContent}**`;
              break;
            case 'em':
            case 'i':
              result += `*${node.textContent}*`;
              break;
            case 'code':
              result += `\`${node.textContent}\``;
              break;
            case 'a':
              const href = node.getAttribute('href') || '';
              result += `[${node.textContent}](${href})`;
              break;
            case 'br':
              result += '\n';
              break;
            case 'button':
              // Skip button elements and their content
              break;
            case 'svg':
              // Skip SVG elements (often used in buttons)
              break;
            default:
              // Skip elements with copy-related classes
              if (node.classList && (
                node.classList.contains('code-block__copy') ||
                node.classList.contains('prompt-copy-btn') ||
                node.classList.contains('copy-btn')
              )) {
                break;
              }
              result += node.textContent;
          }
        }
      }
      
      return result;
    },
    
    processListItems(listElement, prefix) {
      const items = Array.from(listElement.querySelectorAll('li'));
      return items.map(item => prefix + this.processInlineElements(item)).join('\n');
    },
    
    processOrderedListItems(listElement) {
      const items = Array.from(listElement.querySelectorAll('li'));
      return items.map((item, index) => `${index + 1}. ${this.processInlineElements(item)}`).join('\n');
    },
    
    extractLanguageFromClass(className) {
      const match = className.match(/language-(\w+)/);
      return match ? match[1] : '';
    },
    
    showCopiedState(button) {
      // Store original content
      const originalHTML = button.innerHTML;
      
      // Update button to show success
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
        <span>Copied!</span>
      `;
      button.classList.add('success');
      
      // Reset after 2 seconds
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove('success');
      }, 2000);
    },
    
    showErrorState(button) {
      // Store original content
      const originalHTML = button.innerHTML;
      
      // Update button to show error
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span>Failed</span>
      `;
      button.classList.add('error');
      
      // Reset after 2 seconds
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove('error');
      }, 2000);
    }
  }));
}