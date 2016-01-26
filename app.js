$( document ).ready(function() {
	$("form").submit(function(event) {
		var maininput = $("#typehere").val();
		console.log(maininput);
		if (maininput !== '') {
			$("ul").append('<li><input type="checkbox">' + maininput + '<input type="number"></li>');
			$('#typehere').val('');
		}
		event.preventDefault();
	});

	$('.list').on ('click', '[type=checkbox]', function(){
		$(this).parent().toggleClass('purchased');
	});
});