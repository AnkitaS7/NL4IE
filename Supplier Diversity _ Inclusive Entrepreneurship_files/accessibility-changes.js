/**
*
* Semantic markup .js changes to address inherent Divi accessibility issues
*
*/
jQuery(document).ready(function($) {

    $( '#et-main-area' ).wrap( '<main>' );

    /**
     * Removal of search submit button which causes lost tab between search
     * and first content element when tabbing keyboard on leadership page
     */
    $('.et_search_outer button').attr('tabindex','-1');

    /**
     * Detect shift-tab on main nav menu. By default, this keyboard action
     * doesn't close the current active dropdown, so we need to
     * force that here.
     */
    $('#top-menu li.menu-item-has-children').keydown(function(e) {
        
        if(e.keyCode == 9 && e.shiftKey) {
            
            //shift was down when tab was pressed
            $(this).removeClass('et-hover');

        }
    });

    /**
     * Add aria-label to the main navigation <nav> to separate it from the upper
     * nav <nav> element.
     */
     $('nav#top-menu-nav').attr('aria-label','Main site navigation');

    /**
     * Address content outside of landmark issue.
     * The Divi accessibilitiy plugin inserts a "Skip to content"
     * link for keyboard users, but Divi inserts the link outside
     * of any landmark. Wrap in a div and assign role to the div.
     */
    $('.skip-link').wrap( '<div id="skip-link-wrapper">' );
    $('#skip-link-wrapper').attr('role','complementary');

});
