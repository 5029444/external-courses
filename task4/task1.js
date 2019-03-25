var objProto = {
	prop1: 1,
	prop2: 2,
	prop3: 3
    };
    
objTest = Object.create (objProto);
objTest.prop4 = 4;
objTest.prop5 = 5;

for (i = 1; i <=5; i++) {
    prop = "prop";
    prop = prop + i;
  searchProt (prop, objTest);
    console.log ("Свойство " + prop + " " + attr);
};

function searchProt (prop, obj) {
    attr ="не принадлежит прототипу"
    for (var k in Object.getPrototypeOf (obj)) {
        if (k == prop) { 
           attr = "принадлежит прототипу"
           return attr;
          } 
    }        
};
