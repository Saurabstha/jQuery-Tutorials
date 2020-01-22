// $(function(){

//     // click event 6.2
//     // $("#btn-click").click(function(){
//     //     alert("button was clicked");
//     // });

//     // $(".red-box").click(function(){
//     //     $(this).fadeTo(500,0.5);     
//     // });
//     // $(".red-box").click();

//     // hover event 6.3
//     // $("#btn-hover").hover(function(){
//     //     alert("button was hovered");
//     // });

//     // mouseEnter and leave event 6.4 

//     // $(".blue-box").mouseenter(function(){
//     //     $(this).stop().fadeTo(500,0.5);
//     // });
//     // $(".blue-box").mouseleave(function(){
//     //     $(this).stop().fadeTo(500,1);
//     // });

//     // $(".blue-box").hover(function(){
//     //     $(this).stop().fadeTo(500,0.5);
//     // }, function(){
//     //     $(this).stop().fadeTo(500,1);
//     // });

//     // same handler for multiple events 6.5
//     // $("html").on("click keydown", function(){
//     //     console.log("mouse was clicked or key was pressed...")

//     // });

//     // Let's use this to add a gallery that switches to the next image on click.
// //   var images = [
// //     "images/laptop-mobile_small.jpg",
// //     "images/laptop-on-table_small.jpg",
// //     "images/people-office-group-team_small.jpg"
// //   ];

//   // The following is the same as in the image slideshow code, except we now
//   // use a click event instead of setTimeout().
// //   var i = 0;
// //   $(".gallery").find("img").on("click", function() {
// //     i = (i + 1) % images.length;
// //     $(this).fadeOut(function() {
// //       $(this).attr("src", images[i]).fadeIn();
// //     });
// //   });

// //   function logEvent(){
// //     console.log("mouse was clicked or key was pressed...")
// //   };

// //   $("html").on("click keydown", logEvent );

// // delegated Events 6.7
//     // $("#content").on("click", "p", function() {
//     //     $(this).slideUp();
//     // });

//     // $("#content").append("<p>Dynamically added new item!</p>");

//     // Passing Additionals data to events

// //   $("#btn-click").click({
// //     user : "Saurab"
// //   }, function(event){
// //     greetUser(event.data);
// //   });

// //   function greetUser(userdata){
// //       username = userdata.user || "J pani";

// //       alert("welcome  " + username + "!!!");
// //   }

//     // image gallery with lightbox 6.9
// //   var galleryItems = $(".gallery").find("img");
// //   galleryItems.css("width", "33%");

// // // These are now multiple images.
// //     var galleryItems = $(".gallery").find("img");

// // // Normally, you would do this in CSS.
// //     galleryItems.css("width", "100%").css("opacity", "0.7");

    
// //   // Fade images in/out when hovering/leaving.
// //   galleryItems.mouseenter(function() {
// //     $(this).stop().fadeTo(500, 1);
// //   });

// //   galleryItems.mouseleave(function() {
// //     $(this).stop().fadeTo(500, 0.7);
// //   });

// //   // Preview image in lightbox when clicked.
// //   galleryItems.click(function() {
// //     // Read image src of clicked image.
// //     var source = $(this).attr("src");

// //     // Generate new <img> tag to add to the lightbox.
// //     var newImage = $("<img>").attr("src", source).css("width", "100%");
// //     console.log(newImage);

// //     // Prepare and show lightbox preview.
// //     $(".lightbox").empty().append(newImage).fadeIn(1000);
// //   });

// //   // Exit lightbox preview when clicking it anywhere.
// //   $(".lightbox").click(function() {
// //     $(this).stop().fadeOut();
// //   });

//     // $("html").keydown(function(event){
//     //     console.log(event.which);
//     // });

//     // var arrow_right = 39;
//     // $("html").keydown(function(event){
//     //     if(event.which == arrow_right){
//     //         $(".blue-box").stop().animate({
//     //             marginLeft: "+=10px"
//     //         }, 50);
//     //     }

