var letterCheck = function(letter){
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    return "vowel";
  } else if (letter >= 'a' && letter <= 'z') {
    return "consonant";
  } else {
    return "neither";
  };
};

var vowelModify = function(word){
  if (word.length === 1){
    word = word + "ay";
  } else {
    word = word + "way";
  };
  return word;
};

var consonantModify = function(word){
  var wordBegining = "";
  var wordEnding = word[0];
  var wordNew = word;

  for(index = 1; index < word.length; index += 1){
    if (letterCheck(word[index]) === "consonant" && word[index] !== "y"){
      wordEnding = wordEnding + word[index];
    } else if (word[index - 1] === "q" && word[index] === "u"){
      wordEnding = wordEnding + word[index];
      for (index2 = index + 1; index2 < word.length; index2 += 1) {
        var wordBegining = wordBegining + word[index2];
      };
      index = 100;
    } else {
      for (index2 = index; index2 < word.length; index2 += 1) {
        var wordBegining = wordBegining + word[index2];
      };
      index = 100;
    };
  };
  

  wordNew = wordBegining + wordEnding + "ay";
  return wordNew;
};

var translatorPigLatin = function(sentence){
  var words = sentence.split(' ');
  for(i = 0; i < words.length; i += 1){
    words[i] = words[i].toLowerCase();

    if (letterCheck(words[i][0]) === "vowel") {
      console.log(words[i] + " starts with a vowel and becomes:");
      words[i] = vowelModify(words[i]);
      console.log(words[i]);
    } else if (letterCheck(words[i][0]) === "consonant") {
      console.log(words[i] + " starts with a consonant and becomes:");
      words[i] = consonantModify(words[i]);
      console.log(words[i]);
    } else {
      console.log(words[i] + " starts with neither");
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