$(function(){
  var $button = $('#name');
  var $p = $('#adjective');

  $button.click(function () {
    $.get('http://localhost:3000/adjective', function(response){
      $p.text(response.word);
    });
  });
});

$.get('http://localhost:3000/adjective', function(response){
  $p.text(response);
});
