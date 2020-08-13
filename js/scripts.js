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
        } else if (career === 'ceo') {
          $("#celebrity").text("Dwight Schrute");
        }
      } else if (candy === 'm&i') {
        if (career === 'writer') {
          $("#celebrity").text("Michael Scott");
        } else if (career === 'graphicD') {
          $("#celebrity").text("Oscar Martinez");
        } else if (career === 'ceo') {
          $("#celebrity").text("Erin Hannon");
        }
      } else if (candy === 'butter') {
        if (career === 'writer') {
          $("#celebrity").text("Creed Bratton");
        } else if (career === 'graphicD') {
          $("#celebrity").text("Andy Bernard");
        } else if (career === 'ceo') {
          $("#celebrity").text("Jim Jalpert");
        }
      }
    } else if (paper === 'wrapP') {
      if (candy === 'm&m') {
        if (career === 'writer') {
          $("#celebrity").text("Toby Flenderson");
        } else if (career === 'graphicD') {
          $("#celebrity").text("Ryan Howard");
        } else if (career === 'ceo') {
          $("#celebrity").text("Dwight Schrute");
        }
      } else if (candy === 'm&i') {
        if (career === 'writer') {
          $("#celebrity").text("Holly Flax");
        } else if (career === 'graphicD') {
          $("#celebrity").text("Nellie Bertram");
        } else if (career === 'ceo') {
          $("#celebrity").text("Jan Levinson");
        }
      } else if (candy === 'butter') {
        if (career === 'writer') {
          $("#celebrity").text("Kelly Kapoor");
        } else if (career === 'graphicD') {
          $("#celebrity").text("Merideth Palmer");
        } else if (career === 'ceo') {
          $("#celebrity").text("Robert California");
        }
      }
    } else if (paper === 'newsP') {
      $("#celebrity").text("Stanley Hudson")
    }

    $("#result").show();

    event.preventDefault();
  });
});