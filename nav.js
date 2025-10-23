// Function to toggle dropdown menu visibility
function toggleMenu() {
    var dropdownList = document.getElementById("Dropdown");
    dropdownList.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.icon')) {
        var dropdowns = document.getElementsByClassName("dropdown-list");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}