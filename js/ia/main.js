$(document).ready(function() {
						   
/* making plus and minus for nav show and hide on click. 
This will make the child list show or hide, open or close.	 */
	$('.js-left-nav-toggle').on('click',	function(){
											 
											//console.log('click'); 
		/* this will have the child list show when the plus is clicked */									
		$(this).parent().next('.nav-breadcrumb-child').toggleClass('is-collapsed');	
											//test	
											 //console.log($(this));
			/*switch text from plus to minus */
			if($(this).hasClass('is-closed')) {
	   //then change text to a minue
	   			
					($(this).removeClass('is-closed').text('-'));
				}
	//otherwise, change text to a plus
			else {
					($(this).addClass('is-closed').text('+'));
				}		
	   
	
		});
						   
/* end of breadcrumb toggle function */						   

/*This will make the child list show or hide, open or close.	 */
	$('.js-primary-nav-toggle').on('click',	function(){
											 
											
		/* this will have the child list show when the plus is clicked */									
		$(this).parent().next('.nav-primary-parent-item').toggleClass('is-collapsed');	
											//test	
											 //console.log($(this));
			/*switch text from plus to minus */
			if($(this).hasClass('is-closed')) {
	   //then change text to a minue
	   			
					($(this).find('.js-toggle-state').removeClass('is-closed').text('-'));
				}
	//otherwise, change text to a plus
			else {
					($(this).find('.js-toggle-state').addClass('is-closed').text('+'));
				}		
	   
	
		});


	/* START LOGIN BUTTON */					  
	$('.js-header-login-toggle').on('click', function(){

		$('.header-login-form-fields').toggleClass('is-closed');

	});


	/* START MAIN NAV FLYOUT */					  
	$('.js-nav-primary-toggle').on('click', function(){

		var el=$(this),
			flyout=el.siblings('.nav-primary-flyout');

		flyout.toggleClass('is-closed');

	});

	/* IGNORE CLICK EVENT */
	$('.nav-primary a' ).on('click', function(e){
		e.preventDefault();

	});

	/*Add Toggle to Main Nav on Mobile */

	/* making plus and minus for nav show and hide on click. */

	

});