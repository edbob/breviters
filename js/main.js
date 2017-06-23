//This js ES5, frontend code for manipulation css style.
(function () {
    if (window.addEventListener)
        window.addEventListener("load", init, false);
    else if (window.attachEvent)
        window.attachEvent("onload", init);

    function init() {
        var fsearch = getId("brev-searsh");
        var nalign = getId("brev-align");

        if (fsearch.addEventListener) fsearch.addEventListener("click", Osearch, false);
        if (fsearch.attachEvent) fsearch.attachEvent("onclick", Osearch);

        if (nalign.addEventListener) nalign.addEventListener("click", alignsz, false);
        if (nalign.attachEvent) nalign.attachEvent("onclick", alignsz);
    };

    //Open search panel and double click close pan.
    var flagA;
    function Osearch() {
        if (flagA) {
            var f = document.myform;
            f.style.display = "none";
        } else {
            var f = document.myform;
            f.style.display = "block";
        };
        flagA = !flagA;
    };

    //Change textAlign on the site.
    function alignsz() {
        var o = document.getElementsByTagName('p');
        for (var i = 0; i < o.length; i++) {
            o[i].style.textAlign = (o[i].style.textAlign == 'left') ? '' : 'left';
        };
    };

    //..
    function getId(id) {
        return document.getElementById(id)
    };
})();
