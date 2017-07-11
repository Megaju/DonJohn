/**
 * Created by j on 02/07/17.
 */

function write(t, c) {
    var p = document.createElement('p');
    var t = document.createTextNode(t);
    p.appendChild(t);

    var e = document.getElementById(c);
    e.appendChild(p);
}