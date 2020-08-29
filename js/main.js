$(function(){
//partsloadから読み出し
//pageheaderを途中から固定
  var _window = $(window),
      _header = $('.pageheader'),
      headerbottom;

  _window.on('scroll',function(){
    headerbottom = $('header').height() - $('.pageheader').height();
      if(_window.scrollTop() > headerbottom){
          _header.addClass('fixed');
      }
      else{
          _header.removeClass('fixed');
      }
  });

  _window.trigger('scroll');

//リンクの設定
  var link = $('#wrapper').attr('class');
  $('.' + link + 'link').each(function(){
    var obj = $(this);
    $(obj).attr('href', function(i, val){
      var linkhref = $(obj).attr('href');　
      var str = linkhref.match(/#\w+/);
      if(str == null){
        str = "#wrapper";
      }
      return str;
    });
  });

//スムーススクロール
  var scrollback = 70;
  var speed = 400;//スムーズスクロールスピード
  var urlHash = location.hash;
  var url = location.pathname;
  var position;
  if(urlHash) {
    history.replaceState(null, null, location.pathname);
    $("html, body").stop().scrollTop(0);
      setTimeout(function(){
        var target = $(urlHash);
        if($('.pageheader').hasClass('fixed')){
          position = target.offset().top - scrollback;
        }else {
          position = target.offset().top - scrollback - $('.pageheader').height();
        }
        $("html, body").stop().animate({scrollTop:position}, speed, "swing");
      }, 100);
    }
    $('a[href^="#"]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        if($('.pageheader').hasClass('fixed')){
          position = target.offset().top - scrollback;
        }else {
          position = target.offset().top - scrollback - $('.pageheader').height();
        }
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
  	});
});
