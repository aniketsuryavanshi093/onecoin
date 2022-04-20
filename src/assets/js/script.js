import $ from 'jquery';

// sub-dropdown
$('.dropdown-menu').click(function (e) {
  e.stopPropagation();
});
$('.has-sub').click(function () {
  $(this).toggleClass('tab');
});
// side-menu
$('.menu-side-icon').click(function () {
  $('#section').toggleClass('ma');
  $('.t-nav').toggleClass('ha');
  $('body').toggleClass('fixed');
});
// filter
$('#filter').click(function () {
  $('.e-main-left').toggleClass('click');
  $('.e-main-right').toggleClass('none');
});
// accordion
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}

// function openContent(evt, contentName) {
//
//     var i, tabcontent, tablinks;

//
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }

//
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//
//     document.getElementById(contentName).style.display = "block";
//     evt.currentTarget.className += " active";
//   };
//   document.getElementById("defaultOpen").click();

$('.profile').on('click', function (event) {
  event.stopPropagation();
});

// $('#summernote').summernote({
//   placeholder: 'Hello Bootstrap 4',
//   tabsize: 2,
//   height: 100
// });
