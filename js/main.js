// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


function loadMorePictures(){

  document.getElementById('hidden_images').style.display = 'block';
  $('#loadMoreButton').remove();
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

function setup(){
  var i = 0;
  //Add 8 images
  while(i < 8){
      $('#visible_images').prepend('<div class="w3-col m3"><img  src="images/' + images[i].file + '" style="width:100%; padding:5px;" onclick="onClick(this)" class="w3-hover-opacity" alt="' + images[i].caption + '"/></div>');
      i++;
  }

  while(i < images.length){
    $('#hidden_images').append('<div class="w3-col m3"><img  src="images/' + images[i].file + '" style="width:100%; padding:5px;" onclick="onClick(this)" class="w3-hover-opacity" alt="' + images[i].caption + '"><img></div>');
    i++;
  }
}

$(function(){
  console.log('Starting wepapp...');

  setup();


});
