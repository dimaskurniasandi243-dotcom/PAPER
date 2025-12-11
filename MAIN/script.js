// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar li');

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            // Navigation is handled by <a> tags
        });
    });

    const notificationSeeAll = document.querySelector('.notifications h3 span');
    if (notificationSeeAll) {
        notificationSeeAll.addEventListener('click', () => {
            alert('Showing all notifications...');
        });
    }

    const createNewBtn = document.querySelector('.create-new');
    createNewBtn.addEventListener('click', () => {
        alert('Creating new item...');
    });

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
        } else {
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
        }
    });

    // Hide loader after content is loaded
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); // Match transition duration
    });

    // Example functionality for buttons
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Viewing item...');
        });
    });

    const editBtns = document.querySelectorAll('.edit-btn');
    editBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Editing item...');
        });
    });

    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete?')) {
                alert('Item deleted.');
            }
        });
    });
});