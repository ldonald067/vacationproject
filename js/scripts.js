$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var topics = ["fun", "food", "music", "language", "weather"];
    var userAnswer = 0;

    topics.forEach(function(blank) {
      userAnswer += parseInt($("select#" + blank).val());
    });
