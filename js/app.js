jQuery(window).on( "load resize", function(){
    
	//set the size of the img element to the width and height of the container "news-preview"
    $('.news-item').each(function(){
        img = $(this).find('img').first();
        ctn = $(this).find('.news-preview').first();
        iw = img.width();
        ih = img.height();
        cw = ctn.width();
        ch = ctn.height();
        cp = ch/cw; //container proportion
        ip = ih/iw; //image proportion

        // If the image fits proportionally to the width
        // of the container, is it taller than the container?
        if( cw*ip > ch){
        	iwn = cw;
        	ihn = Math.ceil(cw*ip);
        } else {
        	iwn = Math.ceil(ch/ip);
        	ihn = ch;
        }
        img.width(iwn);
        img.height(ihn);
    })
    
})

    //skip nav - desktop click
    $('#skip a').on('click',function(){
         firstContent = $('#main-nav').next().find("a,button,input,textarea,select,ratio").first();
         firstContent.attr('tabindex','0');
         console.log('firstContent',firstContent);
         $('html,body').animate({
            scrollTop: firstContent.offset().top-30
         })
         firstContent.focus();
         return false;
      });

    //skip nav - tabbing
       $('#skip a').keypress(function(e) {
           var key1 = e.which;
           var key2 = e.keyCode;
           var key3 = e.key;
           if (key1 == 13 || key2 == 13 || key3 == "Enter") {
               $(this).trigger('click');
               return false;
           }
       });

jQuery(document).ready(function(){
    //on desktop navigation - mark li elements with sub lists
    $('#main-nav ul li ul').parent().addClass('has-child');
})

jQuery(document).ready(function(){
    //add buttons for expand/collapse mobile accordion
    
    $('#mobile-nav ul li ul').parent().addClass('has-child').children('a').append('<i class="icofont-plus"></i>');
    //accordion for mobile
    $('#mobile-nav ul li a i').on("click", function(){
        sub = $(this).parent().next("ul");
        if( sub.is(":visible")){
            sub.slideUp(300);
            if($(this).hasClass('icofont-minus')){
                $(this).removeClass("icofont-minus").addClass("icofont-plus");
            }
        } else {
            sub.slideDown(300);
            if($(this).hasClass('icofont-plus')){
                $(this).removeClass("icofont-plus").addClass("icofont-minus");
            }
        }
        return false;
    });
    
    //accordion
    $('#mobile-nav a.toggle').on('click', function(){
        level1 = $('#mobile-nav .container > ul');
        if( level1.is(":visible") ){
            level1.slideUp(300);
            $(this).removeClass('opened');
        } else {
            level1.slideDown(300);
            $(this).addClass('opened');
        }
        return false;
    })
});
jQuery(document).ready(function(){
    $('#main-nav .container > ul > li > a').each(function(ind){
       $(this).attr("data-index",ind);
    })
    $('#main-nav .container > ul > li > a').on( "keydown", function(e) {
        var key1 = e.keyCode;
        var key2 = e.key;
        var key3 = e.which;
        console.log('keypress');
        if ( key1 == 37 || key2 == "ArrowLeft" || key3 == 37) {
            ind = $(this).attr("data-index");
            $('#main-nav .container > ul > li').eq(ind-1).find('a').first().focus();
            console.log(ind);
        }
        if ( key1 == 39 || key2 == "ArrowRight" || key3 == 39 ) {
            $(this).closest('li').next().find('a').first().focus();
        }
    })
})

jQuery(document).ready(function(){
    $('#main-nav a').on( "keydown", function(e) {
        var key1 = e.keyCode;
        var key2 = e.key;
        var key3 = e.which;
        if ( key1 == 27 || key2 == "ArrowLeft" || key3 == 27) {
            $(this).closest('ul').closest('li').find('a').first().focus();
        }
    })
})

//tabbing for mobile menu
jQuery(document).ready(function(){
    $('#mobile-nav ul li a i').attr("tabindex","0");
    $('#mobile-nav ul li a i').on( "keydown", function(e) {
        var key1 = e.keyCode;
        var key2 = e.key;
        var key3 = e.which;
        if ( key1 == 13 || key2 == "Enter" || key3 == 13) {
            $(this).trigger("click");
        }
    })
})

