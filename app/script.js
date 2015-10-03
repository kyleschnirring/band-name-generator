$(function () {
  var $button = $('#name');
  var $adj = $('#adjective');
  var $noun = $('#noun');
  var $verb = $('#verb');

  $button.click(function () {
    $.post('http://localhost:3000/adjective', function (response) {
      $adj.text(response.word);
    });

    $.post('http://localhost:3000/verb', function (response) {
      $verb.text(response.word);
    });

    $.post('http://localhost:3000/noun', function (response) {
      $noun.text(response.word);
    });
  });
});

