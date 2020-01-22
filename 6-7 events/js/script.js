$(function(){

    // click event 6.2
    // $("#btn-click").click(function(){
    //     alert("button was clicked");
    // });

    // $(".red-box").click(function(){
    //     $(this).fadeTo(500,0.5);     
    // });
    // $(".red-box").click();

    // hover event 6.3
    // $("#btn-hover").hover(function(){
    //     alert("button was hovered");
    // });

    // mouseEnter and leave event 6.4 

    // $(".blue-box").mouseenter(function(){
    //     $(this).stop().fadeTo(500,0.5);
    // });
    // $(".blue-box").mouseleave(function(){
    //     $(this).stop().fadeTo(500,1);
    // });

    // $(".blue-box").hover(function(){
    //     $(this).stop().fadeTo(500,0.5);
    // }, function(){
    //     $(this).stop().fadeTo(500,1);
    // });

    // same handler for multiple events 6.5
    // $("html").on("click keydown", function(){
    //     console.log("mouse was clicked or key was pressed...")

    // });

    // Let's use this to add a gallery that switches to the next image on click.
//   var images = [
//     "images/laptop-mobile_small.jpg",
//     "images/laptop-on-table_small.jpg",
//     "images/people-office-group-team_small.jpg"
//   ];

  // The following is the same as in the image slideshow code, except we now
  // use a click event instead of setTimeout().
//   var i = 0;
//   $(".gallery").find("img").on("click", function() {
//     i = (i + 1) % images.length;
//     $(this).fadeOut(function() {
//       $(this).attr("src", images[i]).fadeIn();
//     });
//   });

//   function logEvent(){
//     console.log("mouse was clicked or key was pressed...")
//   };

//   $("html").on("click keydown", logEvent );

// delegated Events 6.7
    // $("#content").on("click", "p", function() {
    //     $(this).slideUp();
    // });

    // $("#content").append("<p>Dynamically added new item!</p>");

    // Passing Additionals data to events

//   $("#btn-click").click({
//     user : "Saurab"
//   }, function(event){
//     greetUser(event.data);
//   });

//   function greetUser(userdata){
//       username = userdata.user || "J pani";

//       alert("welcome  " + username + "!!!");
//   }

    // image gallery with lightbox 6.9
//   var galleryItems = $(".gallery").find("img");
//   galleryItems.css("width", "33%");

// // These are now multiple images.
//     var galleryItems = $(".gallery").find("img");

// // Normally, you would do this in CSS.
//     galleryItems.css("width", "100%").css("opacity", "0.7");

    
//   // Fade images in/out when hovering/leaving.
//   galleryItems.mouseenter(function() {
//     $(this).stop().fadeTo(500, 1);
//   });

//   galleryItems.mouseleave(function() {
//     $(this).stop().fadeTo(500, 0.7);
//   });

//   // Preview image in lightbox when clicked.
//   galleryItems.click(function() {
//     // Read image src of clicked image.
//     var source = $(this).attr("src");

//     // Generate new <img> tag to add to the lightbox.
//     var newImage = $("<img>").attr("src", source).css("width", "100%");
//     console.log(newImage);

//     // Prepare and show lightbox preview.
//     $(".lightbox").empty().append(newImage).fadeIn(1000);
//   });

//   // Exit lightbox preview when clicking it anywhere.
//   $(".lightbox").click(function() {
//     $(this).stop().fadeOut();
//   });

    // $("html").keydown(function(event){
    //     console.log(event.which);
    // });

    var arrow_right = 39;
    $("html").keydown(function(event){
        if(event.which == arrow_right){
            $(".blue-box").stop().animate({
                marginLeft: "+=10px"
            }, 50);
        }

    });






});