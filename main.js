var cell = function () {

    var cool =  $('i').addClass('active');
        var interv = setInterval(function() {
            $('i').removeClass('active');
            console.log(cool);
                clearInterval(interv);
        }, 3000);

};
