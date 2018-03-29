
let blue = document.getElementById("racer1");
let red = document.getElementById("racer2");
let margValueBlue = 0;
let margValueRed = 0;



const start = (event) => {


	if(event.keyCode == 39)  
		blue.style.marginLeft = (margValueBlue += 40) + 'px'
		if( margValueBlue >= 460) {
			alert('Player 1 wins!');
		}
		if (event.keyCode == 68) { 
		red.style.marginLeft = (margValueRed += 40) + 'px'
		if(margValueRed >= 460) 
			alert('Player 2 wins!')
		} else {

		}
	 
};

document.onkeydown = start;
	

















