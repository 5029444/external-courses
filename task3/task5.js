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

copyObj (objTest);

console.log(objNew==objTest);
console.log ( objTest.propObj.a2 == objNew.propObj.a2) //ЧТД (ссылка)

function copyObj (obj) {
    for (var key in obj) {
    objNew[key] = obj[key];
    };
 return objNew;
};
