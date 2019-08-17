/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var xmlhttp = new XMLHttpRequest();
var url = 'resultSQL.php';
var dbRes;

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        dbRes = JSON.parse(xmlhttp.responseText);
        updatePage();
    }
};

window.onload = function() {
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
};

function updatePage() {
        
	var cxt = document.getElementById("mycanvas").getContext("2d");
	pieChart(cxt,dbRes.bestTotal,200,200,150,[20,80,0,0,80,20],dbRes.titulo,450,50,16,20,16);
};

function toB16(n) {
        var b16 = n.toString(16);
        if (b16.length===1) {
            return ("0"+b16);
        } else {
            return b16;
        }            
}

function pieChart(c, data, cx, cy, r, co, labels, lx, ly, ls, ld, td) {
	var total = 0.0;
        var lyy;
	var angles = [];
        var degrees = [];
        var car,cag,cab,cbr,cbg,cbb,cor,cog,cob,cot,ddif,ifl;
        car=cag=cab=cbr=cbg=cbb=cor=cog=cob=ddif=ifl=0.0;
        var ddif = data.length-1;
        car = (co[1]-co[0])/ddif; cbr = co[0];
        cag = (co[3]-co[2])/ddif; cbg = co[2];
        cab = (co[5]-co[4])/ddif; cbb = co[4];
        for(var i = 0; i < data.length; i++) total += data[i];
	for(var i = 0; i < data.length; i++) {
            angles[i] = Math.PI*2*data[i]/total;
            degrees[i] = (Math.round(data[i]/total*10000)/100).toString()+"%";
        }
	var startangle = 0;
	for(var i = 0; i < data.length; i++) {
                ifl=i;
                lyy = ly + ld*i;
                cor = Math.round((car*i + cbr)*2.55);
                cog = Math.round((cag*i + cbg)*2.55);
                cob = Math.round((cab*i + cbb)*2.55);
                cot = toB16(cor)+toB16(cog)+toB16(cob);
                endangle = startangle + angles[i];
		c.beginPath();
		c.moveTo(cx,cy);
		c.arc(cx,cy,r,startangle,endangle,false);
		c.font = "bold italic 12pt monospaced";
		c.fillStyle = "#"+cot;
		c.strokeStyle = 'black';
		c.lineWidth = 1;
		c.closePath();
		c.fill();
		c.stroke();
		c.strokeRect(lx,lyy,ls,ls);
		c.fillRect(lx,lyy,ls,ls);
                c.fillStyle = "lightgoldenrodyellow";
                c.strokeStyle = "lightgoldenrodyellow";
                c.textAlign = "right";
                c.fillText(degrees[i],lx-td,lyy+ls/2);
                c.textAlign = "left";
		c.fillText(labels[i],lx+ls+td,lyy+ls/2);
		startangle = endangle;
	}
}
