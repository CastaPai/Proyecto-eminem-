if (document.getElementById("ButtonModalno")) {


    var modalno = document.getElementById("mymodalno");
    var button = document.getElementById("ButtonModalno");
    var span = document.getElementsByClassName("closeno")[0];
    var body = document.getElementsByTagName("body");

    button.onclick = function () {

        modalno.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }


    span.onclick = function () {
        modalno.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}
