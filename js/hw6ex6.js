/* Homework 6
Exercise 6 JavaScript code
*/
console.log("Wu's Output from hw6 Exercise 6");

const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];


const divElement = document.getElementById("content");
words.forEach(word => {
    const termNode = document.createElement("dt");
    const strongNode = document.createElement("strong");
    const termNodeTxt = document.createTextNode(word.term);
    termNode.appendChild(strongNode).appendChild(termNodeTxt);
    divElement.appendChild(termNode);

    const defNode = document.createElement("dd");
    const defNodeTxt = document.createTextNode(word.definition);
    defNode.appendChild(defNodeTxt);
    divElement.appendChild(defNode);
});
    
