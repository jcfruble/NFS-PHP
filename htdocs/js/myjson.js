/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var xmlhttp = new XMLHttpRequest();
var url = "http://www.w3schools.com/website/Customers_MYSQL.php";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        myFunction(xmlhttp.responseText);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
    var ljogo = JSON.parse(response);
    var ajogos = ljogo.jogos;
    var out = "<table>";
    var rjogo;
    for(i = 0; i < ajogos.length; i++) {
        rjogo[i] = ajogos[i].row;
    }
    out += "</table>";
    document.getElementById("id01").innerHTML = out;
}

