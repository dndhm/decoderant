// Scrolls window to top of document
function scrollViewport() {
	setTimeout(function() {
		window.scrollTo(0, 1);
	}, 100);	
}



//Open 'external' links in new window/tab
function externalLinks() {
  var link = $('a.external');
  link.click(function() {
    window.open(this.href);
    return false;
  });
}

/* Document Ready Calls */
$(document).ready(function(){
	scrollViewport();
  	externalLinks();
});