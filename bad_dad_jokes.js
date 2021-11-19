//list of nouns and verbs
let noun = ['cat', 'dog', 'turtle', 'man', 'woman', 'truck', 'car', 'hamster', 'ferrett'];
let verb = ['run', 'fart', 'poop', 'walk', 'lift', 'sing', 'talk', 'blink', 'burp', 'pee'];

//function returns whole random number based on array length
const getRandomNumber = arraySize => Math.floor(Math.random() * arraySize);

//function grabs random word from array
const getRandomWord = array => array[getRandomNumber(array.length)];

//creates button
const generateJokeButton = document.getElementById('generatebutton')

//pushes joke text to HTML
const randomJokeTextElement = document.getElementById('joketext')

//function that creates joke based on joke templates and joke template array
generateJokeButton.addEventListener('click', button => {
    let djframe = [];
    const dj01 = () => `What did one ${getRandomWord(noun)} say to the other? I\'ll ${getRandomWord(verb)} you at the ${getRandomWord(noun)}.`;
    djframe.push(dj01);
    const dj02 = () => `Why don't ${getRandomWord(noun)}\'s tell jokes? They'd ${getRandomWord(noun)} each other up.`;
    djframe.push(dj02);
    const dj03 = () => `What do you call a ${getRandomWord(noun)} with no body and no ${getRandomWord(noun)}? Nobody knows.`;
    djframe.push(dj03);
    const dj04 = () => `Why couldn't the ${getRandomWord(noun)} stand up by itself? It was two ${getRandomWord(verb)}.`;
    djframe.push(dj04);
    const dj05 = () => `Why did the ${getRandomWord(noun)} get fired from the ${getRandomWord(noun)} factory? He kept ${getRandomWord(verb)}ing away the bent ones.`;
    djframe.push(dj05);
    const dj06 = () => `Why didn't the ${getRandomWord(noun)} climb the ${getRandomWord(noun)}? It didn't ${getRandomWord(verb)} the guts.`;
    djframe.push(dj06);
    const dj07 = () => `A ${getRandomWord(noun)} walks into a bar. The bartender says, "Sorry, we don't ${getRandomWord(verb)} food here."`;
    djframe.push(dj07);
    const dj08 = () => `You know, people say they ${getRandomWord(verb)} their ${getRandomWord(noun)}, but I feel like I was just born with mine.`;
    djframe.push(dj08);
    randomJokeTextElement.innerText = djframe[getRandomNumber(djframe.length)]()
});