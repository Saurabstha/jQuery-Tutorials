$(function(){

    // 4.2 adding new element in DOM
    // $("ul ul:first").append("<li>last added item from jquery</li>");

    // $("<li>last added item from jquery paxadi bata</li>").appendTo($("ul ul:first"));

    // $("ul ul:first").prepend("<li> added(prepended)  item from jquery</li>");
    // $("ul ul").prepend("<li> added(prepended)  item from jquery</li>");
    // $(".red-box").after("<div class='red-box'>Another red</div>");
    // $(".blue-box").before("<div class='blue-box'>Another blue</div>");

    // $(".blue-box").before($(".red-box"));
    // $("p").after($("#list"));

    // replace existing elements

    // $('li').replaceWith("<li>replaced</li>");

    // var firstListItem = $("li:first");
    // $('p:first').replaceWith(firstListItem);

    // $('.red-box, .blue-box').replaceWith("<div class='green-box'>More Greenss</div>");

    // $("<div class='green-box'>More Greenss!!!!</div>").replaceAll('.red-box, .blue-box');

    // remove
    // $("li").remove(); 
    // $("form").children().not("input:text, textarea, br").remove(); 

    // var detachedListItem = $("li").detach();
    // $("#content").append(detachedListItem);

    // $("p:first").empty();

    //  $(".red-box").empty();

    // // manipulate attr and prop
    // var specialLink = $("#special-link");
    // console.log(specialLink.attr("href"));

    // specialLink.attr("href", "https://docs.djangoproject.com/en/3.0/howto/custom-template-tags/")

    // var checkbox = $("input:checkbox");
    // console.log(checkbox.attr("checked"));

    
    // var checkbox = $("input:text");
    // console.log(checkbox.val());

    
    // var rangeInput = $("input[type='range']");
    // console.log(rangeInput.val());

    // var galleryImage = $(".gallery").find("img").first();

    // var images = [
    //     "images/laptop-mobile_small.jpg",
    //     "images/laptop-on-table_small.jpg",
    //     "images/people-office-group-team_small.jpg"
    //   ];
    // var i = 0;

    // setInterval(function() {
    //     i = (i + 1) % images.length;  // i = 1, 2, 0, 1, 2, 0, ...
    //     galleryImage.fadeOut(function() {
    //         // Inside the callback, "this" refers to the galleryImage
    //         $(this).attr("src", images[i]);
    //         $(this).fadeIn();
    //       });
    //       console.log(galleryImage.attr("src"));

    // }, 1000);

    // 5.1 changing css prop

    // $(".gallery").css("display", "none"); //hide()

    // var redBox = $(".red-box");
    // console.log(redBox.css("width"));
    // console.log(redBox.width());

    // redBox.css("background-color", "#AA7700");
    // $("p").css("font-size", "10px");

    // redBox.css("width", "+=10px");

    // var properties = $("p").css(["font-size", "line-height", "color"]);
    // console.log(properties);
    // console.log(properties["font-size"]);

    // redBox.css("user-select", "none");

    // adding or removing css class
    // $("a").addClass("fancy-link");

    // $(".red-box").removeClass("red-box");
    // $(".red-box").removeClass("red-box").addClass("blue-box");

    // var gallery = $(".gallery");
    // var images = [
    //     "images/laptop-mobile_small.jpg",
    //     "images/laptop-on-table_small.jpg",
    //     "images/people-office-group-team_small.jpg"
    //   ];

    // gallery.data("availableImages", images);
    // console.log(gallery.data("availableImages"));  // Array[...]

    // gallery.removeData("availableImages")
    // console.log(gallery.data("availableImages")); 

    // var firstParagraph = $("p:first");
    // console.log(firstParagraph.data("mydata"));

    // 5.4 retrieving and changing content
    var firstParagraph = $("p:first");
    // console.log(firstParagraph.text());
    console.log(firstParagraph.html());
















});