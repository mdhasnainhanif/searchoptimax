// card hover js

      const listItems = document.querySelectorAll('#howItWorksList li');
  listItems.forEach((li) => {
    li.addEventListener('mouseenter', () => {
      listItems.forEach((el) => el.classList.remove('active')); // sab se hatao
      li.classList.add('active'); // is par lagao
    });

    li.addEventListener('mouseleave', () => {
      // Kuch nahi karna, kyunki active sirf current hovered par chahiye
    });
  });

jQuery(function() {
		
	jQuery('.progressbar').each(function(){
		var t = jQuery(this);
		var dataperc = t.attr('data-perc'),
				barperc = Math.round(dataperc*5.56);
		t.find('.bar').animate({width:barperc}, dataperc*25);
		t.find('.label').append('<div class="perc"></div>');
		
		function perc() {
			var length = t.find('.bar').css('width'),
				perc = Math.round(parseInt(length)/5.56),
				labelpos = (parseInt(length)-2);
			t.find('.label').css('left', labelpos);
			t.find('.perc').text(perc+'%');
		}
		perc();
		setInterval(perc, 0); 
	});
});

// var swiper = new Swiper(".mySwiper.right-to-left", {
//   slidesPerView: 6,
//   spaceBetween: 30,
//   freeMode: true,
//   loop: true,
//   pagination: {
// 	el: ".swiper-pagination",
// 	clickable: true,
//   },
//   autoplay: {
// 	delay: 0.9,
// 	disableOnInteraction: false,
// 	reverseDirection: true
//   },
//   breakpoints: {
// 	640: {
// 	  slidesPerView: 1,
// 	  spaceBetween: 20,
// 	},
// 	768: {
// 	  slidesPerView: 4,
// 	  spaceBetween: 40,
// 	},
// 	1024: {
// 	  slidesPerView: 6,
// 	  spaceBetween: 20,
// 	},
//   },
// });
//  var swiper = new Swiper(".mySwiper.package", {
//     slidesPerView: 1,
//     // centeredSlides: true,
//     // spaceBetween: 30,
//     freeMode: true,
//     loop: true,
//     grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

  var swiper = new Swiper(".mySwiper.packages", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",  // Next button
      prevEl: ".swiper-button-prev",  // Previous button
    },
  });

var swiper = new Swiper(".mySwiper.hero", {
  freeMode: true,
  loop: true,
  pagination: {
	el: ".swiper-pagination",
	clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: true
    },
  breakpoints: {
	320: {
	  slidesPerView: 2,
	  spaceBetween: 10,
	},
	650: {
	  slidesPerView: 2,
	  spaceBetween: 10,
	},
	768: {
	  slidesPerView: 3,
	  spaceBetween: 10,
	},
	1024: {
	  slidesPerView: 3,
	  spaceBetween: 50,
	},
  },
});



/*var swiper = new Swiper(".mySwiper.review", {
  slidesPerView: 1,
  spaceBetween: 45,
  freeMode: true,
//   centeredSlides: true,
//   loop: true,
//   autoplay: {
// 	delay: 3000,
// 	disableOnInteraction: false,
//   },
  pagination: {
	el: ".swiper-pagination-v2",
	clickable: true,
  },
  // navigation: {
	// nextEl: ".swiper-button-next.v2",
	// prevEl: ".swiper-button-prev.v2",
  // },
  // },
  // breakpoints: {
  //   640: {
  //     slidesPerView:1,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 1,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 1,
  //     spaceBetween: 50,
  //   },
  // },
});*/


var swiper = new Swiper(".mySwiper.review", {
  slidesPerView: 1,            // Show only 1 slide at a time
  spaceBetween: 45,            // Space between slides
  freeMode: false,             // Disable free mode, ensuring the slides move in a fixed way
  centeredSlides: false,       // Disables the centered slide effect
  loop: true,                  // Enable looping
  autoplay: {
    delay: 3000,               
    disableOnInteraction: false, 
  },
  pagination: {
    el: ".swiper-pagination-v2",
    clickable: true,           // Enable pagination clickability
  },
  navigation: {
    nextEl: ".swiper-button-next.v2",
    prevEl: ".swiper-button-prev.v2",
  },
  mousewheel: {
    invert: false,             // Scroll behavior for mousewheel
    forceToAxis: true,         // Ensure scrolling happens on the correct axis
  },
});


