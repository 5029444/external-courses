/*
function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

loadJSON('https://rsu-library-api.herokuapp.com/books',
        function(data) { var book =(data); },
        //function(data) { console.log(data); },
        //function(xhr) { console.error(xhr); }
);
*/
var book = [{
    "id": 1,
    "title": "Jewels of Nizam",
    "author": {
        "firstName": "Geeta",
        "lastName": "Devi"
    },
    "rating": 1,
    "cost": 100,
    "categories": ["must_read", "best", "non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1528046197707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/1.jpg"
}, {
    "id": 2,
    "title": "Cakes & Bakes",
    "author": {
        "firstName": "Sanjeev",
        "lastName": "Kapoor"
    },
    "rating": 5,
    "cost": 200,
    "categories": ["best", "classic"],
    "createdAt": 1506943763424,
    "updatedAt": 1525367797707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/2.jpg"
}, {
    "id": 3,
    "title": "Jamie\'s Kitchen",
    "author": {
        "firstName": "Jamie",
        "lastName": "Oliver"
    },
    "rating": 4,
    "cost": 300,
    "categories": ["non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1530638197707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/3.jpg"
}, {
    "id": 4,
    "title": "Inexpensive Family Meals",
    "author": {
        "firstName": "Simon",
        "lastName": "Holst"
    },
    "rating": 3,
    "cost": 50,
    "categories": [],
    "createdAt": 1506943763424,
    "updatedAt": 1520097397707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/4.jpg"
}, {
    "id": 5,
    "title": "Paleo Slow Cooking",
    "author": {
        "firstName": "Chrissy",
        "lastName": "Gawer"
    },
    "rating": 4,
    "cost": 1000,
    "categories": ["classic"],
    "createdAt": 1506943763424,
    "updatedAt": 1520097397707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/5.jpg"
}, {
    "id": 6,
    "title": "Cook Like an Italian",
    "author": {
        "firstName": "Toble",
        "lastName": "Puttock"
    },
    "rating": 3,
    "cost": 12,
    "categories": ["non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1520097397707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/6.jpg"
}, {
    "id": 7,
    "title": "Suneeta Vaswani",
    "author": {
        "firstName": "Geeta",
        "lastName": "Devi"
    },
    "rating": 5,
    "cost": 504,
    "categories": ["must_read", "best", "non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1517678197707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/7.jpg"
}, {
    "id": 8,
    "title": "Jamie Does",
    "author": {
        "firstName": "Jamie",
        "lastName": "Oliver"
    },
    "rating": 3,
    "cost": 100,
    "categories": [],
    "createdAt": 1506943763424,
    "updatedAt": 1538586997707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/8.jpg"
}, {
    "id": 9,
    "title": "Jamie\"s Italy",
    "author": {
        "firstName": "Jamie",
        "lastName": "Oliver"
    },
    "rating": 5,
    "cost": 100,
    "categories": ["must_read", "best"],
    "createdAt": 1506943763424,
    "updatedAt": 1528046197707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/9.jpg"
}, {
    "id": 10,
    "title": "Vegetables Cookbook",
    "author": {
        "firstName": "Matthew",
        "lastName": "Biggs"
    },
    "rating": 3,
    "cost": 100,
    "categories": ["must_read", "non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1522775797707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/10.jpg"
}];

var book = JSON.parse(JSON.stringify(book));

window.onload = function () {
    var start = document.getElementById("bookcontainer");
    var substart = "";


    for (var i in book) {
 setItem (start, i)
        //   setId (book[i].id);
        setCover(book[i].image_url);
        setTitle(book[i].title);
        setAuthor("by " + (book[i].author.firstName) + " " + (book[i].author.lastName));
        setRaiting(book[i].rating);
        setDate(book[i].createdAt);
        setUpDate(book[i].updatedAt);

    };

    function setItem(start, i) {
        var div = document.createElement("div");
        div.setAttribute("id", "item" + i);
        div.setAttribute("class", "item");
        start.appendChild(div);
        substart = document.getElementById("item" + i);
        return substart
    };

    function setId(id) {
        var div = document.createElement("div")
        div.innerHTML = (id)
        substart.appendChild(div)
    };

    function setTitle(title) {
        var div = document.createElement("div")
        div.innerHTML = (title)
        substart.appendChild(div)
    };

    function setAuthor(author) {
        var div = document.createElement("div")
        div.innerHTML = (author)
        substart.appendChild(div)
    };

    function setRaiting(raiting) {
        var div = document.createElement("div")
        div.setAttribute("class", "stars");
        div.setAttribute("style", "color: transparent;  text-shadow: 0 0 0 orange; ");
        var stars = "";
        switch (true) {
            case raiting == 0:
            stars = "";
            break;
            case raiting == 1:
            stars = "&#x2605";
            break;
            case raiting == 2:
            stars = "\u2605\u2605";
            break;
            case raiting == 3:
            stars = "\u2605\u2605\u2605";
            break;
            case raiting == 4:
            stars = "\u2605\u2605\u2605\u2605";
            break;
            case raiting == 5:
            stars = "\u2605\u2605\u2605\u2605\u2605";
            break;
        }
        div.innerHTML = (stars);
        substart.appendChild(div);
    };

    function setDate(timestamp) {
        date = new Date(timestamp);
        dYear = date.getFullYear();
        dMonth = date.getMonth();
        dDay = date.getDate();
        dHour = date.getHours();
        dMinute = date.getMinutes();
        dSecond = date.getSeconds();
    };

    function setUpDate(timestamp) {
        date = new Date(timestamp);
        dUpYear = date.getFullYear();
        dUpMonth = date.getMonth();
        dUpDay = date.getDate();
        dUpHour = date.getHours();
        dUpMinute = date.getMinutes();
        dUpSecond = date.getSeconds()
        var div = document.createElement("div")
        div.innerHTML = ("Updated: " + dUpDay + " " + dUpMonth  + " " + dUpYear)
        substart.appendChild(div)
    };

    function setCover(cover) {
        var img = document.createElement("img")
        img.setAttribute("src", cover);
        substart.appendChild(img)
    };
}