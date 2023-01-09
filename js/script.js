$(function () {
  document.querySelector("#layer button").addEventListener("click", function () {
    document.querySelector("#layer").style.display = "none";
  });

  const visual = $(".main_slide_cover>li");
  const button = $("#buttonList>li");
  const button2 = $(".map>img")
  let current = 0;
  let btnIdx = 0;
  let id;
  const speed = 3000;

  button.click(function () {
    btnIdx = $(this).index();
    button.removeClass("on");
    $(this).addClass("on");
    move(btnIdx);
  });

  timer();
  function timer() {
    id = setInterval(function () {
      let next = current + 1;
      if (next == visual.length) {
        next = 0;
      }
      button.eq(next).trigger("click");
    }, speed);
  }

  function move() {
    if (current == btnIdx) return;
    let cu = visual.eq(current);
    let ne = visual.eq(btnIdx);
    cu.css("left", "0").stop().animate({ left: "-100%" });
    ne.css("left", "100%").stop().animate({ left: "0%" });
    current = btnIdx;
  }

  clearAuto();
  function clearAuto() {
    $("main_slide_cover, #buttonList, .controls").mouseenter(function () {
      clearInterval(id);
    });
    $("main_slide_cover, #buttonList, .controls").mouseleave(function () {
      timer();
    });
  }

  controls();
  function controls() {
    $(".controls .next").click(function () {
      btnIdx = btnIdx + 1;
      if (current == visual.length - 1) {
        btnIdx = 0;
      }
      button.removeClass("on");
      button.eq(btnIdx).addClass("on");
      let cu = visual.eq(current);
      let ne = visual.eq(btnIdx);
      cu.css("left", "0").stop().animate({ left: "-100%" });
      ne.css("left", "100%").stop().animate({ left: "0" });
      current = btnIdx;
      return false;
    });
    $(".controls .prev").click(function () {
      btnIdx = btnIdx - 1;
      if (current == 0) {
        btnIdx = visual.length - 1;
      }
      button.removeClass("on");
      button.eq(btnIdx).addClass("on");
      let cu = visual.eq(current);
      let pr = visual.eq(btnIdx);
      cu.css("left", "0").stop().animate({ left: "100%" });
      pr.css("left", "-100%").stop().animate({ left: "0" });
      current = btnIdx;
      return false;
    });
  }
});
