<<<<<<< HEAD
// var figlet = require("figlet");

// figlet("Jai Hind ", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });



var oneLinerJoke = require('one-liner-joke');

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']
*/
// var getRandomJoke = oneLinerJoke.getRandomJoke({
//     'exclude_tags': ['dirty', 'racist', 'marriage']
//   });
// console.log(getRandomJoke)


/*
The variable getRandomJoke will contain a random joke with a tag and with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/

// var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');
// console.log(getRandomJokeWithTag)

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']
*/
// var getRandomJoke = oneLinerJoke.getRandomJokeWithTag('stupid', {
//   'exclude_tags': ['dirty', 'racist', 'marriage']
// });
=======
// var figlet = require("figlet");

// figlet("Jai Hind ", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });



var oneLinerJoke = require('one-liner-joke');

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']
*/
// var getRandomJoke = oneLinerJoke.getRandomJoke({
//     'exclude_tags': ['dirty', 'racist', 'marriage']
//   });
// console.log(getRandomJoke)


/*
The variable getRandomJoke will contain a random joke with a tag and with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/

// var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');
// console.log(getRandomJokeWithTag)

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']
*/
// var getRandomJoke = oneLinerJoke.getRandomJokeWithTag('stupid', {
//   'exclude_tags': ['dirty', 'racist', 'marriage']
// });
>>>>>>> 59a0b268195fbb671256444ba536d09bf9300fc8
// console.log(getRandomJoke)