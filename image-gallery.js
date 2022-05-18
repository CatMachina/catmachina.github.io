$(document).ready(function() {
    // const laptopDimensions = window.matchMedia("(max-width: 1024px)");
    // const tabletDimensions = window.matchMedia("(max-width: 768px)");
    // let verticalImageDistribution = [];
    // laptopDimensions.addEventListener("change", function(mediaQueryList) {
    //     if(mediaQueryList.matches) {
    //         verticalImageDistribution = [4, 3, 2, 1, 2, 3, 4];
    //     }
    // })

    // let verticalImageGallery = $("#homepage-image-gallery-1");
    // let horizontalImageGallery = $("#homepage-image-gallery-2");
    // const verticalImageWidth = $(window).width();
    // const verticalImageHeight = verticalImageWidth * 4 / 3.0;

    let aboutMeCollectionLeft = $("#image-collection-left");
    let aboutMeCollectionRight = $("#image-collection-right");

    addImagesCollection(19, "vertical", "Blue", aboutMeCollectionLeft);
    addImagesCollection(21, "horizontal", "Orange", aboutMeCollectionRight);

    let displayImage = $("#about_me-display-image");
    $(".aboutMeHoverImage").on("click", function() {
        displayImage.attr("src", $(this).attr("src"));
    });

    function addImagesCollection(numImages, gallery, tintColor, imageCollection) {
        for(let i = 1; i <= numImages; ++i) {
            let triangleTint = $("<div>");
            triangleTint.addClass("triangleTint");
            triangleTint.addClass(tintColor);
            let img = $("<img>");
            img.attr("src", "assets/images/image_gallery-" + gallery + "/" + gallery + "-image-" + i + ".jpg");
            img.addClass("aboutMeHoverImage");
            let div = $("<div>");
            triangleTint.appendTo(div);
            div.addClass("aboutMeHoverImageHolder");
            img.appendTo(div);
            div.appendTo(imageCollection);
        }
    }
});