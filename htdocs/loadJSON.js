/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var htmlCaller = document.getElementByTag("HTML").id;
    var xmlhttp;
    var url;

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                processPHP(xmlhttp.responseText);
            }
        };

    function callPHP(task)
    {
        xmlhttp = new XMLHttpRequest();
        url = "loadJSON.php";
        xmlhttp.open("GET", url+'?job='+task, true);
        xmlhttp.send();
    }

    function processPHP(task,response) {
        var odata = JSON.parse(response);
        if (odata.errno) {
            return false;
        }
        switch (task) {
            case 0: ;   // SQLconnect
            case 1: ;   // SQLselect.jogo
            case 2: ;   // SQLselect.images
            case 3: ;   // SQLseek.next
            case 4: ;   // SQLseek.previous
            case 5: ;   // SQLclose
        }
    }

    
    callPHP(0);

    window.onload = function () {
        callPHP(0);
    };
})();
/*
 var xmlhttp = new XMLHttpRequest();
 var url = 'jogosSQL.php';
 
 xmlhttp.onreadystatechange = function() {
 if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
 getJogos(xmlhttp.responseText);
 }
 };
 xmlhttp.open("GET", url, true);
 xmlhttp.send();
 
 var xmlhttp = new XMLHttpRequest();
 var url = 'imgsSQL.php';
 
 xmlhttp.onreadystatechange = function() {
 if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
 getJimgs(xmlhttp.responseText);
 }
 };
 xmlhttp.open("GET", url, true);
 xmlhttp.send();
 
 function getJogos(response) {
 var ldata = JSON.parse(response);
 ajogos = ldata.jogos;
 njogos = ajogos.length - 1;
 //    idata = 0;
 //    updatePage();
 }
 
 function getJimgs(response) {
 var ldata = JSON.parse(response);
 adata = ldata.query;
 ndata = adata.length - 1;
 idata = 0;
 updatePage();
 }
 */
