function writeCards(name, event) {
    let messages = [];
    for(let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }
    return messages;
}

    
function countDown(positiveNumber) {
    while(positiveNumber >= 0){
        console.log(positiveNumber);
        positiveNumber--;
    }
}