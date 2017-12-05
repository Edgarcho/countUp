$(document).ready(function(){
  $("form#numbers_input").submit(function(event){
    event.preventDefault();
    var countEnd = parseInt($("input#countTo").val());
    var countStart = parseInt($("input#countBy").val());
    var output = [];
    for (index = 0; index <= countEnd; index += countStart){
      output.push(index);
    }
    $("#response").show();
    $("#response").append(output);
  });
});
