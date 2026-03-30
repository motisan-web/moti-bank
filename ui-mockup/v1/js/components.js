/**
 * Component Loader
 * Loads shared HTML components (bottom-nav, etc.) via fetch
 *
 * Usage in HTML:
 *   <div data-component="bottom-nav" data-active="home"></div>
 *
 * data-component: component filename (without .html)
 * data-active: (optional) active tab key for navigation highlighting
 */

async function loadComponents() {
  const basePath = '/ui-mockup/v1/components/';
  const slots = document.querySelectorAll('[data-component]');

  for (const slot of slots) {
    const name = slot.getAttribute('data-component');
    const activeTab = slot.getAttribute('data-active');

    try {
      const res = await fetch(basePath + name + '.html');
      if (!res.ok) continue;
      const html = await res.text();
      slot.innerHTML = html;

      // Set active state for navigation
      if (activeTab) {
        const activeItem = slot.querySelector(`[data-nav="${activeTab}"]`);
        if (activeItem) {
          activeItem.classList.add('active');
        }
      }

      // Re-apply theme labels inside loaded component
      if (typeof applyTheme === 'function') {
        applyTheme();
      }
    } catch (e) {
      console.warn(`Failed to load component: ${name}`, e);
    }
  }
}

document.addEventListener('DOMContentLoaded', loadComponents);
