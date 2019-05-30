const registerButton = document.querySelector("form.register input[name='register']");
registerButton.addEventListener("click", register);

function register() {
  const name = document.querySelector("form.register input[name='name']").value;
  const email = document.querySelector("form.register input[name='email']").value;
  const password = document.querySelector("form.register input[name='password']").value;
  const passwordConf = document.querySelector("form.register input[name='passwordConf']").value;

  if (password === passwordConf) {
    let newUser = {
      name: name,
      email: email,
      password: password
    };

    myFetch("POST", "/register", newUser)
      .then(function (dataset) {
        checkRegisterStatus(JSON.parse(dataset.response));
      })
      .catch(function (err) {
        console.error("there was an error", err.statusText);
      });

  }

  function checkRegisterStatus(result) {
    if (result.status === true) {
        MicroModal.close('modal-1');
        MicroModal.show('modal-2');
    } else {
      console.error("Error");
    }
  }
}