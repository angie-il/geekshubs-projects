var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks the "Create" button of the modal, close it
var close = document.getElementById("submit-btn");

close.addEventListener('click', function() {
  modal.style.display = "none";
});

// Add new channel in channel list
let arr = [];
let inputChannel = document.getElementById('channel-name');

function add_arr() {
  var channel = '<i class="fa fa-hashtag"></i> ' + inputChannel.value;
  arr.push(channel);
  inputChannel.value = "";

  document.getElementById("channels").innerHTML = channel;
}