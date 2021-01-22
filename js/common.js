window.onload = function(){ 
    $('[name=language]').change(function() {
        var l = $('[name=language]').val();
        if(l == "english"){
            $('.ja').addClass("d-none");
            $('.en').removeClass("d-none");
        } else {
            $('.en').addClass("d-none");
            $('.ja').removeClass("d-none");
        }
    });
};