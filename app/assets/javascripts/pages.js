// $(function() {

//   // Keyboard typing for the front page.
//   $(".changer").typed({
//     strings: ["Meetings", "Events", "Weddings", "Birthdays", "Parties", "Get Togethers"],
//     typeSpeed: 50,
//     loop: true
//   });

//   // When user clicks on I'm Hungry, a modal pops up.
//   $('body').on('click', '.js--scroll-to-plans', function(e) {
//     e.preventDefault();
//     var email = $('input#email').val();
//     addSubscriber(email);
//   });

//   // Ajax call for adding a subscriber to the list.
//   function addSubscriber(email) {
//     $.ajax({
//       url: '/subscribe',
//       data: {email: email},
//       type: 'POST',
//       dataType: 'JSON',
//       success: function(data) {
//         if (data.success) {
//           bootbox.dialog({
//             title: 'Thank You!',
//             message: 'We will keep you updated and let you know when we officially launch.',
//             closeButton: false,
//             buttons: {
//               success: {
//                 label: 'OK',
//                 className: 'btn btn-success',
//                 callback: function() {
//                   $('input#email').val("");
//                 }
//               }
//             }
//           });
//         } else {
//           bootbox.dialog({
//             title: 'Something went wrong!',
//             message: 'We couldn\'t add your email. Please try again.',
//             closeButton: false,
//             buttons: {
//               success: {
//                 label: 'OK',
//                 className: 'btn btn-success',
//                 callback: function() {
//                   $('input#email').val("");
//                 }
//               }
//             }
//           });
//         }
//       },

//       error: function(jqXHR, textStatus, errorThrown) {
//         bootbox.dialog({
//           title: 'Something went wrong!',
//           message: 'We couldn\'t add your email. Please try again.',
//           closeButton: false,
//           buttons: {
//             success: {
//               label: 'OK',
//               className: 'btn btn-success',
//               callback: function() {
//                 $('input#email').val("");
//               }
//             }
//           }
//         });
//       }
//     });
//   }

//   $('.btn.btn-success.caterer').click(function(e) {
//     e.preventDefault();
//     bootbox.dialog({
//       title: 'Become a Caterer',
//       message:
//         '<div class="row form">' +
//           '<div class="col-md-12">' +
//             '<label for="name" /> Company Name' +
//             '<input name="name" placeholder= "Name" required= "", type= "text" />' +
//           '</div>' +
//         '</div>' +
//         '<div class="row form">' +
//           '<div class="col-md-12">' +
//             '<label for="city" /> City' +
//             '<input name="city" placeholder= "Valencia, Barcelona, etc." required= "", type= "text" />' +
//           '</div>' +
//         '</div>' +
//         '<div class="row form">' +
//           '<div class="col-md-12">' +
//             '<label for="food" /> Type Of Food' +
//             '<input name="food" placeholder= "Indian, vegetarian, etc." required= "", type= "text" />' +
//           '</div>' +
//         '</div>' +
//         '<div class="row form">' +
//           '<div class="col-md-12">' +
//             '<label for="contact-name" /> Contact Name' +
//             '<input name="contact-name" placeholder= "Someone to contact" required= "", type= "text" />' +
//           '</div>' +
//         '</div>' +
//         '<div class="row form">' +
//           '<div class="col-md-12">' +
//             '<label for="email" /> Email' +
//             '<input name="email" placeholder= "Email" required= "", type= "email" />' +
//           '</div>' +
//         '</div>' +
//         '<div class="row form">' +
//           '<div class="col-md-12">' +
//             '<label for="phone" /> Phone' +
//             '<input name="phone" placeholder= "Phone Number with Area Code" required= "", type= "text" />' +
//           '</div>' +
//         '</div>',
//       buttons: {
//         success: {
//           label: 'Submit',
//           className: 'btn btn-success',
//           callback: function() {
//             thanksBootbox();
//           }
//         }
//       }
//     });

//     function thanksBootbox() {
//       bootbox.dialog({
//         title: 'Become a Caterer',
//         message: 'Thanks a lot! One of our representatives will contact you shortly.',
//         closeButton: false,
//         buttons: {
//           success: {
//             label: 'OK',
//             className: 'btn btn-success',
//             callback: function() {}
//           }
//         }
//       });
//     }
//   });
// });
