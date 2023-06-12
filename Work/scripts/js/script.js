let infoPage = document.getElementById("pageDescription");
let moreInterest = document.getElementById("moreInterest");
let sideMenu = document.getElementById("side-menu");
let asideDrawer = document.getElementById("drawer");
let menuHolder = document.getElementById("menu-holder");
let feedbackHolder = document.getElementById("feedback-holder");
//Get the button
let scrollBtn = document.getElementById("scrollToTop");

const setHeight = () => {
    let minimum_height = sideMenu.clientHeight;
    // to cover cases when info-pages has more content than side-menu
    if (
        infoPage.clientHeight > sideMenu.clientHeight &&
        $(window).width() > 1199
    ) {
        $("#side-menu").css("minHeight", infoPage.clientHeight);
    } else {
        $("#side-menu").css("minHeight", 0);
    }
    // set info-page height to the height of the side menu provided the info-page is not higher than the side-menu
    $("#pageDescription").css("minHeight", minimum_height);
    // set a max-height to avoid overlapping when the menu are opened.
    $("#side-menu").css("maxHeight", minimum_height + 100);
};
// setHeight()

// // Mobile sidebar display at 991px
if (infoPage) {
    if ($(window).width() < 1199) {
        sideMenu.classList.add("aside-nav-folded");
        infoPage.classList.add("col-md-12");
        if (moreInterest) {
            moreInterest.classList.add("col-md-12");
        }
    } else {
        sideMenu.classList.add("aside-nav");
    }
}

// About Us - Pause video on close Modal
setInterval(() => {
    if (document.getElementById("about_modal")?.style.display != "block") {
        $("#youtube-video").each(function () {
            var frame = document.getElementById("youtube-video");

            frame.contentWindow.postMessage(
                '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
                "*"
            );
        });
    }
}, 1000);

// About Us - Country Tip Pointers
$(document).ready(function () {
    tippy(".tippy", {
        theme: "light",
        size: "big",
        arrow: true,
    });
});

// Dynamically Changing Styles and Classes to toggle side menu
const sideMenuToogle = () => {
    if (sideMenu.classList.contains("aside-nav")) {
        infoPage.classList.remove("col-md-9");
        infoPage.classList.add("col-md-12");

        sideMenu.classList.remove("aside-nav");
        sideMenu.classList.add("aside-nav-folded");

        if (moreInterest) {
            moreInterest.classList.remove("col-md-10");
            moreInterest.classList.add("col-md-12");
        }
    } else {
        infoPage.classList.remove("col-md-12");
        infoPage.classList.add("col-md-9");

        sideMenu.classList.remove("aside-nav-folded");
        sideMenu.classList.add("aside-nav");

        if (moreInterest) {
            moreInterest.classList.remove("col-md-12");
            moreInterest.classList.add("col-md-10");
        }
    }

    $("#side-menu .collapse").collapse("hide");
};

let comment_trigger = $(".aside-menu-list .comment-sec .img-say-to-us-sm");
comment_trigger.click(() => {
    console.log("hello man");
    sideMenuToogle();
    expandFeedback();
});

// feedback expand div function
const expandFeedback = () => {
    menuHolder.style.display = "none";
    feedbackHolder.classList.add("display-feedback");
    scroll({
        top: 400,
        right: 0,
        behavior: "smooth",
    });
};

// Close feedback form
const closeFeedback = () => {
    feedbackHolder.classList.remove("display-feedback");
    menuHolder.style.display = "block";
    scroll({
        top: 400,
        right: 0,
        behavior: "smooth",
    });
};

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
    scrollFunction();
};

scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};


// Hover child item to highlight the parent
// let elementN = document.querySelectorAll(".panel-wrapper");

// function getNestedNav() {
//   for (let i = 0; i < elementN.length; i++) {
//     const nestedElement = elementN[i].children[1].children;

//     for (let j = 0; j < nestedElement.length; j++) {
//       if (j < j + 1) {
//         nestedElement[j].addEventListener("mouseover", function () {
//           elementN[i].children[0].children[0].children[
//             j
//           ].children[0].style.color = "#ee7e01";
//         });
//         nestedElement[j].addEventListener("mouseout", function () {
//           elementN[i].children[0].children[0].children[
//             j
//           ].children[0].style.color = "";
//         });
//       }
//     }
//     // for (let j = 0; j < nestedElement.length; j++) {
//     //  if(nestedElement[j].children[0].children[0].children.length < 1 ){
//     //      elementN[i].children[0].children[0].children[j].children[0].children[0].style.visibility = 'hidden'
//     //  }

//     // }
//   }
// }

// getNestedNav();