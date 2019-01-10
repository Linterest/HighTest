(function (win, doc) {
  
    change();
    
    function change() {
      // $('html').css('height',document.documentElement.clientHeight);
      
      doc.documentElement.style.fontSize = doc.documentElement.clientWidth * 20 / 320 + 'px';
      
    }
    var body=document.querySelectorAll('body')[0];
    body.style.width=document.documentElement.clientWidth+'px';
    body.style.height=document.documentElement.clientHeight+'px';
    win.addEventListener('resize', change, false);
    
    /* 这个是移动端设备横屏、竖屏转换时触发的事件处理函数 */
    win.addEventListener('orientationchange', change, false);
    
  })(window, document);