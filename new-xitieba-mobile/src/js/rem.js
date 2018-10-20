// 设置动态修改html的fontSize的函数
function refreshRem () {
  // 定义变量 -- 以iphone6为原型
  var htmlFontSize = 75
  var cW = 750

  // 当前打开的移动端视口宽度
  var newCW = document.documentElement.clientWidth || document.body.clientWidth

  // 比例 cW / 16 = newCW / ?
  var newHtmlFontSize = newCW * htmlFontSize / cW

  // 进行赋值操作
  document.documentElement.style.fontSize = newHtmlFontSize + 'px'
  
}

if (document.readyState === 'complete') {
  document.body.style.fontSize = '24px';
} else {
  document.addEventListener('DOMContentLoaded', function(e) {
    document.body.style.fontSize = '24px';
  }, false);
}

refreshRem()

var tid
window.addEventListener('resize', function() {
  clearTimeout(tid);
  tid = setTimeout(refreshRem(), 300);
}, false);