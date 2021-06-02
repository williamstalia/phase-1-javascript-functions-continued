// First attempt
function saturdayFun(first="roller-skate", last="bathe my dog") {
    console.log('This Saturday, I want to ${first}!');
}
saturdayFun(); 
saturdayFun("roller-skate"); //=> "This Saturday, I want to roller-skate!"

//Second Attempt
function saturdayFun(fun1, fun2){
    if (fun1 === undefined) (fun2 = 'roller-skate')
    return 'This Saturday, I want to ${fun2}!'; 
}

function mondayWork(agenda1, agenda2) {
    if (agenda1 === undefined) (agenda2 = "go to the office")
    return 'This Monday, I will ${agenda2}.';
}

function wrapAdjective(bright, word) {
    if (bright = '*') (word = 'special')
    return 'You are ${bright}${word}${bright}';
}