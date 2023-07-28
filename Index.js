// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}


const keyboardInput = document.getElementById('result');
document.addEventListener('keydown' , (event) => {
	console.log(event);
	if(event.key == "1") { keyboardInput.value += event.key; }
	if(event.key == "2") { keyboardInput.value += event.key; }
	if(event.key == "3") { keyboardInput.value += event.key; }
	if(event.key == "4") { keyboardInput.value += event.key; }
	if(event.key == "5") { keyboardInput.value += event.key; }
	if(event.key == "6") { keyboardInput.value += event.key; }
	if(event.key == "7") { keyboardInput.value += event.key; }
	if(event.key == "8") { keyboardInput.value += event.key; }
	if(event.key == "9") { keyboardInput.value += event.key; }
	if(event.key == "0") { keyboardInput.value += event.key; }
	if(event.key == "+") { keyboardInput.value += event.key; }
	if(event.key == "-") { keyboardInput.value += event.key; }
	if(event.key == "/") { keyboardInput.value += event.key; }
	if(event.key == "*") { keyboardInput.value += event.key; }
	if(event.key == ".") { keyboardInput.value += event.key; }
	if(event.key == "Backspace") { keyboardInput.value = keyboardInput.value.slice(0,-1); }
	if(event.key == "Enter") { 
		var p = document.getElementById("result").value;
		var q = eval(p);
		document.getElementById("result").value = q;
		//any logic to calculate and show the calculation 
	}

	
})

function myFunction() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}




$( document ).ready(function() {
	setTimeout(
		function() { $(".popup2").css("display","block");
		},100)
}
);
$( "#close" ).on("click", function() {
	$(".popup2").css("display", "none");
}
);