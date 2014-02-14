$('#parent-element a').on("touchstart",function(e){
var $link_id = $(this).attr('id');
if ($(this).parent().data('clicked') == $link_id) {
// element has been tapped (hovered), reset 'clicked' data flag on parent element and return true (activating the link)
$(this).parent().data('clicked', null);
return true;
} else {
$(this).addClass("hover").siblings().removeClass("hover"); //adds the hover class to the link, and removes it from its siblings in the container.
// element has not been tapped (hovered) yet, set 'clicked' data flag on parent element to id of clicked link, and prevent click
e.preventDefault(); // return false; on the end of this else statement would do the same
$(this).parent().data('clicked', $link_id); //set this link's ID as the last tapped link ('clicked')
}
});