var swiper = new Swiper(".mySwiper.blogs", {
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  loop: true,
  autoplay: {
	delay: 3000,
	disableOnInteraction: false,
  },
  centeredSlides: true,
  pagination: {
	el: ".swiper-pagination.v5",
	clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.v3",
    prevEl: ".swiper-button-prev.v3",
  },
  breakpoints: {
	640: {
	  slidesPerView: 1,
	  spaceBetween: 20,
	},
	768: {
	  slidesPerView: 3,
	  spaceBetween: 20,
	},
	1024: {
	  slidesPerView: 3,
	  spaceBetween: 20,
	},
	1281: {
	  slidesPerView: 4,
	  spaceBetween: 20,
	}, 
  },
});



document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper(".mySwiper.left-to-right", {
  loop: true,
  speed: 5000, // Smooth slow continuous motion
  slidesPerView: "auto", // Allows slide width to be based on content
  spaceBetween: 10,
  autoplay: {
    delay: 0, // No delay = continuous
    disableOnInteraction: false,
  },
  allowTouchMove: false, // Optional: disables dragging
  grabCursor: false,
  freeMode: false, // ❌ Turned off to prevent jhatkas
  centeredSlides: false, // ❌ Avoids jumpy centering behavior

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1281: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

});


 document.addEventListener('DOMContentLoaded', function() {
  var swiperRightToLeft = new Swiper(".mySwiper.right-to-left", {
	// direction: 'horizontal-reversed', // Set direction to right-to-left
	// rtl: true, // Set to true for right-to-left movement
	spaceBetween: 10,
	freeMode: true,
	speed: 3000,
	centeredSlides: true,
	loop: true,
	autoplay: {
	  delay: 0.1,
	  disableOnInteraction: false,
	  // reverseDirection: true
	},
	breakpoints: {
	  640: {
		slidesPerView: 2,
		spaceBetween: 10,
	  },
	  768: {
		slidesPerView: 4,
		spaceBetween: 10,
	  },
	  1024: {
		slidesPerView: 5,
		spaceBetween: 10,
	  },
    1281: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
	},
  });
});

 


jQuery(document).ready(function(){
	  jQuery('.img-scroll').mousemove(function(evt){
		  jQuery('.img-box').each(function(){
		  jQuery(this).css("transform",'translateX('+-evt.pageX/20+'px'+')')
		  });
	  });


	  jQuery('ul.faq-ul li.active div').slideDown();
	  jQuery('ul.faq-ul li h4').click(function() {
		  jQuery('ul.faq-ul li').removeClass('active');
		  jQuery(this).parent('li').addClass('active');
		  jQuery('ul.faq-ul li div').slideUp();
		  jQuery(this).parent('li').find('div').slideDown();
	  });
	  
	  jQuery('.faq-ul>li').click(function(){
		  jQuery(this).addClass('active');
		  jQuery(this).siblings().removeClass('active');
	  });

	  jQuery('[data-targetit]').on('click', function(e) {
		  jQuery(this).addClass('current');
		  jQuery(this).siblings().removeClass('current');
		  var target = jQuery(this).data('targetit');
		  jQuery('.' + target).siblings('[class^="box-"]').hide();
		  jQuery('.' + target).fadeIn();
	  });

	  jQuery("[data-targetit]").on("click", function (e) {
		  jQuery(".test").slick("setPosition");
	  });
  });


