myBooks.innerHTML = localStorage.getItem('Book') || '';

function addBook() {

  //get input variables

  let myTitle = document.querySelector("#myTitle").value;
  let myAutor = document.querySelector("#myAutor").value;
  let myDescription = document.querySelector("#myDescription").value;
  let myPublishingHouse = document.querySelector("#myPublishingHouse").value;
  let myYear = document.querySelector("#myYear").value;
  const bookContainerId = `book-${Date.now()}`;

  myBooks.innerHTML += `
  <div id="${bookContainerId}" class="bookContainer">
    <div class="list-item title"><img src="img/book.png" class="small-img" /> ${myTitle}</div>
    <div class="list-item">Autor: ${myAutor}</div>
    <div class="list-item">Opis: ${myDescription}</div>
    <div class="list-item">Wydanie: ${myPublishingHouse}</div>
    <div class="list-item">Rok wydania: ${myYear}</div>
    <button class="deleteButton" onclick="deleteBook('${bookContainerId}')">Delete</button>
  </div>`;

  // Füge Buch zum Local Storage hinzu
  localStorage.setItem('Book', myBooks.innerHTML);
}

function deleteBook(bookContainerId) {
  // Finde den Buchcontainer anhand der ID
  const bookContainer = document.getElementById(bookContainerId);

  // Überprüfe, ob der Container existiert, bevor du ihn löschst
  if (bookContainer) {
    // Lösche den Container
    bookContainer.remove();

    // Aktualisiere den Local Storage
    localStorage.setItem('Book', myBooks.innerHTML);
  }
}