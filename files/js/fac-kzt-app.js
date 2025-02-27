//slick topbar
$(document).ready(function() {
    $(
        ".shelf ul li.helperComplement, .vitrine-produtos-relacionados ul li.helperComplement"
    ).each(function() {
        $(this).remove();
    });
    $.get("/no-cache/profileSystem/getProfile", function(user) {
        var userStatus = user.IsUserDefined;
        if (userStatus == true) {
            $("body").addClass("user-logged");
            var name_user = user.FirstName;
            if (name_user == null) {
                name_user = user.Email
            }
            $(".user__logged").find("span").html(name_user)
        } else {
            $("body").addClass("user-disconnected")
        }
    });
    $(".fac-header__top-bar").slick({
        waitForAnimate: false,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
    });
    $(".fac-full-width-slick-banners .fac-full-width-slick-banners__one").slick({
        lazyLoad: "ondemand",
        waitForAnimate: false,
        autoplay: !0,
        autoplaySpeed: 4500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        zIndex: 0,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        dots: true,
        dotsClass: "fac-full-width-slick-banners__dots-container",
    });
    $(".fac-full-width-slick-banners .fac-full-width-slick-banners__two").slick({
        lazyLoad: "ondemand",
        waitForAnimate: false,
        autoplay: !0,
        autoplaySpeed: 4500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        zIndex: 0,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        dots: true,
        dotsClass: "fac-full-width-slick-banners__dots-container",
    });
    $(".fac-full-width-slick-banners .teste-banners-one").slick({
        lazyLoad: "ondemand",
        waitForAnimate: false,
        autoplay: !0,
        autoplaySpeed: 4500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        zIndex: 0,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        dots: true,
        dotsClass: "fac-full-width-slick-banners__dots-container",
    });
    $(".fac-full-width-slick-banners .teste-banners-two").slick({
        lazyLoad: "ondemand",
        waitForAnimate: false,
        autoplay: !0,
        autoplaySpeed: 4500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        zIndex: 0,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        dots: true,
        dotsClass: "fac-full-width-slick-banners__dots-container",
    });
    $(".fac-first-shelf ul").slick({
        waitForAnimate: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        responsive: [
            { breakpoint: 1700, settings: { slidesToShow: 6, dots: false } },
            { breakpoint: 1650, settings: { slidesToShow: 5, dots: false } },
            { breakpoint: 1100, settings: { slidesToShow: 4, dots: false } },
            { breakpoint: 900, settings: { slidesToShow: 3, dots: false } },
            { breakpoint: 700, settings: { slidesToShow: 2, dots: false } },
        ],
    });
    $(".fac-special-shelf-one ul").slick({
        waitForAnimate: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        responsive: [
            { breakpoint: 1700, settings: { slidesToShow: 6, dots: false } },
            { breakpoint: 1650, settings: { slidesToShow: 5, dots: false } },
            { breakpoint: 1100, settings: { slidesToShow: 4, dots: false } },
            { breakpoint: 900, settings: { slidesToShow: 3, dots: false } },
            { breakpoint: 700, settings: { slidesToShow: 2, dots: false } },
        ],
    });
    $(".fac-second-shelf ul").slick({
        waitForAnimate: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        responsive: [
            { breakpoint: 1700, settings: { slidesToShow: 6, dots: false } },
            { breakpoint: 1650, settings: { slidesToShow: 5, dots: false } },
            { breakpoint: 1100, settings: { slidesToShow: 4, dots: false } },
            { breakpoint: 900, settings: { slidesToShow: 3, dots: false } },
            { breakpoint: 700, settings: { slidesToShow: 2, dots: false } },
        ],
    });
    $(".fac-third-shelf ul").slick({
        waitForAnimate: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        responsive: [
            { breakpoint: 1700, settings: { slidesToShow: 6, dots: false } },
            { breakpoint: 1650, settings: { slidesToShow: 5, dots: false } },
            { breakpoint: 1100, settings: { slidesToShow: 4, dots: false } },
            { breakpoint: 900, settings: { slidesToShow: 3, dots: false } },
            { breakpoint: 700, settings: { slidesToShow: 2, dots: false } },
        ],
    });
    $(".fac-fourth-shelf ul").slick({
        waitForAnimate: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        responsive: [
            { breakpoint: 1700, settings: { slidesToShow: 6, dots: false } },
            { breakpoint: 1650, settings: { slidesToShow: 5, dots: false } },
            { breakpoint: 1100, settings: { slidesToShow: 4, dots: false } },
            { breakpoint: 900, settings: { slidesToShow: 3, dots: false } },
            { breakpoint: 700, settings: { slidesToShow: 2, dots: false } },
        ],
    });
    $(".fac-fifth-shelf ul").slick({
        waitForAnimate: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        responsive: [
            { breakpoint: 1700, settings: { slidesToShow: 6, dots: false } },
            { breakpoint: 1650, settings: { slidesToShow: 5, dots: false } },
            { breakpoint: 1100, settings: { slidesToShow: 4, dots: false } },
            { breakpoint: 900, settings: { slidesToShow: 3, dots: false } },
            { breakpoint: 700, settings: { slidesToShow: 2, dots: false } },
        ],
    });
    $(".fac-sixth-shelf ul").slick({
        waitForAnimate: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        responsive: [
            { breakpoint: 1700, settings: { slidesToShow: 6, dots: false } },
            { breakpoint: 1650, settings: { slidesToShow: 5, dots: false } },
            { breakpoint: 1100, settings: { slidesToShow: 4, dots: false } },
            { breakpoint: 900, settings: { slidesToShow: 3, dots: false } },
            { breakpoint: 700, settings: { slidesToShow: 2, dots: false } },
        ],
    });
    $(".fac-seventh-shelf ul").slick({
        waitForAnimate: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        responsive: [
            { breakpoint: 1700, settings: { slidesToShow: 6, dots: false } },
            { breakpoint: 1650, settings: { slidesToShow: 5, dots: false } },
            { breakpoint: 1100, settings: { slidesToShow: 4, dots: false } },
            { breakpoint: 900, settings: { slidesToShow: 3, dots: false } },
            { breakpoint: 700, settings: { slidesToShow: 2, dots: false } },
        ],
    });
    $(".fac-eighth-shelf ul").slick({
        waitForAnimate: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        responsive: [
            { breakpoint: 1700, settings: { slidesToShow: 6, dots: false } },
            { breakpoint: 1650, settings: { slidesToShow: 5, dots: false } },
            { breakpoint: 1100, settings: { slidesToShow: 4, dots: false } },
            { breakpoint: 900, settings: { slidesToShow: 3, dots: false } },
            { breakpoint: 700, settings: { slidesToShow: 2, dots: false } },
        ],
    });
    $(".fac-ninth-shelf ul").slick({
        waitForAnimate: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type = "button" class = "slick-prev fac-full-width-slick-banners__prev-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__prev-arrow__svg" width="13.287" height="23.436" viewBox="0 0 13.287 23.436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path fill="#E41021" data-name="Path 5181" d="m 11.972113,23.426 a -4.172,4.172 0 0 0 0.757,-0.388 -1.5,1.5 0 0 0 0.209,-2.131 c -0.637,-0.692 -1.3,-1.338 -1.966,-2 L 3.9131134,11.848 c -0.037,-0.037 -0.074,-0.083 -0.148,-0.166 0.12,-0.1 0.24,-0.2 0.351,-0.3 q 4.318,-4.315 8.6279996,-8.626 a -1.585,1.585 0 0 0 0.314,-1.989 -1.537,1.537 0 0 0 -2.27,-0.438 c -0.508,0.452 -0.9779996,0.941 -1.4579996,1.421 -0.729,0.72 -1.449,1.44 -2.169,2.169 l -2.353,2.348 -2.381,2.381 c -0.692,0.692 -1.393,1.375 -2.05799998,2.085 a -1.512,1.512 0 0 0 0,1.975 c 0.535,0.572 1.09999998,1.126 1.65199998,1.679 0.784,0.794 1.578,1.578 2.362,2.362 0.72,0.72 1.449,1.44 2.169,2.169 l 2.353,2.358 1.6889996,1.691 a -2.133,2.133 0 0 0 0.877,0.471 c 0.175,-0.012 0.332,-0.012 0.501,-0.012 z" /></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next fac-full-width-slick-banners__next-arrow" style="display: inline-flex;"><svg class="fac-full-width-slick-banners__next-arrow__svg" width="13.287" height="23.436" version="1.1" viewBox="0 0 13.287 23.436" xmlns="http://www.w3.org/2000/svg"><path fill="#E41021" transform="translate(.018 -.033)" d="M1.3,23.459a4.172,4.172,0,0,1-.757-.388A1.5,1.5,0,0,1,.334,20.94c.637-.692,1.3-1.338,1.966-2l7.059-7.059c.037-.037.074-.083.148-.166-.12-.1-.24-.2-.351-.3Q4.838,7.1.528,2.789A1.585,1.585,0,0,1,.214.8,1.537,1.537,0,0,1,2.484.362c.508.452.978.941,1.458,1.421.729.72,1.449,1.44,2.169,2.169L8.464,6.3l2.381,2.381c.692.692,1.393,1.375,2.058,2.085a1.512,1.512,0,0,1,0,1.975c-.535.572-1.1,1.126-1.652,1.679-.784.794-1.578,1.578-2.362,2.362-.72.72-1.449,1.44-2.169,2.169L4.367,21.309,2.678,23a2.133,2.133,0,0,1-.877.471C1.626,23.459,1.469,23.459,1.3,23.459Z" data-name="Path 5181"/></svg></button>',
        responsive: [
            { breakpoint: 1700, settings: { slidesToShow: 6, dots: false } },
            { breakpoint: 1650, settings: { slidesToShow: 5, dots: false } },
            { breakpoint: 1100, settings: { slidesToShow: 4, dots: false } },
            { breakpoint: 900, settings: { slidesToShow: 3, dots: false } },
            { breakpoint: 700, settings: { slidesToShow: 2, dots: false } },
        ],
    });
});

