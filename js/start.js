(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
       $('.datepicker').pickadate({
    selectMonths: true, 
    selectYears: 5 
  });
      $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');
        
  var options = [
    {selector: '.class', offset: 200, callback: 'globalFunction()' },
    {selector: '.other-class', offset: 200, callback: 'globalFunction()' },
  ];
  Materialize.scrollFire(options);

  }); 
})(jQuery); 
 
