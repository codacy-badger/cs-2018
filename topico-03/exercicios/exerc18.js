/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here

var team = ["Oliver Wood","Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers (array){
	if (array.length >= 7)
		return true;
	else
		return false;
}
console.log(hasEnoughPlayers(team));