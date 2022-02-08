// Code your solutions in this file
const gifts =["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(arrayName, eventName){
    const newArray = [];
    for (let i = 0; i < arrayName.length; i++){
        newArray[i] = `Thank you, ${arrayName[i]}, for the wonderful surprise gift!`;
    }
    return newArray;
}
let integer;
function countDown(integer){
    while (integer >= 0){
        console.log(integer);
        integer--;
    }
}