
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


  var x;
  var y = null;
  var z = 5;
  var w = 'hello';

  var print = ('x: ' + x + ' typeof: ' + typeof x
  + '<br>y: ' + y + ' typeof: ' + typeof y
  + '<br>z: ' + z + ' typeof: ' + typeof z
  + '<br>w: ' + w + ' typeof: ' + typeof w
);

document.querySelector(".content").innerHTML = print;

});
