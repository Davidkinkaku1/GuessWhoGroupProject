let randomNum = 0;
let correctGuess = '';

console.log(randomNum);
console.log(correctGuess);

console.log('Here are all the available people:', people);
$().ready(function () {
    console.log('DOM is ready');

    // calling the reset game function, to help reset the game.
    resetGame();

    // adding the image to the DOM ß
    function addImage() { // adding images to the DOM 
        //adding h1 tag

        // declaring a new variable and setting on the DOM, that will display the radom name
        let h1Adder = $(`<h1>Click Me: <span>${people[randomNum].name}</span></h1>`);
        // emptying the main, so that the new game won't repeat itself on the DOM
        $(".gameZone").empty();
        // appending the the h1Adder to the DOM
        $(".gameZone").append(h1Adder);

        //looping through the array of people image.
        for (let i = 0; i < people.length; i++) { // people[i].name = will give the id of the person as the image id and ${people[i].githubUsername} will get their githubUsername
            let picAdder = $(`<div class='picZone'> 
                        <img data-name="${people[i].name}" src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">
                        </div>`)
            //appending the pictures to DOM
            $(".gameZone").append(picAdder);

        } // end of for loop
    } // end of addImage function


    //function to generate a random number
    function randomNumber(min, max) { // random number formula in a function

        for (let i = 0; i < people.length; i++) { // looping through the array of people and returning a radom number, which each person is assigned a number
            return Math.floor(Math.random() * (1 + max - min) + min);
        } // end of for loop

    } // end of randomNumber Function 

    $('.gameZone').on('click', '.picZone', function (event) {

        correctGuess = people[randomNum].name; // set the correctGuess equal to the radom name 
        console.log(correctGuess) // test
        console.log($(event.target).data()); // 
        if (correctGuess === $(event.target).data().name) {// logic of if you win or lose the game

            // $(event.target)
            $(event.target).addClass('winner');// adding the winner class after winnning.

            alert('YOU WON THE GAME!!!') // response if the player win

            setTimeout(resetGame, 2000); // resets game after 2 seconds of a win
        } else
            alert('Hm... try again!'); // response if the player loose


    });
    console.log(correctGuess);


    // function to reset the game, if the game is won.. it calls the function again.
    function resetGame() { // this function calls for random numbers and also radom people/ while setting randomNum(variable) =randomNumber(function)

        // calling the functions
        $('img').removeClass('winner');
        randomNum = randomNumber(0, 4); // The array of people has only 5 people, so 0 as the min and 4 as the max
        console.log(people[randomNum]); // just a console to show the random name.
        addImage(); // calling the add image function to operate as the reset function is being called.

    } // end of resetGame function 
}); // end of readyNow