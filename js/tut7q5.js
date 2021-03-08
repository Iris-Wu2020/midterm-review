console.log("Outcome from tut7q5");
// ask user to import color
const newTextColor = prompt("Please enter the text color:");
const newBackgroundColor = prompt("Please enter the background color:");

// acquire the text and make it array, querySelectorAll can use forEach directly, but getElementByTagName cannot use forEach directly
// it should be used Array.from()

const divText = document.querySelectorAll("div");

// use loop to change the color
divText.forEach(text =>{
    text.style.color = newTextColor
    text.style.backgroundColor = newBackgroundColor
});