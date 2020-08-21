function cretnumbers(value){
var preval= document.getElementById('display').value;
if (preval == "0"){preval ='';


} 




var newval = preval + value;
document.getElementById('display').value = newval;}

function arnav(){
document.getElementById('display').value = '0';}

function result(){
	var calculation=document.getElementById('display').value;
	var results=eval(calculation);
	document.getElementById('display').value = results;
}








	
