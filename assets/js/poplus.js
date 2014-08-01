var revealCurrentMenuItem = function(){
  $('.inner-navigation a').each(function(){
    var $a = $(this)
    if ($a.attr('href') == window.location.pathname) {
      $a.parent().addClass('active')
    }
  })
}

$(function(){

  var nav = responsiveNav(".nav-collapse")

  var $sidebars = $('.inner-navigation')
  if ($sidebars.length) {
    revealCurrentMenuItem()
  }
})

// @see https://developers.google.com/feed/v1/devguide
var feed_list = $('#poplus-group-feed ul')
if (feed_list.length) {
  google.load('feeds', '1')

  google.setOnLoadCallback(function () {
    var feed = new google.feeds.Feed('https://groups.google.com/forum/feed/poplus/topics/atom.xml?num=10')
    feed.setNumEntries(10)
    feed.load(function (result) {
      if (!result.error) {
        for (var i = 0, l = result.feed.entries.length; i < l; i++) {
          var entry = result.feed.entries[i];
          feed_list.append('<li><span class="title"><a href="' + entry.link + '">' + entry.title + '</a></span><span class="snippet">' + entry.contentSnippet + '</span></li>');
        }
      }
    })
  })
}
