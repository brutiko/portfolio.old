//= require_tree .

$(document).ready(function() {
    $('.navbar ul li a').each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
});


// FILTERING
$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
		
	});
});


// active button
$(document).ready(function () {
    $('.fil-cat').click(function(e) {

        $('.btn').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
    });
});