//     // });

//     // 7.1 form .. focus blur 

//     // var inputfields = $("input:text, input:password, textarea");

//     // inputfields.focus(function(){
//     //     $(this).css("box-shadow", "0 0 4px #666");
//     // });

//     // inputfields.blur(function(){
//     //     $(this).css("box-shadow", "none");
//     // });


//     // $("#name").blur(function() {
//     //     var text = $(this).val();
//     //     if (text.trim().length < 3) {
//     //       $(this).css("box-shadow", "0 0 4px #811");
//     //     } else {
//     //       $(this).css("box-shadow", "0 0 4px #181");
//     //     }
//     // });

//     // handling submit

//     // $("#form").submit(function(event) {
//     //     var textarea = $("#message");
//     //     if (textarea.val().trim() === "") {
//     //       // No message, add red highlighting to indicate error
//     //       textarea.css("box-shadow", "0 0 4px #811");
    
//     //       // The default event now would be to submit the form. The browser will do
//     //       // this automatically when clicking a submit button. We prevent this using
//     //       // preventDefault(). This way, the form will not be submitted.
//     //       event.preventDefault();
//     //     } else {
//     //       // Nothing to do, let the form be submitted.
//     //     }
//     //   });

//         // complete validation on submit 7.4

//     var form = $('#form');
//     enableFastFeedback(form);


//     $("#form").submit(function(event) {
//         // First, read out all entered values.
//         var name = $("#name").val();
//         var password = $("#password").val();
//         var message = $("#message").val();
//         var checked = $("#checkbox").is(":checked");

//         // Then we use our validation functions (defined below) to check each input.
//         validateNameField(name, event);
//         validatePasswordField(password, event);
//         validateMessageField(message, event);
//         validateCheckboxField(checked, event);
//     });


//     function enableFastFeedback(formElement) {
//         var nameInput = formElement.find("#name");
//         var passwordInput = formElement.find("#password");
//         var messageInput = formElement.find("#message");
//         var checkboxInput = formElement.find("#checkbox");
    
//         nameInput.blur(function() {
//           var name = $(this).val();
//           highlight($(this), isValidName(name));
//         });
    
//         passwordInput.blur(function() {
//           var password = $(this).val();
//           highlight($(this), isValidPassword(password));
//         });
    
//         messageInput.blur(function() {
//           var message = $(this).val();
//           highlight($(this), isValidMessage(message));
//         });
    
//         checkboxInput.change(function() {
//           var isChecked = $(this).is(":checked");
//           highlight($(this), isChecked);
//         });
//       }
    
//       function highlight(element, isValid) {
//         var color = "#811";  // red
//         if (isValid) {
//           color = "#181";  // green
//         }
    
//         element.css("box-shadow", "0 0 4px " + color);
//       }


//     function isValidName(name) {
//         return name.trim().length >= 2;
//       }
    
//       function isValidPassword(password) {
//         return password.length >= 6 && /.*[0-9].*/.test(password);
//       }
    
//       function isValidMessage(message) {
//         return message.trim() !== "";
//       }

//       function validateNameField(name, event) {
//         if (!isValidName(name)) {
//           $("#name-feedback").text("Please enter at least two characters");
//           event.preventDefault();
//         } else {
//           $("#name-feedback").text("");
//         }
//       }
    
//       // Do the same for the other inputs.
//       function validatePasswordField(password, event) {
//         if (!isValidPassword(password)) {
//           $("#password-feedback").text("The password should have at least 6 characters and contain a number");
//           event.preventDefault();
//         } else {
//           $("#password-feedback").text("");
//         }
//       }
    
//       function validateMessageField(message, event) {
//         if (!isValidMessage(message)) {
//           $("#message-feedback").text("Please enter a message.");
//           event.preventDefault();
//         } else {
//           $("#message-feedback").text("");
//         }
//       }
    
