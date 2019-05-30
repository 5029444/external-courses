const addBookButton = document.querySelector("form.dashboard input[type='submit']");
addBookButton.addEventListener("click", addBook);

function addBook() {

    const inputs = document.querySelectorAll("form.dashboard input")
    // const cats = document.querySelectorAll("form.dashboard input[type=checkbox]:checked")
    const cats = document.querySelectorAll("form.dashboard input[type=checkbox]")

    let newBook = {
        authorFirstName: inputs[0].value,
        authorLastName: inputs[1].value,
        title: inputs[2].value,
        imageurl: inputs[3].value,
        cost: inputs[4].value,
        must_read: cats[0].checked,
        best: cats[1].checked,
        classic: cats[2].checked,
        non_fiction: cats[3].checked,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        ownedby: sessionStorage.getItem ("username")
    };

    myFetch("POST", "/addbook", newBook)
        .then(function (dataset) {
            checkAddStatus(JSON.parse(dataset.response));
        })
        .catch(function (err) {
            console.error("there was an error", err.statusText);
        });

};

function checkAddStatus(result, newBook, inputs) {
    if (result.status === true) {
        MicroModal.close('modal-10');
        
    } else {};
};
