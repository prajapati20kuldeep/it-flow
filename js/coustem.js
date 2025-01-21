$(".burger_menu").click(function () {
	$(".nav_links").addClass("main");
});
$(".mobile_trigger").click(function () {
	$(".nav_links").removeClass("main");
});

$(function () {
	//the shrinkHeader variable is where you tell the scroll effect to start.
	var shrinkHeader = 70;
	$(window).scroll(function () {
		var scroll = getCurrentScroll();
		if (scroll >= shrinkHeader) {
			$(".page_header").addClass("smaller");
		} else {
			$(".page_header").removeClass("smaller");
		}
	});
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
});

function startCounting(elementId, start = 1, end = 1000, interval = 1000) {
	let current = start;

	const counterElement = document.getElementById(elementId);

	const intervalId = setInterval(() => {
		counterElement.textContent = current + " +";
		if (current >= end) {
			clearInterval(intervalId);
		} else {
			current++;
		}
	}, interval);
}

// Call the function for the four counters
startCounting("counter1", 1, 100, 50);
startCounting("counter2", 1, 200, 50);
startCounting("counter3", 1, 200, 50);
startCounting("counter4", 1, 100, 50);

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
	},



	breakpoints: {
		
		768: {
			slidesPerView: 1,
			loop: true,
			autoplay:true,
			
		},
		1024: {
			slidesPerView: 4,
			loop: true,
			autoplay:true,
		},
	},
});