function openNav() {
    document.getElementById("mySidenav").style.animation = "expand 0.3s forwards";
    //closeBtn
    document.getElementById("closeBtn").style.display = "block";
    document.getElementById("closeBtn").style.position = "fixed";
    document.getElementById("closeBtn").style.animation = "show 0.3s";
    //Overlay
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.animation = "show 0.3s";
}

function closeNav() {
    document.getElementById("mySidenav").style.animation =
        "collapse 0.3s forwards";
    //closeBtn
    document.getElementById("closeBtn").style.animation = "hide 0.3s";
    //Overlay
    document.getElementById("overlay").style.animation = "hide 0.3s";

    setTimeout(() => {
        document.getElementById("closeBtn").style.display = "none";
        document.getElementById("closeBtn").style.position = "inherit";
        document.getElementById("overlay").style.display = "none";
        //Reset Menus
        document.getElementById("main-container").style.animation = "";
        document.getElementById("main-container").style.transform =
            "translateX(0px)";
        document.getElementById("sub-container").style.animation = "";
        document.getElementById("sub-container").style.transform =
            "translateX(380px)";
    }, 300);
}

let firstDropdownOpen = false;

function firstDropDown() {
    firstDropdownOpen = !firstDropdownOpen;
    if (firstDropdownOpen) {
        document
            .querySelector("#firstDropDown i")
            .setAttribute("class", "fas fa-chevron-up");
        document.querySelector("#firstDropDown div").innerHTML = "Ver menos";
        //Handle Container
        document.getElementById("firstContainer").style.display = "block";
        document.getElementById("firstContainer").style.animation =
            "expandDropDown 0.3s forwards";
        document.getElementById("firstContainer").style.transition = "height 0.3s";
        document.getElementById("firstContainer").style.height = "410px";
    } else {
        document
            .querySelector("#firstDropDown i")
            .setAttribute("class", "fas fa-chevron-down");
        document.querySelector("#firstDropDown div").innerHTML = "Ver mais";
        //Handle Container
        document.getElementById("firstContainer").style.animation =
            "collapseDropDown 0.2s forwards";
        document.getElementById("firstContainer").style.transition = "height 0.2s";
        document.getElementById("firstContainer").style.height = "0px";
        setTimeout(() => {
            document.getElementById("firstContainer").style.display = "none";
        }, 200);
    }
}

