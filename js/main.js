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
  {file:'house/house_at_night.jpg', caption: 'Front of house, the leftmost door is the entrance to where tenants will stay.'},
  {file:'house/front_no_car_but_not_great.jpg', caption: 'Front of house, the leftmost door is the entrance to where tenants will stay.'},
  {file:'house/front_door.jpg', caption: 'Front door leading into the tenants part of the building.'},
  {file:'community_areas/kitchen_from_door.jpg', caption: 'The downstairs kitchen, after entering through the front door.'},
  {file:'community_areas/kitchen_from_sitting_area.jpg', caption: 'The downstairs kitchen, from the sitting area.'},
  {file:'community_areas/sitting_area_from_kitchen.jpg', caption: 'The sitting area, downstairs, to the left of the kitchen.'},
  {file:'community_areas/upstairs_hallway.jpg', caption: 'The upstairs hallway, with several of the rooms off the sides, and a small nook at the end with a Keurig machine, chairs, and a table.'},
  {file:'community_areas/upstairs_sitting_area.jpg', caption: 'The upstairs sitting area nook, to the right is a microwave, keurig machine, mini fridge, and small sink.'},
  {file:'community_areas/upstairs_sitting_area.jpg', caption: 'The upstairs sitting area nook, to the right is a microwave, keurig machine, mini fridge, and small sink.'},
  {file:'community_areas/upstairs_showers.jpg', caption: 'The upstairs showers (To the right of the sitting area), there is another one on the first floor as well.'},
  {file:'community_areas/shower_straight_on.jpg', caption: 'Full view of the showers. There are three in total, and all look like this. (2 on 2nd floor, 1 on first floor).'},
  {file:'community_areas/looking_upstairs.jpg', caption: 'The stairs leading to the second floor.'},
  {file:'rooms/room_102.jpg', caption: 'Room 102, identical to most of the rooms available'},
  {file:'rooms/room_204.jpg', caption: 'Room 204'},
  {file:'rooms/room_205_with_bathroom.jpg', caption: 'Room 205, with a view of the bath area.'},
  {file:'rooms/room_205.jpg', caption: 'Room 205'},
  {file:'rooms/room_206.jpg', caption: 'Room 206'},
  {file:'rooms/room_207.jpg', caption: 'Room 207'},
  {file:'rooms/room_208.jpg', caption: 'Room 208'},
  {file:'rooms/room_209.jpg', caption: 'Room 209'},
  {file:'rooms/room_210.jpg', caption: 'Room 210'},
  {file:'rooms/room_with_bathroom_left.jpg', caption: 'For the rooms that have the bath area, this is a leftern view of the bath area.'},
  {file:'rooms/room_with_bathroom_right.jpg', caption: 'For the rooms that have the bath area, this is a rightmost view of the bath area.'},
];


function fillGallery(){
  for(var i = 0; i < images.length; i++){
    $('#thumbnails > div').append('<img src="images/' + images[i].file + '" class="thumbnail" alt="' + images[i].caption + '"/>');
  }
}

function setup(){

  var i = 0;
  //Add 8 images
  while(i < 4){
      $('#visible_images').append('<div class="w3-col m3"><img  src="images/' + images[i].file + '" style="width:100%; padding:5px;" onclick="onClick(this)" class="w3-hover-opacity" alt="' + images[i].caption + '"/></div>');
      i++;
  }

  while(i < images.length){
    $('#hidden_images').append('<div class="w3-col m3"><img  src="images/' + images[i].file + '" style="width:100%; padding:5px;" onclick="onClick(this)" class="w3-hover-opacity" alt="' + images[i].caption + '"><img></div>');
    i++;
  }

  for(var j =0; j < images.length; j++){
    $('.photo-gallery-slider').append('<div><img class="slide" onClick="onClick(this)" data-lazy="images/' + images[j].file + '" alt="' + images[j].caption + '"/></div>');
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
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    infinite: true,
    centerMode: true,
    adaptiveHeight: true
  });

  // fillGallery();

});
