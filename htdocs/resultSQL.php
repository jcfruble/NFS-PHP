<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/plain; charset=UTF-8");

require 'classSQL.php';

$nfsdb = new SQL("nfssitedb");
$nfsdb->Connect();

$nfsdb->GetView("enqresults");
$nfsdb->GetView("jogosnames");
$nfsdb->GetView("enqsummit");
$nfsdb->respondJSON();
$nfsdb->Close();
