$(document).ready(function () {
    
    // When the user clicks on a link in the navbar on smaller screens the navbar collapse.
    $('.navbar-nav a').click(function(){
            $(".navbar-collapse").collapse('hide');
        });
    
    // When the user clicks the button the animation is triggered.
    $('.toggler-button').on('click', function () {

            $('.animated-icon').toggleClass('open');
        });
     
    // Get the current year for Copyright in the footer.
    $("#thisyear").html(new Date().getFullYear());


    // Tooltips Initialization - on the first two work card icons, as an example to show
    // what happends when you click these icons in every work card.
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
     
});
