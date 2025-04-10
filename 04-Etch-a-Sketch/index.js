// creates a grid in the "container"
function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
      for (var columns = 0; columns < x; columns++) {
          $(".container").append("<div class='grid'></div>");
      };
  };
  $(".grid").width(960/x);
  $(".grid").height(960/x);
};

function clearGrid(){
  $(".grid").remove();
};  

function refreshGrid(){
  var z = prompt("How many boxes per side?");
  if (z > 50) {
    alert("Please enter a number less than 50");
    refreshGrid();
  }

  clearGrid();
  createGrid(z);
};

// create a 16x16 grid when the page loads
$(document).ready(function() {
  createGrid(16);

  $(".grid").mouseover(function() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      $(this).css("background-color", "rgb(" + r + "," + g + "," + b + ")");
      });

  $(".newGrid").click(function() {
      refreshGrid();

      // hover effect with random colors
      $(".grid").mouseover(function() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      $(this).css("background-color", "rgb(" + r + "," + g + "," + b + ")");
      });
  });
});
