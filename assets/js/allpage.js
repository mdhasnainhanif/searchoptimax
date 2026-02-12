
window.common = {
  routes: {
    thankyou: "/thank-you",
  }
};

// Handle the menu toggle
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const hamburgerIcon = menuToggle.querySelector('i'); // Get the icon inside the menuToggle

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('show'); // Toggle the menu visibility

  document.body.classList.toggle('menu-open', menu.classList.contains('show'));

  // Toggle the hamburger and close icon
  if (menu.classList.contains('show')) {
    hamburgerIcon.classList.remove('fa-bars'); // Remove the hamburger icon
    hamburgerIcon.classList.add('fa-times');  // Add the close icon
  }
  else {
    hamburgerIcon.classList.remove('fa-times'); // Remove the close icon
    hamburgerIcon.classList.add('fa-bars');     // Add the hamburger icon back
  }
});

// Change navbar background color on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.mobile-navbar');
  // Check if the page has scrolled down by more than 50px
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled'); // Add 'scrolled' class to the navbar
  } else {
    navbar.classList.remove('scrolled'); // Remove 'scrolled' class when at the top
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll('.dropdownBtn');

  dropdownButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const dropdownToggle = this.closest('.dropdownToggle');
      const dropdownMenu = dropdownToggle.querySelector('.mobileDropdownUl');

      // Close all other dropdowns and remove 'open' class
      document.querySelectorAll('.mobileDropdownUl').forEach(menu => {
        if (menu !== dropdownMenu) {
          menu.classList.add('d-none');
        }
      });
      document.querySelectorAll('.dropdownBtn').forEach(btn => {
        if (btn !== this) {
          btn.classList.remove('open');
        }
      });

      // Toggle the current dropdown
      dropdownMenu.classList.toggle('d-none');
      this.classList.toggle('open');
    });
  });
});


// Change navbar background color on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.mobile-navbar');
  // Check if the page has scrolled down by more than 50px
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled'); // Add 'scrolled' class to the navbar
  } else {
    navbar.classList.remove('scrolled'); // Remove 'scrolled' class when at the top
  }
});

// Get the button
const scrollButton = document.getElementById("scrollButton");

// When the user scrolls the page, execute the function
window.onscroll = function () {
  // Check if the page is scrolled more than 200px
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollButton.style.display = "block";  // Show the button
  } else {
    scrollButton.style.display = "none";   // Hide the button
  }
};

// When the button is clicked, scroll the page back to the top
scrollButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('img[src^="assets/images/"]');

  images.forEach(function (img) {
    var currentSrc = img.getAttribute('src');
    var newSrc = '/' + currentSrc;
    img.setAttribute('src', newSrc);
  });
});

jQuery(document).ready(function () {
  vert_tabs();
});

jQuery(window).resize(function () {
  if (jQuery('.vertical-tabs').innerWidth() > 608) {
    if (jQuery('div.selected').length) {
    } else {
      jQuery('div.box:first').addClass('selected');
    }
  }
});

function vert_tabs() {
  jQuery('ul.checklist-select li').click(function () {
    var selectID = jQuery(this).attr('id');
    jQuery('ul.checklist-select li').removeClass('active');
    jQuery(this).addClass('active');
    jQuery('div.box').removeClass('selected');
    jQuery('.' + selectID + '-box').addClass('selected');
  });
}


jQuery(document).ready(function () {
  // When the arrow is clicked
  jQuery('.toggle-arrow').click(function () {
    var $hiddenContent = jQuery(this).closest('.hide-show-content').find('.hidden-content');

    // Toggle the visibility of the hidden content
    $hiddenContent.toggle();

    // Toggle the arrow icon between right and down
    jQuery(this).toggleClass('fa-angle-right fa-angle-down');
  });
});

const progressValue = 58; // Set the progress value (0�100)
const circle = document.getElementById('progress-circle');
const progressText = document.getElementById('progress-value');

// Determine the color based on the value
var color;
if (progressValue < 34) {
  color = 'black';
}
else if (progressValue < 67) {
  color = 'black';
}
else {
  color = 'black';
}

// Update the gradient and progress value dynamically
circle.style.background = `conic-gradient(
  ${color} 0deg,
  ${color} ${progressValue * 3.6}deg,
  #e0e0e0 ${progressValue * 3.6}deg,
  #e0e0e0 360deg
)`;
progressText.style.color = color;
progressText.textContent = `${progressValue}%`;


