//Pick random messages from Luck for the day, weather, daily quote

let randomNumber = (n) => Math.floor(Math.random() * n);

let luck = ["good", "bad", "neutral"];
let weather = [["sunny", "cloudy", "partly cloudy"],["rain", "fog", "snow", "hail", "thunderstorms"]];
let dailyQuote = ["“The secret of getting ahead is getting started.” —Mark Twain", "“It’s hard to beat a person who never gives up.” —Babe Ruth", "“Everything you can imagine is real.”―Pablo Picasso", "“Do one thing every day that scares you.” ―Eleanor Roosevelt", "“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” —Socrates"];

let printIt = () => console.log(`Today you will have ${luck[randomNumber(luck.length)]} luck. 
\nThe weather for today is ${weather[0][randomNumber(weather[0].length)]} with a chance of ${weather[1][randomNumber(weather[1].length)]}. 
\nThe quote of the day is: ${dailyQuote[randomNumber(dailyQuote.length)]}`);

printIt();