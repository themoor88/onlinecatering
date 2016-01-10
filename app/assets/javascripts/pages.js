$(function() {

  // Keyboard typing for the front page.
  $(".changer").typed({
    strings: ["Meetings", "Events", "Weddings", "Birthdays", "Parties", "Get Togethers"],
    typeSpeed: 50,
    loop: true
  });

  // When user clicks on I'm Hungry, a modal pops up.
  $('body').on('click', '.js--scroll-to-plans', function(e) {
    e.preventDefault();
    var email = $('input#email').val();
    addSubscriber(email);
  });

  // Ajax call for adding a subscriber to the list.
  function addSubscriber(email) {
    $.ajax({
      url: 'https://api.sendgrid.com/v3/contactdb/recipients',
      type: 'POST',
      dataType: 'JSON',
      success: function(data) {
        console.log(data);
      },

      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
      }
    });
  }

  // Bootbox modal for adding an address.
  function addAddressBootbox(form) {
    bootbox.dialog({
      title: gon.bootbox_translations.add_address.title,
      message: form
    });
  }

  $('.btn.btn-success.caterer').click(function(e) {
    e.preventDefault();
    bootbox.dialog({
      title: 'Become a Caterer',
      message:
        '<div class="row form">' +
          '<div class="col-md-12">' +
            '<label for="name" /> Company Name' +
            '<input name="name" placeholder= "Name" required= "", type= "text" />' +
          '</div>' +
        '</div>' +
        '<div class="row form">' +
          '<div class="col-md-12">' +
            '<label for="city" /> City' +
            '<input name="city" placeholder= "Valencia, Barcelona, etc." required= "", type= "text" />' +
          '</div>' +
        '</div>' +
        '<div class="row form">' +
          '<div class="col-md-12">' +
            '<label for="food" /> Type Of Food' +
            '<input name="food" placeholder= "Indian, vegetarian, etc." required= "", type= "text" />' +
          '</div>' +
        '</div>' +
        '<div class="row form">' +
          '<div class="col-md-12">' +
            '<label for="contact-name" /> Contact Name' +
            '<input name="contact-name" placeholder= "Someone to contact" required= "", type= "text" />' +
          '</div>' +
        '</div>' +
        '<div class="row form">' +
          '<div class="col-md-12">' +
            '<label for="email" /> Email' +
            '<input name="email" placeholder= "Email" required= "", type= "email" />' +
          '</div>' +
        '</div>' +
        '<div class="row form">' +
          '<div class="col-md-12">' +
            '<label for="phone" /> Phone' +
            '<input name="phone" placeholder= "Phone Number with Area Code" required= "", type= "text" />' +
          '</div>' +
        '</div>',
      buttons: {
        success: {
          label: 'Submit',
          className: 'btn btn-success',
          callback: function() {
            thanksBootbox();
          }
        }
      }
    });

    function thanksBootbox() {
      bootbox.dialog({
      title: 'Become a Caterer',
      message: 'Thanks a lot! One of our representatives will contact you shortly.',
      buttons: {
        success: {
          label: 'OK',
          className: 'btn btn-success',
          callback: function() {}
        }
      }
    });
    }
  });
});
