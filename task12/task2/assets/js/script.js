window.onload = function () {
    var text = "Anonymous";
    var text1 = "blahblah";

    var mElement = document.getElementById("menu");
    var uElement = document.getElementById("user");
    document.addEventListener("click", {
        handleEvent: function (event) {
            if (!event.target.matches("#user, #menu>*>*")) {
                mElement.classList.add("hide");
            } else {
                mElement.classList.remove("hide");
                uElement.textContent = " ";
            };
        }
    });

    mElement.addEventListener("submit", {
        handleEvent: function () {
            var text1 = document.getElementById("inUser").value;
            setUser(text, text1);
            mElement.classList.add("hide");
            mElement.reset()
        }
    });

    function setUser(text, text1) {
        text = ((uElement.textContent) + text1);
        uElement.textContent = text;
    }
};