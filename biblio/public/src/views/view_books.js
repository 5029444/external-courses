function renderBooks() {

  var startContentFrame = document.querySelector(".main-dynamic-content-frame");
  var substartDynamicElement = "";
  booksToWork = UserModel.User.getCache("bookscollection")
  while (startContentFrame.firstChild) {
    startContentFrame.removeChild(startContentFrame.firstChild);
  };

  for (var j in booksToWork) {
    raiting = (booksToWork[j].raiting)
    let = mergedAuthorName = (booksToWork[j].authorFirstName + " " + booksToWork[j].authorLastName)
    renderDynamicItem(startContentFrame, booksToWork[j].title, mergedAuthorName, j);
    renderDynamicCover(booksToWork[j].imageurl);
    renderDynamicTitle(booksToWork[j].title);
    renderDynamicAuthor(mergedAuthorName)
    renderDynamicRaiting(raiting)
  };

  function renderDynamicItem(startContentFrame, title, mergedAuthorName, j) {
    var div = document.createElement("div");
    div.setAttribute("id", "dynamic-item-" + j);
    div.setAttribute("class", (title + " by " + mergedAuthorName));
    div.setAttribute("style", "position:relative")
    startContentFrame.appendChild(div);
    substartDynamicElement = document.getElementById("dynamic-item-" + j);
    return substartDynamicElement
  };

  function renderDynamicCover(cover) {
    var div = document.createElement("div")
    // img.setAttribute("src", cover);
    div.setAttribute("style", "background:url(" + cover + ") center center; background-size: cover;");
    div.setAttribute("class", "dynamic-item-pic");
    substartDynamicElement.appendChild(div)

  };

  function renderDynamicTitle(title) {
    var div = document.createElement("div")
    div.innerHTML = (title)
    div.setAttribute("class", "dynamic-item-title");
    substartDynamicElement.appendChild(div)
  };

  function renderDynamicAuthor(mergedAuthorName) {
    var div = document.createElement("div")
    div.setAttribute("class", "dynamic-item-author");
    div.innerHTML = ("by " + mergedAuthorName)
    substartDynamicElement.appendChild(div)
  };

  function renderDynamicRaiting(raiting) {
    var div = document.createElement("div")
    div.setAttribute("id", "star" + j)
    div.setAttribute("style", "display: inline-block;")
    div.innerHTML = Starmodel[raiting]
    substartDynamicElement.appendChild(div)
    starSet = div
    addRatingListeners(starSet, raiting, j)
  };
};