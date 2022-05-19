var appendText = function(t)
{
	$("#typed").val( $("#typed").val() + t);
	$("#typed").focus();
	
	
}

$( function() {
	
	$("#typed").focus();
	
	$( "#basic" ).hide();
	$( "#more" ).show();
	$( "#moreletters" ).hide();
	
	$( "button" ).click( function( event ) {
		event.preventDefault();
		let t = $(this).attr('data-attr');
		appendText(t);
		
		
	} );
	
	$( "#clear" ).click( function( event ) {
		event.preventDefault();
		
		$("#typed").val('');
		$("#typed").focus();
		
	} );
	
	$( "#copy" ).click( function( event ) {
		event.preventDefault();
		
		$("#typed").select();
		navigator.clipboard.writeText($("#typed").val());
		
		$("#copiedmessage").removeClass("hidden").addClass("show");
		
		setTimeout(()=> {
			$("#copiedmessage").removeClass("show").addClass("hidden");
		}, 400);
		
	} );
	
	$( "#space" ).click( function( event ) {
		event.preventDefault();
		
		appendText(" ");
		
	} );
	
	$( "#dot" ).click( function( event ) {
		event.preventDefault();
		
		appendText(".");
		
	} );
	
	$( "#more" ).click( function( event ) {
		event.preventDefault();
		
		$( "#basic" ).show();
		$( "#more" ).hide();
		$( "#basicletters" ).hide();
		$( "#moreletters" ).show();
		
	} );
	
	$( "#basic" ).click( function( event ) {
		event.preventDefault();
		
		$( "#basic" ).hide();
		$( "#more" ).show();
		$( "#basicletters" ).show();
		$( "#moreletters" ).hide();
		
	} );
	
} );

