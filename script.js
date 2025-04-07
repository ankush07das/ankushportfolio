// ===== Resume Section Toggling =====
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and details
        resumeBtns.forEach(b => b.classList.remove('active'));
        resumeDetails.forEach(detail => detail.classList.remove('active'));

        // Add active class to the clicked button and its corresponding detail
        btn.classList.add('active');
        resumeDetails[idx].classList.add('active');
    });
});

// ===== Responsive Navbar Toggle =====
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');

if (menuIcon && navBar) {
    menuIcon.addEventListener('click', () => {
        // Toggle menu icon animation (switch to 'X')
        menuIcon.classList.toggle('bx-x');

        // Toggle navbar visibility
        navBar.classList.toggle('active');
    });

    // Auto close navbar when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!navBar.contains(e.target) && !menuIcon.contains(e.target)) {
            navBar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
}

// ===== Page Load Bars Animation =====
window.addEventListener("load", () => {
    const barsBox = document.querySelector(".bars-box");
    if (barsBox) {
        setTimeout(() => {
            barsBox.classList.add("reveal");
            setTimeout(() => {
                barsBox.style.display = "none";
            }, 1500);
        }, 1500);
    }
});