const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

// Smooth Scrolling
$("#navbar a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 70,
      },
      800
    );
  }
});
