$(document).ready(function() {
    $('.circle,.cross').click(function(event) {
        $('.circle,.cross-icon,.cross,.circle-icon,.header__menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });
});

if (document.documentElement.clientWidth < 453) {
$(document).ready(function() {
        $('.h2').toggleClass('active');
    });

    
}
