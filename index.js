var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var highScores = [
  {
    name : "Apnita",
    score : "2"
  },
  {
    name : "Abhishek",
    score : "4"
  }
]


var userName = readlineSync.question("Can I have you name please?\n");
console.log("Hello! " + userName);

var bool = readlineSync.keyInYN('Shall we play a fun quiz?');

if(bool){
  console.log("Lets Goooo!!");
}
else{
  console.log("You have play it anyway :p");
}

console.log("Lets start " + userName);

console.log("--------------------------------------");

var questions=[
  {
    question: "What is the name of captain america\n a)Steve Rogers\n b)Tony Stark\n c)Nick fury\n d)Bucky\n",
    answer: "a"
  },
  {
    question: "What was the name of iron man's father\n a)Sammy Stark\n b)Howard Stark\n c)Clinton Stark\n d)Ronald Stark\n",
    answer: "b"
  },
  {
    question: "Which character did not turn to dust when thanos snapped fingers?\n a)Steve Rogers\n b)Nick fury\n c)Drax\n d)Black panter\n",
    answer: "a"
  },
  {
    question: "Who was the keeper of soul stone at Vormir\n a)The destoyer\n b)Thanos\n c)Hela\n d)Red Skull\n",
    answer: "d"
  },
  {
    question: "What alien race did captain marvel live with?\n a)The watchers\n b)The asgardians\n c)The Kree\n d)The skrulls\n",
    answer: "c"
  }
]

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Yay! you are right ") + chalk.cyan(userName));
    score = score + 1;
  }
  else{
    console.log(chalk.red("Wrong answer :frowning: "));
  }

  console.log(chalk.magentaBright("----------------"));
}

for(var i = 0; i < questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

var flag = -1;
for(var j = 0; j < highScores.length; j++){
  if(score > highScores[j].score){
    flag = flag + 1;
  }
}

if(flag===-1){
  console.log("This was not the high score but thank you for playing");
}
else{
  console.log(chalk.green.underline.bold("Congratulations you have beaten an high score of ", highScores[flag].name + "!"));
}


