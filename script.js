// Change this to the value of your own.
var scroll_offset = 100;

$(window).scroll(function(){
	var $this = $(window);
	if( $('.sticky-enquiry').length ) {
		if( $this.scrollTop() > scroll_offset ) { 
			$('.sticky-enquiry').addClass('revealed');
		} else {
			$('.sticky-enquiry').removeClass('revealed');
		}	
	}
});
