// toggle between dark and light theme
function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-theme');
    
    // Update button text based on current theme
    if (body.classList.contains('dark-theme')) {
        themeButton.textContent = '☀️ Light Mode';
    } else {
        themeButton.textContent = '🌙 Dark Mode';
    }
}