let secondDropDownOpen = false;

function secondDropDown() {
    secondDropDownOpen = !secondDropDownOpen;

    if (secondDropDownOpen) {
        document
            .querySelector("#secondDropDown i")
            .setAttribute("class", "fas fa-chevron-up");
        document.querySelector("#secondDropDown div").innerHTML = "Ver menos";
        //Handle Container
        document.getElementById("secondContainer").style.display = "block";
        document.getElementById("secondContainer").style.animation =
            "expandDropDown 0.3s forwards";
        document.getElementById("secondContainer").style.transition = "height 0.3s";
        document.getElementById("secondContainer").style.height = "260px";
    } else {
        document
            .querySelector("#secondDropDown i")
            .setAttribute("class", "fas fa-chevron-down");
        document.querySelector("#secondDropDown div").innerHTML = "Ver mais";
        //Handle Container
        document.getElementById("secondContainer").style.animation =
            "collapseDropDown 0.2s forwards";
        document.getElementById("secondContainer").style.transition = "height 0.2s";
        document.getElementById("secondContainer").style.height = "0px";
        setTimeout(() => {
            document.getElementById("secondContainer").style.display = "none";
        }, 200);
    }
}

document.querySelectorAll(".sidenavRow").forEach((row) => {
    row.addEventListener("click", () => {
        document.getElementById("main-container").style.animation =
            "mainAway 0.3s forwards";
        document.getElementById("sub-container").style.animation =
            "subBack 0.3s forwards";
    });
});

