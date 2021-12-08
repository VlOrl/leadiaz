
$('.burger_header').click(function(event){
  $('.burger_header, nav, .header_inner').toggleClass('active');
  $('body').toggleClass('lock');
});

$('.wrapper_block_question').click(function(){
    $(this).parent('.block_question').toggleClass('block_question_active');
  });



