$(document).ready(function () {
  let navbarButtons = $(".navbarButton");
  let pageContentDivs = $(".pageContent");

  $("#catmachina-logo").on("click", function () {
    switchPages("home-page");
  })
  navbarButtons.on("click", function () {
    const pageId = "#" + $(this).attr("id").replace("-button", "") + "-page";
    switchPages(pageId);
  });

  function switchPages(pageId) {
    pageContentDivs.each(function () {
      $(this).removeClass("selected");
      $(this).addClass("not-selected");
    });

    let displayedPage = $(pageId);
    displayedPage.addClass("selected");
    displayedPage.removeClass("not-selected");
  }
  // pageContentDivs.each(function() {
  //   const fileName = $(this).attr("id").replace("-page", "") + ".html";
  //   $(this).load(fileName);
  // });
});
