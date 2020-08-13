$(document).ready(function() {
  $("form#yourInfo").submit(function(event) {
    const paper = $("select#paper").val();
    const candy = $("select#candy").val();
    const career = $("select#career").val();
    const mustard = $("select#mustard").val();

    if (paper === 'cardS') {
      if (candy === 'm&m') {
        if (career === 'writer') {
          $("#celebrity").text("Phyllis Vance");
        } else if (career === 'graphicD') {
          $("#celebrity").text("Pam Beesly");
        } else {
          $("#celebrity").text("Dwight Schrute");
        }
      } else if (candy === 'm&i') {
        if (career === 'writer') {
          $("#celebrity").text("Michael Scott");
        } else if (career === 'graphicD') {
          $("#celebrity").text("Oscar Martinez");
        } else {
          $("#celebrity").text("Erin Hannon");
        }
      } else if (candy === 'butter') {
        if (career === 'writer') {
          $("#celebrity").text("Creed Bratton");
        } else if (career === 'graphicD') {
          $("#celebrity").text("Andy Bernard");
        } else {
          $("#celebrity").text("Jim Jalpert");
        }
      }
    } else if (paper === 'wrapP') {
      if (candy === 'm&m') {
        if (career === 'writer') {
          $("#celebrity").text("Toby Flenderson");
        } else if (career === 'graphicD') {
          $("#celebrity").text("Ryan Howard");
        } else {
          $("#celebrity").text("Dwight Schrute");
        }
      } else if (candy === 'm&i') {
        if (career === 'writer') {
          $("#celebrity").text("Holly Flax");
        } else if (career === 'graphicD') {
          $("#celebrity").text("Nellie Bertram");
        } else {
          $("#celebrity").text("Jan Levinson");
        }
      } else if (candy === 'butter') {
        if (career === 'writer') {
          $("#celebrity").text("Kelly Kapoor");
        } else if (career === 'graphicD') {
          $("#celebrity").text("Merideth Palmer");
        } else {
          $("#celebrity").text("Robert California");
        }
      }
    } else {
      $("#celebrity").text("Stanley Hudson")
    }

    $("#result").show();

    event.preventDefault();
  });
});