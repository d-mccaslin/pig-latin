//UI Logic
$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
    const userInput = $("#userPhrase").val();
    console.log(pigLatin(userInput));
  });

});

//Business Logic
function pigLatin(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  string = string.toLowerCase();

  if (vowels.indexOf(string[0]) > -1) {
    return string = string + "way";
  } else if (string[0].includes("q") && string[1].includes("u")) {
    let quCons = string.slice(0, 2);
    let newString = string.slice(2, string.length);
    string = newString + quCons + "ay";
    return string;
  } else {
      for (let i = 0; i < string.length; i++) {
          if (vowels.indexOf(string[i]) > -1) {
          let consonants = string.slice(0, i);
          let newString = string.slice(i, string.length);
          string = newString + consonants + "ay";
          break;
          }
      }
      return string;
    }
}

/*
function pigLatinWithRegex(string) {
  //return newString = string.replace(/[aeiou]/i,"x");
}
*/

