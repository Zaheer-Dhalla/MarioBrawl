// Mario Brawl Game
// Zaheer Dhalla
// Tuesday, December 1st, 2020

// Collaborators: Zayn 

// Creating a constant for the number of quotes 
const NUMBER_OF_QUOTES = 20;

// Creating arrays for the playable characters in my game as well as 
// A constant to regulate the array sizes to the amount of playable characters
const NUMBER_OF_CHARACTERS = 5;
let characters = new Array(NUMBER_OF_CHARACTERS);
let currentHealths = new Array(NUMBER_OF_CHARACTERS);
let maxHealths = new Array(NUMBER_OF_CHARACTERS);
let normalAttacks = new Array(NUMBER_OF_CHARACTERS);
let specialAttacks = new Array(NUMBER_OF_CHARACTERS);
let healPowers = new Array(NUMBER_OF_CHARACTERS);
let images = new Array(NUMBER_OF_CHARACTERS);
let quotes = new Array(NUMBER_OF_QUOTES);

// These variables are used to cycle through the characters and 
// To choose the characters for the user and computer
let currentIndex = 0;
let computerChoice = 0;

// These variables are used for the general timer at the top of the page when the game starts
let seconds = 0;
let minutes = 0;
let hours = 0;

// These variables allow for a random quote to be chosen and displayed
let randomQuote;
let randomQuoteChoice;
let randomQuoteChoice2;
let countdownClock = 0;

// These booleans activate when the matching ability is used
let normal = false;
let special = false;
let healDecision = false

// This variable works as a 3 sided boolean for ending the Game
gameFinished = 0;

// Calling the function that starts the game
runGame();

