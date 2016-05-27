$( document ).ready(function() {
// add items to shopping list
	$("form").submit(function(event) {
		var maininput = $("#typehere").val();
		if (maininput !== '') {

			$("ul").append('<li><input type="checkbox">' + maininput + '<input type="number"></li>');
			$('#typehere').val('');

		
		var source = $("#list-item-template").html();
		var template = Handlebars.compile(source);

			$("ul").append(template(maininput));
			$('#typehere').val(''); //clear maininput
		}
		var count = $('.list li').length;
		$('.item-count').text(count);

		event.preventDefault();
	});

// checks items off in the shopping list
	$('.list').on ('click', '[type=checkbox]', function(){
		$(this).parent().toggleClass('purchased');
		var count = $("input[type=checkbox]:checked").length;
		$('.bought-item').text(count);
	});



		

});