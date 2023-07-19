// For DropDowns
function togglerr(element) {
  const dropdownItems = element.querySelector(".dropdown-items-in-sidebar");
  const chevronIcon = element.querySelector(".for-changing-icon");

  if (dropdownItems.style.display === "" || dropdownItems.style.display === "none") {
    // showing dropdwon and changing icons
    dropdownItems.style.display = "block";
    chevronIcon.classList.remove("fa-chevron-down");
    chevronIcon.classList.add("fa-chevron-up");

    // Removiing the class from other elements
    const allItems = document.querySelectorAll(".not-active-sidebar-li");
    allItems.forEach(function (item) {
      if (item !== element) {
        var otherDropdown = item.querySelector(".dropdown-items-in-sidebar");
        var otherChevronIcon = item.querySelector(".for-changing-icon");
        otherDropdown.style.display = "none";
        otherChevronIcon.classList.remove("fa-chevron-up");
        otherChevronIcon.classList.add("fa-chevron-down");
      }
    });
  } else {
    // Hides dropdown and change icon
    dropdownItems.style.display = "none";
    chevronIcon.classList.remove("fa-chevron-up");
    chevronIcon.classList.add("fa-chevron-down");
  }
}

// For Mobile Header
const mobileHeaderBody = document.querySelector(".sidebar-container");
const overlayForMobiles = document.querySelector("#overlayForMobile");
const dashboardMainContainer = document.querySelector(".dashboard-container")
function mobileHeaderOpen(element) {
  if (window.innerWidth > 768 && window.innerWidth <= 960) {
    mobileHeaderBody.classList.add("mobile-header-show");
    overlayForMobiles.classList.add("overlay-for-tab-header");
    dashboardMainContainer.classList.add("Forhiding");
    console.log(dashboardMainContainer.offsetHeight)
    overlayForMobiles.addEventListener("click", () => {
    mobileHeaderBody.classList.remove("mobile-header-show");
    overlayForMobiles.classList.remove("overlay-for-tab-header");
    mobileHeaderBody.style.height = "dashboardMainContainer.offsetHeight"
    console.log("overlay function")
  })
  }else if (window.innerWidth <= 960) {
    mobileHeaderBody.classList.add("mobile-header-show");
    overlayForMobiles.classList.add("overlay-for-tab-header");
    dashboardMainContainer.classList.add("Forhiding");
  }

}
function mobileHeaderClose(element) {
    mobileHeaderBody.classList.remove("mobile-header-show");
    overlayForMobiles.classList.remove("overlay-for-tab-header");
    dashboardMainContainer.classList.remove("Forhiding");
    console.log("close")
}