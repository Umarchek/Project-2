jQuery(document).ready(function($) {
    jQuery('.njt-yelp-has-vm').readmore({
        speed: 75,
        collapsedHeight: 42,
        moreLink: '<a href="#" class="njt-yelp-read-more">'+njt_yelp_main.read_more+'</a>',
        lessLink: '<a href="#" class="njt-yelp-read-less">'+njt_yelp_main.read_less+'</a>'
    });
});