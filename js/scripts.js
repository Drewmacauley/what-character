$(document).ready(function() {
  $("form#yourInfo").submit(function(event) {
    const paper = $("select#paper").val();
    const candy = $("select#candy").val();
    const career = $("select#career").val();
    const mustard = $("select#mustard").val();

    if (paper === 'cardstock') {
      if (age > 60) {
        $("#celebrity").text("");
      } else if (age > 30) {
        $("#celebrity").text("Moby Dick")
      } else if (age <= 30) {
        $("#celebrity").text("Betty White")
      }
    }

    $("#result").show();

    event.preventDefault();
  });
});