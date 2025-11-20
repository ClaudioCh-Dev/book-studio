document.addEventListener('DOMContentLoaded', function() {
    const spinner = document.getElementById('spinner-overlay');
    
    // Show spinner on page load
    spinner.style.display = 'flex';

    window.addEventListener('load', function() {
        // Hide spinner when page is fully loaded
        spinner.style.display = 'none';
    });

    // Show spinner when navigating away
    window.addEventListener('beforeunload', function() {
        spinner.style.display = 'flex';
    });
});
