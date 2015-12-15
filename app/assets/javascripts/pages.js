$(function() {
  $('.btn.btn-success.caterer').click(function(e) {
    e.preventDefault();
    bootbox.dialog({
      title: 'Become a Caterer',
      message: 'Sure',
    });
  });
});
