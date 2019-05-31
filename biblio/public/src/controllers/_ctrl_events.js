function modalRoutineStart() {
    var addModalClick = new AddModalCkickListeners("modal-1-trigger-register", "modal-1")
    var addModalClick = new AddModalCkickListeners("modal-2-trigger-login", "modal-2")
    var addModalClick = new AddModalCkickListeners("modal-10-trigger-dashboard", "modal-10")

    return
};

function filterRoutineStart() {
    var addFilterClick = new AddFilterCkickListeners(".navbar-navigation-section")
    var addFilterClick = new AddFilterCkickListeners(".navbar-categories-section")
    var addFilterClick = new AddFilterCkickListeners(".searchbar-leftside-filters-section")

    return
};

function areaTriggersforHeaderDisplay() {
    filterShowDisplay = document.querySelector(".main-header-leftside-display-element");
    var addFilterMover = new AddFilterMouseOverListeners(".navbar-navigation-section", filterShowDisplay)
    var addFilterMover = new AddFilterMouseOverListeners(".navbar-categories-section", filterShowDisplay)
    var addFilterMover = new AddFilterMouseOverListeners(".searchbar-leftside-filters-section", filterShowDisplay)

    var addFilterMleave = new AddFilterMouseLeaveListeners(".navbar-navigation-section", filterShowDisplay)
    var addFilterMleave = new AddFilterMouseLeaveListeners(".navbar-categories-section", filterShowDisplay)
    var addFilterMleave = new AddFilterMouseLeaveListeners(".searchbar-leftside-filters-section", filterShowDisplay)
    return
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
        kindOfRouter.call()
    };
    this.element.addEventListener('click', this.act.bind(this));

};

function AddFilterMouseOverListeners(elementId, filterShowDisplay) {
    this.element = document.querySelector(elementId)
    this.act = function (event) {
        filterShowDisplay.style.opacity = 1
        if (event.target.nodeName != "UL") {
            if (elementId == "sidebar-filters-section") {
                filterShowDisplay.innerHTML = event.target.innerHTML + " books";
            } else {
                filterShowDisplay.innerHTML = event.target.innerHTML;
            };
        };
    }
    this.element.addEventListener("mouseover", this.act.bind(this), false)
};

function AddFilterMouseLeaveListeners(elementId, filterShowDisplay) {
    this.element = document.querySelector(elementId)
    this.act = function (event) {

        filterShowDisplay.style.opacity = 0
    };
    this.element.addEventListener("mouseleave", this.act.bind(this), false)
};