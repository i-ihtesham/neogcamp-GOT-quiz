var readLineSync = require("readline-sync");

var highScores = [
  {
    name : "Ihtesham",
    score : 5
  }
]

var score = 0;

var questions = [
  {
    question : "How many dragons did Daenarys have? ",
    answer : "3"
  },
  {
    question : "How may seasons of GOT are there? ",
    answer : "8"
  },
  {
    question : "Who is the first character in the series to be called King in the North?",
    answer : "Robb Stark"
  },
  {
    question : "What is Jon Snow's first real name?",
    answer : "Aegon"
  },
  {
    question : "What is the motto of House Stark? ",
    answer : "Winter is coming"
  }
]

function play(question, answer)
{
  var userAns = readLineSync.question(question);
  if(userAns.toUpperCase() ==answer.toUpperCase())
  {
    console.log("You are right");
    score++;
  }
  else
  {
    console.log("You are wrong");
  }
}

function game()
{
  for(var i = 0; i<questions.length;i++)
    {
      play(questions[i].question, questions[i].answer);
    }
}

function welcome()
{
  var userName = readLineSync.question("Enter your name: ");
  console.log("Welcome "+userName);
  console.log("Let's begin the GOT quiz!!");
}
function displayScore()
{
  console.log("Your final score: "+score);
  console.log("------------");
  console.log("Score Table: ")
  for(var i = 0; i<highScores.length;i++)
    {
      console.log(highScores[i].name + " -> "+ highScores[i].score);
    }
  console.log("---------------");
  console.log("Ping me if you beat the highscore");
}

welcome();
game();
displayScore();