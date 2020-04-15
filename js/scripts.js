var letterCheck = function(letter){
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    return "vowel";
  } else if (letter >= 'a' && letter <= 'z') {
    return "consonant";
  } else {
    return "neither";
  };
}

var vowelModify = function(word){
  if (word.length === 1){
    word = word + "ay";
  } else {
    word = word + "way";
  };
  return word;
}





var translatorPigLatin = function(sentence){
  var words = sentence.split(' ');
  for(index = 0; index < words.length; index += 1){
    words[index] = words[index].toLowerCase();

    if (letterCheck(words[index][0]) === "vowel") {
      console.log(words[index] + " starts with a vowel and becomes:");
      words[index] = vowelModify(words[index]);
      console.log(words[index]);
    } else if (letterCheck(words[index][0]) === "consonant") {
      console.log(words[index] + " starts with a consonant.");
    } else {
      console.log(words[index] + " starts with neither");
    };
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