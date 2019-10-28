$(document).ready(function(){
  $(".icecreamForm").submit(function(event){
    event.preventDefault();
    console.log("hi");

      var blanks = ["input1", "input2", "input3"];

        blanks.forEach(function(blank){
        var userinput = $("#" + blank).val();
        $("#out" + blank).append(userinput);
      })




  });
});
