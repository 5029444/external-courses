var objTest = {
propNum: 0,
propStr: "",
propBoo: false,
propFlag: undefined,
propObj: {},
propArr: [],
propFu: function () {}
}

objExpl (objTest);

function objExpl (obj) {
    for (var key in obj) {
        console.log (key, obj[key]);
    }
}

//console.log(Object.entries(objTest));