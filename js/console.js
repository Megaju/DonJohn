/**
 * Created by j on 02/07/17.
 */

function gameConsole(t) {
    var p = document.createElement('p');
    var t = document.createTextNode(t);
    p.appendChild(t);

    var e = document.getElementById('console');
    e.appendChild(p);
}