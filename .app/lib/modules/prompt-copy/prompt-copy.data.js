export default function promptCopyData(Alpine) {
  Alpine.data('promptCopy', () => ({
    copied: false,
    
    init() {
      // Initialize the component when DOM is ready
      this.injectCopyButton();
    },
    
    injectCopyButton() {
      // Find all prompt-content elements
      const promptElements = document.querySelectorAll('.prompt-content');
      
      promptElements.forEach((promptElement, index) => {
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
          this.copyPromptContent(promptElement, button);
        });
        
        // Insert button before the prompt content
        promptElement.parentNode.insertBefore(button, promptElement);
      });
    },
    
    async copyPromptContent(promptElement, button) {
      try {
        // Get the text content of the prompt, preserving formatting
        const textContent = promptElement.innerText || promptElement.textContent;
        
        // Copy to clipboard using modern Clipboard API
        await navigator.clipboard.writeText(textContent);
        
        // Update button state
        this.showCopiedState(button);
        
      } catch (err) {
        // Fallback for older browsers
        this.fallbackCopyToClipboard(promptElement, button);
      }
    },
    
    fallbackCopyToClipboard(promptElement, button) {
      try {
        // Create a temporary textarea
        const textarea = document.createElement('textarea');
        textarea.value = promptElement.innerText || promptElement.textContent;
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