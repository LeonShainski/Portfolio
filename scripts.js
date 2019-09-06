

//Navigation bar scripts
   $(document).ready(function(){

        $(window).scroll(function(){

          if($(window).scrollTop()>600){
            $(navID).addClass("amber", 10000, "easeInBack");
          }else if($(window).scrollTop()<600) {
            $(navID).removeClass("amber", 10000, "easeInBack");
          }else if ($(window).scrollTop()>800) {
            $(skills).addClass("black", 10000, "easeInBack");
            //last bit not working. Im trying to make the navigation bar items change
            //Depending on where you are on the page. If you are hovering over skills,
            //The skils tab should have the grey background (not just home)
          }




        });

   });



//Smooth Scrolling Scripts

$(document).ready(function(){
// Add smooth scrolling to all links
$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});
});
