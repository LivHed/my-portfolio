$(document).ready(function () {
    
    // When the user clicks on a link in the navbar on smaller screens the navbar collapse.
    $('.navbar-nav a').click(function(){
            $(".navbar-collapse").collapse('hide');
        });
     
    // Get the current year for Copyright in the footer.
    $("#thisyear").html(new Date().getFullYear());
     
});
