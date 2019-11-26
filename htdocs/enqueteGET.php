<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/plain; charset=UTF-8");

require 'classSQL.php';

$remote_addr = $_SERVER['REMOTE_ADDR'];

$nfsdb = new SQL("nfssitedb");
$nfsdb->Connect();

$nfsdb->GetView("jogos_names");
$nfsdb->AddToGet("userip" , $remote_addr);
$nfsdb->Get("getnips",'SELECT COUNT(`userip`) AS `usedips` FROM `nfsenquetes` WHERE (`userip`=INET_ATON("'.$remote_addr.'"))');
$nfsdb->respondJSON();
$nfsdb->Close();
