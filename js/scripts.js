

$(document).ready(function() {
  $('#blanks form').submit(function(event) {

      age = parseInt($("input#age1").val());
      orientation = $("select#orientation1").val();
      gender = $("select#gender1").val();

      // if (age >=50 && gender === "Female" && orientation === "Straight" || gender === "Male" && orientation === "Gay") {
      //   $('#container-result1').show();
      //   }
      //   if(age >=50 && gender === "Female" && orientation === "Gay" || gender === "Male" && orientation === "Straight") {
      //     $('#container-result2').show();
      //     }
      // if (age <50 && gender === "Female" && orientation === "Straight" || gender === "Male" && orientation === "Gay") {
      //   $('#container-result3').show();
      //   }
      //   if(age <50 && gender === "Female" && orientation === "Gay" || gender === "Male" && orientation === "Straight") {
      //     $('#container-result4').show();
        // }
      // }


      // }

      if (age >= 50){
        if (gender === "Female"){
          if (orientation === "Straight") {
            $('#container-result2').show();
          }
          else {
            $('#container-result1').show();
          }
        }
        else {
          if (orientation === "Straight"){
            $('#container-result1').show();
          }
          else {
            $('#container-result2').show();
          }
        }
      }
      else {
        if (gender === "Female"){
            if (orientation === "Straight"){
              $('#container-result3').show();
            }
            else{
              $('#container-result4').show();
            }
        }
        else{
          if (orientation === "Straight") {
            $('#container-result4').show();
          }
          else {
            $('#container-result3').show();
          }
        }
      }

    event.preventDefault();
  });
});

  