const lcpTime = 2.3; // LCP value in seconds
const progressMetricsBar = document.getElementById('progress-metrics-bar');
const progressMetricsValue = document.getElementById('progress-metrics-value');

// Define thresholds (Green: 0-2.5s, Orange: 2.5-4s, Red: 4s+)
const thresholds = {
  green: 2.5,
  orange: 4.0,
};

let progressPercentage = 0;
var color = '';

if (lcpTime <= thresholds.green) {
  progressPercentage = (lcpTime / thresholds.green) * 30; // Map to green range
  color = 'green';
} else if (lcpTime <= thresholds.orange) {
  progressPercentage = 33 + ((lcpTime - thresholds.green) / (thresholds.orange - thresholds.green)) * 30; // Map to orange range
  color = 'orange';
} else {
  progressPercentage = 66 + ((lcpTime - thresholds.orange) / (6 - thresholds.orange)) * 34; // Map to red range
  color = 'red';
}

// Update the progress bar width and color
progressMetricsBar.style.width = `${progressPercentage}%`;
progressMetricsBar.style.background = color;

// Update the value display
progressMetricsValue.textContent = `${lcpTime}s`;
progressMetricsValue.style.color = color;

jQuery(document).ready(function ($) {
  var header = jQuery('.header');
  var lastScrollTop = 0; // Store the last scroll position

  jQuery(window).scroll(function () {
    var currentScroll = jQuery(this).scrollTop(); // Get current scroll position

    if (currentScroll > 100) {
      // Add class when scroll position is greater than 100px
      header.addClass("shrink-nav");
    } else {
      // Remove class when scroll position is less than or equal to 100px
      header.removeClass("shrink-nav");
    }

    // Update last scroll position for the next scroll event
    lastScrollTop = currentScroll;
  });
});


jQuery(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  const processArea = jQuery(document).find("#process-area");

  if (processArea.length) {
    setTimeout(function () {
      const processAreaList = jQuery(processArea).find("> li");

      if (processAreaList.length) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: jQuery(processArea),
            start: "top center",
            end: "top center",
            toggleActions: "play none none none",
          },
        });

        processAreaList.each(function (index, element) {
          const img = jQuery(element).find("> img");
          const processText = jQuery(element).find(".process-text");
          const paths = jQuery(element).find("svg");

          tl.fromTo(img, { scale: 0 }, { scale: 1, duration: 0.5 }).fromTo(
            processText,
            { backgroundPosition: "100%" },
            { backgroundPosition: "0%", duration: 0.5 }
          );

          if (jQuery(window).width() > 767) {
            tl.fromTo(
              paths,
              { strokeDashoffset: 500 },
              { strokeDashoffset: 0, duration: 1 }
            );
          }
        });
      }
    }, 2000);
  }
});

jQuery(document).ready(function () {
  // Close the modal when the cross icon is clicked
  jQuery('#crossarrow').on('click', function () {

    jQuery('#salesinquirymodel').modal('hide');  // Bootstrap method to hide the modal
  });
  jQuery('#crossarrow a').on('click', function () {

    jQuery('#salesinquirymodel').modal('hide');  // Bootstrap method to hide the modal
  });
});

var phoneInputs = document.querySelectorAll(".phone-number");
phoneInputs.forEach(function (phoneInput) {
  window.intlTelInput(phoneInput, {
    initialCountry: "auto",
    geoIpLookup: function (callback) {
      jQuery.get("https://ipinfo.io", function () { }, "jsonp").always(function (
        resp
      ) {
        var countryCode = resp && resp.country ? resp.country : "";
        callback(countryCode);
      });
    },
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/23.0.7/js/utils.min.js",
  });
});

