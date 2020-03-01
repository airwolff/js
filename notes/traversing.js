//////////////////////////////////////////////////////////
//  Traversing DOM
//////////////////////////////////////////////////////////
// DOM methods return a collection not a JavaScript array, the collection is called an HTMLCollection, an “array-like” object.  Iterate over it with a for loop, but
//methods such as map, filter, and reduce aren't available.
// Can convert an HTMLCollection to an array by using the spread operator: [...document.getElementsByTagName(p)].

const callouts = document.getElementsByClassName('callout');
// OR
const callouts = document.getElementById('callout');

const paragraphs = document.getElementsByTagName('p'); //

const para1 = document.getElementsByTagName('p')[0]; // first p tag

element = document.querySelector(selectors); //A DOMString containing one or more selectors to match. This string must be a valid CSS selector string;

para1.textContent; // "This is a simple HTML file."
para1.innerHTML; // "This is a <i>simple</i> HTML file."
para1.textContent = 'Modified HTML file'; // look for change in browser
para1.innerHTML = '<i>Modified</i> HTML file'; // look for change in browser
