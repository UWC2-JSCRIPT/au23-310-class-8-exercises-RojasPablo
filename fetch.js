const MY_API = 'Pg60qB7f0gMGo0iaBAJsWRHDuaPPV9ll'

// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

// const url = `${BASE_URL}?q=tech&api-key=${API_KEY}`;
const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${MY_API}`
const date = '2023-03-12';
const list = 'hardcover-fiction';
const bookURL = `https://api.nytimes.com/svc/books/v3/lists/${date}/${list}.json?api-key=${MY_API}`


const asyncFetch = async function(){
  try {
    
    const data = await fetch(bookURL)
    const dataJSON = await data.json()
    console.log('Async / Await ', data)
    console.log('Async / Await Func', dataJSON)

  } catch(err) {
    
    console.log(err)
  
  }
}


fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  });
