
var studentForm = (function () {

    function onLoad(formContext) {
        //alert("Test");
        const identification = Xrm.Page.getAttribute("cr524_identification").getValue();
        if (identification == 1) {
            alert("הזדהות בעזרת ת.ז.");
        } else {
            alert("הזדהות בעזרת מס' סטודנט.");
        }

    }


    return {
        onLoad: onLoad
    };
})();


