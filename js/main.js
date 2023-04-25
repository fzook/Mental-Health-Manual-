(function() {
    document.getElementById('section-1').style.display = "none"
    document.getElementById('section-2').style.display = "none"
    document.getElementById('section-3').style.display = "none"
})();
// Swiper slider

  var swiper = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  swiper.on('slideChange', function (e) {
    if(e.realIndex === 0) {
        document.getElementById('section-1').style.display = "none"
        document.getElementById('section-2').style.display = "none"
        document.getElementById('section-3').style.display = "none"
        document.getElementById('section-0').style.display = "block"
    } else if (e.realIndex === 1) {
        document.getElementById('section-0').style.display = "none"
        document.getElementById('section-2').style.display = "none"
        document.getElementById('section-3').style.display = "none"
        document.getElementById('section-1').style.display = "block"
    } else if (e.realIndex === 2) {
        document.getElementById('section-1').style.display = "none"
        document.getElementById('section-0').style.display = "none"
        document.getElementById('section-3').style.display = "none"
        document.getElementById('section-2').style.display = "block"
    } else {
        document.getElementById('section-1').style.display = "none"
        document.getElementById('section-2').style.display = "none"
        document.getElementById('section-0').style.display = "none"
        document.getElementById('section-3').style.display = "block"
    }

});

  //Navigation ba effects on scroll
  window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  //Responsive navigation menu toggle
  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    navigation.classList.add("active");
  });