var swiper = new Swiper('.mySwiper.how-it-work-swiper', {
  loop: false,  // If you want the slider to loop, set it to true
  spaceBetween: 30,
  autoplay: {
    delay: 3000, // 3 seconds for autoplay
    disableOnInteraction: false, // Keeps autoplay running after user interactions
  },
  speed: 2000, // Slide movement speed in milliseconds

  // Pagination (this remains disabled based on your previous request)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,  // Allows users to click on the pagination bullets to navigate
  },

  // Navigation arrows (enabled)
  navigation: {
    nextEl: '.swiper-button-next',  // Class for the "Next" button
    prevEl: '.swiper-button-prev',  // Class for the "Previous" button
  },

  // Scrollbar (not required, so set to false)
  scrollbar: {
    el: '.swiper-scrollbar',  // Make sure the scrollbar is correctly set
    draggable: true,  // Makes the scrollbar draggable (optional)
  },

  // Breakpoints for different screen sizes
  breakpoints: {
    // Desktop view (1024px and above)
    1024: {
      slidesPerView: 4,  // Show 4 slides
    },
    // iPad Pro (portrait)
    768: {
      slidesPerView: 3,  // Show 3 slides
    },
    // iPad (portrait)
    480: {
      slidesPerView: 2,  // Show 2 slides
    },
    // Mobile view (320px and below)
    320: {
      slidesPerView: 1,  // Show 1 slide
    },
  },
});




var swiper = new Swiper('.mySwiper.industries-slide', {
  loop: false,  // If you want the slider to loop, set it to true
  spaceBetween: 30,
  autoplay: {
    delay: 3000, // 3 seconds for autoplay
    disableOnInteraction: false, // Keeps autoplay running after user interactions
  },
  speed: 2000, // Slide movement speed in milliseconds

  // Enable Pagination
  pagination: {
    el: '.swiper-pagination',  // Set the pagination container
    clickable: true,  // Allows users to click on the pagination bullets to navigate
  },

  // Disable Navigation arrows by removing the navigation property or setting it to false
  navigation: false,  // Disable navigation arrows

  // Scrollbar (not required, so set to false)
  scrollbar: {
    el: '.swiper-scrollbar',  // Make sure the scrollbar is correctly set
    draggable: true,  // Makes the scrollbar draggable (optional)
  },

  // Breakpoints for different screen sizes
  breakpoints: {
    // Desktop view (1024px and above)
    1024: {
      slidesPerView: 5,  // Show 5 slides
    },
    // iPad Pro (portrait)
    768: {
      slidesPerView: 3,  // Show 3 slides
    },
    // iPad (portrait)
    480: {
      slidesPerView: 2,  // Show 2 slides
    },
    // Mobile view (320px and below)
    320: {
      slidesPerView: 2,  // Show 1 slide
    },
  },
});

// Initialize hero brand slider (same as seo.html)
var swiper = new Swiper(".mySwiper.hero", {
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: true
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});


jQuery(document).ready(function () {
  // Open the first item by default
  jQuery('.strategy-accordion .accordion-item').first().find('.accordion-body').addClass('show').slideDown();
  jQuery('.strategy-accordion .accordion-item').first().find('.accordion-header').addClass('active');

  jQuery('.strategy-accordion .accordion-item .accordion-header').click(function () {
    var jQuerythis = jQuery(this);
    var jQuerybody = jQuerythis.next('.strategy-accordion .accordion-item .accordion-body');

    // If the body is already open, close it smoothly
    if (jQuerybody.hasClass('show')) {
      // Slide it up smoothly
      jQuerybody.removeClass('show').slideUp();
      jQuerythis.removeClass('active');
    } else {
      // Close all other accordion items first
      jQuery('.strategy-accordion .accordion-item .accordion-body').removeClass('show').slideUp();
      jQuery('.strategy-accordion .accordion-item .accordion-header').removeClass('active');

      // Open the clicked accordion item
      jQuerybody.addClass('show').slideDown();
      jQuerythis.addClass('active');
    }
  });
});


