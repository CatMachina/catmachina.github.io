
let navbarButtons = document.getElementsByClassName("navbar");
let pageContentDivs = document.getElementsByClassName("page-content");

function handleNavbarButtonClick(pageName) {
  Array.from(pageContentDivs).forEach((pageContentDiv) => {
    pageContentDiv.classList.remove("selected");
    pageContentDiv.classList.add("not-selected");
  });
  const pageId = pageName.replace(" ", "_") + "-page";
  let displayedPage = document.getElementById(pageId);
  displayedPage.classList.add("selected");
}

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