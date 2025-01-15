document.querySelector('.sidebar-toggle button').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('collapsed');
  });
  // Function to adjust page scaling based on screen width
function adjustPageScale() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth >= 992 && screenWidth <= 1600) {
      document.body.style.transform = 'scale(0.9)';
      document.body.style.transformOrigin = 'top left';
    } else if (screenWidth >= 700 && screenWidth <= 767) {
      document.body.style.transform = 'scale(0.8)';
      document.body.style.transformOrigin = 'top left';
    } else if (screenWidth >= 600 && screenWidth < 700) {
      document.body.style.transform = 'scale(0.75)';
      document.body.style.transformOrigin = 'top left';
    } else if (screenWidth <= 600) {
      document.body.style.transform = 'scale(0.5)';
      document.body.style.transformOrigin = 'top left';
    } else {
      // Reset if screen is larger than 1600px or not within the specified ranges
      document.body.style.transform = 'scale(1)';
    }
  }
  
  // Call the function on page load
  window.addEventListener('load', adjustPageScale);
  
  // Also call the function when resizing the window
  window.addEventListener('resize', adjustPageScale);
  