// Scroller Script - Improved with better detection
jQuery(document).ready(function () {
  if (document.querySelectorAll(".scroller-section").length > 0) {
    const scrollerSections = document.querySelectorAll(".scroller-section");
    
    scrollerSections.forEach(function(scrollerSection) {
      const sections = scrollerSection.querySelectorAll(".scroller-item");
      const links = scrollerSection.querySelectorAll(".scroller-sticky .scroller-list a");
      
      if (sections.length === 0 || links.length === 0) return;
      
      // Function to update active link based on visible section
      function updateActiveLink() {
        const windowHeight = window.innerHeight;
        const buffer = windowHeight / 2;
        let currentSection = null;
        let currentSectionId = "";
        
        const lastSection = sections[sections.length - 1];
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const isNearPageBottom = (windowHeight + scrollPosition) >= (documentHeight - 200);
        
        // First, check if we're near bottom and last section is visible
        if (isNearPageBottom && lastSection) {
          const lastRect = lastSection.getBoundingClientRect();
          if (lastRect.top < windowHeight && lastRect.bottom > 0) {
            currentSection = lastSection;
            currentSectionId = lastSection.getAttribute("id");
          }
        }
        
        // If not at bottom, use standard detection
        if (!currentSection) {
          let bestMatch = null;
          let bestDistance = Infinity;
          
          sections.forEach(function(section) {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;
            const sectionCenter = rect.top + (rect.height / 2);
            const viewportCenter = windowHeight / 2;
            
            // Check if section is in the viewport center area
            if (sectionTop < windowHeight - buffer && sectionBottom > buffer) {
              // Calculate distance from viewport center
              const distanceFromCenter = Math.abs(viewportCenter - sectionCenter);
              
              // Choose the section closest to center
              if (distanceFromCenter < bestDistance) {
                bestDistance = distanceFromCenter;
                bestMatch = section;
              }
            }
          });
          
          if (bestMatch) {
            currentSection = bestMatch;
            currentSectionId = bestMatch.getAttribute("id");
          }
        }
        
        // Update active link
        if (currentSectionId) {
          // Remove active class from all links
          links.forEach(function(link) {
            link.classList.remove("active");
          });
          
          // Add active class to corresponding link
          links.forEach(function(link) {
            const href = link.getAttribute("href");
            if (href) {
              // Handle both #id and #web-id formats
              const hrefId = href.replace('#', '');
              if (hrefId === currentSectionId || href.endsWith(currentSectionId)) {
                link.classList.add("active");
              }
            }
          });
        }
      }
      
      // Use scroll event for real-time updates
      let scrollTimeout;
      function handleScroll() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
          updateActiveLink();
        }, 10);
      }
      
      // Use both requestAnimationFrame and timeout for better coverage
      let rafId = null;
      function handleScrollRAF() {
        if (rafId === null) {
          rafId = requestAnimationFrame(function() {
            updateActiveLink();
            rafId = null;
          });
        }
      }
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('scroll', handleScrollRAF, { passive: true });
      window.addEventListener('resize', function() {
        clearTimeout(scrollTimeout);
        updateActiveLink();
      });
      
      // Handle hash on page load - directly activate the hash section
      function handleHashScroll() {
        if (window.location.hash) {
          const hashId = window.location.hash.replace('#', '');
          const targetSection = document.getElementById(hashId);
          if (targetSection) {
            // Directly activate the link for this hash
            links.forEach(function(link) {
              link.classList.remove("active");
              const href = link.getAttribute("href");
              if (href && (href === "#" + hashId || href.endsWith(hashId))) {
                link.classList.add("active");
              }
            });
            
            // Wait for browser's native scroll to complete, then update
            setTimeout(function() {
              updateActiveLink();
              // Also update after a bit more time to ensure scroll is complete
              setTimeout(updateActiveLink, 300);
            }, 600);
            return true;
          }
        }
        return false;
      }
      
      // Try to handle hash immediately
      if (!handleHashScroll()) {
        // If no hash, do initial update
        setTimeout(function() {
          updateActiveLink();
        }, 100);
        // Also update after page is fully loaded
        setTimeout(function() {
          updateActiveLink();
        }, 500);
      }
      
      // Additional check on load to catch last section
      window.addEventListener('load', function() {
        setTimeout(updateActiveLink, 200);
      });
      
      // Also listen for hash changes
      window.addEventListener('hashchange', function() {
        const hashId = window.location.hash.replace('#', '');
        const targetSection = document.getElementById(hashId);
        if (targetSection) {
          // Directly activate
          links.forEach(function(link) {
            link.classList.remove("active");
            const href = link.getAttribute("href");
            if (href && (href === "#" + hashId || href.endsWith(hashId))) {
              link.classList.add("active");
            }
          });
        }
        setTimeout(function() {
          updateActiveLink();
        }, 400);
      });
    });
  }
});



