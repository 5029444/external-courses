function addRatingListeners(starSet, raiting, j) {

    HandlerMoveInStorage[j] = function handlerMove(e) {
        var offsetX = e.offsetX;
        var element = e.target;
        var elemWidth = starSet.clientWidth
        while (element !== starSet) {
            offsetX += element.offsetLeft;
            element = element.parentNode;
        };
        proc = Math.round(((offsetX) * 5 / elemWidth) * 2) / 2;
        starSet.innerHTML = Starmodel[proc]
    };

    HandlerMoveOutStorage[j] = function handlerOut(e) {
        starSet.innerHTML = Starmodel[raiting]
    };

    starSet.addEventListener("mousemove", HandlerMoveInStorage[j])
    starSet.parentNode.addEventListener("mouseout", HandlerMoveOutStorage[j])

    starSet.addEventListener("click", function handlerRait(e) {
        Starmodel[event.path[2].className] = proc
        clickedIndex = (event.path[1].id).substring(4)

        localStorage.setItem([Date.now()], "You scored " + proc + " for " + event.path[2].className)
        starSet.removeEventListener("mousemove", HandlerMoveInStorage[clickedIndex])
        starSet.parentNode.removeEventListener("mouseout", HandlerMoveOutStorage[clickedIndex])
        starSet.innerHTML = starSet.innerHTML + "<i style='color:gold' class='fas fa-certificate'></i><strong class='fa-stack-1x fa-stack-text fa-inverse'>!</strong>"
        starSet.removeEventListener("click", handlerRait, false);
        //TODO
        // submit raiting to Mongo

    })
};

function searchInit() {
    searchLable = document.querySelector(".search-lable")
    searchLable.innerHTML = ""
    var textInput = document.querySelector(".main-searchbar-rightside-search-imput")
    var timeout = null;
    textInput.onkeyup = function (e) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            UserModel.User.setCache("searchinput", textInput.value)
            UserModel.User.setCache("searchprompt", "")
            searchDisplay()
        }, 50);
    };
};

function searchDisplay() {
    searchPrompt = UserModel.User.getCache("searchprompt")
    searchInput = UserModel.User.getCache("searchinput")
    var searchLable = document.querySelector(".search-lable")
    searchLable.innerHTML = ""
    if ((UserModel.User.getCache("searchinputold")).length > (UserModel.User.getCache("searchinput")).length || (UserModel.User.getCache("searchinput")).length == 0) {
        UserModel.User.setCache("bookscollection", JSON.parse(JSON.stringify(UserModel.User.getCache("searchcollection"))))
    };
    booksToSearch = UserModel.User.getCache("bookscollection")

    searchString = ""
    if (searchInput != "") {
        var i = booksToSearch.length;
        while (i--) {
            searchInput = searchInput.toLowerCase()
            searchString = (booksToSearch[i].title).toLowerCase() + " " + (booksToSearch[i].authorFirstName).toLowerCase() + " " + (booksToSearch[i].authorLastName).toLowerCase()

            if (!searchString.includes(searchInput)) {
                booksToSearch.splice(i, 1);

            } else {
                searchPrompt = searchPrompt + searchString + "<br>"
                UserModel.User.setCache("searchprompt", searchPrompt)

            };
        };

        UserModel.User.setCache("bookscollection", booksToSearch);
        tout = setTimeout(function () {
            UserModel.User.setCache("searchinputold", searchInput)
        }, 100)

        var searchLable = document.querySelector(".search-lable")
        searchLable.innerHTML = UserModel.User.getCache("searchprompt")



        renderBooks()
    };


};