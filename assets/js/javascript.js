function toggleExpand(id) {
	let elem = document.getElementById(id)
	/* toggle rimuove oppure inserisce una classe */
	elem.classList.toggle("close")
}
/*  drag notepad e calcolatrice   */
const position = {
	x: 0,
	y: 0
}
interact('.draggable').draggable({
	listeners: {
		start(event) {
			console.log(event.type, event.target)
		},
		move(event) {
			position.x += event.dx
			position.y += event.dy

			event.target.style.transform =
				`translate(${position.x}px, ${position.y}px)`
		},
	}
})
/* cambia lo sfondo */

let wallaper1 = document.querySelector('#wallaper-1');
let wallaper2 = document.querySelector('#wallaper-2');
let wallaper3 = document.querySelector('#wallaper-3');

wallaper1.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo.png')";
});
wallaper2.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo2.png')";
});
wallaper3.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo3.png')";
});



/* calcolatrice */
let first
let operation
let second

function pressNuber(n) {
	/*   converto da numero a stringa */
	n += ''
	if (!operation) {
		/* operatore ternario */
		first = (!first) ? n : first + n
		/*  cambio il testo al interno del id */
		document.getElementById("history-value").innerText = first;
		document.getElementById("output-value").innerText = "";
	} else {
		second = (!second) ? n : second + n

		document.getElementById("history-value").innerText = second;
	}
}

function pressOperation(op) {
	if (!!second) pressTotal()

	if (!!first) operation = op
	document.getElementById("history-value").innerText += op;
}

function pressTotal() {
	first = '' + execute(+first, operation, +second)
	operation = null
	second = null
	document.getElementById("history-value").innerText = "";
	document.getElementById("output-value").innerText = first;
}

function execute(a, op, b) {
	switch (op) {
		case '+':
			return a + b
		case '-':
			return a - b
		case '*':
			return a * b
		case '/':
			return a / b
	}
	return 0
}
/*  cancella tutto */
function erase() {
	first = null
	operation = null
	second = null
	document.getElementById("output-value").innerText = "0";
	document.getElementById("history-value").innerText = "";

}
/* cancella solo il primo valore */
function erase2() {

	first = first.slice(0, -1)
	document.getElementById("history-value").innerText = first;

	document.getElementById("output-value").innerText = "";



}   
/* funzione orologio */
function functorun() {
var data = new Date();
var Hh, Mm, Ss, mm;
Hh = data.getHours() + ":";
Mm = data.getMinutes() + ":";
Ss = data.getSeconds() + " PM";
var data = new Date();
var gg, mm, aaaa;
gg = data.getDate() + "/";
mm = data.getMonth() + 1 + "/";
aaaa = data.getFullYear();
document.getElementById("calendario").innerText = (Hh + Mm + Ss) + "\n" + ( gg + mm + aaaa) ;
}
functorun();
setInterval(functorun, 1*1000);
	