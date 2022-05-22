function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
    return;
}

function logWhisper(string) {
    console.log(string.toLowerCase());
    return;
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return `I can\'t hear you!`;
    } else if (string === string.toUpperCase()) {
        return `YES INDEED!`;
    } else if (string === "Let\'s have dinner together!") {
        return `I would love to!`;
    }
    return;
}

/*

// an alternate version if needed, but it is unnecessarily verbose

function sayHiToHeadphonedRoommate(string) {
    let response;

    switch (string) {
        case string.toLowerCase():
           response = "I can\'t hear you!";
           break;
        case string.toUpperCase():
            response = "YES INDEED!";
            break;
        case "Let\'s have dinner together!":
            response = "I would love to!";
            break;
        default:
            response = null;
    }

    return response;
}

*/