/*
File: slideshow.js
Author: Jake Marshall
Site: Jake's Portfolio
Description: Changes the featured work image on the homepage when clicked
 */
var step = 3; //start at end of sequence, so screenshot 1 is displayed when page loads
function changeImage() { //when called, sets the image to the next one in sequence
	if (step < 3)
		step++;
	else
		step = 1; //resets sequence at end
	document.getElementById("slideviewer").src = "img/screenshot" + step //changes image
			+ ".png";
	setTimeout("changeImage()", 3000); //runs every 3 seconds
}
changeImage(); //calls itself

function openLink() { //opens appropriate link based on currently displayed image
	if (step == 1)
		window
				.open(
						"http://www.windowsphone.com/en-us/store/app/snakeit/d829cac5-9e8a-4245-9ebd-0d3cc3b06bc7",
						'_blank');
	else if (step == 2)
		window
				.open(
						"http://www.windowsphone.com/en-us/store/app/asteroid-field/a33ee253-4561-4a3a-bf4a-de68bdded002",
						'_blank');
	else if (step == 3)
		window
				.open(
						"http://www.windowsphone.com/en-us/store/app/zombie-runner/2519d89c-8e74-4597-8047-9081b69c03c7",
						'_blank');
}