document.getElementById("mainMenu").addEventListener("click", () => {
    document.getElementById("main-container").style.animation =
        "mainBack 0.3s forwards";
    document.getElementById("sub-container").style.animation =
        "subPush 0.3s forwards";
});

//subNavContent

function openDepCozinha() {
    document.getElementById(
        "sub-container-content"
    ).innerHTML = `<a href="/cozinha/cozinha"><div class="sidenavContentHeader">Cozinha</div></a>
    <a href="/cozinha/cozinha/aparelho-de-jantar"><div class="sidenavContent">Aparelho de Jantar</div></a>
    <a href="/cozinha/cozinha/porta-condimentos"><div class="sidenavContent">Porta-condimentos</div></a>
    <a href="/cozinha/cozinha/potes-e-porta-mantimentos"><div class="sidenavContent">Potes e porta-mantimentos</div></a>
    <a href="/cozinha/cozinha/marmitas"><div class="sidenavContent">Marmitas</div></a>
    <a href="/cozinha/cozinha/loucas-e-talheres"><div class="sidenavContent">Louças e talheres</div></a>
    <a href="/cozinha/cozinha/sousplat-e-lugar-americano"><div class="sidenavContent">Sousplat e lugar americano</div></a>
    <a href="/cozinha/cozinha/utensilios-de-cozinha"><div class="sidenavContent">Utensílios de cozinha</div></a>
    <a href="/cozinha/cozinha/bandejas"><div class="sidenavContent">Bandejas</div></a>
    <a href="/cozinha/cozinha/tacas-e-copos-de-cozinha"><div class="sidenavContent">Taças e copos de cozinha</div></a>
    <a href="/cozinha/cozinha/utilidades-de-cozinha"><div class="sidenavContent">Utilidades de cozinha</div></a>
    <a href="/cozinha/cozinha/outros-itens-de-cozinha"><div class="sidenavContent">Outros itens de cozinha</div></a>
    <a href="/cozinha/cozinha/suqueiras"><div class="sidenavContent">Suqueiras</div></a>
    <a href="/cozinha/cozinha/jarras"><div class="sidenavContent">Jarras</div></a>
    <a href="/cozinha/cozinha/tigelas"><div class="sidenavContent">Tigelas</div></a>
    <a href="/cozinha/cafe-e-cha"><div class="sidenavContentHeader">Café e chá</div></a>
    <a href="/cozinha/cafe-e-cha/cafeteiras-bules-e-chaleiras"><div class="sidenavContent">Cafeteiras, bules e chaleiras</div></a>
    <a href="/cozinha/cafe-e-cha/moedores-infusores-e-coadores"><div class="sidenavContent">Moedores, infusores e coadores</div></a>
    <a href="/cozinha/cafe-e-cha/canecas-xicaras-e-copos-termicos"><div class="sidenavContent">Canecas, xícaras e copos térmicos</div></a>
    <a href="/cozinha/cafe-e-cha/garrafas-termicas"><div class="sidenavContent">Garrafas térmicas</div></a>
    <a href="/cozinha/cafe-e-cha/outros-itens-de-café-e-cha"><div class="sidenavContent">Outros itens de café e chá</div></a>
    <a href="/cozinha/copos-e-garrafas"><div class="sidenavContentHeader">Copos e garrafas</div></a>
    <a href="/cozinha/copos-e-garrafas/garrafas-inox"><div class="sidenavContent">Garrafas inox</div></a>
    <a href="/cozinha/copos-e-garrafas/garrafas-de-plastico"><div class="sidenavContent">Garrafas de plástico</div></a>
    <a href="/cozinha/copos-e-garrafas/copos"><div class="sidenavContent">Copos</div></a>
    <a href="/cozinha/copos-e-garrafas/outros-itens-de-copos-e-garrafas"><div class="sidenavContent">Outros itens de copos e garrafas</div></a>`;
}

