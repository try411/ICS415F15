/**
 * Created by Kaelyn on 9/27/2015.
 */
$(document).ready(function(){
  $('.answer').hide();
  $('.answer').css("color", "red");
  $('.answer').css("margin-left", "30px");
  $('.question').css("font-size", "20px");
  $('.question').css("font-weight", "bold");
  $('.question').css("font-size", "20px");
  $('.hideshowtxt').css("display", "inline");
  $('.hideshowtxt').css("font-weight", "normal");
  $('.hideshowtxt').css("font-size", "15px");

  $('#q1').click(function(){
    $('#a1').toggle();
    $('#hs1').text() == "closed(+)" ? $('#hs1').text('opened(-)') : $('#hs1').text('closed(+)');
  });
  $('#q2').click(function(){
    $('#a2').toggle();
    $('#hs2').text() == "closed(+)" ? $('#hs2').text('opened(-)') : $('#hs2').text('closed(+)');
  });
  $('#q3').click(function(){
    $('#a3').toggle();
    $('#hs3').text() == "closed(+)" ? $('#hs3').text('opened(-)') : $('#hs3').text('closed(+)');
  });
  $('#q4').click(function(){
    $('#a4').toggle();
    $('#hs4').text() == "closed(+)" ? $('#hs4').text('opened(-)') : $('#hs4').text('closed(+)');
  });
  $('#q5').click(function(){
    $('#a5').toggle();
    $('#hs5').text() == "closed(+)" ? $('#hs5').text('opened(-)') : $('#hs5').text('closed(+)');
  });

  $('#submitbtn').click(function(){
    var urltxt= $('#site').val();

    $.get(urltxt, function(data){
      var count = $('<a></a>').html(data).find('a').length;
      $('#result').text("Number of Links: " + count);
    });

  });



});