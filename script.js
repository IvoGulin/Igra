var obj, posX=90, posY=220;
window.onload = function() 
{
    var pos = 0; 
    obj= document.querySelector(".object")
    var ball = document.getElementsByClassName('object');  
    var mnstr = document.getElementById ('monster')
}  
function left() 
{
    posX -= 1;
    obj.style.left = posX + "px";
}
function right() 
{
    posX += 20;
    obj.style.left = posX + "px";
}
function up() 
{
    posY -= 20;
    obj.style.top = posY + "px";
}
function down() 
{
    posY += 20;
    obj.style.top = posY + "px";
}
function take()
{
    if (posX == 150 && posY == 0 &&  document.getElementById('monster').style.opacity != '0')
	{
        alert("Well done! You caught a Ghost");
        caught();
    }
}
function caught ()
{ 
	document.getElementById('monster').style.opacity = '0';
}
