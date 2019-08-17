/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var bestV = 0;
var playCount = 0;
var uip;
var usedip;
var bestL = [];
var playL = [];
var playT = [];
var bestT = [];

var url = 'enqueteGET.php';

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        getAllData(xmlhttp.responseText);
    }
};
window.onload = function () {
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

function getAllData(response) {
    var ldata = JSON.parse(response);
    adata = ldata.titulo;
    uip = ldata.userip[0];
    usedip = ldata.usedips[0];
    ndata = adata.length;
    cdocInit();
};

function cdocInit() {
    var aftiptxt, i, eInp, eLab, eTxt, eSpa;
    for (i = 0; i < ndata; i++) {
        eInp = document.createElement("INPUT");
        eInp.type = "checkbox";
        eInp.name = "playd[]";
        eInp.id = "play" + i;
        eInp.value = i;
        eInp.disabled = false;
        eInp.checked = false;
        eInp.addEventListener("change", cdocUpdate);
        playL[i] = eInp;
        eTxt = document.createTextNode(adata[i]);
        playT[i] = eTxt;
        eLab = document.createElement("LABEL");
        eLab.htmlFor = "play" + i;
        eLab.appendChild(eInp);
        eLab.appendChild(eTxt);
        document.getElementById("enqueteplayd").appendChild(eLab);

        eInp = document.createElement("INPUT");
        eInp.type = "radio";
        eInp.name = "best";
        eInp.id = "best" + i;
        eInp.value = i;
        eInp.disabled = Boolean(i);
        eInp.checked = false;
        bestL[i] = eInp;
        eTxt = document.createTextNode(adata[i]);
        bestT[i] = eTxt;
        eLab = document.createElement("LABEL");
        eLab.htmlFor = "bestl" + i;
        eSpa = document.createElement("SPAN");
        eSpa.id = "bests" + i;
        eSpa.appendChild(eInp);
        eSpa.appendChild(eTxt);
        eLab.appendChild(eSpa);
        document.getElementById("enquetebest").appendChild(eLab);
    }
    document.getElementById("userip").value = uip;
    switch (usedip) {
        case 0:
            aftiptxt = "e será registrado para identificar sua enquete";
            break;
        case 1:
            aftiptxt = "e esta enquete foi registrada através dele uma vez";
            break;
        default:
            aftiptxt = "e esta enquete foi registrada através deste ip " + usedip.toString() + " vezes";
    }
    document.getElementById("afterip").innerHTML = aftiptxt;
}

function cdocReset() {
    for (var i = 0; i < ndata; i++) {
        playL[i].disabled = false;
        bestL[i].disabled = false;
        playL[i].checked = false;
        bestL[i].checked = false;
    }
}

function cdocUpdate() {
    var i;
    var eEv = event.currentTarget;
    var eIdx = +eEv.value;
    if (eIdx) {
        if (eEv.checked) {
            bestL[eIdx].disabled = false;
            if (eIdx === bestV) {
                bestL[eIdx].checked = true;
            }
            playCount++;
        } else {
            if (bestL[eIdx].checked) {
                bestV = eIdx;
            }
            bestL[eIdx].disabled = true;
            playCount--;
        }
    } else {
        if (eEv.checked) {
            for (i = 1; i < ndata; i++) {
                if (bestL[i].checked) {
                    bestV = i;
                }
                bestL[i].disabled = true;
                playL[i].disabled = true;
            }
            bestL[0].checked = true;
            bestL[0].disabled = true;
        } else {
            bestL[0].disabled = false;
            for (i = 1; i < ndata; i++) {
                playL[i].disabled = false;
                if (playL[i].checked) {
                    bestL[i].disabled = false;
                }
                if (bestV === i) {
                    bestL[i].checked = true;
                }
            }
        }
    }
//    if (playCount !== 0) {
//        bestL[0].setAttribute("disabled", "disabled");
//        playL[0].removeAttribute("checked");
//        bestL[0].removeAttribute("checked");
//        document.getElementById("nfsany").value = "0";
//    } else {
//        bestL[0].removeAttribute("disabled");
//        playL[0].setAttribute("checked", "checked");
//        bestL[0].setAttribute("checked", "checked");
//        document.getElementById("nfsany").value = "1";
//    }
}
