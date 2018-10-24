


// 底部广告栏定期显示
if($('.articleList-bottom-ad')) {
  // 点击关闭底部公众号广告
  $('.articleList-bottom-ad .close').click(function(e) {
    $('.articleList-bottom-ad').fadeOut()
  })

  let showBottomAd = localStorage.getItem('showBottomAd');
  if(!showBottomAd || (showBottomAd && showBottomAd < new Date().getTime())) {
    console.log(1)
    $('.articleList-bottom-ad').show()
    var d = new Date().getTime()
    // 多长时间后关闭
    localStorage.setItem('showBottomAd', d + 7200000);
  }
}
