function initUserModel() {
    if (UserModel.User != "object") {
        Object.defineProperty(UserModel, "User", {
            value: new UserModel(),
            writable: false,
        });
        UserModel.User.setCache("url", "/getuserbooks")
        UserModel.User.setCache("xhrMethod", "POST")
        UserModel.User.setCache("bookscollection", "")
        UserModel.User.setCache("searchcollection", "")
        UserModel.User.setCache("searchinput", "")
        UserModel.User.setCache("searchinputold", "")
        UserModel.User.setCache("searchprompt", "")
        console.log("UsermodelInited")
    };
};

function UserModel() {

    var UserCache = {};

    this.setCache = function (key, data) {

        UserCache[key] = data;
    };

    this.getCache = function (key) {

        return UserCache[key];
    };

    this.getfromBack = function (xhrMethod, url, xhrBody, callback) {
        myFetch(xhrMethod, url, xhrBody)
            .then(function (dataset) {
                return JSON.parse(dataset.response); 
            }).then(function (data) {
                console.log("RequestData@UserModel") 
                console.log(data)
                UserCache["bookscollection"] = JSON.parse(JSON.stringify(data.books))
                UserCache["searchcollection"] = JSON.parse(JSON.stringify(data.books))
                callback()
            })
            .catch(function (err) {
                console.error("there was an error", err.statusText);
              
            });
    }
};