<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/plain; charset=UTF-8");

require 'classSQL.php';

$nfsdb = new SQL("nfssitedb");
$nfsdb->Connect();

$retval1 = $nfsdb->FetchView("nfsimages");
$retval2 = $nfsdb->FetchView("nfsjogos");
echo $retval1;
echo $retval2;
echo $nfsdb->Close();


