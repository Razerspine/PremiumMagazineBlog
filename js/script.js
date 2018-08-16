// Content slider
$(document).ready(function () {

    var slide = $(".slide");
    var visible = 3;
    var animationDelay = 300;
    var sliderContainer = $(".slider_container");

    var width = sliderContainer.outerWidth(true);
    var countElem = slide.length;
    var liWidth = width / countElem;
    var endPoint = width - (liWidth * visible);
    var startPoint = (width / visible) - (liWidth * visible);

    setCenteredSlider(width, visible);

    $(".slider").resize(function() {
        setCenteredSlider(width, visible);
    });

    $(".slider_btn_next").click(function () {
        var offset = getOffset();
        if (offset >= 0) {
            var startOffset = endPoint * -1;
            setOffset(startOffset)
        } else {
            sliderContainer.animate({left: "+=" + liWidth + "px"}, animationDelay);
        }
    });

    $(".slider_btn_prev").click(function () {
        var offset = getOffset();
        if (offset === endPoint * -1) {
            var endOffset = startPoint;
            setOffset(endOffset)
        } else {
            sliderContainer.animate({left: "-=" + liWidth + "px"}, animationDelay);
        }
    });

    function setCenteredSlider(width, visible) {
        var centered = (width / visible) * -1;
        setOffset(centered);
    }


    function setOffset(offset) {
        sliderContainer.css('left', offset);
    }

    function getOffset() {
        var offsetRaw = sliderContainer.css('left');
        var offsetInt = parseInt(offsetRaw, 10);

        return offsetInt;
    }
});

// Categories tabs
$(document).ready(function () {

    var tabs = $(".content_nav").find(".content_categories");
    var tabsBadge = $(".content_categories").children("span");
    var tabContent = $(".container_tabs").children("div");
    var tab1 = $("#tab1");
    var tab2 = $("#tab2");
    var tab3 = $("#tab3");
    var tabValue1 = tab1.attr("id");
    var tabValue2 = tab2.attr("id");
    var tabValue3 = tab3.attr("id");

    $(tabs).click(function () {

        var tabsAttr = $(this).attr("data-tab");
        var currentBadge = $(this).find(tabsBadge);

        if (tabsAttr === tabValue1) {
            tabContent.removeClass("active_tab");
            tab1.addClass("active_tab");
        }

        if (tabsAttr === tabValue2) {
            tabContent.removeClass("active_tab");
            tab2.addClass("active_tab");
        }

        if (tabsAttr === tabValue3) {
            tabContent.removeClass("active_tab");
            tab3.addClass("active_tab");
        }

        if ($(tabsBadge).hasClass("active")) {
            tabsBadge.removeClass("active");
            currentBadge.addClass("active");
        }
    });

    $(tabs).hover(
        function () {
            $(this).css({"color": "#5261ac"});
        },

        function () {
            $(this).css({"color": "#ffffff"});
        }
    );
});

// Menu collapse
$(document).ready(function () {

    var titleList = $(".content_section_dropDown");

    $(titleList).click(function () {

        var currentList = $(this).find(".drop_down");
        var currentContent = $(this).find(".toggle_content");
        var contentList = $(".toggle_content");
        var listArrow = $(".drop_down");

        contentList.slideUp("normal");

        if ($(listArrow).hasClass("active_list")) {
            $(listArrow).removeClass("active_list");
        }

        if ($(currentContent).hasClass("list") || $(currentList).hasClass("active_list")) {
            $(contentList).removeClass("list");
            $(listArrow).removeClass("active_list");
        } else {
            $(currentContent).slideDown("normal");
            currentContent.addClass("list");
            $(currentList).addClass("active_list");
        }
    });
});

// Navigation Menu
$(document).ready(function () {
    var navMenu = $(".header_menu").children("div");
    var content = $("body");
    $(navMenu).hover(
        function () {
            var currentColor = $(this).attr("data-hex");
            var currentMenu = $(this).find(".sub_menu");
            $(currentMenu).css({"display": "block"});
            $(currentMenu).css({"backgroundColor": currentColor});
        },

        function () {
            var currentMenu = $(this).find(".sub_menu");
            $(currentMenu).css({"display": "none"});
            $(currentMenu).css({"backgroundColor": "#ffffff"});
        });

    (function () {

        var content = $(".main_content_img img");
        var mainPreview = $(".main_content_container img");

        $(content).click(function () {

            var currentImg = $(this).attr("src");
            mainPreview.attr("src", currentImg);

            $(mainPreview).click(function () {
                $(this).attr("src", "images/main_content_avatar.png");
            });
        })
    })();
});



