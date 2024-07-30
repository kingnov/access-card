// JavaScript can be added for additional functionality if required
document.querySelector('.copy-link-button').addEventListener('click', function() {
    navigator.clipboard.writeText('Link copied to clipboard!');
    alert('Link copied to clipboard!');
});
