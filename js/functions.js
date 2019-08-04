
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

    function test_for(v){
      for (var i = 0; i <= v; i++) {

        document.querySelector(".content").innerHTML += '<br>' + i;
      }
    }

    function test_car_empty(){
      var car = new Object(); //or var car = {};
      return 'empty ' + car;
    }

    function test_car_fill(){
      var car = new Object(); //or var car = {};
      car.color = 'red';
      car['model'] = 'gallardo';
      return 'fill ' + car.color + ' ' + car['model'];
    }

    function test_car_full(){
      var car = {
        color: 'red',
        model: 'gallardo'
      }

      document.querySelector(".content").innerHTML += '<br>full ' + car.valueOf();
    }

    function test_car_full_delete(){
      var car = {
        color: 'red',
        model: 'gallardo'
      }
      delete car.model;

      return 'fill ' + car.color + ' ' + car.nodel;
    }

    function test_car_full_ready_for(){
      var car = {
        color: 'red',
        model: 'gallardo'
      }
      for(var c in car){
        document.querySelector(".content").innerHTML += '<br>' + c + ': ' + car[c];
      }
    }

    var book_as_str = "{\"title\" : \"titulo\", \"author\" : \"autor\", \"price\" : \"preço\"}";

    var book = JSON.parse(book_as_str);

    function test_array(){
      var myarray = [];
      myarray[0] = 'zero';
      myarray[1] = true;
      myarray[2] = 4;
      myarray[10] = 'teen';

      return myarray;
    }

    function test_array_lenght(){
      var myarray = [];
      myarray[0] = 'zero';
      myarray[1] = true;
      myarray[2] = 4;
      myarray[10] = 'teen';
myarray.length = 2;
      return myarray.length;
    }

    function test_array_lenght_for(){
      var myarray = [];
      myarray[0] = 'zero';
      myarray[1] = true;
      myarray[2] = 4;
      myarray[10] = 'teen';
      myarray.length = 2;

      for (var i = 0; i < myarray.length; i++) {
        document.querySelector(".content").innerHTML += myarray[i];
      }

      for (var i in myarray) {
        document.querySelector(".content").innerHTML += myarray[i];
      }

      for (var i in myarray) {
        document.querySelector(".content").innerHTML += myarray[i];
      }
    }

    function test_array_delete(){
      var myarray = [];
      myarray[0] = 'zero';
      myarray[1] = true;
      myarray[2] = 4;
      myarray[10] = 'teen';

      delete myarray[1];

      document.querySelector(".content").innerHTML +=  myarray;
    }

    function test_myarray_method(){
      var a = [1, 3, 5];
      var b = [0, 2, 4];

      document.querySelector(".content").innerHTML +=  a.concat(b);

      var c = [10,11,12];

      document.querySelector(".content").innerHTML +=  a.concat(b,c);
    }

    function test_array_format(){
      var myarray = [];
      myarray[0] = 'zero';
      myarray[1] = true;
      myarray[2] = 4;
      myarray[10] = 'teen';

      myarray.push(7);
      document.querySelector(".content").innerHTML += '<br>' + myarray;

      document.querySelector(".content").innerHTML += '<br>' + myarray.join(" / ");

      myarray.unshift(9);
      document.querySelector(".content").innerHTML += '<br>' + myarray;

      document.querySelector(".content").innerHTML += '<br>' + myarray.pop();

      document.querySelector(".content").innerHTML += '<br>' + myarray.shift();

      document.querySelector(".content").innerHTML += '<br>' + myarray.slice(0,3);

      document.querySelector(".content").innerHTML += '<br>' + myarray.splice(5) + myarray;
    }

    function test_array_sort(){
      var myarray = [1,56,48,65,12,7,5,6,3,0];

      function asc_comparator(a,b){
        return (a-b);
      }

      function desc_comparator(a,b){
        return (b-a);
      }

      document.querySelector(".content").innerHTML +=  '<br>' + myarray.sort() + '<br>' + myarray.sort(asc_comparator) + '<br>' + myarray.sort(desc_comparator);
    }

    var print = '<br>'
    //+ 'test_array_sort()' + test_array_sort()
    //+ 'test_array_format()' + test_array_format()
    //+ 'test_myarray_method()' + test_myarray_method()
    //+ 'test_array_delete()' + test_array_delete()
    //+ 'test_array_lenght_for()' + test_array_lenght_for()
    //+ test_array_lenght();
    //+ test_array()
    /* +
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
    + '<br>' + test_car_empty()
    + '<br>' + test_car_fill()
    + '<br>' + test_car_full_delete()
    + '<br>' + book_as_str
    + '<br>' + book*/
    ;

  } catch (e) {
    document.querySelector(".content").innerHTML += e.message;
  } finally {
    document.querySelector(".content").innerHTML += print;
  /*  test_while(z);
    test_for(z);
    test_car_full_ready_for();
    test_car_full();
    test_car_full_ready_for();*/
//    $(function(){for(var c in book){document.querySelector(".content").innerHTML += '<br>' +c + ': ' + book[c];}});

  }
});
