const loginButton = document.querySelector("form.login input[name='login']");

loginButton.addEventListener("click", login);

function login() {
  const email = document.querySelector("form.login input[name='email']").value;
  const password = document.querySelector("form.login input[name='password']").value;

  let verifyUser = {
    email: email,
    password: password
  };

  myFetch("POST", "/login", verifyUser)
    .then(function (dataset) {
      checkLoginStatus(JSON.parse(dataset.response));
    })
    .catch(function (err) {
      console.error("there was an error", err.statusText);
    });
};

function checkLoginStatus(result) {
  if (result.msg === "User doesn't exist") {
    //window.location.replace("/register.html");
    MicroModal.close('modal-2');
    MicroModal.show('modal-1');
  };

  if (result.status == true) {
    localStorage.clear();
    sessionStorage.clear()
    UserModel.User.setCache("url", "/getuserbooks")
    UserModel.User.setCache("username", result.name)
    sessionStorage.setItem("username", result.name)
    UserModel.User.setCache("useremail", result.email)
    localStorage.setItem([Date.now()], "You sucsessfully logged in")


    MicroModal.close('modal-2');
    window.location.replace("/");
    kindOfRouter()
  } else {
    console.log(result);
  };
};