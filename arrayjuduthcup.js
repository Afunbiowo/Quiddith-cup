const team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(team){
    if (team.length >= 7){
        return true;
    }
    else {
        return false;
    }
}
console.log(hasEnoughPlayers(team));


const team1 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
const team2 = ["George Weasley", "Fred Weasley", "Harry Potter"];
const team3 = [];
const team4 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"];

function hasEnoughPlayers(arrayInstance){
    if (arrayInstance.length >= 7){
        return true;
    }
    else {
        return false;
    }
}
console.log(hasEnoughPlayers(team1));
console.log(hasEnoughPlayers(team2));
console.log(hasEnoughPlayers(team3));
console.log(hasEnoughPlayers(team4));