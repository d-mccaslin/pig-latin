# Pig Latin

#### _{Brief description of application}, {Date of current version}_

#### By David Cole & David McCaslin

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Specs

The application will...
* allow the user to input a phrase and click to submit it
* translate the inputted string into "Pig Latin" and store this as a new variable
* (Rule 1) add "way" to the end of inputs beginning with a vowel
* (Rule 2) move all the first consecutive consonants to the end of inputs beginning with one or more consonants and add "ay"
* (Rule 3) will move "u" with the "q" for words with consonants containing "qu"
* (Rule 4) treat "y" as a consonant for words beginning with "y"
* display the new, translated string to the user through a UI

## Tests
Describe: pigLatin()
Test: "It will add 'way' to the end of words that begin with a vowel"
Expect: (pigLatin("a")).toEqual("away");

Test: "It will move the first consecutive consonants to the end of input words and add 'ay' to the end"
Expect: (pigLatin("Pig")).toEqual("igPay");

Test: "It will move the letters 'q' and 'u' to the end of words that begin with 'qu'"
Expect: (pigLatin("Quest")).toEqual("estQuay");

Test: "It will treat the letter 'y' as a consonant for words that begin with 'y', ignore this rule otherwise"
Expect: (pigLatin("You")).toEqual("ouYay");



## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**