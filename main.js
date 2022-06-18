//change images from grayscale to color on mouseover actions
$("#img1").on("mouseover", function() {
  $("#img1").attr("src", "images/project_portfolio2.png")
})

$("#img2").on("mouseover", function() {
  $("#img2").attr("src", "images/javascript_game.png")
})

$("#img3").on("mouseover", function() {
  $("#img3").attr("src", "images/bootstrap_carousel.png")
})

$("#img4").on("mouseover", function()  {
  $("#img4").attr("src", "images/react_todo_list.png")
})

//changes images on mouseout action
$("#img1").on("mouseout", function() {
  $("#img1").attr("src", "images/portfolio_gray.png")
})

$("#img2").on("mouseout", function() {
  $("#img2").attr("src", "images/javascript_gray.png")
})

$("#img3").on("mouseout", function() {
  $("#img3").attr("src", "images/bootstrap_gray.png")
})

$("#img4").on("mouseout", function() {
  $("#img4").attr("src", "images/react_gray.png")
})

//adds link to github repo for each clicked or tapped image
$("#img1").on("click tap", function() {
  $("#img1").wrap("<a href='https://github.com/webdevyn/portfolio' target='_blank'></a>")
})

$("#img2").on("click tap", function() {
  $("#img2").wrap("<a href='https://github.com/webdevyn/javascript-game' target='_blank'></a>")
})

$("#img3").on("click tap", function() {
  $("#img3").wrap("<a href='https://github.com/webdevyn/bootstrap-carousel' target='_blank'></a>")
})

$("#img4").on("click tap", function() {
  $("#img4").wrap("<a href='https://github.com/webdevyn/react-todoList' target='_blank'></a>")
})
