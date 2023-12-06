 const MY_API = 'Pg60qB7f0gMGo0iaBAJsWRHDuaPPV9ll';


const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const booksContainer = document.getElementById('books-container');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
 
  const formattedDate = `${year}-${month}-${date}`;
  const list = "hardcover-fiction";

  const bookUrl = `https://api.nytimes.com/svc/books/v3/lists/${formattedDate}/${list}.json?api-key=${MY_API}`;



fetch(bookUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    const books = data.results.books.slice(0,5);

    booksContainer.innerHTML = '';

    books.forEach(book => {
      const title = document.createElement('p');
      title.textContent =  `Title: ${book.title}`;

      const author = document.createElement('p');
      author.textContent = `Author ${book.author}`;

      const description = document.createElement('p');
      description.textContent = `Description ${book.description}`;

      const bookContainer = document.createElement('div');
      bookContainer.appendChild(title);
      bookContainer.appendChild(author);
      bookContainer.appendChild(description);

      booksContainer.appendChild(bookContainer);
    })
  })
  .catch(function(error){
    console.log('Error Obtaining Best Selling Book', error);
  })

});

