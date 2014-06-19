var revealCurrentMenuItem = function(){
  $('.inner-navigation a').each(function(){
    var $a = $(this)
    if ($a.attr('href') == window.location.pathname) {
      $a.parent().addClass('active')
    }
  })
}

$(function(){

  console.log('xx');

  var $sidebars = $('.inner-navigation')
  if ($sidebars.length) {
    revealCurrentMenuItem()
  }
})
