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

function createImage(image, width, height, alt, c) {
    var img = document.createElement("IMG");
    img.setAttribute("src", "assets/monsters/"+image+".png");
    img.setAttribute("width", width);
    img.setAttribute("height", height);
    img.setAttribute("alt", alt);

    var e = document.getElementById(c);
    e.appendChild(img);
}