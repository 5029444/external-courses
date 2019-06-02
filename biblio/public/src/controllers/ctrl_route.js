function kindOfRouter() {
 
  loadPath = UserModel.User.getCache("url")
  xhrMethod = UserModel.User.getCache("xhrMethod")
  userName = sessionStorage.getItem ("username")
  
  if (loadPath == "/recent") {
    sortByDate();
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

  setHeaderRight();
  userLogsRoutine();
  renderBooks();
};