

const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async'])
//console.log(jsConcepts)
const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async'])
const commonConcepts = findIntersection(jsConcepts, reactConcepts);
console.log(Array.from(commonConcepts).join(', '))
function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    
    
    const intersection = new Set();
    for (i of setA) {
       if (setB.has(i)){
        intersection.add(i)
       }    
    } 
    
    
    //console.log(intersection)
    return intersection;
} 
//findIntersection(jsConcepts,reactConcepts)

fetch('books.json') 
    .then(response => response.json())
    .then(books => {
       const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
               // document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
    });



function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    const mostRecentBook= books.reduce((mostRecent, book) => new Date(book.published) < new Date(mostRecent.published) ? mostRecent=book : mostRecent=mostRecent);
    console.log(mostRecentBook)
}
