includeAddList()

//console.log = function() {} // when debuggin becomes a real pain in the neck!

function include(file, callback) {
  if (typeof (callback) != "function") {
    let script = document.createElement("script");
    script.src = file;
    script.type = "text/javascript";
    script.defer = true;
    document.getElementsByTagName("head").item(0).appendChild(script);
  } else {
    callback()
  };
};

function includeAddList() {
  include("src/models/model_user.js");
  include("src/models/model_utils.js");
  include("src/models/templates.js");
  include("src/views/view_utils.js");
  include("src/views/view_books.js");
  include("src/controllers/pre_events.js");
  include("src/controllers/ctrl_route.js");
  include("src/controllers/ctrl_main.js");
  include("src/controllers/post_events.js");
  include("src/controllers/login.js");
  include("src/controllers/logout.js");
  include("src/controllers/register.js");
  include("src/controllers/dashboard.js");
  include("src/vendor/micromodal.min.js");
  include(null, transportGasket);
};

function transportGasket() {
  setTimeout(function () {
    initMainThread()
  }, 4000);
};

function myFetch(xhrMethod, url, xhrBody) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(xhrMethod, url, true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "text";
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        resolve(xhr);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send(JSON.stringify(xhrBody));
  });
};

function checkUser() {
  myFetch("GET", "/check")
    .then(function (dataset) {
      return JSON.parse(dataset.response);
    }).then(function (data) {
      sessionStorage.setItem("username", data.name)
      sessionStorage.setItem("useremail", data.email)

    })
    .catch(function (err) {
      console.error("there was an error", err.statusText);

    });
};