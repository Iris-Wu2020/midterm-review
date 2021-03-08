/* Homework 6
Exercise 4 JavaScript code
*/
console.log("Wu's Output from hw6 Exercise 4");



/* 
<TABLE> 
        <TR>  
            <TD> 1 </TD>   
        </TR> 
</Table> 
 */

// create the table
const tableNode = document.createElement("table");
const divNode = document.getElementById("output");


for (let i = 1; i < 13; i++) {
    const trNode = document.createElement("tr");
    const tdNode = document.createElement("td");
    const dataText = document.createTextNode(i);
    trNode.appendChild(tdNode).appendChild(dataText);
    tableNode.appendChild(trNode);
    divNode.appendChild(tableNode);

};

tableNode.setAttribute("border", "2");
tableNode.setAttribute("width", "30");

// filter the table
const elementNames = document.getElementsByTagName('tr');
const elementList = Array.from(elementNames).filter(element => Number(element.textContent) % 4 === 0);
Array.from(elementList).map(element => element.classList.add('fourDivi'));

console.log(elementList);
