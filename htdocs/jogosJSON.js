/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var xmlhttp = new XMLHttpRequest();
var url = 'jogosSQL.php';

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        getAllData(xmlhttp.responseText);
    }
};
//xmlhttp.open("GET", url, true);
//xmlhttp.send();
window.onload = function() {
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
};

function getAllData(response) {
    var ldata = JSON.parse(response);
    adata = ldata.jogospg;
    ndata = adata.length - 1;
    idata = 1;
    updatePage();
}


function updatePage() {
    odata = adata[idata];
    document.getElementById("titulo").innerHTML = odata["titulo"].toUpperCase();
    document.getElementById("data").innerHTML = odata.data;
    document.getElementById("genero").innerHTML = odata.genero;
    document.getElementById("descr").innerHTML = odata.descr;
    var ImgPath = 'imgs/' + odata.imgsdir + '/cover/' + odata.imgnome;
    document.getElementById("imagem").src = ImgPath;

    if (idata > 1) {
        document.getElementById("butprev").removeAttribute("disabled");
    } else {
        document.getElementById("butprev").setAttribute("disabled", "disabled");
    }
    if (idata < ndata) {
        document.getElementById("butnext").removeAttribute("disabled");
    } else {
        document.getElementById("butnext").setAttribute("disabled", "disabled");
    }
}

function next() {
    idata++;
    updatePage();
}
function previous() {
    idata--;
    updatePage();
}