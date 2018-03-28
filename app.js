let bigBox = document.getElementById('container');
let blue = document.getElementById("racer1");
let red = document.getElementById("racer2");
//this is for my top attempt
let margValue = 0;
//this is for the bottom attempt
// let blueLeft=0;
// let redLeft=0;


window.addEventListener('keydown', (event) =>{
	(event.keycode == 39) 
		console.log('right arrow key pressed');
		// margValue+=50 + "px"
		blue.style.marginLeft = (margValue += 50) + 'px'
	 
})




// function anim(e){
// 	if(e.keycode==39){
// 		blueleft +=2;
// 		blue.style.left = Blueleft + 'px'; 
// 	}
// 	if(e.keycode==37) {
// 		redLeft +=2;
// 		red.style.left = Blueleft + 'px'; 
// 	}
// }

// document.onKeyDown = anim;