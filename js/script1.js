$(document).ready(function () {
  $(".videoSlider").bxSlider({
    video: true,
    controls: true,
    nextText: '😍<i class="fa-solid fa-arrow-right"></i>',
    prevText: '<i class="fa-solid fa-arrow-left"></i>😍',
    //   auto:true,
    onSliderLoad: function (currentIndex) {
      console.log(currentIndex);
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
});
