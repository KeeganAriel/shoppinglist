

$( document ).ready(function() {

var source = $("#list-item-template").html();
var listItemTemplate = Handlebars.compile(source);

// add items to shopping list
	$("form").submit(function(event) {
		var maininput = $("#typehere").val();
		if (maininput !== '') {
			$("ul").append(listItemTemplate(maininput));
			//clear maininput
			$('#typehere').val('');
		



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