/*共通パーツ読み込み*/
$(function(){
    $("#header").load("../common/header.html");
    $("#footer").load("../common/footer.html");
    $("#edge-ks").load("../common/noncompatible.html")
  })

  /*リンク無効化*/
  $(function(){
    $('a.disabled').click(function(){
      return false;
    })
  })

  /*アクティブなメニュー無効化*/
  $(document).ready(function() {
    if(location.pathname != "/") {
    var $path = location.href.split('/');
    var $endPath = $path.slice($path.length-2,$path.length-1);
    $('ul#nav li a[href$="'+$endPath+'/"]').parent().addClass('active');
    }
  });

  /*ページ遷移のアニメーション*/
  window.addEventListener('DOMContentLoaded',function(){
    new LookForward(".js-lookforward");
 });

 /*wow.js preload*/
 $(window).load(function() {
   $("body").removeClass("preload");
 });

 /*Scrolify */
 $.scrollify({section:".box"});

 /*cookie*/
 function setMyCookie() {
  myCookieVal = $('body').hasClass('darkmode') ? 'isActive' : 'notActive';
  $.cookie('myCookieName', myCookieVal, { expires: 365, path: '/' });
}
/*darkmode button*/
var flg = "off";
$("#js-switch-mode").click(function () {
  $('body').toggleClass('darkmode');
  $(this).toggleClass('is-active');
  if(flg == "off"){
    $(this).html("<i class='fas fa-moon'></i>");
    flg = "on";
  }else{
    $(this).html("<i class='far fa-moon'></i>");
    flg = "off";
  }
  setMyCookie();
});

/*discord Tagトグル*/
$(function() {
  $('button').click(function(){
    $('#discord-tag').toggleClass("discord-tag");
  })
})