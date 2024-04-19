window.addEventListener('DOMContentLoaded', function () {

	/* ==================== video ==================== */
	var video = this.document.querySelector('.videoPreview');
	var videoImage = document.getElementById('play-button');

	video.addEventListener('click', function () {

		if (video.classList.contains('ready')) {
			return;
		}

		video.classList.add('ready');

		video.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/BtuOJfbsKl0" frameborder="0" style="width: 100%; height: 100%; min-height: 400px;" allowfullscreen></iframe>');

		videoImage.style.display = 'none';
	});


	/* ==================== calculator ==================== */
	$(document).ready(function () {
		$('.calculate').click(function () {
			var input = $('.deposit-input');
			var result = $('.sum-result');

			// Проверка, чтобы депозит был не менее 200
			if (input.val() < 200 || isNaN(input.val())) {
				result.text("Минимальный депозит: 200€").css("color", "red");;
				return;
			}

			// Рассчет рандомного прибыльного процента
			var minPercent = 30;
			var maxPercent = 60;
			var randomPercent = Math.floor(Math.random() * (maxPercent - minPercent + 1) + minPercent);

			// Рассчет прибыли в долларах
			var deposit = parseFloat(input.val());
			var profit = deposit * (randomPercent / 100);

			$('.sum-result').text("+" + profit.toFixed(2) + "€");
		});



		/* ==================== exchange ==================== */
		// Функция для генерации случайных котировок
		function generateRandomQuote() {
			return (Math.random() * 100).toFixed(2); // Генерация случайного числа с двумя знаками после запятой
		}

		// Функция для генерации случайного процента
		function generateRandomPercent() {
			return (Math.random() * (60 - 30) + 30).toFixed(1); // Генерация случайного числа в диапазоне от 30 до 60 с одним знаком после запятой
		}

		// Обновление котировок и процентов каждые 3 секунды
		setInterval(function () {
			$('.btc-quote').text("+" + generateRandomQuote() + "€");
			$('.btc-percent').text("+" + generateRandomPercent() + "%");

			$('.nke-quote').text("+" + generateRandomQuote() + "€");
			$('.nke-percent').text("+" + generateRandomPercent() + "%");

			$('.eth-quote').text("+" + generateRandomQuote() + "€");
			$('.eth-percent').text("+" + generateRandomPercent() + "%");

			$('.amcx-quote').text("+" + generateRandomQuote() + "€");
			$('.amcx-percent').text("+" + generateRandomPercent() + "%");

			$('.snp500-quote').text("+" + generateRandomQuote() + "€");
			$('.snp500-percent').text("+" + generateRandomPercent() + "%");
		}, 3000);
	});
});

/* ---------------  Swiper partnersResults  --------------- */
var mySwiper = new Swiper('.swiper-partnersResults', {
	speed: 2000,
	autoplay: {
		delay: 2000,
	},
	spaceBetween: 40,
	loop: true,
	effect: 'coverflow',
	simulateTouch: false,
	centeredSlides: true,
	coverflowEffect: {
		rotate: 0,
		stretch: 1,
		depth: 400,
		modifier: 1,
		slideShadows: false,
	},
	breakpoints: {
		393: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 3,
		}
	}
});


/* ---------------  Swiper companiesSwiper  --------------- */
var swiper = new Swiper(".companiesSwiper", {
	grabCursor: true,
	speed: 1800,
	autoplay: {
		delay: 0,
	},
	spaceBetween: 5,
	loop: true,
	breakpoints: {
		393: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1920: {
			slidesPerView: 5,
		}
	}
});