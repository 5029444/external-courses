function modalRoutineStart() {
    var addModalClick = new AddModalCkickListeners("header-rightside-display-item-modal-1-register", "modal-1")
    var addModalClick = new AddModalCkickListeners("header-rightside-display-item-modal-2-login", "modal-2")
    var addModalClick = new AddModalCkickListeners("navbar-bigbutton-modal-10-dashboard", "modal-10")

};

function filterRoutineStart() {
    var addFilterClick = new AddFilterCkickListeners(".navbar-navigation-section")
    var addFilterClick = new AddFilterCkickListeners(".navbar-categories-section")
    var addFilterClick = new AddFilterCkickListeners(".searchbar-leftside-filters-container")

};

function areaTriggersforHeaderDisplay() {
    filterShowDisplay = document.querySelector(".main-uppper-leftside-display-element");
    var addFilterMover = new AddFilterMouseOverListeners(".navbar-navigation-section", filterShowDisplay)
    var addFilterMover = new AddFilterMouseOverListeners(".navbar-categories-section", filterShowDisplay)
    var addFilterMover = new AddFilterMouseOverListeners(".searchbar-leftside-filters-container", filterShowDisplay)

    var addFilterMleave = new AddFilterMouseLeaveListeners(".navbar-navigation-section", filterShowDisplay)
    var addFilterMleave = new AddFilterMouseLeaveListeners(".navbar-categories-section", filterShowDisplay)
    var addFilterMleave = new AddFilterMouseLeaveListeners(".searchbar-leftside-filters-container", filterShowDisplay)

};


function AddModalCkickListeners(elementId, areaId) {
    this.element = document.getElementById(elementId);
    this.act = function () {
        MicroModalConfig(areaId)
    };
    this.element.addEventListener('click', this.act.bind(this), false);

};

function AddFilterCkickListeners(elementId) {
    this.element = document.querySelector(elementId);
    this.act = function (event) {
        loadPath = event.target.id
        UserModel.User.setCache("url", loadPath)
        switch (loadPath) {
            case "/nonfiction":
                localStorage.setItem([Date.now()], "You browsed 'Non fiction' category")
                break;
            case "/classic":
                localStorage.setItem([Date.now()], "You browsed 'Classic books' category")
                break;
            case "/best":
                localStorage.setItem([Date.now()], "You browsed 'Best books' category")
                break;
            case "/must":
                localStorage.setItem([Date.now()], "You browsed 'Must-Read' recomendations")
                break;
            case "/history":
                localStorage.setItem([Date.now()], "You looked at your history here")
                break;
            case "/wishlist":
                localStorage.setItem([Date.now()], "You looked at your wishlist")
                break;
            case "/favs":
                localStorage.setItem([Date.now()], "You looked at books marked as favorites")
                break;
            case "/shop":
                localStorage.setItem([Date.now()], "You visited the shop page")
                break;
            case "/browse":
                localStorage.setItem([Date.now()], "You browsed through your book collection")
                break;
            case "/readnow":
                localStorage.setItem([Date.now()], "You looked at the list of books you are reading now")
                break;
            case "/free":
                localStorage.setItem([Date.now()], "You looked for free books")
                break;
            case "/raiting":
                localStorage.setItem([Date.now()], "You applied the 'most rated books first' sorting")
                break;
            case "/recent":
                localStorage.setItem([Date.now()], "You applied the 'the newest books first' sorting")
                break;
            case "/allbooks":
                localStorage.setItem([Date.now()], "You browsed through all books collection ")
                break;
            default:
                console.log("Don't know such things");
        }
        kindOfRouter()
    };
    this.element.addEventListener('click', this.act.bind(this));
};

function AddFilterMouseOverListeners(elementId, filterShowDisplay) {
    this.element = document.querySelector(elementId)
    this.act = function (event) {
        filterShowDisplay.style.opacity = 1
        if (event.target.nodeName != "UL") {
            if (elementId == ".navbar-categories-section") {
                filterShowDisplay.innerHTML = event.target.innerHTML + " books";
            } else {
                filterShowDisplay.innerHTML = event.target.innerHTML;
            };
        };
    };
    this.element.addEventListener("mouseover", this.act.bind(this), false)
};

function AddFilterMouseLeaveListeners(elementId, filterShowDisplay) {
    this.element = document.querySelector(elementId)
    this.act = function (event) {

        filterShowDisplay.style.opacity = 0
    };
    this.element.addEventListener("mouseleave", this.act.bind(this), false)
};

function searchReset() {
    searchFocus = document.querySelector(".main-searchbar-rightside-search-container")

    searchFocus.addEventListener("mouseleave", function handlerSearch(e) {
        searchLable = document.querySelector(".search-lable")
        searchLable.innerHTML = ""
        UserModel.User.setCache("bookscollection", JSON.parse(JSON.stringify(UserModel.User.getCache("searchcollection"))))
        document.forms[0].reset();
    });
};

function dynIdPrepare() {
    for (const key of Object.keys(routsIdTemplate)) {
        tempEl = document.querySelector(key);
        tempEl.setAttribute("id", routsIdTemplate[key]);
    };

};

function cssBeforeIconsPrepare() {
    for (const key of Object.keys(cssIconsTemplate)) {
        cssEl = document.querySelector(key);
        oldInnerHTML = cssEl.innerHTML
        cssEl.innerHTML = cssIconsTemplate[key] + "&nbsp;&nbsp;&nbsp;" + oldInnerHTML

    };
};

function addLogoutListener() {
    ement = document.getElementById("header-rightside-display-item-modal-3-logout")
    ement.addEventListener("click", function handlerSearch(e) {
        logout()
    });
};