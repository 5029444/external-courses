window.onload = function () {
    var bElement = document.getElementById("aButt");

    var b = 0;

    bElement.addEventListener("click", {
        handleEvent: function prepend (addevent) {
            var x = document.createElement("INPUT");
            b = b + 1;
            x.setAttribute("type", "text");
            x.setAttribute("value", b);
            container.insertBefore(x, container.firstChild);
        }
    });


};