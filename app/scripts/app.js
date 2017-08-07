  $(window).load(function(){
      $('#page-loader').delay(300).fadeOut(400, function(){});
      $('#loader-name').addClass('loader-left');
      $('#loader-job').addClass('loader-right');
      $('#loader-animation').addClass('loader-hide');
  });

  $(document).on('submit', '#contact-form', function(e){
    e.preventDefault();
    var element = $(this);
    $.ajax({
        url     : element.attr('action'),
        type    : element.attr('method'),
        data    : element.serialize(),
        dataType: 'JSON',
        beforeSend: function()
        {
            element.find('button').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>');
        },
        success: function(data)
        {
            if(data.status)
            {   
                element[0].reset();
                swal({
                    title: 'Terimakasih, telah menghubungi kami',
                    type: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
                
            }else
            {
                swal({
                    title: 'upps , ada kesalahan',
                    type: 'warning',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
            }
            element.find('button').html('<i class="fa fa-long-arrow-right"></i> SUBMIT');

        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            element.find('button').html('<i class="fa fa-long-arrow-right"></i> SUBMIT');

        }         
    });
  });

  $(document).ready(function(){
      $('#loading-wraper').fadeIn(300);
      $(window).scroll(function() {
      if ($(this).scrollTop() > 200) 
      {
        $('.go-top').fadeIn(200);
      } 
      else 
      {
        $('.go-top').fadeOut(200);
      }
  });

  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function(){ 
      $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  $('#mainNav').affix({
      offset: {
          top: 100
      }
  });

  var wow = new WOW({
          offset:100,   
      });
    wow.init();
  });

  jQuery(function(){
      $('#mixit-container').mixItUp();
  });

  jQuery(document).ready(function() {
    $(".fancybox").fancybox();
  });  