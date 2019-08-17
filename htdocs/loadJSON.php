<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=utf-8");

if (session_start()) {
    $_SESSION["JIDX"]=0;
    $_SESSION["IIDX"] = 0;
    $_SESSION["DBOK"] = 0;
}

if (isset($_REQUEST['job'])) {
    
}
$_SESSION["JIDX"] = $_REQUEST["job"];

if ($_SESSION["DBOK"] == 0) {
    $_SESSION["DBCON"] = mysqli_connect("localhost", "root", "", "nfssitedb");
    $_SESSION["DBOK"] = 1;
}

//require 'classSQL.php';

//$nfsdb = new SQL("nfssitedb");
//$nfsdb->Connect();
//$nfsdb->Fetch("jogos","SELECT A.GameName,A.LaunchDate,A.GameDescr,A.Imgsdir,A.Imgscover,B.StyleName FROM nfsgames A,nfsstyles B WHERE A.idStyle=B.idStyle ORDER BY A.idGame");
//$nfsdb->Close();
//$nfsdb->Respond();

