var b=0;
function addFunct() {
        
        var x = document.createElement("INPUT");
        b = b+1;
        x.setAttribute("type", "text");
        x.setAttribute("value", b);
        console.log (x);
        prepend.insertBefore(x, prepend.firstChild);
    };
 