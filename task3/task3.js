var objTest = {
    propNum: 0,
    propStr: "",
    propBoo: false,
    propFlag: undefined,
    propObj: {},
    propArr: [],
    propFu: function () {}
    }

var keyStr = "propBoo2" // имя свойства для проверки

    console.log (keyExpl (keyStr, objTest));


function keyExpl (keyStr, obj) {
evnt = false
    for (var key in obj) {
        if (key == keyStr) {
        evnt = true
        }
    }
    return evnt
}