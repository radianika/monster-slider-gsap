(function () {
	// init 
	raSlider();




	////////////////////////////////////////
	function raSlider() {
		var slider = document.querySelector('.ra-slider');
		if (!slider) {return};
		
		// variables
		let slides = slider.querySelectorAll('.ra-slider__item');
		let currentSlide = slider.querySelector('.active');
		let currentSlideIndex = getNodeIndex(currentSlide);
		let tudaBtn = slider.querySelector('.js-tuda');
		let sudaBtn = slider.querySelector('.js-suda');
		let tl = new TimelineMax();
		let currentHeader = currentSlide.querySelector('.ra-slider__header');
		let currentImg = currentSlide.querySelector('.ra-slider__box--right');

		// classes
		let headerClass = '.ra-slider__header';
		let subClass = '.ra-slider__sub';
		let titleClass = '.ra-slider__title';
		let imgBoxClass = '.ra-slider__box--right';

		// events
		tudaBtn.addEventListener('click', goToPreviousSlide);
		sudaBtn.addEventListener('click', goToNextSlide);


		// functions
		function goToPreviousSlide() {
			let currentHeader = currentSlide.querySelector(headerClass);
			let currentImg = currentSlide.querySelector(imgBoxClass);
			let previuosSlide;
			let previousSlideIndex;
			if (currentSlideIndex === 0) {
				previousSlideIndex = slides.length - 1;
			} else {
				previousSlideIndex = currentSlideIndex - 1;
			};
			previuosSlide = slides[previousSlideIndex];
			let previuosImg = previuosSlide.querySelector(imgBoxClass);
			let previousHeader = previuosSlide.querySelector(headerClass);
			
			tl
				.to(currentImg, 0.3, {x: '150%'})
				.to(currentHeader, 0.3, {x: '350%'})
				.to(currentSlide, 0.1, {css: {className: '-=active'}}, "-=0.1")
				.to(currentHeader, 0.1, {x: '0%'}, "-=0.1")
				.to(currentImg, 0.1, {x: '0%',})
				.to(previuosSlide, 0.1, {css: {className: '+=active'}}, "-=0.1")
				.from(previuosImg, 0.3, {y: '-200%',})
				.from(previousHeader, 0.3, {y: "-300%"})
			currentSlideIndex = previousSlideIndex;
			currentSlide = slides[currentSlideIndex];
		}

		function goToNextSlide() {
			let currentHeader = currentSlide.querySelector(headerClass);
			let currentImg = currentSlide.querySelector(imgBoxClass);
			let nextSlide;
			let nextSlideIndex;
			if (currentSlideIndex === slides.length - 1) {
				nextSlideIndex = 0;
			} else {
				nextSlideIndex = currentSlideIndex + 1;
			};
			nextSlide = slides[nextSlideIndex];
			let nextImg = nextSlide.querySelector(imgBoxClass);
			let nextHeader = nextSlide.querySelector(headerClass);
			
			tl
				.to(currentImg, 0.3, {x: '-150%'})
				.to(currentHeader, 0.3, {x: '-150%'})
				.to(currentSlide, 0.1, {css: {className: '-=active'}}, "-=0.1")
				.to(currentHeader, 0.1, {x: '0%'}, "-=0.1")
				.to(currentImg, 0.1, {	x: '0%'}, "-=0.1")
				.to(nextSlide, 0.1, {css: {className: '+=active'}}, "-=0.1")
				.from(nextImg, 0.3, {y: '200%'})
				.from(nextHeader, 0.3, {y: "300%"})
			currentSlideIndex = nextSlideIndex;
			currentSlide = slides[currentSlideIndex];
		}
		//helpers
		function getNodeIndex(el) {
			return Array.prototype.indexOf.call(el.parentNode.children, el);
		}
	}
})();
