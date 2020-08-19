//UI Logic
$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
    const userInput = $("#userPhrase").val();
  });

});

//Business Logic
function vowelSearch(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  string = string.toLowerCase();

  if (vowels.indexOf(string[0]) > -1) {
    return string = string + "way";
  } else {
    
  }
}

function consonantSearch(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  string = string.toLowerCase();

  let target;
  if (consonants.indexOf(string[0]) > -1) {
    for (let i = 0; i < string.length; i++) {
      let letter = string[i];
      if (consonants.includes(letter)) {
        target = target + letter;
      } else if ("not consonant") {
        break;
      }
    return string = string + target + "ay";
  }


}

