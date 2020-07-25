var slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var images = [
  {file:'laundry_room.jpg', caption: 'Laundry room'},
  {file:'upstairs_sitting_area_no_table.jpg', caption: 'Sitting area upstairs, will have a table'},
  {file:'upstairs_corridor.jpg', caption: 'Upstairs Corridor'},
  {file:'room_with_half_bath_window_4.jpg', caption: 'Room with Half Bath'},
  {file:'room_with_half_bath_window_3.jpg', caption: 'Room with Half Bath'},
  {file:'room_with_half_bath_window_2.jpg', caption: 'Room with Half Bath'},
  {file:'room_with_half_bath_window.jpg', caption: 'Room with Half Bath'},
  {file:'room_with_half_bath_open_curtain_fully_stocked.jpg', caption: 'Room with Half Bath'},
  {file:'room_with_half_bath_desk_2.jpg', caption: 'Room with Half Bath'},
  {file:'room_with_half_bath_desk.jpg', caption: 'Room with Half Bath'},
  {file:'room_with_half_bath_curtain_open_full_stock_2.jpg', caption: 'Room with Half Bath'},
  {file:'room_with_half_bath_curtain_open_full_stock.jpg', caption: 'Room with Half Bath'},
  {file:'room_with_half_bath_curtain_open.jpg', caption: 'Room with Half Bath'},
  {file:'room_with_half_bath_curtain_closed_2.jpg', caption: 'Room with Half Bath'},
  {file:'room_with_half_bath_curtain_closed.jpg', caption: 'Room with Half Bath'},
  {file:'sitting_area_lights_on.jpg', caption: 'Downstairs sitting area'},
  {file:'kitchen_left.jpg', caption: 'Kitchen from the left'},
  {file:'kitchen_right.jpg', caption: 'Kitchen from the right'},
  {file:'entrance_far_left.jpg', caption: 'Looking out from the entrance far left'},
  {file:'entrance_left_view.jpg', caption: 'Looking out from the entrance slightly left'},
  {file:'entrance_from_front.jpg', caption: 'Entrance from front of house'},
  {file:'entrance_from_front_at_dusk.jpg', caption: 'House at dusk, notice the lamp lighting'},
  {file:'house_from_front_daytime.jpg', caption: 'House at daytime'}
];

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

$(' #' + n).css('display', 'block');
  //$(slides).find('#' + n).css('display', "block");
  $('#dot-' + n).addClass("active");
  captionText.innerHTML = $('#dot-' + n).attr('alt');

}

function setup(){
  //Calculate and add dots
  var imagesCount = images.length;
  for(var i = 0; i < imagesCount; i++){
    $('#dot-container').append('<span class="dot"></span>');
  }

  //Add images
  for(var i = 0; i < images.length; i++){
      $('#slides').append('<div class="mySlides" style="padding-left:100px;" id="' + i + '"><div class="numbertext">' + (i + 1) + ' / ' + images.length + '</div><img  src="images/' + images[i].file + '" style="width:90%" "><img></div>');
  }
  //Add thumbnails
  for(var i = 0; i < images.length; i++){
      $('#thumbnails').prepend('<div class="column"><img class="demo cursor" id="dot-' + i + '" src="images/' + images[i].file + '" style="width:50%;" onclick="currentSlide(' + i + ')" alt="' + images[i].caption + '" "><img></div>');
  }
  showSlides(0);

}

$(function(){
  console.log('Starting wepapp...');

  setup();


});
