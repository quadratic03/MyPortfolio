document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleMode');
    const body = document.body;
  
    // Dark/Light Mode Toggle
    if (localStorage.getItem('darkMode') === 'true') {
      body.classList.add('dark-mode');
      toggleButton.textContent = '☀️';
    } else {
      body.classList.remove('dark-mode');
      toggleButton.textContent = '🌙';
    }
  
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDarkMode = body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkMode);
      toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
    });
  
    // Profile Dialog Handling
    const profilePicture = document.getElementById('profilePicture');
    const profileDialog = document.getElementById('profileDialog');
    const backButton = document.getElementById('backButton');
  
    profilePicture.addEventListener('click', () => {
      profileDialog.classList.add('active');
    });
  
    backButton.addEventListener('click', () => {
      profileDialog.classList.remove('active');
    });
  });