window.addEventListener("DOMContentLoaded", function() {
  displayData();
});

function displayData() {
  var parentDiv = document.querySelector(".parent");
  var xmlhtttp = new XMLHttpRequest();
  xmlhtttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var myarr = JSON.parse(this.responseText);
      myarr.books.forEach(arrVals => {
        let bookDetailsCard = document.createElement("div");
        bookDetailsCard.setAttribute("class", "child");
        parentDiv.appendChild(bookDetailsCard);
        let title = document.createElement("div");
        let author = document.createElement("div");
        let description = document.createElement("div");
        bookDetailsCard.appendChild(title);
        bookDetailsCard.appendChild(author);
        bookDetailsCard.appendChild(description);
        title.innerHTML = "<b>Title:</b> " + arrVals.title;
        author.innerHTML = "<b>Author:</b> " + arrVals.author;
        description.innerHTML = "<b>Description:</b> " + arrVals.description;
      });
    }
  };
  xmlhtttp.open("GET", "sample.json", true);
  xmlhtttp.send();
}
