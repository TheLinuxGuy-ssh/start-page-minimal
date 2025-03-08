// script.js

// Function to manipulate the DOM for hover effects
export const initNavItems = () => {
    const navItems = document.querySelectorAll('.nav-item');
  
    // Helper function to toggle class for sibling elements
    const toggleSiblingClass = (items, index, offset, className, add) => {
      const sibling = items[index + offset];
      if (sibling) {
        sibling.classList.toggle(className, add);
      }
    };
  
    // Loop through nav items and add event listeners
    navItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('hover'); // Add .hover to current item
        // Toggle classes for siblings
        toggleSiblingClass(navItems, index, -1, 'sibling-close', true); // Previous sibling
        toggleSiblingClass(navItems, index, 1, 'sibling-close', true);  // Next sibling
        toggleSiblingClass(navItems, index, -2, 'sibling-far', true);   // Previous-previous sibling
        toggleSiblingClass(navItems, index, 2, 'sibling-far', true);    // Next-next sibling
      });
      item.addEventListener('mouseleave', () => {
        item.classList.remove('hover'); // Remove .hover from current item
        // Toggle classes for siblings
        toggleSiblingClass(navItems, index, -1, 'sibling-close', false); // Previous sibling
        toggleSiblingClass(navItems, index, 1, 'sibling-close', false);  // Next sibling
        toggleSiblingClass(navItems, index, -2, 'sibling-far', false);   // Previous-previous sibling
        toggleSiblingClass(navItems, index, 2, 'sibling-far', false);    // Next-next sibling
      });
    });
  };
  