
// Smooth Scrolling
//==========================================
$(function() {
  $('a.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({scrollTop: target.offset().top -50}, 1000);
        return false;
      }
    }
  });
});

// force show placeholder
$(function(){
	$('input, textarea').placeholder();
});

//my functions
$(function(){
alert();
document.getElementById("content").innerHTML = "Hello World";​
  /*
  var x;
  var y = null;
  var z = 5;
  var w = 'hello';

  alert('x: ' + x + ' typeof: ' + typeof x
  + '\ny: ' + y + ' typeof: ' + typeof y
  + '\nz: ' + z + ' typeof: ' + typeof z
  + '\nw: ' + w + ' typeof: ' + typeof w
);*/


});
