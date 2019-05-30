function kindOfRouter() {
  console.log("Router")
  loadPath = UserModel.User.getCache("url")
  xhrMethod = UserModel.User.getCache("xhrMethod")
  userName = sessionStorage.getItem ("username")
  console.log(UserModel.User.getCache("url"))
  console.log(sessionStorage.getItem ("username"))
  console.log(sessionStorage.getItem("useremail"))
  //exclusevly to show an example of the Task sorting at client-side
  //no need actually. may be deleted.
  if (loadPath == "/recent") {
    sortByDate()
  };

  if (userName == "undefined") {
    if (loadPath == "/readnow" ||
      loadPath == "/browse" ||
      loadPath == "/favs" ||
      loadPath == "/wishlist" ||
      loadPath == "/history") {
        MicroModal.show('modal-2')
    };
  };

  UserModel.User.getfromBack(xhrMethod, loadPath, xhrBody, routeAfterData)
  document.forms[0].reset();
};

function routeAfterData(err, datahere) {
  console.log("routeAterData")
  setHeaderRight()
  userLogsRoutine()
  renderBooks()
};