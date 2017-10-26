$(document).ready(function() {
  $("#personalInfo").submit(function(event) {
    var size = $("#size").val();
    var frontBack = $("#frontBack").val();
    var style = $("#style").val();
    var number = $("#number").val();
    var feels = $("#feels").val();


       if (size === "small" && frontBack === "front" && style === "yes" && number === "rounded" && feels === "tired") {
         $("#ruby").show();
         }
         else if (size === "large" && frontBack === "front" && style === "yes" && number === "rounded" && feels === "happy") {
          $("#cSharp").show();
          }
          else if (size === "large" && frontBack === "back" && style === "no" && number === "exact" && feels === "tired") {
          $("#php").show();
          }
          else {
          $("#research").show();
          }

  event.preventDefault();
  });
});
