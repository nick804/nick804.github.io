// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
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
  {file:'external/dusk/1.jpg', caption: 'From the front of the building, at dusk with the lamp lights on.'},
  {file:'external/dusk/2.jpg', caption: 'From the front of the building, at dusk with the lamp lights on.'},
  {file:'external/daylight/1.jpg', caption: 'Entrance to the tenants side of the building.'},
  {file:'external/daylight/picture_2.jpg', caption: 'Aerial view of the property'},
  {file:'internal/downstairs/kitchen/1.jpg', caption: 'The sitting area downstairs'},
  {file:'internal/downstairs/kitchen/2.jpg', caption: 'The kitchen and dining table downstairs'},
  {file:'internal/downstairs/kitchen/3.jpg', caption: 'The kitchen and dining table downstairs'},
  {file:'internal/downstairs/kitchen/4.jpg', caption: 'The kitchen and dining table downstairs'},
  {file:'internal/downstairs/hallway/2.jpg', caption: 'The downstairs hallway, looking to the shower room, and to the right is the laundry area'},
  {file:'internal/downstairs/utility/1.jpg', caption: 'The laundry area for the tenants'},
  {file:'internal/upstairs/hallways/1.jpg', caption: 'The upstairs hallway, looking to the sitting area, with bedroom on either side'},
  {file:'internal/upstairs/hallways/2.jpg', caption: 'The upstairs hallway, looking to the stairway and other section with rooms beyond and down a step'},
  {file:'internal/upstairs/hallways/3.jpg', caption: 'The stairs leading up to the second level'},
  {file:'internal/upstairs/hallways/4.jpg', caption: 'The upstairs section with a shared full bath, 4 rooms total, with 1 bathroom; doors closed'},
  {file:'internal/upstairs/hallways/5.jpg', caption: 'The upstairs section with a shared full bath, 4 rooms total, with 1 bathroom; doors open'},
  {file:'internal/upstairs/utility/1.jpg', caption: 'One of the two shower rooms upstairs, heater, bench, and powerful fan'},
  {file:'internal/upstairs/utility/2.jpg', caption: 'The upstairs shared full bath, shower to the right of the picture'},
  {file:'internal/upstairs/utility/3.jpg', caption: 'Upstairs showers, there are two in total on the second floor, one on the first floor as well'},
  {file:'internal/upstairs/sitting_area/1.jpg', caption: 'The upstairs sitting area, a high-top table with several chairs'},
  {file:'internal/upstairs/sitting_area/2.jpg', caption: 'The upstairs sitting area "kitchen" nook, with a Keurig machine, sink, mini fridge, microwave, and some cabinetry'},
  {file:'internal/upstairs/sitting_area/3.jpg', caption: 'Coffee should speak for itself...'},
  {file:'internal/rooms/new_rooms/window_1.jpg', caption: 'One of the rooms, with cedar trim, and brand new everything'},
  {file:'internal/rooms/new_rooms/window_2.jpg', caption: 'One of the rooms, with cedar trim, and brand new everything'},
  {file:'internal/rooms/new_rooms/hallway_1.jpg', caption: 'Looking from the room into the upstairs hallway'},
  {file:'internal/rooms/new_rooms/bath_left_1.jpg', caption: 'Private half-bath, from the left'},
  {file:'internal/rooms/new_rooms/bath_right_1.jpg', caption: 'Private half-bath, from the right'},
  {file:'internal/rooms/new_rooms/downstairs_room_1.jpg', caption: 'One of the downstairs rooms, the downstairs rooms have slightly higher ceilings, at just over 8-feet high.'},
  {file:'internal/rooms/new_rooms/downstairs_room_2.jpg', caption: 'One of the downstairs rooms, the downstairs rooms have slightly higher ceilings, at just over 8-feet high.'},
];


function fillGallery(){
  for(var i = 0; i < images.length; i++){
    $('#thumbnails > div').append('<img src="images/' + images[i].file + '" class="thumbnail" alt="' + images[i].caption + '"/>');
  }
}

function setup(){

  var i = 0;
  //Add 8 images
  // while(i < 4){
  //     $('#visible_images').append('<div class="w3-col m3"><img  src="images/' + images[i].file + '" style="width:100%; padding:5px;" onclick="onClick(this)" class="w3-hover-opacity" alt="' + images[i].caption + '"/></div>');
  //     i++;
  // }
  //
  // while(i < images.length){
  //   $('#hidden_images').append('<div class="w3-col m3"><img  src="images/' + images[i].file + '" style="width:100%; padding:5px;" onclick="onClick(this)" class="w3-hover-opacity" alt="' + images[i].caption + '"><img></div>');
  //   i++;
  // }

//data-lazy
  for(var j =0; j < images.length; j++){
    $('.photo-gallery-slider').append('<div><img class="slide" onClick="onClick(this)" data-lazy="images/' + images[j].file + '" alt="' + images[j].caption + '"/></div>');
  }
}

function customScroll(){
  if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
    $('.icon-bar').removeClass('hidden');
    $('.icon-bar').addClass('visible');
  }else{
    $('.icon-bar').removeClass('visible');
    $('.icon-bar').addClass('hidden');
  }
}

$(function(){
  console.log('Starting wepapp...');

  var navbar = document.getElementById("myNavbar");
  navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";



  setup();

  $('.photo-gallery-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: window.screen.width < 1600? false: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    infinite: true,
    centerMode: true,
    adaptiveHeight: true
  });

window.onscroll = function(){customScroll()};
  // fillGallery();

});
