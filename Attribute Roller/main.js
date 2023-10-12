const defaultAttributes = [15, 14, 13, 12, 10, 8];
class Player {
    constructor(characterName = "Blank") {
        this.name = characterName;
        this.attributes = {
            str : 0,
            dex : 0,
            con : 0,
            wis : 0,
            int : 0,
            char : 0
        };
        let shuffledResult = shuffleArray(defaultAttributes);
        for (const [key, value] of Object.entries(this.attributes)) {
            let attributeValue = shuffledResult.pop();
            this.attributes[key] = attributeValue;
        }
    }
    rollAttributes() {
        for (const key in this.attributes) {            
            let results = diceRoller(4, 6);
            results.sort(function(a, b){return a - b});
            results.shift();
            let sum = sumArrayElements(results); // sum the rolls
            this.attributes[key] = sum;
        }
    }

    printPlayer() {
        console.log(`NAME: ${this.name}`);
        for (const [key, value] of Object.entries(this.attributes)) {
            console.log(`${key.slice(0, 3).toUpperCase()}: ${value}`);
        }
    }
}

const player01 = new Player();
player01.printPlayer();
const player02 = new Player('Son Goku');
player02.rollAttributes();
player02.printPlayer();
function shuffleArray(targetArray) {
    let shuffled = Array.from(targetArray);
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

function diceRoller(times, sides) {
    let results = [];
    for (let i = 0; i < times; i++) {
        results.push(Math.floor(Math.random() * sides + 1));
    }
    return results;
}
function sumArrayElements(array) {
    return array.reduce((total, currentNumber) => total + currentNumber);
}