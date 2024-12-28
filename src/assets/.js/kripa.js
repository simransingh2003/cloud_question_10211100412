document.addEventListener('DOMContentLoaded', () => {

    // Function to handle dropdown toggle for mobile devices
    const handleDropdownToggle = (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const dropdown = event.target.nextElementSibling;

        // Close any other open dropdowns
        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content !== dropdown) {
                content.classList.remove('active');
            }
        });

        // Toggle the current dropdown
        dropdown.classList.toggle('active');
    };

    // Function to close dropdown when clicking outside
    const closeDropdownsOnOutsideClick = (event) => {
        if (!event.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.classList.remove('active');
            });
        }
    };

    // Attach event listeners for dropdowns
    document.querySelectorAll('.dropdown > a').forEach(item => {
        item.addEventListener('click', handleDropdownToggle);
    });

    // Add event listener for clicking outside of dropdown
    window.addEventListener('click', closeDropdownsOnOutsideClick);

    // Function to toggle product list visibility
    const toggleProductList = (event) => {
        const index = Array.from(event.target.parentNode.children).indexOf(event.target);
        const productsList = document.getElementById(`products${index + 1}`);
        productsList.classList.toggle('active');
    };

    // Attach event listeners to product buttons
    document.querySelectorAll(".show-products-btn").forEach(button => {
        button.addEventListener("click", toggleProductList);
    });

    // Profile dropdown toggle functionality
    const toggleProfileMenu = () => {
        const dropdown = document.getElementById('profile-dropdown');
        dropdown.classList.toggle('active');
    };

    // Profile menu toggle button event listener
    document.getElementById('profile-menu-toggle').addEventListener('click', toggleProfileMenu);

    // Close dropdown when clicking outside the profile menu
    window.addEventListener('click', (event) => {
        if (!event.target.closest('#profile-menu-toggle')) {
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });

});