//clone sidenav to create a collapsible version
jQuery(document).ready(function(){
    $('#left-side-nav').after('<div id="mobile-side-nav"><a href="" class="mobile-side-title"><span>Side Navigation</span><i class="icofont-rounded-down"></i></a></div>');
    $('#left-side-nav > ul').clone().appendTo("#mobile-side-nav");

    //add open/close for mobile side nav accordion
    $('#mobile-side-nav ul li ul').parent().addClass('has-child').children('a').append('<i class="icofont-rounded-down" tabindex="0"></i>');

    //accordion for mobile side nav
    $('#mobile-side-nav ul li a i').on("click", function(){
        sub = $(this).parent().next("ul");
        if( sub.is(":visible")){
            sub.slideUp(300);
            $(this).removeClass("icofont-rounded-up").addClass("icofont-rounded-down");
        } else {
            sub.slideDown(300);
            $(this).removeClass("icofont-rounded-down").addClass("icofont-rounded-up");
        }
        return false;
    });
    //accordion for mobile side nav title
    $('.mobile-side-title').on("click", function(){
        var sub = $(this).next();
        if(sub.is(":visible")){
            sub.slideUp(300);
            $(this).children('i').removeClass("icofont-rounded-up").addClass("icofont-rounded-down")
        } else {
            sub.slideDown(300);
            $(this).children('i').removeClass("icofont-rounded-down").addClass("icofont-rounded-up");
        }
        return false;
    });
    //tabbing for mobile side nav menu
    $('#mobile-side-nav ul li a i').on( "keydown", function(e) {
        var key1 = e.keyCode;
        var key2 = e.key;
        var key3 = e.which;
        if ( key1 == 13 || key2 == "Enter" || key3 == 13) {
            $(this).trigger("click");
        }
    })
})

jQuery(document).ready(function(){
    //events
    var events = [
        [
          [Name=>"Talent Show"],
          [Location=>"School Auditorium"],
          [StartDate=>"17 April, 2023"],
          [StartTime=>"1:00 PM"],
          [EndDate=>"17 April, 2023"],
          [EndTime=>"4:00 PM"],
          [Description=>"Talent Show"],
          [Price=>"0"],
          [Currency=>""],
          [Contact=>""],
          [IsAllDay=>"false"]
        ],
        [ [Name=>"Ice Cream Social"],
          [Location=>"School Garden"],
          [StartDate=>"22 April, 2023"],
          [StartTime=>"8:00 AM"],
          [EndDate=>"22 April, 2023"],
          [EndTime=>"11:00 AM"],
          [Description=>"Ice Cream Social"],
          [Price=>"0"],
          [Currency=>""],
          [Contact=>""],
          [IsAllDay=>"false"]
        ],
        [ [Name=>"Charity"],
          [Location=>"School Garden"],
          [StartDate=>"22 May, 2023"],
          [StartTime=>"1:00 PM"],
          [EndDate=>"22 May, 2023"],
          [EndTime=>"2:00 PM"],
          [Description=>"Charity"],
          [Price=>"0"],
          [Currency=>""],
          [Contact=>""],
          [IsAllDay=>"false"]
        ],
        [ [Name=>"Movie Night"],
          [Location=>"School Auditorium"],
          [StartDate=>"01 Jun, 2023"],
          [StartTime=>"6:00 PM"],
          [EndDate=>"01 Jun, 2023"],
          [EndTime=>"7:00 PM"],
          [Description=>"Movie Night"],
          [Price=>"0"],
          [Currency=>""],
          [Contact=>""],
          [IsAllDay=>"false"]
        ]
    ];




    /* CALENDAR */

    //get the date
    const date = new Date();
    const current_day = date.getDate();
    const current_month = date.getMonth();
    const current_year = date.getFullYear();
    const month_name = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    function fill_calendar(target_year,target_month){
        const first_day_of_year = {2010:5,2011:6,2012:0,2013:2,2014:3,2015:4,2016:5,2017:0,2018:1,2019:2,2020:3,2021:5,2022:6,2023:0,2024:1,2025:3,2026:4,2027:5,2028:6,2029:1,2030:2}; 
        const total_days_of = [31,28,31,30,31,30,31,31,30,31,30,31]; //jan 31, feb 28, ...
        var first_week_day_of = [first_day_of_year[target_year],0,0,0,0,0,0,0,0,0,0,0]; //empty list of first day of the year ... to be calculated
        if( (target_year-2020)%4 == 0 ) { total_days_of[1] = 29 } //leap year 
        for(i=1;i<12;i++){
            first_week_day_of[i]=(first_week_day_of[i-1]+total_days_of[i-1])%7;
        }
        var previous_month = target_month-1;
        if ( previous_month == -1 ) {
            previous_month = 11;
        }
        var table_cells = $('.calendar-table tr td');
        var table_index = 0;
        table_cells.removeClass('today');

        if( first_week_day_of[target_month] > 0 ){
            for(i=0; i < first_week_day_of[target_month]; i++){
                let counter = total_days_of[previous_month] - first_week_day_of[target_month] + i +1;
                table_cells.eq(table_index).html('<a href="#" class="calendar_day_number previous_month">'+counter+'</a>');
                table_index++;
            }
        }
        for(i=0; i < total_days_of[target_month]; i++){
            if ( target_year == current_year && target_month == current_month && i + 1 == current_day ) { table_cells.eq(table_index).addClass('today'); };
            table_cells.eq(table_index).html('<a href="#" class="calendar_day_number">'+(i+1)+'</a>');
            table_index++;
        }
        for (i=0; table_index < 42; i++ ){
            table_cells.eq(table_index).html('<a href="#" class="calendar_day_number next_month">'+(i+1)+'</a>');
            table_index++;
        }
        //update month and year on controls
        $('.calendar-month-year span').data('month',target_month).data('year',target_year).html(month_name[target_month] + " " + target_year);
    }
    function has_event(d,m,y){
        
    }
    fill_calendar(current_year,current_month);

    //Arrow month controls
    $('#cal-prev-month').on("click", function(){
        m = $('.calendar-month-year span').data('month');
        y = $('.calendar-month-year span').data('year');
        if (m == 0) { y--; m = 11 } else { m-- }
        fill_calendar(y,m);
        return false;
    })
    $('#cal-next-month').on("click", function(){
        m = $('.calendar-month-year span').data('month');
        y = $('.calendar-month-year span').data('year');
        if (m == 11) { y++; m = 0 } else { m++ }
        fill_calendar(y,m);
        return false;
    })

})

