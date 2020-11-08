// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const newHead = document.createElement('div');
    newHead.className = 'header';
    const newSpan = document.createElement('span');
    newSpan.className = 'date';
    newSpan.textContent = 'MARCH 28, 2020';
    newHead.appendChild(newSpan);
    const headingOne = document.createElement('h1');
    headingOne.textContent = 'Lambda Times';
    newHead.appendChild(headingOne);
    const secondSpan = document.createElement('span');
    secondSpan.className = 'temp';
    secondSpan.textContent = '98°';
    newHead.appendChild(secondSpan);
    return newHead;
}

const headerContainer = document.querySelector('div.header-container');
headerContainer.appendChild(Header());