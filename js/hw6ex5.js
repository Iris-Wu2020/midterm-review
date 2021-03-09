/* Homework 6
Exercise 5 JavaScript code
*/
console.log("Wu's Output from hw6 Exercise 5");

//create a tag <a>
const aNode = document.createElement("a");
aNode.href = "https://www.csulb.edu/college-of-business";
aNode.textContent = "College of Business";
console.log(aNode);

//create another tag <li>, and then add tag <a> to tag <li>
const liNode = document.createElement("li");
liNode.appendChild(aNode);
console.log(liNode);

const firstLink = document.querySelectorAll("li");
console.log(firstLink[1]); //This is the second link

document.getElementsByTagName("ul")[0].insertBefore(liNode, firstLink[1]);


