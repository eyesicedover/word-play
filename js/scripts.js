$(document).ready(function(){
  $("#wordForm").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var sentenceArray = sentence.split(" ");
    var filterArray = sentenceArray.map(function(word) {
      if (word.length >= 3) {
        return word;
      }
    });
    var reverseArray = filterArray.reverse();
    $(".output").text(reverseArray.join(" "));
  });
});
