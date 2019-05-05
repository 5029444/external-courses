window.onload = function () {
    var arg = 6;
    var proc = 0;
    var avgRait = [];

    rendRait(arg);

    for (i = 1; i <= arg; i++) {
        var listener = new SetListener(i);
    };

    function SetListener(i) {
        var use = document.getElementById("icon" + i);
        var svg = document.getElementById("icon" + i).parentNode;

        svg.addEventListener("mousemove", function handlerMove(em) {
            opId = (em.target);
            var xS = em.offsetX;
            var wS = svg.clientWidth;
            proc = Math.round((xS * 5 / wS) * 2) / 2;
            if (use != opId) {
                proc = avgRait[i]
            };
            setReit(proc, use);
            svg.addEventListener("click", function handlerClick(em) {
                avgRait[i] = proc;
                setReit(proc, use);
                svg.setAttribute("class", "voted");
                svg.removeEventListener("mousemove", handlerMove, false),                   
            false });

        });
    };

    function rendRait(arg) {
        avgRait[1] = rndRait();
        for (i = 2; i <= arg; i++) {
            var parent = document.getElementById("main");
            var svg = parent.querySelector(":first-child");
            var clone = svg.cloneNode(true);
            var use = clone.children[0]
            use.setAttribute("id", "icon" + i)
            proc = rndRait();
            avgRait[i] = proc;
            setReit(proc, use)
            parent.appendChild(clone);

        };
    };

    function rndRait() {
        return Math.round((Math.random() * 5) * 2) / 2;
    };

    function setReit(proc, use) {
        switch (true) {
            case proc == 0:
                use.setAttribute("xlink:href", "#stars-0-0-star");
                break;
            case proc == 0.5:
                use.setAttribute("xlink:href", "#stars-0-5-star");
                break;
            case proc == 1:
                use.setAttribute("xlink:href", "#stars-1-0-star");
                break;
            case proc == 1.5:
                use.setAttribute("xlink:href", "#stars-1-5-star");
                break;
            case proc == 2:
                use.setAttribute("xlink:href", "#stars-2-0-star");
                break;
            case proc == 2.5:
                use.setAttribute("xlink:href", "#stars-2-5-star");
                break;
            case proc == 3:
                use.setAttribute("xlink:href", "#stars-3-0-star");
                break;
            case proc == 3.5:
                use.setAttribute("xlink:href", "#stars-3-5-star");
                break;
            case proc == 4:
                use.setAttribute("xlink:href", "#stars-4-0-star");
                break;
            case proc == 4.5:
                use.setAttribute("xlink:href", "#stars-4-5-star");
                break;
            case proc == 5:
                use.setAttribute("xlink:href", "#stars-5-0-star");
                break;

        }
    }

};