//This js ES5, frontend code for manipulation css style.
(function () {
    if (window.addEventListener)
        window.addEventListener("load", init, false);
    else if (window.attachEvent)
        window.attachEvent("onload", init);
    //Event click 
    function init() {
        var fsearch = getId("brev-searsh");
        var nalign = getId("brev-align");
        var goTop = getId("my-go-top");

        if (fsearch.addEventListener) fsearch.addEventListener("click", Osearch, false);//all
        if (fsearch.attachEvent) fsearch.attachEvent("onclick", Osearch);//IE

        if (nalign.addEventListener) nalign.addEventListener("click", alignsz, false);
        if (nalign.attachEvent) nalign.attachEvent("onclick", alignsz);

        if (goTop.addEventListener) goTop.addEventListener("click", Topscroll, false);
        if (goTop.attachEvent) goTop.attachEvent("onclick", goTop);

        //register event handlers with form elements.
        FormSubFoot.email.onchange = emailOnChange;
        FormSubFoot.onsubmit = onsubmiHandler;

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
        function animS() {
            document.myform.input
        }
    };

    //Change textAlign on the site.
    function alignsz() {
        var o = document.getElementsByTagName('p');
        for (var i = 0; i < o.length; i++) {
            o[i].style.textAlign = (o[i].style.textAlign == 'left') ? '' : 'left';
        };
    };

    //goTop
    function Topscroll(e) {
        var increment = e.pageY;
        var timer = setInterval(function () {
            increment -= 100;
            window.scrollTo(0, increment);
            if (increment <= 0) {
                clearInterval(timer);
            }
        }, 20)
    };

    //Method check the value of the element in the regular expression.
    function validate(elem, pattern) {
        var res = elem.value.search(pattern);
        if (res == -1) {
            elem.className = "invalid"
        } else {
            elem.className = "valid";
        }
    };

    //EmailForm
    function emailOnChange() {
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validate(this, pattern);
    };

    //Event when the form is submitted to the server.
    function onsubmiHandler() {
        var invalid = false;
        for (var i = 0; i < FormSubFoot.elements.length; i++) {
            var e = FormSubFoot.elements[i];
            if (e.type == "text" && e.onchange) {
                e.onchange();
                if (e.className == "invalid") invalid = true;
            }
        };
        //cancel form submission.
        if (invalid) {
            alert("Mistakes in filling out the form.")
            return false;
        };
    };

    //.
    function getId(id) {
        return document.getElementById(id)
    };

})();