jQuery(".tab-list li").on("click", function() {
var tabId = ".tab-list li#" + jQuery(this).attr("id");
var tabDivId = ".tabs-content#content-" + jQuery(this).attr("id");

if (!jQuery(this).hasClass("active")) {
jQuery(".tab-list li").removeClass("active");
jQuery(this).addClass("active");

jQuery(".tabs-content").removeClass("active");
jQuery(tabDivId).addClass("active");
}
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
counter.innerText = "0";
const updateCounter = () => {
const target = +counter.getAttribute("data-target");
const count = +counter.innerText;
const increment = target / 200;
if (count < target) {
  counter.innerText = `${Math.ceil(count + increment)}`;
  setTimeout(updateCounter, 1);
} else counter.innerText = target;
};
updateCounter();
});
(function ($) {
	jQuery(function () {


		jQuery('.js-ag-faq_title').on('click', function() {
		jQuery('.js-ag-faq_title').not(this).next('.js-ag-faq_text').slideUp();
		jQuery(this).next('.js-ag-faq_text').slideToggle();
		});


	});
	})(jQuery);


    {
        
(function($){
    $.fn.extend({
        mAccord: function(options) {
            var defaults = {
                // You can add default options here if needed
            };
            var options = $.extend(defaults, options);

            // Get all accordions on page
            var allTriggers = $(".accordion h3");
            var allContents = $(".accordion-content");
            
            // Initialize first item as active
            // $(".accordion-container:first .accordion:first h3").addClass("active");
            // $(".accordion-container:first .accordion:first .accordion-content").slideDown(500);
            
            allTriggers.click(function(e) {
                e.stopPropagation();
                var currentTrigger = $(this);
                var currentContent = currentTrigger.next();
                
                // If clicking the already open item, close it
                if(currentTrigger.hasClass('active')) {
                    currentTrigger.removeClass('active');
                    currentContent.stop().slideUp(500);
                    return;
                }
                
                // Close all other accordion items (across all containers)
                allTriggers.not(currentTrigger).removeClass('active');
                allContents.not(currentContent).stop().slideUp(500);
                
                // Open the clicked item
                currentTrigger.addClass('active');
                currentContent.stop().slideDown(500);
            });
            
            return this;
        }
    });
})(jQuery);

(function($) { 
  jQuery('.accordion-container').mAccord();
})(jQuery);
}

