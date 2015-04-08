;(function($) {
  $.fn.metal = function() {
    this.find('*')
    .filter(function(i, n) {
      return jQuery(n).css('background-image').match(/^url/);
    })
    .each(function(i, v) {
      $(v).css('background-image', 'url(//metalstate.files.wordpress.com/2015/01/melodic-death-metal-concert-1366x768.jpg)');
    });

    this.find('img')
    .each(function(i, v) {
      $(v).attr({
        'src': '//metalstate.files.wordpress.com/2015/01/melodic-death-metal-concert-1366x768.jpg',
        'srcset': '//metalstate.files.wordpress.com/2015/01/melodic-death-metal-concert-1366x768.jpg'
      });
    });
  };
})(jQuery);
