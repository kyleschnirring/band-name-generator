$(function () {
  var $button = $('#name');
  var $adj = $('#adjective');
  var $noun = $('#noun');
  var $verb = $('#verb');
  var $submitAdj = $('#submitAdj');
  var $adjRes = $("#adjectiveRes");
  var $select = $('#select');

  $button.click(function () {
    $.get('adjective', function (response) {
      $adj.text(response.word);
    });

    $.get('verb', function (response) {
      $verb.text(response.word);
    });

    $.get('noun', function (response) {
      $noun.text(response.word);
    });
  });

  $submitAdj.click(function (e) {
    e.preventDefault();
    var selected = $select.val();
    var word = $("#word").val();
    var adjPost;

    if (word) {
      adjPost = {word: word};

      if (selected === 'adjective') {
        $.post("adjectives", adjPost, function (response) {
          var adjectiveRes = response.msg;
          $adjRes.text(adjectiveRes);
        });
      }
      if (selected === 'verb') {
        $.post("verbs", adjPost, function (response) {
          var adjectiveRes = response.msg;
          $adjRes.text(adjectiveRes);
        });
      }
      if (selected === 'noun') {
        $.post("nouns", adjPost, function (response) {
          var adjectiveRes = response.msg;
          $adjRes.text(adjectiveRes);
        });
      }
    }
  });
});



