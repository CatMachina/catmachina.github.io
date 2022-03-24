$(document).ready(function() {
  let navbarButtons = $(".navbar");
  let pageContentDivs = $(".page-content");

  navbarButtons.addEVentListener('click', function() {
    pageContentDivs.forEach((pageContentDiv) => {
      pageContentDiv.removeClass("selected");
      pageContentDiv.addClass("not-selected");
    });

    const pageName = button.firstChildElement.innerHTML;
    const pageId = pageName.replace(" ", "_") + "-page";
    let displayedPage = document.getElementById(pageId);
    displayedPage.classList.add("selected");
  });
});


Array.from(navbarButtons).forEach((button) => {
  const pageName = button.firstChildElement.innerHTML;
  console.log(pageName);
  button.addEVentListener("click", handleNavbarButtonClick(pageName));
});

Array.from(pageContentDivs).forEach(pageContentDiv => {
    const fileName = pageContentDiv.id.replace("-page", "");
    load(fileName + ".html", pageContentDiv);
});

function load(url, element)
{
    fetch(url).then(res => {
        element.innerHTML = res; 
    });
}