<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/plain; charset=UTF-8");

$_nfsany=filter_input(INPUT_POST,"nfsany");
$_playd=filter_input_array(INPUT_POST, "playd");
$_best=filter_input(INPUT_POST, "best");
$_userip=filter_input(INPUT_POST, "userip");
date_default_timezone_set("Brazil/East");
require 'classSQL.php';

var_dump($_POST);

if (is_null($_best)) {
	$best = "-1";
} else {
	$best = $_best;
}
if ($_nfsany === "1") {
	$playd = "'0'";
} else {
	$playd = "'";
	foreach($_POST["playd"] as $playi) {
		$playd .= $playi.",";
	}
}
$playd[strlen($playd)-1] = "'";
$command="INSERT INTO `nfsenquetes` VALUES (";
$command.="DEFAULT,INET_ATON('".$_userip."')";
$command.=",NOW()";
$command.=",".$best;
$command.=",".$playd.")";



$nfsdb = new SQL("nfssitedb");
$nfsdb->Connect();
echo $command;
$nfsdb->Insert($command);
echo $nfsdb->ErrCode();
echo $nfsdb->Error();
$nfsdb->Close();
