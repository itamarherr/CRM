
var studentForm = (function () {

    function onLoad(executionContext) {
        //alert("Test");
        const formcontext = executionContext.getformContext();
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


