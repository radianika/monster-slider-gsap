(function () {
	// init 
	raSlider();




	////
	function raSlider() {
		//	global variables


		var slider = document.querySelector('.ra-slider');
		if (!slider) return;
		let slides = slider.querySelectorAll('.ra-slider__item');
		let currentSlide = slider.querySelector('.active');
		let currentSlideIndex = getNodeIndex(currentSlide);
		var tudaBtn = slider.querySelector('.js-tuda');
		var sudaBtn = slider.querySelector('.js-suda');

		//classes
		let headerClass = '.ra-slider__header';
		let subClass = '.ra-slider__sub';
		let titleClass = '.ra-slider__title';
		let imgBoxClass = '.ra-slider__box--right';



		



		let tl = new TimelineMax({
			onComplete: sliderChange
		})

		function sliderChange() {
			console.log("tuda or suda");
		}



		//events
		tudaBtn.addEventListener('click', goToPreviousSlide);
		sudaBtn.addEventListener('click', goToNextSlide);





		function goToPreviousSlide() {
			let previuosSlide;
			let previousSlideIndex;
			if (currentSlideIndex === 0) {
				previousSlideIndex = slides.length - 1;
			} else {
				previousSlideIndex = currentSlideIndex - 1;
			}
			previuosSlide = slides[previousSlideIndex];

			console.log(previuosSlide);
			tl

				.to(currentSlide.querySelector(imgBoxClass), 0.3, {
					x: '150%',
				})
				.to(currentSlide.querySelector(headerClass), 0.3, {
					x: '350%',
				})
				.to(currentSlide, 0.1, {
					css: {
						className: '-=active'
					}
				})
				.to(currentSlide.querySelector(headerClass), 0.1, {
					x: '0%',
				})
				.to(currentSlide.querySelector(imgBoxClass), 0.1, {
					x: '0%',
				})
				.to(previuosSlide, 0.1, {
					css: {
						className: '+=active'
					}
				})
				.from(previuosSlide.querySelector(imgBoxClass), 0.3, {
					y: '-200%',
				})
				.from(previuosSlide.querySelector(headerClass), 0.3, {
					y: "-300%"
				})
			currentSlideIndex = previousSlideIndex;
			currentSlide = slides[currentSlideIndex];
		}

		function goToNextSlide() {

			let nextSlide;
			let nextSlideIndex;
			if (currentSlideIndex === slides.length - 1) {
				nextSlideIndex = 0;
			} else {
				nextSlideIndex = currentSlideIndex + 1;
			}
			nextSlide = slides[nextSlideIndex];
			tl

				.to(currentSlide.querySelector(imgBoxClass), 0.3, {
					x: '-150%',
				})
				.to(currentSlide.querySelector(headerClass), 0.3, {
					x: '-150%',
				})
				.to(currentSlide, 0.1, {
					css: {
						className: '-=active'
					}
				})
				.to(currentSlide.querySelector(headerClass), 0.1, {
					x: '0%',
				})
				.to(currentSlide.querySelector(imgBoxClass), 0.1, {
					x: '0%',
				})
				.to(nextSlide, 0.1, {
					css: {
						className: '+=active'
					}
				})
				.from(nextSlide.querySelector(imgBoxClass), 0.3, {
					y: '200%',
				})
				.from(nextSlide.querySelector(headerClass), 0.3, {
					y: "300%"
				})
			currentSlideIndex = nextSlideIndex;
			currentSlide = slides[currentSlideIndex];


		}
		//helpers
		function getNodeIndex(el) {
			return Array.prototype.indexOf.call(el.parentNode.children, el);
		}

	}
})();
