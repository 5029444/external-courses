function logout() {
    localStorage.clear();
    sessionStorage.clear();

    location.href = "/logout";

};