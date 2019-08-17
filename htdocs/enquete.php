<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link type="text/css" rel="stylesheet" href="css/base.css" />
	<script type="text/javascript" src="enquete.js" ></script>
        <title>Need For Speed Game Series Survey</title>
    </head>
    <body>
        <div id="page">
            <div id="topo">
                <div id="esq"></div>
                <div id="meio"><h1>ENQUETE</h1></div>
                <div id="dir"></div>                
            </div>
            <div id="menubar">
                <img src="picts/truste.png" alt="" width="135" height="41" />   
                <div id="botoes">
                    <a href="home.html" onmousedown='getElementById("bhome").src = "picts/home_dn.gif";' onmouseover='getElementById("bhome").src = "picts/home_hv.gif";' onmouseup='getElementById("bhome").src = "picts/home_up.gif";'><img id="bhome" src="picts/home_up.gif" alt="" class="botao" /></a>
                    <a href="jogos.html" onmousedown='getElementById("bjogos").src = "picts/jogos_dn.gif";' onmouseover='getElementById("bjogos").src = "picts/jogos_hv.gif";' onmouseup='getElementById("bjogos").src = "picts/jogos_up.gif";'><img id="bjogos" src="picts/jogos_up.gif" alt="" class="botao" /></a>
                    <a href="imagens.html" onmousedown='getElementById("bimagens").src = "picts/imagens_dn.gif";' onmouseover='getElementById("bimagens").src = "picts/imagens_hv.gif";' onmouseup='getElementById("bimagens").src = "picts/imagens_up.gif";'><img id="bimagens" src="picts/imagens_up.gif" alt="" class="botao" /></a>
                    <a href="links.html" onmousedown='getElementById("blinks").src = "picts/links_dn.gif";' onmouseover='getElementById("blinks").src = "picts/links_hv.gif";' onmouseup='getElementById("blinks").src = "picts/links_up.gif";'><img id="blinks" src="picts/links_up.gif" alt="" class="botao" /></a>
                    <img id="benquete" src="picts/enquete_dn.gif" alt="" class="botao atual" />
                    <a href="sobre.html" onmousedown='getElementById("bsobre").src = "picts/sobre_dn.gif";' onmouseover='getElementById("bsobre").src = "picts/sobre_hv.gif";' onmouseup='getElementById("bsobre").src = "picts/sobre_up.gif";'><img id="bsobre" src="picts/sobre_up.gif" alt="" class="botao" /></a>
                </div>
                <img src="picts/rating_small.png" alt="" width="100" height="69" style="vertical-align:text-top" />
            </div>
            <div id="centro">
                <div id="enquetetxt">
                    <form id="surveyform" method="post" action="enquetePUT.php">
			<fieldset id="enqueteplayd">
			    <legend><strong>QUAIS JOGOS VOCÊ JÁ JOGOU ?</strong></legend>
			    <label for="play0">
				<input type="checkbox" name="play[]" id="play0" value="0" disabled="disabled" checked="checked" />Nenhum jogo desta lista</label>
                        </fieldset>
                        <fieldset id="enquetebest">
                            <legend><strong>QUAL JOGO VOCÊ MAIS GOSTOU ?</strong></legend>
			    <label for="best0">
				<input type="radio" name="best" id="best0" value="0" disabled="disabled" />Nenhum jogo desta lista</label>
                        </fieldset>

                        <fieldset id="enquetefim">
                            <label for="userip">Seu endereço de IP parece ser&nbsp; 
                                <input type="text" name="userip" id="userip" maxlength="15" readonly="readonly" />
                            </label>
			    <div id="enquetesend">
				<input type="hidden" name="nfsany" id="nfsany" value="1" />
				<input type="submit" name="Enviar" value="Enviar" />
		                <input type="button" name="Resultados" value="Resultados" onclick="window.location.assign('result.html')" />
			    </div>
                        </fieldset> 
                    </form>
                </div>
            </div>
            <div id="rodape">
                <div id="re"></div>
                <div id="rm">
                </div>
                <div id="rd"></div>                
            </div>
        </div>
    </body>
</html>
