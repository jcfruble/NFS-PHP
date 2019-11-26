<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/plain; charset=UTF-8");

require 'classSQL.php';

$nfsdb = new SQL("nfssitedb");
$nfsdb->Connect();

//echo $nfsdb->Fetch("jogos",'SELECT A.titulo,A.data,A.descr,A.imgsdir,A.imgnome,B.genero FROM nfsjogos A,nfsgeneros B WHERE A.idGenero=B.idGenero ORDER BY A.idJogo');
echo $nfsdb->FetchView("jogos_view");
echo $nfsdb->Close();