//       function validateCheckboxField(isChecked, event) {
//         if (!isChecked) {
//           $("#checkbox-feedback").text("Please agree to this.");
//           event.preventDefault();
//         } else {
//           $("#checkbox-feedback").text("");
//         }
//       }
    





// });


$(function () {
    var form = $("#form");
    enableFastFeedback(form);

    // When the submit event comes in, we first validate all form fields
    // and abort submission if one of them is invalid. Also, we highlight all
    // invalid fields so that the user knows what to fix.
    $("#form").submit(function(event) {
      // First, read out all entered values.
      var name = $("#name").val();
      var password = $("#password").val();
      var message = $("#message").val();
      var checked = $("#checkbox").is(":checked");
  
      // Then we use our validation functions (defined below) to check each input.
      validateNameField(name, event);
      validatePasswordField(password, event);
      validateMessageField(message, event);
      validateCheckboxField(checked, event);
    });
  
    // == NEW PART ==
    // In addition to the previous form validation code, we now provide faster
    // feedback to the user, namely when moving to the next input element.
    enableFastFeedback($("#form"));
  
    function enableFastFeedback(formElement) {
      var nameInput = formElement.find("#name");
      var passwordInput = formElement.find("#password");
      var messageInput = formElement.find("#message");
      var checkboxInput = formElement.find("#checkbox");
  
      nameInput.blur(function(event) {
        var name = $(this).val();
        validateNameField(name, event);

        if(!isValidName(name)){
            $(this).css({"box-shadow":"0 0 4px #811", "border": "1px solid #600"});
        } else{
            $(this).css({"box-shadow":"0 0 4px #181", "border": "1px solid #600"});

        }
      });
  
      passwordInput.blur(function() {
        var password = $(this).val();
        highlight($(this), isValidPassword(password));
      });
  
      messageInput.blur(function() {
        var message = $(this).val();
        highlight($(this), isValidMessage(message));
      });
  
      checkboxInput.change(function() {
        var isChecked = $(this).is(":checked");
        highlight($(this), isChecked);
      });
    }
  
    function highlight(element, isValid) {
      var color = "#811";  // red
      if (isValid) {
        color = "#181";  // green
      }
  
      element.css("box-shadow", "0 0 4px " + color);
    }
  
    // In the following, we define helper functions that each validate
    // one of the inputs. These will be used further down by our validation
    // functions.
  
    function isValidName(name) {
      return name.trim().length >= 2;
    }
  
    function isValidPassword(password) {
      return password.length >= 6 && /.*[0-9].*/.test(password);
    }
  
    function isValidMessage(message) {
      return message.trim() !== "";
    }
  
    // Next, we define the actual validation functions which use the helpers from
    // above. These validation functions add a hint for the user for each invalid
    // input and prevent the form from submitting if the input is invalid.
  
    // First, show a hint if the name is not valid or remove the hint if it's
    // now valid.
    function validateNameField(name, event) {
      if (!isValidName(name)) {
        $("#name-feedback").text("Please enter at least two characters");
        event.preventDefault();
      } else {
        $("#name-feedback").text("");
      }
    }
  
    // Do the same for the other inputs.
    function validatePasswordField(password, event) {
      if (!isValidPassword(password)) {
        $("#password-feedback").text("The password should have at least 6 characters and contain a number");
        event.preventDefault();
      } else {
        $("#password-feedback").text("");
      }
    }
  
    function validateMessageField(message, event) {
      if (!isValidMessage(message)) {
        $("#message-feedback").text("Please enter a message.");
        event.preventDefault();
      } else {
        $("#message-feedback").text("");
      }
    }
  
    function validateCheckboxField(isChecked, event) {
      if (!isChecked) {
        $("#checkbox-feedback").text("Please agree to this.");
        event.preventDefault();
      } else {
        $("#checkbox-feedback").text("");
      }
    }
  
  });