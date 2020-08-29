$(function() {
  $(".pageheader").load("./htmlparts/pageheader.html");
  $(".headerlangnav").load("./htmlparts/langheader.html");
  $("footer").load("./htmlparts/footer.html");
  $.getScript("./js/main.js", function() {
  });
});