function openDepDecoracao() {
    document.getElementById(
        "sub-container-content"
    ).innerHTML = `<a href="/decoracao/decoracao"><div class="sidenavContentHeader">Decoração</div></a>
    <a href="/decoracao/decoracao/papeis-de-parede"><div class="sidenavContent">Papéis de parede</div></a>
    <a href="/decoracao/decoracao/quadros-placas-e-porta-retratos"><div class="sidenavContent">Quadros, placas e porta-retratos</div></a>
    <a href="/decoracao/decoracao/espelhos"><div class="sidenavContent">Espelhos</div></a>
    <a href="/decoracao/decoracao/pecas-decorativas"><div class="sidenavContent">Peças decorativas</div></a>
    <a href="/decoracao/decoracao/luminarias"><div class="sidenavContent">Luminárias</div></a>
    <a href="/decoracao/decoracao/outros-itens-de-decoracao"><div class="sidenavContent">Outros itens de decoração</div></a>
    <a href="/decoracao/relogios"><div class="sidenavContentHeader">Relógios</div></a>
    <a href="/decoracao/relogios/relogios-de-parede"><div class="sidenavContent">Relógios de parede</div></a>
    <a href="/decoracao/relogios/relogios-de-mesa"><div class="sidenavContent">Relógios de mesa</div></a>
    <a href="/decoracao/relogios/outros-itens-de-relogios"><div class="sidenavContent">Outros itens de relógios</div></a>`;
}

function openDepUtilidades() {
    document.getElementById(
        "sub-container-content"
    ).innerHTML = `<a href="/utilidades-e-acessorios/utilidades-e-acessorios"><div class="sidenavContentHeader">Utilidades e acessórios</div></a>
    <a href="/utilidades-e-acessorios/utilidades-e-acessorios/utilidades-e-acessorios-manuais"><div class="sidenavContent">Utilidades e acessórios manuais</div></a>
    <a href="/utilidades-e-acessorios/utilidades-e-acessorios/utilidades-e-acessorios-eletronicos"><div class="sidenavContent">Utilidades e acessórios eletrônicos</div></a>
    <a href="/utilidades-e-acessorios/utilidades-e-acessorios/utilidades-de-limpeza"><div class="sidenavContent">Utilidades de limpeza</div></a>
    <a href="/utilidades-e-acessorios/utilidades-e-acessorios/outros-itens-de-utilidades-e-acessorios"><div class="sidenavContent">Outros itens de utilidades e acessórios</div></a>`;
}

