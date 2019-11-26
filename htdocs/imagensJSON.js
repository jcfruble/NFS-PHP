/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var url = 'imgsSQL.php';

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
		getAllData(xmlhttp.responseText);
	}
};
window.onload = function() {
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
};

function getAllData(response) {
	var ldata = JSON.parse(response);
	ajogos = ldata.nfsjogos;
	aimages = ldata.nfsimages;
	njogos = ajogos.length - 1;
	ijogos = 0;
	updatePage();
}

function updatePage() {
	var ojogo = ajogos[ijogos];
	var strInner = '';
	document.getElementById("imagestxt").innerHTML = strInner;
	document.getElementById("titulo").innerHTML = ojogo["titulo"].toUpperCase();
	var strPath = 'imgs/nfs' + ojogo.idJogo.toString();
	for (var i = ojogo.imgini-1; i < ojogo.imgend; i++) {		
		var strH1='<a href="';
		var strH2 = strPath + '/big/' + aimages[i].imgs + '" >';
		var strI1='<img src="';
		var strI2 = strPath + '/thumb/' + aimages[i].imgs + '" alt="" width="" height="" />';		
		var strH3='</a>\r\n';		
		var strLine = strH1.concat(strH2,strI1,strI2,strH3);
		strInner = strInner.concat(strLine);
	}
	document.getElementById("imagestxt").innerHTML = strInner;

	if (ijogos > 0) {
		document.getElementById("butprev").removeAttribute("disabled");
	} else {
		document.getElementById("butprev").setAttribute("disabled", "disabled");
	}
	if (ijogos < njogos) {
		document.getElementById("butnext").removeAttribute("disabled");
	} else {
		document.getElementById("butnext").setAttribute("disabled", "disabled");
	}
}

function next() {
	ijogos++;
	updatePage();
}
function previous() {
	ijogos--;
	updatePage();
}