document.addEventListener("DOMContentLoaded", function () {
  // Get all service innertab rows
  const serviceInnertabRows = document.querySelectorAll('.service-innertab-row');

  serviceInnertabRows.forEach(function (row) {
    // Get the dropdown element within the current tab set
    const dropdown = row.querySelector('#tabDropdown');

    // Listen for changes in the dropdown and switch tab accordingly
    dropdown.addEventListener('change', function () {
      // Get the selected tab
      const selectedTab = this.value;

      // Remove the 'active' class from all tab panes and tabs
      const tabPanes = row.querySelectorAll('.tab-content .tab-pane');
      tabPanes.forEach(function (tab) {
        tab.classList.remove('show', 'active');
      });

      const tabLinks = row.querySelectorAll('.nav-pills .nav-item .nav-link');
      tabLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      // Add the 'active' class to the selected tab and tab pane
      const selectedTabPane = row.querySelector('#' + selectedTab);
      selectedTabPane.classList.add('show', 'active');

      // Update the selected tab link
      const selectedTabLink = row.querySelector('#' + selectedTab + '-tab');
      selectedTabLink.classList.add('active');
    });
  });
});



// Get all accordion instances on the page
const accordionGroups = document.querySelectorAll(".horizontal-accordion");

accordionGroups.forEach((accordion) => {
  const choiceArray = accordion.querySelectorAll(".choice");

  // Attach click event to each card header within the current accordion
  choiceArray.forEach((card) => {
    const header = card.querySelector(".card-header");
    const content = card.querySelector(".card-content");

    header.addEventListener("click", () => {
      // Collapse all cards in the current accordion
      choiceArray.forEach((element) => {
        element.classList.remove("expand");
        element.classList.add('unset');
        element.querySelector('.card-header').classList.remove('active');
        element.querySelector('.card-content').style.display = 'none';
      });

      // Expand the clicked card
      card.classList.remove("unset");
      card.classList.add('expand');
      header.classList.add('active');
      content.style.display = 'block';
    });
  });

  // Open the first card of the accordion by default
  if (choiceArray.length > 0) {
    choiceArray[0].querySelector(".card-header").click();
  }
});




document.querySelectorAll('.mobile-dropdown-div .tabSelector').forEach(dropdown => {
  dropdown.addEventListener('change', function () {
    var selectedTabId = this.value;
    var parentContainer = this.closest('.mobile-dropdown-div');

    // Hide all tabs in the same section
    parentContainer.querySelectorAll('.mobile-dropdown-div .tab-content .tab-pane').forEach(tab => {
      tab.classList.remove('show', 'active');
    });

    // Show selected tab
    parentContainer.querySelector('#' + selectedTabId).classList.add('show', 'active');
  });
});


jQuery(document).ready(function () {
  if (document.querySelectorAll(".scroller-section").length > 0) {
    const scrollerSections = document.querySelectorAll(".scroller-section");
    
    scrollerSections.forEach(function(scrollerSection) {
      const sections = scrollerSection.querySelectorAll(".scroller-item");
      const links = scrollerSection.querySelectorAll(".scroller-sticky .scroller-list a");
      
      if (sections.length === 0 || links.length === 0) return;
      
      function updateActiveLink() {
        const windowHeight = window.innerHeight;
        const buffer = windowHeight / 2;
        let currentSection = "";
        const lastSection = sections[sections.length - 1];
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const isNearPageBottom = (windowHeight + scrollPosition) >= (documentHeight - 200);
        
        // Special handling for last section when near bottom
        if (isNearPageBottom && lastSection) {
          const lastRect = lastSection.getBoundingClientRect();
          if (lastRect.top < windowHeight && lastRect.bottom > 0) {
            currentSection = lastSection.getAttribute("id");
          }
        }
        
        // Standard detection if not at bottom
        if (!currentSection) {
          sections.forEach(function(section) {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            if (
              sectionTop < windowHeight - buffer &&
              sectionBottom > buffer
            ) {
              currentSection = section.getAttribute("id");
            }
          });
        }
        
        if (currentSection) {
          links.forEach(function(link) {
            link.classList.remove("active");
            const href = link.getAttribute("href");
            if (href && (href.endsWith(currentSection) || href === "#" + currentSection)) {
              link.classList.add("active");
            }
          });
        }
      }
      
      // Use scroll event
      let scrollTimeout;
      document.addEventListener("scroll", function (e) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveLink, 10);
      }, { passive: true });
      
      // Initial update
      setTimeout(updateActiveLink, 100);
      
      // Update on resize
      window.addEventListener("resize", function() {
        clearTimeout(scrollTimeout);
        updateActiveLink();
      });
    });
  }
});