function openDepOrganizacao() {
    document.getElementById(
        "sub-container-content"
    ).innerHTML = `<a href="/organizacao/organizacao"><div class="sidenavContentHeader">Organização</div></a>
    <a href="/organizacao/organizacao/prateleiras-organizadores-e-divisorias"><div class="sidenavContent">Prateleiras, organizadores e divisórias</div></a>
    <a href="/organizacao/organizacao/caixas-e-cestas"><div class="sidenavContent">Caixas e cestas</div></a>
    <a href="/organizacao/organizacao/ganchos-e-suportes"><div class="sidenavContent">Ganchos e suportes</div></a>
    <a href="/organizacao/organizacao/outros-itens-de-organizacao"><div class="sidenavContent">Outros itens de organização</div></a>`;
}

function openDepInfantil() {
    document.getElementById(
        "sub-container-content"
    ).innerHTML = `<a href="/infantil-e-bebes/infantil-e-bebes"><div class="sidenavContentHeader">Infantil e bebês</div></a>
    <a href="/infantil-e-bebes/infantil-e-bebes/veiculos-de-brinquedo"><div class="sidenavContent">Veículos de brinquedo</div></a>
    <a href="/infantil-e-bebes/infantil-e-bebes/conjuntos"><div class="sidenavContent">Conjuntos</div></a>
    <a href="/infantil-e-bebes/infantil-e-bebes/bonecas-e-bonecos"><div class="sidenavContent">Bonecas e bonecos</div></a>
    <a href="/infantil-e-bebes/infantil-e-bebes/piscina"><div class="sidenavContent">Piscina</div></a>
    <a href="/infantil-e-bebes/infantil-e-bebes/fantasias"><div class="sidenavContent">Fantasias</div></a>
    <a href="/infantil-e-bebes/infantil-e-bebes/armas-de-brinquedo"><div class="sidenavContent">Armas de brinquedo</div></a>
    <a href="/infantil-e-bebes/infantil-e-bebes/bolas-e-atividade-fisica"><div class="sidenavContent">Bolas e atividade física</div></a>
    <a href="/infantil-e-bebes/infantil-e-bebes/livros-infantis"><div class="sidenavContent">Livros infantis</div></a>
    <a href="/infantil-e-bebes/infantil-e-bebes/bicicletas-patinetes-e-triciclos"><div class="sidenavContent">Bicicletas, patinetes e triciclos</div></a>
    <a href="/infantil-e-bebes/infantil-e-bebes/outros-itens-infantis"><div class="sidenavContent">Outros itens infantis</div></a>`;
}

function openDepCama() {
    document.getElementById(
        "sub-container-content"
    ).innerHTML = `<a href="/cama-banho-e-comodos/quarto-e-sala"><div class="sidenavContentHeader">Quarto e sala</div></a>
    <a href="/cama-banho-e-comodos/quarto-e-sala/tapetes"><div class="sidenavContent">Tapetes</div></a>
    <a href="/cama-banho-e-comodos/quarto-e-sala/almofadas"><div class="sidenavContent">Almofadas</div></a>
    <a href="/cama-banho-e-comodos/quarto-e-sala/capas"><div class="sidenavContent">Capas</div></a>
    <a href="/cama-banho-e-comodos/quarto-e-sala/utilidades-de-quarto-e-sala"><div class="sidenavContent">Utilidades de quarto e sala</div></a>
    <a href="/cama-banho-e-comodos/quarto-e-sala/outros-itens-de-quarto-e-sala"><div class="sidenavContent">Outros itens de quarto e sala</div></a>
    <a href="/cama-banho-e-comodos/incensos-velas-e-aromatizantes"><div class="sidenavContentHeader">Incensos, velas e aromatizantes</div></a>
    <a href="/cama-banho-e-comodos/incensos-velas-e-aromatizantes/incensos-e-incensarios"><div class="sidenavContent">Incensos e incensários</div></a>
    <a href="/cama-banho-e-comodos/incensos-velas-e-aromatizantes/velas"><div class="sidenavContent">Velas</div></a>
    <a href="/cama-banho-e-comodos/incensos-velas-e-aromatizantes/difusores"><div class="sidenavContent">Difusores</div></a>
    <a href="/cama-banho-e-comodos/incensos-velas-e-aromatizantes/outros-itens-aromatizantes"><div class="sidenavContent">Outros itens de aromatizantes</div></a>
    <a href="/cama-banho-e-comodos/banho"><div class="sidenavContentHeader">Banho</div></a>
    <a href="/cama-banho-e-comodos/banho/toalhas"><div class="sidenavContent">Toalhas</div></a>
    <a href="/cama-banho-e-comodos/banho/ganchos-e-prateleiras-de-banho"><div class="sidenavContent">Ganchos e prateleiras de banho</div></a>
    <a href="/cama-banho-e-comodos/banho/lixeiras"><div class="sidenavContent">Lixeiras</div></a>
    <a href="/cama-banho-e-comodos/banho/tapetes-de-banheiro"><div class="sidenavContent">Tapetes de banheiro</div></a>
    <a href="/cama-banho-e-comodos/banho/utilidades-de-banho"><div class="sidenavContent">Utilidades de banho</div></a>
    <a href="/cama-banho-e-comodos/banho/outros-itens-de-banho"><div class="sidenavContent">Outros itens de banho</div></a>`;
}

