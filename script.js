myBooks.innerHTML = localStorage.getItem('Book');

function addBook() {

  //get input variables

  let myTitle = document.querySelector("#myTitle").value;
  let myAutor = document.querySelector("#myAutor").value;
  let myDescription = document.querySelector("#myDescription").value;
  let myPublishingHouse = document.querySelector("#myPublishingHouse").value;
  let myYear = document.querySelector("#myYear").value;


  //add book container

  myBooks.innerHTML += `
  <div class="bookContainer">
    <div class="list-item title"><img src="img/book.png" class="small-img" /> ${myTitle}</div>
    <div class="list-item">Autor: ${myAutor}</div>
    <div class="list-item">Opis: ${myDescription}</div>
    <div class="list-item">Wydanie: ${myPublishingHouse}</div>
    <div class="list-item">Rok wydania: ${myYear}</div>
  </div>`;

  //add book to local storage

  localStorage.setItem('Book', myBooks.innerHTML);
}
