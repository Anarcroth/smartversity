//simple grid custom grid
jQuery(function ($) {
    function main_function() {
        // In action
        var sortlist = $('#sortlist');
        var mg = new xFilterList(sortlist, {
            // you can set the margin in pixels
            margin: 40
        });
        // Filtering
        var filter, links = $('nav#filters a');
        links.on('click', function () {
            if (!$(this).hasClass('active') && !$(this).hasClass('thickbox')) {
                // Retrieve the filter value
                filter = $(this).attr('data-filter');
                // Filtering by retrieved value
                mg.filterBy(filter);

                links.removeClass('active');
                $(this).addClass('active');

                if (filter === 'all') {
                    sortlist.removeClass('filtered');
                } else {
                    sortlist.addClass('filtered');
                }
            }
        });

        // Trigger click event for first line
        $("#sortlist").show();
        links.first().trigger('click');
        $("a.all").trigger('click');
    }
    function show_all_list(){
        //show all when search box is empty
        if($(this).val()==""){            
           $(".all").trigger('click');
        }
        
    }
    
    // call functions
    $(window).on('load', main_function);
    $(".all").on("change",show_all_list);
});