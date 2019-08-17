<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//$a = [ "jogos" => [ "SELECT" => [ "A" => [ "titulo" , "data" , "descr" , "imgsdir" , "imgnome" ] , "B" => [ "genero" ] ] , "FROM" => [ "A" => "NFSJOGOS" , "B" => "NFSGENEROS" ] , "WHERE" => [ "A" => "idGenero" , "B" => "idGenero" ] , "ORDER BY" => [ "A" => "idJogo" ] ] ];

$a = [ "jogos" => [ "SELECT" => [ "titulo"=>"A." , "data"=>"A." , "descr"=>"A." , "imgsdir"=>"A." , "imgnome"=>"A." , "genero"=>"B." ] , "FROM" => [ "NFSJOGOS "=>"A" , "NFSGENEROS "=>"B" ] , "WHERE" => [ "A." => "idGenero" , "B." => "idGenero" ] , "ORDER BY" => [ "A" => "idJogo" ] ] ];

$b = json_encode($a);

var_dump($b);

$c = json_decode($b, true);

var_dump($c);

