$(document).ready(function () {
    // Scroll down sticky navbar script start
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
      // Scroll down sticky navbar script end
  
      // Scroll up Button script start
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
      // Scroll up Button script end
  
      // Fade In & Fade Out Elements on Scroll script start
      $(".fade").each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).addClass("showmen");
        }
        if (bottom_of_window < bottom_of_element) {
          $(this).removeClass("showmen");
        }
      });
      // Fade In & Fade Out Elements on Scroll script end
    });
  
    // Scroll up Button script start
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
    });
    // Scroll up Button script end
  
    // animation Script for display
    const animationScript = ["Front End Developer", "Software Developer"];
  
    // Typing animation script start
    if ($('.typing').length > 0) {
      new Typed('.typing', {
          strings: animationScript,
          typeSpeed: 100,
          backSpeed: 60,
          loop: true,
      });
  }

  if ($('.typing2').length > 0) {
      new Typed('.typing2', {
          strings: animationScript,
          typeSpeed: 100,
          backSpeed: 60,
          loop: true,
      });
  }
 
  function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-250px";
    }
}
// function toggleMenu() {
//   var sidebar = $("#sidebar");
//   if (sidebar.css("left") === "-250px") {
//       sidebar.css("left", "0");
//   } else {
//       sidebar.css("left", "-250px");
//   }
// }

// Event listener for menu button click
$(".menu-btn").click(function() {
  toggleMenu();
});
 
  });
  //CV download
  document.getElementById('download-cv').addEventListener('click', function(e) {
    e.preventDefault();
    
    fetch('assets/FuthoYonela-Curriculum vitae.pdf')
        .then(response => {
            if(response.ok) {
                window.open('assets/FuthoYonela-Curriculum vitae.pdf', '_blank');
            } else {
                alert('Sorry, the CV is not available at the moment.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while trying to download the CV.');
        });
});
  
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Set the current year in the span with id "year"
  document.getElementById('year').textContent = currentYear;