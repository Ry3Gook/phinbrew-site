document.addEventListener('DOMContentLoaded', function () {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (mobileToggle && dropdownContent) {
        mobileToggle.addEventListener('click', function () {
            dropdownContent.classList.toggle('active');
        });
    }
});