function openDepFloricultura() {
    document.getElementById(
        "sub-container-content"
    ).innerHTML = `<a href="/floricultura-e-jardim/floricultura-e-jardim"><div class="sidenavContentHeader">Floricultura e jardim</div></a>
    <a href="/floricultura-e-jardim/floricultura-e-jardim/vasos-e-cachepots"><div class="sidenavContent">Vasos e cachepots</div></a>
    <a href="/floricultura-e-jardim/floricultura-e-jardim/plantas-e-flores-decorativas"><div class="sidenavContent">Plantas e flores decorativas</div></a>
    <a href="/floricultura-e-jardim/floricultura-e-jardim/ornamentos-de-floricultura-e-jardim"><div class="sidenavContent">Ornamentos de floricultura e jardim</div></a>
    <a href="/floricultura-e-jardim/floricultura-e-jardim/outros-itens-de-floricultura-e-jardim"><div class="sidenavContent">Outros itens de floricultura e jardim</div></a>`;
}

function openDepBar() {
    document.getElementById(
        "sub-container-content"
    ).innerHTML = `<a href="/bar/bar"><div class="sidenavContentHeader">Bar</div></a>
    <a href="/bar/bar/copos-tacas-e-canecas-de-bar"><div class="sidenavContent">Copos, taças e canecas de bar</div></a>
    <a href="/bar/bar/baldes-de-bar"><div class="sidenavContent">Baldes de bar</div></a>
    <a href="/bar/bar/coqueteleiras"><div class="sidenavContent">Coqueteleiras</div></a>
    <a href="/bar/bar/jogos-de-bar"><div class="sidenavContent">Jogos de bar</div></a>
    <a href="/bar/bar/vinho"><div class="sidenavContent">Vinho</div></a>
    <a href="/bar/bar/decoracao-de-bar"><div class="sidenavContent">Decoração de bar</div></a>
    <a href="/bar/bar/outros-itens-de-bar"><div class="sidenavContent">Outros itens de bar</div></a>`;
}

function openDepPapelaria() {
    document.getElementById(
        "sub-container-content"
    ).innerHTML = `<a href="/papelaria/papelaria"><div class="sidenavContentHeader">Papelaria</div></a>
    <a href="/papelaria/papelaria/quadros-de-recado-e-planejamento"><div class="sidenavContent">Quadros de recado e planejamento</div></a>
    <a href="/papelaria/papelaria/agendas-planners-e-blocos-de-anotacao"><div class="sidenavContent">Agendas, planners e blocos de anotação</div></a>
    <a href="/papelaria/papelaria/canetas-lapis-pinceis-e-marca-texto"><div class="sidenavContent">Canetas, lápis, pincéis e marca-texto</div></a>
    <a href="/papelaria/papelaria/porta-canetas-e-objetos"><div class="sidenavContent">Porta-canetas e objetos</div></a>
    <a href="/papelaria/papelaria/globos-terrestres"><div class="sidenavContent">Globos terrestres</div></a>
    <a href="/papelaria/papelaria/estojos"><div class="sidenavContent">Estojos</div></a>
    <a href="/papelaria/papelaria/bolsa-mochila-escolar"><div class="sidenavContent">Bolsa/Mochila escolar</div></a>
    <a href="/papelaria/papelaria/outros-itens-de-papelaria"><div class="sidenavContent">Outros itens de papelaria</div></a>
    <a href="/papelaria/livros"><div class="sidenavContentHeader">Livros</div></a>
    <a href="/papelaria/livros/livros"><div class="sidenavContent">Livros</div></a>`;
}

