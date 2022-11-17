window.addEventListener("DOMContentLoaded", main);

/** FIXA HEARTLESS PARTY - FUNKAR EJ
 * FUNKTIONER I BOTTEN? 
/

/** @type {HTMLParagraphElement} shows a p-tag with the current scene */
let storyText;
/** @type {HTMLButtonElement} gives the user the first option to choose from in every scene  */
let buttonOption1;
/** @type {HTMLButtonElement} gives the user the second option to choose from in every scene  */
let buttonOption2;
/** @type {HTMLImageElement} sets the scene image */
let displayImage;

/** gets the HTML-elements and the start scene */
function main() {
    getHtmlElements();
    getStartScene();
}

/** shows the HTML-elements that the function contains of */
function getHtmlElements() {
    storyText = document.getElementById('text-story');
    buttonOption1 = document.getElementById('btn-option1');
    buttonOption2 = document.getElementById('btn-option2');
    displayImage = document.getElementById ('scene-img');
}

/** gets the first scene - the user's first path selection   */
function getStartScene() {
    storyText.textContent = "This is the first day of your future music career. You're in the music store and you can't \
    decide if you want to start to play guitar or drums.";

    buttonOption1.textContent = 'Guitar';
    buttonOption1.onclick = getGuitar;
    
    buttonOption2.textContent = 'Drums';
    buttonOption2.onclick = getDrums;

    displayImage.src = "./images/music-store.jpg"

}

// GUITAR

/** gets the scene if the user chooses "Guitar" */
function getGuitar() {
    storyText.textContent = "Some months have passed since you got your guitar. It's starting to get pretty hard and it \
    demands further practicing for you to get any better. It would be easier and much more fun to play \
    video games at this moment.";

    buttonOption1.textContent = 'Practice guitar';
    buttonOption1.onclick = getGuitarPractice;
    
    buttonOption2.textContent = 'Play video games';
    buttonOption2.onclick = getGuitarGames;

    displayImage.src = "./images/guitar-practice.jpg"
}

/** gets the scene if the user chooses "Practice guitar" */
function getGuitarPractice() {
    storyText.textContent = "Your skills are getting better and better. You come across an ad for a band who’s\
    searching for a new band member.";

    buttonOption1.textContent = "Think I'll be better off solo";
    buttonOption1.onclick = getGuitarSolo;
    
    buttonOption2.textContent = "Contact the band";
    buttonOption2.onclick = getGuitarBand;

    displayImage.src = "./images/guitar.jpg"
}

/** gets the scene if the user chooses "Play video games" */
function getGuitarGames() {
    storyText.textContent = "A rockstar is not created through playing video games. You need to practice, practice, practice…";

    buttonOption1.textContent = "Try again - It's a long way to the top if you wanna Rock 'N' Roll!";
    buttonOption1.onclick = refreshPage;

    buttonOption2.style.display = 'none';

    displayImage.src = "./images/video-games.jpg"
}

/** gets the scene if the user chooses "Think I'll be better off solo" */
function getGuitarSolo() {
    storyText.textContent = "You're still getting on as a solo artist, but you'll \
    need to be a part of something bigger to be able to reach your dreams.";

    buttonOption1.textContent = "Try again - It's a long way to the top if you wanna Rock 'N' Roll!";
    buttonOption1.onclick = refreshPage;

    buttonOption2.style.display = 'none';

    displayImage.src = "./images/guitar-solo.jpg"
}

/** gets the scene if the user chooses "Contact the band" */
function getGuitarBand() {
    storyText.textContent = "It's time for a gig with your band. Fortunately you've been practicing a lot, so you perform at your \
    highest level. An agent had his eyes on you the whole evening and he really liked what he saw. He \
    approaches you with an offer to join a much bigger band who's on their way up to success.";

    buttonOption1.textContent = 'Accept the offer';
    buttonOption1.onclick = getAcceptAgent;
    
    buttonOption2.textContent = 'Decline the offer';
    buttonOption2.onclick = getDeclineAgent;

    displayImage.src = "./images/concert.jpg"
}

// DRUMS

/** gets the scene if the user chooses "Drums" */
function getDrums() {
    storyText.textContent = "Some months have passed since you got your drums. It's starting to get pretty hard and it \
    demands further practicing for you to get any better. It would be easier and much more fun to play \
    video games at this moment.";

    buttonOption1.textContent = 'Practice drums';
    buttonOption1.onclick = getDrumsPractice;

    buttonOption2.textContent = 'Play video games';
    buttonOption2.onclick = getDrumsGames;

    displayImage.src = "./images/drums.jpg"
}

/** gets the scene if the user chooses "Practice drums" */
function getDrumsPractice() {
    storyText.textContent = "Your skills are getting better and better. You come across an ad for a band who’s\
    searching for a new band member.";

    buttonOption1.textContent = "Think I'll be better off solo";
    buttonOption1.onclick = getDrumsSolo;
    
    buttonOption2.textContent = "Contact the band";
    buttonOption2.onclick = getDrumsBand;

    displayImage.src = "./images/drums-practice.jpg"
}

/** gets the scene if the user chooses "Play video games" */
function getDrumsGames() {
    storyText.textContent = "A rockstar is not created through playing video games. You need to practice, practice, practice…";

    buttonOption1.textContent = "Try again - It's a long way to the top if you wanna Rock 'N' Roll!";
    buttonOption1.onclick = refreshPage;

    buttonOption2.style.display = 'none';

    displayImage.src = "./images/video-games.jpg"
}

