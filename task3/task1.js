var objTest = {}

objTest.propNum = 0;
objTest.propStr = "";
objTest.propBoo = false;
objTest.propFlag = undefined;
objTest.propObj = {};
objTest.propArr = [];
objTest.propFunc = function () {};

delete objTest.propFlag;

console.log(Object.entries(objTest));