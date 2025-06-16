// Write your code here!
// 1. Remove the <main> element with id="main"
const main = document.getElementById("main");
main.remove();

// 2. Create a new <h1> element
const newHeader = document.createElement("h1");

// 3. Give the <h1> an id of 'victory'
newHeader.id = "victory";

// 4. Set the text of the <h1> element
newHeader.textContent = "Zhuri is the champion"; // <-- Replace YOUR-NAME with your name!
  
// 5. Append the newHeader to the document body
document.body.append(newHeader);
