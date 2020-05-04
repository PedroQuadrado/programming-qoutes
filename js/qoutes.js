const qoute = document.getElementById("qoute");
const author = document.getElementById("author");

fetch("../data/programming-quotes.json")
  .then(response => response.json())
  .then(data => { 
    const dataLenght = Object.keys(data).length;
    const x = Math.floor(Math.random() * dataLenght);
    qoute.innerHTML = ` "${data[x].en}"`;
    author.innerHTML = ` - ${data[x].author} - `;
    
    
    
  })
