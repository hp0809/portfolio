function readMore() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("readMore");
    $('.readMore').on('click', event => {
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more"; 
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less"; 
            moreText.style.display = "inline";
        }
    });
};

function navDropdown() {
    $('.fa-3x').click(() => {
    $('.mobileNav').toggle('.show');
    })
}


function linkScroll() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          let hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
            window.location.hash = hash;
          });
        }
        $('.mobileNav').fadeOut('slow');
      });
};





$(readMore)
$(navDropdown)
$(linkScroll)
