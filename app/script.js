$(function () {
  var $button = $('#name');
  var $adj = $('#adjective');
  var $noun = $('#noun');
  var $verb = $('#verb');
  var $submitAdj = $('#submitAdj');
  var $adject = $('#adject');

  $button.click(function () {
    $.get('http://localhost:3000/adjective', function (response) {
      $adj.text(response.word);
    });

    $.get('http://localhost:3000/verb', function (response) {
      $verb.text(response.word);
    });

    $.get('http://localhost:3000/noun', function (response) {
      $noun.text(response.word);
    });
  });

  $submitAdj.click(function () {

  });

});



