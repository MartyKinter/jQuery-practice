//when DOM is loaded console.log message
$(function(){
    console.log("Let's get ready to party with jQuery!");
})

//give all images inside of an article tag the class of image-center
$("article img").addClass("image-center");

//remove last paragraph in the article
$("article p:last-child").remove();

//set font size of title to random pixel 0-100
$("#title").css("font-size", Math.random() * 100);

//add an item to the list; it can say whatever you want
$("ol").append($("<li>", {text:"new list item"}));

//scratch that, empty the aside and put aparagraph apologizing for the list's existance
$("aside").empty().append($("<p>", {text:"Sorry for the list"}));

//set background of the body to change with the 3 inputs at the bottom's values
$(".form-control").on("keyup blur change", function(){
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color", "rgb(" + red + "'" + green + "'", + blue + ")");
})

//add event listener to remove images from the DOM when clicked
$("img").on("click", function(e){
    $(e.target).remove();
});

