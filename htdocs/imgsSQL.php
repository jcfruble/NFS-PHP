<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/plain; charset=UTF-8");

require 'classSQL.php';

$nfsdb = new SQL("nfssitedb");
$nfsdb->Connect();

echo $nfsdb->FetchView("imagespg1");
echo $nfsdb->FetchView("imagespg2");
echo $nfsdb->Close();


