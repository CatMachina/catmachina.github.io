$(document).ready(function () {
  let navbarButtons = $(".navbarButton");
  let pageContentDivs = $(".pageContent");

  navbarButtons.on("click", function () {
    pageContentDivs.each(function () {
      $(this).removeClass("selected");
      $(this).addClass("not-selected");
    });

    const pageId = "#" + $(this).attr("id").replace("-button", "") + "-page";
    let displayedPage = $(pageId);
    displayedPage.addClass("selected");
    displayedPage.removeClass("not-selected");
  });

  // pageContentDivs.each(function() {
  //   const fileName = $(this).attr("id").replace("-page", "") + ".html";
  //   $(this).load(fileName);
  // });
});
