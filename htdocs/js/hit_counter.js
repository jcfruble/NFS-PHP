/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function HitCounter() {
    var data = '&r=' + escape(document.referrer)
            + '&n=' + escape(navigator.userAgent)
            + '&p=' + escape(navigator.userAgent)
            + '&g=' + escape(document.location.href);

    if (navigator.userAgent.substring(0, 1) > '3')
        data = data + '&sd=' + screen.colorDepth
                + '&sw=' + escape(screen.width + 'x' + screen.height);

//    document.write('<a href="http://www.1freecounter.com/stats.php?i=106318" target=\"_blank\" >');
//    document.write('<img alt="Free Counter" border=0 hspace=0 ' + 'vspace=0 src="http://www.1freecounter.com/counter.php?i=106318' + data + '">');
//    document.write('</a>');
    document.write('');
}
