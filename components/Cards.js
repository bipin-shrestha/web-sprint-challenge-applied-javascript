// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
        const articles = response.data.articles;
        console.log(articles);
        for (const article in articles) {
            const item = articles[article];
            item.forEach(element => {
                const newCard = articleMaker(element);
                const cardContainer = document.querySelector('div.cards-container');
                cardContainer.appendChild(newCard);
            });
        }
    })

function articleMaker(article) {
    const newDiv = document.createElement('div');
    newDiv.className = 'card';
    newDiv.addEventListener('click', () => {
        console.log(article.headline);
    })
    const newHeadline = document.createElement('div');
    newHeadline.classname = 'headline';
    newHeadline.textContent = article.headline;
    newDiv.appendChild(newHeadline);
    const newAuthor = document.createElement('div');
    newAuthor.className = 'author';
    newDiv.appendChild(newAuthor);
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';
    newAuthor.appendChild(imgContainer);
    const image = document.createElement('img');
    image.src = article.authorPhoto;
    imgContainer.appendChild(image);
    const newSpan = document.createElement('span');
    newSpan.textContent = 'By ' + article.authorName;
    newAuthor.appendChild(newSpan);

    return newDiv;
}