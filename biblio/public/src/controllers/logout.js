function logout() {
    localStorage.clear();
    sessionStorage.clear();
    myFetch("POST", "/logout")
    setTimeout(function () {
        window.location.replace("/");
    }, 3000);


};