console.log($('.xtb-header'))
$('.xtb-header input').on('input', function() {
  $(this).val().length==0?$(this).siblings('img').show():$(this).siblings('img').hide()
})