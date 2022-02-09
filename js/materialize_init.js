//banner slider init
$(document).ready(function(){
  $('.slider').slider({
    // 不顯示操控圓鈕
    indicators: false,
    // 每張照片播五秒
    interval: 5000
  }),
  $('.sidenav').sidenav({
    edge: 'right',
    preventScrolling: false
  })
})
