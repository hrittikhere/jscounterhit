for (i = 0; i < 2500; i++){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //do Something
        }
    };
    xhttp.open("GET", "https://camo.githubusercontent.com/ded6b08abf2347852256232c640c205858de80b3/68747470733a2f2f70726f66696c652d636f756e7465722e676c697463682e6d652f68726974696b686572652f636f756e742e737667", true);
    xhttp.send();
}