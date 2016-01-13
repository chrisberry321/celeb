

$(document).ready(function() {
  $('#blanks form').submit(function(event) {

      age = parseInt($("input#age1").val());
      orientation = $("select#orientation1").val();
      gender = $("select#gender1").val();

      // if (age >=50 && gender === "Female" && orientation === "Straight" || gender === "Male" && orientation === "Gay") {
      //   $('#container-result1').show();
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
        else {}
      }
      else {}

    event.preventDefault();
  });
});

  //     $('.name1').text(name1Input);
  //     $('.address1').text(address1Input);
  //     $('.city1').text(city1Input);
  //     $('.state1').text(state1Input);
  //     $('.zipcode1').text(zipcode1Input);
  //
  //     $('.story').show();
  //
  //     event.preventDefault();
  //
  //   });
  // });



//   var age = parseInt(prompt("How old are you?"));
//
//   if (age >= 18) {
//     $('#adultcontent').show();
//   } else {
//     $('#under-18').show();
//   }
// });


// $(document).ready(function() {
//   var age = parseInt(prompt("What is your age?"));
//
// });
// //   var animal = prompt("What is your favorite animal?");
//
//   if (animal === "turtle") {
//     $('#turtle').show();
//   } else if (animal === "bird") {
//     $('#bird').show();
//   }
//     else if (animal === "snake") {
//     $('#snake').show();
//   }
// else {
// alert("Sorry this is currently not an option, please try again");
// var animal = prompt("What is your favorite animal?");
// }
// });
