function logout(){
var element = document.getElementByClassName('confrm');
var confirmation = function (e){
	if(!confrm('Are you sure?')) e.preventDefault();
};
for(var i = 0, l=element.length; i++){
	element[i].addEventListener('click', confirmation, false)
}
}