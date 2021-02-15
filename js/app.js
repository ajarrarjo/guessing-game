'use strict';


function wlecomingUser() {
    let gussetName = prompt('Please enter your name', 'Your Name');
    console.log('asking the user about his name ==>', 'Welcome ' + gussetName);
    alert('Welcome ' + gussetName);
}

function askingForInput() {

    let answerAfterCheck = '';

    let Experiance = prompt('Do you think that I worked before in the IT Field? answer with yes/no - y/n');
    answerAfterCheck = checkInput(Experiance, 'Do you think that I worked before in the IT Field? answer with yes/no - y/n');
    alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'you are correct' : 'how did you know? is it because I mentioned that I worked in different fields!!');
    // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'how did you know? is it because I mentioned that I worked in different fields!!');

    let Health = prompt('Do you think i\'m overweight? answer with yes/no - y/n');
    answerAfterCheck = checkInput(Health, 'Do you think i\'m overweight? answer with yes/no - y/n');
    alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'you are correct' : ' I need to burn some fat');
    // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct' : ' I need to burn some fat?');


    let Mentalhealth = prompt('Do you think i am smart? answer with yes/no - y/n');
    answerAfterCheck = checkInput(Mentalhealth, 'Do you think i am smart? answer with yes/no - y/n');
    alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'you are correct' : 'I guess so, I am smart!');
    // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'I guess so, I am smart!');

    let Personalitychick = prompt('Am I a optimistic? answer with yes/no - y/n');
    answerAfterCheck = checkInput(Personalitychick, 'Am I a optimistic? answer with yes/no - y/n');
    alert((answerAfterCheck === 'n' || answerAfterCheck === 'no') ? 'you are correct' : 'I am optimistic');
    // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'I am optimistic');

    let Routine = prompt('Am I a night owl? answer with yes/no - y/n');
    answerAfterCheck = checkInput(Routine, 'Am I a night owl? answer with yes/no - y/n');
    alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'you are correct' : 'lets say I prefer night');
    // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'lets say I prefer night');
}

function checkInput(userAnswer, promptQuestion) {

    // console.log('first one ', userAnswer);
    while (userAnswer.toLowerCase() !== 'yes' && userAnswer.toLowerCase() !== 'y' && userAnswer.toLowerCase() !== 'n' && userAnswer.toLowerCase() !== 'no') {
        // ...
        // console.log('i\'m in the while');
        userAnswer = prompt(promptQuestion);
    }
    // console.log('second one ', userAnswer);
    return userAnswer.toLowerCase();
}

wlecomingUser();

askingForInput();




