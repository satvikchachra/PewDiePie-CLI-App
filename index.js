const readlineSync = require('readline-sync');
const chalk = require('chalk');

// Get username
const userName = readlineSync.question('What is your good name?\n');

// Welcome message
console.log('Hi ' + chalk.bgCyan(userName) + '! How well do you know PewDiePie? Lets put it to a test! Shall we?!');

console.log('\n*** PREMISE ***\n');

console.log('IF YOU ARE A FAN OF ' + (chalk.bgMagenta('PEWDIEPIE')) + ' , YOU GOTTA BE FLOOR GANG \nSo Everything works in reverse! If you answer ' + chalk.bgRed('correctly') + ' you will be awarded ' + chalk.bgRed('-1 Point') + '\nbut if you answer ' + chalk.black.bgGreen('incorrectly') + ' you will be awarded ' + chalk.black.bgGreen('+1 Point') + ' \nMore the negative score, farther away you are from the ceiling ' + chalk.bgRed('EPIC') + '\nMore the positive score, closer you are to the ceiling ' + chalk.black.bgGreen('CRINGE') + '\nLevels will proceed from Level 0 to Level -1\nScore atleast -1 to proceed to Level -1 (OUHHH)\n');

// Tracking user score
let score = 0;

console.log(chalk.bgMagenta("Welcome to the PewDiePie CLI: The Most Relevant Game Of All Time"));

// Level Zero Question Answer Array for quiz
const levelZero = [
    {
        question: `
	What is the real name of PewDiePie?
  A. Felix Arvid Ulf Kjellberg
  B. Felix Arvid Kjellberg
  C. Felix Arvad Ulf Kjellberg
  D. Felix Arvid Ulf Kellberg\n`,
        answer: "A"
    },

    {
        question: `
  On which channel he is planning his next disstrack?
  A. T-Series
  B. Cocomelon - Nursery Rhymes
  C. CarryMinati
  D. Jackspedicy\n`,
        answer: "B"
    },

    {
        question: `
	What is his fanbase called ?
  A. Floor Gang
  B. Simps
  C. Bro Army
  D. All of the above\n`,
        answer: "D"
    },
    {
        question: `
	With which channel will be his next collaboration ?
  A. Pokimane
  B. Corpse Husband
  C. Jubilee
  D. KSI\n`,
        answer: "C"
    },
    {
        question: `
	PewDiePie's recent video got claimed for playing which song?
  A. My Heart Will Go On
  B. Closer
  C. Blinding Lights
  D. Prisoner\n`,
        answer: "A"
    }
];

// Level Minus One Question Answer Array for quiz
const levelMinusOne = [
    {
        question: `What's the name of the University that PewDiePie dropped out of?
    A. Chalmers University
    B. New Jersey University
    C. Halgr University
    D. Sotters University\n`,
        answer: 'A'
    },
    {
        question: `What name did PewDiePie give to horse in Minecraft?
    A. Ulla Britta
    B. Sven
    C. Joergen Smoergen
    D. Water Sheep\n`,
        answer: 'C'
    },
    {
        question: `What name did PewDiePie give to puppy in Minecraft?
    A. DJ
    B. Sven
    C. Bebe
    D. Creeper\n`,
        answer: 'B'
    },
    {
        question: `What is his favourite food?
    A. Meat Balls
    B. Swedish Bread
    C. Pancake
    D. All of the above\n`,
        answer: 'D'
    }
];

// Evaluating answers given by user
const evaluateUser = (question, answer) => {
    const userAnswer = readlineSync.question(question);

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log(chalk.black.bgGreen('Correct Answer'));
        score--;
    } else {
        console.log(chalk.bgRed('Incorrect Answer'));
        score++;
    }
    console.log(chalk.black.bgWhite('Correct Answer was: ' + answer));
    console.log(chalk.bgCyan('Your score: ' + score + '\n'));
}

// Tracking high score
const highScores = [
    {
        name: 'Satvik',
        score: 0,
        reason: 'Floor Gang'
    },
    {
        name: 'SaTvIk',
        score: -1,
        reason: 'Basement Gang'
    }
];

// Level Zero of the Quiz
console.log(chalk.black.bgYellow('\n*** Level 0 ***\n'));

// Level Zeo
for (let i = 0; i < levelZero.length; i++) {
    let currentQuestion = levelZero[i];
    evaluateUser(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.black.bgGreen('Your current score ' + score));

// Level Up Condition Check
if (score <= -1) {
    console.log(chalk.black.bgYellow('\n*** Level -1 ***\n'));

    // Level Minus One of the Quiz
    for (let i = 0; i < levelMinusOne.length; i++) {
        let currentQuestion = levelMinusOne[i];
        evaluateUser(currentQuestion.question, currentQuestion.answer);
    }
} else {
    console.log(chalk.bgYellow('Sorry! You need atleast -1 point to proceed to level -1. Try again later.'));
}

console.log(chalk.black.bgGreen('Your final score ' + score));

console.log('\n***    ***     ***\n');

// Updating high score
if (score < highScores[1].score) {
    highScores[1].score = score;
    highScores[1].name = userName;
    highScores[1].reason = 'You deserve it. *BRO FIST*';
}

// Concluding highscore message
console.log('Checkout highscore: ');
for (let i = 0; i < highScores.length; i++) {
    let highscoreUser = highScores[i];
    console.log(chalk.bgCyan('name: ' + highscoreUser.name));
    console.log(chalk.black.bgGreen('score: ' + highscoreUser.score));
    console.log(chalk.bgMagenta('reason: ' + highscoreUser.reason));
    console.log();
}

console.log(chalk.bgYellow('\n*** Thanks ' + userName + ' for playing the most RELEVANT game of all time! ***\n'));