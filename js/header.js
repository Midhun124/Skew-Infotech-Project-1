document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeIcon = '❌'; // Your close icon
  const menuIcon = '☰'; // Your menu icon
  let showMenuBar = false;
  let expandedMenu = null;

  function toggleMenu() {
    showMenuBar = !showMenuBar;
    mobileMenu.classList.toggle('show', showMenuBar);
    expandedMenu = null; // Reset expanded menu
    updateToggleButton();
    
    // Reset submenu state
    const submenu = document.querySelector('.news-list-item');
    const downArrow = document.querySelector('.news-down-arrow');
    const rightArrow = document.querySelector('.news-right-arrow');
    
    if (!showMenuBar) {
      submenu.style.display = 'none';
      downArrow.style.display = 'block';
      rightArrow.style.display = 'none';
    }
  }

  function updateToggleButton() {
    toggleButton.innerHTML = showMenuBar ? closeIcon : menuIcon;
  }

  function handleMenuClick(menu) {
    expandedMenu = expandedMenu === menu ? null : menu; // Toggle the expanded menu
    renderMobileMenu();
  }

  function renderMobileMenu() {
    mobileMenu.innerHTML = `
      <div class="mb-product-selection-div">
        <!-- Your mobile menu items here -->
        <ul class='mb-menu-list'>
          <div class="mb-menu-home-list menu-list">
            <p class="close-menu mb-menu-txt">Home</p>
          </div>
        </ul>
        <ul class='mb-menu-list'>
          <div class="mb-menu-about-list menu-list">
            <p class="close-menu mb-menu-txt">About</p>
          </div>
        </ul>
        <ul class='mb-menu-list'>
          <div class="mb-menu-cau-list menu-list">
            <p class="close-menu mb-menu-txt">Causes</p>
          </div>
        </ul>
        <ul class='mb-menu-list'>
          <div class="mb-menu-vol-list menu-list">
            <p class="close-menu mb-menu-txt">Volunteer</p>
          </div>
        </ul>
        <ul class='mb-menu-list'>
          <div class="mb-menu-news-list menu-list">
            <p class="close-menu mb-menu-txt">News</p>
            <span class='news-right-arrow right-arrow arrow news-toggler' style='display: none;'><i class="fa fa-angle-right"></i></span>
            <span class='news-down-arrow down-arrow arrow news-toggler'><i class="fa fa-angle-down"></i></span>
          </div>
          <div class='news-list-item' style="display: none;">
            <li class='mb-menu-list-item'><a href='#' class='close-menu nav-link'>Item 1</a></li>
            <li class='mb-menu-list-item'><a href='#' class='close-menu nav-link'>Item 2</a></li>
            <li class='mb-menu-list-item'><a href='#' class='close-menu nav-link'>Item 3</a></li>
          </div>
        </ul>
        <ul class='mb-menu-list'>
          <div class="mb-menu-contact-list menu-list">
            <p class="close-menu mb-menu-txt">Contact</p>
          </div>
          <div class='social-media'>
            <a class='facebook-link' href='#'><i class="fab fa-facebook-f"></i></a>
            <a class='instagram-link' href='#'><i class="fab fa-instagram"></i></a>
            <a class='whatsapp-link' href='#'><i class="fab fa-whatsapp"></i></a>
          </div>
        </ul>
        <ul class='mb-menu-list'>
          <div class="navbar-btn-cnt menu-list">
            <button class="donate-btn">Donate</button>
          </div>
        </ul>
      </div>
    `;
  }

  toggleButton.addEventListener('click', toggleMenu);

  // Event delegation for menu item clicks
  mobileMenu.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('close-menu')) {
      toggleMenu();
    }
    if (target.classList.contains('news-toggler')) {
      handleMenuClick('news');
    }
  });

  renderMobileMenu(); // Initial render
  
  // Add click event listener to the down arrow
  document.querySelector('.news-down-arrow').addEventListener('click', function() {
    // Show the menu and the right arrow, and hide the down arrow
    document.querySelector('.news-list-item').style.display = 'flex';
    document.querySelector('.news-right-arrow').style.display = 'block';
    document.querySelector('.news-down-arrow').style.display = 'none';
  });

  // Add click event listener to the right arrow
  document.querySelector('.news-right-arrow').addEventListener('click', function() {
      // Hide the menu and the right arrow, and show the down arrow
      document.querySelector('.news-list-item').style.display = 'none';
      document.querySelector('.news-right-arrow').style.display = 'none';
      document.querySelector('.news-down-arrow').style.display = 'block';
  });
});