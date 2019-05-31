Starmodel = {}
HandlerMoveInStorage = {}
HandlerMoveOutStorage = {}
xhrBody = {}
UserLogsStorage = {} //deprecated. use LocalStorage instead


MicroModalConfig = function (areaId) {
  MicroModal.show(areaId, {
    debugMode: true,
    disableScroll: true,
    onShow: function (modal) {
      document.querySelector('.js-body').classList.add(modal.id)
    },
    onClose: function (modal) {
      document.querySelector('.js-body').classList.remove(modal.id)
    },
    closeTrigger: 'data-micromodal-close',
    awaitCloseAnimation: true
  });
};

function makeRaitingStarsModel() {
  Starmodel = starsElementsTemplate;
  return
};

function sortByDate() {
  let booksToSort = UserModel.User.getCache("bookscollection")
  arr = booksToSort.sort(function (a, b) {
    return (b.createdAt - a.createdAt);
  });
  UserModel.User.setCache("bookscollection", booksToSort)

  renderBooks();
}