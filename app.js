$( document ).ready(function() {
	$("#add").click(function() {
		var maininput = $("#typehere").val();
		console.log(maininput);
		if (maininput !== '') {
			$("ul").append('<li><input type="checkbox">' + maininput + '<input type="number"></li>');
			$('#typehere').val('');
		}
	});

	$('[type="checkbox"]').click(function(){
		var element = $(this).maininput();
			if ($(this).is(':checked'))
				  { element.wrap('<del>');
				  } else {
				  element.unwrap('<del>');
					}
		});


});