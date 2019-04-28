window.onload = function () {

    document.getElementById(0.5).classList.remove("far");
    document.getElementById(0.5).classList.add("fas");
    document.getElementById(1).classList.remove("far");
    document.getElementById(1).classList.add("fas");
    document.getElementById(1.5).classList.remove("far");
    document.getElementById(1.5).classList.add("fas");


    window.addEventListener("click", {
        handleEvent: function () {
            isExist = document.getElementById("score")
            if (isExist != null) {
                location.reload();

            }
        }
    }, true);


    document.addEventListener("click", {
        handleEvent: function (event) {

            opId = (+(event.target.id));
            opClass = (event.target.classList.value);

            if (opId > 0) {
                document.getElementById(0.5).classList.remove("fas");
                document.getElementById(0.5).classList.add("far");
                document.getElementById(1).classList.remove("fas");
                document.getElementById(1).classList.add("far");
                document.getElementById(1.5).classList.remove("fas");
                document.getElementById(1.5).classList.add("far");

                for (var i = 0.5; i <= opId; i = i + 0.5) {
                    document.getElementById(i).classList.remove("far");
                    document.getElementById(i).classList.add("fas");
                };

                var div = document.createElement("div");
                div.innerHTML = (" " + opId);
                div.setAttribute("id", "score")
                setTimeout(function () {
                    document.getElementById('container').appendChild(div);
                }, 100);
            }

        }

    });


}