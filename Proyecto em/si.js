if (document.getElementById("ButtonModalsi")) {


    var modalsi = document.getElementById("mymodalsi");
    var button = document.getElementById("ButtonModalsi");
    var span = document.getElementsByClassName("closesi")[0];
    var body = document.getElementsByTagName("body");

    button.onclick = function () {

        modalsi.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }


    span.onclick = function () {
        modalsi.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}
