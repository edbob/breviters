//This js ES5, frontend code for manipulation css style.
(function () {
    window.onload = function () {
        var fsearch = getId("brev-searsh");
        if (window.addEventListener)
            fsearch.addEventListener("click", init, false);
        else if (window.attachEvent)//IE
            window.attachEvent("onclick", init);

    };
    //Open search panel and double click close pan.
    var flag;
    function init() {
        if (flag) {
            var f = document.myform;
            f.style.display = "none";
        } else {
            var f = document.myform;
            f.style.display = "block";
        };
        flag = !flag;
    };
    //Change size words on the site.
    function makeSizer(size) {
        return function () {
            document.body.style.fontSize = size + "px";
        };
    };

    var size16 = makeSizer(16);
    var size20 = makeSizer(20);
    var size24 = makeSizer(24);

    document.getElementById("size-16").onclick = size16;
    document.getElementById("size-20").onclick = size20;
    document.getElementById("size-24").onclick = size24;
    //..
    function getId(id) {
        return document.getElementById(id)
    };
})();