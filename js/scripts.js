$(document).ready(function() {
  $("form#yourInfo").submit(function(event) {
    const paper = $("select#paper").val();
    const candy = $("select#candy").val();
    const career = $("select#career").val();
    const mustard = $("select#mustard").val();

    if (paper === 'cardS') {
      if (candy === 'm&m') {
        if (career === 'writer') {
          $("#celebrity").text("Phyllis");
        } else if (career === 'graphicD') {
          $("#celebrity").text("Pam Beesly");
        } else {
          $("#celebrity").text("Dwight Schrute");
        }
      } else if (candy === 'm&i') {
        if (career === 'writer') {
          $("#celebrity").text("Michael Scott");
        } else if (career === 'graphicD') {
          $("#celebrity").text("");
        } else {
          $("#celebrity").text("");
        }
      } else if (candy === 'butter') {
        if (career === 'writer') {
          $("#celebrity").text("Michael Scott");
        } else if (career === 'graphicD') {
          $("#celebrity").text("");
        } else {
          $("#celebrity").text("");
        }
      }
    } else if (paper === 'wrapP') {
      if (candy === 'female') {
        $("#celebrity").text("");
      }
    } else {
      $("#celebrity").text("Stanley Hudson")
    }

    $("#result").show();

    event.preventDefault();
  });
});