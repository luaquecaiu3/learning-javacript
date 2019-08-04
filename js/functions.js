
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

  try {
    var x;
    var y = null;
    var z = 5;
    var w = 'hello';

    function day_of_the_week(day){
      switch (day) {
        case 1: return 'domingo'; break;
        case 2: return 'segunda'; break;
        case 3: return 'terça'; break;
        case 4: return 'quarta'; break;
        case 5: return 'quinta'; break;
        case 6: return 'sexta'; break;
        case 7: return 'sábado'; break;
        default: return 'invalid day';
      }
    }

    function test_while(v){
      while (v <= 10) {
        document.querySelector(".content").innerHTML += '<br>' + v;
        ++v;
      }
    }

    var print = '<br>' +
    'x: ' + x + ' typeof: ' + typeof x
    + '<br>y: ' + y + ' typeof: ' + typeof y
    + '<br>z: ' + z + ' typeof: ' + typeof z
    + '<br>w: ' + w + ' typeof: ' + typeof w
    + '<br>' + ('aa' < 'ab')
    + '<br>' + (x == y)
    + '<br>' + (x === y)
    + '<br>' + day_of_the_week(0)
    + '<br>' + (z % 5 ==0)
    + '<br>' + (z % 2 ==0)
    + '<br>' + (z % 2 !=0)
    + '<br>' + test_while(z)
    ;

  } catch (e) {
    document.querySelector(".content").innerHTML += e.message;
  } finally {
    document.querySelector(".content").innerHTML += print;
  }

});
