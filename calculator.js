function cretnumbers(value){
var preval= document.getElementById('display').innerHTML;
if (preval == "0"){preval ='';


} 




var newval = preval + value;
document.getElementById('display').innerHTML = newval;}

function arnav(){
document.getElementById('display').innerHTML = '0';}

function result(){
	var calculation=document.getElementById('display').innerHTML;
	var results=eval(calculation);
	document.getElementById('display').innerHTML = results;
}



	
