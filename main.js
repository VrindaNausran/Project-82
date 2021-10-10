var mouseevent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color;
var radius;
var width;

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    color=document.getElementById("Color").value ;
    width= document.getElementById("Width").value;
    radius=document.getElementById("Radius").value;
    mouseEvent= "mousedown";
}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e){
    mouseEvent= "mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e){
    mouseEvent= "mouseleave";
}

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e){
    mouseEvent= "mouseleave";
}


function mymousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        console.log("X = " + current_position_of_mouse_x +", Y = " + current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y,radius,0,2*Math.PI);
    ctx.stroke();  
    }
}


