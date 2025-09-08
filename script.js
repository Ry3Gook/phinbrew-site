// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }
});

// Fallback: Hide preloader after 5 seconds
setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }
}, 5000);

// Dropdown Toggle for Mobile
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault(); // Prevent navigating to main link on mobile
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});