







var translatorPigLatin = function(sentence){
  var words = sentence.split(' ');
  for(index = 0; index < words.length; index += 1){
    console.log(words[index]);
  };
  var output = words.join(' ');
  return output;
};

$(document).ready(function(){
  $("form#textForm").submit(function(event){
    event.preventDefault();
    var plainText = $("input#phrase").val();
    var pigLatin = translatorPigLatin(plainText);

    $("#responce p").text(pigLatin);
    $("#responce").show();
  });
});