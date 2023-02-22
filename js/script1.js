$(document).ready(function () {
	var youtubeSlide = $(".videoSlider").bxSlider({
		video: true,
		//기본 슬라이드 옵션 끄기
		controls: false,
		// auto:true,
		onSliderLoad: function (currentIndex) {
			$(".videoSlider div")
				.eq(currentIndex + 1)
				.find("video")
				.get(0)
				.play();
		},
		// onSlideAfter: function ($slideElement, oldIndex, newIndex) {
		//   $slideElement.siblings().find("video").get(0).pause();
		//   $slideElement.find("video").get(0).play();
		// },
	});

	//새설정적용
	$(".youtube_prev").click(function (e) {
    e.preventDefault();
    youtubeSlide.goToPrevSlide();
  });
	$(".youtube_next").click(function (e) {
    e.preventDefault();
    youtubeSlide.goToNextSlide();
  });
});
