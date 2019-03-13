// action when a form is submitted. In this case,
// we add the player
let players = [];

const formDidSubmit = (e) => {
    e.preventDefault();
    //console.log(e.target.elements.yourName.value);
    //console.log("Form was submitted");

    const playerName = e.target.elements.yourName.value;
    const skillLevel = e.target.elements.skillLevel.value;
    console.log(playerName + " " + skillLevel);

    players.push({
    	playerName,
    	skillLevel
    });

    renderView();

};



// clear the entire player list
const clearAllPlayers = () => {
	players = [];
	renderView();
};

// render the view
// NOTE: this is a temporary solution! When we work with
//       React Components we will have a more elegant way
//       to do this.

const myName = "Rob Myers";



const names = [
	<li>Rob</li>, 
	<li>name</li>, 
	<li>another name</li>,
];

const isMaleOrFemale = (gender) => {
	if (gender == "male") {
		return <p>I'm male</p>;
	} else if (gender == "female"){
		return <p>I'm female</p>;
	} else {
		return <p>not specified</p>;
	}
}

const person = {
	myName: 'Rob',
	gender: 'male',
	skilllevel: 'prof',
};

let counter = 10;
const countDown = () => {
	counter--;
	console.log(counter);
	renderView();
};


// const formDidSubmit = (e) => {
// 	e.preventDefault();
	
// }

const renderView = () => {
    const template = (
    	<div>
	    	<h1>Count Down</h1>
	    	<p>My name is {myName + "!"} </p>
	    	<ul>
	    		{names}
	    	</ul>
	    	<p>{isMaleOrFemale("male")}</p>
	    	{person.gender == 'male' ? <p>male</p> : <p>not male</p>}
	    	{person.skilllevel == 'basic' && <p>Please ask questions?</p>}

	    	<p>current counter: {counter}</p>
	    	<button type="button" onClick={countDown}>Click me to decrement!</button>
	    {/*<button type="button" onClick={() => {countDown(counter)}}>Click me to decrement!</button>*/}

	    <form onSubmit={formDidSubmit}>
	    	<label>Name:</label>
	    	<input type="text" name="yourName" placeholder="Your Name"/>
	    	<label>Skill Level:</label>
	    	<input type="text" name="skillLevel" placeholder="Skill Level"/>
	    	<input type="submit" value="Submit"/>

	    </form>

	    <h1>List of Players</h1>
	    <button type="button" onClick={clearAllPlayers}>Clear the list!</button>
	    {players.length <= 0 && <p>No players are currently available</p>}
	    {players.length >= 0 && 
	    	<ul>
	    		{ players.map((player) => <li>{player.playerName}, {player.skillLevel}</li> ) }
	    	</ul>
	    }
    	</div>
    );
	
	ReactDOM.render(template, document.getElementById('app'));
};

// call renderView() to initially render the screen.
renderView();