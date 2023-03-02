

$(document).ready(function(){
});

var splide = new Splide( '.splide', {
    perPage: 1,
    autoplay:true,
    rewind : true,
    perMove:1,
    type:'loop',
    arrows: false,
    snap: false,
    drag:true,
} );

splide.mount();


let navLinks = document.getElementById('navLink');

function showMenu(){
if($("#navLink").hasClass("menuShown")){
    hideMenu()
}else{
    $("#navLink").addClass("menuShown");

    $("#navLink").animate({
        'right':0
    },500);
}

}
function hideMenu(){
    $("#navLink").removeClass("menuShown");
    $("#navLink").animate({
        'right':'-400px'
    },500);}


