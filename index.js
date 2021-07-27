function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(s) {
    s = s.toUpperCase();
    console.log(s);
}

function logWhisper(s) {
    s = s.toLowerCase();
    console.log(s);
}

function sayHiToGrandma(s) {
    switch (s) {
        case s.toLowerCase():
            return `I can't hear you!`;
            break;
        case s.toUpperCase():
            return `YES INDEED!`;
            break;
        case `I love you, Grandma.`:
            return `I love you, too.`;
            break;

    } 
}