function openDepMoveis() {
    document.getElementById(
        "sub-container-content"
    ).innerHTML = `<a href="/moveis/moveis"><div class="sidenavContentHeader">Móveis</div></a>
    <a href="/moveis/moveis/pufes"><div class="sidenavContent">Pufes</div></a>
    <a href="/moveis/moveis/baus"><div class="sidenavContent">Baús</div></a>
    <a href="/moveis/moveis/armarios-e-cabideiros-de-chao"><div class="sidenavContent">Armários e cabideiros de chão</div></a>
    <a href="/moveis/moveis/outros-itens-de-moveis"><div class="sidenavContent">Outros itens de móveis</div></a>
    <a href="/moveis/moveis/mesas-de-varanda"><div class="sidenavContent">Mesas de varanda</div></a>`;
}

function openDepBolsas() {
    document.getElementById(
        "sub-container-content"
    ).innerHTML = `<a href="/bolsas-e-necessaires/bolsas-e-necessaires"><div class="sidenavContentHeader">Bolsas e necessaires</div></a>
    <a href="/bolsas-e-necessaires/bolsas-e-necessaires/bolsas-e-mochilas"><div class="sidenavContent">Bolsas e mochilas</div></a>
    <a href="/bolsas-e-necessaires/bolsas-e-necessaires/bolsas-termicas"><div class="sidenavContent">Bolsas térmicas</div></a>
    <a href="/bolsas-e-necessaires/bolsas-e-necessaires/necessaires-e-porta-moedas"><div class="sidenavContent">Necessaires e porta-moedas</div></a>
    <a href="/bolsas-e-necessaires/bolsas-e-necessaires/outros-itens-de-bolsas-e-necessaires"><div class="sidenavContent">Outros itens de bolsas e necessaires</div></a>`;
}

function openDepJogos() {
    document.getElementById(
        "sub-container-content"
    ).innerHTML = `<a href="/jogos/jogos"><div class="sidenavContentHeader">Jogos</div></a>
    <a href="/jogos/jogos/jogos-de-mesa"><div class="sidenavContent">Jogos de mesa</div></a>
    <a href="/jogos/jogos/jogos-diversos"><div class="sidenavContent">Jogos diversos</div></a>`;
}
//end of dropdown menu

//busca mobile
function openBuscaMobile() {
    document.getElementsByClassName(
        "fac-header__main-content-desktop"
    )[0].style.display = "flex";
    document.getElementsByClassName(
        "fac-header__main-content-desktop"
    )[0].style.position = "fixed";
    document.getElementsByClassName(
        "fac-header__main-content-desktop"
    )[0].style.width = "calc(100% - 20px)";
    document.getElementsByClassName(
        "fac-header__main-content-desktop__search"
    )[0].style.width = "100%";
    document.getElementsByClassName("fulltext-search-box")[0].style.fontSize =
        "16px";
    document.getElementsByClassName(
        "fac-header__main-content__menu-desktop"
    )[0].style.display = "none";
    document.getElementById(
        "fac-header__main-content-desktop__logo"
    ).style.display = "none";
    document.getElementById("busca-mobile__overlay").style.display = "block";
    document.getElementsByClassName("busca")[0].style.width = "100%";
    document.getElementsByClassName("busca")[0].style.height = "50px";
}

function closeBuscaMobile() {
    document.getElementsByClassName(
        "fac-header__main-content-desktop"
    )[0].style.display = "none";
}
//end of busca mobile