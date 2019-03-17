var objTest = {              //исходный объект
    propNum: 0,
    propStr: "",
    propBoo: false,
    propFlag: undefined,
    propObj: {a1: "a", a2: {prrr: {b1: "b"}} },
    propArr: [],
    propFu: function () {}
    };
var objNew = {}; //куда копируем

deepCopyObj (objTest);


//или
//serCopyObj (objTest);
//function serCopyObj (obj) {objNew = JSON.parse(JSON.stringify(obj))};

function deepCopyObj(obj) {
    for(var key in obj) {
        if (typeof (obj[key]) =="object") {
            objNew[key] = deepCopyObj(obj[key]);
        } else {
            objNew[key] = obj[key];
        };
    };
    return objNew;
};