var swiper = new Swiper(".mySwiper.case-study-slider", {
  // Default configuration for desktop
  spaceBetween: 30,          // Space between slides
  grabCursor: true,          // Enable grab cursor
  pagination: {
    el: ".swiper-pagination",
    clickable: true,         // Make pagination clickable
  },
  breakpoints: {
    // When the viewport width is 1200px or less (Large desktop screens)
    1200: {
      slidesPerView: 4,      // Show 4 items on large desktop
      spaceBetween: 30,      // Space between slides
    },
    // When the viewport width is 1024px or less (iPad Pro landscape and small desktops)
    1024: {
      slidesPerView: 3,      // Show 3 items on iPad Pro (landscape)
      spaceBetween: 25,      // Space between slides
    },
    // When the viewport width is 768px or less (iPad portrait and small tablets)
    768: {
      slidesPerView: 2,      // Show 2 items on tablets (iPad)
      spaceBetween: 20,      // Space between slides
    },
    // When the viewport width is 576px or less (Mobile screens)
    576: {
      slidesPerView: 1,      // Show 1 item on mobile
      spaceBetween: 10,      // Space between slides
    },
  },
});

  var swiper = new Swiper(".mySwiper.tool-slider", {
    slidesPerView: 4,
    // centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  
   
    jQuery('.tab-menus a').hover(function (e) {
	  e.preventDefault()
	  jQuery(this).tab('show')
	}); 
	 
 // plan
 jQuery(document).ready(function(){
    jQuery('.plan-col-inner-1').hover(function(){
        // jQuery('#plan-p p').text("We’ll invite you to sit back and watch the revenue roll in as your website starts welcoming an influx of ideal prospects.");
        // jQuery('#plan-p h5').text("Searchibilty");
       
        jQuery('.plan-col-inner-2').removeClass('transform');
        jQuery('.plan-col-inner-3').removeClass('transform');
        jQuery('.plan-col-inner-4').removeClass('transform');
        // jQuery('.plan-col-inner-5').removeClass('transform');
        jQuery('.plan-col-inner-1').addClass('transform');
    });
    });



    jQuery(document).ready(function(){
    jQuery('.plan-col-inner-2').hover(function(){
        // jQuery('#plan-p p').text("Once we have all the necessary information, our team of experienced editors will start working on your Wikipedia page. They'll use modern tools to improve the text and format it according to Wikipedia's standards.");
        // jQuery('#plan-p h5').text("Wikipedia Sandbox");
       
        // jQuery('.plan-col-inner-5').removeClass('transform');
        jQuery('.plan-col-inner-4').removeClass('transform');
        jQuery('.plan-col-inner-3').removeClass('transform');
        jQuery('.plan-col-inner-1').removeClass('transform');
        jQuery('.plan-col-inner-2').addClass('transform');
    });
    });



    jQuery(document).ready(function(){
    jQuery('.plan-col-inner-3').hover(function(){
        // jQuery('#plan-p p').text("After the initial editing process is complete, the editors will review the draft and send it back to you for final approval. Once the editing phase is done, we'll format the page to look exactly like you want it to.");
        // jQuery('#plan-p h5').text("Client Approval");
        
        // jQuery('.plan-col-inner-5').removeClass('transform');
        jQuery('.plan-col-inner-4').removeClass('transform');
        jQuery('.plan-col-inner-2').removeClass('transform');
        jQuery('.plan-col-inner-1').removeClass('transform');
        jQuery('.plan-col-inner-3').addClass('transform');
    });
    });



    jQuery(document).ready(function(){
    jQuery('.plan-col-inner-4').hover(function(){
        // jQuery('#plan-p p').text("The last step is to publish the page on Wikipedia. You can either do this yourself or leave it to us. When your page is live, it's time to promote it on social media and other platforms.");
        // jQuery('#plan-p h5').text("Page Publishing");
        // jQuery('.plan-col-inner-5').removeClass('transform'); 
        jQuery('.plan-col-inner-2').removeClass('transform');
        jQuery('.plan-col-inner-3').removeClass('transform');
        jQuery('.plan-col-inner-1').removeClass('transform');
        jQuery('.plan-col-inner-4').addClass('transform');
    });
    });


    jQuery(document).ready(function(){
    jQuery('.plan-col-inner-5').hover(function(){
        // jQuery('#plan-p p').text("After the initial editing process is complete, the editors will review the draft and send it back to you for final approval. Once the editing phase is done, we'll format the page to look exactly like you want it to.");
        // jQuery('#plan-p h5').text("Editing & Monitoring");
        jQuery('.plan-col-inner-2').removeClass('transform');
        jQuery('.plan-col-inner-4').removeClass('transform');
        jQuery('.plan-col-inner-3').removeClass('transform');
        jQuery('.plan-col-inner-1').removeClass('transform');
        jQuery('.plan-col-inner-5').addClass('transform');
    });
    });

    // plan
    jQuery(document).ready(function(){
    jQuery('.plan-col-inner-1').hover(function(){
        // jQuery('#plan-p p').text("Before starting the actual process, we will conduct thorough research on your brand's history and create a plan for the content. This way, we can ensure that everything is consistent and that nothing goes out of date.");
        // jQuery('#plan-p h5').text("Notability");
        jQuery('.plan-col-inner-2 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-3 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-4 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-5 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-1 .head h6').addClass('transform');
    });
    });



    jQuery(document).ready(function(){
    jQuery('.plan-col-inner-2').hover(function(){
        // jQuery('#plan-p p').text("Once we have all the necessary information, our team of experienced editors will start working on your Wikipedia page. They'll use modern tools to improve the text and format it according to Wikipedia's standards.");
        // jQuery('#plan-p h5').text("Wikipedia Sandbox");
        jQuery('.plan-col-inner-5 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-4 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-3 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-1 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-2 .head h6').addClass('transform');
    });
    });



    jQuery(document).ready(function(){
    jQuery('.plan-col-inner-3').hover(function(){
        // jQuery('#plan-p p').text("After the initial editing process is complete, the editors will review the draft and send it back to you for final approval. Once the editing phase is done, we'll format the page to look exactly like you want it to.");
        // jQuery('#plan-p h5').text("Client Approval");
        jQuery('.plan-col-inner-5 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-4 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-2 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-1 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-3 .head h6').addClass('transform');
    });
    });



    jQuery(document).ready(function(){
    jQuery('.plan-col-inner-4').hover(function(){
        // jQuery('#plan-p p').text("The last step is to publish the page on Wikipedia. You can either do this yourself or leave it to us. When your page is live, it's time to promote it on social media and other platforms.");
        // jQuery('#plan-p h5').text("Page Publishing");
        jQuery('.plan-col-inner-5 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-2 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-3 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-1 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-4 .head h6').addClass('transform');
    });
    });


    jQuery(document).ready(function(){
    jQuery('.plan-col-inner-5').hover(function(){
        // jQuery('#plan-p p').text("After the initial editing process is complete, the editors will review the draft and send it back to you for final approval. Once the editing phase is done, we'll format the page to look exactly like you want it to.");
        // jQuery('#plan-p h5').text("Editing & Monitoring");
        jQuery('.plan-col-inner-2 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-4 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-3 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-1 .head h6').removeClass('transform');
        jQuery('.plan-col-inner-5 .head h6').addClass('transform');
    });
    });
    
     

  
    //   new Typed('#typed',{
    //   strings : ['Grow Revenue and Brand Recognition','Generate High-Quality Leads','Boost Engagement and Interactions','Optimize Your Website’s Brand Identity','Expand Target Customer Base'],
    //   typeSpeed: 70,
    //   backSpeed: 30,
    //   backDelay: 2000,
    //   startDelay: 1000,
    //   loop : true
    // });
    
    
    //     new Typed('#typednew',{
    //   strings : ['Grow Revenue and Brand Recognition','Generate High-Quality Leads','Boost Engagement and Interactions','Optimize Your Website’s Brand Identity','Expand Target Customer Base'],
    //   typeSpeed: 70,
    //   backSpeed: 30,
    //   backDelay: 2000,
    //   startDelay: 1000,
    //   loop : true
    // });
    
    // For homepage (#typed)
if (document.querySelector('#typed')) {
  new Typed('#typed', {
    strings: [
      'Grow Revenue and Brand Recognition',
      'Generate High-Quality Leads',
      'Boost Engagement and Interactions',
      'Optimize Your Website’s Brand Identity',
      'Expand Target Customer Base'
    ],
    typeSpeed: 70,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 1000,
    loop: true
  });
}

// For inner page (#typednew)
if (document.querySelector('#typednew')) {
  new Typed('#typednew', {
    strings: [
      'Audit Tool'
    ],
    typeSpeed: 70,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 1000,
    loop: true
  });
}

    
    
    
      // hide all tabs first
 jQuery('.tab-content-v9').hide();
 //show the first tab content
 jQuery('#tab-1').show();

 jQuery('#select-boxes').change(function () {
   dropdown = jQuery('#select-boxes').val();
   //first hide all tabs again when a new option is selected
   jQuery('.tab-content-v9').hide();
   //then show the tab content of whatever option value was selected
   jQuery('#' + "tab-" + dropdown).show();                                    
 });


 jQuery('.tab-contents-v91').hide();
 //show the first tab content
 jQuery('#tabs-3').show();

 jQuery('#select-boxes1').change(function () {
   dropdown = jQuery('#select-boxes1').val();
   //first hide all tabs again when a new option is selected
   jQuery('.tab-contents-v91').hide();
   //then show the tab content of whatever option value was selected
   jQuery('#' + "tabs-" + dropdown).show();                                    
 });
 
 jQuery('.tab-contents-v92').hide();
 //show the first tab content
 jQuery('#tabs-5').show();

 jQuery('#select-boxes2').change(function () {
   dropdown = jQuery('#select-boxes2').val();
   //first hide all tabs again when a new option is selected
   jQuery('.tab-contents-v92').hide();
   //then show the tab content of whatever option value was selected
   jQuery('#' + "tabs-" + dropdown).show();                                    
 });
 jQuery('.tab-contents-v93').hide();
 //show the first tab content
 jQuery('#tabs-7').show();

 jQuery('#select-boxes3').change(function () {
   dropdown = jQuery('#select-boxes3').val();
   //first hide all tabs again when a new option is selected
   jQuery('.tab-contents-v93').hide();
   //then show the tab content of whatever option value was selected
   jQuery('#' + "tabs-" + dropdown).show();                                    
 });
 jQuery('.tab-contents-v94').hide();

 //show the first tab content
 jQuery('#tabs-9').show();

 jQuery('#select-boxes4').change(function () {
   dropdown = jQuery('#select-boxes4').val();
   //first hide all tabs again when a new option is selected
   jQuery('.tab-contents-v94').hide();
   //then show the tab content of whatever option value was selected
   jQuery('#' + "tabs-" + dropdown).show();                                    
 });

 var data = anychart.data.set([
    ['Organic', 62],
    ['Direct', 8],
    ['Referrals', 30]
  ]);
    var chart = anychart.pie(data)
    // set the chart radius making a donut chart
    chart.innerRadius('30%');
  var palette = anychart.palettes.distinctColors();
  
// set the colors according to the brands
palette.items([
  { color: '#00B59C' },
  { color: '#F2F2F2' },
  { color: '#FF8524' }
]);
chart.palette(palette);
  
    chart.container('containers');
    chart.draw();


    
jQuery(document).ready(function(){
	progress_bar();
});

var data = anychart.data.set([
  ['Organic', 72],
  ['Direct', 16],
  ['Referrals', 50]
]);
  var chart = anychart.pie(data)
  // set the chart radius making a donut chart
  chart.innerRadius('30%');
var palette = anychart.palettes.distinctColors();

// set the colors according to the brands
palette.items([
{ color: '#00B59C' },
{ color: '#F2F2F2' },
{ color: '#FF8524' }
]);
chart.palette(palette);

  chart.container('containerss');
  chart.draw();


  
jQuery(document).ready(function(){
progress_bar();
});

jQuery(document).ready(function(){
	progress_bar();
});

var data = anychart.data.set([
  ['Organic', 72],
  ['Direct', 16],
  ['Referrals', 50]
]);
  var chart = anychart.pie(data)
  // set the chart radius making a donut chart
  chart.innerRadius('30%');
var palette = anychart.palettes.distinctColors();

// set the colors according to the brands
palette.items([
{ color: '#00B59C' },
{ color: '#F2F2F2' },
{ color: '#FF8524' }
]);
chart.palette(palette);

  chart.container('containers1');
  chart.draw();


  
jQuery(document).ready(function(){
progress_bar();
});
jQuery(document).ready(function(){
	progress_bar();
});

var data = anychart.data.set([
  ['Organic', 72],
  ['Direct', 16],
  ['Referrals', 50]
]);
  var chart = anychart.pie(data)
  // set the chart radius making a donut chart
  chart.innerRadius('30%');
var palette = anychart.palettes.distinctColors();

// set the colors according to the brands
palette.items([
{ color: '#00B59C' },
{ color: '#F2F2F2' },
{ color: '#FF8524' }
]);
chart.palette(palette);

  chart.container('containers2');
  chart.draw();

  jQuery(document).ready(function(){
    progress_bar();
    });
    jQuery(document).ready(function(){
      progress_bar();
    });
    
    var data = anychart.data.set([
      ['Organic', 72],
      ['Direct', 16],
      ['Referrals', 50]
    ]);
      var chart = anychart.pie(data)
      // set the chart radius making a donut chart
      chart.innerRadius('30%');
    var palette = anychart.palettes.distinctColors();
    
    // set the colors according to the brands
    palette.items([
    { color: '#00B59C' },
    { color: '#F2F2F2' },
    { color: '#FF8524' }
    ]);
    chart.palette(palette);
    
      chart.container('containers3');
      chart.draw();



      jQuery(document).ready(function(){
        progress_bar();
        });
        jQuery(document).ready(function(){
          progress_bar();
        });
        
        var data = anychart.data.set([
          ['Organic', 72],
          ['Direct', 16],
          ['Referrals', 50]
        ]);
          var chart = anychart.pie(data)
          // set the chart radius making a donut chart
          chart.innerRadius('30%');
        var palette = anychart.palettes.distinctColors();
        
        // set the colors according to the brands
        palette.items([
        { color: '#00B59C' },
        { color: '#F2F2F2' },
        { color: '#FF8524' }
        ]);
        chart.palette(palette);
        
          chart.container('containers4');
          chart.draw();

          jQuery(document).ready(function(){
            progress_bar();
            });
            jQuery(document).ready(function(){
              progress_bar();
            });
            
            var data = anychart.data.set([
              ['Organic', 72],
              ['Direct', 16],
              ['Referrals', 50]
            ]);
              var chart = anychart.pie(data)
              // set the chart radius making a donut chart
              chart.innerRadius('30%');
            var palette = anychart.palettes.distinctColors();
            
            // set the colors according to the brands
            palette.items([
            { color: '#00B59C' },
            { color: '#F2F2F2' },
            { color: '#FF8524' }
            ]);
            chart.palette(palette);
            
              chart.container('containers5');
              chart.draw();



              jQuery(document).ready(function(){
                progress_bar();
                });
                jQuery(document).ready(function(){
                  progress_bar();
                });
                
                var data = anychart.data.set([
                  ['Organic', 72],
                  ['Direct', 16],
                  ['Referrals', 50]
                ]);
                  var chart = anychart.pie(data)
                  // set the chart radius making a donut chart
                  chart.innerRadius('30%');
                var palette = anychart.palettes.distinctColors();
                
                // set the colors according to the brands
                palette.items([
                { color: '#00B59C' },
                { color: '#F2F2F2' },
                { color: '#FF8524' }
                ]);
                chart.palette(palette);
                
                  chart.container('containers6');
                  chart.draw();             


                  jQuery(document).ready(function(){
                    progress_bar();
                    });
                    jQuery(document).ready(function(){
                      progress_bar();
                    });
                    
                    var data = anychart.data.set([
                      ['Organic', 72],
                      ['Direct', 16],
                      ['Referrals', 50]
                    ]);
                      var chart = anychart.pie(data)
                      // set the chart radius making a donut chart
                      chart.innerRadius('30%');
                    var palette = anychart.palettes.distinctColors();
                    
                    // set the colors according to the brands
                    palette.items([
                    { color: '#00B59C' },
                    { color: '#F2F2F2' },
                    { color: '#FF8524' }
                    ]);
                    chart.palette(palette);
                    
                      chart.container('containers7');
                      chart.draw();


                      jQuery(document).ready(function(){
                        progress_bar();
                        });
                        jQuery(document).ready(function(){
                          progress_bar();
                        });
                        
                        var data = anychart.data.set([
                          ['Organic', 72],
                          ['Direct', 16],
                          ['Referrals', 50]
                        ]);
                          var chart = anychart.pie(data)
                          // set the chart radius making a donut chart
                          chart.innerRadius('30%');
                        var palette = anychart.palettes.distinctColors();
                        
                        // set the colors according to the brands
                        palette.items([
                        { color: '#00B59C' },
                        { color: '#F2F2F2' },
                        { color: '#FF8524' }
                        ]);
                        chart.palette(palette);
                        
                          chart.container('containers8');
                          chart.draw();


                          jQuery(document).ready(function(){
                            progress_bar();
                            });
                            jQuery(document).ready(function(){
                              progress_bar();
                            });
                            
                            var data = anychart.data.set([
                              ['Organic', 72],
                              ['Direct', 16],
                              ['Referrals', 50]
                            ]);
                              var chart = anychart.pie(data)
                              // set the chart radius making a donut chart
                              chart.innerRadius('30%');
                            var palette = anychart.palettes.distinctColors();
                            
                            // set the colors according to the brands
                            palette.items([
                            { color: '#00B59C' },
                            { color: '#F2F2F2' },
                            { color: '#FF8524' }
                            ]);
                            chart.palette(palette);
                            
                              chart.container('containers9');
                              chart.draw();




                              jQuery(document).ready(function(){
                                progress_bar();
                                });
                                jQuery(document).ready(function(){
                                  progress_bar();
                                });
                                
                                var data = anychart.data.set([
                                  ['Organic', 72],
                                  ['Direct', 16],
                                  ['Referrals', 50]
                                ]);
                                  var chart = anychart.pie(data)
                                  // set the chart radius making a donut chart
                                  chart.innerRadius('30%');
                                var palette = anychart.palettes.distinctColors();
                                
                                // set the colors according to the brands
                                palette.items([
                                { color: '#00B59C' },
                                { color: '#F2F2F2' },
                                { color: '#FF8524' }
                                ]);
                                chart.palette(palette);
                                
                                  chart.container('containers0');
                                  chart.draw();                           

  
jQuery(document).ready(function(){
progress_bar();
});

function progress_bar() {
	var speed = 30;
	var items = jQuery('.progress_bar').find('.progress_bar_item');
	
    items.each(function() {
        var item = jQuery(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = jQuery(this);
		
        var count = setInterval(function(){
            if(i <= itemValue) {
                var iStr = i.toString();
                item.css({
                    'width': iStr+'%'
                });
                value.find('.item_value').html(iStr +'%');
            }
            else {
                clearInterval(count);
            }
            i++;
        },speed);
    });
}

// custom script
// function to initialize/unslick slider based on window width
// $(document).ready(function () {
//   // 1. Initialize slider only if element exists
//   if ($('.how-it-works-slider').length > 0) {
//     initHowItWorksSlider();
//     $(window).on('resize', function () {
//       initHowItWorksSlider();
//     });
//   }

//   // 2. Initialize Typed.js only if element exists
//   if ($('#typed-element').length > 0) {
//     var typed = new Typed('#typed-element', {
//       strings: ["Your text 1", "Your text 2"],
//       typeSpeed: 50,
//       backSpeed: 25,
//       loop: true
//     });
//   }
// });
// $(document).ready(function(){
//   $('.how-it-works-slider').slick({
//      dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   centerMode: true,
//   variableWidth: true
//   });
// });
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.seo-process-slider');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    const slides = document.querySelectorAll('.seo-process-slider li');
    const slideCount = slides.length;
    let currentIndex = 0;
    
    if (slider && slides.length > 0) {
        // Only initialize slider functionality on mobile
        function checkScreenSize() {
            if (window.innerWidth <= 992) {
                // Mobile view - enable slider
                updateSliderPosition();
                
                prevBtn.addEventListener('click', function() {
                    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
                    updateSliderPosition();
                });
                
                nextBtn.addEventListener('click', function() {
                    currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
                    updateSliderPosition();
                });
            } else {
                // Desktop view - reset any slider transformations
                slider.style.transform = 'translateX(0)';
            }
        }
        
        function updateSliderPosition() {
            const slideWidth = slides[0].offsetWidth + parseInt(window.getComputedStyle(slides[0]).marginRight);
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
        
        // Initial check
        checkScreenSize();
        
        // Check on resize
        window.addEventListener('resize', checkScreenSize);
    }
});


