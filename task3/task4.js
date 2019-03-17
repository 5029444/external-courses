var obOld = {      //исходный объект
    oneProp: ""
};
var newProp = "oneProp1" // свойство для добавления
var newVal = "new" // значение свойства для добавления

addNew (obOld, newProp);

//console.log(Object.entries(obOld));

function addNew (obOld, newProp) {
 evnt = false
    for (var key in obOld) {
        if (key == newProp) {
            evnt = true
          };
        };
if (evnt == false) {
obOld[newProp] = newVal
    };
return obOld ;
};