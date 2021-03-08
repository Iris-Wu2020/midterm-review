/* Homework 6
Exercise 5 JavaScript code
*/
console.log("Wu's Output from hw6 Exercise 5");

//create a tag <a>
const linkElement = document.createElement("a");
linkElement.href = "https://www.csulb.edu/college-of-business";
linkElement.textContent = "College of Business";
console.log(linkElement);

//create another tag <li>, and then add tag <a> to tag <li>
const linkElement2 = document.createElement("li");
linkElement2.appendChild(linkElement);
console.log(linkElement2);

const firstLink = document.querySelectorAll("li");
console.log(firstLink[1]); //This is the second link

document.getElementsByTagName("ul")[0].insertBefore(linkElement2, firstLink[1]);


