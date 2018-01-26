(function ($) {

    // Navigation scrolls
    $('.navbar-nav li a').bind('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 78
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
        }
    });

    // Porfolio filer
    $("#portfolio-flters li").click ( function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      var selectedFilter = $(this).data("filter");
        
    if(selectedFilter == ".mama" )
    {
        document.getElementById("titulo").innerHTML = "Para mami";
        document.getElementById("descripcion").innerHTML = "Aunque todos estamos felices por conocer a la nueva bebé, es importante que reconozcas todo el esfuerzo de mamá. ¡Escoge qué regalarle!";    
    }
    else if(selectedFilter == ".alimentacion" )
    {
        document.getElementById("titulo").innerHTML = "Alimentación";
        document.getElementById("descripcion").innerHTML = "Durante las diferentes rutinas de alimentación diarias, la nueva bebé necesitará diferentes accesorios. ¡Escoge qué regalarle!";    
    }
        
    else if(selectedFilter == ".higiene" )
    {
        document.getElementById("titulo").innerHTML = "Higiene";
        document.getElementById("descripcion").innerHTML = "Los pañales, las toallitas y los pañitos húmedos serán algunos de los productos que más necesitará la nueva bebé. ¡Escoge qué regalarle!";    
    }
        
    else if(selectedFilter == ".paseo" )
    {
        document.getElementById("titulo").innerHTML = "De paseo";
        document.getElementById("descripcion").innerHTML = "La seguridad de la nueva bebé será lo más importante en todo momento. ¡Escoge qué regalarle!";    
    }
        
    else if(selectedFilter == ".ropa" )
    {
        document.getElementById("titulo").innerHTML = "Ropa";
        document.getElementById("descripcion").innerHTML = "Para que la nueva bebé esté cómoda en todo momento, estas son algunas de las cosas que necesitará. ¡Escoge qué regalarle!";    
    }
        
    else if(selectedFilter == ".suenos" )
    {
        document.getElementById("titulo").innerHTML = "Dulces sueños";
        document.getElementById("descripcion").innerHTML = "El cuarto y su cunita será el espacio más especial de la casa. ¡Escoge qué regalar!";    
    }  
    else if(selectedFilter == ".juguetes" )
    {
        document.getElementById("titulo").innerHTML = "Juguetería";
        document.getElementById("descripcion").innerHTML = "Durante el baby shower, la nueva bebé recibirá sus primeros juguetes, que lo acompañarán en todo momento. ¡Escoge qué regalarle!";    
    }
    else if(selectedFilter == ".si" )
    {
        document.getElementById("titulo").innerHTML = "Seleccionados";
        document.getElementById("descripcion").innerHTML = "Pensando en ti y en cada vez hacerte la vida más fácil, estas son las cosas que ya tiene la nueva bebé o nuestros invitados ya escogieron.";    
    }
    else
    {
        document.getElementById("titulo").innerHTML = "Todos";
        document.getElementById("descripcion").innerHTML = "Aqui tenemos una pequeña selección de las muchisimas cosas que va a necesitar nuestra bebe en los próximos meses";    
    }
        
      $("#portfolio-wrapper").fadeTo(100, 0);

      $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

      setTimeout(function() {
        $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
        $("#portfolio-wrapper").fadeTo(300, 1);
      }, 300);
    });

    

})(jQuery);
