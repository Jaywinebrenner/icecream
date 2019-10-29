
// This only works if id of input and class of output has the same name
$(document).ready(function(){
    $(".icecreamForm").submit(function(event){
        event.preventDefault();
        var blanks = ["ice1", "ice2", "ice3", "ice4", "ice5"];

        blanks.forEach(function(blank){
          var userInput = $("#" + blank).val();
          $("." + blank).append(userInput);
        });




        });
      });
