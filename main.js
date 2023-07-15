function toggleDropdown(element) {
    var dropdownItems = element.querySelector(".dropdown-items-in-sidebar");
    var chevronIcon = element.querySelector(".for-changing-icon");
    
    if (dropdownItems.style.display === "" || dropdownItems.style.display === "none") {
      // Show dropdown and change icon
      dropdownItems.style.display = "block";
      chevronIcon.classList.remove("fa-chevron-down");
      chevronIcon.classList.add("fa-chevron-up");
      
      // Remove the class from other elements
      var allItems = document.querySelectorAll(".not-active-sidebar-li");
      allItems.forEach(function(item) {
        if (item !== element) {
          var otherDropdown = item.querySelector(".dropdown-items-in-sidebar");
          var otherChevronIcon = item.querySelector(".for-changing-icon");
          otherDropdown.style.display = "none";
          otherChevronIcon.classList.remove("fa-chevron-up");
          otherChevronIcon.classList.add("fa-chevron-down");
        }
      });
    } else {
      // Hide dropdown and change icon
      dropdownItems.style.display = "none";
      chevronIcon.classList.remove("fa-chevron-up");
      chevronIcon.classList.add("fa-chevron-down");
    }
  }