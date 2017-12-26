$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 164) {
            $('.bt-header-main-menu').addClass('fixed-top');
        } else {
            $('.bt-header-main-menu').removeClass('fixed-top');
        }
    });
});
// SHOW AND HIDE TABLE FORM
$(function(){
    $('.view-form').on('click', function(e){
        e.preventDefault();
		e.stopPropagation();
        if ($(this).parents('.bt-racecard-detail-table-row').hasClass('open-table-form')){
			$(this).parents('.bt-racecard-detail-table-row').removeClass('open-table-form');
			$('.bt-racecard-detail-table-row').removeClass('open-table-form');
		} else {
			$('.bt-racecard-detail-table-row').removeClass('open-table-form');
			$(this).parents('.bt-racecard-detail-table-row').addClass('open-table-form');
		}
    });
    $('.bt-racecard-mobile-header-collapse').on('click', function(e){
        e.preventDefault();
		e.stopPropagation();
        if ($(this).parents('.bt-racecard-detail-table-row').hasClass('open-table-body')){
			$(this).parents('.bt-racecard-detail-table-row').removeClass('open-table-body');
			$('.bt-racecard-detail-table-row').removeClass('open-table-body');
		} else {
			$('.bt-racecard-detail-table-row').removeClass('open-table-body');
			$(this).parents('.bt-racecard-detail-table-row').addClass('open-table-body');
		}
    });
    $('.close-action').on('click', function(){
        $(this).parents('.bt-racecard-detail-table-row').removeClass('open-table-form');
    });
});
// CAROUSEL INTERVAL
$(function(){
    $('#homepageBanner').carousel({
        interval: 6000
    });
});