

$( document ).ready(function() {

var source = $("#list-item-template").html();
var listItemTemplate = Handlebars.compile(source);
var updateCount = function() {
		var count = $("input[type=checkbox]:checked").length;
		$('.bought-item').text(count);
		var amount = $('.list li').length;
		$('.item-count').text(amount);

};

// add items to shopping list
	$("form").submit(function(event) {
		var maininput = $("#typehere").val();
		if (maininput !== '') {
			$("ul").append(listItemTemplate(maininput));
			//clear maininput
			$('#typehere').val('');
			updateCount();



		}


		event.preventDefault();
	});

// checks items off in the shopping list
	$('.list').on ('click', '[type=checkbox]', function(){
		$(this).parent().toggleClass('purchased');
		updateCount();
	});

	// remove li on click of button
	$('.list').on('click', '.btn-default', function(){
 		$(this).parent().remove();
 		updateCount();
	});

	// add uncheck button?
		

});