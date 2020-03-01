function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    // dataset.potato will return what is in the html for data-potato eg data-potato="px" (-potato can be anything). for above '' is for nothing so we don't get undefined
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // this.name and this.value returns name="potato" and value attribute from html
  console.log(this.dataset);
}



const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
];
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599);
console.table(fifteen); 
// The same as below
// filter iterates over each object in inventors array and runs callback function on it
// filter can also take in as much as you need and return only what you want
const fifteen = inventors.filter(function(inventor) {
  if(inventor.year >= 1500 && inventor.year <= 1599) {
    return true;
  }
});
console.table(fifteen);

// map returns the same amount of what you give it
// 

// sort
const age = inventors.sort(function(a, b) {
  if(a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
})
console.table(age);
// rewritten as
const age = inventors.sort((a, b) => a.year ? 1 : -1);
  
console.table(age);

// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector('.mw-category');
const link = category.querySelectorAll('a');
// querySelector can be called on any existing dom element as shown in category.querySelectorAll
// above won't work because link returns a NodeList not array change to
const links = Array.from(category.querySelectorAll('a'));
const de = links.map(link => link.textContent);
