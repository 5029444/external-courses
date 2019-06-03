function setHeaderRight() {
  userNameElement = document.getElementById("header-rightside-display-item-modal-7-name");
  regElement = document.getElementById("header-rightside-display-item-modal-4-ava");

  if (sessionStorage.getItem("username") != "undefined" && regElement.classList.contains("modal")) {
    userNameElement.innerHTML = sessionStorage.getItem ("username"); 
    modalTriggerVisibilityToggle();
  };

};

function modalTriggerVisibilityToggle() {
  for (key of Object.keys(modalToggleShema)) {
    element = document.getElementById((modalToggleShema[key]))
    element.classList.toggle("modal");
  };
};

function userLogsRoutine() {
  purgeLogsbase();
  userLogsOutput();

  function purgeLogsbase() {
    for (i = 0; i <= localStorage.length; i++) {
      if (Date.now() - localStorage.key(i) > 1000000) {
        localStorage.removeItem(localStorage.key(i));
      };
    };
  };

  function userLogsOutput() {
    showTag = document.querySelector(".navbar-userlogs-section");
    while (showTag.firstChild) {
      showTag.removeChild(showTag.firstChild);
    };

    for (i = 0; i <= localStorage.length; i++) {
      let deltaTime = Date.now() - (+localStorage.key(i))
      let deltaMinutes = (parseInt((deltaTime / (1000 * 60)) % 60))
      var deltaMinutesPlural = "minute";

      if (deltaMinutes < 1) {
        deltaMinutes = "less than 1"
      } else if (deltaMinutes < 2) {
        deltaMinutesPlural = "minute"
      } else {
        deltaMinutesPlural = "minutes"
      };

      var div = document.createElement("div");
      if (localStorage.getItem(localStorage.key(i)) != null) {
        //div.setAttribute ("style", "font-size: calc(0.3vw + 0.3vh + 0.15vmin)")
        div.innerHTML = ("<i class='far fa-clock'></i>" + " " + localStorage.getItem(localStorage.key(i)) + " " + deltaMinutes + " " + deltaMinutesPlural + " ago")
        showTag.appendChild(div);
      };
    };
  };
};