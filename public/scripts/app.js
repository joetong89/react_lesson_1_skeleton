"use strict";

// action when a form is submitted. In this case,
// we add the player
var players = [];

var formDidSubmit = function formDidSubmit(e) {
	e.preventDefault();
	//console.log(e.target.elements.yourName.value);
	//console.log("Form was submitted");

	var playerName = e.target.elements.yourName.value;
	var skillLevel = e.target.elements.skillLevel.value;
	console.log(playerName + " " + skillLevel);

	players.push({
		playerName: playerName,
		skillLevel: skillLevel
	});

	renderView();
};

// clear the entire player list
var clearAllPlayers = function clearAllPlayers() {
	players = [];
	renderView();
};

// render the view
// NOTE: this is a temporary solution! When we work with
//       React Components we will have a more elegant way
//       to do this.

var myName = "Rob Myers";

var names = [React.createElement(
	"li",
	null,
	"Rob"
), React.createElement(
	"li",
	null,
	"name"
), React.createElement(
	"li",
	null,
	"another name"
)];

var isMaleOrFemale = function isMaleOrFemale(gender) {
	if (gender == "male") {
		return React.createElement(
			"p",
			null,
			"I'm male"
		);
	} else if (gender == "female") {
		return React.createElement(
			"p",
			null,
			"I'm female"
		);
	} else {
		return React.createElement(
			"p",
			null,
			"not specified"
		);
	}
};

var person = {
	myName: 'Rob',
	gender: 'male',
	skilllevel: 'prof'
};

var counter = 10;
var countDown = function countDown() {
	counter--;
	console.log(counter);
	renderView();
};

// const formDidSubmit = (e) => {
// 	e.preventDefault();

// }

var renderView = function renderView() {
	var template = React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			"Count Down"
		),
		React.createElement(
			"p",
			null,
			"My name is ",
			myName + "!",
			" "
		),
		React.createElement(
			"ul",
			null,
			names
		),
		React.createElement(
			"p",
			null,
			isMaleOrFemale("male")
		),
		person.gender == 'male' ? React.createElement(
			"p",
			null,
			"male"
		) : React.createElement(
			"p",
			null,
			"not male"
		),
		person.skilllevel == 'basic' && React.createElement(
			"p",
			null,
			"Please ask questions?"
		),
		React.createElement(
			"p",
			null,
			"current counter: ",
			counter
		),
		React.createElement(
			"button",
			{ type: "button", onClick: countDown },
			"Click me to decrement!"
		),
		React.createElement(
			"form",
			{ onSubmit: formDidSubmit },
			React.createElement(
				"label",
				null,
				"Name:"
			),
			React.createElement("input", { type: "text", name: "yourName", placeholder: "Your Name" }),
			React.createElement(
				"label",
				null,
				"Skill Level:"
			),
			React.createElement("input", { type: "text", name: "skillLevel", placeholder: "Skill Level" }),
			React.createElement("input", { type: "submit", value: "Submit" })
		),
		React.createElement(
			"h1",
			null,
			"List of Players"
		),
		React.createElement(
			"button",
			{ type: "button", onClick: clearAllPlayers },
			"Clear the list!"
		),
		players.length <= 0 && React.createElement(
			"p",
			null,
			"No players are currently available"
		),
		players.length >= 0 && React.createElement(
			"ul",
			null,
			players.map(function (player) {
				return React.createElement(
					"li",
					null,
					player.playerName,
					", ",
					player.skillLevel
				);
			})
		)
	);

	ReactDOM.render(template, document.getElementById('app'));
};

// call renderView() to initially render the screen.
renderView();
