var int = prompt("введите число от 2 до 1000", 500);

if ((isNaN(+int)) || (+int <= 1) || (+int > 1000)) {
 alert ("Данные введены неверно");
}
else if (+int == 2)	{
	alert ("Число " + int + " Простое число")
}
else if ((+int % 2 == 0) && (+int != 2)) {
	alert ("Число " + int + " Составное число");
}
else { var lim = Math.round (Math.sqrt (+int)) 
ff = false
}
for ( i= 3; i <= lim; i+= 2 ) {
if(+int % i == 0) {
 alert ("Число " + int + " Составное число");
 ff = true;
 break;
}
}

if (ff == false) {
alert ("Число " + int + " Простое число");	
}