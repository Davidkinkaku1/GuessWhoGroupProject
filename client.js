let randomNum = 0;
console.log('Here are all the available people:', people);
$().ready(function () {
    console.log('DOM is ready');

    // calling the functions
    randomNum=randomNumber(0,4);
    console.log(people[randomNum]);
    addImage();
    
    // Displaying to the DOM


    // 
});

// [x] - Dislpay the images
// [x] - pick random person 
// [] - logics to win or lose 
// [] - 



function addImage() {
    //adding h1 tag
    let h1Adder = $(`<h1>Click Me: <span>${people[randomNum].name}</span></h1>`);
    $(".gameZone").append(h1Adder);
    
    //loop through the array of people 
    for (let i = 0; i < people.length; i++) {
        let picAdder = $(`<div class='picZone'> 
    <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">
    </div>`)
        //append pictures to DOM
        $(".gameZone").append(picAdder);

    }
}


//function to generate a random number
function randomNumber(min, max) {

    for (let i = 0; i < people.length; i++) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
    
}

// console.log(randomNumber(0, 4));


// function randomNumber(){
// let result = ' ',
// let images = <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">
// let allImages = 
//     for (let i = 0; i < people.length; i++) {
//     return Math.floor(Math.random() * (1 + max - min) + min);
//     } 
//     console.log(randomNumber(people, 4))
// } // end of randomNUmber






// given function on the useful tool