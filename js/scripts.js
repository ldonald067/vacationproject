$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var topics = ["fun", "food", "music", "language", "weather"];
    var userAnswer = 0;

    topics.forEach(function(blank) {
      userAnswer += parseInt($("select#" + blank).val());
    });

    if (userAnswer <= 5) {
      $("#scand").show();
      $("#vaca").hide();
    }
    else if (userAnswer === 6 || userAnswer >= 8 && userAnswer <= 10) {
      $("#thai").show();
      $("#vaca").hide();
    }
    else if (userAnswer === 11 || userAnswer >= 13) {
      $("#la").show();
      $("#vaca").hide();
    }
    else if (userAnswer === 7 || userAnswer === 12) {
      $("#none").show();
      $("#vaca").hide();
    }

    $("#redoThai").click(function() {
      location.reload();
    });

    $("#redoLa").click(function() {
      location.reload();
    });

    $("#redoScand").click(function() {
      location.reload();
    });

    $("#redoNone").click(function() {
      location.reload();
    });

    event.preventDefault();

  });
});