// Creating a function that calls the other functions 
// Needed to start the game
function runGame() {
    creatingCharacterAbilityValues();
    printStats(currentIndex);
}
// Giving values to all the variables in the arrays created above
function creatingCharacterAbilityValues() {
    // The values for the first character
    characters[0] = 'Bowser';
    currentHealths[0] = 550;
    maxHealths[0] = 550;
    normalAttacks[0] = 7;
    specialAttacks[0] = 16;
    healPowers[0] = 8;
    images[0] = 'bowser.gif'

    // The values for the second character
    characters[1] = 'Mario';
    currentHealths[1] = 350;
    maxHealths[1] = 350;
    normalAttacks[1] = 9;
    specialAttacks[1] = 19;
    healPowers[1] = 4;
    images[1] = 'mario.gif'

    // The values for the third character
    characters[2] = 'Luigi';
    currentHealths[2] = 450;
    maxHealths[2] = 450;
    normalAttacks[2] = 8;
    specialAttacks[2] = 17;
    healPowers[2] = 6;
    images[2] = 'luigi.gif'

    // The values for the fourth character
    characters[3] = 'Boo';
    currentHealths[3] = 300;
    maxHealths[3] = 300;
    normalAttacks[3] = 6;
    specialAttacks[3] = 20;
    healPowers[3] = 9;
    images[3] = 'boo.gif';

    // The values for the fifth character
    characters[4] = 'Donkey Kong';
    currentHealths[4] = 500;
    maxHealths[4] = 500;
    normalAttacks[4] = 10;
    specialAttacks[4] = 15;
    healPowers[4] = 5;
    images[4] = 'donkeyKong.gif';

    // Assigning values for my quotes array
    quotes[0] = 'Mario time!';
    quotes[1] = 'It\'s a-me, Mario!';
    quotes[2] = 'So long, King Bowser!';
    quotes[3] = 'Not on my melted mozarrella!';
    quotes[4] = 'Hey! Come back here! You big-a monkey!';
    quotes[5] = 'I wish Luigi were here, I could blame him!';
    quotes[6] = 'Nice of the princess to invite us over a picnic, eh Luigi?';
    quotes[7] = 'Now go home and eat some vegetables, Dr. Mario\'s orders!';
    quotes[8] = 'What a ride! That was almost as fast as traveling via pipe!';
    quotes[9] = 'Hey Luigi! Stick with me, Bro, and we\'ll win this one together!';
    quotes[10] = "Uh-oh! Lava's never fun! It always brings back bad memories for me..."
    quotes[11] = 'C\'mon, I\'ll help you sink your teeth into some delicious Koopameat.';
    quotes[12] = 'Sorry we can\'t stay and chat with you goons, but we have a race to win!';
    quotes[13] = 'Wow, an invitation from Peach! I\'ll head out right away. I hope she can wait for me!';
    quotes[14] = 'Mr. Koopa Koot wants my autograph? Me? I guess I\'m a little bit of a celebrity after all.';
    quotes[15] = 'Wake up, Luigi! The only time plumbers sleep on the job is when we\'re working by the hour.';
    quotes[16] = 'Well, like they say in Brooklyn, early to bed, early to catch the worm. Or is it the bagel?';
    quotes[17] = 'We better get that mummy back where it belongs, before it scares the pasta outta everybody!';
    quotes[18] = 'Oh no! Nothing good ever comes out of this creepy castle. I hope I can escape safe and sound!';
    quotes[19] = 'Here we go, off the rails. Did you know, it\'s time to raise our sails. It\'s freedom like, you never knew.';

    let music;
}
// This function displays the character information in a paragraph and the song names at the top
function printStats(currentCharacter) {
    document.getElementById('characterselection').innerText = characters[currentCharacter] + '\n Health Points: ' + currentHealths[currentCharacter] 
    + ' / ' + maxHealths[currentCharacter] + '\n Normal Attack: ' + normalAttacks[currentCharacter]
    + '\n Special Attack: ' + specialAttacks[currentCharacter] + '\n Healing: ' + healPowers[currentCharacter];
    document.getElementById('picture').src = images[currentIndex];
}
// This function cycles through the characters (goes to the next character)
function nextOption() {
    // Increasing the current index by 1 to go to the next value in the array
    currentIndex = currentIndex + 1;

    // Going back to the first value in the array if the next button is 
    // Pressed and there is no next value, only the previous values
    if (currentIndex > NUMBER_OF_CHARACTERS - 1) {
        currentIndex = 0;
    }
    // Displaying the new character stats
    printStats(currentIndex);
}
// This function cycles through the characters (goes to the previous character)
function previousOption() {
    // Decreasing the current index by 1 to go to the previous value in the array
    currentIndex = currentIndex - 1;

    // If the current index is 0 and this button is pressed, the current index
    // Will equal the maximum value in the array
    if (currentIndex < 0) {
        currentIndex = NUMBER_OF_CHARACTERS - 1;
    }
    // Displaying the new character stats
    printStats(currentIndex);
}
// This function chooses a random character for the user
function randomOption() {
    // Makes the current index a random number and then selects that character
    currentIndex = Math.floor(Math.random() * NUMBER_OF_CHARACTERS);
    selectCharacter();
    // Prints the stats of the new character
    printStats(currentIndex);
}
// This function allows the user to select a character
function selectCharacter() {
    // Displaying what the user picked 
    document.getElementById('selected').innerText = characters[currentIndex].toUpperCase() + ' Selected!';

    // Disabling all the buttons after a character is picked
    document.getElementById('btnSelectCharacter').disabled = true;
    document.getElementById('btnNextCharacter').disabled = true;
    document.getElementById('btnPreviousCharacter').disabled = true;
    document.getElementById('btnRandomCharacter').disabled = true;
    document.getElementById('btnStartGame').disabled = false;

    // Calling the functions that pick a remaining character for the computer and show the computer's stats
    pickRandomCharacterForComputer();
    computerStats();
}
// This function picks a random character that has not been selected yet for the computer
function pickRandomCharacterForComputer() {
    // Creating a random number so the computer picks
    // A random character that is available
    let computerChance = Math.floor(Math.random() * (NUMBER_OF_CHARACTERS - 1)) + 1;

    // If the user picks the first character, the computer 
    // Will pick the second, third, fourth, or fifth character randomly
    if (currentIndex == 0) {
        computerChoice = computerChance;
    }
    // If the user picks the second character, the computer 
    // Will pick the first, third, fourth, or fifth character randomly
    else if (currentIndex == 1) {
        if (computerChance == 1) {
            computerChoice = 0;
        }
        else if (computerChance == 2) {
            computerChoice = 2;
        }
        else if (computerChance == 3) {
            computerChoice = 3;
        }
        else {
            computerChoice = 4;
        }
    }
    // If the user picks the third character, the computer 
    // Will pick the first, second, fourth, or fifth character randomly
    else if (currentIndex == 2) {
        if (computerChance == 1) {
            computerChoice = 0;
        }
        else if (computerChance == 2) {
            computerChoice = 1;
        }
        else if (computerChance == 3) {
            computerChoice = 3;
        }
        else {
            computerChoice = 4;
        }
    }
    // If the user picks the fourth character, the computer will pick 
    // The first, second, third, or fifth character randomly
    else if (currentIndex == 3) {
        if (computerChance == 1) {
            computerChoice = 0;
        }
        else if (computerChance == 2) {
            computerChoice = 1;
        }
        else if (computerChance == 3) {
            computerChoice = 2;
        }
        else {
            computerChoice = 4;
        }
    }
    // If the user picks the fifth character, the computer 
    // Will randomly pick out of the other 4 characters
    else {
        computerChoice = Math.floor(Math.random() * (NUMBER_OF_CHARACTERS - 1));
    }
}
// This function displays that stats of the computer's player
function computerStats() {
    // Putting the stats into a single paragraph
    document.getElementById('computerSelect').innerText = 'Computer has picked ' + characters[computerChoice].toUpperCase()
        + '\n Health Points: ' + currentHealths[computerChoice] + ' / ' + maxHealths[computerChoice] + '\n Normal Attack: ' + normalAttacks[computerChoice] + '\n Special Attack: ' + specialAttacks[computerChoice]
        + '\n Healing: ' + healPowers[computerChoice];
    // Displaying the computer's character image
    document.getElementById('computerpicture').src = images[computerChoice];
}
// Creating a function that cycles through the songs by going to the next song
function nextSong() {
    currentSongIndex = currentSongIndex + 1;
    // If the next song index is out of the array, it goes back to the first index
    if (currentSongIndex > NUMBER_OF_SONGS - 1) {
        currentSongIndex = 0;
    }
    printStats(currentIndex);
}
// This function cycles through the song by going to the previous song
function previousSong() {
    currentSongIndex = currentSongIndex - 1;
    // If previous song is pressed but the song index is 0, it goes to the last index in the array
    if (currentSongIndex < 0) {
        currentSongIndex = NUMBER_OF_SONGS - 1;
    }
    printStats(currentIndex);
}
// Creating a function that plays the music that is selected
function playMusic() {
    // Playing the music that is selected
    music = document.createElement('audio');
    music.src = musicChoices[currentSongIndex];
    music.play();

    // Disabling the music buttons after an song is picked
    document.getElementById('btnNextSong').disabled = true;
    document.getElementById('btnPlayMusic').disabled = true;
    document.getElementById('btnPlayRandom').disabled = true;
    document.getElementById('btnPreviousSong').disabled = true;
}
// Creating a function that plays a random song from the array
function randomSong() {
    // Picks a random song from the array to play
    currentSongIndex = Math.floor(Math.random() * NUMBER_OF_SONGS);
    printStats(currentIndex);
    playMusic();
}
// This function starts the game by allowing the user to choose 
// Their moves and by making the computer start choosing moves as well
function beginGame() {
    // Removing all of the buttons not needed for the battle
    document.getElementById('btnSelectCharacter').remove();
    document.getElementById('btnNextCharacter').remove();
    document.getElementById('btnPreviousCharacter').remove();
    document.getElementById('btnRandomCharacter').remove();
    document.getElementById('btnStartGame').remove();

    // Enabling the attack and heal buttons
    document.getElementById('btnSimpleAttack').disabled = false;
    document.getElementById('btnSpecialAttack').disabled = false;
    document.getElementById('btnHealing').disabled = false;

    // Getting rid of all the text in the selected paragraph so it can be used for ability updates
    document.getElementById('selected').innerText = '';

    // Starting a general timer at the top of the page
    setInterval(timer, 1000);

    // Calling the countdown function that will be used later
    setInterval(countdown, 1000);

    // Running this function allows the computer to make decisions every 25 seconds
    setInterval(computerAttacks, 25000);

    // Calling the function that checks if the game is over
    setInterval(endGame, 20);

    // Getting rid of the welcome message
    document.getElementById('welcomeMessage').remove();
    document.getElementById('welcomeMessage2').remove();
}
function timer() {
    // Displaying how long the user has been playing at the top of the page
    document.getElementById('timer').innerText = 'You have been fighting  for ' + hours + ' hour(s), ' + minutes + ' minute(s), and ' + seconds + ' second(s)';

    // Always adding one second to the counter
    seconds = seconds + 1;

    // Adding 1 to the minutes variable when seconds reach 60. Also moving seconds back to 0.
    if (seconds == 60) {
        minutes = minutes + 1;
        seconds = 0;
    }
    // Doing the same thing when minutes reach 60. (Adding 1 to the hours variable when munites reach 60)
    if (minutes == 60) {
        hours = hours + 1;
        minutes = 0;
    }
}
// -------------Attacking and Healing-----------------// 
// Creating a function that inflicts normal damage to the computer or user
// The arguments are the player's attack stat, the multiplier for the attack, and the player getting attacked
function normalAttack(playerAttack, randomQuote, playerAttacked) {
    if (countdownClock != -1) {
        let attackDamage = Math.floor(Math.random() * ((normalAttacks[playerAttack] * (randomQuote + 2) / 2) - normalAttacks[playerAttack])) + normalAttacks[playerAttack];
        currentHealths[playerAttacked] = currentHealths[playerAttacked] - attackDamage;
        document.getElementById('selected').innerText = characters[playerAttack].toUpperCase() + ' Has dealt ' + attackDamage + ' normal damage upon ' + characters[playerAttacked].toUpperCase();
        printStats(currentIndex);
        computerStats();
    }
}
// This function inflicts special damage to the computer or 
// The player (depending on the arguments which are special attack stat, the 2 multipliers, and the player getting attacked)
function specialAttack(playerAttack, randomQuote, randomQuote2, playerAttacked) {
    if (countdownClock != -1) {
        let specialDamage = Math.floor(Math.random() * ((specialAttacks[playerAttack] * (randomQuote + randomQuote2 + 2) / 2) - specialAttacks[playerAttack])) + specialAttacks[playerAttack];
        currentHealths[playerAttacked] = currentHealths[playerAttacked] - specialDamage;
        document.getElementById('selected').innerText = characters[playerAttack].toUpperCase() + ' Has dealt ' + specialDamage + ' special damage upon ' + characters[playerAttacked].toUpperCase();
        printStats(currentIndex);
        computerStats();
    }
}
// This function heals the intended player. The arguments are player's heal stat, heal multiplier, and the player being healed
function heal(playerHeal, healMultiplier, playerHealed) {
    if (countdownClock != -1) {
        let healing = Math.floor(Math.random() * ((healPowers[playerHeal] * (healMultiplier + 2) / 2) - healPowers[playerHeal])) + healPowers[playerHeal];
        currentHealths[playerHealed] = currentHealths[playerHealed] + healing;
        document.getElementById('selected').innerText = characters[playerHealed].toUpperCase() + ' Has healed ' + healing + ' health points'; 
        printStats(currentIndex);
        computerStats();
    }
    // If the user or computer heals more than the max amount, the player reaches their max health
    if (currentHealths[playerHealed] > maxHealths[playerHealed])
    {
       currentHealths[playerHealed] = maxHealths[playerHealed];
       printStats(currentIndex);
       computerStats();
    }
}
// -----------------------------------------------------//
// This function controls what decision the computer will make (basic intelligence with some decisions based on health)
function computerAttacks() {
    // Creating a random number that decides which move the computer will make
    let randomComputerChoice = Math.floor(Math.random() * 100);

    // These are multipliers that can change the amount of damage or healing that is done
    let normalAttackMultiplier = Math.floor(Math.random() * 20);
    let specialAttackMultiplier = Math.floor(Math.random() * 20);
    let specialAttackMultiplier2 = Math.floor(Math.random() * 20);
    let healMultiplier = Math.floor(Math.random() * 20);

    // This statement activates a normal attack if the random choice number is less than or equal to 50
    if (randomComputerChoice <= 50 && currentHealths[currentIndex] > 0) {
        // If the computer is low on health, it will decide to heal instead
        if (currentHealths[computerChoice] < 75) {
            heal(computerChoice, healMultiplier, computerChoice);
        }
        else {
            normalAttack(computerChoice, normalAttackMultiplier, currentIndex);
        }
    }
    // This statement activates a special attack if the random choice number is between 50 and 70
    else if (randomComputerChoice > 50 && randomComputerChoice < 70 && currentHealths[currentIndex] > 0) {
        specialAttack(computerChoice, specialAttackMultiplier, specialAttackMultiplier2, currentIndex);
    }
    // This statement activates the healing move if the random choice number is greater than 70
    else if (randomComputerChoice >= 70 && currentHealths[currentIndex] > 0) {
        // If the computer has a lot of health or the user has low health, a normal attack will be done instead
        if (currentHealths[currentIndex] < 75 || currentHealths[computerChoice] > (maxHealths[computerChoice] - 50)) {
            normalAttack(computerChoice, normalAttackMultiplier, currentIndex);
        }
        else {
            heal(computerChoice, healMultiplier, computerChoice);
        }
    }
}
// ----------------User Attacking and Healing--------------------//
// Countdown timer for typing the quotes
function countdown() {
    if (countdownClock > 0) {
        // Decreases the countdown by 1 every second if the countdown is greater than 0
        countdownClock = countdownClock - 1;
    }
    if (countdownClock >= 0) {
        // Displays the countdown above the quote
        document.getElementById('countdown').innerText = countdownClock;
    }
}
// This function is called when I want to enable the buttons after a turn is over
// The special button is not here because I want to manage how often it is available to use
function enableButtons() {
    document.getElementById('btnSimpleAttack').disabled = false;
    document.getElementById('btnHealing').disabled = false;
    document.getElementById('typeQuotes').disabled = true;
    document.getElementById('typeQuotes').value = '';
    countdownClock = 0;
}
// This function disables all of the user's buttons and is called at the start of the user's turn
function disableButtons() {

    document.getElementById('btnSpecialAttack').disabled = true;
    document.getElementById('btnSimpleAttack').disabled = true;
    document.getElementById('btnHealing').disabled = true;

    // Enabling the textbox so the user can type in it
    document.getElementById('typeQuotes').disabled = false;
}
//This function shows the quote and allows the user to type it in after the simple attack btn is clicked
function simpleAttackPressed() {
    // These variables get a random quote from the array
    randomQuoteChoice = Math.floor(Math.random() * NUMBER_OF_QUOTES);
    randomQuote = quotes[randomQuoteChoice];

    // Disabling the user's buttons
    disableButtons();
    countdownClock = 31;

    // Calling the function that manages what the user types into the textbox
    setInterval(simpleAttackTyping, 20);
    normal = true;
}
// This function manages what the user types in and verify if the user's attack is successful
function simpleAttackTyping() {
   
    // Declares values that are needed to verify the users input
    let wordsTyped = document.getElementById('typeQuotes');

    let typedWords = quotes[randomQuoteChoice].substr(0, quotes[randomQuoteChoice].length - randomQuote.length);

    // This variable stores the next word in the quote by finding the next occurance of a SPACE 
    // And uses that as a length for the substring
    let nextWord = randomQuote.substr(0, randomQuote.indexOf(' ') + 1);

    // If the user types in the next word correctly, the next word will 
    // change to the actual next word in the quote and will get rid of that word from the quote that is displayed
    if (wordsTyped.value == nextWord && normal == true) {
        wordsTyped.value = '';
        randomQuote = randomQuote.substr(randomQuote.indexOf(' ') + 1, randomQuote.length);
        nextWord = randomQuote.substr(0, randomQuote.indexOf(' '));
        typedWords = quotes[randomQuoteChoice].substr(0, quotes[randomQuoteChoice].length - randomQuote.length);
        // Displaying the words typed
        document.getElementById('typedWords').innerText = typedWords;
    }
    document.getElementById('showQuote').innerText = randomQuote;

    // This statement inflicts normal damage on the computer if the quote is typed before the 
    // Countdown hits 0. It also enables the buttons and tells the user what happened
    if (wordsTyped.value == randomQuote.substr(0,randomQuote.lastIndexOf('')) && countdownClock > 0 && normal == true && randomQuote.length < 12) {
        normalAttack(currentIndex, randomQuoteChoice, computerChoice);
        document.getElementById('typedWords').innerText = '';
        enableButtons();
        document.getElementById('btnSpecialAttack').disabled = false;
        normal = false;
        randomQuote = ' ';
    }
    // If the user did not type in the quote on time, no damage is inflicted and the turn is over
    else if (wordsTyped.value != randomQuote.substr(0,randomQuote.lastIndexOf('')) && countdownClock == 0 && normal == true) {
        document.getElementById('selected').innerText = 'Normal Attack Un-Successful!';
        enableButtons();
        document.getElementById('typedWords').innerText = '';
        document.getElementById('btnSpecialAttack').disabled = false;
        normal = false;
        randomQuote = ' ';
    }
}
// This function sets up all the information needed when the special btn is pressed
function specialAttackPressed() {
    randomQuoteChoice = Math.floor(Math.random() * NUMBER_OF_QUOTES);
    randomQuoteChoice2 = Math.floor(Math.random() * NUMBER_OF_QUOTES);
    randomQuote = quotes[randomQuoteChoice] +' ' + quotes[randomQuoteChoice2];

    // Disabling the user's buttons and giving the user 40s to type this long quote
    disableButtons();
    countdownClock = 41;

    // Calling the function that manages what the user types into the textbox
    setInterval(specialAttackTyping, 20);
    special = true;
}
// This function is used to verify if the special attack is valid or not
function specialAttackTyping() {
   
     // Declares values that are needed to verify the users input
    let wordsTyped = document.getElementById('typeQuotes');
    let fullQuote = quotes[randomQuoteChoice] + ' ' + quotes[randomQuoteChoice2];
    let typedWords = fullQuote.substr(0, fullQuote.length - randomQuote.length);

    // This variable stores the next word in the quote by finding the next occurance of a SPACE 
    // And uses that as a length for the substring
    let nextWord = randomQuote.substr(0, randomQuote.indexOf(' ') + 1);

    // If the user types in the next word correctly, the next word will 
    // change to the actual next word in the quote and will get rid of that word from the quote that is displayed
    if (wordsTyped.value == nextWord && special == true) {
        wordsTyped.value = '';
        randomQuote = randomQuote.substr(randomQuote.indexOf(' ') + 1, randomQuote.length);
        nextWord = randomQuote.substr(0, randomQuote.indexOf(' '));
        typedWords = fullQuote.substr(0, fullQuote.length - randomQuote.length);

        // Displaying the words typed
        document.getElementById('typedWords').innerText = typedWords;
    }
    // An easter egg that allows you to instantly win the game
    if (wordsTyped.value == "*Zaheer*" && special == true)
    {
        currentHealths[computerChoice] = 0;
    }
    // Displaying the quote 
    document.getElementById('showQuote').innerText = randomQuote;

     // This statement inflicts special damage on the computer if the quote is typed before the 
    // Countdown hits 0. It also enables the buttons and tells the user what happened
    if (wordsTyped.value == randomQuote.substr(0,randomQuote.lastIndexOf('')) && countdownClock > 0 && special == true && randomQuote.length < 12) {
        specialAttack(currentIndex, randomQuoteChoice, randomQuoteChoice2, computerChoice);
        document.getElementById('typedWords').innerText = '';
        enableButtons();
        special = false;
        randomQuote = ' ';
    }
    // If the user did not type in the quote on time, no damage is inflicted and the turn is over
    else if (wordsTyped.value != randomQuote.substr(0,randomQuote.lastIndexOf('')) && countdownClock < 1 && special == true) {
        document.getElementById('selected').innerText = 'Special Attack Un-Successful!';
        document.getElementById('typedWords').innerText = '';
        enableButtons();
        special = false;
        randomQuote = ' ';
    }
}
// This function sets up all the information needed for the healing ability when the heal btn is pressed
function healingPressed() {
    randomQuoteChoice = Math.floor(Math.random() * NUMBER_OF_QUOTES);
    randomQuote = quotes[randomQuoteChoice];

    // Disabling the user's buttons
    disableButtons();
    countdownClock = 31;

    // Calling the function that manages what the user types into the textbox
    setInterval(healTyping, 20);
    healDecision = true;
}
// This function is used to activate the healing ability
function healTyping() {
    // Declares values that are needed to verify the users input
    let wordsTyped = document.getElementById('typeQuotes');

    let typedWords = quotes[randomQuoteChoice].substr(0, quotes[randomQuoteChoice].length - randomQuote.length);

    // This variable stores the next word in the quote by finding the next occurance of a SPACE 
    // And uses that as a length for the substring
    let nextWord = randomQuote.substr(0, randomQuote.indexOf(' ') + 1);

    // If the user types in the next word correctly, the next word will 
    // change to the actual next word in the quote and will get rid of that word from the quote that is displayed
    if (wordsTyped.value == nextWord && healDecision == true) {
        wordsTyped.value = '';
        randomQuote = randomQuote.substr(randomQuote.indexOf(' ') + 1, randomQuote.length);
        nextWord = randomQuote.substr(0, randomQuote.indexOf(' '));
        typedWords = quotes[randomQuoteChoice].substr(0, quotes[randomQuoteChoice].length - randomQuote.length);
        // Displaying the words typed
        document.getElementById('typedWords').innerText = typedWords;
    }
    // Displaying the quote and the words typed
    document.getElementById('showQuote').innerText = randomQuote;

    // This statement heals the user if the quote is typed before the 
    // Countdown hits 0. It also enables the buttons and tells the user what happened
    if (wordsTyped.value == randomQuote.substr(0,randomQuote.lastIndexOf('')) && countdownClock > 0 && healDecision == true && randomQuote.length < 12) {
        heal(currentIndex, randomQuoteChoice, currentIndex);
        document.getElementById('typedWords').innerText = '';
        typedWords = '';
        enableButtons();
        document.getElementById('btnSpecialAttack').disabled = false;
        healDecision = false;
        randomQuote = ' ';
    }
    // If the user did not type in the quote on time, no healing is done and the turn is over
    else if (wordsTyped.value != randomQuote.substr(0,randomQuote.lastIndexOf('')) && countdownClock < 1 && healDecision == true) {
        document.getElementById('selected').innerText = 'Healing Un-Successful!';
        enableButtons();
        document.getElementById('typedWords').innerText = '';
        document.getElementById('btnSpecialAttack').disabled = false;
        healDecision = false;
        randomQuote = ' ';
    }
}
// This function checks if the game is over
function endGame() {
    if (currentHealths[currentIndex] <= 0 || currentHealths[computerChoice] <= 0) {
        gameFinished = 1;
        // If the user runs out of health, a game over message is displayed saying you were defeated
        if (currentHealths[currentIndex] <= 0 && gameFinished == 1) {
            document.getElementById('endMessage').innerText = 'You have been defeated by ' + characters[computerChoice].toUpperCase() + '!\n Refresh the page to play again.';
            currentHealths[currentIndex] = 0;
            gameFinished = 2;
            printStats(currentIndex);
        }
        // If the computer runs out of health, a game over message is displayed saying you won
        if (currentHealths[computerChoice] <= 0 && gameFinished == 1) {
            document.getElementById('endMessage').innerText = 'Congratulations! You have defeated ' + characters[computerChoice].toUpperCase() + '!\n Refresh the page to play again.';
            currentHealths[computerChoice] = 0;
            gameFinished = 2;
            computerStats();
        }
        // Disabling all the buttons and textbox
        disableButtons();
        document.getElementById('typeQuotes').disabled = true;
        // Changing countdownClock to -1 to ensure that no damage is inflicted after the game is over
        // Attacks can only go through if countDownClock is greater than 0
        countdownClock = -1;
        document.getElementById('countdown').innerText = '0';
        document.getElementById('selected').innerText = '';   
    }
}