/* CONTACT FORM */
jQuery(document).ready(function(){

//on change check field content
$('#contact-form input,#contact-form textarea').not('input[type="submit"]').not('input[name="subject"]').on("change", function(){
    if ($(this).val() == ""){
        $(this).addClass("incomplete");
    } else {
        $(this).removeClass("incomplete");
    }
});

//on submit add a class for highlight incomplete fields
$('#contact-form').on("submit", function(){
    $('input,textarea').not('input[type="submit"]').not('input[name="subject"]').each(function(){
        if ($(this).val() == ""){
            $(this).addClass("incomplete");
        } else {
            $(this).removeClass("incomplete");
        }
    })

    function is_all_filled() {
        //check each field in the form (subject field must be empty - as a trick for spammers)
        var output = true;
        $('input,textarea').not('input[type="submit"]').not('input[name="subject"]').each(function(){
            if($(this).val() == ""){
                output = false;
            }
        })
        if($('input[name="subject"]').val() != ""){
            output = false;
        }
        return output;
    }

    if( is_all_filled() ){

        //if all fields are filled send the message
        console.log('success sumbit intent');
        $('#contact-form').addClass('sent');
        whatsapp_phone = "57"+"318"+"214"+"0969";
        window_location = 'https://api.whatsapp.com/send/?phone='
        + whatsapp_phone
        +'&text=%2AName%2A%3A+'
        + encodeURIComponent( $('#contact-form input[name="name"]').val() )
        + '%0D%0A%2APhone%2A%3A+'
        + encodeURIComponent( $('#contact-form input[name="phone"]').val() )
        + '%0D%0A%2AMessage%2A%3A%0D%0A'
        + encodeURIComponent( $('#contact-form textarea').val() )
        + '&type=phone_number&app_absent=0';
        console.log(window_location);
        window.location = window_location;
        return false;
        
    } else {
        console.log('fail submit intent');
        return false;
    }
    
})
});

//decorative event day cloned
jQuery(document).ready(function(){
    $('.events-item').each(function(){
        $(this).find('.event-day').first().clone().prependTo( $(this) );
    })
})
