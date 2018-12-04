var RADIUS = 1,//定义圆半径
MarginTop = 0,//距离上面的位置
MarfinLeft = 0,//距离左边的位置
COLOR = '#fff';//球的颜色
window.onload = function() {
var canvas = document.getElementById('canvasTime');
canvas.width = '560';//画布大小
canvas.height = '50';
var context = canvas.getContext('2d');
setInterval(function(){//定时器
    var d = new Date();
    var y=d.getFullYear();
    var month=d.getMonth()+1;
    var date=d.getDate();
    var h = d.getHours(); 
    var m = d.getMinutes();
    var s = d.getSeconds();
    canvas.height = canvas.height;
    render(context,h,m,s,y,month,date);
    //console.log(y,month,date,h,m,s,)
},1000); 
}
function render(cxt,h,m,s,y,month,date) {//画球
renderDigit(MarfinLeft ,  MarginTop, parseInt(y.toString().split('')[0]) , cxt)
renderDigit(MarfinLeft+14*(RADIUS+1), MarginTop, parseInt(y.toString().split('')[1]), cxt)
renderDigit(MarfinLeft+32*(RADIUS+1), MarginTop, parseInt(y.toString().split('')[2]), cxt)
renderDigit(MarfinLeft+50*(RADIUS+1), MarginTop, parseInt(y.toString().split('')[3]), cxt)
renderDigit(MarfinLeft+64*(RADIUS+1), MarginTop, 11, cxt)
renderDigit(MarfinLeft+75*(RADIUS+1), MarginTop, parseInt(month/10), cxt)
renderDigit(MarfinLeft+90*(RADIUS+1), MarginTop, parseInt(month%10), cxt)
renderDigit(MarfinLeft+107*(RADIUS+1), MarginTop, 11, cxt)
renderDigit(MarfinLeft+115*(RADIUS+1), MarginTop, parseInt(date/10), cxt)
renderDigit(MarfinLeft+130*(RADIUS+1), MarginTop, parseInt(date%10), cxt)
renderDigit(MarfinLeft+145*(RADIUS+1), MarginTop, 12, cxt)
renderDigit(MarfinLeft+160*(RADIUS+1) ,  MarginTop, parseInt(h/10) , cxt)
renderDigit(MarfinLeft+175*(RADIUS+1), MarginTop, parseInt(h%10), cxt)
renderDigit(MarfinLeft+190*(RADIUS+1), MarginTop, 10, cxt)
//renderDigit(MarfinLeft+165*(RADIUS+1), MarginTop, parseInt(h%10), cxt)
renderDigit(MarfinLeft+205*(RADIUS+1), MarginTop, parseInt(m/10) , cxt)
renderDigit(MarfinLeft+220*(RADIUS+1), MarginTop, parseInt(m%10) , cxt)
renderDigit(MarfinLeft+235*(RADIUS+1), MarginTop, 10, cxt)
renderDigit(MarfinLeft+250*(RADIUS+1), MarginTop, parseInt(s/10) , cxt)
renderDigit(MarfinLeft+265*(RADIUS+1), MarginTop, parseInt(s%10) , cxt)
}
function renderDigit(x, y, num, cxt) {//每个数字的画法
cxt.fillStyle=COLOR;
for(var i = 0; i < digit[num].length; i ++ ) {
    for(var j = 0; j < digit[i].length; j++ ) {
        if(digit[num][i][j] == 1) {
            cxt.beginPath();
            cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
            cxt.closePath();
            cxt.fill();
        }
    }
}

}