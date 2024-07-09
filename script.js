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
    new Typed(".typing", {
      strings: animationScript,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    new Typed(".typing2", {
      strings: animationScript,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    // Typing animation script End
  
    // toggle menu/navbar script start
    // $(".menu-btn").click(function () {
    //   $(".navbar .menu").toggleClass("active");
    //   $(".menu-btn i").toggleClass("active");
    // });
    $(document).on("click", ".menu-btn", function() {
      $(".menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
  });
    
    // // toggle menu/navbar script end
  
    // owl carousel script start
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
    // owl carousel script end
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