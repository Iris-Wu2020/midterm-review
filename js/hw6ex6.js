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

/* 
<div>
<dl>
    <dt>
      <strong>   </strong></dt>
    <dd>                    </dd>
</dl>
</div> */


const divContent = document.getElementById("content");
const dlTag = document.createElement("dl");

words.forEach(word => {
  const dtTag = document.createElement("dt");
  const ddTag = document.createElement("dd");
  const strongTag = document.createElement("strong");
  const termText = document.createTextNode(word.term);
  const definitionText = document.createTextNode(word.definition);

  dtTag.appendChild(strongTag).appendChild(termText); // consecutively appendChild v.s. one by one appendChild????????
  ddTag.appendChild(definitionText);

  dlTag.appendChild(dtTag);
  dlTag.appendChild(ddTag);

});
divContent.appendChild(dlTag);




