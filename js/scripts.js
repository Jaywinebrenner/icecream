// $(document).ready(function(){
//   $("#icecreamForm").submit(function(event){
//     event.preventDefault();
//
//     var blanks = ["1", "2", "3"];
//     blanks.forEach(function(blank){
//       var userInput = $("input" + blank).val();
//
//     $("output" + blank).append(userInput);
//
//
//   });
//   });
// });












$(document).ready(function(){
    $(".icecreamForm").submit(function(event){
        event.preventDefault();
        var blanks = ["ice1", "ice2", "ice3", "ice4", "ice5"];

        blanks.forEach(function(blank){
          userInput = $("#" + blank).val();


          $("." + blank).append(userInput);



        })



        });
      });