/** gets the scene if the user chooses "Think I'll be better off solo" */
function getDrumsSolo() {
    storyText.textContent = "You're still getting on as a solo artist, but you'll \
    need to be a part of something bigger to be able to reach your dreams.";

    buttonOption1.textContent = "Try again - It's a long way to the top if you wanna Rock 'N' Roll!";
    buttonOption1.onclick = refreshPage;

    buttonOption2.style.display = 'none';

    displayImage.src = "./images/drums-solo.jpg"
}

/** gets the scene if the user chooses "Contact the band" */
function getDrumsBand() {
    storyText.textContent = "It's time for a gig with your band. Fortunately you've been practicing a lot, so you perform at your \
    highest level. After the gig an agent approaches the band, he's looking for a new guitarist. \
    The lead guitarist of your band accepts his offer and quits your band on the spot. This leaves you \
    completely broken and you soon decides to quit playing drums.";

    buttonOption1.textContent = "Try again - It's a long way to the top if you wanna Rock 'N' Roll!";
    buttonOption1.onclick = refreshPage;

    buttonOption2.style.display = 'none';

    displayImage.src = "./images/concert.jpg"
}

// FOLLOWING

/** gets the scene if the user chooses "Accept the offer" */
function getAcceptAgent() {
    storyText.textContent = "Shortley after the deal you get to meet the band. You're really excited and have already started \
    to write two new songs. You're not sure which of the songs you're going to put the most effort into.";

    buttonOption1.textContent = 'One More Minute';
    buttonOption1.onclick = getOneMoreMinute;
    
    buttonOption2.textContent = 'Heartless';
    buttonOption2.onclick = getHeartless;

    displayImage.src = "./images/guitar-song.jpg"
}

/** gets the scene if the user chooses "Decline the offer" */
function getDeclineAgent() {
    storyText.textContent = "You keep on struggling with your band, but you never seems to get the oppertunity to take your music \
    to the next level. The time goes by and your interest in music fades away.";

    buttonOption1.textContent = "Try again - It's a long way to the top if you wanna Rock 'N' Roll!";
    buttonOption1.onclick = refreshPage;

    buttonOption2.style.display = 'none';

    displayImage.src = "./images/decline.jpg"
}

/** gets the scene if the user chooses "One More Minute" */
function getOneMoreMinute() {
    storyText.textContent = "The time has come for the first tour with your new band. The gig at the first stop is a true \
    smash and some fans invites you to a wicked party after the gig.";

    buttonOption1.textContent = 'Follow the fans to the party';
    buttonOption1.onclick = getOneMoreMinuteParty;

    buttonOption2.textContent = 'Go to the tour bus and sleep instead';
    buttonOption2.onclick = getOneMoreMinuteSleep;

    displayImage.src = "./images/big-gig.jpg"
}

/** gets the scene if the user chooses "Heartless" */
function getHeartless() {
    storyText.textContent = "The time has come for the first tour with your new band. The gig at the first stop is a true \
    smash and some fans invites you to a wicked party after the gig.";

    buttonOption1.textContent = 'Follow the fans to the party';
    buttonOption1.onclick = getHeartlessParty;
    
    buttonOption2.textContent = 'Go to the tour bus and sleep instead';
    buttonOption2.onclick = getHeartlessSleep;

    displayImage.src = "./images/big-gig.jpg"
}

/** gets the scene if the user chooses "One More Minute - Party" */
function getOneMoreMinuteParty() {
    storyText.textContent = "The party is really wild. You get really drunk and makes a stupid decision to do some cocaine. \
    Unluckily the cocaine is spiked with high concentrations of fentanyl and you're dying of an overdose this night.";

    buttonOption1.textContent = "Try again - It's a long way to the top if you wanna Rock 'N' Roll!";
    buttonOption1.onclick = refreshPage;

    buttonOption2.style.display = 'none';

    displayImage.src = "./images/party.jpg"
}

/** gets the scene if the user chooses "Heartless - Party" */
function getHeartlessParty() {
    storyText.textContent = "The party is really wild. You get really drunk and makes a stupid decision to do some cocaine. \
    Unluckily the cocaine is spiked with high concentrations of fentanyl and you're dying of an overdose this night.";

    buttonOption1.textContent = "Try again - It's a long way to the top if you wanna Rock 'N' Roll!";
    buttonOption1.onclick = refreshPage;

    buttonOption2.style.display = 'none';

    displayImage.src = "./images/party.jpg"
}

/** gets the scene if the user chooses "One More Minute - Sleep" */
function getOneMoreMinuteSleep() {
    storyText.textContent = "The time goes on with you and the band. Unfortunatly you never manage to write a real hit song and \
    never makes it to the top. You end up taking a regular day job and your dream of becoming a rockstar is shattered.";

    buttonOption1.textContent = "Try again - It's a long way to the top if you wanna Rock 'N' Roll!";
    buttonOption1.onclick = refreshPage;

    buttonOption2.style.display = 'none';

    displayImage.src = "./images/sunset.jpg"    
}

/** gets the scene if the user chooses "Heartless - Sleep" */
function getHeartlessSleep() {
    storyText.textContent = "The time goes on with you and the band and the 'Heartless' that you wrote becomes a megahit. \
    It's topping all the big lists all over the world. The money keeps on coming and your're now able to dedicate \
    your whole life to what you really love - playing music. Your dreams of becoming a true rockstar are fullfilled!!!";

    buttonOption1.textContent = "Let's do this again!";
    buttonOption1.onclick = refreshPage;

    buttonOption2.style.display = 'none';
}

function refreshPage() {
    window.location.reload();
}
